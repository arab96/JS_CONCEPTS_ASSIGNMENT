const searchWord = document.querySelector("input");
const select = document.querySelector("select");
const result = document.querySelector(".result");

const  getWordInfo =  async ()  => {
    const response =  await fetch("words.json");
    const data = await response.json();


    select.addEventListener("change", (event) =>{
        const option = event.target.value;
        const word = searchWord.value;

        const sword=word.toLowerCase();

        const returnWord = data.find((jsonData)=> jsonData.word === sword)
        // console.log(returnWord);
        if(sword === ""){
            alert("Search a word?")

        }
        if(returnWord){
            if(option === "definition"){
                result.innerHTML = `
                <h2><strong>Word: </strong>${returnWord.word}</h2>
                <p> <strong>Definition: </strong> <br/> ${returnWord.definition}</p>
               `;
    
            }else if(option === "examples"){
                const example = returnWord.examples.join("<br>");
                result.innerHTML = `
                <h2><strong>Word: </strong>${returnWord.word}</h2>
                <p><strong>Examples:<br/> </strong> ${example}</p>
               `;
            }else if(option === "synonyms"){
                result.innerHTML = `
                <h2><strong>Word: </strong>${returnWord.word}</h2>
                <p><strong>Synonyms: </strong> <br/> ${returnWord.synonyms}</p>
              `;
            }
            else if(option === "antonyms"){
                result.innerHTML = `
                <h2><strong>Word: </strong>${returnWord.word}</h2>
                <p><strong>Antonyms: </strong> <br/> ${returnWord.antonyms}</p>
            `;
            } else if(option === "all"){
                const example = returnWord.examples.join("<br>");
                result.innerHTML = `
                <h2><strong>Word: </strong>${returnWord.word}</h2>
                <p> <strong>Definition: </strong> ${returnWord.definition}</p>
                <p><strong>Examples: </strong> ${example}</p>
                <p><strong>Synonyms: </strong> ${returnWord.synonyms}</p>
                <p><strong>Antonyms: </strong> ${returnWord.antonyms}</p>
                
                `;
            }


        }else{
            alert("word not found");
        }



    })
  

}
getWordInfo();

