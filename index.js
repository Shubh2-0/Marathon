// done
function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0]
  let line = 1;
  let arr1 = []
  let arr2 = []
  for(let t=0;t<tc;t++){
      let [eng, dis] = input[line].trim().split(" ").map(Number)
      line++
      arr1.push(eng);
      arr2.push(dis);
  }
//   
          let end = tc
          let start = 0
          let teng = 0
          let tdis = 0
          let flag;
          let count;
      for(let i=0;i<tc;i++){
          flag = true
          count = start;
          while(count<end){
              teng+=arr1[count%tc];
              tdis+=arr2[count%tc]
              // console.log(teng, tdis)
              if(teng<tdis){
                  flag = false;
                  teng = 0;
                  tdis = 0; 
                  break;
              }
              count++
          }
          if(flag){
              break;
          }
          start++
          end++
      }
      if(start>=tc){
          console.log("No starting points")
      }else{
          console.log(start)
      }
}
if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}

