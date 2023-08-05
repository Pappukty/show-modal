'use strict';


const btnShowModal=document.querySelectorAll('.btn-show-modal');
console.log(btnShowModal);

const modalWindow=document.getElementById('modal');
console.log(modalWindow.classList);

const btnCloseModal=document.getElementById('btn-close-modal');
console.log(btnCloseModal);

//console.log(modalWindow.classList);
//modalWindow.classList.add('modalWindow');

//modalWindow.classList.remove('hidden');


//console.log(modalWindow.classList);
//eventListener
for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i]);
  console.log('hollo')
  //click to remove method output showModal
btnShowModal[i].addEventListener('click', function(){
  modalWindow.classList.remove('hidden');
})

}
//remove the modalWindow
btnCloseModal.addEventListener('click', function(){
  modalWindow.classList.add('hidden');
})
//Escape button click remove the modalWindow
document.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    modalWindow.classList.add('hidden');
  }
});