"use client";

import { useEffect } from "react";

const tiers = {
  bronze: { name: "BRONZE", color: "text-amber-700", price: "$500+" },
  silver: { name: "SILVER", color: "text-gray-500", price: "$1000+" },
  gold: { name: "GOLD", color: "text-yellow-600", price: "$2500+" },
};

const rows = [
{
    label: "Company Logo on the Vehicle and Website",
    values: { bronze: "Small", silver: "Medium", gold: "Large" },
  },
  {
    label: "Access to team resume bank",
    values: { bronze: "check", silver: "check", gold: "check" },
  },
{
    label: "Recognition in Presentations",
    values: { bronze: "check", silver: "check", gold: "check" },
  },
  {
    label: "Social Media Mentions and Advertisements",
    values: { bronze: "x", silver: "check", gold: "check" },
  },
  {
    label: "Group thank-you post on website and social media",
    values: { bronze: "x", silver: "check", gold: "check" },
  },
  {
    label: "Quarterly promotional video on social media showing your contribution",
    values: { bronze: "x", silver: "x", gold: "check" },
  },
  {
    label: "Open collaborations — unique and tailored benefits to maximize partnership impact",
    values: { bronze: "x", silver: "x", gold: "check" },
  },
];

const cellRender = (v) => {
  if (v === "check") {
    return <span className="text-xl leading-none">✓</span>;
  }
  if (v === "x") {
    return <span className="text-xl leading-none">×</span>;
  }
  return <span className="">{v}</span>;
};

const SponsorsPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load(
        "particles-js",
        "/assets/particlesjs-config-home.json",
        () => {
          console.log("callback - particles.js config loaded");
        }
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 min-h-screen flex flex-col pb-24">
        <h1 className="text-center text-4xl md:text-5xl font-light mb-10 leading-tight mt-26 md:mt-40">
          Sponsorship Program
        </h1>

        {/* Sponsorship Comparison Table */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border-2 border-[#247F4A] bg-white">
            {/* Header row */}
            <div
              role="row"
              className="grid grid-cols-4 items-end gap-2 px-4 md:px-8 pt-6 pb-4"
            >
              <div role="columnheader" className="font-medium" />
              {["bronze", "silver", "gold"].map((k) => (
                <div
                  key={k}
                  role="columnheader"
                  className={`text-center font-bold ${tiers[k].color}`}
                >
                  {tiers[k].name}
                </div>
              ))}
            </div>

            {/* Body rows */}
            <div className="divide-y divide-[#247F4A]/30">
              {rows.map((r) => (
                <div
                  key={r.label}
                  role="row"
                  className="grid grid-cols-4 items-center gap-2 px-4 md:px-8 py-4 md:py-5"
                >
                  <div className="">{r.label}</div>
                  {["bronze", "silver", "gold"].map((k) => (
                    <div
                      key={k}
                      role="cell"
                      className="text-center"
                    >
                      {cellRender(r.values[k])}
                    </div>
                  ))}
                </div>
              ))}

              {/* Price Category row */}
              <div
                role="row"
                className="grid grid-cols-4 items-center gap-2 px-4 md:px-8 py-5"
              >
                <div className="font-semibold">Price Category</div>
                {["bronze", "silver", "gold"].map((k) => (
                  <div
                    key={k}
                    role="cell"
                    className={`text-center font-semibold ${tiers[k].color}`}
                  >
                    {tiers[k].price}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OUR SPONSORS Section */}
        <div className="container mx-auto px-0 md:px-4 mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="p-8">
              <div className="flex items-center justify-center mb-12">
                <div className="flex-1 border-1 border-[#247F4A] mr-4"></div>
                <h2 className="text-3xl font-light whitespace-nowrap">OUR SPONSORS</h2>
                <div className="flex-1 border-1 border-[#247F4A] ml-4"></div>
              </div>

              {/* Gold Sponsors */}
              {/* <div className="mb-12">
                <div className="bg-white border-[#247F4A] border-2 py-12 px-10 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <img
                      src="/branding/UARAD_LOGO_DARK.png"
                      alt="Company Logo"
                      className="w-32 h-32 mx-auto mb-4 object-contain"
                    />
                    <h4 className="font-semibold mb-3 text-lg">Your Brand Here!</h4>
                  </div>
                </div>
              </div> */}

            <div className="mb-12">
                <div className="bg-white border-[#247F4A] border-2 py-12 px-10 rounded-xl flex justify-center items-center mx-auto">
                  <div className="text-center">
                    <img
                      src="/branding/UARAD_LOGO_DARK.png"
                      alt="Company Logo"
                      className="w-32 h-32 mx-auto mb-4 object-contain"
                    />
                    <h4 className="font-semibold mb-3 text-lg">Your Brand Here!</h4>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12 pt-8">
                <div className="p-8 rounded-xl">
                  <p className="text-lg mb-8 bg-white z-10 leading-relaxed max-w-4xl mx-auto">
                    Supporting UA-RAD is an investment in the future of engineering
                    talent. Our members gain hands-on experience in UAS design,
                    electronics, and systems integration, while sponsors connect early
                    with highly skilled students solving real-world challenges. Your
                    brand will be prominently displayed on our UASs, at national
                    competitions, and across our digital platforms, reaching students
                    and professionals alike. We welcome both in-kind contributions and
                    financial support, with custom partnerships available.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href={`mailto:uarad.uofa@gmail.com?subject=${encodeURIComponent(
                        "Sponsorship Inquiry - UA-RAD"
                      )}&body=${encodeURIComponent(
                        `Hello UA-RAD team,

We are interested in exploring sponsorship opportunities with your team. Please find our details below:

Company Name:
Contact Person:
Position/Role:
Sponsorship Interest (monetary, equipment, mentorship, etc.):

[Your message here...]

Best regards,
[Your Name]`
                      )}`}
                      className="inline-block w-full sm:w-52 bg-[#247F4A] text-white px-8 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#D3AF37] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/20 text-center"
                    >
                      Support Us Today
                    </a>
                    <a
                      href="/contact"
                      className="inline-block bg-white w-full sm:w-52 text-[#247F4A] border-2 border-[#247F4A] px-8 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#D3AF37] hover:border-[#D3AF37] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/20 text-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              {/* End CTA */}
            </div>
          </div>
        </div>
        {/* End Sponsors Section */}
      </div>
    </div>
  );
};

export default SponsorsPage;
