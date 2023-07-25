import React from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send("service_gbemfmb", "template_qlfya7g", templateParams, "yWkby1ecUvsqvjrmt")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          // Optionally, display a success message to the user or perform other actions.
        },
        (error) => {
          console.error("Error sending email:", error);
          // Optionally, display an error message to the user or perform other actions.
        }
      );

    // Optionally, reset the form fields after the email is sent.
    e.target.reset();
  };
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" required placeholder="Abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
