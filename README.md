# Ambrosio Portfolio Website

A professional portfolio website for ambrosio.ca built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages.

## Features

- Single-page application with smooth scrolling between sections
- Responsive design that works on mobile, tablet, and desktop
- Dark/light theme toggle with system preference detection
- Filterable projects section
- Interactive testimonials slider
- Contact form using Formspree
- SEO-friendly structure

## Project Structure

```
ambrosio-portfolio/
├── index.html               # Main HTML file
├── css/
│   ├── variables.css        # CSS variables for theming
│   ├── styles.css           # Main styles
│   └── responsive.css       # Responsive design styles
├── js/
│   └── main.js              # JavaScript functionality
├── assets/
│   ├── images/              # Image files
│   ├── icons/               # Icon files
│   └── documents/           # Resume and other documents
└── README.md                # This file
```

## Deployment Instructions

### Prerequisites

- A GitHub account
- Git installed on your local machine

### Deployment Steps

1. **Create a GitHub repository**

   Create a new repository on GitHub named `username.github.io` (replace `username` with your GitHub username).

2. **Initialize Git in your project folder**

   ```bash
   cd /path/to/ambrosio-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect to GitHub and push**

   ```bash
   git remote add origin https://github.com/username/username.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Configure GitHub Pages**

   - Go to your GitHub repository
   - Navigate to "Settings" > "Pages"
   - Under "Source", select "main" branch and root directory
   - Click "Save"
   - Wait a few minutes for GitHub to build and deploy your site

5. **Custom Domain (Optional)**

   To use your custom domain (ambrosio.ca):

   - Create a file named `CNAME` in the root directory containing your domain name
   - Add DNS records at your domain registrar:
     - A Record: Point your domain to GitHub Pages IP addresses
     - CNAME Record: Add a `www` subdomain pointing to `username.github.io`
   - In GitHub repository settings, add your custom domain and check "Enforce HTTPS"

## Customization

### To customize this portfolio:

1. **Personal Information**:
   - Update content in `index.html` with your personal details
   - Replace placeholder images in the `assets/images` folder
   - Add your resume in the `assets/documents` folder

2. **Theme Colors**:
   - Modify color variables in `css/variables.css` to match your brand

3. **Projects**:
   - Edit the projects section in `index.html` to showcase your work
   - Add project images to `assets/images` folder

4. **Contact Form**:
   - Create a [Formspree](https://formspree.io) account
   - Replace the formspree ID in the form action attribute

## Development

To make changes to the portfolio:

1. Edit files using your preferred code editor
2. Test locally by opening `index.html` in a browser
3. Commit and push changes to GitHub to update the live site:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Performance Optimization

- Images are optimized for web
- CSS is organized in separate files for easier maintenance
- JavaScript is deferred to not block page rendering
- Minimal use of external libraries

## Browser Support

The portfolio is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Feel free to use this template for your personal portfolio.

---

© 2025 Ambrosio. All Rights Reserved.
