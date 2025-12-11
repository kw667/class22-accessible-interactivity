# Study Hub - Practice Methods Checklist

## Overview
This checklist maps each method/technique from INFO 1300 to specific files and locations in the Study Hub project. Use this to guide your implementation and ensure you're practicing all the key concepts.

---

## 📋 Lecture 1-2: HTML Structure & Semantic Markup

| Technique | File(s) | Section/Element | Status | Notes |
|-----------|---------|-----------------|--------|-------|
| **Semantic HTML Tags** | All `.html` files | `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<figure>`, `<aside>` | ✅ | Already included with TODO comments |
| **Heading Hierarchy** | All `.html` files | `<h1>`, `<h2>`, `<h3>` | ✅ | Practice proper nesting and semantics |
| **Lists** | `resources.html`, `tools.html`, `about.html` | `<menu>`, `<ul>`, `<li>` | ✅ | Navigation uses `<menu>` |
| **Image Structure** | All pages | `<figure>`, `<img>`, `alt=""` | 🔲 | **TODO**: Add actual images and alt text |
| **Nesting & Indentation** | All `.html` files | Check code structure | 🔲 | **TODO**: Verify proper indentation |

---

## 🎨 Lecture 3: CSS Styling & Properties

| Technique | File | CSS Rule/Class | Status | Notes |
|-----------|------|----------------|--------|-------|
| **Element Selector** | `site.css` | `body`, `h1`, `p`, `nav`, `footer` | ✅ | Applied to base elements |
| **Class Selector** | `site.css` | `.btn-primary`, `.feature-card`, `.filter-btn` | ✅ | Multiple classes for reuse |
| **Color & Contrast** | `site.css` | `color`, `background-color` | ✅ | Uses high-contrast colors |
| **Typography** | `site.css` | `font-family`, `font-size`, `font-weight` | ✅ | Includes fallback fonts |
| **Borders & Shapes** | `site.css` | `border`, `border-radius` | ✅ | Used on cards and buttons |

---

## 🔗 Lecture 4: Multi-Page Websites & Navigation

| Technique | File(s) | Location | Status | Notes |
|-----------|---------|----------|--------|-------|
| **Multi-Page Structure** | `index.html`, `subjects.html`, `resources.html`, `tools.html`, `about.html` | 5 pages created | ✅ | Navigate between pages |
| **Navigation Bar** | All `.html` files | `<nav>` in header | ✅ | Same nav on all pages |
| **Relative URLs** | All `.html` files | `href="subjects.html"` | ✅ | No domain needed |
| **Absolute URLs** | `about.html` | External links (privacy policy) | 🔲 | **TODO**: Add real external links |
| **Document Fragment Links** | `about.html` | `href="#about-project"`, `id="about-project"` | ✅ | Jump to sections on same page |

---

## 🖼️ Lecture 5: Images & Accessibility

| Technique | File(s) | Location | Status | Notes |
|-----------|---------|----------|--------|-------|
| **Image Element** | All pages | `<img src="..." alt="...">` | ✅ | Structure in place |
| **Alt Text** | All pages | `alt="descriptive text"` | ✅ | Already included |
| **Figure Element** | `index.html`, `subjects.html` | `<figure><img></figure>` | ✅ | Used for images |
| **Relative URLs for Images** | All pages | `src="images/..."` | 🔲 | **TODO**: Add actual images |
| **Image Formats** | (images folder) | `.jpg`, `.png`, `.svg` | 🔲 | **TODO**: Add sample images |
| **Responsive Images** | `site.css` | `width: 100%`, `height: auto` | ✅ | CSS sizing rules |

---

## 📦 Lecture 6: Box Model & Layout Planning

| Technique | File | CSS Property | Status | Notes |
|-----------|------|--------------|--------|-------|
| **Box Model** | `site.css` | `margin`, `padding`, `border` | ✅ | Applied to multiple elements |
| **Width & Height** | `site.css` | `width`, `height` | ✅ | Relative and fixed dimensions |
| **Margin** | `site.css` | `.feature-card`, `.navbar` | ✅ | Used for spacing elements |
| **Padding** | `site.css` | `.btn-primary`, `.hero-content` | ✅ | Internal spacing in elements |
| **Border** | `site.css` | `.subject-card`, `.resource-item` | ✅ | Outlines on cards |
| **Box Sizing** | `site.css` | `box-sizing: border-box` | ✅ | Reset at top of file |

---

## 🎭 Lecture 7: Visual Design & Theme

| Technique | File | Location | Status | Notes |
|-----------|------|----------|--------|-------|
| **Color Scheme** | `site.css` | Primary: `#3498db`, Secondary: `#95a5a6` | ✅ | Consistent across site |
| **Contrast** | `site.css` | Text color vs background | ✅ | WCAG AA compliant colors |
| **Typography** | `site.css` | `font-family`, `font-size` | ✅ | Serif/sans-serif distinction |
| **Imagery** | All pages | Hero image, subject icons | 🔲 | **TODO**: Add theme images |
| **Visual Hierarchy** | `site.css` | Font sizes, weights, spacing | ✅ | Larger headings for importance |
| **Alignment** | `site.css` | `text-align`, flexbox alignment | ✅ | Mostly left-aligned (readable) |
| **CSS Classes for Styling** | `site.css` | `.feature-card`, `.subject-card` | ✅ | Reusable styling classes |

---

## 📐 Lecture 9: Flexbox Layout

| Technique | File | CSS Rule | Status | Notes |
|-----------|------|----------|--------|-------|
| **Flexbox Container** | `site.css` | `display: flex` | ✅ | `.navbar-container`, `.hero`, `.features-container` |
| **Flex Direction** | `site.css` | `flex-direction: row`, `column` | ✅ | Row for nav, column for responsive |
| **Flex Wrap** | `site.css` | `flex-wrap: wrap` | ✅ | Cards wrap on smaller screens |
| **Gap** | `site.css` | `gap: 2rem` | ✅ | Spacing between flex items |
| **Flex Grow/Basis** | `site.css` | `flex: 1 1 calc()` | ✅ | Cards scale responsively |
| **Align Items** | `site.css` | `align-items: center` | ✅ | Vertical alignment in nav |
| **Justify Content** | `site.css` | `justify-content: space-between` | ✅ | Horizontal spacing |
| **Nested Flexbox** | `site.css` | Multiple containers with `display: flex` | ✅ | Flexbox inside flexbox |

---

## 📱 Lecture 10-12: Responsive Design & Media Queries

| Technique | File | CSS Rule | Status | Notes |
|-----------|------|----------|--------|-------|
| **Viewport Meta Tag** | All `.html` files | `<meta name="viewport" ...>` | ✅ | In `<head>` of all pages |
| **Relative Dimensions** | `site.css` | `width: 100%`, `max-width: 1200px` | ✅ | Flexible layout |
| **Min/Max Width** | `site.css` | `max-width`, `max-inline-size` | ✅ | Content framing |
| **Image Scaling** | `site.css` | Image `width: 100%`, `height: auto` | ✅ | Responsive images |
| **Media Query - Narrow** | `site.css` | `@media (max-width: 600px)` | ✅ | Mobile styles included |
| **Media Query - Medium** | `site.css` | `@media (min-width: 601px) and (max-width: 900px)` | ✅ | Tablet styles |
| **Flexbox Responsiveness** | `site.css` | `flex-direction` changes in media queries | 🔲 | **TODO**: Test and adjust breakpoints |

---

## ♿ Lecture 13: Accessibility

| Technique | File(s) | Location | Status | Notes |
|-----------|---------|----------|--------|-------|
| **Dark Mode Support** | `site.css` | `@media (prefers-color-scheme: dark)` | ✅ | TODO section included |
| **Reduced Motion** | `site.css` | `@media (prefers-reduced-motion: reduce)` | ✅ | Animations disabled |
| **Touch Device Sizing** | `site.css` | `@media (pointer: coarse)` | ✅ | Larger touch targets (48px min) |
| **ARIA Labels** | `index.html`, etc. | `aria-label=""` on buttons | ✅ | Added to icon buttons |
| **Focus States** | `site.css` | `button:focus`, `a:focus` | ✅ | 2px outline |
| **Outline Offset** | `site.css` | `outline-offset: 2px` | ✅ | Visible focus indicators |
| **Semantic HTML** | All `.html` | `<nav>`, `<main>`, `<article>` | ✅ | Screen reader support |
| **Accessible Hidden Class** | `site.css` | `.accessible-hidden` | ✅ | Hidden from view but visible to readers |

---

## 🎯 Lecture 18: Interactive Design Principles

| Principle | Application | File | Status | Notes |
|-----------|-------------|------|--------|-------|
| **Functional** | Filter buttons, cookie banner | `resources.html`, `index.html` | ✅ | Interactivity serves user goals |
| **Affordances** | Buttons look clickable (color, cursor) | `site.css` | ✅ | `.btn-primary:hover`, `cursor: pointer` |
| **Visibility** | Filter buttons visible, state indicators | `resources.html` | ✅ | `.active` class shows state |
| **Feedback** | Hover effects, active states | `site.css` | ✅ | `transition` effects |
| **Familiarity** | Standard button styles, nav patterns | All files | ✅ | Recognizable patterns |

---

## 💻 Lecture 19-22: Client-Side Interactivity & JavaScript

| Technique | File | Function | Status | Notes |
|-----------|------|----------|--------|-------|
| **Event Listener** | `cookie-banner.js`, `gallery.js` | `$().click()` | ✅ | Listen for user actions |
| **Page Ready Event** | `cookie-banner.js`, `gallery.js` | `$(document).ready()` | ✅ | Run code after page loads |
| **Add CSS Class** | `cookie-banner.js`, `gallery.js` | `.addClass()` | 🔲 | **TODO**: Implement in scripts |
| **Remove CSS Class** | `cookie-banner.js`, `gallery.js` | `.removeClass()` | 🔲 | **TODO**: Implement in scripts |
| **jQuery Selectors** | `cookie-banner.js`, `gallery.js` | `$("#id")`, `$(".class")` | ✅ | Written in comments |
| **Data Attributes** | `resources.html` | `data-subject=""` | ✅ | Store metadata on elements |
| **ID Attributes** | All `.html` files | `id="cookie-banner"`, `id="filter-all"` | ✅ | Unique identifiers for JS |
| **Pseudocode Comments** | `cookie-banner.js`, `gallery.js` | Step-by-step logic | ✅ | Comments show approach |

---

## 🍪 Cookie Banner - Full Interactivity Implementation

**File**: `scripts/cookie-banner.js`

**Pseudocode to implement**:
```
1. Page loads → $(document).ready()
2. Check if localStorage has 'cookie-choice'
   → If yes, hide banner immediately
3. User clicks "Accept" button → $("#cookie-accept").click()
   → Add class "cookie-hidden" to #cookie-banner
   → Save to localStorage: 'cookie-choice' = 'accepted'
4. User clicks "Reject" button → $("#cookie-reject").click()
   → Add class "cookie-hidden" to #cookie-banner
   → Save to localStorage: 'cookie-choice' = 'rejected'
```

**Status**: 🔲 **TODO** - Implement snippets in `cookie-banner.js`

---

## 🔍 Resource Filter - Full Interactivity Implementation

**File**: `scripts/gallery.js`

**Pseudocode to implement**:
```
1. Page loads → $(document).ready()
2. User clicks filter button → $(".filter-btn").click()
3. Extract subject from button ID
4. Remove "active" class from all filter buttons
5. Add "active" class to clicked button
6. Hide all resource items (add "hidden" class)
7. If "All" button clicked → show all items
8. If subject button clicked → show only items with matching data-subject
```

**Status**: 🔲 **TODO** - Implement snippets in `gallery.js`

---

## ✅ Responsive Testing Checklist

Before submitting, test the site on these devices:

| Test | Status | Notes |
|------|--------|-------|
| Mobile (375px width) | 🔲 | Test on iPhone size |
| Tablet (768px width) | 🔲 | Test on iPad size |
| Desktop (1200px width) | 🔲 | Test on full monitor |
| Touch gestures | 🔲 | Test on actual touch device |
| Keyboard navigation | 🔲 | Tab through all interactive elements |
| Screen reader (NVDA, JAWS) | 🔲 | Test semantic HTML + ARIA labels |
| Dark mode | 🔲 | Enable OS dark mode, check colors |
| Reduced motion | 🔲 | Enable reduced motion, check animations |
| Image alt text | 🔲 | Disable images, verify descriptions |
| Links work | 🔲 | Click all navigation and internal links |

---

## 🎓 Design Process Reflection

To complete your learning, document your design decisions:

1. **Audience**: Who is this site for? (College students)
2. **Goals**: What do users want to accomplish? (Organize study materials, access resources, improve study habits)
3. **Content**: What information does your site need? (Subjects, resources, tools, about)
4. **Organization**: How did you group content into pages? (Card sorting method)
5. **Layout**: Sketch responsive layout for mobile, tablet, desktop
6. **Visual Design**: Color scheme, typography, imagery choices
7. **Interactivity**: Why add each interactive feature? (Enhance user goals, not just for wow factor)
8. **Accessibility**: How does the site serve all users?

---

## 📊 Implementation Progress

Track your progress:

- [ ] All HTML files created with semantic markup
- [ ] CSS stylesheet with all styling rules
- [ ] Flexbox layouts responsive on mobile, tablet, desktop
- [ ] Media queries for breakpoints
- [ ] Cookie banner interactivity implemented
- [ ] Resource filter interactivity implemented
- [ ] Images added (hero, subjects, resources)
- [ ] All links tested and working
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Focus states visible on all interactive elements
- [ ] ARIA labels on icon buttons
- [ ] Dark mode CSS rules added (optional)
- [ ] Tested on mobile device
- [ ] Tested with screen reader

---

## 🔗 Reference Links

- **HTML Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference
- **CSS Reference**: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **jQuery Documentation**: https://jquery.com/
- **Web Accessibility**: https://www.w3.org/WAI/
- **Responsive Design**: https://web.dev/responsive-web-design-basics/

---

## 📝 Notes

Use this space to note:
- Design decisions
- Challenges and solutions
- Resources consulted
- Things to improve
- Questions for instructor

```
[Your notes here]
```

---

**Last Updated**: December 2025
**Status**: Study Hub - Starter Project
