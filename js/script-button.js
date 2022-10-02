const projectBt = document.querySelector('.fix-hed__project');
const projects = document.querySelector('.fix-hed__items');
const phoneBt = document.querySelector('.phone__img');
const phonePopup = document.querySelector('.phone');
const btReturn = document.querySelector('.fix-hed__return');

btReturn.addEventListener('click', function () {
  window.location.href = '../index.html';
});


addMenu();
addPopup();
function addMenu() {
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('fix-hed__project') || e.target.classList.contains('fix-hed__items')) {
      projects.classList.toggle('fix-hed__items_active');
    } else {
      projects.classList.remove('fix-hed__items_active');
    }
  });
}

function addPopup() {
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('phone__img')) {
      phonePopup.classList.toggle('phone_disabled');
      console.log('sca');
    } else if (e.target.classList.contains('phone')) {
      phonePopup.classList.add('phone_disabled');
    }
  });
}
