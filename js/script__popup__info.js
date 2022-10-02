//const popup = document.querySelector('#user');
//const popupTel = document.querySelector('#tel');
//const btsPop = document.querySelectorAll('.popup__button-close');
//const btsPopAdd = document.querySelectorAll('.popup__button-add');
//const orederBtn = document.querySelector('.order__btn');
//const next = document.querySelector('.next');
//const nds = document.querySelector('#nds');
//const project = document.querySelector('#project');
//const title = popup.querySelector('.popup__title');

//console.dir(project[0]);
//project.addEventListener('change', function () {

//  next.addEventListener('click', function () {
//    if (project.value === 'nds') {
//      title.textContent = 'НДС';
//      console.log('yes');
//    } else {
//      console.log('no');
//    }
//  });
//});


//console.dir(project);


//orederBtn.addEventListener('click', function () {
//  openPopup(popup);
//});

for (let i = 0; i < btsPop.length; i++) {
  btsPop[i].addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  });
}

for (let i = 0; i < btsPopAdd.length; i++) {
  btsPopAdd[i].addEventListener('click', function () {
    openPopup(popupTel);
    console.log('ser');
  });
}

//! ОТКРЫВАЕТ POPUP
function openPopup(popup) {
  popupTel.classList.add('popup_active');
}

//! ЗАКРЫВАЕТ POPUP
function closePopup(popup) {
  popupTel.classList.remove('popup_active');
}
