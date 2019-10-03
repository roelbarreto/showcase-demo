self.__precacheManifest = [
  {
    "url": "/_next/static/UZeqhSWIfX8hAioLAIciK/pages/_app.js",
    "revision": "c093bddc4d485fcddef1"
  },
  {
    "url": "/_next/static/UZeqhSWIfX8hAioLAIciK/pages/_error.js",
    "revision": "d27e8dc4cadba583bdd9"
  },
  {
    "url": "/_next/static/UZeqhSWIfX8hAioLAIciK/pages/content/5d94692710670c110329d866.js",
    "revision": "8d56bea1f8959b888fb7"
  },
  {
    "url": "/_next/static/UZeqhSWIfX8hAioLAIciK/pages/content/[slug].js",
    "revision": "793b0cfb611270d23022"
  },
  {
    "url": "/_next/static/UZeqhSWIfX8hAioLAIciK/pages/index.js",
    "revision": "923161abc8b6f5e72ed8"
  },
  {
    "url": "/_next/static/chunks/commons.15364dbd6b8f874921e0.js",
    "revision": "98cf29d53e9954218468"
  },
  {
    "url": "/_next/static/chunks/pdfjsWorker.d83f417bd68a31b4bf3d.js",
    "revision": "8a1db8b30b2584f3a5af"
  },
  {
    "url": "/_next/static/runtime/main-561999f7e694d22c9951.js",
    "revision": "7e6042bb69de6e76292b"
  },
  {
    "url": "/_next/static/runtime/webpack-3c6e3a843e443e2081d3.js",
    "revision": "8b7b8d6b3c2a4a36155a"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/fonts/OpenSans-Bold.woff",
    "revision": "f87c7980e3c04b47aec2e1c182308aeb"
  },
  {
    "url": "static/fonts/OpenSans-Bold.woff2",
    "revision": "c9e6ced6ee6d6f30cc5d3de2a811c27a"
  },
  {
    "url": "static/fonts/OpenSans-Regular.woff",
    "revision": "9863aaace5fcaf897956737ef26b427f"
  },
  {
    "url": "static/fonts/OpenSans-Regular.woff2",
    "revision": "a725497524525c361f0d545e4e8ec577"
  },
  {
    "url": "static/fonts/Roboto-Bold.woff",
    "revision": "50d75e48e0a3ddab1dd15d6bfb9d3700"
  },
  {
    "url": "static/fonts/Roboto-Bold.woff2",
    "revision": "b52fac2bb93c5858f3f2675e4b52e1de"
  },
  {
    "url": "static/fonts/Roboto-Regular.woff",
    "revision": "35b07eb2f8711ae08d1f58c043880930"
  },
  {
    "url": "static/fonts/Roboto-Regular.woff2",
    "revision": "73f0a88bbca1bec19fb1303c689d04c6"
  },
  {
    "url": "static/icons/star.svg",
    "revision": "a3342518cf901600ad0add9539565d9b"
  },
  {
    "url": "static/img/banner.jpg",
    "revision": "fa1939b9e5cc6f4e9c6fcb0ede14d3f5"
  },
  {
    "url": "static/img/placeholder.png",
    "revision": "1c1b3f6afd5a9e2a317ff84d8c22cd93"
  },
  {
    "url": "static/pdf/sample.pdf",
    "revision": "ee7ac8084eeab08035fdcb47bfa81931"
  },
  {
    "url": "static/svg/placeholder.svg",
    "revision": "5d891a3f9b940fc76d2bc3a881704fb1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');