"use client";
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaTiktok,
  FaSoundcloud,
  FaSnapchatGhost,
} from "react-icons/fa";
import { SiApplemusic, SiAmazonmusic } from "react-icons/si";

const socialLinks = [
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
  { href: "https://www.facebook.com", icon: <FaFacebookF /> },
  { href: "https://www.tiktok.com", icon: <FaTiktok /> },
  { href: "https://www.twitter.com", icon: <FaTwitter /> },
  { href: "https://www.spotify.com", icon: <FaSpotify /> },
  { href: "https://www.youtube.com", icon: <FaYoutube /> },
  { href: "https://www.apple.com/apple-music/", icon: <SiApplemusic /> },
  { href: "https://www.soundcloud.com", icon: <FaSoundcloud /> },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribeClick = () => {
    console.log("handleSubscribeClick");
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleSubmit = () => {
    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    console.log("Submitted name:", name);
    console.log("Submitted country:", country);
    console.log("Submitted email:", email);

    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="text-white  center flex-col flex ">
     
      <div>
        <h1 className="text-[4.5rem] footer-logo">Odyzon</h1>
      </div>
      <div>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <button
        id="subscribeBtn"
        className="mt-10 border p-2 px-6 footer-suscribe text-sm rounded-3xl"
        onClick={handleSubscribeClick}
      >
        Subscribe to the Newsletter
      </button>
      <div className="text-[1.rem] mt-14 mb-1 footer-text text-gray-400">
        © 2024 Odyzon. All Rights Reserved.
      </div>{" "}
      <div className="text-[1.rem]  credits-text text-gray-100">
        Designed With ❤ by{" "}
        <a
          target="_blank"
          href="https://fiverr.com/hasnainqureshi4"
          className="underline"
        >
          {" "}
          Hasnain Q{" "}
        </a>
      </div>
      {isModalOpen && (
        <div className="modal-overlay ">
          <div className="modal text-black">
            <span className="close" id="closeModal" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Subscribe to Newsletter</h2>
            <div>
              <input
                type="email"
                id="emailInput"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p class="required">*Email is required</p>
            </div>
            <input
              type="text"
              id="nameInput"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="countryInput"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button id="submitBtn" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Footer;
