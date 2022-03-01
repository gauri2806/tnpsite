//Used by Counter

let waiter1 = setInterval(incrementer1);
let waiter2 = setInterval(incrementer2);
let waiter3 = setInterval(incrementer3);
let waiter4 = setInterval(incrementer4);
let begin1 = 0;
let begin2 = 0;
let begin3 = 0;
let begin4 = 0;

function incrementer1(){
    var count1 = document.getElementById("placementsCounter");
    var max1 = parseInt(count1.getAttribute("maxcount"));
    count1.innerHTML = ++begin1;

    if(begin1 === max1)
    {
        clearInterval(waiter1);
    }
}
function incrementer2(){
    var count2 = document.getElementById("companiesCounter");
    var max2 = parseInt(count2.getAttribute("maxcount"));
    count2.innerHTML = ++begin2;

    if(begin2 === max2)
    {
        clearInterval(waiter2);
    }
}
function incrementer3(){
    var count3 = document.getElementById("ppCounter");
    var max3 = parseInt(count3.getAttribute("maxcount"));
    count3.innerHTML = ++begin3;

    if(begin3 === max3)
    {
        clearInterval(waiter3);
    }
}
function incrementer4(){
    var count4 = document.getElementById("satisfactionCounter");
    var max4 = parseInt(count4.getAttribute("maxcount"));
    count4.innerHTML = ++begin4;

    if(begin4 === max4)
    {
        clearInterval(waiter4);
    }
}