/**
 * Created by shiyuanzhong on 2017/6/25.
 */
//state model
var ResultState = function () {
    var States = {
        state0: _state0,
        state1: _state1,
        state2: _state2,
        state3: _state3
    }

    function _state0(){
        console.log(0);
    }

    function _state1(){
        console.log(1);
    }

    function _state2(){
        console.log(2);
    }

    function _state3(){
        console.log(3);
    }

    function show(result) {
        States['state' + result] && States['state' + result]();
    }
    return {
        show: show
    }
}();

ResultState.show(1);