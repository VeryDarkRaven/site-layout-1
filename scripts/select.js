//Выпадающий список
let select = document.querySelector(".portfolio_select");
let arrow = document.querySelector(".arrow");

select.onclick = () => arrow.classList.toggle("arrow_rotate");

function checkMouseSelect () {
    select.onmouseover = () => arrow.classList.add("select_moved_cursor");
    select.onmouseout = () => arrow.classList.remove("select_moved_cursor");
};

checkMouseSelect();