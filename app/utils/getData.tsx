import { getStoryblokApi } from "@storyblok/react";

const getData = async (path: string, lang: string, allStories = false) => {
  try {
    const storyblokApi = getStoryblokApi();

    if (allStories) {
      // Fetch stories for a specific year
      const { data } = await storyblokApi.get("cdn/stories", {
        version: "draft", // Use draft version for preview
        starts_with: path, // Fetch stories under the folder path
        resolve_relations: "default",
        language: lang,
      });

      //console.log(`[INFO] Fetched stories for year ${year}:`, data.stories);

      return data.stories.map((story: any) => ({
        slug: story.slug,
        content: story.content,
      }));
    } else {
      // Fetch a specific story by its path
      const { data } = await storyblokApi.get(`cdn/stories/${path}`, {
        version: "draft", // Use draft version for preview
        resolve_relations: "default",
        language: lang,
      });

      //console.log(`[INFO] Fetched single story at path ${path}:`, data.story);

      return data.story.content; // Return the specific story's content
    }
  } catch (error) {
    console.error(`[ERROR] Failed to fetch data for path "${path}":`, error);

    // Return appropriate fallback
    return allStories ? [] : null; // Empty array for yearly stories, null for a specific story
  }
};

export const getPreviousAndNextBlogs = async (currentSlug: string, slugYear: string, language: string) => {
  // Fetch all blogs for the given year
  const allBlogs = await getData(`finexusgroup/newsblogs/${slugYear}/`, language, true);

  if (!allBlogs || allBlogs.length === 0) {
    return { previous: null, next: null }; // No blogs found
  }

  // Find the index of the current blog
  const currentIndex = allBlogs.findIndex((blog:any) => blog.slug === currentSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null }; // Current blog not found
  }

  // Determine previous and next blogs
  const previous = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const next = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  return { previous, next };
};

export default getData;
