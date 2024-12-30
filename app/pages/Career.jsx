import React from 'react';
import { sectionContent } from "../utils/storyData";

export default function Index({ blok }) {
  const contentSection = sectionContent(blok.data.contents);
  const contentCareerOverview = sectionContent(contentSection.CareerOverview.content);
  const contentwhyUs = sectionContent(contentSection.whyUs.content);
  const contentSubmitResume = sectionContent(contentSection.SubmitResume.content);

  return (
    <main className="space-y-12">
      {/* Section 1: Career Overview */}
      <section className="bg-white px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-700 mb-6">
              <b>{contentCareerOverview.heading.content}</b>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {contentCareerOverview.content.content.split("\n\n").map((paragraph, index) => (
                <span key={index} className="block mt-4">
                  {paragraph}
                </span>
              ))}
            </p>
            <div className="mt-6">
              <a
                href={contentCareerOverview.button.link.cached_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition font-medium text-lg shadow-md"
              >
                {contentCareerOverview.button.content}
              </a>
            </div>
          </div>
          <div>
            <img
              src={contentCareerOverview.rightImage.asset.filename}
              alt="Career Overview"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Why Us */}
      <section
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 md:px-8 lg:px-16 py-12 relative"
        style={{
          backgroundImage: `url(${contentwhyUs.background.asset.filename})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center mb-6">
            <i className="fas fa-star text-yellow-400 text-5xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {contentwhyUs.heading.content}
          </h2>
          <p className="text-gray-100 leading-relaxed">
            {contentwhyUs.content.content.split("\n\n").map((paragraph, index) => (
              <span key={index} className="block mt-4">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-700 opacity-70"></div>
      </section>

      {/* Section 3: Submit Resume */}
      <section
        className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 md:px-8 lg:px-16 py-12 relative"
        style={{
          backgroundImage: `url(${contentSubmitResume.background.asset.filename})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center mb-6">
            <i className="fas fa-briefcase text-white text-5xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {contentSubmitResume.heading.content}{" "}
            <a
              href={contentSubmitResume.heading.link.cached_url}
              target="_blank"
              rel="noreferrer"
              className="underline text-white hover:text-gray-200"
            >
              here
            </a>
            ?
          </h2>
          <p className="text-gray-100 leading-relaxed">
            {contentSubmitResume.content.content}
          </p>
          <div className="mt-6">
            <a
              href={contentSubmitResume.email.link.cached_url}
              className="inline-block bg-white text-yellow-700 py-2 px-6 rounded-lg hover:bg-gray-100 transition font-medium text-lg shadow-md"
            >
              {contentSubmitResume.button.content}
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-yellow-700 opacity-70"></div>
      </section>
    </main>
  );
}
