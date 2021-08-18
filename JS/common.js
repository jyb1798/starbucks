// searchEL이라는 변수에 클래스가 "search"인 요소를 CSS 선택자로 찾아서 할당한다
//  searchInputEl에 클래스가 search의 후손 중 input 요소를 CSS 선택자로 찾아서 할당한다

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// searchEL에 addEventListener라는 메소드를 통해 click하면 함수를 실행한다 
// seatchEL은 click하면  searchInputEl가 focus되는 명령을 실행한다
   
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

//  
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ' ');
});



// textContent 속성은 요소가 가지고 있는 글자 내용을 알아내거나
// 값을 지정할 수 있다
// Date()는 현재 날짜 정보를 가지고 있는 객체이다
// Date() 객체에 .getFullYear() method를 실행해주면 현재 년도의 정보가 숫자 데이터로 반환이 된다
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();