function showSection(sectionId) {
    const sections = document.getElementsByTagName('section');
    for (let section of sections) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}

function toggleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}

// Example functions for cart and checkout
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    document.getElementById('total-amount').textContent = total.toFixed(2);
    document.querySelector('.shopping-cart').style.display = 'block';
}

function checkout() {
    cart = [];
    updateCart();
    alert('Thank you for your purchase!');
}