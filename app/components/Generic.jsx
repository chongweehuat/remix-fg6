import {
  StoryblokComponent,
  storyblokEditable
} from "@storyblok/react";
import { storyData, storyContent, storyStyle } from "../utils/storyData";
import XTag from "../components/XTag";

const Generic = ({ blok, customSectionMap = {} }) => {
  const styleGlobal = storyStyle(blok.settings, "global");
  const stylePage = storyStyle(blok.data, "page");

  const SectionLink = ({ link, children }) => (
    link?.cached_url ? <a href={link.cached_url} >{children}</a> : <>{children}</>
  );
  return (
    <XTag cmsData={stylePage?.wrapper} cmsDataRef="stylePage.wrapper">
      <XTag cmsData={stylePage?.container} cmsDataRef="stylePage.container">
        <XTag cmsData={stylePage?.main} cmsDataRef="stylePage.main">
          {blok.data.contents.map((section, i) => {
            const sectionLink = storyContent(blok.data, "link");
            const styleSection = storyStyle(blok.data, section.name);
            const Component = customSectionMap[section.name];
            return Component ? (
              <Component key={i} blok={{ section: section.content, settings: blok.settings, styles: { styleGlobal, stylePage, styleSection } }} />
            ) : (
              <XTag key={i} cmsData={styleSection?.wrapper} cmsDataRef="styleSection.wrapper">

                <SectionLink link={sectionLink} >
                  {section.content.map((element, j) => {
                    element.styles = { styleGlobal, stylePage, styleSection };
                    return (
                      <XTag key={j} cmsData={styleSection?.container} cmsDataRef="styleSection.container">
                        <StoryblokComponent blok={element} />
                      </XTag>
                    )
                  })}
                </SectionLink>

              </XTag>
            );
          })}
        </XTag>
      </XTag>
    </XTag>
  );
};

export default Generic;
