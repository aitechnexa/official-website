# SEO Setup Guide - Step by Step

## ✅ Already Done
- Meta tags added to website
- Sitemap created (`/public/sitemap.xml`)
- Robots.txt created (`/public/robots.txt`)
- Structured data (JSON-LD) added
- Google Analytics code added (needs your tracking ID)

---

## 🔍 1. Google Search Console Setup (30 minutes)

### Why?
- See how people find your website
- Monitor search rankings
- Fix crawl errors
- Submit sitemap

### Steps:

**A. Create Account & Add Property**
1. Go to: https://search.google.com/search-console
2. Sign in with Google account
3. Click "Add Property"
4. Select "URL prefix"
5. Enter: `https://aitechnexa.com`
6. Click "Continue"

**B. Verify Ownership (Choose ONE method)**

**Method 1 - HTML File Upload (Recommended):**
1. Download verification file (e.g., `google1234567890abcdef.html`)
2. Place it in `/public/` folder of your project
3. Deploy your website
4. Go back to Search Console
5. Click "Verify"

**Method 2 - HTML Meta Tag:**
1. Copy the meta tag provided
2. Add to `index.html` in `<head>` section (after line 15)
3. Deploy website
4. Click "Verify"

**Method 3 - Domain Name Provider (Advanced):**
1. Add TXT record to your DNS settings
2. Wait for DNS propagation (can take 24-48 hours)
3. Click "Verify"

**C. Submit Sitemap**
1. After verification, click "Sitemaps" in left menu
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Status should show "Success" after a few minutes

**D. What to Monitor (After 2-3 days)**
- **Performance**: See search queries, clicks, impressions
- **Coverage**: Check indexed pages
- **Enhancements**: Mobile usability issues
- **Security Issues**: Any hacking attempts

---

## 📊 2. Google Analytics Setup (20 minutes)

### Why?
- Track visitor count
- See which pages are popular
- Understand user behavior
- Track conversions (contact form submissions)

### Steps:

**A. Create Account**
1. Go to: https://analytics.google.com
2. Sign in with Google account
3. Click "Start measuring"
4. Fill in:
   - Account name: `AiTech Nexa`
   - Property name: `AiTech Nexa Website`
   - Reporting time zone: `(GMT+08:00) Kuala Lumpur`
   - Currency: `Malaysian Ringgit (MYR)`
5. Click "Next"

**B. Set Up Data Stream**
1. Select "Web"
2. Enter website URL: `https://aitechnexa.com`
3. Stream name: `AiTech Nexa Website`
4. Click "Create stream"

**C. Get Your Measurement ID**
1. You'll see a Measurement ID like: `G-ABC123XYZ`
2. Copy this ID

**D. Add to Your Website**
1. Open `index.html`
2. Find lines 17-24 (Google Analytics section)
3. Replace **BOTH** instances of `G-XXXXXXXXXX` with your actual ID
4. Save and deploy

**Before:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**After (example):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  gtag('config', 'G-ABC123XYZ');
</script>
```

**E. Verify It's Working**
1. Deploy your website
2. Visit your website
3. Go back to Google Analytics
4. Click "Realtime" in left menu
5. You should see yourself as "1 user right now"

**F. Set Up Goals (Optional but Recommended)**
1. Go to "Admin" (bottom left)
2. Under "Property", click "Events"
3. Click "Create event"
4. Track contact form submissions

---

## 🏢 3. Google Business Profile (45 minutes)

### Why?
- Appear in Google Maps
- Show up in local searches
- Get customer reviews
- Free local advertising

### Steps:

**A. Create/Claim Business**
1. Go to: https://business.google.com
2. Sign in with Google account
3. Click "Manage now"
4. Search for "AiTech Nexa" (in case it exists)
5. If not found, click "Add your business to Google"

**B. Fill in Business Information**

**Basic Info:**
- Business name: `AiTech Nexa`
- Category: `Software Company` or `Information Technology Company`
- Add location: 
  - If you have office: Enter full address
  - If home-based/remote: Select "I deliver goods and services to my customers"
  - Service area: `Selangor, Malaysia` (or expand to whole Malaysia)

**Contact Info:**
- Website: `https://aitechnexa.com`
- Phone: `+6012-3063642`
- Email: `aitechnexa@gmail.com`

**Business Hours:**
- Monday-Friday: 9:00 AM - 6:00 PM
- Saturday: 9:00 AM - 1:00 PM (or closed)
- Sunday: Closed
- (Adjust based on your actual hours)

**C. Verify Your Business**
Google will send verification:
- **By postcard** (if physical address): Takes 5-7 days
- **By phone** (if available): Instant
- **By email** (sometimes offered): Instant

**D. Complete Your Profile**

**Add Photos:**
- Logo (your company logo)
- Cover photo (office, team, or professional image)
- Team photos
- Office photos
- Product/service photos

**Add Services:**
- AI Development
- Cloud Integration
- Web Development
- Data Analytics
- Custom Software Development
- Machine Learning Solutions

**Write Description:**
```
AiTech Nexa is a leading IT solutions provider specializing in AI-driven 
software development and digital innovation. We help businesses transform 
their operations through intelligent technology solutions, including AI 
development, cloud integration, web development, and data analytics. 
Based in Selangor, Malaysia, we serve clients worldwide with cutting-edge 
technology and modern development expertise.
```

**Add Attributes:**
- Identifies as: Technology company
- Online appointments: Yes
- Online estimates: Yes

**E. After Verification**
- Post regular updates (weekly)
- Respond to reviews quickly
- Add new photos monthly
- Update business hours for holidays

---

## 🖼️ 4. Create Social Media Images (1-2 hours)

### Why?
- Professional appearance when shared on social media
- Better click-through rates
- Brand consistency

### Required Images:

**A. Open Graph Image (og-image.jpg)**
- **Size**: 1200 x 630 pixels
- **Format**: JPG or PNG
- **Used for**: Facebook, LinkedIn, WhatsApp previews

**B. Twitter Image (twitter-image.jpg)**
- **Size**: 1200 x 600 pixels
- **Format**: JPG or PNG
- **Used for**: Twitter previews

**C. Logo (logo.png)**
- **Size**: 512 x 512 pixels
- **Format**: PNG with transparent background
- **Used for**: Structured data, favicons

### How to Create:

**Option 1 - Use Canva (Free, Easiest)**
1. Go to: https://www.canva.com
2. Sign up for free account
3. Search for "Facebook Post" (1200x630) or "Twitter Post" (1200x600)
4. Design your image:
   - Add company name: "AiTech Nexa"
   - Add tagline: "Empowering the Future with AI-Driven Solutions"
   - Use brand colors (from your website)
   - Add relevant tech imagery
5. Download as JPG
6. Rename to `og-image.jpg` or `twitter-image.jpg`

**Option 2 - Use Figma (Free, More Control)**
1. Go to: https://www.figma.com
2. Create new file
3. Create frame: 1200 x 630px
4. Design your image
5. Export as JPG

**Option 3 - Hire on Fiverr ($5-20)**
1. Go to: https://www.fiverr.com
2. Search "social media banner design"
3. Provide requirements
4. Get professional designs

**Design Tips:**
- Keep text large and readable
- Use high contrast
- Include your logo
- Avoid clutter
- Test how it looks when small

### Where to Place Images:
1. Save images in `/public/` folder:
   - `/public/og-image.jpg`
   - `/public/twitter-image.jpg`
   - `/public/logo.png`
2. Deploy your website
3. Test with: https://www.opengraph.xyz/url/https://aitechnexa.com

---

## 📝 5. Regular Content Strategy (Ongoing)

### Why?
- Improve SEO rankings
- Establish authority
- Attract organic traffic
- Engage potential clients

### Content Types:

**A. Blog Posts (Monthly)**

**Topics to Cover:**
1. **Technical Tutorials**
   - "How to Integrate AI into Your Business"
   - "Getting Started with Cloud Migration"
   - "Best Practices for Web Development in 2024"

2. **Case Studies**
   - "How We Built KejeHub: A Project Management Success Story"
   - "Database Query Assistant: AI-Powered Data Insights"

3. **Industry Insights**
   - "Top AI Trends in Malaysia 2024"
   - "The Future of Software Development"
   - "Why Malaysian Businesses Need Cloud Solutions"

4. **Company Updates**
   - "New Services Launched"
   - "Team Expansion"
   - "Client Success Stories"

**B. Where to Post:**

**Option 1 - Add Blog to Your Website**
- Create `/blog` section
- Use markdown files or CMS
- Better for SEO

**Option 2 - Medium.com (Easier to Start)**
1. Create account: https://medium.com
2. Write articles
3. Link back to your website
4. Cross-post to LinkedIn

**Option 3 - LinkedIn Articles**
1. Post directly on LinkedIn
2. Tag relevant hashtags
3. Share in groups

**C. Content Calendar (Monthly)**

**Week 1**: Technical blog post (800-1500 words)
**Week 2**: Social media updates + project showcase
**Week 3**: Industry news commentary or tips
**Week 4**: Case study or client testimonial

**D. SEO Writing Tips:**
- Use target keywords naturally
- Write 800-1500 words minimum
- Use headings (H2, H3)
- Add images with alt text
- Include internal links
- Add call-to-action
- Make it valuable and actionable

---

## 📋 Quick Checklist

### This Week:
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Set up Google Analytics
- [ ] Replace `G-XXXXXXXXXX` in index.html with your tracking ID
- [ ] Deploy website

### This Month:
- [ ] Create Google Business Profile
- [ ] Verify Google Business Profile
- [ ] Create og-image.jpg (1200x630)
- [ ] Create twitter-image.jpg (1200x600)
- [ ] Create logo.png (512x512)
- [ ] Upload images to /public/ folder
- [ ] Write first blog post
- [ ] Test website with Google's tools

### Ongoing:
- [ ] Check Google Analytics weekly
- [ ] Check Search Console weekly
- [ ] Post 1 blog article per month
- [ ] Update Google Business Profile weekly
- [ ] Respond to any reviews/inquiries
- [ ] Monitor keyword rankings

---

## 🔧 Testing Tools

After setup, test your website:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tests structured data

2. **Google Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Tests mobile responsiveness

3. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev
   - Tests loading speed

4. **Open Graph Checker**
   - URL: https://www.opengraph.xyz
   - Tests social media previews

5. **SSL Checker**
   - URL: https://www.sslshopper.com/ssl-checker.html
   - Verify HTTPS is working

---

## 📞 Need Help?

**Google Support:**
- Search Console Help: https://support.google.com/webmasters
- Analytics Help: https://support.google.com/analytics
- Business Profile Help: https://support.google.com/business

**Learning Resources:**
- Google SEO Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide
- Moz SEO Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog

---

## 🎯 Expected Timeline

- **Week 1**: Setup complete, website indexed
- **Week 2-4**: Start seeing data in Analytics
- **Month 2-3**: Appear in search results
- **Month 3-6**: Ranking improvements
- **Month 6+**: Consistent organic traffic

**Remember**: SEO is a marathon, not a sprint. Be patient and consistent!
