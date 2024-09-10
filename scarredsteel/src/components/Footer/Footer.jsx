import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
        <h3>Site Map</h3>
          <ul>
            <li><Link to="/paint">Paint</Link></li>
            <li><Link to="/metalworks">Metalworks</Link></li>
            <li><Link to="/restoration">Restoration</Link></li>
            <li><Link to="/fabrication">Fabrication</Link></li>
            <li><Link to="/roofing">Roofing</Link></li>
          </ul>
          <h3>Links</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div className="form-section">
          <h3>Contact us now for a free quote</h3>
          <form>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 <a href="https://fusiondigital.fr" target="_blank" rel="noopener noreferrer">Fusion Digital</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;