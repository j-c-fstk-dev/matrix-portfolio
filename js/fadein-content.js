window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.site-content').classList.add('visible');
    var preloader = document.querySelector('.preloader');
    if (preloader) preloader.style.display = 'none';
  }, 700); // ajuste o delay conforme desejado
});