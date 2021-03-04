const reduce = (my_array,x,y) => {
    if(my_array.length != 0 && y === undefined)
    {
        return my_array.reduce(x);
    }
    return my_array.reduce(x,y);
}

module.exports=reduce;