// Napiši funkciju koja prima string i zamjenjuje svaki samoglasnik (a, e, i, o, u) njegovim rednim brojem u stringu.

function zamijeniSamoglasnikeBrojevima(str){
    let str2="";
    for(let i=0;i<str.length;i++){
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                str2+=i;
                break;
            
            default:
                str2+=str[i];
                break;
        }
    }

    return str2;
}


console.log(zamijeniSamoglasnikeBrojevima("javascript"));
