import './App.css'

export default function App() {
  // Define an array of button data
  const buttonsData = [
    { text: "Full Customizeable" },
    { text: "1000+ UI Elements" },
    { text: "200+ Sections" },
    { text: "Figma Autolayout" }
  ];

  const secondButtonsData = [
    { text: "100+ UI Elements" },
    { text: "125+ Components" },
    { text: "80+ Hero Sections" },
    { text: "60+ Cards" }
  ];

  const thirdButtonsData = [
    { text: "CTAs" },
    { text: "FAQs" },
    { text: "Features" },
    { text: "Footers" },
    { text: "Forms" }
  ];

  const fourthButtonsData = [
    { text: "Header" },
    { text: "Pricing" },
    { text: "Teams" },
    { text: "Testimonial" }
  ];

  // Define a CSS class for common button styles
  const buttonClass = "bg-slate-50 hover:bg-blue-400 text-slate-950 font-bold py-2 px-4 border-b-4 border-slate-950 hover:border-blue-500 rounded-full hover:text-white";

  return (
    <>
    <div class="mb-10">
      <div class="relative mb-5">
        <p class="static">
          <div>
            <h1 class="text-slate-50 font-bold inline p-10">Customizeable Wireframe Kit</h1>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-confetti-87-729044.png?f=webp" alt="Reddit Logo" class="inline r-100 h-12 absolute top-2 ml-[-30px]" />
          </div>
        </p>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/stars-color-icon.svg" alt="Reddit Logo" class="absolute top-10 h-10" />
        <h1 class="text-slate-50 font-bold">Free WireFrame Builder</h1>
      </div>
    </div>
    <div className="container relative">
    </div>
      <div className="space-x-4 mt-5">
        {/* Map over the buttonsData array to render buttons */}
        {buttonsData.map((button, index) => (
          <button key={index} className={buttonClass}>
            {button.text}
          </button>
        ))}
      </div>
      <div className="space-x-4 mt-5">
        {/* Map over the secondButtonsData array to render more buttons */}
        {secondButtonsData.map((button, index) => (
          <button key={index} className={buttonClass}>
            {button.text}
          </button>
        ))}
      </div>
      <div className="space-x-4 mt-5">
        {/* Map over the secondButtonsData array to render more buttons */}
        {thirdButtonsData.map((button, index) => (
          <button key={index} className={buttonClass}>
            {button.text}
          </button>
        ))}
      </div>
      <div className="space-x-4 mt-5">
        {/* Map over the secondButtonsData array to render more buttons */}
        {fourthButtonsData.map((button, index) => (
          <button key={index} className={buttonClass}>
            {button.text}
          </button>
        ))}
        </div>
    </>
  );
}
