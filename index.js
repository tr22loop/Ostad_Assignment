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

// Task 4

function filterEvenNumbers(val){
    const evenArr = [];
    for(let i = 0; i < val.length; i++)
    {
        if (val[i] % 2 === 0)
        {
            evenArr.push(val[i]);
        }
    }
    return evenArr;
}

console.log(filterEvenNumbers(arr));


//Task 6
function lowercaseFirstLetter(str){
    let temp = str.charAt(0).toLowerCase();
    temp = temp + str.slice(1);
    return temp;
}

const mainString = "ToUhid";
console.log(lowercaseFirstLetter(mainString));

//Task 7

function findAverage(numbers){
    
    var sum=0;
    for(let i=0; i<numbers.length;i++)
    {
        sum = parseFloat(sum) + numbers[i];
    }
    const avg =parseFloat(sum / numbers.length);
    return avg;
}

console.log(findAverage(arr));

//Task 8

function isLeapYear(year){
    if(year% 400 === 0 || (year % 4 ===0 && year % 100 != 0))
    {
        return true;
    }
    else
    return false;
}

console.log(isLeapYear(2016));
 


