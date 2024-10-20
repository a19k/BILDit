//brise uzastopne karaktere

let str="Shellless mollusk lives in wallless house in wellness. Aaaarghh";
let strBezPonavljanja="";

let br=0;

for(let i=0;i<str.length;i++){
    strBezPonavljanja+=str[i];
    for(let j=i+1;j<str.length;j++){
        if(str[i].toLowerCase()===str[j].toLowerCase()) br++;
        else break;
    }
    i+=br;
    br=0;
}

console.log(strBezPonavljanja);
