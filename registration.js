 flatpickr("#date_time", {
  enableTime: true, 
  dateFormat: "Y-m-d H:i",
  time_24hr: true, 
  minDate: "today", 
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".registration__form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    location.reload(); 
  });
});
