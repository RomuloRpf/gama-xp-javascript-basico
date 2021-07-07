let newString = "";

function reverseString(str) {
    for (let i = str.length - 1; i >= 0 ; i--) {
        newString = newString + str[i];
    }
    console.log(newString);
}

let resultado = reverseString("Hello Gama Academy");