const Product = require('./model/product');

class FakeDb {

  constructor(){
    this.products = [
      {
        name: 'Phone XL',
        coverImage: './assets/img/original.jpg',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'ヘッディング１',
        heading2: 'ヘッディング２',
        heading3: 'ヘッディング３',
        headingtext1: 'ヘッディングテキスト１',
        headingtext2: 'ヘッディングテキスト２',
        headingtext3: 'ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３'
      },
      {
        name: 'Phone Mini',
        coverImage: './assets/img/original.jpg',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'ヘッディング１',
        heading2: 'ヘッディング２',
        heading3: 'ヘッディング３',
        headingtext1: 'ヘッディングテキスト１',
        headingtext2: 'ヘッディングテキスト２',
        headingtext3: 'ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ '
      },
      {
        name: 'Phone Standard',
        coverImage: './assets/img/original.jpg',
        price: 299,
        description: 'Standard phone',
        heading1: 'ヘッディング１',
        heading2: 'ヘッディング２',
        heading3: 'ヘッディング３',
        headingtext1: 'ヘッディングテキスト１',
        headingtext2: 'ヘッディングテキスト２',
        headingtext3: 'ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ '
      },
      {
        name: 'Phone Speciald',
        coverImage: './assets/img/original.jpg',
        price: 999,
        description: 'Very special phone on sales.',
        heading1: 'ヘッディング１',
        heading2: 'ヘッディング２',
        heading3: 'ヘッディング３',
        headingtext1: 'ヘッディングテキスト１',
        headingtext2: 'ヘッディングテキスト２',
        headingtext3: 'ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ ヘッディングテキスト３ '
      }
    ];
  };

  async initDb () {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb () {
    await Product.deleteMany({});
  }

  pushProductsToDb () {
    this.products.forEach (
      (product) => {
        const newProduct = new Product(product);
        newProduct.save();
      }
    )
  };

  seeDb () {
    this.pushProductsToDb ();
  }
}

module.exports = FakeDb;
