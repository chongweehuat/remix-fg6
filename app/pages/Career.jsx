const Career = ({blok})=> {
    return (
      <section className="bg-white py-12">
        {/* Container */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Text Content */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Embark on a Journey with Us
              </h2>
              <p className="text-gray-700 mb-4">
                Are you keen on a stimulating and rewarding career in a growing and progressive technology company that is focused on developing financial services to benefit the world?
              </p>
              <p className="text-gray-700 mb-4">
                You have plenty of opportunities in Finexus Group, ranging from technical roles and business advisors to financial and administration service providers.
              </p>
              <p className="text-gray-700 mb-6">
                Take a moment to explore the available positions and find where you could potentially fit in.
              </p>
              <div>
                <a
                  href="https://jobs.talentcloud.ai/finexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-600 text-white font-medium text-sm px-6 py-3 rounded-md shadow hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Open Positions
                </a>
              </div>
            </div>
  
            {/* Right Column: Image */}
            <div>
              <img
                src="https://www.finexusgroup.com/wp-content/uploads/2019/08/bump-collaboration-colleagues-1068523.jpg"
                alt="Colleagues fist-bumping at desk, working collaboratively"
                className="w-full h-auto rounded-md shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default  Career;