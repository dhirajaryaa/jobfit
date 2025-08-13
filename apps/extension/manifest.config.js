import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "jobfit - find prefect job for you.",
  version: "1.0.0",
  permissions: ["activeTab", "scripting", "storage"],
  action: {
    default_popup: "index.html",
  },

  content_scripts: [
    {
      matches: ["https://dhirajarya.xyz/*"],
      js: ["src/injector.jsx"],
      run_at: "document_end",
    },
  ],
});
