function solve(arr){
    arr=arr.filter((a,i)=>i%2===1)
        .map(a=>a*2)
        .reverse();
    console.log(arr.join(" "));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3])