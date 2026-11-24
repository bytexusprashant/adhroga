import {Linkedin, Twitter, Youtube} from 'lucide-react'

export default function ProjectFooter() {
  return (
    <footer className="footer" id="about">
      <div className="footer-main">
        <a className="brand footer-brand" href="#top">
          <span className="brand-name">adhroga</span>
          <small>VENTURES PVT. LTD.</small>
        </a>
        <nav>
          <a href="#opportunities">Opportunities</a>
          <a href="#process">How It Works</a>
          <a href="#approach">Our Approach</a>
          <a href="#about">About Us</a>
          <a href="#insights">Insights</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="socials">
          <a href="#about" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="#about" aria-label="Twitter">
            <Twitter size={16} />
          </a>
          <a href="#about" aria-label="YouTube">
            <Youtube size={16} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Adhroga Ventures Pvt. Ltd. All rights reserved.</span>
        <div>
          <a href="#about">Privacy Policy</a>
          <i /> <a href="#about">Terms & Conditions</a>
          <i /> <a href="#about">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
