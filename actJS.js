const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

// First Question
ul_1.addEventListener("click", function(){
    q1.style.display = "none";
    q2.style.display = "block";
});

// Second Question
ul_2.addEventListener("click", function() {
    q2.style.display = "none";
    q3.style.display = "block";
});

// Third Question
ul_3.addEventListener("click", function() {
    q3.style.display = "none";
    q4.style.display = "block";
});

// Fourth Question
ul_4.addEventListener("click", function(e) {
    if(e.innerText == "Enter"){
        q4.style.display = "none";
        q5.style.display = "block";
    }
    
});

 // Fifth Question
 ul_5.addEventListener("submit", function(){
    q5.style.display = "none";
    /*survey.style.display = "none";*/
    end.style.display = "block";
});
