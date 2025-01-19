document.addEventListener("DOMContentLoaded", function() {
  const filters = document.querySelectorAll(".portfolio__filter");
  const galleries = document.querySelectorAll(".gallery__photos > div");

  function hideAllGalleries() {
    galleries.forEach(gallery => {
      gallery.classList.add("gallery__photos_hidden");
    });  
  }  

  filters.forEach(filter => {
    filter.addEventListener("click", function(event) {
      event.preventDefault();
      filters.forEach(f => f.classList.remove("portfolio__filter_active"));
      filter.classList.add("portfolio__filter_active");

      hideAllGalleries();

      if (filter.getAttribute("href") === "#portraits") {
        document.querySelector(".gallery__photos_portraits").classList.remove("gallery__photos_hidden");
      } else if (filter.getAttribute("href") === "#events") {
        document.querySelector(".gallery__photos_events").classList.remove("gallery__photos_hidden");
      } else if (filter.getAttribute("href") === "#brands") {
        document.querySelector(".gallery__photos_brands").classList.remove("gallery__photos_hidden");
      } else if (filter.getAttribute("href") === "#subjects") {
        document.querySelector(".gallery__photos_objects").classList.remove("gallery__photos_hidden");
      }  
    });  
  });  
  document.querySelector(".gallery__photos_portraits").classList.remove("gallery__photos_hidden");
});  



