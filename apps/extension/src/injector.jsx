import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./content/content.css";
import contentCssStyle from "./content/content.css?inline";
import Content from "./content/Content";

// create new element
const jobfit__wrapper = document.createElement("section");
jobfit__wrapper.id = "__jobfit__linkedin__custom__root__wrapper";
// shadow dom
const shadow_root = jobfit__wrapper.attachShadow({ mode: "closed" });

const styleTag = document.createElement("style");
styleTag.textContent = contentCssStyle;
shadow_root.appendChild(styleTag);

// mount shadow
const mount_root = document.createElement("div");
shadow_root.appendChild(mount_root);

// inject on dom
const linkedin__root = document.querySelector(".job-details-module");
// const linkedin__root = document.querySelector("#home");
linkedin__root.insertAdjacentElement("beforebegin", jobfit__wrapper);
// linkedin__root.appendChild(jobfit__wrapper);

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

createRoot(mount_root).render(
  <StrictMode>
    <Content />
  </StrictMode>
);
