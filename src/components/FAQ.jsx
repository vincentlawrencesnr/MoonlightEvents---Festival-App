import React from "react";

function FAQ() {
  return (
    <div className="container-fluid px-5 mt-0 pt-5" id="faq" style={{ backgroundColor: "#e9e9e3" }}>
      <h2 className="text-center mb-3 pt-4 fw-bold">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-muted mb-5">
        Everything you need to know about Moonlight Events
      </p>

      <div className="accordion container px-5" id="faqAccordion">

        {/* Q1 */}
        <div className="accordion-item shadow-sm mb-3 border rounded">
          <h2 className="accordion-header">
            <button 
              className="accordion-button fw-semibold"
              style={{ backgroundColor: "#e9e9e3" }}
              data-bs-toggle="collapse" 
              data-bs-target="#q1"
            >
              What is Moonlight Events and what does it offer?
            </button>
          </h2>
          <div id="q1" className="accordion-collapse collapse show">
            <div className="accordion-body" style={{ backgroundColor: "hsl(60, 9%, 70%)" }}>
              Moonlight Events is a global platform designed to help users explore cultural festivals 
              from around the world. It provides detailed insights, visuals, and downloadable content 
              to enhance cultural awareness and learning.
            </div>
          </div>
        </div>

        {/* Q2 */}
        <div className="accordion-item shadow-sm mb-3 border rounded">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed fw-semibold"
              style={{ backgroundColor: "#e9e9e3" }}
              data-bs-toggle="collapse" 
              data-bs-target="#q2"
            >
              Can I download festival details for offline use?
            </button>
          </h2>
          <div id="q2" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: "hsl(60, 9%, 70%)" }}>
              Yes. Each festival includes a downloadable PDF that contains its key details such as 
              origin, religion, month, and description. This makes it easy to save or share information.
            </div>
          </div>
        </div>

        {/* Q3 */}
        <div className="accordion-item shadow-sm mb-3 border rounded">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed fw-semibold"
              style={{ backgroundColor: "#e9e9e3" }}
              data-bs-toggle="collapse" 
              data-bs-target="#q3"
            >
              How does the search and filtering system work?
            </button>
          </h2>
          <div id="q3" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: "hsl(60, 9%, 70%)" }}>
              The platform allows users to filter festivals based on religion and month, as well as 
              search by name. Combining filters helps narrow down results for a more personalized experience.
            </div>
          </div>
        </div>

        {/* Q4 */}
        <div className="accordion-item shadow-sm mb-3 border rounded">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed fw-semibold"
              style={{ backgroundColor: "#e9e9e3" }}
              data-bs-toggle="collapse" 
              data-bs-target="#q4"
            >
              Is Moonlight Events mobile-friendly?
            </button>
          </h2>
          <div id="q4" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: "hsl(60, 9%, 70%)" }}>
              Yes. The platform is fully responsive and adapts to different screen sizes, ensuring 
              a smooth experience on mobile, tablet, and desktop devices.
            </div>
          </div>
        </div>

        {/* Q5 */}
        <div className="accordion-item shadow-sm mb-3 border rounded">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed fw-semibold"
              style={{ backgroundColor: "#e9e9e3" }}
              data-bs-toggle="collapse" 
              data-bs-target="#q5"
            >
              Can I contribute or suggest new festivals?
            </button>
          </h2>
          <div id="q5" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: "hsl(60, 9%, 70%)" }}>
              Currently, the platform showcases curated festival data. Future updates may include 
              user contributions, allowing people to share festivals from their own cultures.
            </div>
          </div>
        </div>

        {/* Q6 */}
        <div className="accordion-item shadow-sm mb-3 border rounded">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed fw-semibold"
              style={{ backgroundColor: "#e9e9e3" }}
              data-bs-toggle="collapse" 
              data-bs-target="#q6"
            >
              Is my data or location stored?
            </button>
          </h2>
          <div id="q6" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: "hsl(60, 9%, 70%)" }}>
              No personal data is stored permanently. Location (if used) is only for display purposes 
              and is not saved or shared.
            </div>
          </div>
        </div>

      </div>

      {/*  subtle highlight */}
      <div className="text-center text-muted mt-5 pb-3">
        <p style={{  fontWeight: "600" }}>
          Still have questions? Visit the Contact page.
        </p>
      </div>

    </div>
  );
}

export default FAQ;

// #ffc107

// #c60707

//#f8f9fa   #e9e9e3  #f5f5f2  hsl(60, 9%, 70%)