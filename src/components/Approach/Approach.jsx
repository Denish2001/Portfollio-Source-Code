import React from 'react';
import './Approach.css'; // Import the CSS file

const Approach = () => {
  return (
    <div className="approach-container">
      <h1 className='primaryText'>How We Serve Our Clients: A 5-Step Approach</h1>

      {/* Step 1 */}
      <div className="step-card a">
        <div className="step-icon">1</div>
        <div className="step-content">
          <h2>Understand the Client’s Needs</h2>
          <p>
            We listen first. Every legal challenge is unique, and so is every client. Through thoughtful conversations and clear, jargon-free communication, we identify what truly matters—whether it's protecting their business, resolving a dispute, or securing their future.
          </p>
          <div className="how-we-do-it">
            <h3>🔹 How we do it:</h3>
            <ul>
              <li>We ask the right questions to clarify goals and concerns.</li>
              <li>We explain legal options in plain, human language.</li>
              <li>We ensure clients feel heard, understood, and valued.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step-card b">
        <div className="step-icon">2</div>
        <div className="step-content">
          <h2>Break Down the Legal Issue</h2>
          <p>
            Law can be complex. Our job is to simplify without losing accuracy. We take apart the issue, analyzing risks, opportunities, and legal pathways—making it easy for clients to grasp what’s at stake.
          </p>
          <div className="how-we-do-it">
            <h3>🔹 How we do it:</h3>
            <ul>
              <li>We use structured thinking to break problems into clear, actionable parts.</li>
              <li>We filter out the noise and focus on what’s essential.</li>
              <li>We guide clients with a step-by-step roadmap of the legal process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step-card a">
        <div className="step-icon">3</div>
        <div className="step-content">
          <h2>Prioritize Strategy & Approach</h2>
          <p>
            Not every case needs an aggressive fight. Some need negotiation, others need litigation, and some need creative legal structuring. We weigh the options and choose the smartest, most effective approach—always with the client’s best interest in mind.
          </p>
          <div className="how-we-do-it">
            <h3>🔹 How we do it:</h3>
            <ul>
              <li>We explain trade-offs in simple, honest terms.</li>
              <li>We tailor solutions based on urgency, cost, and impact.</li>
              <li>We keep clients involved—no surprises, just strategy.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="step-card b">
        <div className="step-icon">4</div>
        <div className="step-content">
          <h2>Take Action & Advocate Relentlessly</h2>
          <p>
            Once the course is set, we execute with precision and persistence. Whether drafting airtight contracts, negotiating settlements, or representing in court, we deliver with clarity, confidence, and competence.
          </p>
          <div className="how-we-do-it">
            <h3>🔹 How we do it:</h3>
            <ul>
              <li>We draft documents that are clear, strong, and enforceable.</li>
              <li>We anticipate challenges and stay two steps ahead.</li>
              <li>We handle legal complexities so clients can focus on their lives.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 5 */}
      <div className="step-card">
        <div className="step-icon">5</div>
        <div className="step-content">
          <h2>Deliver Results & Build Lasting Trust</h2>
          <p>
            Success isn’t just winning a case—it’s peace of mind. We close every engagement with clear next steps, insights for the future, and a commitment to being there whenever our clients need us again.
          </p>
          <div className="how-we-do-it">
            <h3>🔹 How we do it:</h3>
            <ul>
              <li>We translate outcomes into real-world impact.</li>
              <li>We provide transparent, forward-thinking advice.</li>
              <li>We aim for long-term relationships—not just one-time wins.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;