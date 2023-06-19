"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

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

export default function StoryblokProvider({ children }) {
  return children;
}
