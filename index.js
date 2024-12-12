// Task 1

function calculateDifference(first, second){
   let diff = Math.abs(second - first);
    return diff;
}

console.log(calculateDifference(43, 6)); 


// Task 2

function isOdd(x){
    if(x%2 != 0)
    {
        return true;
    }
    else
    {
        return false;
    }
} 

console.log(isOdd(5));

// Task 3

function findMin(arr){
    var low = Math.min(...arr); // Passing every value of the array 
    return low;
}

const arr = [4,5,6,7,2,19,10,1,12,22];
console.log(findMin(arr));

