// 2.Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements. 



function duplicateElement(arr){
    const newSet = new Set(arr)

    return newSet
}


const arr = [1,2,2,8,9,8,1]

const risult = duplicateElement(arr)
console.log(risult);


