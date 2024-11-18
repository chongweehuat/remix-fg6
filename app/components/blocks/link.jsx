import XTag from "../XTag";
import { blockStyle } from "../../utils/storyData";
const link = ({blok, children}) => {
    const linkClass=blockStyle(blok.class,blok.styles);
    
    return blok.link.cached_url ? <XTag 
    tag="a" 
    key={blok._uid} 
    href={blok.link.cached_url}
    cmsData={linkClass}
    cmsDataRef={blok.linkclass} 
    >{children}</XTag> : <>{children}</>
    
}

export default link;