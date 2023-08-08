const quizData = [
    {
      question: "What is bioluminescence?",
      options: ["The production of light by living organisms", "The production of electricity by living organisms", "The ability of living organisms to glow in the dark", "The ability of living organisms to emit heat"],
      answer: 1
    },
    {
      question: "Which of the following is an example of a bioluminescent organism?",
      options: ["Firefly", "Lion", "Rose", "Octopus"],
      answer: 1
    },
    {
      question: "What purpose does bioluminescence serve in marine organisms?",
      options: ["Attracting mates", "Scaring predators", "Camouflage", "All of the above"],
      answer: 4
    },
    {
      question: "How do bioluminescent organisms produce light?",
      options: ["Magic", "A chemical reaction", "Electricity", "Symbiosis"],
      answer: 2
    }
  ];

  //Above is an array containing 3 objects each: the question, the options and the answer.
  
  let currentQuestion = 0; //for the function load questions this tells which question we are on by index.
  let score = 0; //initialises scoring system
  
  const questionElement = document.getElementById("question");
  const optionsElements = document.getElementById("options");
  const resultElement = document.getElementById("result");
  
  function loadQuestion() {
    const quizQuestion = quizData[currentQuestion]; //defines the current quiz question as an index from the array.
  
    questionElement.textContent = quizQuestion.question; //this goes back to the html and adds the text content of the webpage as the object 'question' from the current question worked out from currentQuestion index.
    optionsElements.innerHTML = ""; //clears the part of the webpage with the options so that the new ones can be loaded in in the next lines.
  
    quizQuestion.options.forEach(function(option, index) { //loops over each option from the object 'options'.
      const li = document.createElement("li"); // creates a new list item
      li.innerHTML = `<input type="radio" name="answer" value="${index + 1}">${option}`;//
      optionsElements.appendChild(li); //
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked'); // this selects the option which has been selected by the user
    
    if (!selectedOption) { // this ensures something has been selected.
      return;
    }
  
    const selectedAnswer = Number(selectedOption.value);  //retrievs the value of the selected radio button and makes it a number.
  
    if (selectedAnswer === quizData[currentQuestion].answer) { //this compares the previously defined answer to the one selected by the user.
      score++; //shorthand for score = score + 1. 
      document.getElementById("quiz-container").style.borderColor = "green";
    } else {
      document.getElementById("quiz-container").style.borderColor = "red";
    }
  }

  function next(){
    currentQuestion++; //increments current question by 1 to move to the next question.
  
    if (currentQuestion < quizData.length) { //checks that the currentQuestion isn't after the last question.
      loadQuestion(); //if it is the last question or a previous one, its loaded as normal.
      document.getElementById("quiz-container").style.borderColor = "black";
    } else {
      showResult(); // if there arent any questions left, it calls this funtion to show the score.
    }
  }
  
  function showResult() { //shown at end of quiz.
    questionElement.style.display = "none"; //hides "question" element.
    optionsElements.style.display = "none"; //hides "options" element.
    document.getElementById("submit-btn").style.display = "none"; // hides submit button.
  
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`; //goes into the html and sets the text content of "result" to the users score.
    resultElement.style.display = "block"; //ensures that the result is displayed.
  }
  
  loadQuestion(); // calls function loadQuestion() which insures the web page opens with the question, options and submit button visible.
  