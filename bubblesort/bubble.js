
function bubbleSort(numbers){
    let length = numbers.length
    for (let i=0; i<length; i++){  // --> Controls how many passes (rounds)
        for(let j=0; j<length - 1 - i; j++){ // --> Avoids re-checking sorted elements at the end
            if(numbers[j] > numbers [j+1]){ // --> Compare neighbors
                [numbers[j], numbers[j+1 ]] = [numbers[j+1], numbers[j]] // Swap
            }
            console.log(numbers)
        }
    }
}

let arr = [5, 4, 3, 2, 1]
bubbleSort(arr)