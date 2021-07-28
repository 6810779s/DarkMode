let Links={
  setColor: function(color){
    let a = document.querySelectorAll('a');
    let i = 0;
    while (i < a.length) {
      a[i].style.color = color;
      i = i + 1;
    }
  }
}
let Body={
  setFontColor: function(color){
    document.querySelector('body').style.color = color;
  },
  setBgColor: function(color){
    document.querySelector('body').style.background = color;
  }
}

function nightDayHandler(self){
  if (self.value === 'night') {
    Links.setColor('powderblue');
    Body.setBgColor('black');
    Body.setFontColor('white');
    self.value = 'day';
  } else {
    Links.setColor('blue');
    Body.setBgColor('white');
    Body.setFontColor('black');
    self.value = 'night';
  }
}
