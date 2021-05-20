function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && screen.width <640px){
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
