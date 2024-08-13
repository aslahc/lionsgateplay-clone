function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="container ml-20 ">
        {/* Top Links */}
        <div className="flex  space-x-4 text-sm mb-4">
          <a href="#" className="hover:underline text-white font-normal">
            Help Center
          </a>
          <span>|</span>
          <a href="#" className="hover:underline text-white font-normal">
            Contact us
          </a>
          <span>|</span>
          <a href="#" className=" text-white font-normal hover:underline">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className=" text-white font-normal hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="text-white font-normal hover:underline">
            About us
          </a>
          <span>|</span>
          <a href="#" className="text-white font-normal hover:underline">
            Account Deletion
          </a>
          <span>|</span>
          <a href="#" className="text-white font-normal hover:underline">
            Content Grievances
          </a>
        </div>

        {/* Copyright and App Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
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
