// reverse string

function reverseString(string) {
    const reversedStr = string.split('').reverse().join('')
    console.log(reversedStr)
}

const string = "Hello"
reverseString(string)
  
// sentence capitalization

 const capitalize = (str) => {
    return str.toLowerCase().split(" ")
    .map((i) => i[0].toUpperCase()+ i.slice(1)).join(" ")
 }

 console.log(capitalize("hello world"))



