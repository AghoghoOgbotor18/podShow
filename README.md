# 🎧 Podcast Landing Page (Styled Components Practice)

## 🌐 Live Demo
🔗 **https://podshow.vercel.app**


This project is a **modern podcast landing page** built with **React + Vite**, created primarily to **practice and deepen my understanding of Styled Components**, animations, and frontend performance optimization.

Beyond styling, this project also explores **real-world UI concerns** such as image performance, preloading, lazy loading, layout stability, and smooth animations.

---

## 🚀 Tech Stack

- **React (Vite)**
- **Styled Components**
- **Framer Motion** (animations)
- **React Icons**
- **Modern CSS practices**
- **Optimized assets (WebP, JPG)**

---

## 🎯 Project Goals

This project was built to:

- Practice **Styled Components architecture**
- Work with **animated UI elements**
- Handle **hero image sliders**
- Improve **image performance**
- Understand **preloading vs lazy loading**
- Prevent layout shifts and flickering
- Build a clean, reusable component structure

---

## ✨ Features

### 🖼️ Hero Section
- Animated background image slider
- Smooth fade transitions using **Framer Motion**
- Images preloaded for better performance
- No lazy loading (hero is above-the-fold)
- Text and CTA animated with staggered effects

### 🔥 Trending Section
- Image-based content cards
- Animations applied to containers instead of images
- Fixed container sizes to prevent layout shift
- Lazy loading disabled to avoid flickering
- Optimized image formats

### 🎈 Floating Component
- Separate reusable component
- Visually connects the hero and trending sections
- Positioned carefully to feel part of both sections
- Maintains clean component separation

### 🎨 Styling
- Fully styled using **Styled Components**
- No global CSS dependencies
- Component-scoped styles
- Reusable styled elements
- Clean design system structure

---

## ⚡ Performance Optimizations

This project intentionally focuses on **frontend performance best practices**:

### Image Optimization
- Converted images to **WebP where beneficial**
- Kept JPG where WebP increased file size
- Used correct image formats based on content

### Loading Strategy
- **Hero images**
  - Moved to `/public`
  - Preloaded via `index.html`
  - Loaded eagerly
- **Trending images**
  - Not lazy loaded (above-the-fold)
  - Fixed container dimensions
- **Below-the-fold images**
  - Lazy loading enabled where appropriate

### Flicker & Layout Shift Fixes
- Removed lazy loading from animated images
- Reserved layout space using fixed heights
- Animated wrappers instead of `<img>` tags
- Avoided unnecessary re-renders

---

## 📂 Project Structure

```txt
src/
│── components/
│   ├── Hero/
│   ├── Trending/
│   ├── Floating/
│   └── common/
│
│── styles/
│
public/
│── images/
│   ├── hero-bg.jpg
│   ├── women3.jpg
│   └── women4.jpg
│
index.html

```

---

# Clone the repo
git clone https://github.com/your-username/project-name.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
