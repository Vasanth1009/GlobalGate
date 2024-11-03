import Image from 'next/image';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Home/Footer';
import { Fragment } from 'react';

export default function OurServices() {
  return (
    <>
      <Navbar />
      <div className="mx-8 py-[24px] sm:mx-auto">
        <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
              Our Services
            </h1>
            <p className="max-w-4xl mx-auto text-center text-lg font-normal leading-7 text-gray-500 mb-9">
              At <span className="text-indigo-600"> Global Gate</span>, we are
              your trusted partner for apparel sourcing, dedicated to delivering
              top-tier quality while adhering to ethical and tailored practices.
              <br />
              <br />
              We prioritize our client&#39;s unique needs, ensuring an
              exceptional experience at every step of the process. With our
              meticulous attention to detail and commitment to responsible
              sourcing, we guarantee seamless, professional service. Partner
              with us in achieving excellence in apparel sourcing.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              What We Offer
            </h2>
            <ul className="list-disc list-outside flex flex-col gap-8 ml-5 mb-14">
              <li className="list-disc">
                <p className="font-medium text-xl leading-8 text-black">
                  Sourcing Expertise :
                  <span className="font-normal text-base leading-7 text-black">
                    {' '}
                    With extensive knowledge of the apparel industry and a deep
                    understanding of local markets, we specialize in sourcing
                    high-quality, custom-tailored apparel that fits your brand’s
                    specifications and budget.
                  </span>
                </p>
              </li>

              <li className="list-disc">
                <p className="font-medium text-xl leading-8 text-black">
                  Supplier Network :
                  <span className="font-normal text-base leading-7 text-black">
                    {' '}
                    Our strong relationships with suppliers, manufacturers, and
                    artisans in Tirupur and across India give us access to a
                    diverse selection of apparel options. We ensure competitive
                    pricing and unmatched quality.
                  </span>
                </p>
              </li>

              <li className="list-disc">
                <p className="font-medium text-xl leading-8 text-black">
                  Quality Assurance :
                  <span className="font-normal text-base leading-7 text-black">
                    {' '}
                    Every piece of apparel goes through rigorous quality checks,
                    ensuring that our products meet—and often exceed—industry
                    standards. Quality is our guarantee.
                  </span>
                </p>
              </li>
              <li className="list-disc">
                <p className="font-medium text-xl leading-8 text-black">
                  Customization :
                  <span className="font-normal text-base leading-7 text-black">
                    {' '}
                    From custom designs and sizes to unique branding options, we
                    offer fully personalized solutions. Your vision is our
                    mission, and we ensure it comes to life.
                  </span>
                </p>
              </li>
              <li className="list-disc">
                <p className="font-medium text-xl leading-8 text-black">
                  Timely Deliveries :
                  <span className="font-normal text-base leading-7 text-black">
                    {' '}
                    We understand that timing is crucial in fashion. Our
                    efficient logistics network ensures that your orders are
                    delivered on schedule, no matter where you are in the world.
                  </span>
                </p>
              </li>

              <li className="list-disc">
                <p className="font-medium text-xl leading-8 text-black">
                  Ethical Sourcing:{' '}
                  <span className="font-normal text-base leading-7 text-black">
                    {' '}
                    We are committed to sustainable, fair, and responsible
                    sourcing practices. Every product we provide is crafted
                    under ethical working conditions, reflecting our dedication
                    to social responsibility.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              Our Accreditation
            </h2>
            <p className="font-normal text-lg leading-8 text-gray-600 mb-12">
              We maintain strict compliance with international standards for
              responsible and sustainable production, holding accreditation
              from:
            </p>
            <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5 mt-2">
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                WRAP
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                SA 8000
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                SEDEX
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                BSCI
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                DISNEY
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                GOTS
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                GRS
              </li>
            </ul>
            <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5 mt-5">
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                Organic Cotton
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                BCI
              </li>
              <li className="py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                Fair Trade
              </li>
              <li className="max-h-14 py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                C-TAPT
              </li>
              <li className="max-h-14 py-3.5 px-7 rounded-full bg-gray-300 font-semibold text-base leading-7 text-gray-700">
                OEKO-TEX STANDARD 100
              </li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              Private Label Solutions
            </h2>
            <p className="font-normal text-lg leading-8 text-gray-600 mb-12">
              Looking to grow your brand? Global Gate offers a comprehensive
              private label sourcing solution. Our designers create trendy,
              ready-to-customize styles that you can brand with your own logo
              through custom printing or embroidery. From screen printing to
              embroidery, and custom hangtags to fully compostable packaging, we
              provide end-to-end customization for your brand&#39;s unique
              needs. Let us help you take your brand to the next level with
              high-quality, sustainable, and ethically sourced apparel
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
