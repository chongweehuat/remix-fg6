import React, { useState } from "react";
import { sectionContent } from "../utils/storyData";

const ContactUs = ({ blok }) => {
  const [category, setCategory] = useState("");
  const [subjectMatter, setSubjectMatter] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState([]);

  // Parse content from Storyblok
  const contentSection = sectionContent(blok.data.contents);
  const contentFormLabel = sectionContent(contentSection.form_label.content);
  const contentOffices = sectionContent(contentSection.offices.content);
  const contentGoogleMap = contentSection.googlemap;
  const contentFormOptions = contentSection.form_options.content;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubjectMatter(""); // Reset subject matter when category changes
    setAdditionalOptions([]); // Reset additional options
  };

  const handleSubjectChange = (e) => {
    const selectedCategory = contentFormOptions.find(
      (option) => option.label === category
    );
    const selectedSubject = selectedCategory?.suboption.find(
      (option) => option.label === e.target.value
    );

    setSubjectMatter(e.target.value);
    setAdditionalOptions(selectedSubject?.suboption || []); // Update additional options
  };

  const renderCategoryOptions = () => {
    return contentFormOptions.map((option) => (
      <option key={option._uid} value={option.label}>
        {option.label}
      </option>
    ));
  };

  const renderSubjectOptions = () => {
    const selectedCategory = contentFormOptions.find(
      (option) => option.label === category
    );
    if (!selectedCategory) return null;

    return selectedCategory.suboption.map((subOption) => (
      <option key={subOption._uid} value={subOption.label}>
        {subOption.label}
      </option>
    ));
  };

  const renderAdditionalOptions = () => {
    if (additionalOptions.length === 0) return null;

    return (
      <div className="mt-4">
        <label className="block font-medium text-darkblue dark:text-white">
          Find out about Finexus or AREMA in:
        </label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {additionalOptions.map((option) => (
            <label
              key={option._uid}
              className="flex items-center space-x-2 text-darkblue dark:text-white"
            >
              <input
                type="checkbox"
                name="checkbox[]"
                value={option.label}
                className="rounded text-yellow-500 focus:ring-yellow-500 dark:bg-gray-800 dark:border-gray-700"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const renderOffices = () =>
    Object.keys(contentOffices).map((officeKey) => {
      const office = contentOffices[officeKey];
      const name = office.items.find((item) => item.name === "name")?.content;
      const location =
        office.items.find((item) => item.name === "location")?.content;
      const address =
        office.items.find((item) => item.name === "address")?.content;
      const tel1 = office.items.find((item) => item.name === "tel1")?.content;
      const tel2 = office.items.find((item) => item.name === "tel2")?.content;
      const tel3 = office.items.find((item) => item.name === "tel3")?.content;
      const wazeLink =
        office.items.find((item) => item.name === "waze")?.link?.url || "#";
      const googleMapLink =
        office.items.find((item) => item.name === "google_map")?.link?.url ||
        "#";

      return (
        <OfficeCard
          key={officeKey}
          title={name}
          subtitle={location}
          address={address}
          phone1={tel1}
          phone2={tel2}
          phone3={tel3}
          wazeLink={wazeLink}
          googleMapLink={googleMapLink}
        />
      );
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-bold text-darkblue dark:text-white">
            {contentFormLabel.form_heading.content}
          </h3>
          <h1 className="text-2xl font-semibold mt-2 text-darkblue dark:text-white">
            {contentFormLabel.form_sub_heading.content}
          </h1>
          <form className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-medium text-darkblue dark:text-white"
              >
                {contentFormLabel.name.content}
              </label>
              <input
                id="name"
                type="text"
                className="border border-gray-300 rounded-md p-2 bg-white text-darkblue dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-medium text-darkblue dark:text-white"
              >
                {contentFormLabel.email.content}
              </label>
              <input
                id="email"
                type="email"
                className="border border-gray-300 rounded-md p-2 bg-white text-darkblue dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="contactNumber"
                className="font-medium text-darkblue dark:text-white"
              >
                {contentFormLabel.contact_number.content}
              </label>
              <input
                id="contactNumber"
                type="text"
                className="border border-gray-300 rounded-md p-2 bg-white text-darkblue dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="font-medium text-darkblue dark:text-white"
              >
                {contentFormLabel.category.content}
              </label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="border border-gray-300 rounded-md p-2 bg-white text-darkblue dark:bg-gray-800 dark:text-white"
                required
              >
                <option value="">- Select -</option>
                {renderCategoryOptions()}
              </select>
            </div>
            {category && (
              <div className="flex flex-col">
                <label
                  htmlFor="subjectMatter"
                  className="font-medium text-darkblue dark:text-white"
                >
                  {contentFormLabel.subject.content}
                </label>
                <select
                  id="subjectMatter"
                  value={subjectMatter}
                  onChange={handleSubjectChange}
                  className="border border-gray-300 rounded-md p-2 bg-white text-darkblue dark:bg-gray-800 dark:text-white"
                  required
                >
                  <option value="">- Select -</option>
                  {renderSubjectOptions()}
                </select>
              </div>
            )}
            {renderAdditionalOptions()}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="font-medium text-darkblue dark:text-white"
              >
                {contentFormLabel.message.content}
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-md p-2 bg-white text-darkblue dark:bg-gray-800 dark:text-white"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              {contentFormLabel.send.content}
            </button>
          </form>
        </div>
        {/* Google Map */}
        <div className="map-container">
          <iframe
            src={contentGoogleMap.link.cached_url}
            title={contentGoogleMap.content}
            className="w-full h-[600px] rounded-md border border-gray-300 md:h-[500px] lg:h-[600px]"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* Offices Section */}
      <section className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {renderOffices()}
      </section>
    </div>
  );
};

const OfficeCard = ({
  title,
  subtitle,
  address,
  phone1,
  phone2,
  phone3,
  wazeLink,
  googleMapLink,
}) => (
  <div className="p-4 border border-gray-200 rounded-lg bg-lightgray shadow-md">
    <h3 className="text-lg font-bold text-darkblue uppercase">{title}</h3>
    <h4 className="text-md font-semibold mt-1 text-yellow-500">{subtitle}</h4>
    <ul className="mt-4 space-y-2">
      <li className="flex items-start">
        <i className="fas fa-building text-yellow-500 mr-2"></i>
        <span>{address}</span>
      </li>
      {phone1 && (
        <li className="flex items-center">
          <i className="fas fa-phone-alt text-yellow-500 mr-2"></i>
          {phone1}
        </li>
      )}
      {phone2 && (
        <li className="flex items-center">
          <i className="fas fa-phone-alt text-yellow-500 mr-2"></i>
          {phone2}
        </li>
      )}
      <li className="flex space-x-4 mt-2">
        <a
          href={wazeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline"
        >
          Waze
        </a>
        <a
          href={googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline"
        >
          Google Maps
        </a>
      </li>
    </ul>
  </div>
);

export default ContactUs;
