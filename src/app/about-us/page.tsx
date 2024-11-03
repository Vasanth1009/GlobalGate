import Image from 'next/image';
import Navbar from '../components/Navigation/Navbar';
import AboutUsImg from '/public/aboutus.jpeg';
import AboutUsImg3 from '/public/aboutus3.jpg';
import Footer from '../components/Home/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="mx-8 py-[24px] sm:mx-auto">
        <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
              Welcome to
              <span className="text-indigo-600"> Global Gate </span>
            </h1>
            <p className="max-w-sm mx-auto text-center text-lg font-normal leading-7 text-gray-500 mb-9">
              Your Premier Apparel and Home Textiles Sourcing Partner
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box mt-10">
                <Image
                  src={AboutUsImg}
                  alt="About Us tailwind page"
                  className="max-lg:mx-auto object-cover rounded-xl"
                  width={600}
                  height={600}
                />
              </div>
              <div className="lg:pl-[100px] flex items-center max-lg:px-10">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-3xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                    About Us
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-sm max-lg:text-center max-w-2xl mx-auto">
                    Located in the dynamic textile hub of Tirupur, India, Global
                    Gate is your trusted gateway to quality apparel and home
                    textiles. With over 28 years of industry experience, we
                    bring your vision to life through a seamless sourcing
                    process, connecting you with a network of highly reliable
                    suppliers and manufacturers. We specialize in transforming
                    your ideas into exceptional products, making us a true
                    partner in your journey from concept to creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="lg:pr-24 flex items-center">
                <div className="data w-full">
                  <Image
                    src={AboutUsImg3}
                    alt="About Us tailwind page"
                    className="block lg:hidden mb-9 mx-auto object-cover rounded-xl"
                    width={600}
                    height={600}
                  />
                  <h2 className="font-manrope font-bold text-2xl lg:text-5xl text-black mb-9 max-lg:text-center">
                    Why Global Gate?
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:px-10 max-lg:text-center max-w-2xl mx-auto">
                    Pagedone isn’t just a collection of components and
                    guidelines; it's a philosophy. We go beyond aesthetics,
                    prioritizing accessibility, scalability, and usability.
                    Every element, from the tiniest detail to the grandest
                    layout, is meticulously crafted to enhance functionality and
                    elevate user satisfaction.
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <Image
                  src={AboutUsImg3}
                  alt="About Us tailwind page"
                  className="hidden lg:block object-cover rounded-xl"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              What We Offer
            </h2>
            <div className="flex m-3 flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Apparel &amp; Home Textiles Expertise
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      With a dedicated focus on both apparel and home textiles,
                      we provide a broad range of services to meet your sourcing
                      needs—whatever your style, budget, or customization
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Trusted Supplier Network
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      Our longstanding relationships with suppliers and
                      manufacturers allow us to provide diverse, competitively
                      priced, and high-quality materials, fabrics, and
                      accessories.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Sustainable &amp; Ethical Practices
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      Sustainability is woven into our core. We are committed to
                      sourcing responsibly, minimizing our environmental impact,
                      and supporting fair and ethical labour practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex m-3 flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-evenly">
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      End-to-End Quality Control
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      Quality is at the heart of everything we do. Our rigorous
                      quality assurance processes ensure that every piece meets
                      the highest standards, from fabric selection to final
                      production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Fast &amp; Efficient Processes
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      Our team works ahead of schedule, allowing us to respond
                      quickly to client needs. Regular training ensures our team
                      remains up-to-date with the latest industry standards,
                      techniques, and sustainability practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              Our Core Values
            </h2>
            <div className="flex m-3 flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Transparency &amp; Communication
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      We believe in open and honest communication, keeping you
                      informed at every stage to foster a reliable and
                      collaborative partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Innovation in Sustainability
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      Our mission is to create fashion that’s good for people
                      and the planet. We lead the way in developing sustainable
                      fabrics, responsibly managing resources, and protecting
                      our environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 font-semibold mb-2">
                      Customer-Centric Approach:
                    </h4>
                    <p className="text-sm text-gray-500 leading-5">
                      Every decision we make centres around our customers’
                      needs, ensuring your vision is brought to life with
                      efficiency and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-24 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-lg:px-10">
            <div className="mb-24">
              <h2 className="font-manrope text-2xl lg:text-5xl text-center font-bold text-gray-900 mb-6">
                Transform Your Fashion Venture with Global Gate
              </h2>
              <p className="text-base lg:text-lg text-gray-500 text-center">
                Our professional sourcing solutions streamline the complexities
                of the textile industry, empowering you to launch or expand your
                brand with ease and confidence. From premium materials to
                tailored designs, our services allow you to access high-quality
                sourcing solutions right from the heart of India’s textile
                industry. Let us be the driving force behind your next great
                collection. At Global Gate, we don’t just source apparel and
                textiles—we build relationships and deliver results that make a
                lasting impact.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
