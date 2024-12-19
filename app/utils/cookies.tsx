import { parseCookies, setCookie, destroyCookie } from "nookies";
import { parse } from "cookie";

/**
 * Sets the preferred language cookie.
 * @param {string} language - The language to set as preferred.
 */
export const setPreferredLanguage = (language:string) => {
//   console.log("Setting preferred language:", language); // Debug log
  setCookie(null, "preferredLanguage", language, {
    maxAge: 30 * 24 * 60 * 60, // Cookie expires in 30 days
    path: "/", // Cookie available site-wide
  });
};

/**
 * Get the preferred language from cookies in a server context.
 * @param {Request} request - The server request object.
 * @returns {string | null} The preferred language or null if not set.
 */
export const getPreferredLanguage = (request:any) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookies = cookieHeader ? parse(cookieHeader) : {};
  return cookies.preferredLanguage || null; // Return the preferredLanguage or null
};

/**
 * Removes the preferred language cookie.
 */
export const clearPreferredLanguage = () => {
//   console.log("Clearing preferred language cookie."); // Debug log
  destroyCookie(null, "preferredLanguage", { path: "/" });
};
