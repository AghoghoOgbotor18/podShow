# 🎙️ PodShow – Styled Components Practice Project

## 🌐 Live Demo
🔗 **https://podshow.vercel.app**

---

## 📌 Project Overview
**PodShow** is a responsive podcast landing page built with **React** and **styled-components**.  
The project was created to practice **component-based styling**, responsive layouts, and modern UI patterns using styled-components in a real-world scenario.

The interface is inspired by podcast and media platforms, with a strong focus on clean visuals, reusable components, and smooth user interactions.

---

## 🎯 Purpose of the Project
This project was built to:

- Practice **styled-components** in a real-world UI use case  
- Understand **component-scoped styling** and style composition  
- Build responsive layouts without traditional CSS files  
- Improve React component structure and reusability  
- Experiment with animations, transitions, and hover effects  
- Strengthen frontend architecture and design consistency  

---

## 🛠️ Built With
- **React**
- **Styled-Components**
- **Framer Motion**
- **React Icons**
- **JavaScript (ES6+)**
- **Vite**

---

## ✨ Features Implemented
- Responsive **Navbar**
- Hero section with animated background
- About section
- “Why Choose Us” section featuring:
  - Image-centered layout
  - Accordion-style FAQ
- Testimonial section with:
  - Auto-sliding testimonial cards
  - Responsive card display (desktop, tablet, mobile)
  - Smooth slide-in animations
  - Pagination dots
- Trending episodes section
- Call-to-Action (CTA) subscription section
- Contact section
- Fully responsive layout across all screen sizes

---

## 📱 Responsiveness
The application adapts seamlessly across:
- Desktop
- Tablet
- Mobile devices  

Media queries are handled directly within **styled-components**, keeping styles modular and maintainable.

---

## 🎨 Styling Approach
- All styles are written using **styled-components**
- No external CSS or SCSS files
- Styles are scoped per component
- Uses transient props (`$prop`) to prevent DOM warnings
- Emphasis on spacing, typography hierarchy, and subtle UI animations

---

## ⚡ Performance
Performance optimization is **not yet finalized**.

Planned optimizations include:
- Image optimization and lazy loading
- Bundle size reduction
- Lighthouse performance improvements

---

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/podshow.git
cd podshow
npm install
npm run dev
