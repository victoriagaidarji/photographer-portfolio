/* Подключение Masonry */

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.portfolio__gallery');
  imagesLoaded(gallery, () => {
    new Masonry(gallery, {
      itemSelector: '.portfolio__gallery-item',
      columnWidth: '.portfolio__gallery-item',
      percentPosition: true,
      gutter: 10
    });
  });
})

/* Настройка галереи */

const portfolioGallery = document.querySelector('.portfolio__gallery'); 
const portfolioGalleryPortraits = document.querySelector('.portfolio__gallery_portraits'); 
const portfolioGalleryEvents = document.querySelector('.portfolio__gallery_events'); 
const portfolioGalleryBrands = document.querySelector('.portfolio__gallery_brands'); 
const portfolioGalleryObjects = document.querySelector('.portfolio__gallery_objects'); 
const portfolioLink = portfolioGallery.querySelector('.portfolio__link'); 

function saveInitialHiddenState(gallery) {
  const items = gallery.querySelectorAll('.portfolio__gallery-item');
  items.forEach(item => {
    if (item.classList.contains('portfolio__gallery-item_hidden')) {
      item.dataset.initialHidden = "true";
    } else {
      item.dataset.initialHidden = "false";
    }
  });
}

[portfolioGalleryPortraits, portfolioGalleryEvents, portfolioGalleryBrands, portfolioGalleryObjects].forEach(saveInitialHiddenState);

portfolioLink.addEventListener('click', function(event) {  
  event.preventDefault();  

  const isExpanded = portfolioLink.textContent.trim() === "Свернуть всё";

  [portfolioGalleryPortraits, portfolioGalleryEvents, portfolioGalleryBrands, portfolioGalleryObjects].forEach(gallery => {
    const items = gallery.querySelectorAll('.portfolio__gallery-item');
    items.forEach(item => {
      if (isExpanded) {
        if (item.dataset.initialHidden === "true") {
          item.classList.add('portfolio__gallery-item_hidden');
        }
      } else {
        item.classList.remove('portfolio__gallery-item_hidden');
      }
    });
  });

  portfolioLink.textContent = isExpanded ? "Развернуть всё" : "Свернуть всё";
});

document.addEventListener("DOMContentLoaded", function() {
  const filters = document.querySelectorAll(".portfolio__filter");
  const galleries = document.querySelectorAll(".portfolio__gallery > div");

  function hideAllGalleries() {
    galleries.forEach(gallery => {
      gallery.classList.add("portfolio__gallery_hidden");
    });
  }

  filters.forEach(filter => {
    filter.addEventListener("click", function(event) {
      event.preventDefault();
      filters.forEach(f => f.classList.remove("portfolio__filter_active"));
      filter.classList.add("portfolio__filter_active");

      hideAllGalleries();

      if (filter.getAttribute("href") === "#portraits") {
        document.querySelector(".portfolio__gallery_portraits").classList.remove("portfolio__gallery_hidden");
      } else if (filter.getAttribute("href") === "#events") {
        document.querySelector(".portfolio__gallery_events").classList.remove("portfolio__gallery_hidden");
      } else if (filter.getAttribute("href") === "#brands") {
        document.querySelector(".portfolio__gallery_brands").classList.remove("portfolio__gallery_hidden");
      } else if (filter.getAttribute("href") === "#subjects") {
        document.querySelector(".portfolio__gallery_objects").classList.remove("portfolio__gallery_hidden");
      }
    });
  });

  document.querySelector(".portfolio__gallery_portraits").classList.remove("portfolio__gallery_hidden");
});

/* Слайдер до-после */

const divider = document.querySelector('.retouch__divider');
const beforeImage = document.querySelector('.retouch__comparison-image_before');
const afterImage = document.querySelector('.retouch__comparison-image_after');
let isDragging = true;

divider.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.addEventListener('mousemove', handleMouseMove);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.removeEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(e) {
  if (isDragging) {
    const containerRect = divider.parentElement.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const width = Math.min(Math.max(x, 0), containerRect.width);

    divider.style.left = `${width}px`;

    beforeImage.style.clipPath = `inset(0 0 0 ${width}px)`; 
    afterImage.style.clipPath = `inset(0 ${containerRect.width - width}px 0 0)`; 
  }
}

/* Калькулятор расчета стоимости фотосессии  */

document.addEventListener("DOMContentLoaded", () => {
  const calculatorModal = document.getElementById("calculatorModal");
  const closeCalculator = document.getElementById("closeCalculator");

  const button1 = document.getElementById("open-calculator-1");
  const button2 = document.getElementById("open-calculator-2");
  const button3 = document.getElementById("open-calculator-3");

  [button1, button2, button3].forEach(button => {
    button.addEventListener("click", () => {
      calculatorModal.classList.add("modal_active");  
    });
  });

  closeCalculator.addEventListener("click", () => {
    calculatorModal.classList.remove("modal_active");  
  });

  calculatorModal.addEventListener("click", (event) => {
    if (event.target === calculatorModal) {
      calculatorModal.classList.remove("modal_active");
    }

 
  const shootType = document.getElementById("shootType");
  const duration = document.getElementById("duration");
  const photos = document.getElementById("photos");
  const extraServiceItems = document.querySelectorAll(".modal__extra-service-item");
  const finalPrice = document.getElementById("finalPrice");


  shootType.addEventListener("change", () => {
    calculatePrice();
  });

  
  const calculatePrice = () => {

    const basePrice = parseInt(shootType.value) || 0;
    const hourPrice = 450;  
    const photoPrice = parseInt(shootType.options[shootType.selectedIndex]?.dataset.photoPrice) || 0;
    const hours = parseInt(duration.value) || 0;
    const photoCount = parseInt(photos.value) || 0;

    let totalExtraServices = 0;
    extraServiceItems.forEach(item => {
      if (item.checked) {
        totalExtraServices += parseInt(item.value);
      }
    });

    const totalPrice = basePrice + hourPrice * hours + photoPrice * photoCount + totalExtraServices;
    finalPrice.textContent = totalPrice; 
  };

  const inputs = [shootType, duration, photos];
  inputs.forEach(input => {
    input.addEventListener("input", calculatePrice);
  });

  extraServiceItems.forEach(item => {
    item.addEventListener("change", calculatePrice);
  });

  calculatePrice();
})});






