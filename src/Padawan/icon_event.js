
 function iconEvent(param) {
    switch (param) {
          case 'event' : return 'fa fa-handshake-o';
          case 'lecture' : return 'fa fa-map-marker';
          case 'deadline' : return 'fa fa-times-circle';
          case 'webinar' : return 'fa fa-wifi';
          case 'workshop' : return 'fa fa-grav';
          default : break;
        }
      }
 export default iconEvent;