function handlesTheValue (value){
const hundred = [];
const twoHundred = [];
const fourHundred = [];
const sixHundred = [];
const eightHundred = [];
    for (const question of QUESTIONS){
        if (question.value === '$100'){
            hundred.push (question);
        } else if (question.value === '$200'){
            twoHundred.push (question);
        } else if (question.value === '$400'){
            fourHundred.push (question);
        } else if(question.value === '$600'){
            sixHundred.push (question);
        } else if(question.value === '$800'){
            eightHundred.push (question);
        }    
    }
    if (value === '$100'){
        return hundred
    }else if (value === '$200'){
        return twoHundred
    }else if (value === '$400'){
        return fourHundred;
    }else if (value === '$600'){
        return sixHundred;
    }else if (value === '$800'){
        return eightHundred;
    }
}

function returnsARandomQuestion (array){
    return array[array.length * Math.random() | 0];
}


const table = $('td');
for (const singleCell of table){
    $(singleCell).click (function (){
    const arrayOfQuestions = handlesTheValue ($(singleCell).text());
     const grabRandomQuestions = returnsARandomQuestion (arrayOfQuestions);
     console.log (grabRandomQuestions);
     const displayQuestion = document.querySelector ("#question");
     displayQuestion.innerText = grabRandomQuestions.question;
     const inputButton = $('#inputBox');
     const submitButton = $('#submitButton');
     const scoreKeeper = document.querySelector ('#score-keeper');
     submitButton.click (function (){
    const inputValue = inputButton.val();
    const correct = "correct";
    const incorrect = 'incorrect, try again';
     if (inputValue === grabRandomQuestions.answer){
       displayQuestion.innerText = correct;
       scoreKeeper.innerText = "YOUR SCORE:" + grabRandomQuestions.value;
         window.localStorage.setItem (grabRandomQuestions, value);
     }else {
         console.log (incorrect);
         displayQuestion.innerText = incorrect;
     }
     })
})
}
    

