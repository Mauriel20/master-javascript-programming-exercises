var car = {
    model: 'toyota'
};



function addProperty(obj, key) {
  // your code here
  obj [key]= true;
  return obj;
}

console.log(addProperty(car, 'model'));