 import {swipeStart,swipeMove,swipeEnd,addMultipleListeners} from './swipe.js'; 
  
  function setSwipe() {
  	var htmlEl = document.getElementsByTagName('body')[0];
  	addMultipleListeners(htmlEl, 'mousedown touchstart', swipeStart);
  	addMultipleListeners(htmlEl, 'mousemove touchmove', swipeMove);
  	addMultipleListeners(htmlEl, 'mouseup touchend', swipeEnd);
  }
  export default setSwipe;