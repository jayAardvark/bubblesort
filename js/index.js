/*
  trying out bubble sort algorithm. is there a better way?
*/

let array;
 array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
 console.log(array + " before")

function bubbleSort(array) {
  let check = 'yes';
  while(check == "yes"){
    check="no"
    for (let i=0; i<array.length; i++){
      if (array[i] > array[i + 1]) {
        let a = array[i];
        let b = array[i +1];
        array[i] = b;
        array[i + 1] = a;
        check="yes";
      };
    };
  };
console.log(array + " after")
return array;
};
bubbleSort(array)
