# Drones & Stuff - Professional Drone Services Website

A complete, modern, and professional multi-page website for a drone services company built with React, Vite, Framer Motion, and Tailwind CSS.

## 🚁 Business Information

- **Company Name:** Drones & Stuff
- **Tagline:** Professional Drone Services, Training, and Security Solutions
- **Email:** info@dronesandstuff.com
- **Location:** Connecticut, USA
- **Certification:** FAA Part 107 Certified and Fully Insured

## 🎨 Tech Stack

- **Frontend:** React.js 18+ with Vite
- **Styling:** Tailwind CSS + CSS Variables
- **Routing:** React Router v6
- **State Management:** React Hooks (useState, useEffect)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** Controlled components with validation

## 📁 Project Structure

```
drone/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation with sticky header
│   │   ├── Hero.jsx            # Full-screen hero section
│   │   ├── Footer.jsx          # Footer with contact info and links
│   │   ├── ServiceCard.jsx     # Reusable service card component
│   │   ├── FAQ.jsx             # Accordion FAQ component
│   │   ├── Gallery.jsx         # Image gallery with lightbox
│   │   └── ScrollToTop.jsx     # Scroll to top on route change
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Services.jsx        # Drone services offerings
│   │   ├── Training.jsx        # Pilot training programs
│   │   ├── Community.jsx       # Community Drone Corps initiative
│   │   ├── About.jsx           # About page with credentials
│   │   └── Contact.jsx         # Contact form page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles and CSS variables
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies

```

## 🌐 Website Pages

### 1. **Home Page** (`/`)
- Full-screen hero section with aerial background
- Introduction to FAA-certified drone services
- Three interactive service cards with hover animations
- "Featured Operations" gallery showcasing work
- "How We Operate" 3-step process section
- Trust bar with certifications and credentials

### 2. **Services Page** (`/services`)
- **Real Estate & Property:** HDR Photography, 4K Video Tours, Property Line Overlays
- **Construction & Inspection:** Progress Timelines, Roof Inspections, Site Mapping
- **Event & Commercial:** Event Highlights, Marketing Reels, Live Monitoring
- **Security Consultation:** Confidential, NDA-required services
- FAQ accordion section
- Custom quote CTA

### 3. **Training Page** (`/training`)
- **Recreational Pilot Training:** FAA TRUST certification prep
- **Part 107 Commercial Training:** Complete exam preparation
- Detailed curriculum highlights for each track
- "Why Train With Us" benefits section
- Session scheduling CTA

### 4. **Community Page** (`/community`)
- "Flights of Memory" pro-bono initiative for seniors
- Mission statement with compassion, community, and impact icons
- 3-step process explanation of how the program works
- Warmer color palette (purple/gold theme)

### 5. **About Page** (`/about`)
- Professional credentials and FAA certification
- Safety, precision, and confidentiality focus
- License information (available upon request)
- Professional headshot placeholder

### 6. **Contact Page** (`/contact`)
- Fully functional contact form with validation
- Fields: Name, Email, Phone, Interest Dropdown, Message
- Simulated form submission with success state
- Alternative contact information
- 24-hour response time commitment

## 🎨 Design Features

### Color Palette
- **Primary Navy:** `#0f172a`
- **Primary Light:** `#1e293b`
- **Secondary Gray:** `#64748b`
- **Accent Orange:** `#f97316`
- **Background Dark:** `#020617`
- **Text Light:** `#f8fafc`

### Design Elements
- Clean, modern SaaS-style layout
- Smooth hover effects and transitions
- Framer Motion page animations
- Responsive grid layouts
- Glassmorphism effects
- Subtle shadows and rounded cards
- Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd c:/Users/hp/OneDrive/Desktop/staffarc/drone
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder, ready for deployment.

## 🌍 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
- Link to your Vercel account
- Configure project settings
- Deploy!

**Or use Vercel's GitHub integration:**
- Push code to GitHub
- Import repository on [vercel.com](https://vercel.com)
- Auto-deploy on every push

### Option 2: Netlify

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build and deploy:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Or use Netlify's drag-and-drop:**
- Build locally: `npm run build`
- Drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy:**
```bash
npm run deploy
```

4. **Configure vite.config.js:**
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

## ✨ Key Features Implemented

✅ **Fully Responsive Design** - Mobile, Tablet, Desktop  
✅ **Animated Page Transitions** - Framer Motion  
✅ **Sticky Navigation** - Active route highlighting  
✅ **Mobile Hamburger Menu** - Smooth slide-in animation  
✅ **Contact Form** - Frontend validation & success states  
✅ **Image Gallery** - Lightbox modal functionality  
✅ **FAQ Accordion** - Expandable questions  
✅ **Scroll Animations** - Smooth motion effects  
✅ **Professional Content** - No lorem ipsum, real meaningful text  
✅ **SEO Ready** - Semantic HTML structure  
✅ **Accessibility** - ARIA labels and keyboard navigation  
✅ **Fast Performance** - Optimized with Vite  

## 🔧 Customization

### Update Business Information

Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx` to update:
- Email address
- Phone number
- Social media links

### Change Colors

Modify CSS variables in `src/index.css`:
```css
:root {
  --primary: #0f172a;
  --accent: #f97316;
  /* ... etc */
}
```

### Add More Services

Edit `src/pages/Services.jsx` and add new `ServiceSection` components with your custom content.

### Update Images

Replace Unsplash URLs in components with your own images:
- Hero background: `src/components/Hero.jsx`
- Gallery images: `src/components/Gallery.jsx`
- Service images: `src/pages/Services.jsx`

## 📝 Future Enhancements

### Suggested Improvements

1. **Video Background:** Add muted looping aerial video to Hero section
2. **Backend Integration:** Connect contact form to email service (EmailJS, Formspree, or custom API)
3. **Blog Section:** Add blog/news section for updates
4. **Booking System:** Integrate scheduling calendar for training sessions
5. **Portfolio Gallery:** Expand gallery with client project showcases
6. **Testimonials:** Add client reviews and ratings
7. **Analytics:** Integrate Google Analytics or Plausible
8. **Live Chat:** Add customer support chat widget
9. **CMS Integration:** Connect to Sanity, Contentful, or Strapi for easy content updates
10. **E-commerce:** Add pricing packages with payment integration

### SEO Enhancements

- Add meta tags for each page
- Implement structured data (JSON-LD)
- Create sitemap.xml
- Add robots.txt
- Optimize images with WebP format
- Implement lazy loading for images

## 🐛 Troubleshooting

### Issue: "Module not found" errors
**Solution:** Run `npm install` to ensure all dependencies are installed

### Issue: Port 5173 already in use
**Solution:** Kill the existing process or change the port in `vite.config.js`

### Issue: Styles not applying
**Solution:** Ensure Tailwind directives are in `src/index.css` and PostCSS is configured

### Issue: Build fails
**Solution:** Check for console errors, ensure all imports are correct, run `npm run build` to see detailed error messages

## 📄 License

This project is proprietary and confidential for Drones & Stuff.

## 📞 Support

For questions or support, contact:
- **Email:** info@dronesandstuff.com
- **Location:** Connecticut, USA

---

**Built with ❤️ using React + Vite + Tailwind CSS**
