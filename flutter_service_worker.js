'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6961d7607f40a71bc7f0111a7c0bb443",
".git/config": "6d097de5a638d148da90dbc7b5273520",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f8b6e19c3d2ccf904293eb653d799c90",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0694630864ea1f56d9efcc0b774cf940",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cca7d291828ca96ba3c785a435fef053",
".git/logs/refs/heads/main": "3d630a22f36becf11f5a27fc4fba26de",
".git/logs/refs/remotes/origin/main": "8a10ed1c6b6366ab04a86ab9de5e17b0",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/be79b55deac92c78e29caeee618c2fffbbeee2": "d3c8fb26127ba3162cb276c8a9b5235c",
".git/objects/0b/2c2d7a5b73ee90792d4804650a121ae6678e29": "2a9ca0a531531a8a383e941b0bdeb8e7",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0f/32c046a2f6ccc4570c538ecb405d227fa633b2": "c811a343aea42ca43f20c2b012946339",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/14/8cf9723bda393f6084004bdb88abad91b01fc8": "9eb18c668210222641230477051479aa",
".git/objects/15/075a794830d60400babaddebce235fc60eb8f9": "03f5c01a83ef6954aacfdf9e6a31dd25",
".git/objects/1a/7626a5625587703409187b7b8327da957e6d70": "386c7ff072ed1e3df41eeaa5aeff7fc7",
".git/objects/1b/9a7ec451168ce31b8626d01ed43423212d1949": "43cf7a86a17c929d566e9f70947b4dc9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/a080bae06d952f31a6632e7481bc820be7c907": "5b462a3716a04a0d673a0f036f61b399",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/1666f10271e22560ee89f31e899c7e7d539822": "286413511ba66ec3cbdedfabcc8b9e37",
".git/objects/27/b7944c2b02c8d94bc7ca57629cac2ecde347cc": "bda6dd41e77907a3093337b477d91f20",
".git/objects/2f/135c35293b31dba15ec3ce3a39bc78e7368cc1": "ec1557c25e0e1b8743c072c7e76cc01b",
".git/objects/2f/73b68cc6ac7940ac810695c3d83432cfd076a2": "bb38870ef6e849397dcf3e665c5d72a7",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/aec5b5d8afb7ff8a2b2b3ef52c3cf0133b6f1e": "f435e927b37bc62526c77ae969224a5e",
".git/objects/3a/4205d083b77272e11c8556b95fa9d755e06951": "c911959b8507b3e4b7b1ef7d078a2da6",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/8a1ddf0d9c3bec41f7cfacf5d8aef71ab82170": "9badd39d307ad5a9d37f1346be14fcd2",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/bcb3b4e36300cf81350dde2de969f4335d8158": "1d787a9c3519c8f6bca4c85dc457ddba",
".git/objects/43/e0fc5fcba99dd98455bca222019c8f5035543f": "fb2b9ec08c62d718e64f25747ec5c996",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/453a1c7c95dc0a4471d735d4bbc9f51cd34d53": "72b81b3f50d16758d82a32b3fb039d56",
".git/objects/4b/6a8aebbab94acee7a622384c5fb58a033399f5": "55bb80431ab4b56a318fa8ae63f73245",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/6295a62cccf0662e07a3d02d0ff7ac0620fade": "bad555fed07ab82a7c77e2d9f686bf0c",
".git/objects/59/471397d1623c6ef6bae961ae68c6b74db10937": "d9b4b28015fdb5670d000bd68d668827",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/c8a7aa5a5ddcc410dce4f8bed15a6f5e710d2b": "0feb8967007141c9d25c4687f8cb2648",
".git/objects/67/76917da0889c8d5811416c8eeba68f119cd428": "3b8699fda5b94510cdf723cabc37cbd3",
".git/objects/68/e0fc924b7b7d6821aed15a34077665faa03077": "a6569f00aa5d59578b135ebae10bc8de",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/76/d31ce28ecb6d41505822741ec33884c21de227": "9a3f3479137f757d4cbe5e1a42672866",
".git/objects/76/d65970af2dd7581450cefcb229aae723553a34": "6785ed369d30c2b12d5ded9bbc78c9ec",
".git/objects/78/9f7aef806762c1e1b9662fe1cd2aafafae556d": "3aae40998793a469ba15bd5c265bac37",
".git/objects/81/8905072d8d6f5b162a216bfab14053c4a733f5": "7ecbb68f1e88e58dec9395131b250335",
".git/objects/81/d707ff4c7c064e817aaf75528cca779fa17c4f": "8e647843c25a4ad1c1abdfe4d583636c",
".git/objects/82/33179d58333529937f81625aa47a4075b8ed3a": "862ff44ffb164ef9787b4385b82b6cbe",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f0e75655ab69bda2597ac16651eed603652d77": "e9d4d6dfc58643771006e33880f65701",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/b90217eaf3c56cedc8ab9fcb18c3d9548ff642": "65a223b9289f3f88dc50e20b85986170",
".git/objects/a3/5b7efd6b5f23d78c10068c10a034068112ed15": "1e6e0755951d306c3555323ded731b2e",
".git/objects/a3/8a0989c55905d9d7a24060ae8d5e52556cf254": "3851888fbea614165f9a05f1e8c26a42",
".git/objects/a8/075861cefa18842651ca9c41785fbf999277e9": "e6974afdf9bab066c62a3ee585470bd6",
".git/objects/ab/d7a6b1959ec819a6d60a5e2582d39bd431ef11": "74544c7e4a5c1983e36c8501f2b36577",
".git/objects/ac/64b5178ba498cff7291fabd8a0d40b94d1051b": "7b299d45a75364eaf704a58f97f1da80",
".git/objects/af/a5a2dca81d32aa8e67582c57280ea6dff3f5bb": "359d21767e1914da9876451c4708e246",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/b0ff21e80e4ad7105d94f8cb5bf0b84a9267f0": "4fcbc1ee94c9b2ec9d61997dd859dbc7",
".git/objects/b5/4ec38cb83c86695efc99d2e6af7511c61ac637": "b515158a7910e1ab2ae2276d232799a0",
".git/objects/b6/953806832fab83ce016232e1065ec4ba9acd0e": "2c77ad7f9fee281bf139c04283dfff0b",
".git/objects/b7/d7a58f7fafbfb5c64ca0f7a7f5cbd606d00242": "2c7b3bd354b5ee51aa8d0d382266ec20",
".git/objects/b7/f2b321a3027472b4ab0417090abe33900c93b6": "0f74c8740d3c65cecbb6c677789ee930",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/0f6b479b5c13a355a541b8e3e81daafc49bf5c": "c834431fc9d3df98f2bdf27a59619959",
".git/objects/be/df84f89208cc323e521cd7cf0efb9c77d200fe": "c7b85b688eeae4ff38dd4ab4d26d2737",
".git/objects/c0/2e994ea6a5242b48a5a5ceb5274c9f59ba5f05": "63a7064c93e04240c9f62e47e84fdf66",
".git/objects/c2/b2f4b5bf1aeb12e4d94072584177e0a4640ef8": "50f6d1e682e3930ac8ca541c1394f76d",
".git/objects/c4/6e2defbf2800aee6c6153b52f169651fa668a2": "dca5acce69c077c7092f30f561b1775d",
".git/objects/ca/4107334f7ba990ed1f97254741561611919c16": "682837d4709809faa1c0205deb1e5e8c",
".git/objects/cb/0ad2b89b74774fb480e5efb1eecb3d657e7f9a": "49d0db9a7a9694ffeb70ca757200e94e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/bb9f798eac05a32c673be2969917ba815e7126": "1bc5b69774b31c01d61521f51e007537",
".git/objects/d1/6e42ddd42a46aaefa37e56e424f96405f4f2d6": "5364a37dcd9ee46f75fee28190477442",
".git/objects/d3/191d83d92fd4fb38840a525ac4dac61dbc3c8a": "b39e5c0c40130ee1d33141b8fd4546fd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/dc/330a01320f2e7e8a118c0732123b5233f3bd31": "001a71c601a767dcf5c5279422a53832",
".git/objects/e6/66bedc3f7f8f9c744771724d37d729cefc657a": "534ffe5b0e029993eec14fbd8f81a7ae",
".git/objects/ea/fd152e9d2a50398e0e894052f306a1c52d8aee": "7ea59148262ab57877ba2a6506b4a3ea",
".git/objects/ed/1c4e0b499ceecebc961ca1e0d9d6851a83ce8c": "140a84f88e0f4fd8c00b724e2babcfaa",
".git/objects/f0/001e65ce0b7370ebe17fc63dc93c36efef8d83": "17ac12884ad0bc91d1d2934b636c12d7",
".git/objects/f0/0a1d82407f3da4503125a891f020f26b02243e": "25bbe88f82681278332f56762f030201",
".git/objects/f0/f0a3800fd6d086e03286061eb44b5284658215": "ed348f52f780973779ddeebb6637a121",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a70c859f6fe806a0351d4e19912e4525e21091": "d1a9fd035dabea98c470c78397231c92",
".git/objects/f7/cdf17e81f26cd108e4d2eb44bdbf15f19e7c12": "1f9a9df5e2bc5c130fb33889386082aa",
".git/objects/f9/9e3ec19bf10a703971423002521e2d8c667e59": "dfc9c0db7b389f3c36f665bbf263a254",
".git/objects/fc/1bb4cae67612b52e5635f6c51cafd12f0fc0a2": "0978c87cd11fd634c1e94f5c3270c144",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/0af29ea3badec573ffdc5cd497b51ce354b756": "303837538da8df862898ccea76b122df",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "3014ef79e1bf2cb4728f31c6f20d879f",
".git/refs/remotes/origin/main": "3014ef79e1bf2cb4728f31c6f20d879f",
"assets/AssetManifest.bin": "14fc505c2fcfd20b9842c7080715109a",
"assets/AssetManifest.bin.json": "07f60244130f600430e11083adcf9055",
"assets/AssetManifest.json": "c1b830b14584f50be18f187b68b567fd",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/globe.png": "cd69dac8f7824c22c16bddf9cbc83ba8",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/linkedin.png": "efdb74ff3631151062095b0c9b228c21",
"assets/assets/icons/service-icon1.png": "2eaf1a87ec016307ba42e0bc65101f8b",
"assets/assets/icons/service-icon2.png": "233237a0ea968e3515ef77663f78be36",
"assets/assets/icons/service-icon3.png": "16b55727c209fc8ff9da0df5731f1c11",
"assets/assets/icons/service-icon4.png": "2f29e0088963f8ae125b6d2622d74c0f",
"assets/assets/icons/service-icon5.png": "d2a756ff6ae67476d6d102fa82ef1a3c",
"assets/assets/icons/tik-tok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/icons/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/icons/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/assets/images/logo.png": "929b8ad62f3c09bef8160057c2f252fa",
"assets/assets/images/me.png": "00d440134a8d890476383de3a20d0761",
"assets/assets/imgs/climbUp.png": "9b7d6abeed7717302e06769a5b3e4c0f",
"assets/assets/imgs/fitness%2520app.png": "0c34e1c07abc62a9c2a8d2fca974f9d3",
"assets/assets/imgs/lask.png": "5e91687cb5924aeb427acf0bd8404a7a",
"assets/assets/imgs/portfolio-img1.png": "7b671598ea608ec41d52c9f57f7d94ab",
"assets/assets/imgs/portfolio-img2.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img3.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img4.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img5.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/quotes.png": "98bf320ae4f46a0e586b040488ad7ae1",
"assets/assets/imgs/responsive%2520dashboard.jpg": "26937155ceb2758f7f670c3e7f37c86f",
"assets/assets/imgs/vector.png": "16fa78ca01ce794aa977d10a284d4751",
"assets/assets/pdf/Mohamed%2520Gamal%2520Omar%2520Sayed%2520.pdf": "3cfde92ab01d1766fd01a9afa7d289de",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6dfda9c7507ed85a45c05382bcba4f02",
"assets/NOTICES": "0c42c601972555cbe1d199ebc73b8f8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "b12d37b794419d983bf95b13d84887fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3a7a90b62cabfe8c6d32ae5b7259779f",
"index.html": "96dccf887cb4d29bd48b737259d89472",
"/": "96dccf887cb4d29bd48b737259d89472",
"main.dart.js": "b32d65752d7668e88fee84a0234c2a56",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
