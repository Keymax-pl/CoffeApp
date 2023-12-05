import { select, templates } from './settings.js';
import utils from './utils.js';

class Product {
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
  }

  renderProducts() {
    const thisProduct = this;

    const generatedHTML = templates.Product(thisProduct.data);

    thisProduct.element1 = utils.createDOMFromHTML (generatedHTML);

    thisProduct.element2 = utils.createDOMFromHTML (generatedHTML);

    const productContrainer1 = document.querySelector(select.containerOf.listProduct);

    const productContrainer2 = document.querySelector(select.containerOf.homeProducts);

    productContrainer1.appendChild(thisProduct.element1);

    productContrainer2.appendChild(thisProduct.element2);
  }
}

export default Product;
