import { richTextResolver } from "@storyblok/richtext";
import XTag from "../XTag";
import { blockStyle } from "../../utils/storyData";
import { useSearchParams } from "@remix-run/react";
const richtext = ({blok}) => {
    const [searchParams] = useSearchParams();
    const richtexthtml = searchParams.get("richtexthtml");
    const {render} = richTextResolver();
    const blokClass=blockStyle(blok.class,blok.styles);
    const html= render(blok.content);
    return (
        <XTag tag="textarea" cmsData={blokClass} cmsDataRef={blok.class}>
            {richtexthtml? <p>{html}</p>:<div dangerouslySetInnerHTML={{ __html: html }} />}
        </XTag>
    )
}

export default richtext;