import reduceArrayByKey from "./reduceArrayByKey";
import { richTextResolver } from "@storyblok/richtext";

const storyData = (story: any) => {
    const contents =reduceArrayByKey(story.contents,"name");
    const styles=reduceArrayByKey(story.styles,"name");
    return {contents, styles};
}

const storyContent = (story: any, tag: string) => {
    const contents = reduceArrayByKey(story.contents, "name");
    if (!contents[tag]) {
        return undefined;
    }
    if (contents[tag].content.length === 0 || !contents[tag].content.some((item: any) => item.hasOwnProperty("name"))) {
        return contents[tag].content; 
    }        
    const content = reduceArrayByKey(contents[tag].content, "name");
    return content;
};

const storyStyle = (story: any, tag: string) => {
    const styles =reduceArrayByKey(story.styles,"name");
    
    const style=styles[tag]?.style.reduce((acc:any, item:any) => {
        const keyValue = item.name;
    
        acc[keyValue] = item.class;
    
        return acc;
      }, {});
    return style;
}

const pageStyle = (styles: any) => {
    const style=styles?.reduce((acc:any, item:any) => {
        const keyValue = item.name;
    
        acc[keyValue] = item.class;
    
        return acc;
      }, {});
    return style;
}

const sectionContent = (section:any) =>{
    return reduceArrayByKey(section,"name");
}

const styleMapping: any = {
    page: "stylePage",
    section: "styleSection",
    global: "styleGlobal",
    default: "styleSection"
};

const blockStyle = (styleClass: string , styles: JSON) => {
    
    if (!styleClass) {
        return undefined;
    }
    
    const keys = styleClass.includes(".") ? styleClass.split(".") : [styleMapping.default, styleClass];

    return keys.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, styles);
}

const getExcerpt = (richTextContent:any, wordLimit = 30) => {
    const {render} :any = richTextResolver();
    if (!richTextContent) return '';
    
    // Convert RichText content to plain text
    const plainText = render(richTextContent)
      .replace(/(<([^>]+)>)/gi, '') // Remove any HTML tags
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  
    // Split the plain text into words
    const words = plainText.split(' ');
  
    // Extract the first `wordLimit` words and join them
    const excerpt = words.slice(0, wordLimit).join(' ');
  
    // Append ellipsis if the content is longer than the limit
    return words.length > wordLimit ? `${excerpt}...` : excerpt;
  };

export {storyData, storyContent, storyStyle, pageStyle, sectionContent, blockStyle, getExcerpt};