describe('Login Testi', () => {


    it('Giriş yapabilmeli', () => {
        // Ana sayfayı ziyaret et
        cy.visit('https://www.kidokit.com/');
        // İstediğiniz testlerin geri kalanını buraya ekleyin
        // Örneğin, giriş yapıldıktan sonra kullanıcıyı doğrulamak:
        cy.url().should('include', '/dashboard'); // Örnek doğrulama

        // XPath ile butona tıkla
        cy.xpath("//button[contains(@style, 'line')]").click({ force: true });


    });

});
