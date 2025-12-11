# 📚 Study Hub - Practice Project for INFO 1300

A student-built learning resource website to practice web design and development concepts from Cornell University's INFO 1300 course.

## Project Overview

**What is Study Hub?**
A multi-page responsive website where college students can discover study materials, access study tools, and organize their learning resources by subject.

**Who should use this?**
- INFO 1300 students practicing web design fundamentals
- Anyone learning HTML, CSS, and JavaScript interactivity
- Programmers wanting to review web accessibility best practices

**Scope**: 5 pages, responsive design, static client-side interactivity

---

## 🗂️ Project Structure

```
study-hub/
├── index.html                 # Home page
├── subjects.html              # Browse study subjects
├── resources.html             # Search and filter resources
├── tools.html                 # Study tools (timer, carousel, etc.)
├── about.html                 # About the project + info
├── PRACTICE-CHECKLIST.md      # Method → File mapping
├── styles/
│   └── site.css              # All CSS styling
├── scripts/
│   ├── jquery-3.7.1.js       # jQuery library (provided)
│   ├── cookie-banner.js      # Cookie banner interactivity (TODO)
│   └── gallery.js            # Resource filtering (TODO)
└── images/
    ├── hero-study.jpg        # (TODO: Add hero image)
    └── subjects/             # (TODO: Add subject icons)
```

---

## 🚀 Quick Start

### 1. Open the Project
Open `index.html` in a web browser to view the site.

### 2. Explore the Structure
- **Read the HTML files** to understand semantic markup and structure
- **Review the CSS file** to see styling techniques
- **Check the JavaScript files** for interactivity patterns

### 3. Follow the TODOs
Each file contains `<!-- TODO: -->` and `// TODO:` comments showing where to implement features.

### 4. Use the Checklist
See **PRACTICE-CHECKLIST.md** for a complete mapping of every INFO 1300 technique to specific file locations.

---

## 📖 What You'll Practice

### HTML (Lecture 2)
- ✅ Semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<figure>`, etc.)
- ✅ Proper nesting and indentation
- ✅ Image structure with `<figure>` and alt text
- ✅ Navigation and multi-page linking
- 🔲 **TODO**: Add actual content and images

### CSS (Lectures 3, 6-7, 9-12)
- ✅ Element selectors, class selectors, descendant combinators
- ✅ Color, typography, spacing (box model)
- ✅ Flexbox layout
- ✅ Responsive design (media queries, flexible dimensions)
- ✅ Focus states and accessibility styling
- 🔲 **TODO**: Add hover effects, complete dark mode

### JavaScript (Lectures 19-22)
- ✅ Event listeners (`click`, `ready`)
- ✅ jQuery selectors and DOM manipulation
- 🔲 **TODO**: Implement cookie banner dismissal
- 🔲 **TODO**: Implement resource filtering

### Design Process (Lecture 16)
- ✅ Audience identification
- ✅ Goal-driven content
- ✅ Multi-page organization (card sorting)
- ✅ Responsive layout design
- ✅ Visual design principles
- ✅ Accessibility considerations

### Accessibility (Lecture 13)
- ✅ Semantic HTML
- ✅ ARIA labels on buttons
- ✅ Focus states for keyboard navigation
- ✅ Dark mode media query
- ✅ Reduced motion media query
- ✅ Touch-friendly button sizes (48px min)

---

## 🎯 Implementation Steps

### Phase 1: Structure & Styling (Days 1-2)
1. ✅ Create 5 HTML pages with navigation
2. ✅ Add semantic HTML structure to all pages
3. ✅ Create CSS file with base styles
4. ✅ Style buttons, cards, navbar

### Phase 2: Responsive Layout (Day 3)
1. ✅ Build flexbox layouts
2. ✅ Add media queries for mobile, tablet, desktop
3. 🔲 **TODO**: Test responsiveness by resizing browser
4. 🔲 **TODO**: Add images and test image scaling

### Phase 3: Interactivity (Day 4)
1. 🔲 **TODO**: Implement cookie banner (click → hide)
2. 🔲 **TODO**: Implement resource filter (click button → show/hide items)
3. 🔲 **TODO**: Test on mobile (touch events)
4. 🔲 **TODO**: Test keyboard navigation (Tab key)

### Phase 4: Polish & Testing (Day 5)
1. 🔲 **TODO**: Add actual images
2. 🔲 **TODO**: Verify all links work
3. 🔲 **TODO**: Test with screen reader
4. 🔲 **TODO**: Lighthouse audit (Performance, Accessibility, SEO)

---

## 💡 Key Concepts to Practice

### Static Front-End Website
- Content doesn't change (no database)
- All content is in HTML files
- Uses client-side interactivity only

### Client-Side Interactivity
- Changes to page happen **without reloading**
- Uses existing HTML + CSS + JavaScript
- No new content downloaded from server

**Example**: Click "Accept" button → CSS class added → Banner hidden

### Responsive Design
- Same content, different layout for different screen sizes
- Test by resizing browser window
- Use flexbox, media queries, relative dimensions

### Accessibility
- Works for all users (keyboard, screen readers, etc.)
- Semantic HTML helps assistive technology
- Visible focus states for keyboard users

---

## 🔧 JavaScript Implementation Guide

### Cookie Banner (`scripts/cookie-banner.js`)

**Goal**: When user clicks "Accept" or "Reject", hide the banner and save their choice.

**Steps**:
1. Use event snippet to listen for `$("#cookie-accept").click()`
2. Use action snippet to add class `"cookie-hidden"` to `#cookie-banner`
3. Save choice to localStorage using `localStorage.setItem()`
4. On page load, check localStorage and hide banner if already chosen

**Pseudocode**:
```
When page loads:
  Check localStorage for 'cookie-choice'
  If exists: Hide banner immediately

When "Accept" clicked:
  Add .cookie-hidden class (triggers display: none)
  Save 'cookie-choice' = 'accepted' to localStorage

When "Reject" clicked:
  Add .cookie-hidden class (triggers display: none)
  Save 'cookie-choice' = 'rejected' to localStorage
```

### Resource Filter (`scripts/gallery.js`)

**Goal**: When user clicks a subject filter button, show/hide matching resources.

**Steps**:
1. Get subject from button ID (e.g., "filter-math" → "math")
2. Remove "active" class from all buttons
3. Add "active" class to clicked button
4. Hide all `.resource-item` elements (add "hidden" class)
5. Show only items with matching `data-subject` attribute

**Pseudocode**:
```
When filter button clicked:
  1. Get subject from button ID
  2. Remove .active from all buttons
  3. Add .active to this button
  4. Hide all resources (add .hidden)
  5. Show matching resources (remove .hidden)
```

---

## 🧪 Testing Checklist

### Browser Testing
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works on mobile browser

### Responsive Testing
- [ ] Mobile layout (375px)
- [ ] Tablet layout (768px)
- [ ] Desktop layout (1200px)
- [ ] Layouts adjust smoothly when resizing

### Interactivity Testing
- [ ] Cookie banner buttons work
- [ ] Filter buttons work on resources page
- [ ] Hover effects visible on buttons
- [ ] Focus ring visible when tabbing

### Accessibility Testing
- [ ] Navigate site with keyboard only (Tab key)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Disable images, verify alt text makes sense
- [ ] Enable dark mode, colors are readable
- [ ] Enable reduced motion, no jarring animations

### Performance Testing
- [ ] Use Chrome DevTools → Lighthouse
- [ ] Check Performance score
- [ ] Check Accessibility score
- [ ] Check SEO score

---

## 📚 Reference Materials

### Class Lectures
- **Lecture 1**: Web design & user-centered design
- **Lecture 2**: HTML structure
- **Lecture 3**: CSS styling
- **Lecture 4**: Multi-page websites, navigation
- **Lecture 5**: Images & accessibility
- **Lecture 6**: Box model & layout planning
- **Lecture 7**: Visual design & theme
- **Lecture 9**: Flexbox
- **Lecture 10-12**: Responsive design & media queries
- **Lecture 13**: Accessibility considerations
- **Lecture 16**: User research & design process
- **Lecture 18**: Interaction design principles
- **Lecture 19-22**: Client-side interactivity

### Documentation Links
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [jQuery Official Docs](https://jquery.com/)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/)
- [Responsive Web Design](https://web.dev/responsive-web-design-basics/)

---

## 🎨 Design Decisions

### Audience
College students looking to organize study materials and develop better study habits.

### Color Scheme
- **Primary Blue**: `#3498db` - Calls to action, clickable elements
- **Dark Gray**: `#2c3e50` - Headers, navbar
- **Light Gray**: `#f9f9f9` - Backgrounds
- **High Contrast**: Text on backgrounds for WCAG AA compliance

### Typography
- **Sans-serif**: `'Segoe UI', 'Arial', sans-serif` - Readable, modern
- **Heading sizes**: Scale down from large (home) to smaller (pages)
- **Line height**: 1.6 for comfortable reading

### Layout
- **Narrow screens**: Vertical stack (column layout)
- **Wide screens**: Horizontal arrangement (flexbox row)
- **Max width**: 1200px to keep content readable

### Accessibility
- **Focus states**: 2px outline visible on all interactive elements
- **ARIA labels**: Descriptive labels on icon buttons
- **Semantic HTML**: Screen readers understand page structure
- **Dark mode support**: Respects user's system preference
- **Motion**: Reduced motion media query disables animations

---

## 🐛 Common Issues & Solutions

### Issue: Navigation links don't work
**Solution**: Make sure file paths are correct and files exist in the right folders.
```html
<!-- Correct -->
<a href="subjects.html">Subjects</a>

<!-- Wrong -->
<a href="subjects">Subjects</a>  <!-- Missing .html -->
<a href="/subjects.html">Subjects</a>  <!-- Absolute path -->
```

### Issue: Flexbox isn't working
**Solution**:
1. Make sure parent has `display: flex`
2. Only direct children are affected
3. Check that elements have `flex` properties set

### Issue: JavaScript not running
**Solution**:
1. jQuery must load **before** custom scripts
2. Scripts must be **before closing `</body>`** tag
3. Check browser console (F12) for errors
4. Verify element IDs match selectors in JavaScript

### Issue: Images not loading
**Solution**:
1. Use relative paths: `src="images/hero.jpg"`
2. Don't hotlink to external URLs
3. Check file names are case-sensitive
4. Verify images are in `images/` folder

---

## 📝 Next Steps

After completing this project:

1. **User Testing**: Have classmates use your site and observe where they struggle
2. **Iterate**: Fix usability issues based on feedback
3. **Enhance**: Add more resources, tools, and features
4. **Deploy**: Publish to web using GitHub Pages or web hosting
5. **Share**: Get feedback from real users

---

## 👨‍🎓 Learning Outcomes

By completing this project, you'll:
- ✅ Understand user-centered design process
- ✅ Structure content with semantic HTML
- ✅ Style with CSS flexbox and responsive design
- ✅ Implement client-side interactivity with JavaScript
- ✅ Build accessible websites for all users
- ✅ Test and evaluate your design

---

## 📞 Support

- **Stuck on a TODO?** Look for comments in the code with hints
- **Check PRACTICE-CHECKLIST.md** for technique locations
- **Review reference docs** linked in each file
- **Test in browser** - use Inspector (F12) to debug

---

## 📄 License

This is a student project for educational purposes.

---

**Happy learning! 🎉**

Build something awesome with what you've learned in INFO 1300!
