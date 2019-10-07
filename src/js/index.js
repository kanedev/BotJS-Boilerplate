// Import du paquet "puppeteer"
//const mypage =  require ('./modules/screenshot');
const books =  require ('./modules/scrapeBooks');

// Appel de la fonction screenshot
//mypage.screenshot();

//Appel de la fonction scrapeBooks
let data = books.scrapeBooks();
data.then(value => {
    console.log(value)
  })
