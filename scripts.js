document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector(".card-container");

    // Embaralhar os cartões quando a página é carregada
    shuffleCards(cardsContainer);

    // Função para embaralhar os elementos de um container
    function shuffleCards(container) {
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }
    
    // Restante do seu código aqui...
});


document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll("#tags .btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const tag = this.getAttribute("data-tag");
            filterItems(tag);
        });
    });

    function filterItems(tag) {
        cards.forEach(card => {
            if (card.getAttribute("data-tag") == tag || tag == "all") {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }
});
