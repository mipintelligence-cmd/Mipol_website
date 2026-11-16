MIPOL WEBSITE — UPLOAD GUIDE

Files
- index.html                         Homepage
- what-we-do/index.html              What We Do page
- how-it-works/index.html             How It Works page
- about/index.html                    About page
- pilot/index.html                    Pilot Program page
- contact/index.html                  Contact page
- case-study/index.html               Case study listing
- case-study/beauty-personal-care-pilot/index.html
                                      Paid, anonymised case study
- assets/styles.css                  Responsive styling
- assets/script.js                   Mobile navigation and contact form behaviour
- assets/mipol-logo.jpg              Optimised copy of the supplied official logo

DirectAdmin deployment
1. Download and extract this ZIP on your computer.
2. Open DirectAdmin → File Manager → public_html.
3. Upload the CONTENTS of the mipol-website folder into public_html (not an extra nested mipol-website folder).
4. Keep the assets and case-study folders in the same relative positions.
5. Visit your domain and test the homepage, navigation and case study link.
   Pages use clean directory URLs, for example:
   https://your-domain.example/case-study/beauty-personal-care-pilot/
6. To add a case study, create a folder under case-study with an index.html
   inside it, then add links to case-study/index.html and the homepage. Preserve
   the relative locations of assets and shared site files.

Contact form
The form validates required fields and opens a pre-addressed email draft to mipintelligence@gmail.com. It does not silently submit data to a server. A server-side form endpoint can be connected later if you want enquiries delivered without relying on the visitor's email application.

Notes
- The supplied logo artwork is used without redesign; the website uses a compressed copy for faster loading.
- Case study observations are labelled as descriptive and non-causal.
- No prices, unverified performance claims or invented office/contact details have been added.
