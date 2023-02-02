class CardComponent{
    constructor(individualData){
        this.individualData = individualData;
    }
    render(){
        //Creating the component
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardImageDiv = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardTitle = document.createElement('h3');
        const cardContentDiv = document.createElement('div');
        const cardContent = document.createElement('p');
        const cardLink = document.createElement('a');

        //Assiging the classes and ID's
        card.classList.add("card");
        cardHeader.classList.add("card-header");
        cardImageDiv.classList.add("card-img");
        cardContentDiv.classList.add("card-content");
        cardLink.classList.add("card-link");

        // appendchild 

        card.appendChild(cardHeader);
        card.appendChild(cardImageDiv);
        cardImageDiv.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardContentDiv);
        cardContentDiv.appendChild(cardContent);
        card.appendChild(cardLink);
        
        return card;

    }
}