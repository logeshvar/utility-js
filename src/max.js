var max = (my_array,maxi) =>{
    if (my_array.length === 0) {
      return maxi;
    }
    else {
      if (my_array[my_array.length-1]>maxi){
          maxi=my_array[my_array.length-1];
       }
      my_array.pop()
      return max(my_array,maxi);
    }
     
  };

  module.exports=max;