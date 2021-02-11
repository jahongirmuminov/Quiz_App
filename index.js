const quizDate=[
    {
        question:"How old is Bill Gates",
        a:"40",
        b:"55",
        c: "46",
        d: "56",
        correct:"d"
    },{
        question:"What is the most used programming language in 2019",
        a:"Javascipt",
        b:"C++",
        c: "Python",
        d: "Java",
        correct:"d"
    },
    {
        question:"What is the most used programming language in 2019",
        a:"Javascipt",
        b:"C++",
        c: "Python",
        d: "Java",
        correct:"a"
    },
    {
        question:"Who is prisedent of usa in 2019",
        a:"Obama",
        b:"Trump",
        c: "John",
        d: "Canady",
        correct:"b"
    },
    {
        question:"What year was Javascipt launched",
        a:"1995",
        b:"1991",
        c: "1996",
        d: "none of the above",
        correct:"d" 
    }
] ;
const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answers');
const questionEl=document.getElementById('question')
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");


let currentQuizz=0;
let score =0;


loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizzDate=quizDate[currentQuizz];
     
    questionEl.innerHTML=currentQuizzDate.question;
    a_text.innerHTML=currentQuizzDate.a;
    b_text.innerHTML=currentQuizzDate.b;
    c_text.innerHTML=currentQuizzDate.c;
    d_text.innerHTML=currentQuizzDate.d;
    
}

function getSelected() {
 
    let answer=undefined;
    answerEls.forEach((answersEl)=>{
        if(answersEl.checked){
            answer=answersEl.id
        }
    });

       return answer;
}

function deselectAnswers(){
    answerEls.forEach((answersEl)=>{
        answersEl.checked=false;
    });
}

submitBtn.addEventListener('click',()=>{

    const answer = getSelected()
    if(answer){
         if(answer === quizDate[currentQuizz].correct){
             score++;
         }

        currentQuizz++;

        if(currentQuizz < quizDate.length){
            loadQuiz()
        }
        else{
           quiz.innerHTML=`<h2>You answered correctly to  ${score}/${quizDate.length} 
             <button onclick="location.reload()"> Reloa   d </button>
           </h2>`
           console.log(score);
        }
    }
})