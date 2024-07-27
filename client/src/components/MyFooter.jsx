import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import * as images from "../assets/index.js";
import { Link } from "react-router-dom";

function MyFooter() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <a className="text-2xl font-semibold space-x-3" href="/">
            <img
              className="w-20 lg:w-32 inline-block items-center"
              src={images.logoVB}
              alt=""
            />
            {/* <span className="text-[#263238]">Vita Bajío</span> */}
          </a>
            {/* <Footer.Brand
              href="https://flowbite.com"
              src={images.logoVB}
              alt="VitaBajio Logo"
              name="Vita Bajío"
            /> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="acerca de" />
              <Footer.LinkGroup col>
                <Link to="/blog"><Footer.Link >Blog</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Siguenos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank">Linkedin</Footer.Link>
                <Footer.Link href="https://www.facebook.com/profile.php?id=61559730121097&mibextid=LQQJ4d" target="_blank">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Vita Bajío™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/profile.php?id=61559730121097&mibextid=LQQJ4d" target="_blank" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/mrktg_vb/" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
