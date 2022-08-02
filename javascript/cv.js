


// const bars = document.querySelectorAll(".progress_bar");

// bars.forEach((bar)=>{
//     let percentage = bar.dataset.percent;
//     let tooltip = bar.children[0];
//     tooltip.innerText= percentage + "%";
//     bar.style.width= percentage + "%";
//     // console.log(percentage);
// });
// ///////////////////////////////////////////////////////////////////////
// const counters = document.querySelectorAll(".counter");

// console.log(counters);
// function runCounters(){
//     counters.forEach((counter)=>{
//         counter.innerText=0;
//         let target = +counter.dataset.count;
//         let step = target / 100;
//         // console.log(target);

//         let countit = function(){
//             let displayedCount = counter.innerText;
//             if(displayedCount<target){
//                 counter.innerText= Math.ceil(displayedCount + step);
//                 // console.log(displayedCount);
//                 setTimeout(countit, 1) ;
//             }else{
//                 counter.innerText=target;
//             }
//         }
//         countit();
//     })
// }

// // runCounters();
 
// let counterSection = document.querySelector(".counter_section");
// let options ={
//     rootMargin : '0px 0px -200px 0px' 
// }
// let done =0;
// const sectionObserver =  new IntersectionObserver((entries)=>{
//     if(entries[0].isIntersecting && done !== 1){
//         // console.log('intersecting...');
//         done=1;
//         runCounters();
//     }
// },options);

// sectionObserver.observe(counterSection);

///////////////////////////////////////////////////////////////////////////////
var logo = document.querySelector(".letter-show");
var n=0;
function content(){
    var tot ="SHAIMAA CV";
    var x=tot.split("");
    logo.innerHTML+=  x[n];
    if((x.length-1)< n){
                n=1
                logo.textContent=x[0];
            }
            else{
                n++
            }

}
setInterval(content, 250);
///////////////////////////////////////////////////////////
