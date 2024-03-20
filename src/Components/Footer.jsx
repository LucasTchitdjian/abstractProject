import './Footer.css';

export function Footer() {
  return (
    <footer>
      <div className="abstract">
        <h3>Abstract</h3>
        <ul>
          <li><span>Start Trial</span></li>
          <li><span>Pricing</span></li>
          <li><span>Download</span></li>
        </ul>
      </div>
      <div className="resources">
        <h3>Resources</h3>
        <ul>
          <li><span>Blog</span></li>
          <li><span>Help Center</span></li>
          <li><span>Release Notes</span></li>
          <li><span>Status</span></li>
        </ul>
      </div>
      <div className="community">
        <h3>Community</h3>
        <ul>
          <li><span>Twitter</span></li>
          <li><span>LinkedIn</span></li>
          <li><span>Facebook</span></li>
          <li><span>Dribble</span></li>
          <li><span>Podcast</span></li>
        </ul>
      </div>
      <div className="contact-us">
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li><span>About Us</span></li>
            <li><span>Careers</span></li>
            <li><span>Legal</span></li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li><span>info@abstract.com</span></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <svg class="abstract-logo-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
          <g class="abstract-logo-mark-footer" fill="#fff">
            <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
            <circle cx="21.24" cy="29.58" r="4.96"></circle>
          </g>
        </svg>
        <span>© Copyright 2023</span>
        <span>Abstract Studio Design, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}