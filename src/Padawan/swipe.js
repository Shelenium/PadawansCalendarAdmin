var sVar = {
	touchStartCoords: {'x':-1, 'y':-1}, // X and Y coordinates on mousedown or touchstart events.
    touchEndCoords: {'x':-1, 'y':-1},// X and Y coordinates on mouseup or touchend events.
    direction: 'undefined',// Swipe direction
    minDistanceXAxis: 20,// Min distance on mousemove or touchmove on the X axis
    maxDistanceYAxis: 100,// Max distance on mousemove or touchmove on the Y axis
    maxAllowedTime: 1000,// Max allowed time between swipeStart and swipeEnd
    startTime: 0,// Time on swipeStart
    elapsedTime: 0,// Elapsed time between swipeStart and swipeEnd
    targetElement: document.getElementById('el'),// Element to delegate
    funcLeft: function () {console.log('Swipe left')},
    funcRight: function () {console.log('Swipe right')},
    }


function swipeStart(e) {
  e = e ? e : window.event;
  e = ('changedTouches' in e)?e.changedTouches[0] : e;
  sVar.touchStartCoords = {'x':e.pageX, 'y':e.pageY};
  sVar.startTime = new Date().getTime();
}

function swipeMove(e){
  e = e ? e : window.event;
  e.preventDefault();
}

function swipeEnd(e) {
  e = e ? e : window.event;
  e = ('changedTouches' in e)?e.changedTouches[0] : e;
  sVar.touchEndCoords = {'x':e.pageX - sVar.touchStartCoords.x, 'y':e.pageY - sVar.touchStartCoords.y};
  sVar.elapsedTime = new Date().getTime() - sVar.startTime;
  if (sVar.elapsedTime <= sVar.maxAllowedTime){
    if (Math.abs(sVar.touchEndCoords.x) >= sVar.minDistanceXAxis && Math.abs(sVar.touchEndCoords.y) <= sVar.maxDistanceYAxis){
      sVar.direction = (sVar.touchEndCoords.x < 0)? 'left' : 'right';
      switch(sVar.direction){
        case 'left':
          sVar.funcLeft();
          break;
        case 'right':
          sVar.funcRight();
          break;
        default:
          break;
      }
    }
  }
}

function addMultipleListeners(el, s, fn) {
  var evts = s.split(' ');
  for (var i=0, iLen=evts.length; i<iLen; i++) {
    el.addEventListener(evts[i], fn, false);
  }
}
    export {sVar,swipeStart,swipeMove,swipeEnd,addMultipleListeners};