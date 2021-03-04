const map = (array,functionName) => {
    if(functionName == 'cube')
    {
        return array.map(cube);
    }
    if(functionName == 'identity')
    {
        return array.map(identity);
    }
    return array.map(functionName);
}

function cube(num)
{
    return num*num*num;
}

function identity(num)
{
    return num*1;
}
module.exports = map;