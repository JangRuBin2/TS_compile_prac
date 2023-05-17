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
function first(arrayData : string[]) : string[] {
  // 1.첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
  // let result : string = arrayData[0];
  // result = "다른값";
  // let arr : string[] = arrayData.unshift();
  // return arr;
  // let result : string = "강지민";
  // let arr : string[] = []
  // arr.unshift(result);
  // return arr;
  // ! 첫번째
  let kimochi : string = "기모찌";
  let arr : string[] = [];
  arr.push(kimochi);
  return arr;
}
// 기존 배열에 0번째를 최종적으로 바꿔주는 형태

// - …전개 연산자
// - reduce()
// - map()
// - push()
let data = ['최대건','정성철','허진','이세민'];
console.log(first(data))