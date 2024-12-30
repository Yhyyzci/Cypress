/// <reference types="cypress" />

describe('POST API Testi: Kullanıcı Oluşturma', () => {

    it('Yeni kullanıcı oluşturma', () => {
        // POST isteği yapılacak URL ve veri
        const url = 'https://jsonplaceholder.typicode.com/users';
        const userData = {
            name: 'John Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
            phone: '123-456-7890',
            website: 'johndoe.com'
        };

        // POST isteğini gönderme
        cy.request({
            method: 'POST',
            url: url,
            body: userData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            // Yanıtın başarılı olduğunu kontrol et
            expect(response.status).to.eq(201);  // HTTP 201 Created
            expect(response.body).to.have.property('name', userData.name);
            expect(response.body).to.have.property('username', userData.username);
            expect(response.body).to.have.property('email', userData.email);
            expect(response.body).to.have.property('phone', userData.phone);
            expect(response.body).to.have.property('website', userData.website);
        });
    });

});
