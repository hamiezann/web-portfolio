import React, { useState } from "react";
import "../style/PastProject.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faDatabase, faMobileAlt, faMapMarked, faFileContract} from '@fortawesome/free-solid-svg-icons';
import { faEthereum, faStripe, faPaypal, faLaravel, faFlutter, faReact, } from '@fortawesome/free-brands-svg-icons';


// Define technology stack icons
const stackIcons = {
  laravel: {
    icon: faLaptop,
    name: "Laravel",
    color: "#FF2D20", // Red color for Laravel
  },
  mysql: {
    icon: faDatabase,
    name: "MySQL",
    color: "#00758F", // Blue color for MySQL
  },
  flutter: {
    icon: faMobileAlt,
    name: "Flutter",
    color: "#02569B", // Blue color for Flutter
  },
  ethereum: {
    icon: faEthereum,
    name: "Ethereum",
    color: "#3C3C3D", // Dark gray for Ethereum
  },
  map: {
    icon: faMapMarked,
    name: "Map API",
    color: "#4CAF50", // Green color for Google Map API
  },
  paypal: {
    icon: faPaypal,
    name: "PayPal",
    color: "#009CDE", // PayPal Blue
  },
  contract: {
    icon: faFileContract,
    name: "Smart Contract",
    color: "#FFC107", // Amber color for Smart Contract
  },
  stripe: {
    icon: faStripe,
    name: "Stripe",
    color: "#00A4BD", // Stripe Blue
  },
  react: {
    icon: faReact,
    name: "React.js",
    color: "#61DAFB", // React.js Blue
  },
};


const projects = [
  {
    title: "Nash Cafe Web Application",
    description: `Designed and developed a café ordering system website for administrators, staff, and customers with Stripe payment integration.
    Built the web application using the Laravel framework and MySQL database. Integrated Google Maps API to help users locate and navigate to nearby branches.`,
    stackImages: [
      { src: "/project-image/home-nash.png", desc: "Nash Web Home Page" },
      { src: "/project-image/menu-nash.png", desc: "Nash Web Menu Page" },
      { src: "/project-image/map-nash.jpg", desc: "Nash Web Find Nearby Page" },
    ],
    features: [
      "Café ordering system for admins, staff, and customers",
      "Integrated Stripe payment for easy checkout",
      "Google Maps API for finding nearby locations",
      "Admin panel for managing menu items, orders, and customer details"
    ],
    stack: ["laravel", "mysql", "map", "stripe"],
    youtubeLink: "",
  },
  {
    title: "Nash Cafe Mobile Application",
    description: `Designed and developed a cafe ordering system mobile application for administrators and customers with PayPal payment integration.
    Developed Android application using Flutter framework and created a separate backend API using Laravel to support efficient system operations.`,
    stackImages: [
      { src: "/project-image/nash-home.jpg", desc: "Nash Mobile Admin Homepage" },
      { src: "/project-image/nash-list.jpg", desc: "Nash Mobile Admin Manage Product Page" },
      { src: "/project-image/nash-order.jpg", desc: "Nash Mobile Admin Manage Order Page" },
    ],
    features: [
      "Mobile app for café ordering with PayPal integration",
      "Admin panel for managing orders, products, and customers",
      "Backend API built with Laravel to support the mobile app",
      "Flutter-based Android app for cross-platform compatibility"
    ],
    stack: ["flutter", "laravel", "paypal"],
    youtubeLink: "",
  },
  {
    title: "Final Year Project: RGreement",
    description: `Designed and developed a comprehensive rental house finder web application facilitating searching, signing, and paying deposits through blockchain.
    Built the frontend with React.js, backend with Laravel API, and implemented smart contracts using Solidity.`,
    stackImages: [
      { src: "/project-image/rgreement.png", desc: "RGreement UI Collections" },
    ],
    features: [
      "Blockchain-based rental contract signing and deposit payments",
      "React.js frontend for dynamic user experience",
      "Laravel API backend for secure data handling",
      "Smart contracts written in Solidity for contract automation"
    ],
    stack: ["ethereum", "laravel", "react", "contract"],
    youtubeLink: "https://youtu.be/3qSH-nq02bw",
  },
];

function PastProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const handleNextImage = () => {
    setLightboxImageIndex((prevIndex) => (prevIndex + 1) % projects[currentIndex].stackImages.length);
  };

  const handlePreviousImage = () => {
    setLightboxImageIndex(
      (prevIndex) => (prevIndex - 1 + projects[currentIndex].stackImages.length) %
        projects[currentIndex].stackImages.length
    );
  };

  return (
    <div className="past-project-container">
      <h2 className="section-title">Past Projects</h2>
      <div className="carousel">
        <button className="nav-button prev" onClick={handlePreviousProject}>&#8249;</button>
        <div className="project-content">
          <div className="project-details">
            <h3 className="project-title">{projects[currentIndex].title}</h3>
            {/* <p className="project-description">{projects[currentIndex].description}</p> */}
            
            {/* Display features */}
            <ul className="project-features">
              {projects[currentIndex].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Display stack icons */}
            <div className="stack-icons">
  {projects[currentIndex].stack.map((stack, index) => {
    const stackData = stackIcons[stack];  // Fetch stack data
    if (!stackData) return null;  // Skip rendering if stackData is undefined

    return (
      <div
        key={index}
        className="stack-item"
        style={{
          borderColor: stackData.color, // Colored border based on the stack
        }}
      >
        <FontAwesomeIcon
          icon={stackData.icon}
          className="stack-icon"
          style={{ color: stackData.color }}
        />
        <div>{stackData.name}</div>
      </div>
    );
  })}
</div>



            {projects[currentIndex].youtubeLink && (
              <button
                className="section-1-button1"
                onClick={() => window.open(projects[currentIndex].youtubeLink, "_blank")}
              >
                Watch on YouTube
              </button>
            )}
          </div>
          <div className="stack-images">
            {projects[currentIndex].stackImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.desc}
                className="stack-image"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
        <button className="nav-button next" onClick={handleNextProject}>&#8250;</button>
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-button" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-nav prev" onClick={handlePreviousImage}>&#8249;</button>
          <div className="lightbox-content">
            <img
              src={projects[currentIndex].stackImages[lightboxImageIndex].src}
              alt="Lightbox"
              className="lightbox-image"
            />
            <p className="lightbox-description">{projects[currentIndex].stackImages[lightboxImageIndex].desc}</p>
          </div>
          <button className="lightbox-nav next" onClick={handleNextImage}>&#8250;</button>
        </div>
      )}
    </div>
  );
}

export default PastProject;
