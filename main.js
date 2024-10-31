function getProductHtml(product) {
    return `
       <div class="product-card">
                <img src="img/${product.image
                }">
                <div>
                <p>${product.title}</p>
                <p>${product.description}</p>
                <span class="price">${product.price}грн</span>
                </div>
                <button class="add_to_cart">+</button>
            </div>
    `
}


async function getProducts() {
    const response = await fetch('products.json')
    const data = await response.json();

    return data;
}

getProducts().then(function(products) {
    let productsList = document.querySelector('.products')

    if(productsList) {
        products.forEach(product => {
            productsList.innerHTML += getProductHtml(product);
        });
    }
})