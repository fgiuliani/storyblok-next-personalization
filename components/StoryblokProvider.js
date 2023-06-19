"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import CallToAction from "./blocks/CallToAction";
import Catalog from "./blocks/Catalog";
import Page from "./content-types/Page";
import PersonalizedContent from "./blocks/PersonalizedContent";
import RichText from "./blocks/RichText";

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
