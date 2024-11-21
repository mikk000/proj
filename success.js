function handleLogin(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'admin123' && password === 'pass123') {
        // Login successful
        window.location.href = '8WEBPAGE.html'; 
    } else {
 
        errorMessage.style.display = 'block';
    }
}
function handleLogout() {
    // Perform logout actions - Clear session, reset UI, etc.
    // For demonstration, simply redirecting to index.html
    window.location.href = 'MainLogin.html'; // Redirect to login page
}
let totalAmount = 0;

function addToCart(productName, productPrice) {
    totalAmount += productPrice;
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
    alert(productName + " has been added to your cart. Total amount: ₱" + totalAmount.toFixed(2));
}

function handleLogout() {
    window.location.href = 'MainLogin.html';
}