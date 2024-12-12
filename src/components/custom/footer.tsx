import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Logo</h3>
            <p className="text-gray-400 mb-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="flex space-x-4">{/* Social media icons */}</div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Link</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 px-4 py-2 rounded-lg flex-grow"
              />
              <Button variant="secondary">Send</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
