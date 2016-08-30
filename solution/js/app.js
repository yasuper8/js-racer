$(document).ready(function() {
    setUpGame();
});

function setUpGame(){
  var game = new Game();

  game.chicken.audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  game.chicken.audio.play();

  addEventListeners(game);
};

// initialize objects
function Game(){
  this.homer = {
    $div: $('#homer'),
    audio: new Audio('media/burp.wav'),
    name: 'Homer Simpson'
  };
  this.peter = {
    $div: $('#peter'),
    audio: new Audio('media/laugh.mp3'),
    name: 'Peter Griffin'
  };
  this.chicken = {
    width: $('#chicken').width(),
    audio: new Audio('media/Angry-chicken.mp3')
  };
};

function addEventListeners(game){
  //toggle button turns chicken sound on/off
  $('#audio').click(function() {
    !game.chicken.audio.paused ? game.chicken.audio.pause() : game.chicken.audio.play();
  });
  //click the 'catch it' button to start the game
  $('#go').click(function(){
    startGame(game)
  });
  //press reset button to reset the game
  $('#reset').click(reset);
};

function startGame(game){
  var trackWidth = $(document).width() - game.chicken.width;

  $('#go').removeClass('infinite');
  $('img').removeClass('rollIn');
  $('#chicken').addClass('infinite bounce');
  $('#chicken').animate({left: trackWidth}, 4000);

  $(document).keydown(function(key) {
    //check for winner
    var positionOne = $(game.homer.$div).position();
    var positionTwo = $(game.peter.$div).position();
    if (positionOne.left + $(game.homer.$div).width() >= trackWidth) {
      setWinState(game.homer);
    };
    if (positionTwo.left + $(game.peter.$div).width() >= trackWidth) {
      setWinState(game.peter);
    };

    switch(key.which) {
      case 90: // press z to make homer go
        game.homer.$div.css('left', positionOne.left + 40 + 'px');
        break;
      case 39: // press right arrow to make peter go
        game.peter.$div.css('left', positionTwo.left + 40 + 'px');
        break;
    };
  });
};

function reset() {
    //don't allow reset button to be clicked until chicken animation is done
  if ($('#chicken').is(':animated')) return false;

  $('.player').css('left', 0);
  $('#chicken').css('left', '200px');
  $('#dinner').remove();
  $('h1').text('Chiggen Chase');
  $('#go').addClass('infinite');
  $('img').removeClass('rollIn');
  $('h1').removeClass('slideInLeft');
  //to restart css animation - https://css-tricks.com/restart-css-animation/
  $('.reset-animation').each(function() {
      void this.offsetWidth;
  });
  $('img').addClass('rollIn');
  $('h1').addClass('slideInLeft');
  $('#chicken').removeClass('infinite bounce');
  $('#reset').removeClass('animated infinite pulse');
};

function setWinState(player){
  $(document).off('keydown');
  $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
  $('h1').text(player.name + ' Wins!!!!');
  player.audio.play();
  $('#reset').addClass('animated infinite pulse');
}
