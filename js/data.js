/* ═══ SU MA SUSHI — Dados do cardápio ═══ */
const IMG = {
  nigiri:"assets/img/10_Salmon_sushi_nigiri_on_a_small_dark.png",
  combos:"assets/img/8_Philadelphia_Roll_3_Different_Styles.png",
  sashimi:"assets/img/3_Fresh_Sashimi_Platter_with_Salmon.png",
  temaki:"assets/img/7_10_100_Temaki_Sushi_Stock_Photos.png",
  temaki2:"assets/img/4_Tofu_Temaki_Sushi_Easy_Hand_Rolls.png",
  poke:"assets/img/5_Salmon_Poke_Bowl.png",
  poke2:"assets/img/6_Easy_Spicy_Salmon_Poke_Bowl_El_Mundo.png",
  uramaki:"assets/img/2_Japanese_Sushi_Rolls_Philadelphia.png"
};

const WHATSAPP = "5547992736707";

const MENU = [
/* ── PROMOÇÕES ── */
{cat:"promos", name:"Combo 50 Peças", price:59.99, tag:"Promoção", img:"assets/img/combo-50pecas.png", desc:"10 hot filadélfia · 10 hossomaki salmão · 10 hossomaki pepino · 5 uramaki especial · 5 uramaki salad · 5 niguiri skin · 5 joe kappamaki. Válido no Pix ou dinheiro."},
{cat:"promos", name:"Sushi Empanado 20 peças", price:29.90, tag:"Quarta & Sábado", img:"assets/img/sushi-empanado-20peças.png", desc:"Sushi empanado crocante — uma delícia da casa."},
{cat:"promos", name:"Promoção 3 Temakis Hot", price:59.90, tag:"Quarta-feira", img:"assets/img/promoção-3-temakis-hot.png", desc:"Três temakis quentes na medida certa para dividir (ou não)."},
{cat:"promos", name:"50 peças de R$149 por R$129", price:129.00, tag:"Sextou!", img:"assets/img/50-peças.png", desc:"Serve 2: uramaki filadélfia, hossomaki, sashimi, hot filadélfia, joe salmão, joe gorgonzola e Su Ma Tropical."},
{cat:"promos", name:"40 peças + 1 Temaki Hot", price:99.00, tag:"Sabadou!", img:"assets/img/40peças-1temaki-hot.png", desc:"Combinado generoso com temaki hot de brinde."},
{cat:"promos", name:"60 peças + 1 Temaki Hot", price:119.00, tag:"Domingou!", img:"assets/img/60peças-1temaki-hot.png", desc:"O combinado da família, com temaki hot incluso."},
{cat:"promos", name:"Combo 20 Hot Variados", price:49.00, tag:"Do mês", img:"assets/img/20-hots-variados.png", desc:"20 hots variados — a promoção mais pedida do mês."},
{cat:"promos", name:"Barca Natalina 45 peças", price:149.00, tag:"Especial", img:"assets/img/barca-natalina-45peças.png", desc:"Barca festiva com seleção da casa."},
{cat:"promos", name:"Combo 50 peças a R$1,00 a peça", price:50.00, tag:"Do mês", img:"assets/img/combo-50pecas.png", desc:"Uramaki salmão grelhado, skin, kani, hossomaki salmão e pepino."},
{cat:"promos", name:"Combo 60 peças Econômica", price:69.99, tag:"Do mês", img:"assets/img/60peças-economicas.png", desc:"10 hot filadélfia, uramaki skin, salmão grelhado, kani, hossomaki salmão e pepino."},
{cat:"promos", name:"Combo 30 peças", price:49.99, tag:"Promoção", img:"assets/img/combo-30peças.png", desc:"Selecionado da casa. Válido no Pix ou dinheiro."},
{cat:"promos", name:"Poke Monjaro de Salmão", price:29.99, tag:"Segunda", img:"assets/img/Poke-Monjaro-de-Salmão.png", desc:"Cubos de salmão, mix de 3 folhas, abacaxi, manga, sunomono, tomate cereja, cenoura, gergelim e molho do chef."},
{cat:"promos", name:"2 Temakis por R$39,99", price:39.99, tag:"Escolha o sabor", img:"assets/img/2-temakis.png", desc:"Você escolhe os dois sabores."},
{cat:"promos", name:"Big Hot Salmão", price:35.00, tag:"Clássico", img:"assets/img/big-hot-salmão.png", desc:"Alga, arroz oriental, salmão em cubos, sunomono, molho tare e molho da casa."},

/* ── COMBOS ── */
{cat:"combos", name:"Combo da Bianca", price:139.00, img:"assets/img/combo-da-bianca.png", desc:"10 uramaki filadélfia · 5 uramaki camarão · 5 uramaki gourmet · 2 joe salmão · 4 joe ebitem · 1 Big Hot Salmão."},
{cat:"combos", name:"Combo das Gêmeas", price:75.00, img:"assets/img/combo-das-gemeas.png", desc:"10 uramaki filadélfia · 10 hot filadélfia · 2 Mini Big Hot."},
{cat:"combos", name:"Combo do Kau", price:169.00, img:"assets/img/combo-do-kau.png", desc:"42 peças gourmet: sashimi ao molho de pimenta, uramaki filadélfia especial, ebitem, joe gorgomel, joe tropical, joe brie com geleia de morango, michelangelo e joe ebitem."},
{cat:"combos", name:"Combo 30 peças Econômica", price:69.00, img:"assets/img/combo-30-pecas-economica.png", desc:"10 uramaki filadélfia · 5 uramaki skin · 5 uramaki salad · 10 hot."},
{cat:"combos", name:"Combo 50 peças Econômica", price:89.00, img:"assets/img/combo-50-pecas-economica.png", desc:"10 hot filadélfia · hossomaki salmão e pepino · joe kappamaki · uramaki especial grelhado · salad · niguiri skin."},
{cat:"combos", name:"Combo MA", price:129.00, img:"assets/img/combo-ma.png", desc:"5 sashimi salmão · 5 sashimi gorgonzola · uramaki filadélfia especial · joe lemon · niguiri brie com raspas de limão · 10 hot camarão."},
{cat:"combos", name:"Combo 30 peças Especial", price:109.00, img:"assets/img/combo-30-pecas-especial.png", desc:"Uramaki filadélfia especial · joe · niguiri alho poró · sashimi salmão e com gorgonzola."},
{cat:"combos", name:"Combo Su Ma Yoshi", price:99.00, tag:"Best-seller", img:"assets/img/combo-su-ma-yoshi.png", desc:"10 sashimi salmão · 10 uramaki filadélfia · 10 hossomaki salmão · 10 hot filadélfia."},
{cat:"combos", name:"Combo 60 peças + Temaki Hot Família", price:139.00, img:"assets/img/combo-60-pecas-temaki-hot-famillia.png", desc:"60 peças variadas + 1 temaki hot. Feito para a família toda."},
{cat:"combos", name:"Combo Su Ma Satori", price:149.00, img:"assets/img/combo-su-ma-satori.png", desc:"10 uramaki filadélfia · 10 hossomaki salmão · 10 sashimis · 10 hot filadélfia · joe salmão · joe gorgonzola · Su Ma Tropical."},
{cat:"combos", name:"Combo do Chef", price:110.00, tag:"Assinatura", img:"assets/img/combo-do-chef.png", desc:"Sashimis com azeite trufado e limão siciliano · niguiri salmão · uramaki especial com brie e geleia de morango · joe gorgonzola."},
{cat:"combos", name:"Combo SU", price:139.00, img:"assets/img/combo-su.png", desc:"Hossomaki salmão · hot filadélfia · uramaki filadélfia · joe salmão · miguelangelo · niguiri massaricado · niguiri skin · joe kappamaki."},
{cat:"combos", name:"Combo 20 peças Hot Holl", price:35.00, img:"assets/img/combo-20-pecas-hot-holl.png", desc:"10 hot filadélfia + 10 hot filadélfia com alho poró."},
{cat:"combos", name:"Combo 40 peças + Temaki Hot", price:119.00, img:"assets/img/combo-40-pecas-temaki-hot.png", desc:"Uramaki filadélfia · hot filadélfia · sashimi salmão · hossomaki salmão + temaki hot."},
{cat:"combos", name:"Combo Poke + Sushi", price:89.00, img:"assets/img/combo-poke-sushi.png", desc:"1 poke salmão · 10 uramaki filadélfia · 4 joe filadélfia · 2 niguiri salmão."},
{cat:"combos", name:"Combo Atum 35 peças", price:89.00, tag:"Novidade", img:"assets/img/combo-atum-35-pecas.png", desc:"Joe atum · uramaki atum · hossomaki salmão e atum · sashimi salmão e atum · niguiri salmão · joe brie · uramaki passion."},

/* ── TEMAKI ── */
{cat:"temaki", name:"Temaki Filadélfia", price:35.00, img:"assets/img/temaki-filadelfia.png", desc:"Alga, arroz, cream cheese, salmão e finalização com cebolinha."},
{cat:"temaki", name:"Temaki Hot Filadélfia", price:35.00, img:"assets/img/temaki-hot-filadelfia.png", desc:"Alga, arroz, cream cheese, salmão, empanado na panko e frito."},
{cat:"temaki", name:"Temaki Salmão", price:35.00, img:"assets/img/temaki-salmao.png", desc:"Alga, arroz e salmão fresco."},
{cat:"temaki", name:"Temaki Salmão/Skin", price:35.00, img:"assets/img/temaki-salmao-skin.png", desc:"Alga, arroz, salmão e pele do peixe crocante."},
{cat:"temaki", name:"Temaki Alaska", price:35.00, img:IMG.temaki2, desc:"Alga, arroz, cream cheese, salmão e pepino."},
{cat:"temaki", name:"Temaki Camarão", price:50.00, img:"assets/img/temaki-camarao.png", desc:"Recheio generoso de camarão."},
{cat:"temaki", name:"Temaki Sem Arroz", price:49.00, img:"assets/img/temaki-sem-arroz.png", desc:"Alga, salmão e finalização com cebolinha."},
{cat:"temaki", name:"Temaki Hot Chocolate Branco", price:35.00, img:"assets/img/temaki-hot-chocolate-branco.png", tag:"Sobremesa", desc:"Arroz doce, alga, cream cheese, chocolate branco e M&Ms."},
{cat:"temaki", name:"Temaki Hot Chocolate Preto", price:35.00, img:"assets/img/temaki-hot-chocolate-preto.png", tag:"Sobremesa", desc:"Arroz doce, alga, cream cheese, chocolate preto e M&Ms."},
{cat:"temaki", name:"Temaki Hot Chocolate Misto", price:35.00, img:"assets/img/temaki-hot-chocolate-misto.png", tag:"Sobremesa", desc:"Arroz doce, alga, cream cheese, chocolate preto e branco e M&Ms."},,

/* ── HOSSOMAKI (unid.) ── */
{cat:"hossomaki", name:"Hossomaki Salmão", price:2.50, unit:"unidade · 5 em 5", img:"assets/img/hossomaki-salmao.png", desc:"Arroz, alga e salmão fresco."},
{cat:"hossomaki", name:"Hossomaki Skin", price:1.50, unit:"unidade · 5 em 5", img:"assets/img/hossomaki-skin.png", desc:"Arroz, alga e pele crocante."},
{cat:"hossomaki", name:"Hossomaki Kappamaki", price:2.00, unit:"unidade · 5 em 5", img:"assets/img/hossomaki-kappamaki.png", desc:"Arroz, alga e pepino."},
{cat:"hossomaki", name:"Hossomaki Salad", price:2.00, unit:"unidade · 5 em 5", img:"assets/img/hossomaki-salad.png", desc:"Arroz, alga e salada de peixe."},
{cat:"hossomaki", name:"Hossomaki Alaska", price:2.50, unit:"unidade · 5 em 5", img:"assets/img/hossomaki-alaska.png", desc:"Arroz, alga, salmão e cream cheese."},

/* ── NIGUIRI (unid.) ── */
{cat:"niguiri", name:"Niguiri Salmão", price:3.00, unit:"unidade", img:IMG.nigiri, desc:"Fatia de salmão sobre arroz oriental."},
{cat:"niguiri", name:"Niguiri Skin", price:2.00, unit:"unidade", img:"assets/img/niguiri-skin.png", desc:"Pele de salmão crocante sobre arroz."},
{cat:"niguiri", name:"Niguiri Salmão Massaricado", price:3.00, unit:"unidade", img:"assets/img/niguiri-salmao-massaricado.png", desc:"Salmão levemente maçaricado sobre arroz."},
{cat:"niguiri", name:"Niguiri SU MA", price:4.00, unit:"unidade", img:"assets/img/niguiri-su-ma.png", tag:"Da casa", desc:"A assinatura Su Ma em forma de niguiri."},
{cat:"niguiri", name:"Niguiri Gorgonzola", price:4.00, unit:"unidade", img:"assets/img/niguiri-gorgonzola.png", desc:"Salmão com toque de gorgonzola."},
{cat:"niguiri", name:"Niguiri Salmão Cream Cheese", price:4.00, unit:"unidade", img:"assets/img/niguiri-salmao-cream-cheese.png", desc:"Salmão e cream cheese cremoso."},
{cat:"niguiri", name:"Niguiri Brie com Geleia de Morango", price:6.00, unit:"unidade", img:"assets/img/niguiri-brie-com-geleia-de-morango.png", tag:"Especial", desc:"Salmão massaricado, queijo brie e geleia de morango."},
{cat:"niguiri", name:"Niguiri Rarasu", price:6.00, unit:"unidade", img:"assets/img/niguiri-rarasu.png", tag:"Exclusivo", desc:"Lâmina de salmão gordo, flor de sal, limão siciliano e azeite trufado."},

/* ── JOE (unid.) ── */
{cat:"joe", name:"Joe Salmão", price:3.00, unit:"unidade", img:"assets/img/joe-salmao.png", desc:"Arroz oriental enrolado em lâmina de salmão."},
{cat:"joe", name:"Kappa Joe", price:2.00, unit:"unidade", img:"assets/img/kappa-joe.png", desc:"Arroz oriental com pepino crocante."},
{cat:"joe", name:"Joe Filadélfia", price:4.00, unit:"unidade", img:"assets/img/joe-filadelfia.png", desc:"Arroz, cream cheese e lâmina de salmão."},
{cat:"joe", name:"Joe Tataki", price:4.00, unit:"unidade", img:"assets/img/joe-tataki.png", desc:"Salmão tataki com arroz oriental."},
{cat:"joe", name:"Joe SU MA", price:4.00, unit:"unidade", img:"assets/img/joe-su-ma.png", tag:"Da casa", desc:"A criação que deu nome à casa."},
{cat:"joe", name:"Joe Brie", price:5.00, unit:"unidade", img:"assets/img/joe-brie.png", desc:"Queijo brie derretido com salmão."},
{cat:"joe", name:"Joe Gorgonzola", price:5.00, unit:"unidade", img:"assets/img/joe-gorgonzola.png", desc:"Arroz, salmão massaricado, cream cheese e gorgonzola."},
{cat:"joe", name:"Joe Camarão", price:6.00, unit:"unidade", img:"assets/img/joe-camarao.png", desc:"Lâmina de camarão suculento."},
{cat:"joe", name:"Joe Gorgomel", price:6.00, unit:"unidade", img:"assets/img/joe-gorgomel.png", tag:"Exclusivo", desc:"Gorgonzola, nozes e mel."},
{cat:"joe", name:"Joe Tropical", price:6.00, unit:"unidade", img:"assets/img/joe-tropical.png", tag:"Exclusivo", desc:"Salmão massaricado, cream cheese, abacaxi e geleia de maracujá."},
{cat:"joe", name:"Joe Lemon", price:6.00, unit:"unidade", img:"assets/img/joe-lemon.png", tag:"Exclusivo", desc:"Salmão, massa de uramaki, cream cheese, limão siciliano, tare e gergelim."},
{cat:"joe", name:"Joe Ebitem", price:10.00, unit:"unidade", img:"assets/img/joe-ebitem.png", tag:"Premium", desc:"Camarão grande inteiro, salmão, cream cheese e geleia de pimenta."},

/* ── URAMAKI (unid.) ── */
{cat:"uramaki", name:"Uramaki Filadélfia", price:3.00, unit:"unidade · 5 em 5", img:IMG.uramaki, desc:"O clássico com gergelim torrado."},
{cat:"uramaki", name:"Uramaki Salmão", price:3.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-salmao.png", desc:"Salmão fresco e arroz oriental."},
{cat:"uramaki", name:"Uramaki Atum", price:3.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-atum.png", desc:"Arroz, gergelim torrado, atum e alga."},
{cat:"uramaki", name:"Uramaki Skin", price:2.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-skin.png", desc:"Pele crocante e arroz oriental."},
{cat:"uramaki", name:"Uramaki Salad", price:2.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-salad.png", desc:"Salada de peixe e arroz oriental."},
{cat:"uramaki", name:"Uramaki Alaska", price:4.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-alaska.png", desc:"Salmão, cream cheese e pepino."},
{cat:"uramaki", name:"Uramaki Especial", price:4.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-especial.png", tag:"Da casa", desc:"A combinação especial do Su Ma."},
{cat:"uramaki", name:"Uramaki Ebitem", price:5.00, unit:"unidade · 5 em 5", img:"assets/img/uramaki-ebitem.png", desc:"Camarão empanado crocante."},
{cat:"uramaki", name:"Uramaki Gourmet", price:6.00, unit:"unidade · 4 em 4", img:"assets/img/uramaki-gourmet.png", tag:"Exclusivo", desc:"Salmão empanado, cream cheese, lâmina de salmão, geleia de pimenta e gergelim."},
{cat:"uramaki", name:"Uramaki Camarão Gourmet", price:6.00, unit:"unidade · 4 em 4", img:"assets/img/uramaki-camarao-gourmet.png", tag:"Exclusivo", desc:"Lâmina de salmão, cream cheese, camarão empanado, molho de ostra e cebolinha."},
{cat:"uramaki", name:"Michelângelo", price:6.00, unit:"unidade · 4 em 4", img:"assets/img/michelangelo.png", tag:"Exclusivo", desc:"Salmão, gorgonzola, lâmina de salmão massaricado e cebola caramelizada."},

/* ── SASHIMI (unid.) ── */
{cat:"sashimi", name:"Sashimi Salmão", price:3.00, unit:"unidade", img:"assets/img/sashimi-salmao.png", desc:"Fatias generosas de salmão fresco."},
{cat:"sashimi", name:"Sashimi Atum", price:3.00, unit:"unidade", img:"assets/img/sashimi-atum.png", desc:"Filés de atum selecionados."},
{cat:"sashimi", name:"Sashimi Salmão Massaricado", price:4.00, unit:"unidade", img:"assets/img/sashimi-salmao-massaricado.png", desc:"Salmão levemente selado."},
{cat:"sashimi", name:"Sashimi Salmão ao Maracujá", price:4.00, unit:"unidade", img:"assets/img/sashimi-salmao-ao-maracuja.png", tag:"Autoral", desc:"Com molho de maracujá da casa."},
{cat:"sashimi", name:"Sashimi Salmão c/ Geleia de Pimenta", price:4.00, unit:"unidade", img:"assets/img/sashimi-salmao-com-geleia-de-pimenta.png", tag:"Autoral", desc:"Doce e picante em perfeita medida."},
{cat:"sashimi", name:"Sashimi Salmão Gorgonzola", price:5.00, unit:"unidade", img:"assets/img/sashimi-salmao-gorgonzola.png", tag:"Autoral", desc:"Com toque de gorgonzola cremoso."},
{cat:"sashimi", name:"Mix de Sashimis (15)", price:49.00, img:"assets/img/mix-de-sashimis.png", tag:"Degustação", desc:"Salmão massaricado com crosta de gergelim e maracujá · atum com ponzu · salmão com azeite trufado e limão siciliano."},

/* ── ESPECIAIS ── */
{cat:"especiais", name:"SU MA Tropical", price:6.00, unit:"unidade · 5 em 5", tag:"Assinatura", img:"assets/img/su-ma-sushi.png", desc:"Salmão, cream cheese, folha de arroz, abacaxi e geleia de pimenta."},
{cat:"especiais", name:"Futomaki Camarão", price:6.00, unit:"unidade · 4 em 4", tag:"Exclusivo", img:"assets/img/futomaki-camarao.png", desc:"Salmão empanado, camarão empanado, cream cheese, tare e limão siciliano."},
{cat:"especiais", name:"Hot Filadélfia", price:2.00, unit:"unidade · 5 em 5", img:"assets/img/hot-filadelfia.png", desc:"Empanado na panko, cremoso por dentro."},
{cat:"especiais", name:"Hot Tataki", price:2.50, unit:"unidade · 5 em 5", img:"assets/img/hot-tataki.png", desc:"Salmão tataki em versão quente."},
{cat:"especiais", name:"Hot Camarão", price:4.00, unit:"unidade · 5 em 5", img:"assets/img/hot-camarao.png", desc:"Camarão empanado crocante."},
{cat:"especiais", name:"Hot Sensação", price:3.00, unit:"unidade · 5 em 5", img:"assets/img/hot-sensacao.png", tag:"Doce", desc:"Morango e chocolate quente."},
{cat:"especiais", name:"Hot Banana", price:2.00, unit:"unidade · 5 em 5", img:"assets/img/hot-banana.png", tag:"Doce", desc:"Banana caramelizada empanada."},

/* ── CARPACCIO ── */
{cat:"carpaccio", name:"Carpaccio de Salmão (12 un.)", price:49.00, img:IMG.sashimi, desc:"Lâminas finíssimas de salmão com azeite e raspas de limão."},
{cat:"carpaccio", name:"Atum ao Molho da Casa (12 un.)", price:49.00, img:IMG.sashimi, desc:"Filés de atum com o molho secreto Su Ma."},

/* ── TEPAN ── */
{cat:"tepan", name:"Salmão Grelhado", price:90.00, img:"assets/img/salmao-grelhado.png", desc:"Salmão grelhado na manteiga, arroz, brócolis, couve-flor, cenoura, tare, cebolinha e gergelim."},
{cat:"tepan", name:"Salmão ao Molho de Maracujá", price:100.00, img:"assets/img/salmao-ao-molho-de-maracuja.png", desc:"Salmão com molho de maracujá, legumes salteados e arroz."},
{cat:"tepan", name:"Salmão com Camarão", price:110.00, img:"assets/img/salmao-com-camarao-nova.png", desc:"A dupla perfeita: salmão e camarão, arroz e legumes."},

/* ── PORÇÕES ── */
{cat:"porcoes", name:"Sunomono (200g)", price:15.00, img:"assets/img/sunomono.png", desc:"Salada de pepino agridoce — o acompanhamento ideal."},
{cat:"porcoes", name:"Bolinho de Salmão (10 un.)", price:25.00, img:"assets/img/bolinho-de-salmao.png", desc:"Crocante por fora, cremoso por dentro."},
{cat:"porcoes", name:"Suzukuri (12 peças)", price:60.00, img:"assets/img/suzukuri-de-salmao.png", desc:"Finas lâminas de peixe com molho ponzu."},
{cat:"porcoes", name:"Tartar de Salmão", price:30.00, img:"assets/img/tartar-de-salmao.png", desc:"Cubos de salmão com toques cítricos."},
{cat:"porcoes", name:"Camarão Médio (400g)", price:129.00, img:"assets/img/camarao-medio.png", desc:"Porção generosa de camarão."},
{cat:"porcoes", name:"Camarão GG", price:199.00, img:"assets/img/camarao-gg.png", desc:"Camarões gigantes — para dividir."},

/* ── POKE ── */
{cat:"poke", name:"Poke Salmão 500g", price:35.00, img:"assets/img/poke-salmao.png", desc:"Arroz japonês, mix de folhas, sunomono, manga, abacaxi, tomate cereja, gergelim e cebolinha."},
{cat:"poke", name:"Poke Salmão Grelhado 500g", price:35.00, img:"assets/img/poke-salmao-grelhado.png", desc:"A versão quente do nosso poke premiado."},
{cat:"poke", name:"Poke Camarão Empanado 500g", price:45.00, img:"assets/img/poke-camarao-empanado.png", desc:"Camarão crocante sobre arroz e folhas frescas."},
{cat:"poke", name:"Poke Camarão Grelhado 500g", price:45.00, img:"assets/img/poke-camarao-grelhado.png", desc:"Camarão grelhado com mix de folhas e sunomono."},
{cat:"poke", name:"Poke Atum", price:35.00, img:"assets/img/poke-atum.png", desc:"Cubos de atum, cream cheese, abacaxi, manga e cebola roxa."},

/* ── YAKISSOBA 500g ── */
{cat:"yakissoba", name:"Yakissoba de Legumes 500g", price:29.00, img:"assets/img/yakissoba-de-legumes.png", desc:"Talharim, molho da casa, brócolis, couve-flor, cenoura, acelga e repolho roxo."},
{cat:"yakissoba", name:"Yakissoba de Frango 500g", price:32.00, img:"assets/img/yakissoba-de-frango.png", desc:"Frango suculento com legumes salteados."},
{cat:"yakissoba", name:"Yakissoba de Carne 500g", price:35.00, img:"assets/img/yakissoba-de-carne.png", desc:"Tiras de carne no molho da casa."},
{cat:"yakissoba", name:"Yakissoba Misto 500g", price:45.00, img:"assets/img/yakissoba-misto.png", desc:"Frango e carne, a porção completa."},
{cat:"yakissoba", name:"Yakissoba de Camarão 500g", price:49.00, img:"assets/img/yakissoba-de-camarao.png", desc:"Camarões generosos com legumes."},
{cat:"yakissoba", name:"Yakissoba de Salmão 500g", price:55.00, img:"assets/img/yakissoba-de-salmao.png", desc:"Salmão em cubos no talharim da casa."},

/* ── MOLHOS ── */
{cat:"molhos", name:"Shoyu", price:1.50, img:"assets/img/shoyu.png", desc:"O clássico acompanhamento."},
{cat:"molhos", name:"Tare", price:3.00, img:"assets/img/tare.png", desc:"Molho adocicado para hot rolls."},
{cat:"molhos", name:"Geleia de Pimenta", price:3.00, img:"assets/img/geleia-de-pimenta-nova.png", desc:"Picância artesanal da casa."},
{cat:"molhos", name:"Geleia de Maracujá", price:5.00, img:"assets/img/geleia-de-maracuja.png", desc:"Tropical e aromática."},
{cat:"molhos", name:"Geleia de Morango", price:5.00, img:"assets/img/geleia-de-morango.png", desc:"Doçura para os especiais."},
{cat:"molhos", name:"Molho de Ostra", price:5.00, img:"assets/img/molho-de-ostra-nova.png", desc:"Toque umami intenso."},
{cat:"molhos", name:"Gengibre (30ml)", price:3.00, img:"assets/img/gengibre.png", desc:"Para limpar o paladar."},
{cat:"molhos", name:"Wasabi (30ml)", price:3.00, img:"assets/img/wasabi.png", desc:"A pimenta tradicional japonesa."},

/* ── BEBIDAS ── */
{cat:"bebidas", name:"Água sem gás 500ml", price:5.00, img:"assets/img/agua-sem-gas.png"},
{cat:"bebidas", name:"Água com gás 500ml", price:6.00, img:"assets/img/agua-com-gas.png"},
{cat:"bebidas", name:"Guaraná Antártica 350ml", price:7.00, img:"assets/img/guarana-antartica.png"},
{cat:"bebidas", name:"Coca-Cola 350ml", price:8.00, img:"assets/img/coca-cola.png"},
{cat:"bebidas", name:"Coca-Cola Zero 350ml", price:8.00, img:"assets/img/coca-cola-zero.png"},
{cat:"bebidas", name:"H2O Limão 600ml", price:12.00, img:"assets/img/h20-limao.png"},
{cat:"bebidas", name:"Coca-Cola 2L", price:18.00, img:"assets/img/coca-cola-2l.png"},
{cat:"bebidas", name:"Heineken Long Neck", price:13.00, img:"assets/img/heineken-long-neck.png"},
];

const CATEGORIES = [
  {id:"promos", label:"Promoções"},
  {id:"combos", label:"Combos"},
  {id:"especiais", label:"Especiais SU MA"},
  {id:"sashimi", label:"Sashimis & Carpaccio"},
  {id:"temaki", label:"Temakis"},
  {id:"joe", label:"Joes"},
  {id:"niguiri", label:"Niguiris"},
  {id:"uramaki", label:"Uramakis"},
  {id:"hossomaki", label:"Hossomakis"},
  {id:"poke", label:"Pokes"},
  {id:"tepan", label:"Tepan"},
  {id:"porcoes", label:"Porções"},
  {id:"yakissoba", label:"Yakissoba"},
  {id:"molhos", label:"Molhos"},
  {id:"bebidas", label:"Bebidas"},
];

const REVIEWS = [
  {stars:5, text:"“Sushi frescos, peças muito bem montadas, sabor incrível e atendimento impecável. Ambiente agradável! Sem dúvida um dos melhores sushis que já comi.”", author:"Ellen Ramos Lima", meta:"Cliente Google · há 3 meses"},
  {stars:5, text:"“Simplesmente o melhor sushi de Balneário. Atendimento de excelência e ambiente aconchegante. Super recomendo.”", author:"Matheus Rossatto", meta:"Local Guide · há 2 meses"},
  {stars:5, text:"“Peças lindas, novas e saborosas. Realmente, abaixo de R$100 por pessoa, os outros ficam no chinelo. Bastante variedade e um ambiente lindíssimo.”", author:"Oscar Junior", meta:"Local Guide · há 4 meses"},
  {stars:5, text:"“Molhos autorais, combinações que não existem em lugar nenhum e aquele hot filadélfia de outro planeta. Voltarei sempre.”", author:"Cliente Su Ma", meta:"Avaliação verificada"},
  {stars:5, text:"“Custo-benefício absurdo. O Joe Ebitem com camarão gigante vale cada centavo. Equipe simpática e eficiente do início ao fim.”", author:"Cliente Su Ma", meta:"Avaliação verificada"},
];
