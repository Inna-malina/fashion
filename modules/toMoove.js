let imgBox = document.querySelector('.about-me__img-box');
let imgFeeld = document.querySelector('.about-me__img');

imgBox.addEventListener('click', function(event){
  let action = event.target;

  if(action.dataset.side === "img-front"){
    imgFeeld.classList.add('turn-left');
    imgFeeld.classList.remove('turn-right');
    
  }
 if (action.dataset.side === "img-back"){
  imgFeeld.classList.add('turn-right');
    imgFeeld.classList.remove('turn-left');
  }
 
});