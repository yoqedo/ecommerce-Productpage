
const btnMinus = document.querySelector('.counter-minus')
const counterValue = document.querySelector('.counter-value')
const btnPlus = document.querySelector('.counter-plus')
const addToCartBtn = document.querySelector('.add-tocart-btn')
const basket = document.querySelector('.basket')
const basketContent = document.querySelector('.basket-content')
const basketIcon = document.querySelector('.basket-icon')
const basketCounter = document.querySelector('.basket-icon-count')
const profile = document.querySelector('.profile-image')
const checkoutBtn = document.querySelector('.checkout-btn')
const thumbnBtn = document.querySelectorAll('.product-thumbnail')
const image = document.querySelectorAll('.product-image')
const overlay = document.querySelector('.overlay')
const overlayImg = document.querySelectorAll('.prduct-image-overlay')
const overlayBtn = document.querySelectorAll('.product-thumbnail-overlay')
const closeBtn = document.querySelector('.close-btn')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.menu-navigation-close')

// Counter
let i = 0;
counterValue.innerHTML = i

window.addEventListener('DOMContentLoaded', function () {
    basketCounter.style.display = 'none'
    basketContent.innerHTML = '<div class="empty-basket">Your cart is empty</div>'
    // checkoutBtn.style.display = 'none'
})
// When clicked on add Button 
addToCartBtn.addEventListener('click', function () {

    let multiply = () => {
        return 125 * i
    }

    if (i > 0) {
        document.querySelector('.basket-icon-count').style.display = 'block'
        basketCounter.innerHTML = i
        basketContent.innerHTML = `<div class="basket-content-item">
        <div class='basket-content-item-description'>
            <img class="basket-content-product" src="./images/image-product-1.jpg" alt="basket-cart-image">
            <div class="basket-content-cost">
            <div class="basket-content-cost-title">Fall Limited Edition Sneakers</div>
            <div class="basket-content-cost-dollars">$125.00 x ${i} <span>${multiply()}$</span></div>
            </div>
            <img class="basket-content-delete-btn" src="./images/icon-delete.svg" alt="delete-btn">
        </div>
        <div>
          <div class="checkout-btn">
            Checkout
          </div>
        </div>
      </div>`
    }

    if (i == 0) {
        document.querySelector('.basket-icon-count').style.display = 'none'
        basketContent.innerHTML = '<div class="empty-basket">Your cart is empty</div>'
        // checkoutBtn.style.display = 'none'
    }

})

// When clicked on Basket Icon
basketIcon.addEventListener('click', function () {
    basket.classList.toggle('basket-active')
})

// Counter Settings
btnMinus.addEventListener('click', function () {
    removeProduct(i--)
})

btnPlus.addEventListener('click', () => {
    addProduct(i++)
})

function addProduct(i) {
    i++;
    counterValue.innerHTML = i
}
function removeProduct(i) {
    i--;
    counterValue.innerHTML = i
}

// When clicke on Profile Image
profile.addEventListener('click', () => {
    profile.classList.toggle('profile-image-active')
})



// switching beetween Product Images
thumbnBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        showProduct(this.dataset.product, this.dataset.thumb)
        console.log(this.dataset.product)
        console.log(this.dataset.thumb)
    })
});

function showProduct(image, thumbnail) {
    document.querySelectorAll('.product-image').forEach(item => {
        item.style.display = 'none'
    })
    document.querySelectorAll('.product-thumbnail').forEach(thumbN => {
        thumbN.style.border = '1px solid transparent'
    })
    document.querySelector(`.${image}`).style.display = 'block'
    document.querySelector(`.${thumbnail}`).style.border = '2px solid orange'
}

//  When pressing on image for Overlaying
image.forEach(btn => {
    btn.addEventListener('click', function () {
        overlay.classList.add('overlay-active')
    })
})

// When pressing thumbnail on Overlay Screen
overlayBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        showOverlayimage(this.dataset.img)
    })
})

function showOverlayimage(img) {
    document.querySelectorAll('.product-image-overlay').forEach(img => {
        img.style.display = 'none'
    })
    document.querySelector(`.${img}`).style.display = 'block'
    console.log('overlay')
}

closeBtn.addEventListener('click', function () {
    overlay.classList.remove('overlay-active')
})

// Display Menu on Mobile Screen
menuIcon.addEventListener('click', function () {
    document.querySelector('.menu-navigation').style.display = 'block'
})

closeIcon.addEventListener('click', function () {
    document.querySelector('.menu-navigation').style.display = 'none'
})

// Attribution
document.querySelector('.attribution-circle').addEventListener('mouseenter', function () {
    document.querySelector('.attribution-content').classList.add('attribution-content-active')
    console.log('hovering')
})

document.querySelector('.attribution-content').addEventListener('mouseleave', function () {
    document.querySelector('.attribution-content').classList.remove('attribution-content-active')
    console.log('hovering')
})
