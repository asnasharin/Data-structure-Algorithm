// second largest element in array

function secondLargestElement(arr) {
    let secondLargest = -Infinity;
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else {
            if (arr[i] > secondLargest && arr[i]!== largest) {
                secondLargest = arr[i]
            }
        }
    }
    return secondLargest === -Infinity ? null : secondLargest
}



const arr = [1,2,78,90]
console.log("second largest", secondLargestElement(arr))
