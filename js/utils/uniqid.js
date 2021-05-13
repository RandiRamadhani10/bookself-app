const uniqid =  ()=>{
    const id = Math.random().toString();
    return id.slice(2);
}

export { uniqid };