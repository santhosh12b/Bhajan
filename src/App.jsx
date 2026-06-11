import { useEffect } from 'react';

function App() {
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
      {/* Heavily Emphasized Urgency Bar */}
      <div className="urgency-bar">
        <span className="alert-icon">⏳</span>
        <span>
          ATTENTION: ONLY <strong>3 DAYS LEFT</strong> TO JOIN THE EXPERIENCE!
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
              <img src="/assets/bajan.webp" alt="Bhajan Jamming Poster" loading="lazy" />
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

      <footer className="footer">
        <p>&copy; 2026 The Experience. Coimbatore. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
