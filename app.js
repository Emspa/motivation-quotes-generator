
async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    const quoteList = await response.json();

    const size = quoteList.length;

    while (true) {
        const randomIndex = randomIntFromInterval(0, size - 1);

        const quote = { text: quoteList[randomIndex].text, number: randomIndex + 1 };

        if (quote.text.length < 70) {
            const quoteContainer = document.querySelector('.motivation-quote');
            const quoteNumber = document.querySelector('.quote-number');
            quoteNumber.textContent = 'ADVICE #' + quote.number;
            quoteContainer.textContent = '"' + quote.text + '"';
            break;
        }
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const quoteButton = document.querySelector('.quotes-btn');
quoteButton.addEventListener('click', getQuote);


getQuote();
