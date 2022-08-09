// Step 2: Write Code
// Problem 1
// runtime complexity O(n^2)
// space complexity O(n)
function sumZero(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let k=0; k< arr.length; k++) {
            if(i !== k && arr[i] - arr[k] === 0) {
                return true
            }
        }
    }
    return false
};

console.log(sumZero([1,2,3,-1,-2]))

// Problem 2
// runtime complexity 0(n)
// space complexity: 0(n)
function uniqueChars(str) {

    const usedChars = {}
    for(let i=0; i < str.length; i++) {
        if(usedChars[str[i]]) {
            return false
        } else {
            usedChars[str[i]] = "filler"
        }
    }
        return true
}
console.log(uniqueChars('Windy'))
console.log(uniqueChars('Suunday'))

// Problem 3
// runtime 0(n)
// space complexity O(n)
const pangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(pangram("The quick brown fox jumps over the lazy dog!"))


// Problem 4
// space complexity 
function findLongestWord(arr) {
    let longWordLength = 0
    for(let i=0; i< arr.length; i++) {
        if(arr[i].length > longWordLength) {
            longWordLength = arr[i].length
        }
    }
    return longWordLength
}

console.log(findLongestWord(["zoo", "kangaroo"]))