var min = (my_array,mini) => {
    if (my_array.length === 0) {
      return mini;
    }
    else {
      if (my_array[my_array.length-1]<mini){
          mini=my_array[my_array.length-1];
       }
      my_array.pop()
      return min(my_array,mini);
    }
     
  };

  module.exports=min;