import React from 'react';

const TopSection = () => {
  return (
    <section className="relative bg-blue-700 text-white pt-16 pb-10">
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,30 C150,80 350,0 500,30 L500,0 L0,0 Z"
            className="fill-blue-700"
          />
        </svg>
      </div>

      {/* Content Columns */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Web Designing</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Mobile App Development</li>
            <li>E-commerce Development</li>
            <li>Web Hosting</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Products</h3>
          <ul className="space-y-1 text-sm">
            <li>E-commerce Portal</li>
            <li>Online Exam Portal</li>
            <li>Matrimonial Portal</li>
            <li>Online Job Portal</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Best SEO Companies</li>
            <li>Web Development</li>
            <li>Design Companies</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Testimonials</li>
            <li>Technologies</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopSection;