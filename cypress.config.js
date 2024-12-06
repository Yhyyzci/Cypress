const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      
        dashboardRun: "npx cypress run --record --key 21431916-92d8-466f-9cf3-d2f562ba4d54", // Dashboard kaydı için
        supportFile: 'cypress/support/e2e.js', // Global ayarları ve komutları içerir
        specPattern: 'cypress/e2e/Egitim/*.spec.js', // Test dosyalarınızın bulunduğu yol
        video: true, // Testler sırasında video kaydını etkinleştirir (varsayılan olarak 'true')
        screenshotsFolder: 'cypress/screenshots', // Ekran görüntülerinin kaydedileceği klasör
        trashAssetsBeforeRuns: true, // Test öncesi eski varlıkları temizler
        setupNodeEvents(on, config) {
            // Node events yapılandırması
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.name === 'chrome' || browser.name === 'edge') {
                    // Chrome veya Edge tarayıcısını başlatırken özel ayarlar ekleyebilirsiniz
                    launchOptions.args.push('--no-sandbox');
                }
                return launchOptions;
            });

            // Tarayıcıları filtrele: Sadece Chromium tabanlı tarayıcılar ve Electron dışındaki tarayıcıları kullan
            config.browsers = config.browsers.filter(
                (b) => b.family === 'chromium' || b.name === 'firefox' || b.name === 'edge'
            );

            return config;
        },
    },
    env: {
        // Çevre değişkenleri tanımlayabilirsiniz
        baseUrl: 'https://www.saucedemo.com/', // Örnek bir baseUrl
    },
});
