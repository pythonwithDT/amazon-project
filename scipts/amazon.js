let productsHTML = '';  // this is a variable that call and empty products

products.forEach( (product) => {  // this is a forloop===> [this a function that takes products and places them in the productsHTML]
    productsHTML +=` 
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars*10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-card" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>`;

});




document.querySelector('.js-products-grid').innerHTML = productsHTML;

// working on the cart

document.querySelectorAll('.js-add-to-card').forEach( (button) => { // we added an event listener which when we click on the add to cart will add the cart
    button.addEventListener('click', () => { // we looped through all the buttons to listen for the click. 
        const productId = button.dataset.productId;  // this is a variable that will hold the product id

        let matchingItem;  // this is a variable that will hold the matching item

        cart.forEach( (item) => {  // this is a forloop that will loop through the cart
            if(productId === item.productId) {  //  this is a condition that will check if the product id is equal to the item id
                matchingItem = item;  // this is a variable that will hold the matching item
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1; 
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            })
        }

        console.log(cart)
    });
    });