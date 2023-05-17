var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log("하이");
// function first(arrayData) {
//   // 1.첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
//   let result = arrayData[0];
//   result = "다른값";
//   let arr = arrayData.unshift();
//   return arr;
// }
// let data = ['최대건','정성철','허진','이세민'];
// first(data);
//* 매개변수를 배열로 받을 예정
// * typeof(arrayData) == "string"
function first(arrayData, insertString) {
    // 1.첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
    // let result : string = arrayData[0];
    // result = "다른값";
    // let arr : string[] = arrayData.unshift();
    // return arr;
    // let result : string = "강지민";
    // let arr : string[] = []
    // arr.unshift(result);
    // return arr;
    // // ! 첫번째
    // // let kimochi : string = "기모찌";
    // // let arr : string[] = [];
    // // arr.push(kimochi);
    // // // return arr.push(kimochi);
    // // return arr;
    // // ! 두번째
    // // let susi : string = "기모링";
    // let arr :string[] = [];
    // let result : string[] = arr.map(a => {
    //   a + "하이"
    // })
    // return result;
    // * 1
    // const insertString :string = 
    // * 2 
    arrayData.pop();
    // * 3
    var combineArray = [];
    // * 4
    combineArray = __spreadArray([insertString], arrayData, true);
    // * 5
    return combineArray;
}
// 기존 배열에 0번째를 최종적으로 바꿔주는 형태
// - …전개 연산자
// - reduce()
// - map()
// - push()
var data = ['최대건', '정성철', '허진', '이세민'];
console.log(first(data, "대머리"));
// console.log(...data)
