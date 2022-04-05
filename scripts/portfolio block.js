//Блок портфолио
function checkMousePortfolioBlock() {
    let blocks = document.getElementsByClassName("portfolio_block");

    for (let block of blocks) {
        let description = block.querySelector(".portfolio_block_description");
        let hoverBlock = block.querySelector(".portfolio_hover_block");

        block.onmouseover = function() {
            description.classList.add("display_none");
            hoverBlock.style.display = "block";
        };
        block.onmouseout = function() {
            description.classList.remove("display_none");
            hoverBlock.style.display = "none";
        };
    };
};

checkMousePortfolioBlock();