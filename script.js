

var init = function(){
  //container slider code
  let containerSlider = document.getElementById('container-slider');//for closing the modal window & the slider to work
  let modalDisplay = document.getElementById('modal-display'); // for closing the modal window
  let sliderClose = document.getElementById('slider-close');// for closing the modal window
  let navModal = document.getElementById('nav-modal');// for closing the modal window

  let containerRecipebox = document.getElementById('container-recipebox') // for opening the window
  let containerPomodoro = document.getElementById('container-pomodoro') // for opening the window
  let containerCalculator = document.getElementById('container-calculator') // for opening the window
  let containerSimon = document.getElementById('container-simon') // for opening the window
  let containerTictactoe = document.getElementById('container-tictactoe') // for opening the window

  let faRecipebox = document.getElementById('fa-recipebox'); //for opennig the modal window
  let faPomodoro = document.getElementById('fa-pomodoro'); //for opennig the modal window
  let faCalculator = document.getElementById('fa-calculator'); //for opennig the modal window
  let faSimon = document.getElementById('fa-simon'); //for opennig the modal window
  let faTictactoe = document.getElementById('fa-tictactoe'); //for opennig the modal window

  let recipebox = document.getElementById('recipebox');
  let pomodoro = document.getElementById('pomodoro');
  let calculator = document.getElementById('calculator');
  let tictactoe = document.getElementById('tictactoe');
  let simon = document.getElementById('simon');

  let nextModal = document.getElementById('next-modal');
  let prevModal = document.getElementById('prev-modal');

  nextModal.addEventListener('click', function(){
    let margin = window.getComputedStyle(containerSlider).
    getPropertyValue('margin-left');

    switch(margin){
      case '0px':
        containerSlider.style.marginLeft = '-650px';
        break;
      case '-650px':
        containerSlider.style.marginLeft = '-1300px';
        break;
      case '-1300px':
        containerSlider.style.marginLeft = '-1950px';
        break;
      case '-1950px':
        containerSlider.style.marginLeft = '-2600px';
        break;
      case '-2600px':
        containerSlider.style.marginLeft = '0px';
        break;
    }
  }, false)

  prevModal.addEventListener('click', function(){
    let margin = window.getComputedStyle(containerSlider).
    getPropertyValue('margin-left');

    switch(margin){
      case '0px':
        containerSlider.style.marginLeft = '-2600px';
        break;
      case '-650px':
        containerSlider.style.marginLeft = '0px';
        break;
      case '-1300px':
        containerSlider.style.marginLeft = '-650px';
        break;
      case '-1950px':
        containerSlider.style.marginLeft = '-1300px';
        break;
      case '-2600px':
        containerSlider.style.marginLeft = '-1950px';
        break;
    }
  }, false)

  //closing the modal window

  sliderClose.addEventListener('click', function(){
      modalDisplay.style.visibility = 'hidden'
      containerSlider.style.visibility = 'hidden';
      navModal.style.visibility = 'hidden';
  })

  //openning the modal window for each project

  faRecipebox.addEventListener('click', function(){
    containerSlider.style.marginLeft = '0px';
    modalDisplay.style.visibility = 'visible';
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faPomodoro.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-650px';
    modalDisplay.style.visibility = 'visible';
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faCalculator.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-1300px';
    modalDisplay.style.visibility = 'visible';
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faSimon.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-1950px';
    modalDisplay.style.visibility = 'visible';
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faTictactoe.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-2600px';
    modalDisplay.style.visibility = 'visible';
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })


  //sliding slidebar
      var sidebar = document.getElementById('sidebar'); //('sidebar')
      let toggle = document.getElementById('toggle');//('toggle-sidebar')
      let viewport = window.innerWidth;

      //animating the side bar
      toggle.addEventListener('click', function(){
        let webkitAnimationName =
          window.getComputedStyle(sidebar).getPropertyValue('-webkit-animation-name');
        let animationName =
          window.getComputedStyle(sidebar).getPropertyValue('animation-name');
       /* let marginLeft =
          window.getComputedStyle(sidebar).getPropertyValue('margin-left');*/

     // if(viewport >= 521){
        if(webkitAnimationName != ''){
          ((webkitAnimationName != 'open') ?
            /*(sidebar.style.webkitAnimationName = 'open', sidebar.style.marginLeft = '0px') :
            (sidebar.style.webkitAnimationName = 'close' , sidebar.style.marginLeft = '-180px'));*/
            (sidebar.style.webkitAnimationName = 'open' /*, sidebar.style.webkitAnimationName = open*/) :
            (sidebar.style.webkitAnimationName = 'close' /*, sidebar.style.webkitAnimationName = close */));
      }
        if(animationName != null){
          ((animationName != 'open') ?
           /* (sidebar.style.animationName = 'open', sidebar.style.marginLeft = '0px') :
            (sidebar.style.animationName = 'close', sidebar.style.marginLeft = '-180px'));*/
            (sidebar.style.animationName = 'open' /*, sidebar.style.animationName = open*/) :
            (sidebar.style.animationName = 'close' /*, sidebar.style.animationName = close*/));

        }
     /* } else{
          console.log('viewport <= 521', viewport)
         if(webkitAnimationName != ''){
          ((webkitAnimationName != 'open') ?
            (sidebar.style.webkitAnimationName = 'open', sidebar.style.marginLeft = '0px') :
            (sidebar.style.webkitAnimationName = 'close' , sidebar.style.marginLeft = '-100px'));
        }

        if(animationName != null){
          ((animationName != 'open') ?
            (sidebar.style.animationName = 'open', sidebar.style.marginLeft = '0px') :
            (sidebar.style.animationName = 'close', sidebar.style.marginLeft = '-100px'));
        }
      }*/
      }, false)
}//end of init function

window.addEventListener('DOMContentLoaded', init, false);



