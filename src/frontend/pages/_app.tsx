import "../styles/globals.css"
import type { AppProps } from "next/app"
import React  from "react";

/**
 * MyApp
 * 
 * MyApp is a custom Next.js App component that allows to:
 * - Persist layout between page changes.
 * - Keep state when navigating pages.
 * - Custom error handling using componentDidCatch.
 * - Inject additional data into pages.
 * - Add global CSS.
 * 
 * @param {object} props - Properties passed to the component
 * @param {ReactElement} props.Component - The active page component
 * @param {object} props.pageProps - The initial props for the active page component
 * @returns The MyApp component
 * 
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app} for more information.
 */
function MyApp({ Component, pageProps}: AppProps){
    /**
     * Render
     * 
     * Render the active page component with its initial props
     */
    return <Component {...pageProps} />
}
export default MyApp