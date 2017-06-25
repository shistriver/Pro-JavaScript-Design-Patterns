/**
 * Created by shiyuanzhong on 2017/6/25.
 */
//价格策略对象
var PriceStrategy = function () {
    var strategy = {
        return30: function (price) {
            return +price + parseInt(price / 100) * 30;
        },
        return50: function (price) {
            return +price + parseInt(price / 100) * 50;
        },
        percent90: function (price) { //9折
            //javascript 在处理小数乘除有bug，故运算前转化为整数
            return price * 100 * 90 / 10000;
        },
        percent80: function (price) { //8折
            //javascript 在处理小数乘除有bug，故运算前转化为整数
            return price * 100 * 80 / 10000;
        },
        percent50: function (price) { //5折
            //javascript 在处理小数乘除有bug，故运算前转化为整数
            return price * 100 * 50 / 10000;
        }
    }
    //策略算法调用接口
    return function (algorithm, price) {
        //如果算法存在，则调用算法，否则返回false
        return strategy[algorithm] && strategy[algorithm](price);
    }
}();

var price = PriceStrategy('return50', '314.67');
console.log(price);