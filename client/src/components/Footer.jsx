function Footer() {
  return (
    <footer className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo ve Açıklama */}
        <div>
          <h2 className="text-blue-600 text-2xl font-bold mb-4">MORENT</h2>
          <p className="text-gray-500">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-500">
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Socials</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-gray-500 text-sm">
          ©2024 MORENT. All rights reserved
        </span>
        <div className="flex space-x-4 text-gray-500 text-sm">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
