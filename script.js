const card=document.querySelector(".card_content");
const text_q=document.querySelector(".text_q");
const text_r=document.querySelector(".text_r");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const index_text = document.querySelector(".num_question")
let index =0;

card.addEventListener("click",function(){
    card.classList.toggle("rotation");
});

next.addEventListener("click",function(){
  index++;
  if ( index >= questions.length)
       index = 0;
  switchcards();
});

prev.addEventListener("click",function(){
  index--;
  if ( index < 0)
       index = questions.length - 1;  
 switchcards(); 
});

function switchcards(){
  const question = questions[index];
  if (card.classList.contains("rotation"))
    card.classList.toggle("rotation");
    text_q.innerHTML = question.q;
    index_text.innerHTML ="السؤال " + (index + 1);
 setTimeout(() => {
   text_r.innerHTML = question.r;
 }, 1000);
}
  


