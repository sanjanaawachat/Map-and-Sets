//que2:

2.//You are given a string (STR) of length N, you have to print the count of all alphabet.
//using maps

//input
//abcadeecfb

//output
//a=2
//b=2
//c=2
//d=1
//e=2
//f=1

//ans:

function count_char(str){
    var map=new Map();
    str.split('').forEach((ele)=>{
        if(map.has(ele)){
            map.set(ele,map.get(ele)+1)
        }
        else{
            map.set(ele,1)
        }
    });
    str.split('').forEach((i)=>{
        if(map.has(i) && map.get(i)!=0){
            console.log(i + "="+map.get(i)+' ');
            map.set(i,0)
        }
    })

}
var str="abcadeecfb";
count_char(str);







