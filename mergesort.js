// MERGE SORT

// How to go about it
// 1. We split the array repeatedly until we have sizes of 1
// 2. Invoke merge()
//

// DIAGRAM
// mergeSort(arr) {
//    split(){
//      recursively reduces size down to 1 entry each
//      does this by splitting in half repeatedly
//      BASE CASE
//      -- let currNode to examine currNode
//      -- if currNode.length === 1 {split(currNode)}
//      RECURSIVE CASE
//      -- if currNode.length > 1 {split(currNode)}
//    }
//
//    merge() {
//      takes each element and evaluates it against its neighbor
//      builds
//    }
// }

//--- HELPER FUNCTIONS ---
function split(arr) {
  // Arrays split with non-integer index values
  // e.g. [1,2,3] => [1,2,3].slice(1.5) => [2,3]
  // Initial divide point; will be redefined inside recursive cases
  let dividePoint = arr.length / 2;

  let firstHalf = arr.slice(0, dividePoint);
  let secondHalf = arr.slice(dividePoint);

  // STORING THE DIVIDED THINGS
  let prelimSplitArr = [firstHalf, secondHalf];
  // console.log(prelimSplitArr); ==> THESE NESTED ARRAYS F'IN WORK

  // Loop over both 'halves' aka each of the two nested arrays to continually split and reassign firstHalf and secondHalf

  // BASE CASE
  // If the arr has length 1...
  if (arr.length === 1) {
    // ...you're done, find a way to return the whole shabang
    //code
  }
  // arr.length > 1
  else {
    return split(firstHalf);
  }
  // return fully split array
  return [firstHalf, secondHalf];
}
