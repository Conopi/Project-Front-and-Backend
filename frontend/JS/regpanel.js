document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    // Преобразуем FormData в JSON объект
    var jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    fetch('http://localhost:9000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(jsonData) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Server response:', data);
      window.location.href = 'index.html'; 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
