import XTag from "../components/XTag";
import { blockStyle } from "../utils/storyData";
const asset = ({blok}) => {
    const blokClass=blockStyle(blok.class,blok.styles);
    const AssetLink = ({blok, children}) =>(
        blok.link.cached_url ? <a key={blok._uid} href={blok.link.cached_url} >{children}</a> : <>{children}</>
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

export default asset;