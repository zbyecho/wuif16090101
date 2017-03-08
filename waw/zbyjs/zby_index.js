var qubtn=document.querySelector('.zby_quxiao');
var rest=document.querySelector('.zby_rest');
var secrh=document.querySelector('.zby_st_box');
var shou=document.querySelector('.header-shousuo ');
console.log(qubtn);
console.log(rest);
console.log(secrh);
console.log(shou);
rest.addEventListener('touchstart',function () {
    secrh.style.opacity=0;
    secrh.style.transition='all .5s';
    secrh.style.zIndex=-1;
});
shou.addEventListener('touchstart',function () {
    secrh.style.opacity=1;
    secrh.style.transition='all .5s';
    secrh.style.zIndex=9999;
});
qubtn.addEventListener('touchstart',function () {
  secrh.style.opacity=0;
    secrh.style.transition='all .5s';
    secrh.style.zIndex=-1;
});
he();
window.onresize=he;
function he() {
    var winh=document.documentElement.clientHeight;
    var winw=document.documentElement.clientWidth;
    console.log(winh)
    // secrh.style.height=winh+'px';
    // secrh.style.width=winw+'px';
}