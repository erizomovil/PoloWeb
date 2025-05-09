'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "0247959855885b3b3ede170bf02447ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b01287fe87cf53f8429ef23e734b8b15",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b366c0bf5e36f8e58416c29f8704072e",
".git/logs/refs/heads/main": "5e279e242ee88cf5953ac5383bd15a5b",
".git/logs/refs/remotes/origin/main": "90b38643b0d2b5f9842dcad7c8058529",
".git/objects/05/77f95c221f879ec96d8428a16409a87c09858d": "061b4c893e7ea1df733f7e3fafabd757",
".git/objects/08/08713f16cd1f0aa5c997764d9c63f92baf1b81": "c3c4a9354a45b7407d578e2fbcae9c33",
".git/objects/11/3b5e15a55ba8d11484b6dc31263ce8b1fdbb1e": "1b108eb7b6716feefff0c0dc085f3e61",
".git/objects/16/c40ea996ad1c328f62267c450f1b406ee23c50": "cd314711fc329da01944c3090673a744",
".git/objects/19/30133e25dd3e2f1c3003a32758159af4e4c322": "db3e59e693ae5a128005cbae0db3c971",
".git/objects/1b/c8b75315847c0845dc6791bdfef755eafd5ed9": "6c33b5de48629f54b10b3a09542b25a5",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/9bf57959fea289a5560dea964ae9e6024bc3e6": "168d27efb3b742a022a06947c301cb35",
".git/objects/23/7c0601f5bf41e43c8192a88980fa1726ddbe0b": "3b893d20410d70ce5a48cdd166c647a8",
".git/objects/26/ef16d4c5be67808618b3008247f3e7e0d03fe3": "a467f5719ab56e943e98e31bebdda49b",
".git/objects/2b/f0fcb4a32bad56235d1371c8c98ce93793651f": "45f79fbbd3eab84da26eda0f961cebf1",
".git/objects/31/fa44e6ee5de172cff7c22e555bdf398a2215d0": "f9481c8d0f15f975cf4f297808f81865",
".git/objects/33/8f56dfc183b9c954bcacab98c15cbe8dec02ca": "d35db0516a8926649ec7f19d74cfd08f",
".git/objects/34/424b121340d29ec10bd656a1c7d692d7c802a4": "83b2bf17f9b4929d82bebe99d1123f38",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/0d345c521f0e15c9a268634c92aff43c78ac2d": "3666024b993e1ca2c36532accd52bfed",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/6682d470ca558b6d35cb8826ae785cd9101893": "0df3fb5047c0d59c995e7312b1b5756b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/df2005faf3eb84c91361cef7d89799e839b250": "98801f7576e39679dc29b05077196023",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/68/980be1105b80aff8559865bb16c5af1d289082": "e31254553c0c17ce52291651dbfb913f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/74/65f217899996ca19658ecdc657a39e12429ca8": "03186e1e199b3f375821e259e8b2266d",
".git/objects/82/42090a0aa6d593a5775265c734ea9b023741bf": "d478f7801538ed5f17a4a124f136619d",
".git/objects/82/5c34c0639e428e101dc38479eea8e529a5333f": "d597141b346fd68d2f1797c98dc07d7a",
".git/objects/82/94838607243b320cafd50aa7720ec8692d2485": "6dbd718899c00ea77854dda40b5351b6",
".git/objects/83/4ffecebd24a124833ef4b528416bc78210ec37": "d007d4461468977adfe8b696b56fee10",
".git/objects/84/9d115ce608d63ada449e46563a72a62a198098": "37cdfede7c2888be8e07e6eec2053c1f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/3ae724cba0d7365433a4f1182b3d89fdebef2c": "cc27c1fdfbad47bc317c97da5763cd4b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/c442987ec69f041f92b8698a380a030cbdf77e": "0553aed451ae49acc5ef926cdeb2855a",
".git/objects/9a/56a6d97eab023474c600fc2cb938392e052889": "a8e48413a223b0664fb4dc086f463af9",
".git/objects/9c/9a213b953c1f6d5458d84cc07b28c992a7d274": "ca5f5b8acb971f9b50dc034b23dd1c68",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/af6ff1377aa153ca9695acbe4c1daad4038def": "adfa295c0504c99cbf7bd8a1021cbdfd",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/fd24d44f82c73a1226e270c94ebe3007c95e6d": "fc72ecead45e20b047916fbed8b08dcd",
".git/objects/b3/764816337f366c46da5fd5cde547680518d192": "a9e8a95fe7d8457396ba69545c10c3cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/29b8fece09a85f24c917f6224c1ce2a7235e77": "fcd48abce2707036ec9e5e4e5ab205b8",
".git/objects/c7/c2b2c2a6b51d32e648619079456ca9f060a3a5": "16a42479b44c0735c483676fffbbfc8f",
".git/objects/c9/8d95f2b2d5f416d7fee0b3ab21426ecf556a9f": "66358cdd978193b6537db4e29c05f9ec",
".git/objects/d0/b13f70a718d50844b66b3cb69917feadfeb0ea": "5b92264173f160c2ac12ea14406ed4b8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/13e59f674058b40ea6cf83b22fb0115363a8ad": "0f12ae9d60fb7d3c14ec36abaa93ccd5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/63c22821372f0cd62d76f7923cfd12599f1401": "4c8124b0b2453e211ae6738da3e7c909",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/e2fcb8c4af962582e6e9e90580b4c0209b18a7": "47feeca36410892f92d76c0b42073392",
".git/refs/heads/main": "c7d50ed13d572ee8d4d649bd82a2564b",
".git/refs/remotes/origin/main": "c7d50ed13d572ee8d4d649bd82a2564b",
"assets/AssetManifest.bin": "b9fa581d6c8cb730cef1193bbdc9d143",
"assets/AssetManifest.bin.json": "030212c76f2cb522e3f91ed54ecf83f7",
"assets/AssetManifest.json": "297c1e6de357cb94c854effd02bb664e",
"assets/assets/images/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/images/BannerImage.jpeg": "a3d67366e286de899c54b74be92c7b1a",
"assets/assets/images/example.jpg": "4d66b5c618698004e52c3a8cfe77199a",
"assets/assets/images/google.png": "7e557f1c0864829c54c300d15bee69f4",
"assets/assets/models/conferences.json": "6f57c644b3b3ade2dc7a6facc81db075",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "44cf7d22a04c52703ca69cc8837a55d4",
"assets/lib/l10n/app_localization.dart": "2b49c9a879bb4104fe4d0d00245eb531",
"assets/lib/l10n/intl_en.arb": "fd5747e719fb8e94efbf0c357dcb0d26",
"assets/lib/l10n/intl_es.arb": "76a37e76bffc259cec72b14b483cf679",
"assets/lib/l10n/intl_fr.arb": "5e6cb813601c2683b28d00e6f8a3f51a",
"assets/lib/l10n/intl_pt.arb": "a044a07b330bbb466d1259cb8a07847c",
"assets/lib/models/conferences_model.dart": "0b517e6eb6aa1ce4f5908e4432498552",
"assets/NOTICES": "b2aaa289342b435f4ff14617049dfa44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f1d2a449172e6e8eaf2c2eaa1ea7bd66",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa95b0bf76d0d7432471c0af870e9e20",
"/": "aa95b0bf76d0d7432471c0af870e9e20",
"main.dart.js": "c3d620b05cd8673d008babd283c1f6fa",
"manifest.json": "c4cd1337db9da283a8433de90fb18b19",
"version.json": "f87e4c94597958d2930a763a16a7e3e0"};
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
