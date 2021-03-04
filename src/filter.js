const filter = (array,functionName) => {
    if(functionName == 'filterUpperCase')
    {
        return array.filter(filterUpperCase);
    }
    return array.filter(functionName);
}

function filterUpperCase(char)
{
    if(char == char.toUpperCase())
    {
        return char;
    }
}
module.exports =filter;