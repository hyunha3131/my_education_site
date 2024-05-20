function checkAnswer(answerId, resultId, correctAnswer) {
    const answer = document.getElementById(answerId).value;
    const result = document.getElementById(resultId);
    
    if (answer === correctAnswer) {
        result.textContent = '정답입니다!';
        result.style.color = 'green';
    } else {
        result.textContent = '오답입니다. 다시 시도하세요.';
        result.style.color = 'red';
    }
}
