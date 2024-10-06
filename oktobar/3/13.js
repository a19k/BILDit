function jeAnagram(str, str2) {
    let str3 = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str[i] == str2[j]) { str2 = str2.slice(0, j - 1) + str2.slice(j + 1, str2.length - 1); break; }
        }
    }

    console.log(str2);

    return str2=="";
}

console.log(jeAnagram("listen", "silent"));
