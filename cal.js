const bodyTag = document.body;
const bodyClassList = bodyTag.classList;
const logo = document.querySelector(".logo");
const themeBtn = document.querySelector(".dark_mode_btn");
const navBar = document.querySelector(".nav_bar");
const main = document.querySelector("main");

function setTheme() {
  if (bodyClassList.contains("dark")) {
    // 다크 모드일 경우, 다크 모드 클래스 제거
    bodyClassList.remove("dark");
    // localStorage에 상태 저장
    window.localStorage.setItem("color_mode", "");
    logo.src = "img/m.lab.png";
    themeBtn.querySelector(".set_theme_img").src = "img/sun.png";

    navBar.style.borderBottom = "1px solid #aaaaaa";
    main.style.backgroundColor = "rgb(224, 255, 226)";
  } else {
    // 다크 모드가 아닐 경우, 다크 모드 클래스추가
    bodyClassList.add("dark");
    // localStorage에 상태 저장
    window.localStorage.setItem("color_mode", "dark");
    logo.src = "img/m.lab_dark.png";
    themeBtn.querySelector(".set_theme_img").src = "img/moon.png";

    navBar.style.borderBottom = "1px solid #4f4f4f";
    main.style.backgroundColor = "#151515";

  }
}

// 계산 기능
var all = "";

function add(num) {
  document.getElementById("display").value += num;
}

function calculateExpression(expression) {
  // 로그 함수 및 삼각함수 처리
  if(expression.includes("log")){
      expression = expression.replace(/log\(([^)]+)\)/g, (match, p1) => `Math.log10(${p1})`);
  }
  if(expression.includes("tan")){
      expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1})`);
  }
  if(expression.includes("sin")){
      expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1})`);
  }
  if(expression.includes("cos")){
      expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1})`);
  }
  if(expression.includes("**")) {
    expression = expression.replace(/\b(\d+)\s*\^\s*(\d+)\b/g, (match, p1, p2) => `${p1}**${p2}`);
  }
  if(expression.includes("abs")){
    expression = expression.replace(/abs\(([^)]+)\)/g, (match, p1) => `Math.abs(${p1})`);
  }
  if(expression.includes("in")){
    expression = expression.replace(/in\(([^)]+)\)/g, (match, p1) => `Math.log(${p1})`);
  }

  // 각 함수의 결과를 따로 계산하고 더하기
  const terms = expression.split('+');
  let result = 0;
  for (const term of terms) {
    result += eval(term); // eval 대신에 안전한 방법으로 계산하는 방법을 사용할 것을 권장
  }
  return result;
}

function sum() {
  let target = document.getElementById("display").value
  const result = calculateExpression(target);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function tan() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"tan("
  
    // 포커스를 '(' 문자 뒤에 위치시킴
  const display = document.getElementById("display");
  const position = target.lastIndexOf("(") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

function sin() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"sin("
  
  const display = document.getElementById("display");
  const position = target.lastIndexOf("(") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

function cos() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"cos("
  
  const display = document.getElementById("display");
  const position = target.lastIndexOf("(") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

function addAbs() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"abs("

  const display = document.getElementById("display");
  const position = target.lastIndexOf("(") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

function addPow() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"**"

  const display = document.getElementById("display");
  const position = target.lastIndexOf("^") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

function addLog() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"log(";
  
  const display = document.getElementById("display");
  const position = target.lastIndexOf("(") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

function addIn() {
  let target = document.getElementById("display").value
  document.getElementById("display").value = target+"in(";
    
  const display = document.getElementById("display");
  const position = target.lastIndexOf("(") + 1;
  display.setSelectionRange(position, position);
  display.focus();
}

const feet = 3.28084;
const inches = 39.3701;

function convertToFeet() {
  let val = document.querySelector("#display");
  const result = val.value * feet;
  val.value = result;
}
function convertToInches() {
  let val = document.querySelector("#display");
  const result = val.value * inches;
  val.value = result;
}

const title = document.querySelector(".title");
const userLang = navigator.language.toLowerCase();
const langSplit = userLang.substring(userLang.indexOf("-") + 1);
let selectedLanguage = langSplit;

document.addEventListener("DOMContentLoaded", function () {
  console.log(selectedLanguage)
  document.title = getTranslatedTitle(selectedLanguage);
  getTranslatedDescription(selectedLanguage);
  document.querySelector('meta[name="description"]')
          .setAttribute("content", getTranslatedDescription(selectedLanguage));
  title.textContent = getTranslatedContent(selectedLanguage);
});

function getTranslatedTitle(selectedLanguage) {
  switch (selectedLanguage) {
    case "ko":
    case "kr":
      return "공학용 계산기";
    case "en":
      return "Scientific Calculator";
    case "zh":
      return "科学计算器";
    case "ja":
      return "工学用計算機";
    default:
      return "Scientific Calculator";
    }
  }
  
  function getTranslatedDescription(selectedLanguage) {
    switch (selectedLanguage) {
      case "ko":
      case "kr":
        return "간편한 공학용 계산기";
      case "en":
        return "An easy Scientific Calculator";
      case "zh":
        return "简便的科学计算器";
      case "ja":
        return "工学用計算機";
      default:
        return "An easy engineering calculator";
    }
  }

  function getTranslatedContent(selectedLanguage){
    const title = document.querySelector(".title");
    switch (selectedLanguage) {
      case "ko":
      case "kr":
        return "공학용 계산기"
      case "en":
        return "Scientific Calculator";
      case "zh":
        return "科学计算器";
      case "ja":
        return "工学用計算機";
      default:
        return "Scientific Calculator";
    }
  }