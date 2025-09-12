const fs = require('fs');
const path = require('path');

const replacements = [
  // Radix UI components
  { from: /@radix-ui\/react-accordion@[0-9.]*"/g, to: '@radix-ui/react-accordion"' },
  { from: /@radix-ui\/react-alert-dialog@[0-9.]*"/g, to: '@radix-ui/react-alert-dialog"' },
  { from: /@radix-ui\/react-aspect-ratio@[0-9.]*"/g, to: '@radix-ui/react-aspect-ratio"' },
  { from: /@radix-ui\/react-avatar@[0-9.]*"/g, to: '@radix-ui/react-avatar"' },
  { from: /@radix-ui\/react-checkbox@[0-9.]*"/g, to: '@radix-ui/react-checkbox"' },
  { from: /@radix-ui\/react-collapsible@[0-9.]*"/g, to: '@radix-ui/react-collapsible"' },
  { from: /@radix-ui\/react-context-menu@[0-9.]*"/g, to: '@radix-ui/react-context-menu"' },
  { from: /@radix-ui\/react-dialog@[0-9.]*"/g, to: '@radix-ui/react-dialog"' },
  { from: /@radix-ui\/react-dropdown-menu@[0-9.]*"/g, to: '@radix-ui/react-dropdown-menu"' },
  { from: /@radix-ui\/react-hover-card@[0-9.]*"/g, to: '@radix-ui/react-hover-card"' },
  { from: /@radix-ui\/react-label@[0-9.]*"/g, to: '@radix-ui/react-label"' },
  { from: /@radix-ui\/react-menubar@[0-9.]*"/g, to: '@radix-ui/react-menubar"' },
  { from: /@radix-ui\/react-navigation-menu@[0-9.]*"/g, to: '@radix-ui/react-navigation-menu"' },
  { from: /@radix-ui\/react-popover@[0-9.]*"/g, to: '@radix-ui/react-popover"' },
  { from: /@radix-ui\/react-progress@[0-9.]*"/g, to: '@radix-ui/react-progress"' },
  { from: /@radix-ui\/react-radio-group@[0-9.]*"/g, to: '@radix-ui/react-radio-group"' },
  { from: /@radix-ui\/react-scroll-area@[0-9.]*"/g, to: '@radix-ui/react-scroll-area"' },
  { from: /@radix-ui\/react-select@[0-9.]*"/g, to: '@radix-ui/react-select"' },
  { from: /@radix-ui\/react-separator@[0-9.]*"/g, to: '@radix-ui/react-separator"' },
  { from: /@radix-ui\/react-slider@[0-9.]*"/g, to: '@radix-ui/react-slider"' },
  { from: /@radix-ui\/react-switch@[0-9.]*"/g, to: '@radix-ui/react-switch"' },
  { from: /@radix-ui\/react-tabs@[0-9.]*"/g, to: '@radix-ui/react-tabs"' },
  { from: /@radix-ui\/react-toggle@[0-9.]*"/g, to: '@radix-ui/react-toggle"' },
  { from: /@radix-ui\/react-toggle-group@[0-9.]*"/g, to: '@radix-ui/react-toggle-group"' },
  { from: /@radix-ui\/react-tooltip@[0-9.]*"/g, to: '@radix-ui/react-tooltip"' },
  { from: /@radix-ui\/react-slot@[0-9.]*"/g, to: '@radix-ui/react-slot"' },
  
  // Other packages
  { from: /class-variance-authority@[0-9.]*"/g, to: 'class-variance-authority"' },
  { from: /lucide-react@[0-9.]*"/g, to: 'lucide-react"' },
  { from: /cmdk@[0-9.]*"/g, to: 'cmdk"' },
  { from: /embla-carousel-react@[0-9.]*"/g, to: 'embla-carousel-react"' },
  { from: /input-otp@[0-9.]*"/g, to: 'input-otp"' },
  { from: /next-themes@[0-9.]*"/g, to: 'next-themes"' },
  { from: /react-day-picker@[0-9.]*"/g, to: 'react-day-picker"' },
  { from: /react-hook-form@[0-9.]*"/g, to: 'react-hook-form"' },
  { from: /react-resizable-panels@[0-9.]*"/g, to: 'react-resizable-panels"' },
  { from: /recharts@[0-9.]*"/g, to: 'recharts"' },
  { from: /sonner@[0-9.]*"/g, to: 'sonner"' },
  { from: /vaul@[0-9.]*"/g, to: 'vaul"' },
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const replacement of replacements) {
    const newContent = content.replace(replacement.from, replacement.to);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

// Fix both components and oldcomponents directories
walkDir('src/components');
walkDir('src/oldcomponents');

console.log('Import fixes completed!');
