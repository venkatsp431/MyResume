// const formEndpoint = "http://localhost:8000/api/contact";

// document
//   .querySelector("form.php-email-form")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);

//     try {
//       const response = await fetch(formEndpoint, {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit the form.");
//       }

//       const data = await response.json();
//       // Handle the response data as needed
//       console.log(data);

//       // Show success message
//       alert("Message successfully Sent");
//     } catch (error) {
//       console.error("Error:", error.message);
//       // Show error message
//       alert("Failed to submit the form. Please try again.");
//     }
//   });
