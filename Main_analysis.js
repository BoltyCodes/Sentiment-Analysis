function preload() {
  afinn=loadJSON("afinn-111.json");
}


function setup(){
  noCanvas();
  console.log(afinn);
  
  let txt=select("#txt");
  txt.input(typing);
  
  function typing(){
    let textinput=txt.value();
    let words = textinput.split(/\W/);
console.log(words);
    let scorewords=[];
    let totalscore=0
    
    for(let i=0; i<words.length; i++){
      let word= words[i].toLowerCase();
      if (afinn.hasOwnProperty(word))
      {
        let score=afinn[word];
        console.log(word,score);
        totalscore+=Number(score);
        scorewords.push(word + " : " + score + " ");  
      }
    }
    let scorePar=select("#scoreP");
    scorePar.html("score : "+ totalscore);
    let com=select("#comparativeP");
    let y=totalscore/words.length
    com.html("comparative score : "+ y);
    let wordlist=select("#wordlistP");
    wordlist.html(scorewords);
    let x=select("#state");
    
    
  }

  
}

function draw() {
  
  
}
