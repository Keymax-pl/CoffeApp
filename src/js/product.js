import { select,templates } from "./settings";
import utils from "./utils";

class Product {
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
  }

  renderProducts() {
    const thisProduct = this;

    const generatedHTML = templates.Product(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML (generatedHTML);

    const productContrainer = document.querySelector(select.containerOf.listProduct);

    productContrainer.appendChild(thisProduct.element);
  }
}
