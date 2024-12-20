const DataProcessor = ({blok})=> {
    return (
      <div className="bg-gray-50">
        {/* Section 1: Data Processor */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Data Processor</h1>
            </div>
            {/* Right Column */}
            <div>
              <p className="text-gray-700 mb-4">
                You will need a committed technology partner with the experience and technical expertise to manage your systems and business processes so that you can unlock cost efficiencies while you focus on your competitive core business competencies.
              </p>
              <p className="text-gray-700 mb-4">
                We offer Data Processor Services for 3D Secure, Acquiring and Issuing Systems, and Payment Gateway Services for DuitNow, Visa, Mastercard, UnionPay, etc., using our in-house developed, full-suite Payment Application Solutions.
              </p>
              <p className="text-gray-700 mb-4">
                In fact, we have been providing connectivity services to payment networks including Visa via EAS, Mastercard via MIPS, and UnionPay via UPI Network for our clients. Leverage on us and get faster certification and seamless business operations.
              </p>
              <p className="text-gray-700 mb-4">
                We also provide ATM Acquiring/Switch Solutions enabling ATM services such as cash withdrawal, fund transfer, PIN change, balance inquiry, cash deposit (via CDM), and more.
              </p>
              <p className="text-gray-700">
                That’s why FINEXUS is the perfect strategic partner for your outsourcing needs.
              </p>
            </div>
          </div>
        </section>
  
        {/* Section 2: Outsourcing Services */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              We offer a comprehensive range of outsourcing services <br />
              <span className="text-lg font-semibold">
                IT Outsourcing (ITO) and Business Processes Outsourcing (BPO)
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: ITO */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">CARD AND PAYMENT SYSTEMS (ITO)</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Direct Payment Connectivity (for Visa, Mastercard, UnionPay)</li>
                  <li>Issuance of Cards and/or Wallets Business (Consumers)</li>
                  <li>Acquiring Business (Merchants)</li>
                  <li>Payment Gateway (E-Commerce business)</li>
                  <li>
                    Supply and Installation of MPOS, EDC, and Mobile App serving merchants and consumers
                  </li>
                  <li>ATM Switch Business</li>
                </ul>
              </div>
              {/* Right Column: BPO */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">BUSINESS PROCESSES OUTSOURCING (BPO)</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Card-Related Business End-to-End Backroom Operation Services</li>
                  <li>Card or E-Wallets Consumers Application Processing</li>
                  <li>Credit Risk Analysis, if any</li>
                  <li>Merchants Processing Authorization Services</li>
                  <li>Regulatory and Card Brand Compliance Services</li>
                  <li>Risk and Fraud Detection and Management Services</li>
                  <li>Card Brand Financial Clearing and Settlement Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 3: Certifications */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Certifications and Capabilities
            </h3>
            <p className="text-center text-gray-700">
              We are PCI DSS Level 1 validated, and our Data Centres are Tier-3 status certified. Moreover, we have a big team of strong competent technical software engineers capable of customizing solutions to your local needs.
            </p>
          </div>
        </section>
      </div>
    );
  }
  export default DataProcessor;