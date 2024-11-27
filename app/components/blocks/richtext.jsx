import { richTextResolver } from "@storyblok/richtext";
import { useSearchParams } from "@remix-run/react";

const RichText = ({blok}) => {
    const [searchParams] = useSearchParams();
    const richtexthtml = searchParams.get("richtexthtml");
    const {render} = richTextResolver();
    const html= render(blok.content);
    
    if(html)return (
        <>
            {richtexthtml? html:<div dangerouslySetInnerHTML={{ __html: html }} />}
        </>
    )
}

export default RichText;