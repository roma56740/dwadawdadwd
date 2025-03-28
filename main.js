// 1
let a = prompt('Число a:')
let b = prompt('Число b:')

function el(aNum,bNum){
    for(let i =0; i < b; i++){
        console.log((i % 2==0)? `Четное ${i}`: ``);
    }
}
el(a, b)
// 1



// 2
function minNum(a, b){
    console.log(  (a<b) ? b : a  ); 
}
minNum(1,4)
// 2



// 3

let arr = ['Джас', "Блюз"]
console.log(arr)

arr.push('Рок-н-ролл')
console.log(arr)


arr[Math.floor(arr.length/2)] = "Классика"
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("Регги")
arr.unshift("Рэп")
console.log(arr)
// 3