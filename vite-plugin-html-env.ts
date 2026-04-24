import type { Plugin } from "vite";

const DEFAULTS = {
  VITE_BASE_URL: "https://jayesh-gangurde.vercel.app",
  VITE_CONTACT_EMAIL: "jayeshgangurde315@gmail.com",
};

export function htmlEnvPlugin(): Plugin {
  return {
    name: "html-env-plugin",
    transformIndexHtml(html) {
      const baseUrl = process.env.VITE_BASE_URL || DEFAULTS.VITE_BASE_URL;
      const contactEmail =
        process.env.VITE_CONTACT_EMAIL || DEFAULTS.VITE_CONTACT_EMAIL;
      return html
        .replace(/%VITE_BASE_URL%/g, baseUrl)
        .replace(/%VITE_CONTACT_EMAIL%/g, contactEmail);
    },
  };
}
