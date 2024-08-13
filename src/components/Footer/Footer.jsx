function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="container ml-20">
        {/* Top Links Section */}
        <div className="flex space-x-4 text-sm mb-4">
          {/* Help Center link */}
          <a href="#" className="hover:underline text-white font-normal">
            Help Center
          </a>
          <span>|</span>
          {/* Contact Us link */}
          <a href="#" className="hover:underline text-white font-normal">
            Contact us
          </a>
          <span>|</span>
          {/* Terms & Conditions link */}
          <a href="#" className="text-white font-normal hover:underline">
            Terms & Conditions
          </a>
          <span>|</span>
          {/* Privacy Policy link */}
          <a href="#" className="text-white font-normal hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          {/* About Us link */}
          <a href="#" className="text-white font-normal hover:underline">
            About us
          </a>
          <span>|</span>
          {/* Account Deletion link */}
          <a href="#" className="text-white font-normal hover:underline">
            Account Deletion
          </a>
          <span>|</span>
          {/* Content Grievances link */}
          <a href="#" className="text-white font-normal hover:underline">
            Content Grievances
          </a>
        </div>

        {/* Copyright and App Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright information */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              Copyright © 2024 LIONSGATEPLAY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
