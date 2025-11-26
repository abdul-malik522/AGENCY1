# Security Features Documentation

This document outlines all the security features implemented in the website.

## 1. Content Security Policy (CSP)

**Location:** `index.html` (meta tag) and `vercel.json` (HTTP header)

**Purpose:** Prevents XSS attacks by controlling which resources can be loaded and executed.

**Implementation:**
- Restricts script sources to trusted domains
- Allows inline styles (required for Webflow compatibility)
- Restricts image sources to prevent data exfiltration
- Blocks object/embed tags
- Forces HTTPS upgrades

## 2. Security Headers

**Location:** `index.html` (meta tags) and `vercel.json` (HTTP headers)

**Note:** This project is deployed on Vercel, which automatically handles HTTPS and uses `vercel.json` for configuration instead of `.htaccess`.

### X-Content-Type-Options
- Prevents MIME type sniffing attacks
- Forces browsers to respect declared content types

### X-Frame-Options
- Set to `SAMEORIGIN` to prevent clickjacking
- Allows embedding only from the same origin

### X-XSS-Protection
- Enables browser's built-in XSS filter
- Blocks pages when XSS is detected

### Referrer-Policy
- Controls how much referrer information is sent
- Set to `strict-origin-when-cross-origin` for privacy

### Permissions-Policy
- Disables geolocation, microphone, and camera by default
- Prevents unauthorized access to device features

## 3. Form Security

**Location:** `security.js` and form elements in `index.html`

### Features:
- **Input Sanitization:** Automatically sanitizes user input to prevent XSS
- **Email Validation:** Validates email format using regex
- **Phone Validation:** Validates phone number format
- **Length Validation:** Ensures minimum length for name and message fields
- **Rate Limiting:** Prevents form spam with client-side rate limiting (5 attempts per minute)
- **Autocomplete Attributes:** Proper autocomplete attributes for better security and UX
- **POST Method:** Form uses POST instead of GET to prevent data exposure in URLs

### Validation Rules:
- Email: Must match standard email format
- Phone: Must contain at least 10 digits
- Name: Must be at least 2 characters
- Message: Must be at least 10 characters

## 4. Subresource Integrity (SRI)

**Location:** External script tags in `index.html`

**Purpose:** Ensures external scripts haven't been tampered with.

**Status:** jQuery library already includes SRI hash. Other scripts from trusted CDNs.

## 5. Server Configuration (Vercel)

**Location:** `vercel.json` file

**Deployment Platform:** Vercel (serverless platform)

### Security Features:
- **Security Headers:** All security headers configured via `vercel.json`
- **HTTPS Enforcement:** Automatically enabled by Vercel (no configuration needed)
- **HSTS (HTTP Strict Transport Security):** Enabled with preload support
- **Static Asset Caching:** Optimized cache headers for CSS, JS, and images

### Performance Features:
- **Automatic Compression:** Vercel automatically compresses responses
- **Browser Caching:** Optimized cache headers for static assets (1 year for immutable files)
- **CDN Distribution:** Vercel's global CDN automatically distributes your site

## 6. Input Sanitization

**Location:** `security.js`

All user inputs are sanitized before processing:
- HTML entities are escaped
- Script tags are neutralized
- Prevents XSS injection

## 7. Rate Limiting

**Location:** `security.js`

Client-side rate limiting:
- Maximum 5 form submissions per minute
- Uses localStorage to track attempts
- Automatically resets after 1 minute

**Note:** For production, implement server-side rate limiting as well.

## 8. HTTPS Enforcement

**Status:** Automatically enabled on Vercel

**Vercel Deployment:**
- HTTPS is automatically enabled for all deployments
- SSL certificates are automatically provisioned and renewed
- HSTS header is configured in `vercel.json` for maximum security
- No additional configuration needed

## 9. Additional Recommendations

### For Production Deployment:

1. **Server-Side Validation:**
   - Implement server-side form validation (never trust client-side only)
   - Add CSRF tokens to forms
   - Implement server-side rate limiting
   - Consider using Vercel Serverless Functions for form processing

2. **HTTPS:**
   - ✅ Automatically enabled on Vercel
   - ✅ SSL certificates automatically provisioned
   - ✅ HSTS header configured in `vercel.json`

3. **Content Security Policy:**
   - Consider tightening CSP further by removing 'unsafe-inline' if possible
   - Use nonces or hashes for inline scripts

4. **Database Security:**
   - If using a database, use prepared statements
   - Sanitize all database inputs
   - Use parameterized queries

5. **API Security:**
   - If using APIs, implement authentication
   - Use API keys securely
   - Implement request signing

6. **Monitoring:**
   - Set up security monitoring
   - Log security events
   - Monitor for suspicious activity

## Testing Security Features

### Test CSP:
```bash
# Check if CSP is working (replace with your Vercel domain)
curl -I https://your-project.vercel.app | grep -i "content-security-policy"
```

### Test Headers:
```bash
# Check all security headers (replace with your Vercel domain)
curl -I https://your-project.vercel.app
```

### Vercel Deployment:
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically deploy and configure HTTPS
4. All security headers from `vercel.json` will be applied automatically

### Test Form Validation:
1. Try submitting invalid email addresses
2. Try submitting forms too quickly (rate limiting)
3. Try XSS payloads in form fields

## Security Checklist

- [x] Content Security Policy implemented
- [x] Security headers configured (via vercel.json)
- [x] Form validation and sanitization
- [x] Input sanitization
- [x] Rate limiting (client-side)
- [x] HTTPS automatically enabled (Vercel)
- [x] HSTS header configured
- [x] Static asset caching optimized
- [ ] Server-side validation (needs backend/Vercel Functions)
- [ ] CSRF tokens (needs backend/Vercel Functions)
- [ ] Server-side rate limiting (needs backend/Vercel Functions)
- [ ] Security monitoring (needs setup)

## Contact

For security concerns or questions, please contact the development team.

