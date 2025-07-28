
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/polyfills.D8hiOd40.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/app.51I87gyl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/page-OnePage.DuugZf2q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DeliveryMethodSelectorSection.DqRF7qkT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useEditorShopPayNavigation.Ofk_9zM-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/VaultedPayment.jo9rc-Iv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LocalizationExtensionField.DHNyXVrU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayOptInDisclaimer.DIuHKwtg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShipmentBreakdown.uZZB9Qwg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/MerchandiseModal.DiiM2wsp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/StackedMerchandisePreview.rjcIW2bJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PayButtonSection.5JjsyZUk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/component-ShopPayVerificationSwitch.CWW8ITkX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useSubscribeMessenger.DbkrILSQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index.Cq3rd4s1.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/app.DvF5UNzN.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/DeliveryMethodSelectorSection.Cx21oFfE.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0278/3074/7234/files/logo-mana_x320.png?v=1658150775"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  