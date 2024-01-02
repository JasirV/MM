import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi"; 
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div>
        <footer className="pt-5 pb-4 ">
          <hr />
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold ">
                  MM WEDDINGS
                </h5>
                <p>

                </p>
              </div>
              <div className="col-md-2 col-lg-2col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h5>
                <p>
                  <span style={{ textDecoration: "none" }}>PHOTOGRAPHY</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none" }}>CINEMATOGRAPHY</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none" }}>ALBUM DESING & PRINTING</span>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold ">
                  Services
                </h5>
                <p>
                  <span style={{ textDecoration: "none" }}>Privacy Policy</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none" }}>
                    Return&Refund Policy
                  </span>
                </p>
                <p>
                  <span style={{ textDecoration: "none" }}>Free Shipping</span>
                </p>
                <p>
                  <span style={{ textDecoration: "none" }}>Security</span>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold ">
                  Contact
                </h5>
                <p>
                  <AiFillInstagram />
                </p>
                <p>
                  <FaWhatsapp />
                </p>
                <p>
                  <BsFacebook />
                </p>
                <p>
                  <BiLogoGmail />
                </p>
              </div>
            </div>
            <hr className="mb-4"></hr>
            <div className="row align-items-center">
              <div>
                <p>Copyright @2023 All rights reserved by mm weddings</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};