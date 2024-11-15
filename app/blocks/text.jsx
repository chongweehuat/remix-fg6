import XTag from "../components/XTag";
import { blockStyle } from "../utils/storyData";
const text = ({blok}) => {
    const blokClass=blockStyle(blok.class,blok.styles);
    const linkClass=blockStyle(blok.linkclass,blok.styles);
    const TextLink = ({blok, children}) =>(
        blok.link.cached_url ? <XTag 
        tag="a" 
        key={blok._uid} 
        href={blok.link.cached_url}
        cmsData={linkClass}
        cmsDataRef={blok.linkclass} 
        >{children}</XTag> : <>{children}</>
    );
    return (
        <TextLink blok={blok} >
        <XTag tag="span" cmsData={blokClass} cmsDataRef={blok.class}>{blok.content}</XTag>
        </TextLink>
    )
}

export default text;