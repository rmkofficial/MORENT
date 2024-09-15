
# Morent - Araç Kiralama Platformu 🚗

Morent, araç kiralama işlemlerini kolaylaştıran modern bir web platformudur. Kullanıcı dostu arayüzü ve dinamik içerik yönetimi ile araç kiralama sürecini hızlı ve pratik bir hale getirir. Bu proje, React.js ve Strapi ile geliştirilmiş bir frontend-backend entegrasyonu örneğidir.

## Özellikler 🚀

- Kullanıcı dostu ve modern tasarım (Figma tasarımı baz alınarak).
- Dinamik içerik yönetimi (Strapi üzerinden).
- Popüler ve önerilen araçlar gibi içerikler Strapi'den API aracılığıyla yönetilir.
- Frontend tarafında hızlı ve esnek geliştirme ortamı.

## Teknolojiler 🛠️

### Frontend
- **React.js**: Kullanıcı arayüzü oluşturmak için.
- **Tailwind CSS**: Hızlı ve verimli bir şekilde stillendirme yapmak için.

### Backend
- **Strapi**: İçerik yönetimi ve API'ler için.
- **SQLite**: Varsayılan olarak kullanılan veritabanı (isteğe göre değiştirilebilir).

## Kurulum 🛠️

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/rmkofficial/MORENT
cd morent
```

### 2. Bağımlılıkları Yükleyin

Hem frontend hem de backend için gerekli bağımlılıkları yükleyin:

#### Frontend (Client)
```bash
cd client
npm install
```

#### Backend (Server - Strapi)
```bash
cd server
npm install
```

### 3. Strapi'yi Başlatın (Backend)

Strapi için varsayılan veritabanı olarak SQLite kullanıyoruz. Backend'i başlatmak için:

```bash
cd server
npm run develop
```

Bu komut Strapi'yi geliştirme modunda çalıştırır. Strapi paneline [http://localhost:1337/admin](http://localhost:1337/admin) üzerinden erişebilirsiniz.

### 4. Frontend'i Başlatın

```bash
cd client
npm run dev
```

Frontend geliştirme ortamı için proje [http://localhost:5173](http://localhost:5173) adresinde çalışmaya başlayacaktır.


## Kullanım 📝

- **Strapi Paneli**: İçerikleri dinamik olarak yönetmek ve API'ler oluşturmak için kullanılır. Admin paneli üzerinden yeni araçlar ekleyebilir, içerikleri güncelleyebilirsiniz.
- **Ana Sayfa**: Dinamik olarak Strapi'den çekilen popüler ve önerilen araçlar listelenir.

![image](https://github.com/user-attachments/assets/936eac6f-3d17-437e-8f65-b74b1481d00e)

![image](https://github.com/user-attachments/assets/0af0c60a-10cb-4f66-8a71-62891babea2b)

![image](https://github.com/user-attachments/assets/e7d6aefb-882e-424a-9b94-cdb3dbe94601)

![image](https://github.com/user-attachments/assets/07c36302-11fe-4a32-b944-7976117916ac)




