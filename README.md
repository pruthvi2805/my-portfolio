# 💼 Personal Portfolio Website

A clean, modern, and professional portfolio website built with pure HTML, CSS, and vanilla JavaScript. Designed to showcase my work as a Senior Pega System Architect while maintaining excellent performance and accessibility.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations and transitions
- **🌓 Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **⚡ Fast Loading**: No frameworks, pure vanilla JavaScript for optimal performance
- **♿ Accessible**: Semantic HTML, keyboard navigation, and ARIA labels
- **🖨️ Print-Friendly**: Optimized print styles for the resume page
- **🎯 SEO Optimized**: Proper meta tags, Open Graph, and Twitter Cards

## 🗂️ Project Structure

```
my-portfolio/
├── index.html          # Landing page / Home
├── resume.html         # Professional resume/CV
├── projects.html       # Project showcase
├── contact.html        # Contact information
├── css/
│   ├── main.css       # Global styles, variables, navigation, footer
│   ├── components.css # Reusable components (buttons, cards, tags)
│   └── pages.css      # Page-specific styles (hero, resume, projects)
├── js/
│   └── main.js        # All JavaScript functionality
├── assets/
│   └── images/        # Images and media files
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Live Server extension for VS Code (optional but recommended)

### Local Development

#### Option 1: Using Live Server (Recommended)

1. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Launch the Site**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open automatically at `http://localhost:5500`
   - Changes will auto-refresh in the browser when you save files

#### Option 2: Direct File Opening

1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser
3. Note: You'll need to manually refresh after making changes

#### Option 3: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/main.css`:

```css
:root {
  --color-primary: #2563eb;        /* Main accent color */
  --color-bg: #ffffff;             /* Background color */
  --color-text: #0f172a;           /* Text color */
  /* ... more variables */
}
```

### Adding Projects

1. Open `projects.html`
2. Find the projects grid section
3. Duplicate an existing project card
4. Update the content (title, description, tech stack, link)

Example:

```html
<article class="card project-card fade-in">
  <div class="project-card__image">🚀</div>
  <div class="project-card__content">
    <h2 class="project-card__title">Your Project Name</h2>
    <p class="project-card__description">Project description...</p>
    <div class="project-card__tech">
      <span class="tag tag-primary">Tech 1</span>
      <span class="tag">Tech 2</span>
    </div>
    <a href="#" class="btn btn-primary btn-sm">View Details →</a>
  </div>
</article>
```

### Updating Resume Content

1. Open `resume.html`
2. Update sections with your actual information
3. Follow the existing structure for consistency
4. Add or remove timeline items as needed

## 🌐 Deployment

### Deploy to Cloudflare Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: (leave empty)
     - Build output directory: `/`
   - Click "Save and Deploy"

3. **Your site will be live at**: `https://your-project.pages.dev`

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: main / (root)
   - Click Save

3. **Your site will be live at**: `https://username.github.io/repository-name/`

### Deploy to Netlify

1. **Drag and Drop**
   - Go to [Netlify](https://www.netlify.com/)
   - Drag your project folder onto the Netlify dashboard
   - Site is live instantly!

## 📋 Features Breakdown

### Dark Mode
- Toggle between light/dark themes
- Preference saved in localStorage
- Smooth color transitions
- System preference detection (coming soon)

### Navigation
- Sticky header that stays visible while scrolling
- Active page highlighting
- Mobile-responsive hamburger menu
- Smooth transitions and animations

### Animations
- Fade-in effects using Intersection Observer API
- Smooth hover effects on interactive elements
- No janky animations - optimized for performance

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for readability

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript**: ES6+ features, no frameworks
- **No external dependencies**: Fast, lightweight, and privacy-friendly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio, but if you notice any bugs or have suggestions:

1. Open an issue
2. Submit a pull request
3. Share feedback

## 📄 License

© 2026 Pruthvi Kautikwar. All rights reserved.

Feel free to use this template for your own portfolio, but please don't use my personal content.

## 📞 Contact

- **Email**: kautikwarpruthvi@gmail.com
- **Location**: Netherlands
- **GitHub**: [github.com/pruthvi2805](https://github.com/pruthvi2805)

## 🚧 Roadmap

- [ ] Add blog section
- [ ] Integrate contact form with backend
- [ ] Add project detail pages
- [ ] Implement project filtering by technology
- [ ] Add loading animations
- [ ] Add more interactive elements
- [ ] Create case studies for projects
- [ ] Add testimonials section

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
