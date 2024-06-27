const newsData = [  {
        id: 1,
        title: "Golpe do Empréstimo Consignado: saiba como se proteger",
        image: "./img/golpe_consignado.png",
        content: "O Crédito consignado tem servido como isca para criminosos atraírem funcionários públicos, aposentados e pensionistas do INSS. Saiba como identificar esse tipo de golpe e se proteger das ameaças.",
        category: "Segurança",
        published_date: "2024-05-19"
    },
];

function generateNewsFeed() {
    newsData.forEach(newsItem => {
        const newsItemElement = document.createElement('div');
        newsItemElement.classList.add('news-item');

        newsItemElement.innerHTML = `
            <h2>${newsItem.title}</h2>
            <img src="${newsItem.image}" alt="${newsItem.title}">
            <p>${newsItem.content}</p>

            <div class="social-buttons">
                <a href="#" class="social-button" data-share-url="${facebookShareURL}">
                    <img src="./img/facebook-icon.png" alt="Compartilhar no Facebook">
                </a>
                <a href="#" class="social-button" data-share-url="${instagramShareURL}">
                    <img src="./img/instagram-icon.png" alt="Compartilhar no Instagram">
                </a>
                <a href="#" class="social-button" data-share-url="${whatsappShareURL}">
                    <img src="./img/whatsapp-icon.png" alt="Compartilhar no WhatsApp">
                </a>
            </div>
        `;
        newsFeed.appendChild(newsItemElement);
    });
}
generateNewsFeed();
