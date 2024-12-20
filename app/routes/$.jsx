import { useLoaderData } from "@remix-run/react";

import LanguageSelector from "../pages/LanguageSelector";

import { useSearchParams } from "@remix-run/react";
import renderPageContent from "./renderPageContent";

import {loader} from "./loader";

export { loader };

export default function Index() {
  const { language, slug, slugYear, slugBlog, data, settings, error } = useLoaderData();
  const [searchParams] = useSearchParams();
  const showdata = searchParams.get("showdata");


  return (
    <>
      {renderPageContent(slug, data, settings, slugBlog)}
      <LanguageSelector />
      {showdata ? (
        <div>
          <pre
            style={{
              fontFamily: "monospace",
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      ) : null}
    </>
  );
}