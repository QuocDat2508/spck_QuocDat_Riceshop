

giup toi chinh lai trang san pham va trang danh sach san pham dep mat hon
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


/* --- TRANG SẢN PHẨM --- */
.page-header {
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1501290741922-b56c0d0884af?w=1200');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 60px 20px;
    margin-bottom: 40px;
}

.shop-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 15px;
}

.search-box {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}

.search-box input {
    padding: 10px;
    border: none;
    outline: none;
    width: 250px;
}

.search-box button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0 15px;
    cursor: pointer;
}

.product-name {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 10px;
    transition: 0.3s;
}

.product-name:hover {
    color: var(--primary-color);
}

/* --- TRANG CHI TIẾT SẢN PHẨM --- */
.product-detail-container {
    padding: 50px 20px;
}

.product-detail-flex {
    display: flex;
    gap: 50px;
    align-items: flex-start;
    flex-wrap: wrap; /* Tránh bể trên mobile */
}

.detail-img {
    flex: 1;
    min-width: 300px;
}

.detail-img img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.detail-info {
    flex: 1;
    min-width: 300px;
}

.breadcrumb {
    font-size: 14px;
    color: #888;
    margin-bottom: 15px;
}

.breadcrumb a { color: #888; text-decoration: none; }

.detail-price {
    font-size: 2rem;
    color: var(--primary-color);
    font-weight: 700;
    margin: 15px 0;
}

.description {
    margin: 20px 0;
    color: #555;
    line-height: 1.8;
}

.purchase-actions {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.purchase-actions input {
    width: 60px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.product-meta {
    border-top: 1px solid #eee;
    padding-top: 20px;
    font-size: 14px;
}

/* Responsive cho Mobile */
@media (max-width: 768px) {
    .product-detail-flex {
        flex-direction: column;
    }
    .shop-controls {
        flex-direction: column;
        align-items: stretch;
    }
    .search-box input {
        width: 100%;
    }
}



<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết sản phẩm - QUOCDAT RICESHOP</title>
    <link rel="stylesheet" href="product.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <nav class="navbar container">
            <div class="logo"><a href="index.html">QUOCDAT <span>RICE</span></a></div>
            <ul class="nav-links">
                <li><a href="index.html">Trang Chủ</a></li>
                <li><a href="products.html">Sản Phẩm</a></li>
            </ul>
        </nav>
    </header>

    <main class="container product-detail-container">
        <div class="product-detail-flex">
            <div class="detail-img">
                <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600" alt="Gạo ST25">
            </div>
            <div class="detail-info">
                <nav class="breadcrumb">
                    <a href="index.html">Trang chủ</a> / <a href="products.html">Sản phẩm</a> / Gạo ST25
                </nav>
                <h1>Gạo ST25 Đặc Sản Sóc Trăng</h1>
                <p class="detail-price">35.000đ /kg</p>
                <div class="stars">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> (120 đánh giá)
                </div>
                <p class="description">
                    Gạo ST25 là loại gạo ngon nhất thế giới, hạt gạo dài, trắng trong, không bạc bụng. 
                    Khi nấu chín cơm dẻo, thơm mùi lá dứa, vị ngọt tự nhiên.
                </p>
                <div class="purchase-actions">
                    <input type="number" value="1" min="1">
                    <button class="btn-primary">MUA NGAY</button>
                    <button class="btn-outline"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
                <div class="product-meta">
                    <p><strong>Danh mục:</strong> Gạo Đặc Sản</p>
                    <p><strong>Tình trạng:</strong> Còn hàng</p>
                </div>
            </div>
        </div>
    </main>
</body>
</html>



<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sản Phẩm - QUOCDAT RICESHOP</title>
    <link rel="stylesheet" href="product.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navbar (Giống trang chủ) -->
    <header>
        <nav class="navbar container">
            <div class="logo">
                <a href="index.html"><i class="fas fa-seedling"></i> QUOCDAT <span>RICE</span></a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Trang Chủ</a></li>
                <li><a href="products.html" class="active">Sản Phẩm</a></li>
                <li><a href="about.html">Giới Thiệu</a></li>
                <li><a href="contact.html">Liên Hệ</a></li>
            </ul>
            <div class="nav-icons">
                <a href="login.html"><i class="fas fa-user"></i></a>
                <a href="cart.html" class="cart-icon"><i class="fas fa-shopping-basket"></i><span class="badge">0</span></a>
            </div>
        </nav>
    </header>

    <!-- Banner nhỏ cho trang sản phẩm -->
    <section class="page-header">
        <h1>Danh Sách Gạo Sạch</h1>
        <p>Hạt ngọc trời - Khởi nguồn sức khỏe</p>
    </section>

    <main class="container">
        <!-- Bộ lọc và Tìm kiếm nhanh -->
        <div class="shop-controls">
            <div class="search-box">
                <input type="text" placeholder="Tìm loại gạo...">
                <button><i class="fas fa-search"></i></button>
            </div>
            <select class="sort-select">
                <option value="default">Sắp xếp: Mặc định</option>
                <option value="price-low">Giá: Thấp đến Cao</option>
                <option value="price-high">Giá: Cao đến Thấp</option>
            </select>
        </div>

        <!-- Lưới sản phẩm -->
        <div class="product-grid">
            <!-- Sản phẩm 1 -->
            <div class="product-card">
                <div class="product-img">
                    <a href="product.html?id=1">
                        <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500" alt="Gạo ST25">
                    </a>
                    <span class="tag">Bán chạy</span>
                </div>
                <div class="product-info">
                    <a href="product.html?id=1" class="product-name">Gạo ST25 Đặc Sản Sóc Trăng</a>
                    <p class="price">35.000đ /kg</p>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>

            <!-- Sản phẩm 2 -->
            <div class="product-card">
                <div class="product-img">
                    <a href="product.html?id=2">
                        <img src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500" alt="Gạo Lứt">
                    </a>
                </div>
                <div class="product-info">
                    <a href="product.html?id=2" class="product-name">Gạo Lứt Đỏ Huyết Rồng</a>
                    <p class="price">42.000đ /kg</p>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                    </div>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>

            <!-- Sản phẩm 3 -->
            <div class="product-card">
                <div class="product-img">
                    <a href="product.html?id=3">
                        <img src="https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500" alt="Gạo Đài Thơm">
                    </a>
                </div>
                <div class="product-info">
                    <a href="product.html?id=3" class="product-name">Gạo Đài Thơm 8 Loại 1</a>
                    <p class="price">22.000đ /kg</p>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>

            <!-- Sản phẩm 4 -->
            <div class="product-card">
                <div class="product-img">
                    <a href="product.html?id=4">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500" alt="Gạo Nếp">
                    </a>
                </div>
                <div class="product-info">
                    <a href="product.html?id=4" class="product-name">Gạo Nếp Cái Hoa Vàng</a>
                    <p class="price">30.000đ /kg</p>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                    </div>
                    <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="footer-bottom">
            <p>&copy; 2024 QUOCDAT RICESHOP.</p>
        </div>
    </footer>
</body>
</html>