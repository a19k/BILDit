//prvih 20 prostih brojeva



let jeProst = true;
let br = 0;

for (let i = 2; br < 20; i++) {

    for (let j = i-1; j > 1; j--) {
        if (i % j == 0) { jeProst = false; break; }
    }

    if (jeProst === true) {
        console.log(i);
        br++;
    }
    else jeProst = true;

}