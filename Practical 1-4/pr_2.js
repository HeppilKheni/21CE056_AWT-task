let arr = [1, "Heppil", true, 3.14, 5];


console.log("length :", arr.length);


console.log("Element at  myarray[2] :", arr[2]);
console.log("Element at myarray[4] :", arr[4]);
console.log("Array : ", arr);

arr.push(6);

console.log("After push(6) : ", arr);
arr.pop();

console.log("After pop() : ", arr);
arr.unshift(0);

console.log("After unshift(0) : ", arr);
arr.shift();

console.log("After shift : ", arr);
console.log(" After join : ", arr.join('-'));

delete arr[2];
console.log("After delete : ", delete arr[2]);

let newArray = [7, 8.4, "new string"];
arr = arr.concat(newArray);
console.log("Concate : ", arr);

let flattenedArray = [
    [10, 11.1],
    [12, 13]
].flat();
console.log('Flatten Array:', flattenedArray);

arr.splice(2, 1, 10, 11);
console.log("splice : ", arr);

let slicedArray = arr.slice(1, 4);



console.log("Sliced array:", slicedArray);



let person = {
    name: "Heppil Kheni",
    age: 20,
    gender: "Male"
};


function displayDetails(person) {
    console.log("name:", person.name);
    console.log("age:", person.age);
    console.log("gender:", person.gender);
}
displayDetails(person);