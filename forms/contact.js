const formEndpoint = '/path/to/your/form/endpoint';

document.querySelector('form.php-email-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(formEndpoint, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data as needed
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
