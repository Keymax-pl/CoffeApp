export const select = {
  templateOf: {
    Product: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    listProduct: '#product-list',  
  },
  nav: {
    links: '.nav-links',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  Product: Handlebars.compile(document.querySelector(select.templateOf.Product).innerHTML),
};