import { useEffect, useState } from 'react';

function App() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('June 14, 2026 17:00:00').getTime();
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
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

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <div className="avatar-more">+500</div>
            </div>
            <p>Join <strong>500+ youth</strong> from across Coimbatore</p>
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
          <h2 className="section-title">Don't Just Take <span className="highlight">Our Word</span> For It</h2>
          <p className="section-intro">Real experiences from our previous attendees.</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"I came just for the music but left with so much peace. The vibe was unreal!"</p>
              <p className="author">- Ankit, 22</p>
            </div>
            <div className="testimonial-card glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"Not your average gathering. The energy, the people, the prasadam... 10/10."</p>
              <p className="author">- Sruthi, 24</p>
            </div>
            <div className="testimonial-card glass">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"I’ve never chanted before, but I was dancing by the end of it. Highly recommend!"</p>
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

export default App;
