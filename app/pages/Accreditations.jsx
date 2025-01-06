import React from "react";
import { sectionContent } from "../utils/storyData";

export default function AccreditationPage({ blok }) {
  const contentSection = sectionContent(blok.data.contents);

  const contentLicensesIntro = sectionContent(contentSection.LicensesIntro.content);
  const contentCapabilitiesGrid = sectionContent(contentSection.CapabilitiesGrid.content);
  const contentSearchLinks = sectionContent(contentSection.SearchLinks.content);
  const contentAccreditationDetails = sectionContent(contentSection.AccreditationDetails.content);

  return (
    <main className="bg-white">
      {/* Licenses Intro Section */}
      <section className="py-12 text-center bg-gray-50">
        <h3 className="text-2xl font-semibold tracking-wider text-gray-800 uppercase">
          {contentLicensesIntro.heading.content}
        </h3>
        <div className="flex justify-center mt-6">
          <img
            src={contentLicensesIntro.licenses.asset.filename}
            alt={contentLicensesIntro.licenses.asset.alt || "Accreditations"}
            className="w-full max-w-6xl object-contain"
          />
        </div>
      </section>

      {/* Capabilities Grid Section */}
      <section className="py-12 bg-white">
        <h4 className="text-xl font-medium text-center text-gray-800">
          {contentCapabilitiesGrid.heading.content}
        </h4>
        <div className="grid grid-cols-1 gap-8 px-4 mt-8 sm:grid-cols-3 lg:px-32">
          {contentCapabilitiesGrid.Capabilities.items.map((capability, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white border-2 border-yellow-400 rounded-lg shadow hover:shadow-md"
            >
              {capability.content.content.map((block, blockIndex) => (
                <h3
                  key={blockIndex}
                  className="text-lg font-medium text-gray-800 leading-6"
                >
                  {block.content.map((text, textIndex) => (
                    <span
                      key={textIndex}
                      className={text.marks ? "font-bold" : ""}
                    >
                      {text.text}
                    </span>
                  ))}
                </h3>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Search Links Section */}
      <section className="py-12 bg-gray-200">
        <h4 className="text-xl font-medium text-center text-gray-800">
          {contentSearchLinks.heading.content}
        </h4>
        <div className="grid grid-cols-1 gap-8 px-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {contentSearchLinks.searchlinks.items.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between p-6 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md"
            >
              <img
                src={link.items[0].asset.filename}
                alt={link.items[0].asset.alt || "Logo"}
                className="h-16 mb-4"
              />
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                {link.items[1].content}
              </h2>
              <a
                href={link.items[2].link.cached_url}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                {link.items[2].content}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditation Details Section */}
      <section className="py-12 bg-gray-50">
        {contentAccreditationDetails.Accreditation.content.content.map((block, index) => {
          if (block.type === "heading") {
            const HeadingTag = `h${block.attrs.level}`;
            return (
              <HeadingTag
                key={index}
                className={`${
                  block.attrs.level === 4 ? "text-lg" : "text-xl"
                } font-semibold text-center text-gray-800`}
              >
                {block.content.map((text, textIndex) => (
                  <span
                    key={textIndex}
                    className={text.marks ? "font-bold" : ""}
                  >
                    {text.text}
                  </span>
                ))}
              </HeadingTag>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={index} className="mt-4 text-center text-gray-600">
                {block.content.map((text, textIndex) => (
                  text.marks?.find((mark) => mark.type === "link") ? (
                    <a
                      key={textIndex}
                      href={text.marks.find((mark) => mark.type === "link").attrs.href}
                      className="text-blue-500 underline"
                    >
                      {text.text}
                    </a>
                  ) : (
                    <span key={textIndex}>{text.text}</span>
                  )
                ))}
              </p>
            );
          }

          return null;
        })}
      </section>
    </main>
  );
}
