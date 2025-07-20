const products = [
  {
    title: "جاكيت جلد رجالي",
    price: 1200,
    img: "img/product/product-1.jpg"
  },
  {
    title: "تيشيرت قطن",
    price: 450,
    img: "img/product/product-2.jpg"
  },
  {
    title: "حذاء رياضي",
    price: 850,
    img: "img/product/product-3.jpg"
  }
];

const container = document.getElementById('product-list');

products.forEach(product => {
  const html = `
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="${product.img}">
          <ul class="product__hover">
            <li><a href="#"><img src="img/icon/heart.png" alt=""></a></li>
            <li><a href="#"><img src="img/icon/search.png" alt=""></a></li>
          </ul>
        </div>
        <div class="product__item__text">
          <h6>${product.title}</h6>
          <h5>${product.price} جنيه</h5>
        </div>
      </div>
    </div>
  `;
  container.innerHTML += html;
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let discount = 0;
let shippingCost = 0;

document.addEventListener('DOMContentLoaded', function() {
    updateCartSummary();
});

// تحديث ملخص السلة
function updateCartSummary() {
    // تحديث العداد في الهيدر
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.querySelector('.header__nav__option a:nth-child(3) span').textContent = cartCount;
    document.querySelector('.header__nav__option .price').textContent = `${cartTotal.toFixed(2)}`;
}

// Apply background images
document.querySelectorAll(".set-bg").forEach(el => {
  const bg = el.getAttribute("data-setbg");
  el.style.backgroundImage = `url(${bg})`;
});
