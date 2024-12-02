"use client";
import React, { useState } from "react";
import Image from "next/image";
import mail from "../../../public/img/mail.svg";
import location from "../../../public/img/location.svg";
import map from "../../../public/img/map.png";
import Link from "next/link";


const Page = () => {


  return (
    <div>

      <section className="contact py py-b">
        <div className="container">
          <div className="contact-wrapper py py-b">
            <div className="contact-text">
              <div className="com-title">
                
                <h2>
                CONTACT US
                </h2>
              </div>
              <div className="contact-detail">
              
                {/* Contact Details - Email */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={mail} alt="email" />
                  </div>
                  <div className="cd-title">
                    <p>E-Mail</p>
                    <Link href="mailto:contact@incoso.uk">
                    contact@incoso.uk
                    </Link>
                  </div>
                </div>

                {/* Contact Details - Address */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="cd-title">
                    <p>Address</p>
                    <p>
                       128 City Rd <br></br>
                       London EC1V 2NX<br></br>
                       United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <form method="POST">
                <div className="in-filds">
                  <div className="in-fild">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="in-fild">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      required
                    />
                  </div>
                </div>
                <div className="in-fild">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="in-fild">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="in-fild">
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                {/* <div className="in-fild privacy-container">
                  <p>
                  Should be “Informationen zum Datenschutz in Bezug auf Ihre Anfrage finden Sie hier: :{" "}
                    <a href="/datenschutzerklaerung" className="cookie_a"  target="_blank">
                      Datenschutzrichtlinie.
                    </a>
                  </p>
                </div> */}

                <div className="in-button">
                  <input
                    type="submit"
                    value="SEND"
                    // value={loading ? "Senden..." : "SENDEN"}
                    // disabled={loading} 
                  />
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      {/* Map Section */}
      <section className="map py">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-img">
              <Image src={map} alt="google map" />
            </div>
            {/* <div className="maping-text">
              <p>BLICK AUF UNSERE GESCHÄFTSRÄUME IN STUTTGART</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
    
    </div>
  );
};

export default Page;
