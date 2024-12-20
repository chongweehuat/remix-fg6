import HomePage from "../pages/HomePage";
import News from "../pages/News";
import NewsBlog from "../pages/NewsBlog";
import ContactUs from "../pages/ContactUs";
import Career from "../pages/Career";
import Accreditations from "../pages/Accreditations";
import RegulatoryCompliance from "../pages/RegulatoryCompliance";
import DataProcessor from "../pages/DataProcessor";
import DigitalMoney from "../pages/DigitalMoney";
import MyXaaS from "../pages/MyXaaS";
import Arema from "../pages/Arema";
import AboutUs from "../pages/AboutUs";

const renderPageContent = (slug:any, data:any, settings:any, slugBlog:any) => {
    switch (slug) {
      case "home":
        return <HomePage blok={{ data, settings }} />;
      case "news":
        return slugBlog ? <NewsBlog blok={{ data, settings }} /> : <News blok={{ data, settings }} />;
      case "career":
        return <Career blok={{ data, settings }} />;
      case "contactus":
        return <ContactUs blok={{ data, settings }} />;
      case "accreditations":
        return <Accreditations blok={{ data, settings }} />;
      case "regulatorycompliance":
        return <RegulatoryCompliance blok={{ data, settings }} />;
      case "dataprocessor":
        return <DataProcessor blok={{ data, settings }} />;
      case "digitalmoney":
        return <DigitalMoney blok={{ data, settings }} />;
      case "myxaas":
        return <MyXaaS blok={{ data, settings }} />;
      case "arema":
        return <Arema blok={{ data, settings }} />;
      case "aboutus":
        return <AboutUs blok={{ data, settings }} />;
      default:
        return <p>Page not found</p>;
    }
  };

  export default renderPageContent;