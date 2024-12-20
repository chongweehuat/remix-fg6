const Accreditations = ({blok})=> {
    return (
      <div className="bg-gray-50 py-12">
        <section className="container mx-auto px-4 lg:px-8">
          {/* Section 1: Intro and Accreditations Image */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Licenses and Accreditations are
            </h3>
            <img
              src="https://www.finexusgroup.com/wp-content/uploads/2023/08/Accreditations-Centered-V4.png"
              alt="Accreditations centered v4"
              className="w-full max-w-4xl mx-auto"
              loading="lazy"
            />
          </div>
  
          {/* Section 2: Licenses Capabilities */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 text-center mb-8">
              With the licenses, we are able to
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Issue <b>Visa</b> and <b>Mastercard</b> Prepaid Cards / E-Wallets
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Appoint Merchants and acquire payments for <b>Visa</b> and <b>Mastercard</b> brands transactions
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Appoint Merchants and acquire payments for <b>DuitNow</b>, <b>Alipay</b>, and <b>Alipay Plus</b>
                </h3>
              </div>
            </div>
          </div>
  
          {/* Section 3: Links to Partner Websites */}
          <div className="text-center mb-12">
            <p className="text-gray-700 mb-6">
              Please visit the following websites to search for FINEXUS Cards Sdn Bhd
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bank Negara */}
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src="https://www.finexusgroup.com/wp-content/uploads/2019/08/logo-BNM-20x7.jpg"
                  alt="Logo of Bank Negara Malaysia"
                  className="h-20 mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Bank Negara Malaysia</h2>
                <a
                  href="https://www.bnm.gov.my/list-of-regulatees"
                  target="_blank"
                  rel="nofollow"
                  className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                >
                  Search
                </a>
              </div>
  
              {/* DuitNow */}
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src="https://www.finexusgroup.com/wp-content/uploads/2021/12/DuitNow-Logo.svg"
                  alt="DuitNow Logo"
                  className="h-20 mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-4">DuitNow</h2>
                <a
                  href="https://www.duitnow.my/"
                  target="_blank"
                  className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                >
                  Search
                </a>
              </div>
  
              {/* Alipay */}
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img
                  src="https://www.finexusgroup.com/wp-content/uploads/2021/12/Alipay-Logo.svg"
                  alt="Alipay Logo"
                  className="h-20 mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Alipay</h2>
                <a
                  href="https://intl.alipay.com/"
                  target="_blank"
                  className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
  
          {/* Section 4: Additional Accreditation Links */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 text-center mb-8">
              With the accreditations, we are able to
            </h4>
            <h2 className="text-lg font-medium text-center text-gray-700 mb-6">
              Offer our data processor services to members of <br />
              <b>Visa</b>, <b>Mastercard</b>, <b>Alipay</b>, and <b>Alipay Plus</b>.
            </h2>
            <p className="text-gray-700 text-center">
              Our Data Processor approval is listed in both{' '}
              <a
                href="https://www.visa.com/splisting/searchGrsp.do"
                className="text-yellow-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visa
              </a>{' '}
              and{' '}
              <a
                href="https://www.mastercard.com.my/en-my/consumers/find-card-products/prepaid-card-issuers.html"
                className="text-yellow-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mastercard
              </a>{' '}
              websites.
            </p>
          </div>
        </section>
      </div>
    );
  }
export default Accreditations;  