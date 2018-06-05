let content;
(function(content){

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    content.HomeContent = HomeContent;

})(content || (content = {}));