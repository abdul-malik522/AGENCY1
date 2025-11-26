# Vercel Deployment Guide

This project is configured for deployment on Vercel, a modern serverless platform.

## Quick Start

1. **Install Vercel CLI** (optional, for local testing):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository (GitHub/GitLab/Bitbucket)
   - Vercel will automatically detect the project and deploy

3. **Deploy via CLI:**
   ```bash
   vercel
   ```

## Configuration Files

### `vercel.json`
This file contains all security headers and caching configurations:
- Security headers (CSP, X-Frame-Options, etc.)
- Cache control for static assets
- HTTPS/HSTS configuration

### Security Features on Vercel

✅ **Automatic HTTPS:** All deployments use HTTPS by default
✅ **SSL Certificates:** Automatically provisioned and renewed
✅ **Global CDN:** Content distributed worldwide for fast loading
✅ **Security Headers:** Configured via `vercel.json`
✅ **DDoS Protection:** Built-in protection against attacks

## Project Structure

```
AGNECY FINAL WEB/
├── index.html          # Main HTML file
├── styles.css          # External stylesheet
├── security.js         # Security and form validation
├── vercel.json         # Vercel configuration
├── SECURITY.md         # Security documentation
└── README.md           # Project documentation
```

## Environment Variables

If you need to add environment variables (e.g., API keys):

1. **Via Dashboard:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables

2. **Via CLI:**
   ```bash
   vercel env add VARIABLE_NAME
   ```

## Custom Domain

To use a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

## Performance Features

- **Automatic Compression:** Vercel compresses all responses
- **Image Optimization:** Automatic image optimization (if using Vercel Image Optimization)
- **Edge Caching:** Static assets cached at edge locations
- **Automatic HTTPS:** All traffic automatically redirected to HTTPS

## Security Features

All security headers are configured in `vercel.json`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security (HSTS)

## Monitoring

Vercel provides built-in analytics:
- Page views
- Performance metrics
- Error tracking
- Real-time logs

Access via your project dashboard.

## Troubleshooting

### Security Headers Not Working
- Ensure `vercel.json` is in the root directory
- Check deployment logs for errors
- Verify headers using: `curl -I https://your-domain.vercel.app`

### Form Not Working
- Check browser console for JavaScript errors
- Ensure `security.js` is loading correctly
- Verify form action URL is correct

### Caching Issues
- Clear browser cache
- Check `vercel.json` cache headers
- Use hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

## Next Steps

1. **Connect Repository:** Link your Git repository to Vercel
2. **Deploy:** Push to main branch for automatic deployment
3. **Custom Domain:** Add your domain (optional)
4. **Monitor:** Set up analytics and monitoring
5. **Backend:** If needed, add Vercel Serverless Functions for form processing

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Security Best Practices](https://vercel.com/docs/security)
- [Vercel Functions](https://vercel.com/docs/functions)

