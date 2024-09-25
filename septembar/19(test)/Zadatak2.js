var i = 2;
var sum = 0;

while (i < 49) {
    if ((i % 4) && (i % 7)) sum += i ** 2;
    else if ((i % 4) || (i % 7)) sum += i;
    i++;
}

console.log(sum);

//netačan, nisam stavio == 0 ni za jedan uslov iz nekog razloga