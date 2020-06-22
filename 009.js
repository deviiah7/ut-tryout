const startingArray = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

function unique(array){
  return array.filter(function(el, index, arr) {
      return index == arr.indexOf(el);
  });
}

const uniqueArray = unique(startingArray);
//output in array
console.log(uniqueArray);
//output in looping
uniqueArray.forEach(function(currentValue, index, arr){
    console.log(arr[index]);
})
