/* ═════════════════ SU MA SUSHI — App ═════════════════ */
"use strict";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const BRL = v => v.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const slug = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");

/* ═══ PRELOADER ═══ */
(() => {
  const bar = $("#preloaderBar"); let p = 0;
  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 22);
    bar.style.width = p + "%";
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        $("#preloader").classList.add("done");
        document.body.classList.add("loaded");
      }, 350);
    }
  }, 160);
})();

/* ═══ CURSOR ═══ */
(() => {
  const dot = $("#cursorDot"), ring = $("#cursorRing");
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
  (function loop(){ rx += (mx-rx)*.16; ry += (my-ry)*.16;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", e => {
    ring.classList.toggle("hovered", !!e.target.closest("[data-hover],a,button,input"));
  });
})();

/* ═══ NAV ═══ */
const nav = $("#nav");

addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 40);
}, {passive:true});

const burger = $("#burger");
const navLinks = $("#navLinks");

burger.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
  } else {
    closeCart();
    burger.classList.add("open");
    navLinks.classList.add("open");
    document.body.classList.add("menu-open");
  }
});

navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

/* ═══ REVEAL ═══ */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), {threshold:.12});
$$("[data-reveal]").forEach(el => io.observe(el));

/* ═══ HERO PARALLAX ═══ */
const heroBg = $("#heroBg");
addEventListener("scroll", () => {
  const y = scrollY;
  if (y < innerHeight * 1.2) heroBg.style.transform = `translateY(${y * .32}px) scale(${1 + y * .00012})`;
}, {passive:true});

/* ═══ COUNTERS ═══ */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, target = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0);
  const t0 = performance.now(), dur = 1800;
  (function step(t){ const k = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - k, 4);
    el.textContent = (target * ease).toFixed(dec);
    if (k < 1) requestAnimationFrame(step); })(t0);
}), {threshold:.6});
$$("[data-count]").forEach(el => cio.observe(el));

/* ═══ OPEN STATUS / HOURS ═══ */
(() => {
  const now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes()/60;
  const close = (day === 5 || day === 6) ? 23.5 : 23;
  const open = h >= 19 && h < close;
  const dot = $("#openStatus .pulse-dot"), txt = $("#openStatusText");
  dot.classList.toggle("closed", !open);
  txt.textContent = open ? "aberto agora · até " + (close === 23.5 ? "23h30" : "23h")
    : (h < 19 ? "abre hoje às 19h" : "abre amanhã às 19h");
  const li = document.querySelector(`#hoursList li[data-day="${day}"]`);
  if (li) li.classList.add("today");
  const note = $("#hoursNote");
  note.textContent = open ? "Estamos abertos — venha nos visitar!"
    : (h < 19 ? "Aberto hoje a partir das 19h" : "Aberto amanhã a partir das 19h");
})();

/* ═══ MENU ═══ */
const grid = $("#menuGrid"), tabsBox = $("#menuTabs"), searchInput = $("#menuSearch");

let activeCat = "promos", query = "";
let cart = [], mode = "delivery";

tabsBox.innerHTML = CATEGORIES.map(c =>
  `<button class="tab-btn ${c.id===activeCat?"active":""}" data-cat="${c.id}" data-hover>${c.label}</button>`).join("");

function dishHTML(item, i) {
  const inCart = cart.find(c => c.name === item.name);
  const qty = inCart ? inCart.qty : 0;
  const img = item.img || IMG.combos;
  return `<article class="dish" style="animation-delay:${Math.min(i*45, 400)}ms">
    <div class="dish-img">
      ${item.tag ? `<span class="dish-tag">${item.tag}</span>` : ""}
      <img src="${img}" alt="${item.name}" loading="lazy">
    </div>
    <div class="dish-body">
      <h3 class="dish-name"><span>${item.name}</span><span class="price">${BRL(item.price)}</span></h3>
      ${item.desc ? `<p class="dish-desc">${item.desc}</p>` : `<p class="dish-desc">Bebida gelada para acompanhar.</p>`}
      <div class="dish-foot">
        <span class="dish-unit">${item.unit || "porção"}</span>
        <button class="add-btn" style="display:${qty ? "none" : "inline-flex"}" data-add="${item.name}" data-hover>+ Adicionar</button>
        <div class="stepper" style="display:${qty ? "flex" : "none"}">
          <button data-dec="${item.name}" data-hover>−</button><span>${qty}</span><button data-inc="${item.name}" data-hover>+</button>
        </div>
      </div>
    </div>
  </article>`;
}

function renderMenu() {
  const q = slug(query.trim());
  const items = MENU.filter(it => {
    const okCat = activeCat === "all" || it.cat === activeCat;
    const okQ = !q || slug(it.name + " " + (it.desc || "")).includes(q);
    return okCat && okQ;
  });
  grid.innerHTML = items.length
    ? items.map(dishHTML).join("")
    : `<p class="menu-empty">Nenhum prato encontrado para “${query}” — ごめんなさい.</p>`;
}
renderMenu();

tabsBox.addEventListener("click", e => {
  const btn = e.target.closest("[data-cat]"); if (!btn) return;
  activeCat = btn.dataset.cat;
  $$(".tab-btn").forEach(b => b.classList.toggle("active", b === btn));
  renderMenu();
});
searchInput.addEventListener("input", e => { query = e.target.value; renderMenu(); });

grid.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");

  if (add) addToCart(add.dataset.add, 1);
  else if (inc) addToCart(inc.dataset.inc, 1);
  else if (dec) addToCart(dec.dataset.dec, -1);
});

/* ═══ CART ═══ */
const drawer = $("#cartDrawer"), overlay = $("#cartOverlay");

function addToCart(name, delta) {
  console.log("ADD TO CART FOI CHAMADO:", name, delta);

  const item = MENU.find(m => m.name === name);
  if (!item) return;

  let row = cart.find(c => c.name === name);

  if (!row) {
    row = {...item, qty:0};
    cart.push(row);
  }

  row.qty += delta;

  if (row.qty <= 0) {
    cart = cart.filter(c => c !== row);
  }

  updateCart();
  renderMenu();
}

function cartRows() {
  return cart.map(c => `<div class="cart-item">
    <img src="${c.img || IMG.combos}" alt="">
    <div class="cart-item-info"><h5>${c.name}</h5><div class="ci-price">${BRL(c.price)} × ${c.qty} = ${BRL(c.price*c.qty)}</div></div>
    <div class="ci-stepper">
      <button data-dec="${c.name}" data-hover>−</button><span>${c.qty}</span><button data-inc="${c.name}" data-hover>+</button>
    </div>
    <button class="ci-remove" data-del="${c.name}" data-hover>✕</button>
  </div>`).join("");
}

function updateCart() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const badge = $("#cartCount");
  badge.textContent = count;
  badge.classList.toggle("show", count > 0);
  badge.classList.remove("pop"); void badge.offsetWidth; if (count) badge.classList.add("pop");
  $("#cartItems").innerHTML = cartRows();
  $("#cartSubtotal").textContent = BRL(sub);
  $("#cartTotal").textContent = BRL(sub);
  drawer.classList.toggle("empty", !cart.length);
  $("#checkoutBtn").style.opacity = cart.length ? 1 : .45;
}

function openCart(){ drawer.classList.add("open"); overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeCart(){ drawer.classList.remove("open"); overlay.classList.remove("open"); document.body.style.overflow = ""; }
$("#cartBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
$("#cartEmptyBtn").addEventListener("click", () => { closeCart(); $("#cardapio").scrollIntoView({behavior:"smooth"}); });
$("#cartItems").addEventListener("click", e => {
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), del = e.target.closest("[data-del]");
  if (inc) addToCart(inc.dataset.inc, 1);
  else if (dec) addToCart(dec.dataset.dec, -1);
  else if (del) { cart = cart.filter(c => c.name !== del.dataset.del); updateCart(); renderMenu(); }
});
$("#modeDelivery").addEventListener("click", () => setMode("delivery"));
$("#modePickup").addEventListener("click", () => setMode("pickup"));
function setMode(m){ mode = m;
  $("#modeDelivery").classList.toggle("active", m === "delivery");
  $("#modePickup").classList.toggle("active", m === "pickup");
  $("#deliveryRow").style.display = m === "delivery" ? "flex" : "none";
}
setMode("delivery");

/* checkout → WhatsApp */
$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) { toast("Sua bandeja está vazia"); return; }
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const lines = cart.map(c => `• ${c.qty}x ${c.name} — ${BRL(c.price*c.qty)}`);
  const msg = [
    "Olá, Su Ma Sushi! ✦", "",
    "*NOVO PEDIDO PELO SITE*", "",
    ...lines, "",
    `Subtotal: ${BRL(sub)}`,
    `Modalidade: ${mode === "delivery" ? "🛵 Entrega (taxa a combinar)" : "🥡 Retirada no balcão"}`,
    "", "Aguardo a confirmação! 🍣"
  ].join("\n");
  open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* toast */
let toastTimer;

function toast(msg) {
  const t = $("#toast");
  const msgEl = $("#toastMsg");

  if (!t || !msgEl) return;

  clearTimeout(toastTimer);

  // atualiza a mensagem
  msgEl.textContent = msg;

  // mostra
  t.classList.add("show");

  // esconde completamente depois de 2,4 segundos
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
  }, 2400);
}

/* ═══ REVIEWS ═══ */
const track = $("#reviewTrack"), dotsBox = $("#reviewDots");
track.innerHTML = REVIEWS.map(r => `<div class="review">
  <div class="review-stars">${"★".repeat(r.stars)}</div>
  <p class="review-quote">${r.text}</p>
  <div class="review-author">${r.author}<small>${r.meta}</small></div>
</div>`).join("");
dotsBox.innerHTML = REVIEWS.map((_, i) => `<button data-rev="${i}" class="${i===0?"active":""}" data-hover></button>`).join("");
let revIdx = 0, revTimer;
function goRev(i) {
  revIdx = (i + REVIEWS.length) % REVIEWS.length;
  track.style.transform = `translateX(-${revIdx * 100}%)`;
  $$("#reviewDots button").forEach((d, j) => d.classList.toggle("active", j === revIdx));
  clearInterval(revTimer); revTimer = setInterval(() => goRev(revIdx + 1), 6500);
}
$("#revNext").addEventListener("click", () => goRev(revIdx + 1));
$("#revPrev").addEventListener("click", () => goRev(revIdx - 1));
dotsBox.addEventListener("click", e => { const b = e.target.closest("[data-rev]"); if (b) goRev(+b.dataset.rev); });
revTimer = setInterval(() => goRev(revIdx + 1), 6500);

/* ═══ LIGHTBOX ═══ */
const lb = $("#lightbox"), lbImg = $("#lightboxImg");
$$(".gal-item").forEach(fig => fig.addEventListener("click", () => {
  lbImg.src = fig.querySelector("img").src; lb.classList.add("open");
}));
$("#lightboxClose").addEventListener("click", () => lb.classList.remove("open"));
lb.addEventListener("click", e => { if (e.target === lb) lb.classList.remove("open"); });
addEventListener("keydown", e => { if (e.key === "Escape") { lb.classList.remove("open"); closeCart(); } });
