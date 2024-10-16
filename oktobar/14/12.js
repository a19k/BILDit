//  Napiši funkciju koja kreira 2D matricu dimenzija m x n i popunjava je sa nultim elementima.


function napraviMatricu(m,n) {
    let red=[];
    for(let i=0;i<n;i++)
        red[i]=0;

    let matrica=[];
    for(i=0;i<m;i++)
        matrica[i]=red;


    return matrica;    
}


console.log(napraviMatricu(3,4));
