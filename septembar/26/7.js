//Prost broj

let n = 7;

for (let i = 2; i < n; i++) if (n % i == 0) { 
    console.log("Broj nije prost"); 
    return 0; 
}

console.log("Broj je prost");