// JavaScript для отслеживания прокрутки страницы
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header_container'); // Замените 'header' на селектор вашей шапки
  header.classList.toggle('shadow', window.scrollY > 0);
});
