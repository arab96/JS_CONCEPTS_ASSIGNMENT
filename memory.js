let words = JSON.parse(localStorage.getItem('memorizedWords')) || [];

let startIndex = 0;
let count = 5;

function displayWords () {

    let wordsList = document.querySelector("#results");

    const batch = words.slice(startIndex, startIndex + count);
    startIndex += count;

     words.forEach(word => {
        const wordData = `
        <h1>${word.word}</h1>
        <p><strong>Definition:</strong> ${word.definition}</p>
        <p><strong>Examples: <br> </strong> ${word.examples.join('<br>')}</p>
        <p><strong>Synonyms: <br> </strong> ${word.synonyms.join('<br>')}</p>
        <p><strong>Antonyms: <br> </strong> ${word.antonyms.join('<br>')}</p>
        `
        wordsList.innerHTML += wordData;
     });
}
displayWords();

window.addEventListener("scroll", () =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        displayWords();

    }
})