const quiz = document.getElementById("buzzfeed-quiz");
const results = document.getElementById("results");

quiz.addEventListener("submit", function(event) {

    event.preventDefault();

    let scores = {
        "Paris": 0,
        "Bali": 0,
        "LosAngeles": 0,
        "Athens": 0
    };

    // Get the selected answer from each question
    const answers = quiz.querySelectorAll('input[type="radio"]:checked');

    // Add points
    answers.forEach(function(answer) {
        scores[answer.value]++;
    });

    // Find highest score
    let winner = "Paris";
    let highestScore = 0;

    for (let city in scores) {
        if (scores[city] > highestScore) {
            highestScore = scores[city];
            winner = city;
        }
    }

    // Hide quiz
    quiz.style.display = "none";

    // Show results
    results.style.display = "block";

  document.getElementById("instructions").style.display = "none";
  document.getElementById("quiz-title").style.display = "none";
    // Hide all city results
    document.querySelectorAll(".result").forEach(function(result) {
        result.style.display = "none";
    });

    // Show winning city
    const winningResult = document.getElementById(winner);

    if (winningResult) {
        winningResult.style.display = "block";
    }
});