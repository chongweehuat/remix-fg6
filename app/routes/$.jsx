import { useLoaderData, useSearchParams } from "@remix-run/react";
import LanguageSelector from "../pages/LanguageSelector";
import renderPageContent from "./renderPageContent";
import { loader } from "./loader";

export { loader };

export default function Index() {
  const { language, slug, slugYear, slugBlog, data, settings, error } = useLoaderData();
  const [searchParams] = useSearchParams();
  const showData = searchParams.get("showdata");

  return (
    <>
      {/* Render page content based on the slug */}
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        renderPageContent(slug, data, settings, slugBlog)
      )}
      
      {/* Render language selector */}
      <LanguageSelector />
      
      {/* Display raw JSON data for debugging, if "showdata" query param is present */}
      {showData && (
        <DebugData data={data} />
      )}
    </>
  );
}

/**
 * Component to render debug data as prettified JSON.
 */
function DebugData({ data }) {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <pre className="font-mono text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
