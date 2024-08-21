const quizData = [
    {
      question: "Who is The Prime Minister of India?",
      options: ["Rahul Gandhi", "Narendra Modi", "Arvind Kejriwal", "Draupadi Murmur"],
      correct: 1
    },
    {
      question: "Where is KRMU located?",
      options: ["Chennai", "Gandhinagar", "Gurgaon", "Delhi"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "Which Medal was won by Neeraj Chopra in Paris Olympics 2024?",
      options: ["Silver", "Gold", "Bronze", "None"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('option1').innerText = currentQuestion.options[0];
    document.getElementById('option2').innerText = currentQuestion.options[1];
    document.getElementById('option3').innerText = currentQuestion.options[2];
    document.getElementById('option4').innerText = currentQuestion.options[3];
  }
  
  function selectOption(optionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (optionIndex === currentQuestion.correct) {
      score++;
    }
    document.getElementById('next-btn').style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
    document.getElementById('next-btn').style.display = "none";
  }
  
  function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = score + "/" + quizData.length;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuestion();
  }
  
  loadQuestion();  