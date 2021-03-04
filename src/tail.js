var tail = (my_array) =>{
    if(my_array.length===0){
        return null;
    }
    return my_array.slice(1,);
}

module.exports=tail;