/**
 * Created by shiyuanzhong on 2017/6/25.
 */
var MarieState = function () {
    //内部状态私有变量
    var _currentState = {},
        states = {
            jump: function () {
                console.log('jump')
            },
            move: function () {
                console.log('move')
            },
            shoot: function () {
                console.log('shoot')
            },
            squat: function () {
                console.log('squat')
            },
        };
    //动作控制类
    var Action = {
        changeState: function () {
           var arg = arguments;
           _currentState = {};
           if(arg.length){
               for(var i=0, len= arg.length; i<len; i++){
                   _currentState[arg[i]] = true;
               }
           }
           return this;
        },
        goes: function () {
           console.log('触发一次动作');
           for(var i in _currentState){
               states[i] && states[i]();
           }
           return this;
        }
    }
    return{
        change: Action.changeState,
        goes: Action.goes
    }

}

MarieState()
    .change('jump', 'shoot')
    .goes()
    .goes()
    .change('shoot')
    .goes();