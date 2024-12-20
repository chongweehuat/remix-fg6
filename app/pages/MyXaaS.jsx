const MyXaaS = ({blok})=>{
    
        return (
          <div>
            {/* Section: Finexus is built different */}
            <section className="bg-white py-12">
              <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">FINEXUS is built different!</h2>
              </div>
            </section>
      
            {/* Section: MyXaaS Innovation Platform */}
            <section className="bg-gray-50 py-12">
              <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">MyXaaS Innovation Platform</h3>
                  <h1 className="text-3xl font-bold text-gray-800 mt-2">Objectives</h1>
                </div>
                <div>
                  <p className="text-gray-700">
                    We like to be agents of change by taking care of what matters now. We strive to help start-ups, entrepreneurs, and socialpreneurs by providing them with enabling technologies, financial services, and business advisory support.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Uniquely, Finexus is the only company in Malaysia offering <strong>MyXaaS – Everything as a Service</strong>. Some have IaaS, SaaS, or FaaS, but FINEXUS combines all into the <strong>MyXaaS Innovation Platform</strong>.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Section: More about MyXaaS */}
            <section className="bg-white py-8">
              <div className="container mx-auto text-center">
                <a
                  href="https://myxaas.finexusgroup.com/"
                  className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded shadow hover:bg-blue-700 transition"
                >
                  More about MyXaaS
                </a>
              </div>
            </section>
      
            {/* Section: MyXaaS Features */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 text-white">
              <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold">What is in the MyXaaS Innovation Platform?</h2>
                <p className="text-center text-lg mt-4">
                  With Open APIs, we allow start-ups, entrepreneurs, and mid-growth companies to access our technology and financial services.
                </p>
              </div>
      
              <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <div>
                  <h4 className="text-xl font-semibold">Infrastructure as a Service</h4>
                  <p className="mt-2">
                    We host our payment systems at PCI-DSS Level 1 and Tier III Certified Infrastructure with 99.5% uptime.
                  </p>
                </div>
      
                {/* Feature 2 */}
                <div>
                  <h4 className="text-xl font-semibold">Software as a Service</h4>
                  <ul className="mt-2 list-disc list-inside">
                    <li>E-KYC (Identification and Verification)</li>
                    <li>Customer Credit Scoring</li>
                    <li>Digital Signatures</li>
                    <li>E-Wallets / Prepaid Cards</li>
                  </ul>
                </div>
              </div>
            </section>
      
            {/* Section: MyXaaS Financial as a Service */}
            <section className="bg-gray-50 py-12">
              <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold">MyXaaS <i>Everything as a Service</i> Innovation Platform</h2>
                <h3 className="text-center text-xl font-medium mt-4">Start-up Ecosystem Community</h3>
                <div className="mt-8 text-center">
                  <img
                    src="https://www.finexusgroup.com/wp-content/uploads/2023/08/FNX-Group-MyXaas-Main-Diagram-V7-en.png"
                    alt="MyXaaS Platform Diagram"
                    className="mx-auto max-w-full h-auto"
                  />
                </div>
              </div>
            </section>
      
            {/* Section: SaaS */}
            <section className="bg-white py-12">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">SaaS</h2>
                <div className="my-4 h-1 bg-gray-200 mx-auto w-20"></div>
                <h3 className="text-xl italic font-medium">Software as a Service Depository</h3>
                <div className="mt-8">
                  <img
                    src="https://www.finexusgroup.com/wp-content/uploads/2023/08/FNX-Group-MyXaas-SaaS-Diagram-V6-en.png"
                    alt="SaaS Diagram"
                    className="mx-auto max-w-full h-auto"
                  />
                </div>
              </div>
            </section>
      
            {/* Section: FaaS */}
            <section className="bg-gray-50 py-12">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">FaaS</h2>
                <div className="my-4 h-1 bg-gray-200 mx-auto w-20"></div>
                <h3 className="text-xl italic font-medium">Financial as a Service Depository</h3>
                <div className="mt-8">
                  <img
                    src="https://www.finexusgroup.com/wp-content/uploads/2024/05/EN-FNX-Group-MyXaas-FaaS-Diagram-V8.png"
                    alt="FaaS Diagram"
                    className="mx-auto max-w-full h-auto"
                  />
                </div>
              </div>
            </section>
          </div>
        );
      }
              
export default MyXaaS;