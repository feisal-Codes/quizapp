const quizData=[
    {
      question:"what is 3*5?",
      a1:15,
      a2:25,
      a3:10,
      a4:5,
      correct:"a1"

    },
    {
        question:"what is 2 raised to 5?",
        a1:32,
        a2:64,
        a3:4,
        a4:84,
        correct:"a2"
  
    },
    
    {
        question:"what is the first prime number?",
        a1:2,
        a2:1,
        a3:3,
        a4:5,
        correct:"a1"

        
        
  
    },
    {

        question:"evaluate 2(3*2)-2 of 6/2?",
        a1:2,
        a2:7,
        a3:8,
        a4:"none of the above",
        correct:"a4"

  
    }
];

const radanswer=document.querySelectorAll(".radios");
const paren=document.querySelector(".flex");
const question1=document.querySelector(".question");
const a1=document.querySelector(".a1");
const a2=document.querySelector(".a2");
const a3=document.querySelector(".a3");
const a4=document.querySelector(".a4");
const btn=document.querySelector(".btn");

let iter=0;
let score=0;

function getselected(){
    let answer=undefined;

    radanswer.forEach((radanswer)=>{
      if (radanswer.checked){
          answer=radanswer.id;
      }
    }
    );
    return answer;
}

function deselect(){

    radanswer.forEach((radanswer)=>{
        if (radanswer){
            radanswer.checked=false;
        }
      });

    }




function loadData(){
  deselect();
  const cur_quest=quizData[iter];

  

    question1.innerText=cur_quest.question;
    a1.innerText=cur_quest.a1;
    a2.innerText=cur_quest.a2;
    a3.innerText=cur_quest.a3;
    a4.innerText=cur_quest.a4;
    console.log(cur_quest);

  };


loadData();


btn.addEventListener('click',()=>{
    const answer=getselected();
    if(answer){
        if (answer===quizData[iter].correct){
            score++
        }
        iter++;
   
        if(iter< quizData.length){
            loadData();
        }
        else{
            paren.style.padding="3em";
            paren.innerHTML=`<h2 >Score is: ${score} / ${quizData.length}</h2>
            <button onClick="location.reload()"> Reload Quiz</button>`;
            
        }
       
    }

   
      

});

    

