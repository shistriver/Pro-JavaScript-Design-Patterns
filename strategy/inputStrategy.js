/**
 * Created by shiyuanzhong on 2017/6/25.
 */
//表单验证
var InputStrategy = function () {
    var Strategy = {
        //是否为空
        notNull : function (value) {
            return /\s+/.test(value) ? '请输入内容' : '';
        },
        //是否是一个数字
        number : function (value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
        },
        //是否是本地电话
        phone : function (value) {
            return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式，如：010-12345678 或 0418-1234567';
        }
    };
    return {
        //验证接口 type 算法 value 表单值
        check : function (type, value) {
            value = value.replace(/^\s+|\s+$/, '');
            return Strategy[type] ? Strategy[type](value) : '没有该类型的检测方法';
        },
        //添加策略
        addStrategy : function (type, fn) {
            Strategy[type] = fn;
        }
    }
}();

InputStrategy.addStrategy('nickName', function (value) {
    return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入4-8位昵称，如：YYQH';
});

//外观模式简化元素的获取
function $tag(tag, context) {
   context = context || document;
   return context.getElementsByTagName(tag);
}

//点击按钮提交
$tag('input')[1].onclick = function () {
    //获取输入框内的内容
    var value = $tag('input')[0].value;
    //获取日期格式验证结果
    $tag('span')[0].innerHTML = InputStrategy.check('nickName', value);
}
