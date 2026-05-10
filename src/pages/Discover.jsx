import React from "react";
import { useParams } from "react-router-dom";
import { AboutUs, FAQs, Craftsmanship, GenericInfo } from "./InfoPages";
import Contact from "./Contact";

export default function Discover() {
  const { slug } = useParams();
  switch (slug) {
    case undefined:
    case "about-us":
      return <AboutUs />;
    case "craftsmanship-and-team":
      return <Craftsmanship />;
    case "faqs":
      return <FAQs />;
    case "contact-us":
    case "whatsapp-support":
    case "corporate-inquiries":
      return <Contact />;
    default:
      return <GenericInfo title={(slug || "").replace(/-/g, " ")} lead="Discover the Kaariq world." />;
  }
}
