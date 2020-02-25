import 'core-js'

// 私有变量
class Person {
    #id = 1;
    getId() {
        console.log(this.#id);
    }
}

const b = new Person();
// 直接通过点运算符访问， 为undefined
console.log(b.id);
// 通过函数内部this访问， 可访问到
console.log(b.getId());


// promise.allSettled
const p1 = new Promise((res, rej) => setTimeout(() => res('resolve'), 1000));
const p2 = new Promise((res, rej) => setTimeout(() => res('reject'), 1000));

// 如果队列中任意一个promise返回reject, 则终止, throw error
// Promise.all([p1, p2]).then(data => { debugger; console.log(data) });

// 等待所有的promise完成（无论成功失败）， 返回一个promise结果的list
Promise.allSettled([p1, p2]).then(data => console.log(data));

// 空位合并运算符
// 主要解决短路运算的问题, 而且更为严格, 值为null/undefined时
let person = {
    name: 'hawei',
    info: {
        age: 25,
        code: 1,
    },
};

console.log("name", person.name);
console.log("age", person.info.age);
// 布尔短路运算
console.log("address", person.info.address || "address");

// 空位合并运算
console.log("address", person.info.address ?? "address??")
console.log("address", false ?? "address??")
console.log("address", 0 ?? "address??")
console.log("address", '' ?? "address??")


// 可选链式运算符
let animal = {};

// old school
console.log(animal && animal.cat && animal.cat.name || "1")

// throw error 因为cat没有获取到
// console.log(animal.cat.name ?? "big cat");
// 不会throw error
console.log(animal?.cat?.name ?? "big cat");
console.log(animal?.cat?.age ?? 18);

// big Int
// 总所周知， js对于浮点的运算很是让人难过.才会出现类似.1 + .2 !== .3
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(.1 + .2 !== .3);
console.log(maxNumber);
console.log(maxNumber + 1);
console.log(maxNumber + 2);

// 那么bigInt的出现就解决这些问题
// 你们也看出来了，bigInt定义就是在数字后面加“n”
const bigNumber = 100000000000000000000000000000n;
console.log(bigNumber * 2n);

// 动态导入
// 在webpack4的时候， shakeTree就已经内置。动态导入对于按需引用的重要性不言而喻。
// 简而言之，动态导入就是在我们代码里动态的去导入某些我们需要的模块。

const add1 = async (n) => {
    if (typeof n === 'number') {
        const { plusSelf } = await import('./count.js');
        console.log(plusSelf(n));
    }
}

add1(5); // 6