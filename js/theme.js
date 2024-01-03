function dark() {
    var body = document.body;
    var nav = document.querySelector(".navbar");
    var heroHeader = document.querySelector(".hero-header");
    var footer = document.querySelector(".footer");
    
    // var stickyTop = document.querySelector("navbar");
    body.classList.toggle("dark");
    nav.classList.toggle("dark");
    heroHeader.classList.toggle("dark");
    footer.classList.toggle("dark");
    // btnMode.classList.toggle("fa fa-sun");
    // stickyTop.classList.toggle("dark");
    var btnPrimaryGradient = document.querySelectorAll(".btn-primary-gradient");
    var btnSecondaryGradient = document.querySelectorAll(".btn-secondary-gradient");
    var bgPrimaryGradient = document.querySelectorAll(".bg-primary-gradient");
    var bgSecondaryGradient = document.querySelectorAll(".bg-secondary-gradient");
    btnPrimaryGradient.forEach((item) => {
        item.classList.toggle("dark");
    });
    btnSecondaryGradient.forEach((item) => {
        item.classList.toggle("dark");
    });
    bgPrimaryGradient.forEach((item) => {
        item.classList.toggle("dark");
    });
    bgSecondaryGradient.forEach((item) => {
        item.classList.toggle("dark");
    });
    changeModeIcon();
    changeLogo();
    changeNavLink();
}

function changeModeIcon() {
    var btnMode = document.querySelector("#mode");
    var btnModeClass = btnMode.className;
    if(btnModeClass.indexOf('moon') != -1){
        btnMode.classList.remove('fa-moon');
        btnMode.classList.add('fa-sun');
        // logo.src = "./img/logo2.svg";
    } else{
        btnMode.classList.add('fa-moon');
        btnMode.classList.remove('fa-sun');

        // logo.src = "./img/dark/512-01.png";
    }
}

function changeLogo() {
    var logo = document.getElementById("logo");
    var logoSrc = logo.src;
    if(logoSrc.indexOf('512-01.png') != -1){
        
        logo.src = "./img/logo2.svg";
    } else{

        logo.src = "./img/dark/512-01.png";
    }
}

function changeNavLink() {
    const navbarNav = document.querySelector('.navbar-nav').children;
    for (let i = 0; i < navbarNav.length; i++) {
        navbarNav[i].classList.toggle("dark");
    }
    // navChilds.forEach((item) => {
    //     item.classList.toggle("dark");
    // });
}