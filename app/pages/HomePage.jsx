import Generic from "../components/Generic";
import hero from "./homepage/hero";
import highlights from "../pages/homepage/highlights";
import aboutus from "../pages/homepage/aboutus";
import callaction from "../pages/homepage/callaction";

const HomePage = ({ blok }) => {
    return <Generic blok={blok} customSectionMap={{ hero, highlights, aboutus, callaction }} />
}
export default HomePage;