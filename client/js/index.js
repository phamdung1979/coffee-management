import { getProductList } from "./get-products.js";

document.addEventListener("DOMContentLoaded",() => {
    const productContainer = document.querySelector(".product-list");
    console.log(productContainer);
    getProductList(productContainer,4);
})