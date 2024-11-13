import { getStoryblokApi  } from "@storyblok/react";

const getData = async(path:any,lang:any) =>{
    const {data} = await getStoryblokApi()
    .get(`cdn/stories/${path}`,{
      version: "draft",
      resolve_relations: "default",
      language: lang
    })
    .catch((e) => {
      console.log("e", e);
      return { data: null };
    });
  
    return data.story.content;
  }

  export default getData;