import checkStatus from './checkStatus.js';
import parseJSON from './parseJSON.js';


var mentorsListAll;

var mentorsList = function(link){
fetch(link)
		.then(checkStatus)
		.then(parseJSON)
     	.then((data) => {
    	mentorsListAll = data;
    	return (data);
    });

}
export default mentorsList;
export {mentorsListAll};