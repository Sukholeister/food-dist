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
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

});

function closeModal (){
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'visible';
};

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

    
})










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





















});

  