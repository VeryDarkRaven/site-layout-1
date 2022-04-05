let listItems = document.querySelector(".services_list");
let items = listItems.getElementsByTagName("p");

let blocks = document.getElementsByClassName("services_text_container");
let oneBlock = document.querySelector(".services_text_container");
oneBlock.style.display = "block";

//Счетчик пунктов списка
function anotherItemsCounter(itemId) {
    for(let item of items) {
        if(item.id < itemId || item.id > itemId) {
            item.classList.remove("services_list_header");
        };
    };
};

//Список сервиса
function servicesListClick() {
    for(let item of items) {
        item.onclick = () => {
            item.classList.add("services_list_header");
            anotherItemsCounter(item.id);
            servicesBlocks(item.id);
        };
    };
};

servicesListClick();

//Блоки сервиса
function servicesBlocks(itemId) {
    for(let block of blocks) {
        switch (itemId) {
            case "1":
                if (block.id !== "web design") {
                    block.style.display = "none";
                } else {
                    block.style.display = "block";
                };
                break;

            case "2":
                if (block.id !== "logo design") {
                    block.style.display = "none";
                } else {
                    block.style.display = "block";
                };
                break;
                
            case "3":
                if (block.id !== "") {
                    block.style.display = "none";
                } else {
                    block.style.display = "block";
                };
                break;

            case "4":
                if (block.id !== "ul") {
                    block.style.display = "none";
                } else {
                    block.style.display = "block";
                };
                break;

            case "5":
                if (block.id !== "photography") {
                    block.style.display = "none";
                } else {
                    block.style.display = "block";
                };
                break;

            case "6":                    
                if (block.id !== "6") {
                    block.style.display = "none";
                } else {
                    block.style.display = "block";
                };
                break;
        }
    }
}