window.addEventListener('scroll', function () {
    var header = document.querySelector('.header_container');
    header.classList.toggle('shadow', window.scrollY > 0);
});
