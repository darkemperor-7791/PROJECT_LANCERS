import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar />

      <div className="main-content">
        {/* About Us Section */}
        <section className="about-section">
          <h1 className="main-title">About Us</h1>
          <p className="subtitle">our slogan here</p>
        </section>

        {/* Description */}
        <div className="description-container">
          <p className="description-text">
            For more than two decades, Upwork has been a pioneer of a better way to work. We've enabled businesses and professionals to thrive through major shifts – from migrating to the cloud, capturing the potential of mobile, to creating new value through social media. No matter how needs and skills evolve, our purpose remains the same: to create opportunity in every era of work.
          </p>
          <p className="description-text">
            Today, we stand at a new frontier. AI is transforming what is possible for companies and careers alike. Once again, Upwork is the place where businesses and talent come to meet this moment. Our platform empowers everyone – from Fortune 100 enterprises to ambitious startups – to access the human and AI expertise they need to move fast, solve problems, and scale. Facilitated by our mindful AI work agent, Umo™, our AI-powered operating system supports every step of turning aspirations into reality.
          </p>
          <p className="description-text">
            Upwork is where clients and talent achieve things that they never imagined possible. Whether you're here to grow your business, advance your craft, or lead your industry into this new era, we are glad you have found Upwork.
          </p>
          <p className="description-text emphasis">
            Let's build what's next - together.
          </p>
        </div>

        {/* Our Team Section */}
        <section className="team-section">
          <h2 className="section-title">Our Team</h2>
          
          <div className="team-member">
            <div className="member-avatar"></div>
            <div className="member-info">
              <h3 className="member-name">Anshu Roy</h3>
              <p className="member-bio">
                For more than two decades, Upwork has been a pioneer of a better way to work. We've enabled businesses and professionals to thrive through major shifts – from migrating to the cloud, capturing the potential of mobile, to creating new value through social media. No matter how needs and skills evolve, our purpose remains the same: to create opportunity in every era of work. For more than two decades, Upwork has been a pioneer of a better way to work. We've enabled businesses and professionals to thrive through major shifts – from migrating to the cloud, capturing the potential of mobile, to creating new value through social media. No matter how needs and skills evolve, our purpose remains the same: to create opportunity in every era of work.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-avatar"></div>
            <div className="member-info">
              <h3 className="member-name">Anshu Roy</h3>
              <p className="member-bio">
                For more than two decades, Upwork has been a pioneer of a better way to work. We've enabled businesses and professionals to thrive through major shifts – from migrating to the cloud, capturing the potential of mobile, to creating new value through social media. No matter how needs and skills evolve, our purpose remains the same: to create opportunity in every era of work. For more than two decades, Upwork has been a pioneer of a better way to work. We've enabled businesses and professionals to thrive through major shifts – from migrating to the cloud, capturing the potential of mobile, to creating new value through social media. No matter how needs and skills evolve, our purpose remains the same: to create opportunity in every era of work.
              </p>
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section className="journey-section">
          <h2 className="journey-title">Start Your Journey</h2>
          <div className="journey-buttons">
            <button className="journey-btn">Find Freelancer</button>
            <button className="journey-btn">Find Work</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;