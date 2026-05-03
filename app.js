// --- KHỞI TẠO GIỎ HÀNG ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cập nhật Badge giỏ hàng ngay khi tải trang
    updateCartBadge();

    // --- XỬ LÝ ĐĂNG KÝ ---
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) { alert("Mật khẩu xác nhận không khớp!"); return; }
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(user => user.email === email)) { alert("Email này đã được đăng ký!"); return; }

            users.push({ fullname, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Đăng ký thành công!");
            window.location.href = 'login.html';
        });
    }

    // --- XỬ LÝ ĐĂNG NHẬP ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                alert("Đăng nhập thành công!");
                window.location.href = 'index.html';
            } else {
                alert("Email hoặc mật khẩu không chính xác!");
            }
        });
    }

    // --- XỬ LÝ ĐĂNG XUẤT / HIỂN THỊ USER ---
    const userIcon = document.getElementById('user-login-btn') || document.querySelector('.nav-icons a[href="login.html"]');
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser && userIcon) {
        userIcon.innerHTML = `<i class="fas fa-user-check"></i> <span style="font-size: 10px">${loggedInUser.fullname.split(' ').pop()}</span>`;
        userIcon.href = "#";
        userIcon.onclick = (e) => {
            e.preventDefault();
            if(confirm("Bạn muốn đăng xuất?")) {
                sessionStorage.removeItem('loggedInUser');
                window.location.reload();
            }
        };
    }

    // --- XỬ LÝ THÊM VÀO GIỎ HÀNG (TRANG CHỦ) ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const product = {
                name: card.querySelector('h3').innerText,
                // Lấy giá, xóa dấu chấm và chữ đ
                price: parseInt(card.querySelector('.price').innerText.replace(/\D/g, '')),
                image: card.querySelector('.product-img img').src,
                quantity: 1
            };
            addToCart(product);
        });
    });

    // --- HIỂN THỊ GIỎ HÀNG (TRANG CART) ---
    if (document.getElementById('cart-items-output')) {
        renderCart();
    }
});

// Hàm thêm sản phẩm
function addToCart(product) {
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`Đã thêm ${product.name} vào giỏ!`);
}

// Cập nhật số trên icon giỏ hàng
function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.badge');
    if (badge) badge.innerText = total;
}

// Vẽ bảng giỏ hàng
function renderCart() {
    const output = document.getElementById('cart-items-output');
    const countText = document.getElementById('cart-count-text');
    let totalMoney = 0;

    if (cart.length === 0) {
        output.innerHTML = '<tr><td colspan="5" style="text-align:center">Giỏ hàng đang trống</td></tr>';
        countText.innerText = "Bạn chưa có sản phẩm nào trong giỏ.";
    } else {
        countText.innerText = `Có ${cart.length} sản phẩm trong giỏ hàng`;
        output.innerHTML = cart.map((item, index) => {
            const subtotal = item.price * item.quantity;
            totalMoney += subtotal;
            return `
                <tr>
                    <td>
                        <div class="p-item">
                            <img src="${item.image}">
                            <div class="p-info"><h3>${item.name}</h3></div>
                        </div>
                    </td>
                    <td>${item.price.toLocaleString()}đ</td>
                    <td>
                        <div class="qty-selector">
                            <button onclick="changeQty(${index}, -1)">-</button>
                            <input type="number" value="${item.quantity}" readonly>
                            <button onclick="changeQty(${index}, 1)">+</button>
                        </div>
                    </td>
                    <td><b style="color:var(--primary-color)">${subtotal.toLocaleString()}đ</b></td>
                    <td><button class="btn-remove" onclick="removeProduct(${index})"><i class="far fa-trash-alt"></i></button></td>
                </tr>
            `;
        }).join('');
    }
    document.querySelector('.total-amount').innerText = totalMoney.toLocaleString() + 'đ';
    const subtotalEl = document.getElementById('subtotal-amount');
    if(subtotalEl) subtotalEl.innerText = totalMoney.toLocaleString() + 'đ';
}

// Thay đổi số lượng tại trang Cart
window.changeQty = (index, delta) => {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
};

// Xóa sản phẩm tại trang Cart
window.removeProduct = (index) => {
    if (confirm("Xóa sản phẩm này khỏi giỏ?")) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartBadge();
    }
};