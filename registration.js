 // Инициализация Flatpickr для выбора даты и времени
 flatpickr("#date_time", {
  enableTime: true, // Включаем выбор времени
  dateFormat: "Y-m-d H:i", // Формат даты и времени
  time_24hr: true, // Используем 24-часовой формат времени
  minDate: "today", // Ограничение: нельзя выбрать прошедшие даты
});