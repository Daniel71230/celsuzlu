$(document).ready(function() {
    let darkMode = localStorage.getItem("darkMode");

    const themeChange = document.getElementById("theme-change");
    const carImg = document.getElementsByClassName("carousel_image_text");
    const boxMain = document.getElementsByClassName("box_main");
    const moreBtn = document.getElementById("more-btn");
    const prevCont = document.getElementsByClassName("carousel-control-prev")[0];
    const nextCont = document.getElementsByClassName("carousel-control-next")[0];
    
    const enableDarkMode = () => {
        document.body.classList.add("darkMode");
        if (carImg){
            Array.from(carImg).forEach(el => {
                el.classList.add("carousel_image_text_dark");
            });
        }
        if (boxMain){
            Array.from(boxMain).forEach(el => {
                el.classList.add("box_main_dark");
            });
        }
        if(moreBtn){
            moreBtn.classList.add("more_bt_dark");
        }
        if( prevCont && nextCont){
            prevCont.classList.add("control-dark");
        nextCont.classList.add("control-dark");
        }
        
        themeChange.src = "graphics/sun_dark.svg";
        localStorage.setItem("darkMode", "enabled");
    };
    
    const disableDarkMode = () => {
        document.body.classList.remove("darkMode");
        if (carImg){
            Array.from(carImg).forEach(el => {
                el.classList.remove("carousel_image_text_dark");
            });
        }
        if (boxMain){
            Array.from(boxMain).forEach(el => {
                el.classList.remove("box_main_dark");
            });
        }
        if(moreBtn){
            moreBtn.classList.remove("more_bt_dark");
        }
        if( prevCont && nextCont){
            prevCont.classList.remove("control-dark");
        nextCont.classList.remove("control-dark");
        }
        themeChange.src = "graphics/moon.svg";
        localStorage.removeItem("darkMode");
    };
    
    
    if (darkMode == "enabled"){
        enableDarkMode();
    }
    
    
    themeChange.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled"){
            enableDarkMode();
            console.log("darkMode: "+ darkMode);
        }else{
            disableDarkMode();
            console.log("darkMode: " + darkMode);
        }
    });
}
    
);




