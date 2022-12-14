window.addEventListener('DOMContentLoaded',()=>{

    const tab = document.querySelectorAll('.tabheader__item'),
        tabItem = document.querySelectorAll('.tabcontent'),
        button = document.querySelectorAll('[data-modal]'),
        modalWindow = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]'),
        height = document.querySelector('#height');
   

function hidenTabsContent (){

    tabItem.forEach((item)=>{
        item.style.display = ' none';
    });


    tab.forEach((item)=>{
        item.classList.remove('tabheader__item_active');
    });
}


function showTabContent(i){
        tabItem[i].style.display = 'block';
        tab[i].classList.add('tabheader__item_active');
  

 }


 hidenTabsContent();
 showTabContent(0);

function clickTab(){
    tab.forEach((item, i )=>{
        item.addEventListener('click', ()=>{
        hidenTabsContent();
        showTabContent(i);
        
        });

    });
}
clickTab();

button.forEach((element)=>{
    element.addEventListener('click',()=>{
        openModal();
    });

});



modalClose.addEventListener('click', ()=>{
    closeModal();
});

modalWindow.addEventListener('click', (e)=>{
    if (e.target === modalWindow){
        closeModal();
    }
});

document.addEventListener('keydown',(e) => {
    if(e.code === "Escape"){
        closeModal();
    }
});


const chooseItem = document.querySelectorAll('[data-gender="gender"]');

chooseItem.forEach( (element)=>{
        element.addEventListener('click' ,()=>{
            element.classList.add('calculating__choose-item_active');
        })

    
});


// Open modal window at 15 sec.

    const timerInterval =  setTimeout(openModal,4000);

//
window.addEventListener('scroll', scrollModalWindow );








// Timer

    const deadLine = '2022-12-17';

    function getTimeRemaining(endtime){
        const t = new Date(endtime) - new Date(),
            days = Math.floor(  t / (1000 * 60 * 60 * 24) ),
       
            hours = Math.floor( (t/(1000*60*60) % 24) );
            minutes = Math.floor((t / 1000 / 60 ) % 60 ) ,
            seconds = Math.floor((t/1000) % 60 );

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };

    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
                
                updateClock();

        function updateClock (){
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            
            if(t.total<=0){
                clearInterval(timeInterval);
            }

        }

    }
    
    setClock(".timer", deadLine );





    function closeModal (){
        modalWindow.style.display = 'none';
        document.body.style.overflow = 'visible';
    }
    
    function openModal() {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearTimeout(timerInterval);
    }

    function scrollModalWindow (){
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight )
                {
                    openModal();
                    window.removeEventListener('scroll', scrollModalWindow );
                }
       
    }

    // class 

    class MenuCard{
        constructor(src,alt, title, descr, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 40; 
            
        }
        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render(){
            const element = document.createElement('div');

            element.innerHTML = `
            <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr"> ${this.descr} </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
                this.parent.append(element);
        
        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        80,
        ".menu .container"
        
    ).render();

    new MenuCard(

        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"


    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();



    // FORMS
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    statusMessage.remove();
                    form.reset();
                } else {
                    showThanksModal(message.failure);
                }
            });
        });
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }



});

  