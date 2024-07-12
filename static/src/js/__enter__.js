const html = document.getElementById('html');

function setTheme(theme) {
  var date = new Date();
  date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = date.toUTCString();
  document.cookie = "theme=" + theme + ";expires=" + expires + ";path=/";
  html.setAttribute('data-theme', theme);
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

function changeMenu() {
  localStorage.setItem("menu", window.location.pathname.split('/')[1]);
  var localMenu = localMenu = localStorage.getItem("menu");
  if(localMenu == '') {localMenu='home';}
  var arrButtonMenu =  document.querySelectorAll('.buttonMenu');
  for (let i = 0; i < arrButtonMenu.length; i++) {
    var buttonMenu = arrButtonMenu[i];
    var icon = buttonMenu.querySelectorAll('svg')[0]
    if(buttonMenu.getAttribute('menu') == localMenu) {
      buttonMenu.classList.add('nav-activate');
      buttonMenu.classList.remove('nav-deactivate');
      if(icon != undefined) {
        icon.classList.add('icon-activate');
        icon.classList.remove('icon-deactivate');
      }

    }
    else {
      buttonMenu.classList.remove('nav-activate');
      buttonMenu.classList.add('nav-deactivate');
      if(icon != undefined) {
        icon.classList.remove('icon-activate');
        icon.classList.add('icon-deactivate');
      }
    }
  }
}

// init menu
changeMenu();


function buildTagHTML(str) {
    return str.replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&#39;/g, "'");
}

var theme = html.getAttribute('data-theme');
const cookiesTheme = getCookie('theme');

// init theme 
if (cookiesTheme == null) {
  setTheme(theme);
}
else {
  html.setAttribute('data-theme', cookiesTheme);
}

function print(str) {console.log(str);}
function len(arr) {return arr.length;}