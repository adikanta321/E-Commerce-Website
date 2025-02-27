// Copy menu for mobile
function copyMenu() {
  // Copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  // Copy inside nav to nav
  var mainnav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainnav.innerHTML;

  // Copy .header-top .wrapper to .thetop-nav
  var topnav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topnav.innerHTML;
}

copyMenu();

// Show mobile menu
const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const addclass = document.querySelector('.site');

menuButton.addEventListener('click', function() {
  addclass.classList.toggle('showmenu');
});

closeButton.addEventListener('click', function() {
  addclass.classList.remove('showmenu');
});


// Show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => item !== this ? item.closest('.has-child').classList.remove('expand') : null);
  if (!this.closest('.has-child').classList.contains('expand')) {
    this.closest('.has-child').classList.add('expand');
  } else {
    this.closest('.has-child').classList.remove('expand');
  }
}


//slider
const swiper = new Swiper('.swiper', {
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
  },

});


// Show search
const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');

searchButton.addEventListener('click', function() {
  showClass.classList.toggle('showsearch');
});

tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch');
});


const dptButton = document.querySelector('.dpt-cat .dpt-trigger');
const dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function() {
  dptClass.classList.toggle('showdpt');
})



// Products image slider

var productThumb = new Swiper('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3, // Corrected typo here
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    }
  }
});

var productBig = new Swiper('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next', // Corrected typo here
    prevEl: '.swiper-button-prev', // Corrected typo here
  },
  thumbs: {
   swiper: productThumb,
  }
});

var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
  let stck = parseFloat(stocks[x].dataset.stock), // Convert stock data to a number
      available = parseFloat(stocks[x].querySelector('.qty-available').innerHTML), // Convert to a number
      sold = parseFloat(stocks[x].querySelector('.qty-sold').innerHTML), // Convert to a number
      percent = (sold * 100) / stck; // Calculate percentage

  // Set the width of the available bar
  stocks[x].querySelector('.available').style.width = percent + '%';
}

//Show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

if (divPopup && divTrigger) {  // Ensure elements exist before adding event listeners
  divTrigger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent immediate outside click detection
    divPopup.classList.add('show'); // No need for setTimeout unless necessary
  });

  // Close by clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest(divtoShow) && !e.target.closest('.cart-trigger')) {
      divPopup.classList.remove('show');
    }
  });
}



// //show modal on load
// window.onload = function () {
//   document.querySelector('.site').classList.toggle('showmodal');

//   document.querySelector('.modalclose').addEventListener('click', function() {
//     document.querySelector('.site').classList.remove('showmodal');
//   });
// };

