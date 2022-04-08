//Меню на начальной странице
const menuIcon = document.querySelector(".title_page_menu");
const menu = document.querySelector(".menu_nav_container");

function checkMouseMenu() {
    if (menuIcon.alt === "menu icon") {
        menuIcon.onmouseover = () => menuIcon.src = "image/list hover.png";
        menuIcon.onmouseout = () => menuIcon.src = "image/list.png";
    } else {
        menuIcon.onmouseover = () => menuIcon.src = "image/cross-out hover.png";
        menuIcon.onmouseout = () => menuIcon.src = "image/cross-out.png";
    };
};

checkMouseMenu();

function menuClick() {
    menuIcon.onclick = function() {
        if (menuIcon.alt === "menu icon") {
            menuIcon.src = "image/cross-out hover.png";
            menuIcon.alt = "cross_out";
            menuIcon.style.padding = "10px 10px";
            checkMouseMenu();
            menuWindow();
        } else {
            menuIcon.src = "image/list hover.png";
            menuIcon.alt = "menu icon";
            menuIcon.style.padding = "15px 10px";
            checkMouseMenu();
            menuWindow();
        };
    };

    if (menu.style.display === "none") {
        menuIcon.src = "image/list.png";
        menuIcon.alt = "menu icon";
        menuIcon.style.padding = "15px 10px";
        checkMouseMenu();
    }
};

menuClick();

function menuWindow() {

    if (menuIcon.alt === "cross_out") {
        menu.style.display = "block";
        hiddenMenuBlock();
    } else {
        menu.style.display = "none";
    }
}

function hiddenMenuBlock() {
    window.addEventListener("click", e => {
        const target = e.target;

        if (!target.closest(".menu_nav_container") && !target.closest(".sign_in_container") && !target.closest(".title_page_menu")) {
            menu.style.display = "none";
            menuClick();
        }
    })
}

function linksListClick() {
    const list = menu.querySelector(".menu_list");
    const linksList = list.getElementsByTagName("a");

    for (let link of linksList) {
        link.onclick = () => {
            menuIcon.src = "image/list.png";
            menuIcon.alt = "menu icon";
            menuIcon.style.padding = "15px 10px";
            menuWindow();
            checkMouseMenu();
        }
    }
}

linksListClick();



//sign in блок
const menuListTwo = document.querySelector(".menu_list_two");
const signInText = menuListTwo.getElementsByClassName("sign_color")[1];
const signInBlock = document.querySelector(".sign_in_container");

function signInTextClick() {
    signInText.onclick = () => {
        signInBlock.classList.add("sign_in_container_block");
        hiddenSignInBlock();
    }
}

signInTextClick();

function hiddenSignInBlock() {
    window.addEventListener("click", e => {
        const target = e.target;

        if (!target.closest(".sign_in_container") && !target.closest(".sign_color") && !target.closest("#sign in link")) {
            signInBlock.classList.remove("sign_in_container_block");
        }
    })
}




//sign up блок
const signUpText = menuListTwo.getElementsByClassName("sign_color")[0];
const signUpBlock = document.querySelector(".sign_up_container");

function signUpTextClick() {
    signUpText.onclick = () => {
        signUpBlock.classList.add("sign_in_container_block");
        hiddenSignUpBlock();
    }
}

signUpTextClick();

function hiddenSignUpBlock() {
    window.addEventListener("click", e => {
        const target = e.target;

        if (!target.closest(".sign_up_container") && !target.closest(".sign_color")) {
            signUpBlock.classList.remove("sign_in_container_block");
        }
    })
}


