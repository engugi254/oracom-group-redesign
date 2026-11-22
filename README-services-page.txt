ORACOM DETAILED SERVICES PAGE PATCH

This patch adds a dedicated Services page with nine detailed service areas. It preserves the homepage structure and existing six homepage service cards, while adding a separate catalogue with alternating image-and-text layouts.

FILES INCLUDED
- src/main.jsx — adds the Services page and links to it from the homepage navigation
- src/styles.css — responsive styling for the new page and its service sections
- services.html — new page entry
- vite.config.js — includes the Services page in production builds
- public/images/logo-light.png — transparent dark-lettering logo for the white header

APPLY THE PATCH
1. Extract this ZIP into your existing project root (the folder containing index.html).
2. Allow the included files to overwrite matching files.
3. Keep your existing public/images/logo.png; the footer still uses it.
4. Run `npm run build` to check the production build.
5. Run `npm run dev`, then click Services or open `/services.html`.

CONTENT NOTES
The service areas are based on Oracom's published offerings and are concept copy for review, not approved company wording. Images are illustrative stock photographs and can be replaced with Oracom's own approved African business and team photography. Enquiry links open an email draft; no website form or CRM integration is included.
