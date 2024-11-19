# Temel Cypress imajını kullanıyoruz
FROM cypress/included:12.0.0

# Çalışma dizinini belirleyin
WORKDIR /app

# Bağımlılıkları yüklemek için package.json ve package-lock.json dosyalarını kopyalayın
COPY package.json package-lock.json ./

# Bağımlılıkları yükleyin
RUN npm install

# Testleri çalıştıracak komutu ekleyin
CMD ["npx", "cypress", "run"]
