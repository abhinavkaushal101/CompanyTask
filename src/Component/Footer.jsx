import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E0C36] text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Jainshree <span className="text-primary">DIGITAL</span>
          </h2>
          <p className="text-sm leading-relaxed">
            We help businesses grow digitally with modern design, marketing,
            and scalable solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <a className="footer-icon" href="#"><FaFacebookF /></a>
            <a className="footer-icon" href="https://www.instagram.com/jainshreedigital/"><FaInstagram /></a>
            <a className="footer-icon" href="https://www.linkedin.com/company/jainshreedigital/?originalSubdomain=in"><FaLinkedinIn /></a>
            <a className="footer-icon" href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="footer-title">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="footer-link">Development</li>
            <li className="footer-link">UI/UX Designer</li>
            <li className="footer-link">Graphic Designer</li>
            <li className="footer-link">Motion Graphic</li>
            <li className="footer-link">Photography</li>
            <li className="footer-link">Videography</li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 1067, sch no. 71 indore, Indore, India 452009</li>
            <li>📞 +91 96174 38100</li>
            <li>✉️ info@jainshreedigital.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Jainshree Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
