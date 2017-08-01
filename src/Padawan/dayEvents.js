import checkStatus from './checkStatus.js';
import parseJSON from './parseJSON.js';
import {linkEvents} from './links.js';


var dataEventsAll;

var dayEvents = function(){
fetch(linkEvents)
		.then(checkStatus)
		.then(parseJSON)
     	.then((data) => {
    	dataEventsAll = data;
    	return (data);
    });

}
export default dayEvents;
export {dataEventsAll};