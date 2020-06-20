function myfun(param){
    console.log(param);
    let rVal = param();
    console.log(rVal);
}

// myfun(10);
// myfun("bivsj");
// myfun("true");
// myfun([1, 2, 3, 4,5]);
// smaller ia callback function => a function that is passed to another function
myfun(function smallerfn(){
    let a = 10;
    a++;
    console.log("i am function passed to myfun");
    return a;
});