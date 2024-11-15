import XTag from "../../components/XTag";
import { sectionContent } from "../../utils/storyData";
const highlights = ({blok}) => {
    const contentSection = sectionContent(blok.section);
    const items = contentSection.newshighlights.newsHighlights.items;
    return (
        <section class="max-w-6xl mx-auto px-4 py-16">

            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-gray-800">{contentSection.title.content}</h3>
            </div>


            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

                <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" class="block relative">
                        <img
                            src={items[0].image.filename}
                            alt="The Star MSME Article"
                            class="w-full h-48 object-cover"
                        />
                        <div class="absolute inset-0 bg-black opacity-20"></div>
                    </a>
                    <div class="p-6">
                        <h2 class="text-lg font-semibold mb-2">
                            <a href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" class="hover:text-blue-600">
                                {items[0].title}
                            </a>
                        </h2>
                        <p class="text-gray-500 text-sm mb-4">September 3, 2024</p>
                        <p class="text-gray-700 text-sm mb-4">
                            {items[0].content.content[0].content[0].text}...
                        </p>
                        <a href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" class="text-blue-600 font-semibold hover:underline">
                            Read more »
                        </a>
                    </div>
                </article>

                {items.map((item, i) => {
                    if (i > 0) {
                        return (
                            <article key={i} class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <a href="https://www.finexusgroup.com/manufacturers-edition-finexus-outlines-case-studies-and-20-must-know-irbm-e-invoicing-rules/" class="block relative">
                                    <img
                                        src={item.image.filename}
                                        alt="Manufacturers IRBM"
                                        class="w-full h-48 object-cover"
                                    />
                                    <div class="absolute inset-0 bg-black opacity-20"></div>
                                </a>
                                <div class="p-6">
                                    <h2 class="text-lg font-semibold mb-2">
                                        <a href="https://www.finexusgroup.com/manufacturers-edition-finexus-outlines-case-studies-and-20-must-know-irbm-e-invoicing-rules/" class="hover:text-blue-600">
                                        {item.title}
                                        </a>
                                    </h2>
                                    <p class="text-gray-500 text-sm mb-4">September 27, 2024</p>
                                    <p class="text-gray-700 text-sm mb-4">
                                    {item.content.content[0].content[0].text}...
                                    </p>
                                    <a href="https://www.finexusgroup.com/manufacturers-edition-finexus-outlines-case-studies-and-20-must-know-irbm-e-invoicing-rules/" class="text-blue-600 font-semibold hover:underline">
                                        Read more »
                                    </a>
                                </div>
                            </article>
                        )
                    }
                })}






            </div>


            <div class="mt-12 text-center">
                <a href="https://www.finexusgroup.com/news/" class="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">
                    <span class="mr-2">All News</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>

    )
}

export default highlights;