import React from 'react';
import { PiMagnifyingGlassFill, PiHandshake, PiStarFourFill, PiTimerBold } from 'react-icons/pi';
import { GiClothes, GiCrownedHeart } from 'react-icons/gi';

export default function Features() {
  return (
    <section className="features-section" id="services">
      <div className="title">
        <h1>Personalized service like no other</h1>
      </div>
      <div className="content">
        <div className="left">
          <div>
            <PiMagnifyingGlassFill size={30} />
            <h3>Sourcing Expertise</h3>
            <p>
              With extensive knowledge of the apparel industry and a deep
              understanding of local markets, we specialize in sourcing
              high-quality, custom-tailored apparel that fits your brand’s
              specifications and budget.
            </p>
          </div>
          <div>
            <PiHandshake size={30} />
            <h3>Supplier Network</h3>
            <p>
              Our strong relationships with suppliers, manufacturers, and
              artisans in Tirupur and across India give us access to a diverse
              selection of apparel options. We ensure competitive pricing and
              unmatched quality.
            </p>
          </div>
          <div>
            <PiStarFourFill size={30} />
            <h3>Quality Assurance</h3>
            <p>
              Every piece of apparel goes through rigorous quality checks,
              ensuring that our products meet—and often exceed—industry
              standards. Quality is our guarantee.
            </p>
          </div>
          <div>
            <GiClothes size={30} />
            <h3>Customization</h3>
            <p>
              From custom designs and sizes to unique branding options, we offer
              fully personalized solutions. Your vision is our mission, and we
              ensure it comes to life.
            </p>
          </div>
          <div>
            <PiTimerBold size={30} />
            <h3>Timely Deliveries</h3>
            <p>
              We understand that timing is crucial in fashion. Our efficient
              logistics network ensures that your orders are delivered on
              schedule, no matter where you are in the world.
            </p>
          </div>
          <div>
            <GiCrownedHeart size={30} />
            <h3>Ethical Sourcing</h3>
            <p>
              We are committed to sustainable, fair, and responsible sourcing
              practices. Every product we provide is crafted under ethical
              working conditions, reflecting our dedication to social
              responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
