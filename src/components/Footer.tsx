function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            IMMERSIVE X is a leading innovator in VR and MR technology.
            We empower users with cutting-edge headsets and AI tools, fostering a dynamic community of immersive experience enthusiasts.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/@immersivextech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/immersivextechnologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 110018</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@immersivex.in"
              className="hover:text-white transition-colors duration-300"
            >
              info@immersivex.in
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919401259677"
              className="hover:text-white transition-colors duration-300"
            >
              (+91) 9401259677
            </a>
          </p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 IMMERSIVE X. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
