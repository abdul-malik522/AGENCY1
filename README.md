# MONK Website

A modern, functional website for MONK - a digital design and Web3 solutions company.

## Project Structure

```
AGNECY FINAL WEB/
├── index.html          # Main HTML file
├── styles.css          # External stylesheet (extracted from inline CSS)
├── security.js         # Security and form validation script
├── vercel.json         # Vercel deployment configuration
├── SECURITY.md         # Security features documentation
├── VERCEL_DEPLOYMENT.md # Vercel deployment guide
├── page.html           # Additional page (if needed)
└── README.md           # This file
```

## Features

- ✅ **Responsive Design**: Mobile-first approach with breakpoints for tablet and mobile
- ✅ **Modern UI/UX**: Clean, professional design with smooth animations
- ✅ **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- ✅ **Accessibility**: ARIA labels, semantic HTML, and proper heading hierarchy
- ✅ **Performance**: External CSS, lazy-loaded images, optimized assets
- ✅ **Web3 Focus**: Showcases UI/UX design, custom tokens, NFT minting, and DApp development
- ✅ **Security**: Content Security Policy, security headers, form validation, input sanitization
- ✅ **Vercel Ready**: Configured for deployment on Vercel with automatic HTTPS

## Sections

1. **Navigation**: Mega menu with Services and Pricing dropdowns
2. **Hero Section**: Main call-to-action with compelling headline
3. **Feature Highlights**: Showcases UI/UX, Web3 solutions, and DApps
4. **Statistics**: Company metrics and achievements
5. **Pricing Plans**: Basic, Business, and Enterprise tiers
6. **Testimonials**: Customer testimonials with tabbed interface
7. **Blog/Resources**: Latest insights and articles
8. **FAQ**: Common questions and answers
9. **Contact Form**: Lead generation form with validation
10. **Footer**: Social links and company information

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (jQuery, Webflow interactions)
- Google Fonts (Instrument Sans)
- Webflow CMS integration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: Desktop, Tablet, Mobile

## Getting Started

1. Open `index.html` in a web browser
2. Ensure `styles.css` is in the same directory
3. For full functionality, a web server is recommended (due to external scripts)

## Local Development

To run locally with a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

This project is configured for deployment on **Vercel**.

### Quick Deploy to Vercel

1. **Via Vercel Dashboard:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Go to [vercel.com](https://vercel.com) and import your repository
   - Vercel will automatically detect and deploy

2. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Vercel Features
- ✅ Automatic HTTPS (SSL certificates)
- ✅ Global CDN distribution
- ✅ Security headers configured via `vercel.json`
- ✅ Automatic deployments on git push
- ✅ Built-in analytics and monitoring

For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)

## Security

This website includes comprehensive security features:
- Content Security Policy (CSP)
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Form input validation and sanitization
- Client-side rate limiting
- HTTPS enforcement (automatic on Vercel)

For complete security documentation, see [SECURITY.md](SECURITY.md)

## Notes

- External scripts are loaded from CDNs (jQuery, Webflow)
- Images are served from external CDN
- Form submission requires backend integration
- All links currently point to `#` - update with actual URLs

## Customization

- Update contact information in the contact section
- Replace placeholder images with your own
- Modify color scheme via CSS variables in `styles.css`
- Update social media links in the footer

## License

© 2025 MONK. Crafted for digital visionaries.

