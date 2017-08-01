function equalHeight(param){
	var maxheight = 0;
	var set = document.getElementsByClassName(param);


	for (var i = 0; i < set.length; i++){
		set[i].style.height = '100%';
		var elHeight = window.getComputedStyle(set[i],null).getPropertyValue('height');
		var height = elHeight.slice(0,-2)-0;

		if (height > maxheight) {
			maxheight = height;
		}
	}
	for (var j = 0; j < set.length; j++){
		set[j].style.height = maxheight+'px';
	}
}
export default equalHeight;