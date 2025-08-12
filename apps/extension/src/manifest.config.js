import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "Jobfit - Find best fit Linkedin Jobs.",
  version: "1.0.0",
  action: {
    default_popup: "index.html",
  },
  content_scripts: [{
    js: ["src/content.jsx"],
    matches: ["https://www.linkedin.com/jobs/collections/*"],
  }],
});
