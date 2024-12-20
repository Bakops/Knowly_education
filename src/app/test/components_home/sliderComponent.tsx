import React from "react";

export default function LogoSlider() {
  const logos = [
    { src: "WIS.png", alt: "WIS" },
    { src: "EPSI.png", alt: "EPSI" },
    { src: "IDRACBS.png", alt: "IDRAC Business School" },
    { src: "IHEDREA.png", alt: "IHEDREA" },
    { src: "IET.png", alt: "IET" },
    { src: "IGEFI.png", alt: "IGEFI" },
    { src: "ESAIL.png", alt: "ESAIL" },
    { src: "IEFT.png", alt: "IEFT" },
    { src: "VIVA.png", alt: "Viva" },
    { src: "SUPDECOM.png", alt: "SUP DE COM" },
    { src: "IFAG.png", alt: "IFAG" },
    { src: "ICL.png", alt: "ICL" },
    { src: "ILERI.png", alt: "ILERI" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="slider-container max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute left-0 top-0 w-20 sm:w-40 h-full z-10" 
             style={{
               background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
               backdropFilter: 'blur(6px)',
               WebkitBackdropFilter: 'blur(6px)'
             }}>
        </div>
        <div className="slider animate-scroll gap-32">
          {logos.map((logo, index) => (
            <div className="logo-item transition-opacity duration-300" key={index}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-16 sm:w-20 md:w-24 h-auto object-contain hover:opacity-80" 
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className="logo-item transition-opacity duration-300" key={`duplicate-${index}`}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-16 sm:w-20 md:w-24 h-auto object-contain hover:opacity-80" 
              />
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 w-20 sm:w-40 h-full z-10" 
             style={{
               background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
               backdropFilter: 'blur(6px)',
               WebkitBackdropFilter: 'blur(6px)'
             }}>
        </div>
      </div>
    </div>
  );
}
