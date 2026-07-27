---
name: Vibrant Zest
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5b403e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#8f706d'
  outline-variant: '#e3bebb'
  surface-tint: '#b81d27'
  primary: '#b51925'
  on-primary: '#ffffff'
  primary-container: '#d8363a'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3ae'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd34d'
  on-secondary-container: '#725b00'
  tertiary: '#00685d'
  on-tertiary: '#ffffff'
  tertiary-container: '#008376'
  on-tertiary-container: '#f4fffb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930015'
  secondary-fixed: '#ffe087'
  secondary-fixed-dim: '#ebc23e'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#8df5e4'
  tertiary-fixed-dim: '#70d8c8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 57px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built on the foundations of Material Design 3 (M3), tailored for a cocktail discovery experience that is fun, refreshing, and social. The style merges the systematic rigor of professional software with the energetic atmosphere of a summer sunset. 

The aesthetic is **Corporate Modern with a Tropical Twist**. It utilizes the M3 tonal palette system to ensure high accessibility while maintaining a vibrant personality. Key characteristics include:
- **Stateful Interaction:** Extensive use of ripples and surface tints to provide immediate feedback.
- **Dynamic Containment:** Using varying levels of elevation and color to separate exploration (discovery) from utility (recipes).
- **Social Flourish:** High-energy accents used to highlight social interactions like sharing and community ratings.

## Colors

The color system is organized into functional roles using a summer-inspired palette:

- **Primary (Coral - #FF5252):** Used for key actions, brand moments, and active states. It provides a warm, energetic focal point.
- **Secondary (Sunny Yellow - #FFD54F):** Used for highlighting "Staff Picks," ratings, and promotional elements.
- **Tertiary (Teal Blue - #00897B):** Used for navigation elements, category filters, and refreshing contrast against the warm primary.
- **Quaternary (Fresh Lime - #7CB342):** Specifically reserved for "Fresh" tags, botanical ingredients, and health-related indicators.
- **Surface/Neutral:** A crisp `#F8F9FA` background ensures the vibrant colors don't overwhelm the user, maintaining a professional and clean readability.

In line with M3, use container colors (e.g., Primary Container) which are desaturated versions of the main roles for larger background areas like card headers.

## Typography

The typography strategy pairs **Plus Jakarta Sans** for headlines with **Inter** for body and UI labels. 

- **Headlines:** Plus Jakarta Sans provides a soft, rounded, and welcoming feel that aligns with the "refreshing" brand personality. Use `display-lg` for hero cocktail names on recipe pages.
- **Body & Labels:** Inter is utilized for its exceptional legibility in dense ingredient lists and instructional steps. It provides the "professional" grounding the system requires.
- **Responsive Scaling:** Headline sizes drop by approximately 15% on mobile devices to ensure long cocktail names (e.g., "Strawberry Basil Margarita") do not wrap excessively.

## Layout & Spacing

The system follows a strict **8px linear grid**. All dimensions, padding, and margins should be multiples of 8.

- **Grid System:** A 12-column fluid grid for desktop and a 4-column fluid grid for mobile.
- **Navigation:**
    - **Desktop:** A permanent Navigation Rail (80px width) on the left for quick access to Home, Search, Bookmarks, and Profile.
    - **Mobile:** A Bottom Navigation bar for primary destinations.
- **Safe Zones:** Maintain a minimum 16px "screen margin" on mobile to prevent content from touching the edges of the device.
- **Vertical Rhythm:** Use 24px (`lg`) spacing between distinct sections (e.g., between "Recent Searches" and "Trending Drinks").

## Elevation & Depth

In accordance with M3, this design system uses **Tonal Elevation** rather than heavy drop shadows to communicate hierarchy.

- **Level 0 (Flat):** The main background surface.
- **Level 1 (Elevated):** Standard cards and the navigation rail. Use a subtle +5% Primary color overlay on the surface color to indicate elevation.
- **Level 2 (Interaction):** Hover states for cards and active button states.
- **Level 3 (Floating):** Floating Action Buttons (FABs) for "Create New Cocktail" and Modal Dialogs. These use a soft, diffused ambient shadow with a slight Coral tint (#FF5252 at 8% opacity).
- **Backdrop Blur:** Use a 12px blur on top app bars when scrolling content underneath to maintain the "refreshing/glassy" cocktail feel without breaking the M3 structure.

## Shapes

The shape language is consistently **Rounded**, reflecting the approachable and social nature of the app.

- **Small Components:** Checkboxes and small tags use `rounded-sm` (4px).
- **Medium Components:** Buttons and Input Fields use `rounded-md` (8px).
- **Large Components:** Cocktail detail cards and bottom sheets use `rounded-lg` (16px).
- **Extra Large:** The search bar and "Filter" chips use `rounded-xl` (24px) or full pill-shape to encourage touch interaction.

## Components

### Buttons
- **Primary FAB:** A large, rounded-square FAB for "Discovery Mode." Uses a Coral background with a White icon.
- **Filled Buttons:** Used for "Add to Cart" or "Start Mixing." Always include an 8px corner radius and a Material Ripple effect on press.
- **Icon Buttons:** Bookmarking (Heart) and Sharing use standard M3 icon buttons. When a cocktail is "Liked," the heart should transition from an outline to a filled Coral state.

### Cards
- **Cocktail Cards:** Elevated (Level 1) with a 16px corner radius. The image should occupy the top half of the card with a subtle gradient overlay at the bottom to ensure the Cocktail Name (White text) is legible.
- **Ingredient Chips:** Small, tonal chips using the Tertiary (Teal) or Quaternary (Lime) colors to categorize ingredients (e.g., "Gin Based," "Citrus").

### Input Fields
- **Search Bar:** A docked search bar at the top of the discovery feed with a full pill-shape (24px+ radius) and a leading "Search" icon and trailing "Filter" icon.

### Selection Controls
- **Switches & Radio Buttons:** Use the Teal Blue for active states to distinguish functional settings from primary brand actions.