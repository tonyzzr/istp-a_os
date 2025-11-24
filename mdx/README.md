# ISTP-A BOS Manual - MDX Version

This directory contains the MDX (Markdown + JSX) version of the ISTP-A Behavioral Operating System manual, optimized for use with modern documentation frameworks.

## 📁 Directory Structure

```
mdx/
├── index.mdx                    # Main entry point with sections 1-3
├── components/
│   └── MDXComponents.jsx        # Reusable React components
├── sections/
│   ├── 04-core-principles.mdx   # Section 4: Core Principles
│   ├── 06-priority-os.mdx       # Section 6: Priority OS
│   └── 07-case-studies.mdx      # Sections 7-12: Case Studies
└── README.md                    # This file
```

## 🚀 Usage with Popular Frameworks

### Next.js (with MDX)

1. Install dependencies:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

2. Configure `next.config.js`:
```javascript
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
```

3. Import and use:
```jsx
import IndexPage from './mdx/index.mdx'

export default function Home() {
  return <IndexPage />
}
```

### Docusaurus

1. Copy MDX files to `docs/` directory
2. Update frontmatter with Docusaurus-specific fields
3. Import components in `docusaurus.config.js`

### Astro

1. Place MDX files in `src/pages/` or `src/content/`
2. Configure MDX in `astro.config.mjs`:
```javascript
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
});
```

3. Import and render:
```astro
---
import Content from '../mdx/index.mdx';
---
<Content />
```

### Gatsby

1. Install plugin:
```bash
npm install gatsby-plugin-mdx @mdx-js/react
```

2. Configure `gatsby-config.js`:
```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
```

## 🎨 Custom Components

The manual uses several custom MDX components for enhanced presentation:

### `<HighlightBox>`
Purple gradient boxes for key concepts and important information.

```mdx
<HighlightBox title="Important Concept">
  Your content here
</HighlightBox>
```

### `<ConceptBox>`
Blue-bordered boxes for definitions and explanations.

```mdx
<ConceptBox title="Key Definition">
  - Point 1
  - Point 2
</ConceptBox>
```

### `<CaseStudy>`
Orange-bordered boxes for practical examples.

```mdx
<CaseStudy title="Example: Baseline">
  Description of the case study
</CaseStudy>
```

### `<Framework>`
Visual representation of the BOS framework steps.

```mdx
<Framework
  steps={["Baseline", "Structure", "Modules", "Pipeline", "Entry Point", "Snapshot"]}
/>
```

### `<BosStep>`
Detailed step-by-step breakdown with labeled sections.

```mdx
<BosStep step="Baseline" title="Getting Started">
  Step description
</BosStep>
```

### `<PriorityDimensions>`
Pre-configured component showing the 5 Priority OS dimensions.

```mdx
<PriorityDimensions />
```

## 🎨 Styling

Component styles are included in `components/MDXComponents.jsx` as an exported `componentStyles` string. You can:

1. **Import directly** in your framework's global CSS
2. **Use CSS-in-JS** by converting to styled-components
3. **Inline in your layout** component

Example for Next.js:
```jsx
// pages/_app.js
import { componentStyles } from '../mdx/components/MDXComponents'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{componentStyles}</style>
      <Component {...pageProps} />
    </>
  )
}
```

## 📋 Frontmatter

Each MDX file includes frontmatter metadata:

```yaml
---
title: Section Title
description: Section description
section: Section number
---
```

## 🔧 Customization

### Adding New Sections

1. Create a new `.mdx` file in `sections/`
2. Add appropriate frontmatter
3. Import components: `import { Component } from '../components/MDXComponents'`
4. Link from main index or other sections

### Modifying Components

Edit `components/MDXComponents.jsx` to:
- Change styling
- Add new component types
- Modify existing component behavior

### Styling Adjustments

Modify the `componentStyles` export in `MDXComponents.jsx` or override with your framework's styling solution.

## 🌐 Language Support

The manual is written in **Chinese (Simplified)**. To add translations:

1. Create language-specific directories: `mdx/zh-CN/`, `mdx/en/`, etc.
2. Duplicate MDX files
3. Translate content while preserving component structure
4. Update navigation/routing in your framework

## 📱 Responsive Design

All components are responsive with mobile-first breakpoints at:
- `768px` - Tablet
- Framework components adapt automatically

## 🖨️ Print Support

For print-optimized output, add print styles to your framework:

```css
@media print {
  .highlight-box,
  .concept-box,
  .case-study {
    page-break-inside: avoid;
    background: #f5f5f5 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
```

## 🤝 Contributing

To maintain consistency:
1. Follow existing component patterns
2. Use semantic HTML
3. Keep frontmatter consistent
4. Test in multiple frameworks before committing

## 📄 License

Same as parent project.

---

**Version:** v3
**Format:** MDX (Markdown + JSX)
**Components:** React-based
**Styling:** CSS + Inline Styles
