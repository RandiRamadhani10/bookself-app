const uniqid =  ()=>{
    const id = Math.random().toString(17);
    return id.slice(2);
}

export { uniqid };