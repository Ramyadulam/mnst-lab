async function addAsync(operator1, operator2) 
{
    return 'Addition of '+operator1+' and '+operator2+' is ' + (operator1 + operator2);
}
async function subtractAsync(operator1, operator2) 
{
    return 'Subtraction of '+operator1+' and '+operator2+' is ' + (operator1 - operator2);
}
    module.exports = 
    { addAsync, subtractAsync
    
    }
    
