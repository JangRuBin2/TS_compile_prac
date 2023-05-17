/* ALT + SHIFT + A */ 
/**
 * @ params {array} arrayData
 * @ params {string} insertData
 * @ return {array} 문자열로 된 배열입니다
 * @ return {array} 개발 새발
*/
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
function first(arrayData : string[], insertString : string) : string[] {
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
  let combineArray : string[] = [];
  // * 4
  combineArray = [insertString, ...arrayData];
  // * 5
  return combineArray;
}
// 기존 배열에 0번째를 최종적으로 바꿔주는 형태

// - …전개 연산자
// - reduce()
// - map()
// - push()
let data = ['최대건','정성철','허진','이세민'];
console.log(first(data,"대머리"))
// console.log(...data)
// * 스니펫 확인
console.log(first())