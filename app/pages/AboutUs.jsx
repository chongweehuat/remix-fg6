import { Link } from "@remix-run/react";

const AboutUs = ({blok}) => {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Finexus Group of Companies</h3>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Leading technology and financial services companies connecting
                and serving consumers, businesses, banks, and central banks.
              </h1>
            </div>
            <div>
              <p className="text-gray-700">
                We are headquartered in Kuala Lumpur, Malaysia, with business
                interests extending from Malaysia and ASEAN to Europe and the USA.
                Currently, we serve over 100 banks and FinTech companies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            We are a diversified technology financial services company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold">We are a</h4>
              <p className="text-lg">
                Regulatory Reporting Solutions Provider for the whole banking
                industry in Malaysia.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">We are a</h4>
              <p className="text-lg">
                Regulatory Payment Solutions Provider for systems like RENTAS, RPP,
                DuitNow, and IBG.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">We are a</h4>
              <p className="text-lg">
                Data Processor for DuitNow, Visa, Mastercard, WeChat Pay, Alipay,
                and others.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">We are a</h4>
              <p className="text-lg">
                Digital Money Services Provider licensed by Central Bank of Malaysia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Headquarters and Presence in Asia Pacific
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold">HEADQUARTERS</h3>
              <h4 className="text-lg font-medium">Finexus Campus</h4>
              <p className="text-gray-700">
                FINEXUS Group of companies are currently headquartered in{" "}
                <b>Finexus Campus</b>, Titiwangsa Sentral, Kuala Lumpur,
                Malaysia. The building is a 5-level, 50,000sf signature office
                with amenities, a lifestyle café, and lounges.
              </p>
            </div>
            <div>
              <img
                src="/path-to-image/campus.jpg"
                alt="Finexus Campus"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Want to learn more about our Kayaaku eWallet, cards or merchant
            services?
          </h2>
          <p className="mt-4">
            Visit{" "}
            <Link
              to="https://home.finexuscards.com"
              className="underline font-semibold hover:text-blue-300"
            >
              https://home.finexuscards.com
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
export default AboutUs;