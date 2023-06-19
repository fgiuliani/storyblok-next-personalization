import "./globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";

storyblokInit({
  accessToken: "fDtSFEiK1BZJeqvUCBTvTAtt",
  use: [apiPlugin],
});

export const metadata = {
  title: "Storyblok + Next.js Personalization",
  description: "Storyblok + Next.js Personalization",
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <div className="bg-gray-300">
            <Navigation />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </StoryblokProvider>
  );
}
