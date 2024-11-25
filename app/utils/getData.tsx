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
    // console.log('getData path:',path);
    // console.log('getData lang:',lang);
    // console.log('getData data:',data);
    return data.story.content;
  }

  export default getData;