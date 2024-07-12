const buttonTheme=document.getElementById("buttonTheme");var theme=html.getAttribute("data-theme");function setMenu(e){var t=e.getAttribute("menu");localStorage.setItem("menu",t),changeMenu()}"light"==theme?buttonTheme.innerHTML='<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M482.308-154q-136.334 0-231.167-94.833Q156.307-343.667 156.307-480q0-124.539 80.731-215.77Q317.769-787 437.693-803.154q-2.693 0-2.77.115-.076.116 5.924-.423-18.308 34.693-22.924 69.385-4.615 34.692-4.615 62.077 0 104.667 74.667 182.833Q562.641-411 675.308-411q35.615 0 67.192-5.885 31.577-5.885 62.5-19.731-.538 3.769-.423 4.962.116 1.192.116-3.731-15.385 119.923-106.616 200.654T482.308-154Z"/></svg>':"dark"==theme&&(buttonTheme.innerHTML='<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M479.509-799q-19.141 0-32.325-12.625Q434-824.25 434-845v-51q0-18.775 13.36-31.888Q460.719-941 479.86-941q20.14 0 32.64 13.112Q525-914.775 525-896v51q0 20.75-12.675 33.375Q499.649-799 479.509-799Zm0 780q-19.141 0-32.325-13.125Q434-45.25 434-65v-51q0-19.775 13.36-32.387Q460.719-161 479.86-161q20.14 0 32.64 12.613Q525-135.775 525-116v51q0 19.75-12.675 32.875Q499.649-19 479.509-19ZM845-434q-20.75 0-33.375-13.36Q799-460.719 799-479.86q0-20.14 12.625-32.64T845-525h51q18.775 0 31.888 12.675Q941-499.649 941-479.509q0 19.141-13.112 32.325Q914.775-434 896-434h-51Zm-780 0q-19.75 0-32.875-13.36Q19-460.719 19-479.86 19-500 32.125-512.5T65-525h51q19.775 0 32.387 12.675Q161-499.649 161-479.509q0 19.141-12.613 32.325Q135.775-434 116-434H65Zm648-279q-13-13.5-14-32.75T712-778l24-24q12-14 31.5-13.5t34.5 13q12 13.63 12 32.978T802-738l-25 26q-14 14-33.091 13.5T713-713ZM159.5-159Q147-173 147-192.348T160-224l24-24q12.818-14 32.409-13.5T249-248q13 13 13 31.856 0 18.855-13 33.144l-24 25q-14 14-33.196 13.5-19.195-.5-32.304-14.5Zm577.5 0-25-24q-14-13.818-14-32.909T713.105-249q12.263-13.167 31.579-12.583Q764-261 777-249l24 25q14 13 13.5 32.696Q814-171.609 802-159q-14.304 13-33.652 13T737-159ZM184-713l-25-24q-14-12-13.5-31.5t14.638-34.5q14.138-12 32.935-12 18.797 0 31.927 12l24 25q14 14 14 33.091T250-712q-12.75 13-32.808 12.5Q197.133-700 184-713Zm295.647 455Q387-258 322.5-322.853q-64.5-64.853-64.5-157.5T322.853-637.5q64.853-64.5 157.5-64.5T637.5-637.147q64.5 64.853 64.5 157.5T637.147-322.5q-64.853 64.5-157.5 64.5Z"/></svg>'),buttonTheme.addEventListener("click",(()=>{var e=html.getAttribute("data-theme");"light"==e?(e="dark",setTheme(e),buttonTheme.innerHTML='<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M479.509-799q-19.141 0-32.325-12.625Q434-824.25 434-845v-51q0-18.775 13.36-31.888Q460.719-941 479.86-941q20.14 0 32.64 13.112Q525-914.775 525-896v51q0 20.75-12.675 33.375Q499.649-799 479.509-799Zm0 780q-19.141 0-32.325-13.125Q434-45.25 434-65v-51q0-19.775 13.36-32.387Q460.719-161 479.86-161q20.14 0 32.64 12.613Q525-135.775 525-116v51q0 19.75-12.675 32.875Q499.649-19 479.509-19ZM845-434q-20.75 0-33.375-13.36Q799-460.719 799-479.86q0-20.14 12.625-32.64T845-525h51q18.775 0 31.888 12.675Q941-499.649 941-479.509q0 19.141-13.112 32.325Q914.775-434 896-434h-51Zm-780 0q-19.75 0-32.875-13.36Q19-460.719 19-479.86 19-500 32.125-512.5T65-525h51q19.775 0 32.387 12.675Q161-499.649 161-479.509q0 19.141-12.613 32.325Q135.775-434 116-434H65Zm648-279q-13-13.5-14-32.75T712-778l24-24q12-14 31.5-13.5t34.5 13q12 13.63 12 32.978T802-738l-25 26q-14 14-33.091 13.5T713-713ZM159.5-159Q147-173 147-192.348T160-224l24-24q12.818-14 32.409-13.5T249-248q13 13 13 31.856 0 18.855-13 33.144l-24 25q-14 14-33.196 13.5-19.195-.5-32.304-14.5Zm577.5 0-25-24q-14-13.818-14-32.909T713.105-249q12.263-13.167 31.579-12.583Q764-261 777-249l24 25q14 13 13.5 32.696Q814-171.609 802-159q-14.304 13-33.652 13T737-159ZM184-713l-25-24q-14-12-13.5-31.5t14.638-34.5q14.138-12 32.935-12 18.797 0 31.927 12l24 25q14 14 14 33.091T250-712q-12.75 13-32.808 12.5Q197.133-700 184-713Zm295.647 455Q387-258 322.5-322.853q-64.5-64.853-64.5-157.5T322.853-637.5q64.853-64.5 157.5-64.5T637.5-637.147q64.5 64.853 64.5 157.5T637.147-322.5q-64.853 64.5-157.5 64.5Z"/></svg>'):"dark"==e&&(e="light",setTheme(e),buttonTheme.innerHTML='<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M482.308-154q-136.334 0-231.167-94.833Q156.307-343.667 156.307-480q0-124.539 80.731-215.77Q317.769-787 437.693-803.154q-2.693 0-2.77.115-.076.116 5.924-.423-18.308 34.693-22.924 69.385-4.615 34.692-4.615 62.077 0 104.667 74.667 182.833Q562.641-411 675.308-411q35.615 0 67.192-5.885 31.577-5.885 62.5-19.731-.538 3.769-.423 4.962.116 1.192.116-3.731-15.385 119.923-106.616 200.654T482.308-154Z"/></svg>')})),changeMenu();const buttonHamMenu=document.getElementById("buttonHamMenu"),smallMenu=document.getElementById("smallMenu");buttonHamMenu.addEventListener("click",(()=>{smallMenu.classList.contains("hidden")?(smallMenu.classList.remove("hidden"),smallMenu.classList.add("visible")):(smallMenu.classList.add("hidden"),smallMenu.classList.remove("visible"))}));