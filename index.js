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
