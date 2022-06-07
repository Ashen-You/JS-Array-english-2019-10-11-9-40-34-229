// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("-------------- Answer 1 --------------")
console.log("Whether a is an Array?: ", Array.isArray(a));
console.log("Whether b is an Array?: ", Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (index in a) {
    a[index] *= 2;
}
console.log("\n-------------- Answer 2 --------------")
console.log("The output of program:  ", a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
// TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log("\n-------------- Answer 3 --------------")
console.log("The output of case1:    ", colors.join(" "))
console.log("The output of case2:    ", colors.join("+"))
console.log("The output of case3:    ", colors.join(","))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log("\n-------------- Answer 4 --------------")
console.log("The output of sort a:   ", a.sort(function(a, b) { return b - a }));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var map = new Map()
var ans, max_cnt = 0;
a.forEach(element => {
    if (!map.get(element)) map.set(element, 0);
    var cnt = map.get(element) + 1;
    map.set(element, cnt);
    if (cnt > max_cnt) ans = element, max_cnt = cnt;
});
console.log("\n-------------- Answer 5 --------------")
console.log("The output of search:   ", ans);