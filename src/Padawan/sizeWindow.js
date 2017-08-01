import manipulateClass from './manipulateClass';
import equalHeight from './equalHeight.js'; 

function sizeWindow(){

	if (window.innerWidth < 600){
	manipulateClass('monthCal','add','invisible');
	manipulateClass('weekCal','remove','inline');
	manipulateClass('monthCal','remove','inline');
	manipulateClass('header','add','highlight');

	document.getElementsByClassName('weekCal')[0].style.height = 'auto';
	} else { 
		manipulateClass('monthCal','remove','invisible');
		manipulateClass('weekCal','remove','invisible');
		manipulateClass('weekCal','add','inline'); 
		manipulateClass('monthCal','add','inline');
		manipulateClass('header','remove','highlight');

	}
		equalHeight('inline');
		
}


export default sizeWindow;