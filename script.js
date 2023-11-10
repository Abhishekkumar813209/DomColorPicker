document.getElementById('button').addEventListener('click',randomColor =>{
    let val="0123456789ABCDEF";
    let cons = "#";
    for(i=0;i<6;i++){
         cons= cons + val[Math.floor(Math.random()*16)]
    }
    document.body.style.backgroundColor=cons;
    return cons;
})

console.log(randomColor);

