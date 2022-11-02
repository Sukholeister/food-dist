window.addEventListener('DOMContentLoaded',()=>{

    const tab = document.querySelectorAll('.tabheader__item'),
        tabItem = document.querySelectorAll('.tabcontent'),
        button = document.querySelectorAll('.btn'),
        modalWindow = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close'),
        height = document.querySelector('#height');
   

function hidenTabsContent (){

    tabItem.forEach((item)=>{
        item.style.display = ' none';
    })


    tab.forEach((item)=>{
        item.classList.remove('tabheader__item_active');
    })
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
        
        })

    })
}
clickTab();

button.forEach((element)=>{
    element.addEventListener('click',()=>{
        modalWindow.style.display = 'block';
    })

})

modalClose.addEventListener('click', ()=>{
    modalWindow.style.display = 'none';
})




const chooseItem = document.querySelector('#gender'),
    clickItem = document.querySelectorAll('.calculating__choose-item');

    clickItem.forEach(element =>{

      

        element.addEventListener('click', ()=>{
        
            console.log();
        
            element.classList.toggle('calculating__choose-item_active');

        })
    })

    const deadLine = '2022-12-17';

setInterval(()=>{

},1000);



















});

  