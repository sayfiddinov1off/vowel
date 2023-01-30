let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, neque."
let result = "";
let arr = ['a', 'i', 'o', 'e', 'u']
function checkString(str){
    for(let i = 0; i < str.length; i++){
        if(arr.includes(str[i])){
            result += '*'
        }
        else{
            result += str[i]
        }
    }
    console.log(result);
}
checkString(str)
