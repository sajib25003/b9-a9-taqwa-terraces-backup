import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-4 lg:p-10 bg-blue-200 text-base-content grid grid-cols-1 md:grid-cols-2 gap-4 text-center lg:text-left lg:grid-cols-4">
      <aside>
        <h3 className="text-3xl font-bold text-blue-700">Taqwa Terraces</h3>
        <p>Reliable Real Estate since 2002</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <h6 className="font-bold text-green-700 uppercase">Contact Us</h6>
        <a href="/map" className="link link-hover flex justify-center lg:justify-start items-center gap-2">
          <FaMapMarkerAlt /> 192, Mohakhali DOHS, Dhaka
        </a>
        
        <a className="link link-hover flex justify-center lg:justify-start items-center gap-2">
          <FaEnvelope /> taqwa.terraces@gmail.com
        </a>
        <a className="link link-hover flex items-center justify-center lg:justify-start gap-2">
          <FaPhoneAlt /> +880-1234-567-890
        </a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-bold text-green-700 uppercase">Links</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Career</a>
      </nav>
      <form className="">
        <h6 className="font-bold text-green-700 uppercase">Newsletter</h6>
        <fieldset className="form-control w-full lg:w-[80%]">
          
          <div className="join justify-center my-4">
            <input
              type="text"
              placeholder="username@site.com"
              className="input  join-item p-4"
            />
            <button className="btn bg-gray-700 text-white font-bold join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
