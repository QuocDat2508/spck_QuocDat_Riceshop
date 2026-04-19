// app.js

document.addEventListener('DOMContentLoaded', () => {
    // --- XỬ LÝ ĐĂNG KÝ ---
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Kiểm tra mật khẩu khớp
            if (password !== confirmPassword) {
                alert("Mật khẩu xác nhận không khớp!");
                return;
            }

            // Lấy danh sách user từ localStorage (nếu chưa có thì tạo mảng rỗng)
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Kiểm tra email đã tồn tại chưa
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert("Email này đã được đăng ký!");
                return;
            }

            // Thêm user mới
            const newUser = {
                fullname: fullname,
                email: email,
                password: password // Lưu ý: Trong thực tế nên mã hóa mật khẩu
            };

            users.push(newUser);

            // Lưu lại vào localStorage (dưới dạng chuỗi JSON)
            localStorage.setItem('users', JSON.stringify(users));

            alert("Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
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

            // Lấy danh sách user từ localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Tìm user khớp email và password
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Lưu trạng thái đăng nhập
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                
                alert("Đăng nhập thành công! Chào mừng " + user.fullname);
                window.location.href = 'index.html'; // Chuyển hướng về trang chủ
            } else {
                alert("Email hoặc mật khẩu không chính xác!");
            }
        });
    }

    // --- CẬP NHẬT GIAO DIỆN TRANG CHỦ KHI ĐÃ ĐĂNG NHẬP (Tùy chọn) ---
    const userIcon = document.querySelector('.nav-icons a[href="login.html"]');
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (loggedInUser && userIcon) {
        // Thay đổi icon login thành tên user hoặc icon đăng xuất
        userIcon.innerHTML = `<i class="fas fa-user-check"></i> <span style="font-size: 12px">${loggedInUser.fullname.split(' ').pop()}</span>`;
        userIcon.href = "#"; // Hoặc trang cá nhân
        
        // Thêm nút đăng xuất nếu cần
        userIcon.addEventListener('click', () => {
            if(confirm("Bạn có muốn đăng xuất không?")) {
                sessionStorage.removeItem('loggedInUser');
                window.location.reload();
            }
        });
    }
});