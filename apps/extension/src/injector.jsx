import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./content/content.css";
import Content from "./content/Content";

// create new element
const jobfit__wrapper = document.createElement("section");
jobfit__wrapper.id = "__jobfit__linkedin__custom__root__wrapper";

// inject on dom
const linkedin__root = document.querySelector("#home");
linkedin__root.appendChild(jobfit__wrapper);

// check dom ready or not
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready");
    // Your code here
  });
} else {
  console.log("DOM already ready");
  // Your code here
}

createRoot(jobfit__wrapper).render(
  <StrictMode>
    <Content />
  </StrictMode>
);
