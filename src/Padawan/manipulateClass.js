  function manipulateClass(classToSelect,whatToDo,classToManipulate){
    const set = document.getElementsByClassName(classToSelect);
    const leng = set.length;
      for (var i = 0; i < leng; i++){        
         if (whatToDo === 'add'){
              set[i].classList.add(classToManipulate);
         } else if (whatToDo === 'remove') { 
            if (set[i].classList.contains(classToManipulate)) {
                set[i].classList.remove(classToManipulate);
            }
         } else {
                set[i].classList.toggle(classToManipulate);
            } 
      }
  }
  export default manipulateClass;