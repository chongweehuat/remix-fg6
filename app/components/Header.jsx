import {storyData, storyContent, storyStyle} from "../utils/storyData";
import XTag from "./XTag";

const Header = ({ blok }) => {
    const contentLogo = storyContent(blok,"logo");
    const contentMenus = storyContent(blok,"menus");
    const stylePage = storyStyle(blok,"page");
    const styleLogo = storyStyle(blok,"logo");
    const styleMenu = storyStyle(blok,"menu");
    return (
        <XTag styleClass="relative bg-white border-b-2 border-gray-100" cmsData={stylePage.wrapper} cmsDataRef="stylePage.wrapper" >
        <p>test</p>
        </XTag>
    )
}

export default Header;