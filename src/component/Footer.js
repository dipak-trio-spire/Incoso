'use client'
import Link from "next/link";
import Image from "next/image";
import F_logo from "../../public/img/logo.png";
import copy_right from "../../public/img/copy-right.svg";
import F_Twitter from "../../public/img/twitter.svg";
import  F_Linkdin from "../../public/img/linkdin.svg";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "Neue Abonnement",
  });

  const [success, setSuccess] = useState(false); // State to track submission success
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state on new submission
    setErrorMessage("");
    setLoading(true); // Set loading to true when submission starts
    // const endpoint = process.env.NEXT_PUBLIC_SENDER_MAIL || 'https://formspree.io/f/mdkonqvw';  // client
    const endpoint = process.env.NEXT_PUBLIC_SENDER_MAIL || 'https://formspree.io/f/myzygrvq';    // developer
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true); // Show success message if submission is successful
        setFormData({
          email: "",
          subject:"Neue Abonnement"
        });
      } else {
        setErrorMessage(`Nachricht konnte nicht gesendet werden.: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="f-wrapper py">
          <div className="f-main">
            <div className="f-logo">
              <Link href="/" aria-label="Footer Logo">
                <Image src={F_logo} alt="footer logo"  />
              </Link>
            </div>
            <div className="f-menu">
              <ul>
                <li>
                  <Link href="/" aria-label="HOME">
                  HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    aria-label="RESOURCES"
                  >
                    RESOURCES
                  </Link>
                </li>
                <li>
                  <Link href="/ethics_&_compliance" aria-label="E&C">
                   E&C
                  </Link>
                </li>
                <li>
                  <Link href="/contact" aria-label="CONTACT">
                     CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="f-social-links">
             <Link href="/" aria-label="Footer Brand Logo">
                <Image src={F_Twitter} alt="footer logo"  />
              </Link>
              <Link href="/" aria-label="Footer Brand Logo">
                <Image src={F_Linkdin} alt="footer logo"  />
              </Link>
            </div>
          </div>
          
          <div className="f-content">
          {
          //   <div className="f-mail">
          //   <div className="mail">
          //   <Image src={F_mail} alt="F_mail"/>
          //   </div>
          //   <div className="mail-text">
          //     <div className="f-title">
          //       <p>Abonnieren Sie unseren Newsletter</p>
          //     </div>
          //     <p>
          //       In unregelmäßigen Abständen informieren wir Sie gerne über
          //       Änderungen, Release-Notes und Neuerungen unserer Produkte.
          //     </p>
          //   </div>
          // </div>
          }
            {/* <div className="f-ns-mail">
              <form onSubmit={handleSubmit} method="POST">
                <input type="email" name='email' placeholder="Ihre E-Mail eingeben" value={formData.email} onChange={handleChange} />
                <div className="in-button"><input type="submit" value={loading ? "ABONNIEREN..." : "ABONNIEREN"} disabled={loading} /></div>
              </form>
              
              {success && (
                  <div className="success-message">
                    <p>Vielen Dank für Ihr Abonnement</p>
                  </div>
                )}

                {errorMessage && (
                  <div className="error-message">
                    <p>{errorMessage}</p>
                  </div>
                )}
            </div> */}
          </div>
        </div>
      </div>
      <div className="copy-right">
            <div className="container">
                <div className="copy-wrapper">
                    <div className="copy-text">
                    <Image src={copy_right} alt="copy_right"/>
                        <p>2024 Incoso Ltd. All rights reserved</p>
                    </div>
                    <div className="copy-link">
                        <Link href="/terms" aria-label="Terms">Terms</Link>
                        <Link href="/Privacy" aria-label="Privacy">Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
