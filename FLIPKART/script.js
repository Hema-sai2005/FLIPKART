document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    const cartCountElement = document.querySelector('.cart a');
    let cartItemCount = 0;

    // Event listener for Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productTitle = button.closest('.product-card').querySelector('.product-title').textContent;

            alert(Added "${productTitle}" (ID: ${productId}) to cart! (This is a simplified demo));

            cartItemCount++;
            cartCountElement.textContent = Cart (${cartItemCount});
        });
    });

    // Event listener for Buy Now buttons
    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productTitle = button.closest('.product-card').querySelector('.product-title').textContent;

            alert(Buying "${productTitle}" (ID: ${productId}) now! (This is a simplified demo));
        });
    });
});