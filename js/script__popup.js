//! Popup для формы расчетов
const popupUser = document.querySelector('#user');
const orderBtn = document.querySelector('.order__btn');
const next = document.querySelector('.next');
const pageThree = document.querySelector('.order__page_three');


//! pageOne
const pageOne = document.querySelector('.order__page_one');
const nextPageOne = pageOne.querySelector('.next');
const inputPageOne = pageOne.querySelectorAll('.order__input_page_one');

//! pageTwo
const pageTwo = document.querySelector('.order__page_two');
const inputPageTwo = pageTwo.querySelectorAll('.order__input');
const nextPageTwo = pageTwo.querySelector('.next');

//! popup для формы перезвона
const popupTel = document.querySelector('#tel');
const btsPopAdd = document.querySelector('.popup__button-add');


//! общие переменные
const btsPop = document.querySelectorAll('.popup__button-close');

const order = {};

console.log(pageOne);

//console.dir(project);
console.log(popupUser);
console.log(orderBtn);
orderBtn.addEventListener('click', function () {

  openPopup(popupUser);
  //console.log(pageOne.querySelector('.next'));
});

for (let i = 0; i < inputPageOne.length; i++) {
  inputPageOne[i].addEventListener('change', (e) => {
    if (e.target.value === 'Инвентаризация') {
      console.log('invent');
      nextPageOne.addEventListener('click', () => {
        order['Проект'] = 'Инвентаризация';
        console.log(order);
        pageTwo.insertAdjacentHTML('afterbegin', `
        <label class="order__project">
        <input type="radio" value="ИЗАВ" name="Проект" class="order__input">
        <p>ИЗАВ</p>
      </label>
      <label class="order__project">
        <input type="radio" value="Отходы" name="Проект" class="order__input">
        <p>Отходы</p>
      </label>
      <label class="order__project">
        <input type="radio" value="Сбросы" name="Проект" class="order__input">
        <p>Сбросы</p>
      </label>
      <button class="next" type="button">далее</button>
        `);
        nextPage(pageOne, pageTwo);
      });
    } else if (e.target.value === 'НДВ') {
      nextPageOne.addEventListener('click', () => {
        order['Проект'] = 'НДВ';
        console.log(order);
        nextPage(pageOne, pageThree);
      });
    } else if (e.target.value === 'СЗЗ') {
      nextPageOne.addEventListener('click', () => {
        order['Проект'] = 'СЗЗ';
        console.log(order);
        nextPage(pageOne, pageThree);
      });
    } else if (e.target.value === 'СЗЗ') {
      nextPageOne.addEventListener('click', () => {
        order['Проект'] = 'СЗЗ';
        console.log(order);
        nextPage(pageOne, pageThree);
      });
    } else if (e.target.value === 'НООЛР') {
      nextPageOne.addEventListener('click', () => {
        order['Проект'] = 'НООЛР';
        console.log(order);
        nextPage(pageOne, pageThree);
      });
    } else if (e.target.value === 'Другое') {
      nextPageOne.addEventListener('click', () => {
        order['Проект'] = 'Другое';
        console.log(order);
        nextPage(pageOne, pageTwo);
      });
    }
  });
}

for (let i = 0; i < inputPageTwo.length; i++) {
  inputPageTwo[i].addEventListener('change', (e) => {
    nextPageTwo.addEventListener('click', () => {
      order['вторая страница'] = e.target.value;
      console.log(order);
      nextPage(pageTwo, pageThree);
    });
  });
}



function nextPage(pageTarget, pageNext) {
  pageTarget.classList.add('order__unvisible');
  pageNext.classList.remove('order__unvisible');
}
//inputPageOne.addEventListener('change', (e) => {
//  console.log(e.target);
//pageOne.querySelector('.next').addEventListener('click', function () {
//  console.log('Ты выбрал пунк инвентаризация');
//});
//});


for (let i = 0; i < btsPop.length; i++) {
  btsPop[i].addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  });
}

console.log(btsPopAdd);
btsPopAdd.addEventListener('click', function () {
  openPopup(popupTel);
  console.log('телефон');
});

//! ОТКРЫВАЕТ POPUP
function openPopup(popup) {
  popup.classList.add('popup_active');
}

//! ЗАКРЫВАЕТ POPUP
function closePopup(popup) {
  popup.classList.remove('popup_active');
}
