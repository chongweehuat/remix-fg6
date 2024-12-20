const DigitalMoney = ({blok}) => {
    return (
      <div className="bg-gray-50">
        {/* Section 1: Digital Money */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">DIGITAL MONEY</h2>
            </div>
            {/* Right Column */}
            <div>
              <p className="text-gray-700 mb-4">
                We obtained our approval for our E-Money license from BNM end-March 2016 to issue prepaid cards and/or wallets to the public consumers and also to acquire merchants’ payments.
              </p>
              <p className="text-gray-700 mb-4">
                We offer global acceptance prepaid Visa and Mastercard wallets and acquire Visa, Mastercard, Alipay, and Alipay Plus payments to provide financial services.
              </p>
              <p className="text-gray-700 mb-4">
                We are also the national QR Code DuitNow Sponsor Institution and Direct Participant, offering DuitNow QR payment and funds transfer.
              </p>
              <p className="text-gray-700 mb-4">
                With DuitNow, merchants can accept electronic payments via QR Code, EDC/MPOS terminals, and E-Commerce payment gateway.
              </p>
              <p className="text-gray-700">
                Please refer to <a href="https://www.bnm.gov.my/list-of-regulatees" className="text-blue-600 font-bold" target="_blank" rel="noopener noreferrer">Bank Negara Malaysia</a> and search for FINEXUS Cards Sdn Bhd.
              </p>
            </div>
          </div>
        </section>
  
        {/* Section 2: Bank Negara Malaysia */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column */}
              <div className="text-center md:text-left">
                <img
                  src="https://www.finexusgroup.com/wp-content/uploads/2019/08/logo-BNM.jpg"
                  alt="Logo of Bank Negara Malaysia"
                  className="mx-auto md:mx-0 h-24 w-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                  Bank Negara Malaysia
                </h2>
                <a
                  href="https://www.bnm.gov.my/list-of-regulatees"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 3: Licensing and Offerings */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <p className="text-gray-700 mb-4">
                We can issue Wallets / Prepaid Cards that can transfer funds via DuitNow, Visa, and Mastercard.
              </p>
              <p className="text-gray-700 mb-4">
                Not only that, we can also facilitate payment acquiring for merchants using DuitNow, Visa, Mastercard, Alipay, and Alipay Plus.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>DuitNow (Issuing & Acquiring)</li>
                <li>Visa (Issuing & Acquiring)</li>
                <li>Mastercard (Issuing & Acquiring)</li>
                <li>Alipay (Acquiring)</li>
                <li>Alipay Plus (Acquiring)</li>
              </ul>
            </div>
            {/* Right Column */}
            <div>
              <p className="text-gray-700 mb-4">
                We offer our technology financial services platform called <span className="font-bold text-yellow-500">Kayaaku FinTech Platform</span> and it provides services such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>DuitNow Funds Transfer in / out from / to the Banking Industry</li>
                <li>Wallet / Card</li>
                <li>Acquiring Payment</li>
                <li>Remittances</li>
                <li>Payment Gateway (E-Commerce)</li>
                <li>Mobile App (<span className="font-bold text-yellow-500">Kayaaku</span>)</li>
                <li>Finexus’s Android EDC (wireless-capable – GPRS / 3G / 4G and WiFi)</li>
                <li>MPOS</li>
                <li>Salary Crediting</li>
                <li>More services coming soon (e.g., Airtime top-up, Insurance, Commission, etc.)</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Section 4: Call to Action */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Do you want to apply for a <br />
                Finexus Prepaid E-Wallet / Card?
              </h2>
              <p className="mt-4">
                Visit{" "}
                <a
                  href="https://www.finexuscards.com"
                  className="text-blue-600 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.finexuscards.com
                </a>
              </p>
            </div>
            {/* Right Column */}
            <div className="text-center">
              <a
                href="https://www.finexuscards.com"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <img
                  src="https://www.finexusgroup.com/wp-content/uploads/2019/08/finexuscard.png"
                  alt="Finexus Card"
                  className="mx-auto h-64 w-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
export default DigitalMoney;  