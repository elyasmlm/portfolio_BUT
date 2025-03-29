import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [bgFocus, setBgFocus] = useState(false);

  const sections = [
    { id: "home", label: "Accueil", icon: "fas fa-home" },
    { id: "orders", label: "Qui suis-je ?", icon: "fas fa-user-circle" },
    { id: "favourite", label: "Projets", icon: "fas fa-bars-progress" },
    { id: "contact", label: "Contact", icon: "fas fa-phone" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50"> 
      {/* Navbar Container */}
      <nav 
        className={`shadow-md rounded-b-3xl flex justify-around items-center h-20 mx-auto max-w-4xl ${bgFocus ? "bg-white" : "bg-white/30"} transition`}
        onMouseOver={() => setBgFocus(true)}
        onMouseLeave={() => setBgFocus(false)}  
      >
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-600"
            className="text-center cursor-pointer hover:text-blue-600 transition opacity-100"
          >
            <i className={`${section.icon} text-2xl`}></i>
            <p className="text-sm">{section.label}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
