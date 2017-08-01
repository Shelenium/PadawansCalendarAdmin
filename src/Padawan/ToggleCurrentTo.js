
import manipulateClass from './manipulateClass';

function toggleCurrentTo(ClassCurrent, ClassTarget, refresh){
	if (window.innerWidth > 600){
		return; 
	} else {
		manipulateClass(ClassCurrent,'add','invisible');
		manipulateClass(ClassTarget,'remove','invisible');
		document.getElementsByClassName(ClassTarget)[0].style.height = 'auto';
		refresh();

	}
}
export default toggleCurrentTo;
