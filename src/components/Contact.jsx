function Contact() {
  return (
    <div className="container mt-2 pt-5 pb-5" >
      <h2 className="text-center mb-4">Contact Us <i class="ri-phone-fill text-danger fs-1 mt-2"></i></h2>

      <div className="text-center">
        <p><strong>Email:</strong> support@moonlightevents.com</p>
        <p><strong>Phone:</strong> +234 123 456 7890</p>
        <p><strong>Address:</strong> Lagos, Nigeria</p>
      </div>

      <div className="mt-4">
        <h5 className="text-center mb-3">Send Feedback</h5>

        <form className="w-50 mx-auto">
          <input className="form-control mb-3" type="text" placeholder="Your Name" />
          <input className="form-control mb-3" type="email" placeholder="Your Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
          <button className="btn btn-danger w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


/*
📞

💡 Important detail

Remix Icons behave like text, not images.

👉 So you style them using:

color
font-size
🎨 Example (better UI)
<i 
  className="ri-moon-fill" 
  style={{ color: "#6C5CE7", fontSize: "24px" }}
></i>
*/