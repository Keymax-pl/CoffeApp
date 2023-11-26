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

export const templates = {
  Product: Handlebars.compile(document.querySelector(select.templateOf.Product).innerHTML),
};