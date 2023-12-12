let arr = ['a', 'b'];

// arr.push("c") // arr = ["a","b","c"]

arr.push(function () {
    alert(this); // this == caller == arr
});
// arr = ["a", "b", function(){alet(this)}]

arr[0];
arr[1];
arr[2](); // call FN
// alert("a","b",function(){alert(this)})
