const Arema = ({blok}) => {
  return (
    <section id="arema-contact_form-anchor" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Logo and Carousel Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Logo */}
            <img
              src="/path-to-assets/arema-logo.svg"
              alt="Logo of Arema, by Finexus Group"
              className="w-32 mx-auto md:mx-0"
            />
            {/* Heading */}
            <h4 className="text-2xl font-bold text-gray-800 text-center md:text-left">
              Finexus Group proud moment …
            </h4>
            {/* Carousel */}
            <div className="relative">
              <div className="swiper-container overflow-hidden">
                <div className="swiper-wrapper flex space-x-4">
                  <div
                    className="swiper-slide bg-cover bg-center w-80 h-48"
                    style={{
                      backgroundImage:
                        "url('https://www.finexusgroup.com/wp-content/uploads/2024/07/arema-carousel_img1.png')",
                    }}
                  ></div>
                  <div
                    className="swiper-slide bg-cover bg-center w-80 h-48"
                    style={{
                      backgroundImage:
                        "url('https://www.finexusgroup.com/wp-content/uploads/2024/07/arema-carousel_img2.png')",
                    }}
                  ></div>
                  <div
                    className="swiper-slide bg-cover bg-center w-80 h-48"
                    style={{
                      backgroundImage:
                        "url('https://www.finexusgroup.com/wp-content/uploads/2024/07/mdec-letter.png')",
                    }}
                  ></div>
                </div>
              </div>
              <div className="swiper-buttons absolute inset-0 flex justify-between items-center px-4">
                <button
                  aria-label="Previous slide"
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  aria-label="Next slide"
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Please fill in the information below and we will contact you right
              away.
            </h3>
            <form method="POST" className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Company Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium text-gray-700">
                  Handphone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Arema;