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









// --- THÊM LOGIC ADMIN VÀO APP.JS ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Chuyển đổi các Tab trong Admin
    const adminMenuItems = document.querySelectorAll('.admin-menu li[data-target]');
    adminMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Xóa active cũ
            document.querySelectorAll('.admin-menu li').forEach(li => li.classList.remove('active'));
            document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
            
            // Active tab mới
            item.classList.add('active');
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
            
            // Reload dữ liệu tương ứng
            if(target === 'dashboard') loadStats();
            if(target === 'orders') renderAdminOrders();
        });
    });

    // 2. Kiểm tra nếu đang ở trang Admin thì load dữ liệu mặc định
    if (document.querySelector('.admin-page')) {
        loadStats();
        renderAdminOrders();
    }
});

// Hàm tính toán thống kê
function loadStats() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const revenue = orders.reduce((total, order) => total + order.total, 0);
    
    document.getElementById('stat-revenue').innerText = revenue.toLocaleString() + 'đ';
    document.getElementById('stat-orders').innerText = orders.length;
    document.getElementById('stat-users').innerText = users.length;
}

// Hàm hiển thị đơn hàng trong Admin
function renderAdminOrders() {
    const ordersList = document.getElementById('admin-orders-list');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if(!ordersList) return;

    if (orders.length === 0) {
        ordersList.innerHTML = '<tr><td colspan="6" style="text-align:center">Chưa có đơn hàng nào</td></tr>';
        return;
    }

    ordersList.innerHTML = orders.map((order, index) => `
        <tr>
            <td>#${order.orderId.slice(-6)}</td>
            <td>${order.customer.name}</td>
            <td>${order.date.split(',')[0]}</td>
            <td>${order.total.toLocaleString()}đ</td>
            <td><span class="status-badge ${order.status === 'Hoàn thành' ? 'status-completed' : 'status-pending'}">${order.status}</span></td>
            <td>
                <button class="btn-sm" onclick="updateOrderStatus(${index})">Duyệt</button>
                <button class="btn-sm" style="background: #fab1a0" onclick="deleteOrder(${index})">Xóa</button>
            </td>
        </tr>
    `).join('');
}

// Hàm Duyệt đơn hàng (Đổi trạng thái)
window.updateOrderStatus = (index) => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders[index].status = 'Hoàn thành';
    localStorage.setItem('orders', JSON.stringify(orders));
    renderAdminOrders();
    loadStats();
};

// Hàm Xóa đơn hàng
window.deleteOrder = (index) => {
    if (confirm('Bạn có chắc muốn xóa đơn này?')) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        renderAdminOrders();
        loadStats();
    }
};





