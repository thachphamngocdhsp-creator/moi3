/* =========================================================================
   DỮ LIỆU SẢN PHẨM & CẤU TRÚC CHO TRANG WEB ENA GREEN CO., LTD
   Thành viên của ENA GROUP - Xuất khẩu hạt điều, gia vị & thực phẩm cao cấp
   ========================================================================= */

// =========================================================================
// 1. DANH SÁCH SẢN PHẨM TỪ FILE TÀI LIỆU ENA GREEN
// =========================================================================
const PRODUCTS = [
  // --- 1. HẠT ĐIỀU XUẤT KHẨU (CASHEW KERNELS) ---
  {
    id: "ww180",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Xuất Khẩu (WW)",
    name: "Nhân Điều Trắng W180 (King Size Jumbo)",
    price: 270000,
    oldPrice: 300000,
    tag: "Cao Cấp Nhất",
    image: "/1.  RAW CASHEW KERNELS/2. WW180.png",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Cấp hạt lớn nhất, 170-180 hạt/pound. Hạt điều nguyên vẹn, màu trắng tự nhiên, béo ngậy đỉnh cao xuất khẩu.",
    origin: "Việt Nam (Chuỗi cung ứng ENA GREEN)",
    spec: "Độ ẩm ≤ 5.0% | Tạp chất ≤ 0.5% | Đạt chuẩn ISO, HACCP, FDA / EU",
    packaging: "Hút chân không 22.68kg (50lbs) / Lon thiếc 10kg / Thùng carton / OEM"
  },
  {
    id: "ww210",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Xuất Khẩu (WW)",
    name: "Nhân Điều Trắng W210 (Jumbo Size)",
    price: 270000,
    oldPrice: 300000,tag: "Chất Lượng Thượng Hạng",
    image: "/1.  RAW CASHEW KERNELS/3. WW210.png",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Kích thước Jumbo 200-210 hạt/pound. Nhân hạt đồng đều, độ béo giòn thơm ngon chuẩn thị trường Mỹ & Châu Âu.",
    origin: "Việt Nam (Hệ sinh thái ENA GROUP)",
    spec: "Độ ẩm ≤ 5.0% | Tạp chất ≤ 0.5% | Chứng nhận ISO, HACCP",
    packaging: "Thùng hút chân không / OEM Private Label"
  },
  {
    id: "ww240",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Xuất Khẩu (WW)",
    name: "Nhân Điều Trắng W240 (Large Size)",
    price: 270000,
    oldPrice: 300000,
    tag: "Xuất Khẩu Nhiều",
    image: "/1.  RAW CASHEW KERNELS/4. WW240.png",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Kích thước lớn 220-240 hạt/pound. Rất ưa chuộng cho siêu thị bán lẻ và nhà chế biến bánh kẹo quốc tế.",
    origin: "Bình Phước, Việt Nam",
    spec: "Độ ẩm ≤ 5.0% | Tạp chất ≤ 0.5% | Chuẩn FDA/EU",
    packaging: "Thùng carton 22.68kg / Lon thiếc 11.34kg"
  },
  {
    id: "ww320",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Xuất Khẩu (WW)",
    name: "Nhân Điều Trắng W320 (Standard Best Seller)",
    price: 245000,
    oldPrice: 275000,
    tag: "Bán Chạy Nhất",
    image: "/1.  RAW CASHEW KERNELS/5. WW320.png",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Dòng hạt tiêu chuẩn phổ biến nhất thế giới (300-320 hạt/pound), cân bằng hoàn hảo giữa giá thành và chất lượng.",
    origin: "Việt Nam (Mạng lưới ENA GREEN)",
    spec: "Độ ẩm ≤ 5.0% | Tạp chất ≤ 0.5% | Đạt chuẩn ISO & HACCP",
    packaging: "Đóng gói Bulk / Lon thiếc / OEM Túi Zip"
  },
  {
    id: "ww450",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Xuất Khẩu (WW)",
    name: "Nhân Điều Trắng W450 (Giá Cạnh Tranh)",
    price: 210000,
    oldPrice: 235000,
    tag: "Giá Tốt Nhất",
    image: "/1.  RAW CASHEW KERNELS/6. WW450.png",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Kích thước nhỏ 400-450 hạt/pound, phù hợp làm nguyên liệu rang tẩm vị, sản xuất snack và đóng gói giá rẻ.",
    origin: "Việt Nam",
    spec: "Độ ẩm ≤ 5.0% | Tạp chất ≤ 0.5%",
    packaging: "Đóng bao hút chân không 22.68kg"
  },
  {
    id: "sw240",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Cháy Xém (SW)",
    name: "Nhân Điều Cháy Xém SW240 (Scorched Whole)",
    price: 220000,
    oldPrice: 250000,
    tag: "Giá Tối Ưu",
    image: "/1.  RAW CASHEW KERNELS/7. SW240.png",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Nhân điều nguyên hạt ngả màu vàng nâu nhẹ do nhiệt độ chế biến, giữ nguyên độ ngậy giòn với chi phí tốt hơn.",
    origin: "Việt Nam",
    spec: "Độ ẩm ≤ 5.0% | Tạp chất ≤ 0.5%",
    packaging: "Túi chân không 22.68kg"
  },
  {
    id: "pieces-lp",
    category: "cashew_kernels",
    categoryName: "Hạt Điều Vỡ (Pieces)",
    name: "Nhân Điều Vỡ Miếng LP / SP / BB (Chế Biến Thực Phẩm)",
    price: 160000,
    oldPrice: 185000,
    tag: "Nguyên Liệu Bánh Kẹo",
    image: "/1.  RAW CASHEW KERNELS/19. LP.png",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Các dòng hạt điều vỡ miếng lớn (LP), vỡ nhỏ (SP), vụn (BB) chuyên dùng làm bánh kẹo, sữa hạt điều và gia vị.",
    origin: "Việt Nam",
    spec: "Sạch sẽ, không lẫn tạp chất, độ ẩm ≤ 5.0%",
    packaging: "Thùng 22.68kg / Bao OEM"
  },

  // --- 2. HẠT ĐIỀU CHẾ BIẾN & TẨM VỊ ---
  {
    id: "spiced-salted-skin",
    category: "processed_cashews",
    categoryName: "Hạt Điều Chế Biến",
    name: "Hạt Điều Rang Muối Vỏ Lụa BÌNH PHƯỚC",
    price: 185000,
    oldPrice: 215000,
    tag: "Đặc Sản Truyền Thống",
    image: "/2. SPICED CASHEW NUTS/DRY ROASTED SALTED CASHEW WITH SKIN.png",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Hạt điều vỏ lụa rang củi truyền thống đậm đà vị biển, bóc vỏ giòn rụm béo ngậy.",
    origin: "Bình Phước, Việt Nam",
    spec: "Hộp PET 500g / Lon thiếc / Túi Zip"
  },
  {
    id: "spiced-garlic-chili",
    category: "processed_cashews",
    categoryName: "Hạt Điều Tẩm Vị",
    name: "Hạt Điều Tẩm Vị Tỏi Ớt Cay Nồng (Garlic Chili)",
    price: 190000,
    oldPrice: 220000,
    tag: "Vị Bán Chạy",
    image: "/2. SPICED CASHEW NUTS/GRALIC FLAVORED CASHEW.png",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Áo lớp gia vị tỏi phi thơm lừng cùng ớt cay nhẹ, kích thích vị giác cực đỉnh.",
    origin: "Bình Phước, Việt Nam",
    spec: "Đóng hộp PET / Bao bì OEM"
  },
  {
    id: "spiced-honey",
    category: "processed_cashews",
    categoryName: "Hạt Điều Tẩm Vị",
    name: "Hạt Điều Áo Mật Ong Rừng (Honey Flavored)",
    price: 195000,
    oldPrice: 225000,
    tag: "Thơm Ngọt Ngào",
    image: "/2. SPICED CASHEW NUTS/HONEY FLAVORED CASHEW.png",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Kế thừa vị ngọt tự nhiên của mật ong rừng nguyên chất quyện cùng hạt điều béo ngậy.",
    origin: "Việt Nam",
    spec: "Mẫu mã hộp quà tặng / Lon thiếc xuất khẩu"
  },
  {
    id: "spiced-wasabi",
    category: "processed_cashews",
    categoryName: "Hạt Điều Tẩm Vị",
    name: "Hạt Điều Vị Wasabi Nhật Bản (Mù Tạt)",
    price: 200000,
    oldPrice: 230000,
    tag: "Độc Đáo Xuất Khẩu",
    image: "/2. SPICED CASHEW NUTS/WASABI FLAVORED CASHEW.jfif",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Cảm giác cay nồng xộc lên mũi sảng khoái kết hợp nhân điều béo ngậy, rất được thị trường Nhật & Hàn ưa chuộng.",
    origin: "Việt Nam",
    spec: "Đạt chuẩn Halal & ISO 22000"
  },
  {
    id: "spiced-cheese",
    category: "processed_cashews",
    categoryName: "Hạt Điều Tẩm Vị",
    name: "Hạt Điều Phô Mai Béo Ngậy (Cheese Flavor)",
    price: 195000,
    oldPrice: 220000,
    tag: "Mới Nổi Bật",
    image: "/2. SPICED CASHEW NUTS/CASHEW NUTS WITH CHEESE FLAVOR.png",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Lớp bột phô mai béo ngậy phủ đều quanh hạt điều giòn tan, món snack lành mạnh cho mọi lứa tuổi.",
    origin: "Việt Nam",
    spec: "Đóng gói lon PET 250g / 500g"
  },
  {
    id: "spiced-seaweed-egg",
    category: "processed_cashews",
    categoryName: "Hạt Điều Tẩm Vị",
    name: "Hạt Điều Trứng Muối Rong Biển (Seaweed Salted Egg)",
    price: 210000,
    oldPrice: 240000,
    tag: "Hot Trend",
    image: "/2. SPICED CASHEW NUTS/CASHEW NUTS WITH SEAWEED SALTED EGG FLAVOR.png",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Sự hòa quyện tuyệt vời giữa vị trứng muối mặn mòi, lá rong biển thơm giòn và nhân điều cao cấp.",
    origin: "Việt Nam",
    spec: "Lon thiếc cao cấp xuất khẩu"
  },

  // --- 3. GIA VỊ XUẤT KHẨU (SPICES) ---
  {
    id: "spice-pepper",
    category: "spices",
    categoryName: "Gia Vị Xuất Khẩu",
    name: "Tiêu Đen & Tiêu Trắng Hạt Đạt Chuẩn Xuất Khẩu",
    price: 150000,
    oldPrice: 180000,
    tag: "Gia Vị Đỉnh Cao",
    image: "/2. SPICED CASHEW NUTS/CASHEW NUTS WITH PEPPER FLAVOR.png",
    fallbackImg: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    description: "Tiêu đen, tiêu trắng hạt chắc cay nồng đậm đà từ các vùng nguyên liệu chất lượng cao của Việt Nam.",
    origin: "Việt Nam (Chuỗi nông sản ENA GROUP)",
    spec: "Độ ẩm ≤ 12% | Dung trọng 500-580 g/l | Hỗ trợ xuất khẩu Bulk/OEM"
  },
  {
    id: "spice-cinnamon-star",
    category: "spices",
    categoryName: "Gia Vị Xuất Khẩu",
    name: "Quế Thanh & Hoa Hồi Khô Việt Nam",
    price: 170000,
    oldPrice: 200000,
    tag: "Hương Thơm Tự Nhiên",
    image: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Quế cạo vỏ cuộn tròn và hoa hồi khô tự nhiên giàu tinh dầu, đáp ứng thị trường Châu Âu, Trung Đông & Mỹ.",
    origin: "Việt Nam",
    spec: "Hàm lượng tinh dầu cao | Đóng thùng carton 10kg-20kg"
  },

  // --- 4. TRÁI CÂY SẤY & HẠT KHÁC ---
  {
    id: "dried-mango",
    category: "dried_fruit",
    categoryName: "Trái Cây Sấy Dẻo",
    name: "Xoài Sấy Dẻo Tự Nhiên Dẻo Quánh 500g",
    price: 145000,
    oldPrice: 170000,
    tag: "Xuất Khẩu Thượng Hạng",
    image: "/3. DRIED FRUIT/1. SOFT- DRIED MANGO.png",
    fallbackImg: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    description: "Xoài chín cây sấy lạnh công nghệ cao, vị chua ngọt tự nhiên, dẻo thơm nguyên màu sắc và vitamin.",
    origin: "Đồng Bằng Sông Cửu Long, Việt Nam",
    spec: "Đóng gói túi zip 250g / 500g / Thùng 10kg"
  },
  {
    id: "dried-lotus",
    category: "dried_fruit",
    categoryName: "Trái Cây & Hạt Sấy",
    name: "Hạt Sen Sấy Giòn Tự Nhiên Đồng Tháp",
    price: 210000,
    oldPrice: 240000,
    tag: "Bổ Dưỡng",
    image: "/3. DRIED FRUIT/10. DRIED LOTUS SEEDS.jfif",
    fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Hạt sen sấy chân không giòn rụm bùi béo, lưu giữ vị tự nhiên tốt cho sức khỏe và giấc ngủ.",
    origin: "Đồng Tháp, Việt Nam",
    spec: "Hộp 250g / 500g"
  },
  {
    id: "dried-jackfruit",
    category: "dried_fruit",
    categoryName: "Trái Cây Sấy",
    name: "Mít Sấy Giòn Thượng Hạng 500g",
    price: 130000,
    oldPrice: 155000,
    tag: "Giòn Rụm Ngọt Thơm",
    image: "/3. DRIED FRUIT/3. DRIED JACKFRUIT.jfif",
    fallbackImg: "https://images.unsplash.com/photo-1509358211425-24e038063f28?auto=format&fit=crop&w=800&q=80",
    description: "Mít Thái chín sấy thăng hoa giòn xốp, ngọt đậm tự nhiên, không chất bảo quản.",
    origin: "Việt Nam",
    spec: "Túi zip bảo quản lâu dài"
  }
];

// =========================================================================
// 2. BIẾN TRẠNG THÁI (STATE)
// =========================================================================
let cart = [
  {
    product: PRODUCTS[0],
    quantity: 1
  }
];

let currentCategory = 'all';

// =========================================================================
// 3. KHỞI CHẠY TRANG WEB
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
});

// =========================================================================
// 4. HIỂN THỊ DANH SÁCH SẢN PHẨM RA GIAO DIỆN
// =========================================================================
function renderProducts(items = PRODUCTS) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div class="loading-spinner">Không tìm thấy sản phẩm phù hợp.</div>`;
    return;
  }

  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <div class="product-thumb">
        <img src="${p.image}" onerror="this.src='${p.fallbackImg}'" alt="${p.name}">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
      </div>
      <div class="product-body">
        <span class="product-category">${p.categoryName}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-price-row">
          <span class="price-current">${p.price.toLocaleString('vi-VN')}đ</span>
          ${p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}đ</span>` : ''}
        </div>
        <div class="product-card-btns">
          <button class="btn btn-outline" onclick="openProductDetail('${p.id}')">👁️ Xem Specs</button>
          <button class="btn btn-primary" onclick="addToCart('${p.id}')">🛒 Đặt Hàng</button>
        </div>
      </div>
    </div>
  `).join('');
}

// =========================================================================
// 5. BỘ LỌC VÀ TÌM KIẾM SẢN PHẨM
// =========================================================================
function filterCategory(category, btnElement) {
  currentCategory = category;

  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  let filtered = PRODUCTS;
  if (category !== 'all') {
    filtered = PRODUCTS.filter(p => p.category === category);
  }

  renderProducts(filtered);
}

function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  if (!query) {
    filterCategory(currentCategory);
    return;
  }

  const results = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.categoryName.toLowerCase().includes(query)
  );

  renderProducts(results);
}

function sortProducts() {
  const sortType = document.getElementById("sortSelect").value;
  let sorted = [...PRODUCTS];

  if (sortType === 'price-asc') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortType === 'price-desc') {
    sorted.sort((a, b) => b.price - a.price);
  }

  renderProducts(sorted);
}

// =========================================================================
// 6. XỬ LÝ GIỎ HÀNG
// =========================================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartUI();
  toggleCartDrawer(true);
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.product.id !== productId);
  }

  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  const listEl = document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cartTotalPrice");

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (countEl) countEl.innerText = totalCount;
  if (totalEl) totalEl.innerText = `${totalPrice.toLocaleString('vi-VN')}đ`;

  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `<p class="empty-msg">Giỏ hàng xuất khẩu của bạn đang trống.</p>`;
    return;
  }

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.product.image}" onerror="this.src='${item.product.fallbackImg}'">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.product.name}</h4>
        <div class="cart-item-price">${item.product.price.toLocaleString('vi-VN')}đ</div>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
          <button class="qty-btn" onclick="updateQuantity('${item.product.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.product.id}', 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");

  if (!drawer || !overlay) return;

  if (open === true) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  } else if (open === false) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    drawer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// =========================================================================
// 7. CỬA SỔ MODAL (CHI TIẾT, BÁO GIÁ OEM / BULK EXPORT)
// =========================================================================
function openProductDetail(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById("detailModal");
  const content = document.getElementById("detailModalContent");

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;">
      <img src="${p.image}" onerror="this.src='${p.fallbackImg}'" style="width: 100%; height: 280px; object-fit: cover; border-radius: 12px; border: 1px solid #e7e5e4;">
      <div>
        <span class="product-category">${p.categoryName}</span>
        <h2 style="font-size: 20px; font-weight: 800; margin-bottom: 8px; color: #451a03;">${p.name}</h2>
        <p style="font-size: 13px; color: #57534e; margin-bottom: 12px; line-height: 1.5;">${p.description}</p>
        
        <div style="background: #fef3c7; padding: 12px; border-radius: 8px; margin-bottom: 14px; font-size: 12px; color: #78350f;">
          <p><strong>📍 Nguồn gốc:</strong> ${p.origin}</p>
          <p style="margin-top: 4px;"><strong>📋 Thông số kỹ thuật:</strong> ${p.spec}</p>
          ${p.packaging ? `<p style="margin-top: 4px;"><strong>📦 Đóng gói xuất khẩu:</strong> ${p.packaging}</p>` : ''}
        </div>

        <div style="font-size: 22px; font-weight: 800; color: #92400e; margin-bottom: 16px;">${p.price.toLocaleString('vi-VN')}đ / đơn vị</div>
        
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-primary full-width" onclick="addToCart('${p.id}'); closeModal('detailModal');">🛒 Thêm Vào Đơn Hàng</button>
          <button class="btn btn-secondary full-width" onclick="closeModal('detailModal'); scrollToSection('contact-section');">📞 Nhận Báo Giá Bulk</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  toggleCartDrawer(false);

  const modal = document.getElementById("checkoutModal");
  const summaryEl = document.getElementById("checkoutSummary");

  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  summaryEl.innerHTML = `
    <div style="background: #fef3c7; padding: 12px; border-radius: 8px; margin: 12px 0; font-size: 13px;">
      <strong>Đơn hàng xuất khẩu (${cart.length} chủng loại):</strong>
      <ul style="margin-top: 6px;">
        ${cart.map(i => `<li>- ${i.product.name} (x${i.quantity}) = ${(i.product.price * i.quantity).toLocaleString('vi-VN')}đ</li>`).join('')}
      </ul>
      <hr style="margin: 8px 0; border: none; border-top: 1px solid #fde68a;">
      <strong style="font-size: 15px; color: #92400e;">Ước tính giá trị: ${totalPrice.toLocaleString('vi-VN')}đ</strong>
    </div>
  `;

  modal.classList.add("active");
}

function processCheckout(event) {
  event.preventDefault();

  const name = document.getElementById("orderName").value;
  const phone = document.getElementById("orderPhone").value;
  const company = document.getElementById("orderCompany").value || "Khách hàng cá nhân / Doanh nghiệp";

  alert(`🎉 Cảm ơn ${name} (${company})!\nYêu cầu đơn hàng của bạn đã được tiếp nhận.\nBộ phận Xuất Khẩu ENA GREEN sẽ liên hệ lại qua số ${phone} hoặc Zalo trong vòng 30 phút.`);

  cart = [];
  updateCartUI();
  closeModal('checkoutModal');
}

function orderViaZalo() {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  const itemsStr = cart.map(i => `- ${i.product.name} (x${i.quantity})`).join('%0A');
  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const msg = `Xin chào ENA GREEN! Tôi muốn nhận báo giá xuất khẩu / bán sỉ:%0A${itemsStr}%0A%0ATổng dự toán: ${totalPrice.toLocaleString('vi-VN')}đ`;

  window.open(`https://zalo.me/0987654321?text=${msg}`, '_blank');
}

function handleQuickSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("custName").value;
  const phone = document.getElementById("custPhone").value;
  const email = document.getElementById("custEmail") ? document.getElementById("custEmail").value : "";
  alert(`Cảm ơn ${name}! ENA GREEN đã nhận thông tin. Chúng tôi sẽ gửi báo giá chi tiết và chứng từ sản phẩm đến ${phone} / ${email} sớm nhất.`);
  event.target.reset();
}

function openDownloadModal() {
  document.getElementById("downloadModal").classList.add("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function scrollToSection(sectionId) {
  const sec = document.getElementById(sectionId);
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}
