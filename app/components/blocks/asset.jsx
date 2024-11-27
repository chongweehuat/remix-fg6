import XTag from "../XTag";
import { blockStyle } from "../../utils/storyData";
const Asset = ({blok}) => {
    const blokClass=blockStyle(blok.class,blok.styles);
    const linkClass=blockStyle(blok.linkclass,blok.styles);
    const AssetLink = ({blok, children}) =>(
        blok.link.cached_url ? <XTag 
        tag="a" 
        key={blok._uid} 
        href={blok.link.cached_url}
        cmsData={linkClass}
        cmsDataRef={blok.linkclass} 
        >{children}</XTag> : <>{children}</>
    );
    // console.log('Asset',blok);
    return (
        <AssetLink blok={blok} >
            <XTag 
                tag="img"
                styleClass="bg-center"
                cmsData={blokClass}
                cmsDataRef={blok.class}
                src={blok.asset.filename}
                alt={blok.asset.meta_data.alt}
            />
        </AssetLink>
    )
}

export default Asset;