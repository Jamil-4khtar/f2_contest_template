/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) => {
    // console.log(item);
    if (item.profession == "developer") {
      console.log(item);
    }
  });
}
console.log("Using map: ");
PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if (item["profession"] === "developer") {
      console.log(item);
    }
  })
};
console.log("\nUsing forEach: ");
PrintDeveloperbyForEach();

function addData() {
  //Write your code here, just console.log
  let newData = { id: 4, name: "susan", age: "20", profession: "intern" }
  // console.log([...arr, newData]);
  arr = [...arr, newData]
  console.log(arr);
}
console.log("\naddData: ");
addData()

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => {
    if (!(item.profession == "admin")) {
      return item;
    }
  })
  console.log(arr);
  
}
console.log("\nRemoved Admin: ");
removeAdmin()


function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "johnny", age: "19", profession: "CEO" },
    { id: 6, name: "sparrow", age: "30", profession: "CFO" },
    { id: 7, name: "sharmaAunty", age: "69", profession: "Janitor" },
  ];
  arr = arr.concat(arr2);
  console.log(arr);
}
console.log("\nConcat: ");
concatenateArray()

