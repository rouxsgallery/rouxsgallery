const root=document.querySelector(":root"),verticalCarousel=document.getElementById("vertical-carousel");class RouxsApp{constructor(){}goToRandomCollection(){window.location.replace("?.html")}}const rouxsApp=new RouxsApp,categoryLinks=document.querySelectorAll(".filters-menu-inner li");function disableFiltersMenu(){openFiltersMenu.checked=!1,openFiltersMenu.disabled=!0,root.style.setProperty("--filters-menu-icon-color","#cccccc48")}function enableFiltersMenu(){openFiltersMenu.disabled=!1,root.style.setProperty("--filters-menu-icon-color","#000")}categoryLinks.forEach((e=>{e.addEventListener("click",(function(e){this.classList.contains("filters-menu-categories-title")||this.classList.contains("filters-menu-categories-rouxs-title")||(e.preventDefault(),categoryLinks.forEach((e=>{e.classList.remove("active")})),this.classList.add("active"))}))}));const openMenu=document.getElementById("open-menu"),openFiltersMenu=document.getElementById("open-filters-menu");openMenu.addEventListener("change",(()=>{verticalCarousel&&(openMenu.checked?disableFiltersMenu():enableFiltersMenu())}));const page=document.getElementsByClassName("page")[0];page.addEventListener("click",(e=>{openMenu.checked&&!openMenu.disabled&&(openMenu.checked=!1,verticalCarousel&&enableFiltersMenu()),openFiltersMenu.checked&&!openFiltersMenu.disabled&&(openFiltersMenu.checked=!1)})),verticalCarousel||disableFiltersMenu(),window.addEventListener("mousedown",(e=>{1===e.button&&e.preventDefault()}));