import { getStoryblokApi } from "@storyblok/react";

const CMSPATH = typeof window === "undefined" 
? process.env.CMSPATH || "finexusgroup"
: window.env.CMSPATH|| "finexusgroup";


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

      return data?.story?.content ?? null; 
    }
  } catch (error) {
    console.error(`[ERROR] Failed to fetch data for path "${path}":`, error);

    // Return appropriate fallback
    return allStories ? [] : null; // Empty array for yearly stories, null for a specific story
  }
};

export const getPreviousAndNextBlogs = async (currentSlug: string, slugYear: string, language: string) => {
  const year = parseInt(slugYear, 10);

  // Fetch all blogs for the given year
  const allBlogs = await getData(`${CMSPATH}/newsblogs/${year}/`, language, true);

  if (!allBlogs || allBlogs.length === 0) {
    return { previous: null, next: null }; // No blogs found
  }

  // Find the index of the current blog
  const currentIndex = allBlogs.findIndex((blog: any) => blog.slug === currentSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null }; // Current blog not found
  }

  // Determine previous and next blogs within the current year
  let previous = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  let next = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  // Fetch from the previous year if needed
  if (!previous) {
    const previousYearBlogs = await getData(`${CMSPATH}/newsblogs/${year - 1}/`, language, true);
    if (previousYearBlogs && previousYearBlogs.length > 0) {
      previous = previousYearBlogs[previousYearBlogs.length - 1]; // Last blog of the previous year
    }
  }

  // Fetch from the next year if needed
  if (!next) {
    const nextYearBlogs = await getData(`${CMSPATH}/newsblogs/${year + 1}/`, language, true);
    if (nextYearBlogs && nextYearBlogs.length > 0) {
      next = nextYearBlogs[0]; // First blog of the next year
    }
  }

  return { previous, next };
};

export default getData;
