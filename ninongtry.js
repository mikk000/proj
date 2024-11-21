function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function toggleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
}

function toggleLoginForm() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Dummy validation - Replace with your actual login logic
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For demonstration purposes, check if username and password are valid
    if (username === 'admin123' && password === 'pass123') {
        alert('Login successful!');

    } else {
        var errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
}


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
    // For simplicity, this example just clears the cart
    cart = [];
    updateCart();
    alert('Thank you for your purchase!');
}

function showSection(sectionId) {
    // Example function to show sections based on navigation
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
    // Example function to toggle login form visibility
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}
