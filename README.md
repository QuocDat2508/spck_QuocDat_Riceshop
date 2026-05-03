giup toi thiet ke chuc nang trang admin cau truc code hien tai cua toi la
```
SPCK_QUOCDAT_RICESHOP
├─ about.html
├─ admin.html
├─ app.js
├─ cart.html
├─ checkout.html
├─ contact.html
├─ index.html
├─ login.html
├─ product.css
├─ product.html
├─ products.html
├─ README.md
├─ register.html
└─ style.css

```

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUOCDAT RICESHOP - Gạo Ngon Việt Nam</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="home-page"> <!-- Thêm class home-page để tách biệt style -->

    <!-- Header & Navigation -->
    <header>
        <nav class="navbar container">
            <div class="logo">
                <a href="index.html"><i class="fas fa-seedling"></i> QUOCDAT <span>RICE</span></a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html" class="active">Trang Chủ</a></li>
                <li><a href="products.html">Sản Phẩm</a></li>
                <li><a href="about.html">Giới Thiệu</a></li>
                <li><a href="contact.html">Liên Hệ</a></li>
            </ul>
            <div class="nav-icons">
                <a href="login.html" title="Tài khoản"><i class="fas fa-user"></i></a>
                <a href="cart.html" class="cart-icon">
                    <i class="fas fa-shopping-basket"></i>
                    <span class="badge">0</span>
                </a>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <span class="sub-title">Tinh hoa lúa gạo Việt</span>
            <h1>Gạo Sạch Từ Tâm <br> Nâng Tầm Bữa Việt</h1>
            <p>Cam kết 100% gạo sạch, không chất bảo quản, mang đến hương vị ngọt ngào trong từng hạt cơm.</p>
            <div class="hero-btns">
                <a href="products.html" class="btn btn-primary">Mua Ngay</a>
                <a href="about.html" class="btn btn-outline">Tìm Hiểu Thêm</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features container">
        <div class="feature-item">
            <i class="fas fa-truck-fast"></i>
            <h3>Giao Hàng Nhanh</h3>
            <p>Giao hàng trong nội thành chỉ trong 2 giờ.</p>
        </div>
        <div class="feature-item">
            <i class="fas fa-shield-halved"></i>
            <h3>Chất Lượng</h3>
            <p>Kiểm định an toàn thực phẩm nghiêm ngặt.</p>
        </div>
        <div class="feature-item">
            <i class="fas fa-tags"></i>
            <h3>Giá Tốt Nhất</h3>
            <p>Luôn có chương trình ưu đãi hàng tháng.</p>
        </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products container">
        <div class="section-header">
            <h2 class="section-title">Sản Phẩm Bán Chạy</h2>
            <p>Những loại gạo được khách hàng tin dùng nhất tại Quốc Đạt Rice</p>
        </div>
        
        <div class="product-grid">
            <!-- Product Item 1 -->
            <div class="product-card">
                <div class="product-img">
                    <span class="tag">Hot</span>
                    <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80" alt="Gạo ST25">
                    <div class="overlay">
                        <button class="view-detail">Xem nhanh</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>Gạo ST25 (Ngon nhất TG)</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <p class="price">35.000đ <small>/kg</small></p>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>

            <!-- Product Item 2 -->
            <div class="product-card">
                <div class="product-img">
                    <img src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=500&q=80" alt="Gạo Lứt">
                </div>
                <div class="product-info">
                    <h3>Gạo Lứt Huyết Rồng</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                    </div>
                    <p class="price">40.000đ <small>/kg</small></p>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>

            <!-- Product Item 3 -->
            <div class="product-card">
                <div class="product-img">
                    <img src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=500&q=80" alt="Gạo Đài Thơm">
                </div>
                <div class="product-info">
                    <h3>Gạo Đài Thơm 8</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <p class="price">22.000đ <small>/kg</small></p>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>

            <!-- Product Item 4 -->
            <div class="product-card">
                <div class="product-img">
                    <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80" alt="Gạo Nàng Sen">
                </div>
                <div class="product-info">
                    <h3>Gạo Nàng Sen</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                    </div>
                    <p class="price">28.000đ <small>/kg</small></p>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-container container">
            <div class="footer-col">
                <h3>QUOCDAT <span>RICE</span></h3>
                <p>Chuyên cung cấp các giải pháp về gạo sạch cho gia đình Việt. Chất lượng là uy tín hàng đầu của chúng tôi.</p>
                <div class="socials">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Liên Kết</h4>
                <ul>
                    <li><a href="index.html">Trang Chủ</a></li>
                    <li><a href="products.html">Sản Phẩm</a></li>
                    <li><a href="contact.html">Liên Hệ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Thông Tin</h4>
                <p><i class="fas fa-location-dot"></i> 123 Đường Lúa Vàng, TP. HCM</p>
                <p><i class="fas fa-phone"></i> 090 123 4567</p>
                <p><i class="fas fa-envelope"></i> contact@quocdatrice.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 QUOCDAT RICESHOP. Thiết kế bởi Quốc Đạt.</p>
        </div>
    </footer>

    <script src="app.js"></script>
</body>
</html>





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





// --- THÊM LOGIC THANH TOÁN VÀO APP.JS ---

document.addEventListener('DOMContentLoaded', () => {
    // ... (Giữ nguyên các code cũ của bạn) ...

    // Xử lý hiển thị trang Checkout
    if (document.getElementById('checkout-form')) {
        renderCheckoutSummary();
    }

    // Xử lý sự kiện đặt hàng
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert("Giỏ hàng của bạn đang trống!");
                window.location.href = 'index.html';
                return;
            }

            // Thu thập thông tin đơn hàng
            const orderData = {
                orderId: 'ORD-' + Date.now(),
                customer: {
                    name: document.getElementById('checkout-name').value,
                    phone: document.getElementById('checkout-phone').value,
                    address: document.getElementById('checkout-address').value,
                    note: document.getElementById('checkout-note').value
                },
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                payment: document.querySelector('input[name="payment"]:checked').value,
                date: new Date().toLocaleString(),
                status: 'Chờ xử lý'
            };

            // Lưu đơn hàng vào localStorage (để xem trong trang Admin nếu có)
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Xóa giỏ hàng sau khi đặt thành công
            localStorage.removeItem('cart');
            cart = [];
            updateCartBadge();

            // Thông báo thành công
            alert(`Cảm ơn ${orderData.customer.name}! Đơn hàng ${orderData.orderId} đã đặt thành công.`);
            window.location.href = 'index.html';
        });
    }
});

// Hàm hiển thị tóm tắt đơn hàng tại trang thanh toán
function renderCheckoutSummary() {
    const output = document.getElementById('checkout-items-list');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const totalEl = document.getElementById('checkout-total');
    let totalMoney = 0;

    if (cart.length === 0) {
        alert("Giỏ hàng trống, mời bạn mua hàng!");
        window.location.href = 'index.html';
        return;
    }

    output.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        totalMoney += itemTotal;
        return `
            <div class="checkout-item">
                <span>${item.name} <b>x${item.quantity}</b></span>
                <span>${itemTotal.toLocaleString()}đ</span>
            </div>
        `;
    }).join('');

    subtotalEl.innerText = totalMoney.toLocaleString() + 'đ';
    totalEl.innerText = totalMoney.toLocaleString() + 'đ';

    // Tự động điền thông tin nếu đã đăng nhập
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('checkout-name').value = loggedInUser.fullname;
        document.getElementById('checkout-phone').focus(); // Gợi ý điền tiếp SĐT
    }
}






giup toi thiet ke giao dien va chuc nang trang admin

