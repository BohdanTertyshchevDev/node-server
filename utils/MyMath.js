class MyMath {
    static sum = (a, b) => a + b;
    static sub = (a, b) => a - b;
    static multy = (a, b) => a * b;
    static div = (a, b) => a / b;
}
//Эскпортируем один объект и больше ничего
// module.exports = MyMath;

//Экспортируем объект в котором лежит MyMath функция и переменная
// module.exports.MyMath = MyMath;
// module.exports.SupreFunc = function () {};
// module.exports.constant = "value";

module.exports = {
    MyMath,
    superFunc: () => {},
    constant: 'value'
}