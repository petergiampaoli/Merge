// source code

// const tootsiepop = {};
// tootsiepop.lick = function () {
//   return 'licked';
// };
// tootsiepop.getToCenter = function () {
//   this.lick();
//   this.lick();
//   this.lick();
//   return 'got to center';
// };

// const bubbleSort=(array)=>{
//   swap();
//   return array;
// }

// const swap =()=>{
//   console.log(`swapped`);
// }

const bubbleSort=(array)=>{
for (i = 0; i < array.length; i ++){
  if (!valueChecker(array , i)){
    swap(array, i);
  }

}
return array;
}

const swap =(array, index)=>{
  const leftValue = array[index];
  const rightValue = array[index +1];
  array[index] = rightValue;
  array[index+1] = leftValue;
}

const valueChecker =(array , index)=>{
  if (array[index] === array.length -1){
    return true;
  }
  return array[index] < array[index+1]
}
