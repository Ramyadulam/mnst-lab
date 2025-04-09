
    const { addAsync, subtractAsync } = require('./6c'); async function asyncCall() {
    console.log('calling');
    const addResult = await addAsync(2, 3); console.log(addResult);
    const subResult = await subtractAsync(5, 3); console.log(subResult);
    }
    asyncCall();
    