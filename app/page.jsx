"use client";

import { useEffect, useState } from 'react';

export default function Page() {
  const calculateTimeLeft = () => {
    // Using Date.UTC (Year, MonthIndex, Day, Hour, Minute, Second)
    // 2026-09-20 17:30 IST is 12:00:00 UTC (September is month 8)
    const targetDate = new Date(Date.UTC(2026, 8, 20, 12, 0, 0)).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Show hero content immediately with a tiny delay for smooth effect
    setTimeout(() => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.classList.add('visible');
      }
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Ambient glowing background orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Heavily Emphasized Urgency Bar */}
      <div className="urgency-bar">
        <span className="alert-icon">⏳</span>
        <span>
          ATTENTION: REGISTRATION CLOSES IN
          <span className="countdown-timer">
            <strong>{String(timeLeft.days).padStart(2, '0')}</strong>d : 
            <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>h : 
            <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>m : 
            <strong>{String(timeLeft.seconds).padStart(2, '0')}</strong>s
          </span>
        </span>
        <span className="alert-icon">🔥</span>
      </div>

      {/* Section 1: Hero */}
      <header className="hero" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <span className="pre-headline">WHY ARE SO MANY YOUNG PEOPLE SUDDENLY INTO KIRTAN?</span>
          <h1 className="headline">NOT A CONCERT.<br /><span className="highlight">NOT A PARTY.</span><br />SOMETHING BETTER.</h1>
          <p className="subheadline">Experience the energy everyone is talking about.</p>
          <p className="description">
            Imagine hundreds of voices, live music, powerful beats, and an atmosphere that leaves you feeling lighter, happier, and more connected.
          </p>

          <div className="social-proof">
            <div className="avatar-stack">
              <img src="https://ui-avatars.com/api/?name=R&background=random&color=fff" alt="user" />
              <img src="https://ui-avatars.com/api/?name=P&background=random&color=fff" alt="user" />
              <img src="https://ui-avatars.com/api/?name=A&background=random&color=fff" alt="user" />
              <img src="https://ui-avatars.com/api/?name=S&background=random&color=fff" alt="user" />
              <div className="avatar-more">+100</div>
            </div>
            <p>Join <strong>100+ youth</strong> from across Coimbatore</p>
          </div>

          <div className="hero-features">
            <div className="feature-badge">✨ Live Bhajan Jamming</div>
            <div className="feature-badge">🎶 Immersive Music Experience</div>
            <div className="feature-badge">🤝 Vibrant Youth Community</div>
            <div className="feature-badge">🍛 Complimentary Prasadam</div>
          </div>

          <p className="vibe-text">One evening. A completely different vibe.</p>

          <a href="https://www.iskconcoimbatore.com/bhajan-jamming-2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASWK6RleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafQre0Fa5uLMqaANW-5uFvwim_tPdKl416o1StUIaSjq8NE4n26jqE8TWPcow_aem_MXLn0H14mxpMPKmRnQLXQQ/admin" target="_blank" rel="noopener noreferrer" className="cta-button pulse">🚀 Reserve My Ticket</a>
        </div>
      </header>

      {/* Event Details Section */}
      <section className="event-details-section" id="details">
        <div className="container fade-in">
          <div className="details-grid">
            <div className="detail-card glass">
              <div className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="detail-content">
                <h3>Date</h3>
                <p><strong>20 September 2026</strong></p>
                <span>Sunday</span>
              </div>
            </div>
            <div className="detail-card glass">
              <div className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="detail-content">
                <h3>Timing</h3>
                <p><strong>5:30 PM - 8:00 PM</strong></p>
              </div>
            </div>
            <div className="detail-card glass">
              <div className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="detail-content">
                <h3>Performed By</h3>
                <p><strong>Kirtan Kovai</strong></p>
              </div>
            </div>
            <div className="detail-card glass">
              <div className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
              </div>
              <div className="detail-content">
                <h3>Entry Fee</h3>
                <p><strong>₹ 199</strong></p>
                <span>Per Person</span>
              </div>
            </div>
          </div>
          <div className="location-card">
            <div className="detail-icon location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="detail-content">
              <h3>Venue</h3>
              <h2>Music Hive</h2>
              <p className="address-text">
                <span>1547, Classic Towers, Trichy Rd,</span>
                <span>Opp. St. Francis Convent, Highways Colony,</span>
                <span>Coimbatore, Tamil Nadu 641018</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker-item">🌟 THE BIGGEST KIRTAN EVENT IN COIMBATORE</div>
          <div className="ticker-item">🎸 LIVE JAMMING SESSIONS</div>
          <div className="ticker-item">🍛 COMPLIMENTARY PRASADAM</div>
          <div className="ticker-item">✨ IMMERSIVE EXPERIENCE</div>
          <div className="ticker-item">🌟 THE BIGGEST KIRTAN EVENT IN COIMBATORE</div>
          <div className="ticker-item">🎸 LIVE JAMMING SESSIONS</div>
          <div className="ticker-item">🍛 COMPLIMENTARY PRASADAM</div>
          <div className="ticker-item">✨ IMMERSIVE EXPERIENCE</div>
        </div>
      </div>

      {/* Section 2: What Makes This Different */}
      <section className="different-section" id="difference">
        <div className="container fade-in">
          <h2 className="section-title">What Makes This <span className="highlight">Different?</span></h2>
          <p className="section-intro">Most events entertain you for a few hours. <br /><strong>This experience stays with you long after it ends.</strong></p>

          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon">🎶</div>
              <p>Feel the energy of hundreds of voices chanting together.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🪘</div>
              <p>Experience live bhajan jamming with powerful rhythms and immersive music.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🤝</div>
              <p>Connect with positive, like-minded people from across Coimbatore.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">✨</div>
              <p>Take a break from stress, screens, and everyday routine.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🍛</div>
              <p>Enjoy delicious prasadam and meaningful conversations.</p>
            </div>
          </div>

          <div className="outro-text">
            <p>No prior experience needed.<br /><strong>Just come with an open mind.</strong></p>
          </div>
        </div>
      </section>

      {/* Section 3: Media / Vibe Check */}
      <section className="media-section" id="media">
        <div className="container fade-in">
          <h2 className="section-title">Catch The <span className="highlight">Vibe</span></h2>
          <p className="section-intro">A glimpse into our authentic spiritual community.</p>

          <div className="media-gallery">
            <div className="media-item glass contain-img">
              <img src="/assets/bajan.png" alt="Bhajan Jamming Poster" loading="lazy" />
              <div className="media-caption">Deep Spiritual Connection</div>
            </div>
            <div className="media-item glass">
              <img src="/assets/jamming_instruments_1781090414322.png" alt="Traditional Indian Instruments" loading="lazy" />
              <div className="media-caption">Authentic Bhajan Jamming</div>
            </div>
            <div className="media-item glass">
              <img src="/assets/1.jpeg" alt="Youth Community Having Prasadam" loading="lazy" />
              <div className="media-caption">Joyful Community</div>
            </div>
          </div>

          <div className="final-cta" id="booking">
            <h3>Ready to experience something better?</h3>
            <a href="https://www.iskconcoimbatore.com/bhajan-jamming-2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASWK6RleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafQre0Fa5uLMqaANW-5uFvwim_tPdKl416o1StUIaSjq8NE4n26jqE8TWPcow_aem_MXLn0H14mxpMPKmRnQLXQQ/admin" target="_blank" rel="noopener noreferrer" className="cta-button pulse">🚀 Reserve My Ticket Now</a>
            <p className="limited-spots">Limited spots available!</p>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="container fade-in">
          <h2 className="section-title">Don&apos;t Just Take <span className="highlight">Our Word</span> For It</h2>
          <p className="section-intro">Real experiences from our previous attendees.</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">&quot;I came just for the music but left with so much peace. The vibe was unreal!&quot;</p>
              <p className="author">- Ankit, 22</p>
            </div>
            <div className="testimonial-card glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">&quot;Not your average gathering. The energy, the people, the prasadam... 10/10.&quot;</p>
              <p className="author">- Sruthi, 24</p>
            </div>
            <div className="testimonial-card glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">&quot;I&apos;ve never chanted before, but I was dancing by the end of it. Highly recommend!&quot;</p>
              <p className="author">- Vikram, 21</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 The Experience. Coimbatore. All rights reserved.</p>
      </footer>
    </>
  );
}
