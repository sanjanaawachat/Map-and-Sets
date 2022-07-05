//que1:

1.//You are given a string (STR) of length N,consisting of only the lowercase english alphabet.
//your task is to remove all the duplicates occurences of characters in the string

//INPUT

//abcadeecfb

//Output

//abcdef

//Ans: 


 
const arr = ["a","b","c","a","d","e","e","c","f","b"];
const str = new Set();
for(i=0;i<arr.length;i++){
    str.add(arr[i])
}
console.log(str);