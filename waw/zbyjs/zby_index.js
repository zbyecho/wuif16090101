$(document).ready(function() {

// 导航开始
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
// 导航结束
//底部选项卡开始
    var Btn=document.querySelectorAll('.BtnBox .BtnItems');
    console.log(Btn)
    var Dbox=document.querySelectorAll('.zby_Dbox');
    console.log(Dbox);
    var Title=document.querySelector('.header-fenlei a');
     var flag=true
    Dbox[0].style.display="block";
    // cc(Btn[0])
    var a=Btn[0].getElementsByTagName('a')
   console.log(Btn[0].innerText) 

      var chu=function chu(){
        var swiper= new Swiper('.swiper-container',{
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    } 
    chu()
    Title.innerHTML=Btn[0].innerHTML
    for(var i=0;i<Btn.length;i++){
        Btn[i].index=i;
        Btn[i].addEventListener('touchstart',function(){

            // chu()=null;
            // console.log(chu)
            chu=null;
            for(var j=0;j<Btn.length;j++){
                Btn[j].classList.remove('zby-hot')
                Dbox[j].style.display="none";
            }
            this.classList.add('zby-hot')
            Dbox[this.index].style.display="block";
            Title.innerHTML=this.innerHTML
            cc(this.index);
            console.log(this.index)
        })
        
    }

function cc(i){
        if(i==0){
                
                  aa()
                 
        }else if(i==2){
                bb()
                  

        }   
 }

//底部选项卡结束
var num=0
function aa(){
    num++
    var swiper= new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    console.log("aa这是第"+num+"");
}
var fum=0

function bb(){
    fum++
    var swiper2 = new Swiper('.swiper-container2',{
            pagination: '.swiper-pagination2',
            paginationClickable: true
    });
     console.log("bb这是第"+fum+"");
}
     
        
}) 
