
/*var onOff = document.getElementById('test');


onOff.addEventListener("click", ()=> {
  document.getElementById('menu').classList.toggle("hidden");

})*/


var initModal = function(){
  //container slider code
  let containerSlider = document.getElementById('container-slider');//for closing the modal window & the slider to work
  let modalDisplay = document.getElementById('modal-display'); // for closing the modal window
  let timesClose = document.getElementById('times-close');// for closing the modal window
  let navModal = document.getElementById('nav-modal');// for closing the modal window

  let containerPomodoro = document.getElementById('container-pomodoro') // for opening the window
  let containerCalculator = document.getElementById('container-calculator') // for opening the window
  let containerSimon = document.getElementById('container-simon') // for opening the window
  let containerTictactoe = document.getElementById('container-tictactoe') // for opening the window

  let faPomodoro = document.getElementById('fa-pomodoro'); //for opennig the modal window
  let faCalculator = document.getElementById('fa-calculator'); //for opennig the modal window
  let faSimon = document.getElementById('fa-simon'); //for opennig the modal window
  let faTictactoe = document.getElementById('fa-tictactoe'); //for opennig the modal window

  var pomodoro = document.getElementById('pomodoro');
  var calculator = document.getElementById('calculator');
  var tictactoe = document.getElementById('tictactoe');
  var simon = document.getElementById('simon');

  var nextModal = document.getElementById('next-modal');
  var prevModal = document.getElementById('prev-modal');

  nextModal.addEventListener('click', function(){
    var margin = window.getComputedStyle(containerSlider).
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
        containerSlider.style.marginLeft = '0px';
        break;
    }
  }, false)

  prevModal.addEventListener('click', function(){
    var margin = window.getComputedStyle(containerSlider).
    getPropertyValue('margin-left');

    switch(margin){
      case '0px':
        containerSlider.style.marginLeft = '-1950px';
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
    }
  }, false)

  //closing the modal window

  timesClose.addEventListener('click', function(){
      modalDisplay.style.visibility = 'hidden'
      containerSlider.style.visibility = 'hidden';
      navModal.style.visibility = 'hidden';
  })

  //openning the modal window for each project

  faPomodoro.addEventListener('click', function(){
    containerSlider.style.marginLeft = '0px'
    modalDisplay.style.visibility = 'visible'
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faCalculator.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-650px';
    modalDisplay.style.visibility = 'visible'
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faSimon.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-1300px'
    modalDisplay.style.visibility = 'visible'
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

  faTictactoe.addEventListener('click', function(){
    containerSlider.style.marginLeft = '-1950px'
    modalDisplay.style.visibility = 'visible'
    containerSlider.style.visibility = 'visible';
    navModal.style.visibility = 'visible';
  })

}

window.addEventListener('DOMContentLoaded', initModal, false);



