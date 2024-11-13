import reduceArrayByKey from "./reduceArrayByKey";

const storyData = (story: any) => {
    const contents =reduceArrayByKey(story.contents,"name");
    const styles=reduceArrayByKey(story.styles,"name");
    return {contents, styles};
}

const storyContent = (story: any, tag: string) => {
    const contents = reduceArrayByKey(story.contents, "name");
    if (contents[tag].content.length === 0 || !contents[tag].content.some((item: any) => item.hasOwnProperty("name"))) {
        return contents[tag].content; 
    }        
    const content = reduceArrayByKey(contents[tag].content, "name");
    return content;
};

const storyStyle = (story: any, tag: string) => {
    const styles =reduceArrayByKey(story.styles,"name");
    
    const style=styles[tag].style.reduce((acc:any, item:any) => {
        const keyValue = item.name;
    
        acc[keyValue] = item.class;
    
        return acc;
      }, {});
    return style;
}

export {storyData, storyContent, storyStyle};