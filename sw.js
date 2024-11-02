/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-99d8380f'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/app-CWrlje2l.js",
    "revision": null
  }, {
    "url": "assets/Bhg5fXSR.js",
    "revision": null
  }, {
    "url": "assets/BNgXFa6G.css",
    "revision": null
  }, {
    "url": "assets/BQW84eNS.js",
    "revision": null
  }, {
    "url": "assets/BSI_Tgee.css",
    "revision": null
  }, {
    "url": "assets/C9W4uBwm.js",
    "revision": null
  }, {
    "url": "assets/CLRr_23I.css",
    "revision": null
  }, {
    "url": "assets/CnZRkjtH.css",
    "revision": null
  }, {
    "url": "assets/CVwZYHzM.js",
    "revision": null
  }, {
    "url": "assets/Cxe2nhzf.css",
    "revision": null
  }, {
    "url": "assets/DYcAjd08.js",
    "revision": null
  }, {
    "url": "assets/mQ8RZZgb.css",
    "revision": null
  }, {
    "url": "assets/oGI287sw.js",
    "revision": null
  }, {
    "url": "assets/painting-P9R7iKIH.jpg",
    "revision": null
  }, {
    "url": "assets/wx-Bfv1OeoY.png",
    "revision": null
  }, {
    "url": "assets/yxV-6kRm.css",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "8100e3aae66989a7922381c8b9871630"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "8100e3aae66989a7922381c8b9871630"
  }, {
    "url": "icons/favicon.ico",
    "revision": "a61783a9696ea10d89cbdbdf4bdcd04a"
  }, {
    "url": "icons/icon.svg",
    "revision": "0d6898c6842419582830eff8fe05cb20"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "9a1a20234920cba79a8929dbae86e259"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "77cdae4e641205cef2d05d8d100be148"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "bc5c19c5268ad7007dda61050d5c4359"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "c75705b08ad0088aa5945321e97a5bd2"
  }, {
    "url": "images/intro.mp4",
    "revision": "cda75b7504affcdcceb1599964e2b480"
  }, {
    "url": "images/painting-01.jpg",
    "revision": "73a92f67baf8172b9a6ed3e000722ab2"
  }, {
    "url": "images/painting-02.jpg",
    "revision": "e999ac4ae5015f4ac2c029e54a1a1cc2"
  }, {
    "url": "images/painting-03.jpg",
    "revision": "2cbe4d9fa40cd2a75909fc9fc2cf3b1e"
  }, {
    "url": "images/painting-04.jpg",
    "revision": "1e414b67291043a6b3a4d87195ef6922"
  }, {
    "url": "images/painting-10.jpg",
    "revision": "30d4f00067376a452acd8ae6ed45fe83"
  }, {
    "url": "images/painting-11.jpg",
    "revision": "91aba6649d61f6abc508ec0335449e7a"
  }, {
    "url": "images/painting-12.jpg",
    "revision": "51172721db13a01c16d22b7878decb74"
  }, {
    "url": "images/painting-13.jpg",
    "revision": "f2faf5f176bd9e640bc36460f915721c"
  }, {
    "url": "images/painting-20.jpg",
    "revision": "3752677fb9bbfb7677525007626a2dc8"
  }, {
    "url": "images/painting-size-01.jpg",
    "revision": "47e800601b2818cc7b9300639176882f"
  }, {
    "url": "images/painting-size-02.jpg",
    "revision": "51718b9029a75ee88220daf342d29598"
  }, {
    "url": "images/style-cherry-icon.png",
    "revision": "2e41d59130d7e79d08400f407f03fd94"
  }, {
    "url": "images/style-cherry.png",
    "revision": "ebabfb82c9a13ebd86967365694f3df4"
  }, {
    "url": "images/style-dark-icon.png",
    "revision": "19e8df5591c679c9b07db54b5c67e9ea"
  }, {
    "url": "images/style-dark.png",
    "revision": "f08efb631e17da04a8e488eb2e200e0f"
  }, {
    "url": "images/style-golden-icon.png",
    "revision": "ed5661ab4c714be8075e558b469adef9"
  }, {
    "url": "images/style-golden.png",
    "revision": "9935abd53df3da6ebd226c3da10cca9b"
  }, {
    "url": "images/style-light-icon.png",
    "revision": "1263d16c995a486c406d015c677ed299"
  }, {
    "url": "images/style-light.png",
    "revision": "a31817f2f7c8ae280353011d581ae20d"
  }, {
    "url": "images/style-river-icon.png",
    "revision": "ac805fa578a5a7396888713a51883e84"
  }, {
    "url": "images/style-river.png",
    "revision": "2bbf6ea9de5ab6ad14047e78d9554593"
  }, {
    "url": "404.html",
    "revision": "ef6840060b86f2aee40fd4e4a51df6be"
  }, {
    "url": "about.html",
    "revision": "e8e97d1a78d48f293db69c5c7d8b3f48"
  }, {
    "url": "index.html",
    "revision": "4709714b1a8fadcb76e16789295b98c8"
  }, {
    "url": "map.html",
    "revision": "db0c10bde5369f69b62da8e18fc8a8ab"
  }, {
    "url": "painting.html",
    "revision": "f4bd506754f3e889c0bc81a91fe1a473"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "style.html",
    "revision": "682eceffba766bed6d33dcdeb6eb6879"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "77cdae4e641205cef2d05d8d100be148"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "bc5c19c5268ad7007dda61050d5c4359"
  }, {
    "url": "manifest.webmanifest",
    "revision": "152ea86aa2485e98c60e58d27ba16301"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
