const questions = [...document.querySelectorAll(".question")];
let i = 0;
let activeQuestion = questions[i];

questions.forEach(function(question){
question.addEventListener("click", function(event){
    question.classList.toggle("active");
    });
});


const keyChange = (event) => { 
    if(event.key == "ArrowDown"){ 
        activeQuestion.classList.remove("border"); 
        activeQuestion = questions[i];
           activeQuestion.classList.add("border");
        i++; 
        if(i == questions.length){
             i = 0;  
        }
    }
    else if(event.key == "ArrowUp"){ 
        activeQuestion.classList.remove("border"); 
        activeQuestion = questions[i];
        activeQuestion.classList.add("border");
        i--; 
        if(i == -1){
            i = questions.length-1;
        }
    }
    else if(event.key == "Enter"){
        activeQuestion.classList.toggle("active");}}

window.addEventListener("keydown", keyChange);