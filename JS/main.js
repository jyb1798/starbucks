// .badges와 .badge가 스크롤이 내려가면 사라지도록 만드는 JS 코드

// 스크롤을 내일 때마다 동시에 실행되는 수십개의 함수의 수를 외부에서 가지고 올 수 있는 JS 라이브러리를 통해서 제어
//  그 라이브러리 lodash cdn : 코드 복사해서 index.html head tag에 붙여넣음(연결함)

const badgeEL = document.querySelector('header .badges');
// 버튼을 선택하면 화면이 최상단으로 이동하게 만든다
const toTopEl = document.querySelector('#to-top');

// 300 > 300 밀리세컨(0.3초) 
// _.throttle(함수, 시간)  : 함수가 시간마다 한번 실행되도록 제어

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    // 화면이 스크롤될 때마다 윈도우라는 객체부분에 있는 scrollY가 갱신이 됨
    // scrollY를 통해서 화면이 위에서 몇 픽셀 지점에 위치하는지 숫자로 확인됨
    if(window.scrollY > 500) {
        // 배지 숨기기
        // badgeEL.style.display = 'none';
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none' 
        });
    // 버튼 보이기!
    // 아이디 to-top인 요소를 찾아서 애니메이션을 추가할 것인데, 애니메이션 지속시간은 0.2초
    // x축의 이동값을 추가하겠다(0px에서 시작 -> 100px로 이동)
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        // badgeEL.style.display = 'block';
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block' 
        });
        // 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));


// event, 1번째 인수: click이벤트, 
// 2번째 인수 : 함수(to-top이라는 요소를 클릭하면 함수를 실행하겠다는 의미)
toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});




// 배지가 자연스럽게 보이고 사라지도록 하는 애니메이션 라이브러리 사용 : GSAP
// GSAP cdn : 코드 복사해서 index.html head tag에 붙여넣음(연결함)


// opacity 속성처럼 값을 숫자로 입력하는 속성들은 전환효과(transition 속성이나 GSAP 라이브러리 등)를 통해
// 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만,
// display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에
// 자연스러운 전환 효과를 적용할 수 없다.




// SECTION의 이미지 요소들이 하나씩 순차적으로 보이도록 하는 코드 작성

// querySelectorAll : 선택자들을 전부 찾아서 fadeEls에 할당
// forEach(funcition): HTML에서 찾은 선택자(요소)들의 개수만큼 funcition이 실행된다(반복실행)
// function (fadeEl, index) {} : 반복되는 fadeEl라는 요소는 index(횟수, index로 가능)만큼 실행한다
// gsap.to(요소, 지속시간(초단위), 옵션-객체형태-);
// 

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,  // 0.7초 후에 애니메이션 동삭, 1.4, 2.1, 2.7
        opacity: 1
    });
});

// swiper
// new Swiper(선택자, 옵션)

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    // 자동재생 옵션
    autoplay: true,
    // 반복재생 옵션
    loop: true
  });

  new Swiper('.promotion .swiper-container', {
    //   수평 슬라이드는 auto값은 direction: 'horizontal',
    // el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자(해당 선택자의 요소를 페이지 번호를 사용하는 그 요소로 사용하겠다는 의미)
    // clickable: true // 사용자의 페이지 번호 요소 제어
    // navigaion이라는 옵션 : prevEl(이전버튼),  nextEl(다음버튼)
    // prevEl: '.promotion .swiper-prev', // swiper.js가 해당 선택자를 찾아서 이전 슬라이드 보는 버튼으로 만들어준다
    // nextEl: '.promotion .swiper-next' // swiper.js가 해당 선택자를 찾아서 다음 슬라이드 보는 버튼으로 만들어준다
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, //반복재생 옵션
    autoplay: {
        delay: 5000 //자동슬라이드 몇 초에 한 번씩 될것인가. 5초 지정
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // CSS로 스타일 잡아야 화면에 출력
    navigation: {
        prevEl: '.swiper-prev', 
        nextEl: '.swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev', 
        nextEl: '.awards .swiper-next'
    }
})




// promotion이라는 class를 찾아서 promotionEl 변수에 할당
const promotionEl = document.querySelector('.promotion');
// .toggle-promotion 요소를 찾아서 promotionToggleBtn 변수에 할당
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// isHidePromotion 변수 false로 할당
let isHidePromotion = false;
// promotionToggleBtn변수를 click하면 어떤 함수가 실행되는 event handler 작성
// 그 함수는 isHidePromotion 값을 체크해서 그것의 반대값을 다시 할당하는 것
// 그 함수 값은 처음에 false였으니까 true로 할당이 되고, if함수의 true로 실행이 된다(숨김처리)
//  promotionEl.classList.add('hide'); >  promotionEl에 hide가 추가가 되는 것
// 화면에 hide가 add되면 > isHidePromotion이 true가 되는 것 > 그러면 !isHidePromotion은 false가 되면서
//  else가 실행 됨 
promotionToggleBtn.addEventListener('click', function() {
    // 특정 변수의 값을 지속적으로 반대 값으로 반환
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // '.toFixed()'를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  

// gsap.to(요소, 시간, 옵션)
function floatingObject(selector, delay, size) {
    gsap.to(
        selector, 
        random(1.5, 2.5), 
        {
            y: size,
            repeat: -1, // 무한반복
            yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
            ease: Power1.easeInOut,
            delay : random(0, delay) // 몇 초 뒤에 애니메이션을 실행하겠다는 지연시간 삽입
        }
      );
}


floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 특정한 섹션이 화면에 보이기 시작하면 애니메이션을 추가해주는 기능 도입을 위한 명령
// 함수명 안에 각각의 반복되는 요소의 이름을 적어준다
// new라는 생성자함수를 통해 ScrollMagic 라이브러리를 실행함
// .Scene() 메소드 > 특정한 요소를 감시하는 옵션을 지정해주는 메소드
// triggerElemnet: spyEl > triggerElemnet라는 옵션에다가 spyEl(내가 감시하고 있는 하나의 섹션)
// triggerElemnet: spyEl // 보여짐 여부를 감시할 요소를 지정
// triggerHook > 내가 감시하는 요소가 뷰포트의 어떤 지점에서 감시할 것인가? > 그 지점에서 내가 감시하는 요소가
// 보여진다라고 판단되면>  .setClassToggle()이라는 메소드를 실행하는 구조
// triggerHook: .8 > 뷰포트 세로를 1로 뒀을 때, 위(0)에서 아래(1) 사이의 0.8 지점
// .setClassToggle() 메소드 > HTML Class를 넣었다 뺐다(Toggle) 하는 역할을 위한 메소드
// .setClassToggle(spyEl, 'show') > 인자 2개 사용 가능, 'show'라는 클래스를 넣었다 뺐다 하겠다
// .addTo() > ScrollMagic 라이브러리의 컨트롤러를 사용하기 위해 추가해줘야하는 메소드
// .addTo(new ScrollMagic.Controller()) > ScrollMagic에서 기본적으로 추가한 옵션들을 내부의 컨트롤러에 할당해서 실제로 동작할 수 있는 구조를 만들어준 것
// HTML class에 scroll-spy라는 클래스를 추가해줌

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl){
    new ScrollMagic
        .Scene({
            triggerElemnet: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
  });


