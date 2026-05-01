import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 mt-10 px-10 py-10 text-xs max-w-[1220px]  mx-auto">

  <div className="grid grid-cols-4 gap-8">

    <div>
      <h2 className="text-white font-semibold mb-2">CS — Ticket System</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div>
      <h3 className="text-white mb-2">Company</h3>
      <p>About Us</p>
      <p>Our Mission</p>
      <p>Contact</p>
    </div>

    <div>
      <h3 className="text-white mb-2">Services</h3>
      <p>Products & Services</p>
      <p>Customer Stories</p>
      <p>Download Apps</p>
    </div>

    <div>
      <h3 className="text-white mb-2">Information</h3>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Join Us</p>
    </div>

  </div>

  <div className="text-center mt-6 text-gray-500">
    © 2026 CS — Ticket System. All rights reserved.
  </div>

</footer>
    );
};

export default Footer;