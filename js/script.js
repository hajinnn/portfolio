$(document).ready(function(){

  //AOS
  AOS.init();

  //안에 sec3 원형그래프 속성 담기
  function skillScroll() {

      //html,css
      var perNum = 90;
      $('.second.hc').circleProgress({
        value: perNum/100,
        startAngle:300,
        size:120,
        fill:{
          color:["#CBCBCB"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2000,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:false,
        
              
        }).on('circle-animation-progress', function(event, progress) {
              $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
  
        //JavaScript
        var perNumm = 80;
      $('.second.js').circleProgress({
        value: perNumm/100,
        startAngle:300,
        size:120,
        fill:{
          gradient:["#CBCBCB"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2000,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:false
              
        }).on('circle-animation-progress', function(event, progress) {
              $(this).find('strong').html(Math.round(perNumm * progress) + '<i>%</i>');
        });
  
        //Figma, XD
        var perNum = 90;
      $('.second.fx').circleProgress({
        value: perNum/100,
        startAngle:300,
        size:120,
        fill:{
          gradient:["#CBCBCB"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2000,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:false
              
        }).on('circle-animation-progress', function(event, progress) {
              $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
  
        //Illustrator, Photoshop
        var perNum = 90;
      $('.second.ip').circleProgress({
        value: perNum/100,
        startAngle:300,
        size:120,
        fill:{
          gradient:["#CBCBCB"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2000,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:false
              
        }).on('circle-animation-progress', function(event, progress) {
              $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
  
  
        //Lightroom
        var perNummm = 85;
      $('.second.li').circleProgress({
        value: perNummm/100,
        startAngle:300,
        size:100,
        fill:{
          gradient:["#cccccc"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2000,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:false
              
        }).on('circle-animation-progress', function(event, progress) {
              $(this).find('strong').html(Math.round(perNummm * progress) + '<i>%</i>');
        });
  
        //Premiere Pro
        var perNummmm = 70;
      $('.second.pr').circleProgress({
        value: perNummmm/100,
        startAngle:300,
        size:100,
        fill:{
          gradient:["#cccccc"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2000,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:false
              
        }).on('circle-animation-progress', function(event, progress) {
              $(this).find('strong').html(Math.round(perNummmm * progress) + '<i>%</i>');
        });
  
        //After Effects
        var perNummmmm = 60;
        $('.second.af').circleProgress({
          value: perNummmmm/100,
          startAngle:300,
          size:100,
          fill:{
            gradient:["#cccccc"],
            gradientAngle: Math.PI / 2
          },
          animation:{
            duration:2000,
            easing:"swing"
          },
          lineCap : "butt",
          reverse:false
                
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(perNummmmm * progress) + '<i>%</i>');
          });
  
              
        //Animate
        var perNummmm = 70;
        $('.second.an').circleProgress({
          value: perNummmm/100,
          startAngle:300,
          size:100,
          fill:{
            gradient:["#cccccc"],
            gradientAngle: Math.PI / 2
          },
          animation:{
            duration:2000,
            easing:"swing"
          },
          lineCap : "butt",
          reverse:false
                
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(perNummmm * progress) + '<i>%</i>');
          });
  
  
        //Rhino
        var perNummmmmm = 65;
        $('.second.rh').circleProgress({
          value: perNummmmmm/100,
          startAngle:300,
          size:100,
          fill:{
            color:["#cccccc"],
          },
          animation:{
            duration:2000,
            // easing:"swing"
          },
          lineCap : "butt",
          reverse:false
                
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(perNummmmmm * progress) + '<i>%</i>');
          });

  }
  



// 풀페이지 슬라이드 (메뉴클릭)

var ww = $(window).width();
var wh = $(window).height();
layout();
$(window).resize(function(){
    ww = $(window).width();
    wh = $(window).height();
    layout();
});

function layout(){
    bg = ['snow', '#f3f3f3', 'white' , 'white', 'transparent', 'transparent'];
    $('.page').css({
        width: ww,
        height: wh,
        backgroundColor: function(index){
            return bg[index];
        }
    });
}

//data-index 값 활용해서 메뉴 클릭할 때 스크롤 이동시키기
$('.menu').each(function(index){
    $(this).attr('data-index', index);

});
$('.menu').click(function(){
    // .menu 의 index 순서값을 적용해서 활용
    // html,body 의 영역을 .menu 의 index 순서에 반응해서 wh 값 만큼 scrollTop 값 이동시키기
    let a = $(this).attr('data-index');
    $('html,body').animate({
        scrollTop: wh*a
    });
});


  //메뉴 활성화
  // 스크롤 이벤트 발생시 메뉴가 활성화
  // 스크롤이 해당 페이지 영역에 들어가면 페이지에 맞는 메뉴가 활성화 되도록 함

  $(window).scroll(function(){
    let sct = $(window).scrollTop();


    
    var scroll = $('.sec3-wrap').height() + 800;
    
    console.log("scroll: " + scroll + "sct: " + sct);
    
    if ( scroll >= sct) {
      // skillScroll(); 에 담아둔 원형 그래프 속성 적용
      skillScroll();

    }


    if( sct >= 0  && sct < wh ){
        // 첫번째 영역
        $('.menu').removeClass('on');
        $('.menu').eq(0).addClass('on');
        // $('header').fadeIn(500);
        // 500으로 적게되면 0.5 초로 페이드 아웃됌
        $('.menu').removeClass('active');
    }else if(sct >= wh && sct < wh*2){
        // 두번째 영역
        $('.menu').removeClass('on');
        $('.menu').eq(1).addClass('on');
        $('.menu').addClass('active');
    }else if(sct >= wh*2 && sct < wh*3){
        // 세번째 영역
        $('.menu').removeClass('on');
        $('.menu').eq(2).addClass('on');
        $('.menu').addClass('active');
    }else if(sct >= wh*3 && sct < wh*4){
        // 네번째 영역
        $('.menu').removeClass('on');
        $('.menu').eq(3).addClass('on');
        $('.menu').addClass('active');
    }else if(sct >= wh*4 && sct < wh*5){
        // 다섯번째 영역
        $('.menu').removeClass('on');
        $('.menu').eq(4).addClass('on');
        $('.menu').addClass('active');
    }else if(sct >= wh*5){
      // 여섯번째 영역
      $('.menu').removeClass('on');
      $('.menu').eq(5).addClass('on');
      $('.menu').addClass('active');

  }
  });



    //sec4 스와이퍼

    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
      
    
    
    
    // sec5-wrap app-ui img hover 이벤트
    $('.sec5-wrap .swiper .swiper-wrapper .swiper-slide .con-left').mouseenter(function(){
      $('.sec5-wrap .swiper .swiper-wrapper .swiper-slide .con-left .app-ui img').addClass('active');
    });
    $('.sec5-wrap .swiper .swiper-wrapper .swiper-slide .con-left').mouseleave(function(){
      $('.sec5-wrap .swiper .swiper-wrapper .swiper-slide .con-left .app-ui img').removeClass('active');
    });


  
    // 헤더 스크롤 이벤트 (left-copy, right-menu)
    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      if(sct >= 400){
          $('.menu').addClass('active');
          $('.left-copyright .txt-box').addClass('active');
      }else{
          $('.left-copyright .txt-box').removeClass('active');
      }
    });

    // 헤더 스크롤 이벤트 (portfolio-logo svg)
    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      if(sct >= 800){
          $('.portfolio-logo svg').addClass('active');
      }else{
          $('.portfolio-logo svg').removeClass('active');
      }
    });
   


    //상단이동버튼
    const btn = $('.top-btn');
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
          btn.fadeIn();
      }else{
          btn.fadeOut();
      }
    });

    btn.on('click',function(e){
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      },600);
    });





  // portfolio 버튼 scss
 
    $('.btn-re')
      .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      });


    // sec6 animate-slider box1 클릭시 복사 script
    function copyText() {
      const temp = document.createElement("textarea");
    
      document.body.appendChild(temp);
    
      temp.value = "lms5318@naver.com";
      temp.select();
    
      document.execCommand("copy");
      document.body.removeChild(temp);
    
      window.alert("클립보드에 복사되었습니다.");
    }
    
    const button = document.querySelector(".animate-slider");
    
    button.addEventListener("click", copyText);

    


    // animate-slider box2 클릭시 복사 script
    function copyText() {
      const temp = document.createElement("textarea");
    
      document.body.appendChild(temp);
    
      temp.value = "lms5318@naver.com";
      temp.select();
    
      document.execCommand("copy");
      document.body.removeChild(temp);
    
      window.alert("클립보드에 복사되었습니다.");
    }
    
    const buttont = document.querySelector(".animate-slider.box2");
    
    buttont.addEventListener("click", copyText);

    
    // animate-slider box3 클릭시 복사 script
    function copyText() {
      const temp = document.createElement("textarea");
    
      document.body.appendChild(temp);
    
      temp.value = "lms5318@naver.com";
      temp.select();
    
      document.execCommand("copy");
      document.body.removeChild(temp);
    
      window.alert("클립보드에 복사되었습니다.");
    }
    
    const buttontt = document.querySelector(".animate-slider.box3");
    
    buttontt.addEventListener("click", copyText);
      

    // sec6 마우스 커스텀
    var sec6cursor = document.querySelector('.sec6-cursor');
    // 마우스 이동
    document.addEventListener('mousemove', function(e){
        sec6cursor.style.left = e.pageX + 'px';
        sec6cursor.style.top = e.pageY + 'px';
    });

    // 마우스 클릭 효과
    document.addEventListener('mousedown', function(e){ sec6cursor.classList.add('clicked'); });
    document.addEventListener('mouseup', function(e){ sec6cursor.classList.remove('clicked'); });

    // 마우스 위치가 브라우저 밖으로 벗어날시
    var wrap = document.querySelector('.email-wrap');
    
    wrap.addEventListener('mouseover', function(){ sec6cursor.style.display = 'block'; });
    wrap.addEventListener('mouseout', function(){ sec6cursor.style.display = 'none'; });


    // sec6-자기소개서,이력서 btn 
    document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');



  
  
});


