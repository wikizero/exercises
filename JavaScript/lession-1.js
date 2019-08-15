// 1、JavaScript 同时接受双引号和单引号
// 2、注释  //  & /* */
// 3、 10 + 10 + "hello" + 10 + 10  == 20hello1010
// 4、 3 ** 2 == 9
// 5、数字、字符串、数组、对象
// 6、var person = {name: "Alice", age: 18}; 对象属性 person.name  person["name"]

/*
var x = "Bill";
var y = new String("Bill");

// typeof x 将返回 string
// typeof y 将返回 object

=== 运算符需要类型和值同时相等
 */

/*
indexOf() 方法返回字符串中指定文本首次出现的索引（位置）   str.indexOf("China");
lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引
如果未找到文本， indexOf() 和 lastIndexOf() 均返回 -1。

search() 方法搜索特定值的字符串，并返回匹配的位置
replace()
search、replace都支持正则表达式
 */

/*
数组forEach函数
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(myFunction);

数组map函数  filter()  reduce()  reduceRight()  .every()  .some()  .indexOf() .find()  .findIndex()
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
    // 请注意此函数接受 3 个参数：项目值、项目索引、数组本身
  return value * 2;
}

JavaScript 方法 toString() 把数组转换为数组值（逗号分隔）的字符串。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
# Banana,Orange,Apple,Mango

push()  pop()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();   // 返回 "Banana" 感觉类似 lpop()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // 向 fruits 添加新元素 "Lemon"  并返回新数组的长度。  类似rpush

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys  合并多个  arr1.concat(arr2, arr3);

Math.max.apply([1, 2, 3]) 等于 Math.max(1, 2, 3)。
 */




