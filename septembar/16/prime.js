
for (let i = 1; i < 100; i++) {

    let p=1;

    for (let j = 2; j < i; j++) {

        if (i % j == 0) p=0;
    }

    if(p==1)console.log(i+" : prime");
    else console.log(i+" : not")
}