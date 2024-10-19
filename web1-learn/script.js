const head =  document.getElementById('question')
fetch('quiz.json')
  .then(response => response.json())
  .then(data => {
    const questions = data.questions
    const q = questions[0]
    head.innerHTML = q.question
    console.log(questions.length)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  
