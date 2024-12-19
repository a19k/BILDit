

const array = [0, 1, 2, 1, 3, 1, 5, 3];
const filtered = array.filter((e,i,arr)=>{
    arr.forEach((subE,i,arr) => {
        if(e===subE)arr[i]=null; 
    });

    return e!==null;
});

console.log(filtered);
