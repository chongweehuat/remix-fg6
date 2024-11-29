import { getStoryblokApi } from "@storyblok/react";

const getData = async (path: string, lang: string, allStories = false) => {
  try {
    const storyblokApi = getStoryblokApi();

    if (allStories) {
      // Fetch all stories under the specified folder
      const { data } = await storyblokApi.get("cdn/stories", {
        version: "draft", // Use draft version for preview
        starts_with: path, // Fetch stories under the folder path
        resolve_relations: "default",
        language: lang,
      });

      return data.stories.map((story:any) => story.content); // Return all stories' content as an array
    } else {
      // Fetch a specific story using the full path (path + slug)
      const { data } = await storyblokApi.get(`cdn/stories/${path}`, {
        version: "draft", // Use draft version for preview
        resolve_relations: "default",
        language: lang,
      });

      return data.story.content; // Return the specific story's content
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return allStories ? [] : null; // Return an empty array for allStories, null for single story
  }
};

export default getData;
