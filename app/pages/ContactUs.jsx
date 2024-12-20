import { Form } from "@remix-run/react";

const ContactUs = ({ blok }) => {
  return (
    <section className="bg-white py-12">
      {/* Container */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}
          <div>
            <h3 className="text-lg font-bold uppercase text-gray-700 mb-4">
              Do Get In Touch With Us
            </h3>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              We would be happy to assist you
            </h1>
            <Form method="post" className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contact-number" className="block text-sm font-medium text-gray-700">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact-number"
                  name="contact-number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>

              {/* Institution / Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Institution / Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </Form>
          </div>

          {/* Right Column: Google Map */}
          <div className="relative">
            <iframe
              loading="lazy"
              src="//maps.google.com/maps?q=FINEXUS%20Campus&t=m&z=14&output=embed&iwloc=near"
              title="FINEXUS Campus"
              aria-label="FINEXUS Campus"
              className="w-full h-96 border border-gray-300 rounded-md shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
