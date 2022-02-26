
const loadKanye = () =>{
    fetch('https://api.kanye.rest/')
      .then(res => res.json())
      .then(data => displayKanye(data))
}

const displayKanye = kanye => {
 /*   console.log(kanye)
   console.log(kanye.quote) */

    const kanyeElement = document.getElementById('kanye');
       kanyeElement.innerText = kanye.quote;
}



