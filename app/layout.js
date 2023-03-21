import "./globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/StoryblokBridgeLoader";

import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";

import CallToAction from "../components/blocks/CallToAction";
import Catalog from "../components/blocks/Catalog";
import Page from "../components/content-types/Page";
import PersonalizedContent from "../components/blocks/PersonalizedContent";
import RichText from "../components/blocks/RichText";

const components = {
  call_to_action: CallToAction,
  catalog: Catalog,
  page: Page,
  personalized_content: PersonalizedContent,
  rich_text: RichText,
};

storyblokInit({
  accessToken: "fDtSFEiK1BZJeqvUCBTvTAtt",
  use: [apiPlugin],
  components,
});

export const metadata = {
  title: "Storyblok + Next.js Personalization",
  description: "Storyblok + Next.js Personalization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-300">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
