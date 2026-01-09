# Cogninance Website

A modern, neuro-fintech landing page for Cogninance - Cognitive Micro-Finance platform.

## 🚀 Deploy to GitHub Pages

### Quick Setup

1. **Create a new GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `cogninance` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - Click "Create repository"

2. **Upload the files**
   - Click "uploading an existing file" link
   - Drag and drop the `index.html` file
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your site**
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://YOUR-USERNAME.github.io/cogninance`

### Using Git (Alternative)

```bash
# Clone your new repository
git clone https://github.com/YOUR-USERNAME/cogninance.git
cd cogninance

# Copy index.html to the repository
# Then push to GitHub
git add index.html
git commit -m "Initial website launch"
git push origin main
```

## ✨ Features

- **Fully responsive** - Works on all devices
- **No dependencies** - Single HTML file with embedded CSS/JS
- **Animated background** - Dynamic neural network visualization
- **Scroll animations** - Smooth reveal effects
- **Modern design** - Dark neuro-fintech aesthetic

## 🎨 Customization

### Colors
Edit the CSS variables in the `:root` selector:

```css
:root {
    --bg-deep: #0a0b0f;
    --accent-cyan: #00d4aa;
    --accent-blue: #4d7cff;
    --accent-purple: #9d7aff;
}
```

### Content
Simply edit the HTML text content to update:
- Hero headline and description
- Statistics
- Feature cards
- FRI metrics
- Process steps

## 📄 License

© 2025 Cogninance. All rights reserved.
