//the code of the first requirement
var user = new Object();
user.name= 'john';
user.surname  = 'Mike';
user.name = 'Peter';
delete user.name;

//the code of the second requirement
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
var sum = 0; //计算水果总和的变量
for (var att in fruit){
	sum += fruit[att];
}
console.log(sum);