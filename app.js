document.addEventListener('DOMContentLoaded', () => {
    // Xử lý Form Đăng Nhập
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            // Hiệu ứng giả lập load
            const btn = loginForm.querySelector('.btn-submit');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang đăng nhập...';
            
            setTimeout(() => {
                alert('Đăng nhập thành công với: ' + email);
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // Xử lý Form Đăng Ký
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = document.getElementById('password').value;
            const confirmPass = document.getElementById('confirm-password').value;

            if (pass !== confirmPass) {
                alert('Mật khẩu xác nhận không khớp!');
                return;
            }

            const btn = registerForm.querySelector('.btn-submit');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang tạo tài khoản...';

            setTimeout(() => {
                alert('Đăng ký tài khoản thành công!');
                window.location.href = 'login.html';
            }, 1500);
        });
    }
});
// Tính năng thêm vào giỏ hàng đơn giản
let cartCount = 0;
const cartCountDisplay = document.querySelector('.cart-count');
const addBtns = document.querySelectorAll('.btn-add-cart');

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartCountDisplay.innerText = cartCount;
        
        // Hiệu ứng thông báo nhỏ
        const productName = btn.parentElement.querySelector('h3').innerText;
        alert(`Đã thêm ${productName} vào giỏ hàng!`);
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Bạn có thể thêm class để hiện menu mobile ở đây
        alert('Chức năng menu trên mobile đang được phát triển');
    });
}




document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const badge = document.querySelector('.badge');
    const addButtons = document.querySelectorAll('.add-to-cart');
    let count = 0;

    // 1. Hiệu ứng đổi màu Navbar khi cuộn
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#ffffff';
            navbar.style.padding = '5px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Xử lý thêm vào giỏ hàng
    addButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            badge.innerText = count;
            
            // Hiệu ứng rung icon giỏ hàng
            const cartIcon = document.querySelector('.cart-btn i');
            cartIcon.style.animation = 'shake 0.5s ease';
            setTimeout(() => cartIcon.style.animation = '', 500);

            // Thông báo nhỏ
            const toast = document.createElement('div');
            toast.className = 'toast-msg';
            toast.innerText = 'Đã thêm vào giỏ hàng!';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        });
    });
});

// Thêm CSS animation cho giỏ hàng vào style.css nếu muốn
// @keyframes shake { 0% {transform: rotate(0)} 25% {transform: rotate(15deg)} 50% {transform: rotate(-15deg)} 100% {transform: rotate(0)} }