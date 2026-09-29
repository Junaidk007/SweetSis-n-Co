# SweetSis & Co. — Luxury Artisan Bakery Website Prompt

## 1. Goal Statement

Build a romantic, premium, editorial e-commerce bakery website for **SweetSis & Co.**, a boutique artisan bakery specializing in beautifully crafted cakes, pastries, cookies, breads, celebration desserts, and custom orders.

The visual identity should feel like:

> **A modern luxury bakery meets a soft botanical magazine editorial.**

The website should combine:

- Soft blossom pink
- Fresh botanical greens
- Warm cream
- Natural textures
- Elegant typography
- High-quality food photography
- Subtle floral/bakery-inspired details
- Smooth Framer Motion animations
- Premium editorial layouts
- Warm, feminine but sophisticated branding

The overall feeling should be:

**Elegant · Warm · Handmade · Fresh · Romantic · Premium · Artistic**

Avoid making the website look childish, overly cute, or like a generic bakery template.

---

# 2. Tech Stack

Use:

```txt
React
Vite
JavaScript
Tailwind CSS
Framer Motion
motion/react
shadcn/ui
lucide-react
```

### Important

- **Use JavaScript, NOT TypeScript.**
- Use `.jsx` files instead of `.tsx`.
- Use **Framer Motion / motion/react** for animations and interactions.
- Do not introduce unnecessary libraries.
- Keep the architecture clean, modular, and production-ready.
- Use reusable React components.
- Use Tailwind CSS for styling.
- Use shadcn/ui only where it genuinely improves the UI.

Suggested structure:

```txt
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── CategoryCard.jsx
│   ├── FeaturedProducts.jsx
│   ├── About.jsx
│   ├── HowItWorks.jsx
│   ├── CustomOrders.jsx
│   ├── Testimonials.jsx
│   ├── Newsletter.jsx
│   ├── Footer.jsx
│   ├── FloatingPetals.jsx
│   └── GrainOverlay.jsx
│
├── data/
│   └── products.js
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 3. Design Direction

The website should NOT look like a typical colorful bakery website.

Avoid:

- Excessive pink
- Cartoon illustrations
- Bubble-shaped UI
- Excessive rounded cards
- Childish fonts
- Bright saturated colors
- Generic stock-template layouts

Instead use:

- Editorial whitespace
- Large food photography
- Asymmetrical layouts
- Elegant typography
- Sharp or subtly rounded corners
- Thin borders
- Botanical-inspired details
- Soft shadows
- Large visual sections
- Layered images
- Subtle grain texture
- Premium magazine-style composition

Think:

**Luxury patisserie + botanical editorial + modern fashion brand.**

---

# 4. Color Palette

Use the palette from the provided reference image.

### Primary — Soft Blossom

```css
--primary: #F6C6C6;
```

Use this as the **main brand color**.

Use it for:

- CTA buttons
- Highlights
- Hover states
- Small decorative elements
- Important accents
- Selected states
- Product badges

### Garden Green

```css
--garden-green: #7FB069;
```

Use for:

- Secondary buttons
- Botanical accents
- Icons
- Small labels
- Decorative elements

### Fresh Leaf

```css
--fresh-leaf: #B9D8A0;
```

Use as:

- Secondary backgrounds
- Soft highlight blocks
- Category backgrounds
- Hover backgrounds

### Spring Mist

```css
--spring-mist: #F3F8E8;
```

Use as:

- Main light section background
- Product section background
- Newsletter section
- Soft contrast sections

### Deep Stem

```css
--deep-stem: #3D4930;
```

Use for:

- Main text
- Navbar text
- Footer
- Dark sections
- Headings
- High contrast UI

### Warm Cream

```css
--warm-cream: #F4DFD7;
```

Use for:

- Cards
- Secondary sections
- Product backgrounds
- Decorative areas

### Suggested CSS variables

```css
:root {
  --background: #F3F8E8;
  --foreground: #3D4930;

  --primary: #F6C6C6;
  --primary-foreground: #3D4930;

  --secondary: #7FB069;
  --secondary-foreground: #FFFFFF;

  --fresh-leaf: #B9D8A0;
  --spring-mist: #F3F8E8;
  --warm-cream: #F4DFD7;
  --deep-stem: #3D4930;

  --card: #FFF9F5;
  --border: #E7D8D0;
  --muted-foreground: #6F7564;
}
```

### Color philosophy

The **Soft Blossom Pink must remain the primary visual identity**.

Green should balance the pink rather than dominate it.

Use approximately:

```txt
40% Spring Mist / Cream
30% Soft Blossom Pink
20% Deep Stem / Garden Green
10% Fresh Leaf accents
```

---

# 5. Typography

Use elegant editorial typography.

Import:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Display Font

**Cormorant Garamond**

Use for:

- H1
- H2
- H3
- Product names
- Prices
- Quotes
- Editorial statements

Primary hero heading should use:

```css
font-family: 'Cormorant Garamond', serif;
font-style: italic;
font-weight: 500;
```

### Body Font

**Jost**

Use for:

- Navigation
- Buttons
- Body text
- Product descriptions
- Labels
- Forms
- Metadata

### Eyebrows

```txt
Jost
0.7rem
font-weight: 500
letter-spacing: 0.2em
text-transform: uppercase
```

### Product prices

Use Cormorant Garamond:

```txt
1.4–1.8rem
font-weight: 500
```

---

# 6. Visual Effects

## Effect 1 — Floating Blossom Particles

Create a subtle floating petal animation using Framer Motion.

Use soft pink petals rather than random generic shapes.

```jsx
import { motion } from "framer-motion";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 90 + 5}%`,
  delay: Math.random() * 4,
  duration: 7 + Math.random() * 4,
}));
```

Each petal should:

- Fall slowly
- Rotate naturally
- Move slightly horizontally
- Have low opacity
- Never distract from the content

Animation:

```jsx
<motion.div
  animate={{
    y: ["0vh", "110vh"],
    x: [0, 30, -20, 10],
    rotate: [0, 180, 360],
  }}
  transition={{
    duration: petal.duration,
    delay: petal.delay,
    repeat: Infinity,
    ease: "linear",
  }}
/>
```

Use approximately **8 petals on mobile** and **12–14 on desktop**.

---

# 7. Hero Section

Create a full-screen luxury bakery hero.

### Visual

Use a breathtaking close-up bakery image:

> Freshly baked strawberry and cream cake with delicate pink flowers, glossy frosting, artisanal pastry details, warm natural morning light, soft cream tablecloth, subtle botanical greenery, editorial food photography, luxurious bakery campaign photography.

The image should occupy the entire hero.

Use a subtle overlay:

```css
background:
linear-gradient(
  90deg,
  rgba(61,73,48,0.78) 0%,
  rgba(61,73,48,0.38) 45%,
  rgba(61,73,48,0.05) 100%
);
```

### Content

Eyebrow:

```txt
ARTISAN BAKERY & PATISSERIE
```

H1:

```txt
Made Sweet.
Made Beautiful.
Made With Love.
```

Alternative line break:

```txt
Sweet moments,
beautifully baked.
```

Subtext:

```txt
Handcrafted cakes, pastries, and little indulgences made fresh with beautiful ingredients and a whole lot of heart.
```

Buttons:

```txt
Explore Our Bakes
Custom Cake Inquiry
```

Primary button:

```css
background: #F6C6C6
color: #3D4930
```

Secondary:

```css
transparent
border: 1px solid rgba(255,255,255,.6)
color: white
```

### Hero animation

Use Framer Motion.

Eyebrow:

```txt
opacity: 0 → 1
y: 10 → 0
delay: 0.2s
```

H1:

```txt
opacity: 0 → 1
y: 40 → 0
filter: blur(10px) → blur(0)
delay: 0.35s
```

Description:

```txt
opacity: 0 → 1
y: 20 → 0
delay: 0.6s
```

Buttons:

```txt
opacity: 0 → 1
y: 15 → 0
delay: 0.8s
```

---

# 8. Navbar

Create a fixed premium editorial navbar.

### Left

Small botanical icon +:

```txt
SWEETSIS & CO.
```

Typography:

```txt
Jost
uppercase
letter-spacing: 0.18em
```

### Desktop navigation

```txt
Shop
Cakes
Pastries
Custom Orders
About
Contact
```

### Right

```txt
Cart
```

and CTA:

```txt
Order Now
```

CTA:

```css
background: #F6C6C6;
color: #3D4930;
```

### Scroll behavior

Initially:

```txt
transparent background
```

After 60px scroll:

```txt
background: rgba(243,248,232,0.94)
backdrop-filter: blur(12px)
```

Use Framer Motion or React state for the transition.

---

# 9. Introduction / Brand Statement

Immediately after the hero, create an editorial statement section.

Background:

```txt
Spring Mist
```

Centered content:

Eyebrow:

```txt
A LITTLE SOMETHING SWEET
```

Heading:

```txt
For birthdays,
slow Sundays,
big celebrations
& everything between.
```

Body:

```txt
At SweetSis & Co., we believe dessert should be more than something you eat. It should be something you remember.
```

Add a small decorative botanical/bakery illustration between sections.

---

# 10. Categories Section

Heading:

```txt
Find Your Kind of Sweet
```

Subtext:

```txt
From celebration cakes to little afternoon treats, there's something for every kind of craving.
```

Create 4 category cards.

### Category 1 — Celebration Cakes

Image:

> Elegant pink floral celebration cake, textured buttercream, delicate edible flowers, luxury bakery photography.

Description:

```txt
Beautiful cakes for birthdays, milestones, and unforgettable moments.
```

CTA:

```txt
Explore Cakes →
```

### Category 2 — Pastries

Image:

> Fresh croissants, pain au chocolat, danishes and pastries arranged on linen, warm morning bakery light.

Description:

```txt
Buttery, flaky, golden and baked fresh every morning.
```

CTA:

```txt
Explore Pastries →
```

### Category 3 — Cookies & Treats

Image:

> Premium decorated cookies, chocolate chip cookies, pink frosted biscuits and small desserts arranged aesthetically.

Description:

```txt
Little treats made for gifting, sharing, or keeping all to yourself.
```

CTA:

```txt
Shop Treats →
```

### Category 4 — Custom Creations

Image:

> Bespoke luxury wedding cake with floral decoration and elegant pastel details.

Description:

```txt
Tell us your vision and we'll turn it into something deliciously yours.
```

CTA:

```txt
Start an Inquiry →
```

### Card interaction

On hover:

```txt
image scale: 1 → 1.06
overlay: transparent → soft green
card y: 0 → -5px
```

Use Framer Motion.

---

# 11. Bestselling Bakes

Create a premium product section.

Background:

```txt
Warm Cream / near-white
```

Header:

```txt
OUR FAVOURITES
```

H2:

```txt
The Sweetest Things
```

Right side:

```txt
View All →
```

Create 6 products.

### Product 1

**Strawberry Blossom Cake**

Description:

```txt
Vanilla sponge, fresh strawberries, silky cream and delicate floral details.
```

Price:

```txt
₹1,499
```

### Product 2

**Pink Velvet Cake**

Description:

```txt
Soft vanilla-red velvet layers finished with blush buttercream.
```

Price:

```txt
₹1,299
```

### Product 3

**Garden Berry Tart**

Description:

```txt
Buttery pastry filled with vanilla cream and seasonal berries.
```

Price:

```txt
₹699
```

### Product 4

**Classic Butter Croissant**

Description:

```txt
Golden, flaky and beautifully buttery.
```

Price:

```txt
₹180
```

### Product 5

**Chocolate Bloom Cookies**

Description:

```txt
Rich chocolate cookies with soft centers and delicate finishing.
```

Price:

```txt
₹320
```

### Product 6

**The Sweet Box**

Description:

```txt
A curated box of our favourite seasonal treats.
```

Price:

```txt
From ₹899
```

---

# 12. Product Card Design

Product card should feel editorial rather than like a generic e-commerce card.

Structure:

```txt
Image
↓
Product Name
Short Description
Price
Add to Cart
```

Image:

```txt
aspect-ratio: 3 / 4
object-fit: cover
```

Hover:

```jsx
<motion.div
  whileHover={{
    y: -5,
    boxShadow: "0 15px 40px rgba(212, 144, 122, 0.20)"
  }}
>
```

Image:

```jsx
<motion.img
  whileHover={{ scale: 1.05 }}
  transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }}
/>
```

Button:

```txt
Add to Cart
```

Normal:

```txt
border: 1px solid #3D4930
background: transparent
color: #3D4930
```

Hover:

```txt
background: #3D4930
color: white
```

---

# 13. Seasonal Feature Section

Create a large editorial split section.

Left:

Large bakery image.

Right:

Soft Blossom Pink background.

Eyebrow:

```txt
SEASONAL FAVOURITE
```

Heading:

```txt
A little pink,
a little sweet,
a lot of joy.
```

Body:

```txt
Our seasonal menu changes with the mood of the season, bringing fresh flavours, beautiful ingredients and a little something unexpected to your table.
```

CTA:

```txt
Explore This Season →
```

Use asymmetric editorial spacing.

---

# 14. How It Works

Heading:

```txt
From Our Oven to Your Door
```

Create 3 steps.

### 01 — Choose

Icon:

```txt
ShoppingBag
```

Title:

```txt
Choose Your Sweet
```

Description:

```txt
Browse our cakes, pastries and treats, then choose what makes your moment a little sweeter.
```

### 02 — We Bake

Icon:

```txt
CakeSlice
```

Title:

```txt
Freshly Made
```

Description:

```txt
Our bakers prepare every order with care, using quality ingredients and plenty of patience.
```

### 03 — Enjoy

Icon:

```txt
Truck
```

Title:

```txt
Delivered With Care
```

Description:

```txt
Your order arrives beautifully packed and ready to make someone's day.
```

Animation:

```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

Stagger:

```txt
0.15s
```

---

# 15. About SweetSis & Co.

Create an editorial two-column section.

### Left

Image:

> Female artisan baker decorating a beautiful pastel cake in a warm boutique bakery kitchen, natural window light, flowers and baking tools around her, premium editorial photography.

### Right

Eyebrow:

```txt
OUR STORY
```

Heading:

```txt
Baked with heart.
Finished with a little magic.
```

Body:

```txt
SweetSis & Co. began with a simple idea: make desserts that taste as beautiful as they look.
```

Second paragraph:

```txt
From our first little batch of cookies to celebration cakes made for life's biggest moments, everything we create is handmade with intention, creativity and a generous amount of love.
```

Pull quote:

```txt
"Good things take time.
Beautiful things take a little more."
```

Stats:

```txt
5+
Years Baking

8,000+
Sweet Moments

100%
Made With Love
```

---

# 16. Custom Cakes Section

Create a visually striking full-width section.

Background image:

> Luxury custom wedding cake with blush flowers, white buttercream, green botanical leaves, elegant reception setting, soft golden light.

Overlay:

```css
linear-gradient(
  90deg,
  rgba(61,73,48,.85),
  rgba(61,73,48,.45),
  transparent
)
```

Content:

Eyebrow:

```txt
MADE JUST FOR YOU
```

Heading:

```txt
Your vision.
Our oven.
Something unforgettable.
```

Body:

```txt
Whether it's a birthday, wedding, anniversary or a celebration that needs no reason at all, tell us what you're dreaming of and we'll create something completely yours.
```

CTA:

```txt
Start a Custom Order
```

Secondary:

```txt
View Cake Gallery →
```

---

# 17. Testimonials

Background:

```txt
Spring Mist
```

Heading:

```txt
Sweet Words
```

Subheading:

```txt
A few things our customers have said.
```

Create 3 cards.

### Testimonial 1

```txt
"The cake was almost too beautiful to cut — and somehow tasted even better than it looked. Every little detail was perfect."
```

Author:

```txt
Ananya R.
Birthday Celebration
```

### Testimonial 2

```txt
"SweetSis made our wedding cake exactly how we imagined it. Elegant, delicate and absolutely delicious."
```

Author:

```txt
Riya & Arjun
Wedding
```

### Testimonial 3

```txt
"The pastry box disappeared in about ten minutes. The croissants are genuinely incredible."
```

Author:

```txt
Meera S.
Regular Customer
```

Do not overuse stars.

Instead use a subtle:

```txt
✦
```

or small decorative floral icon.

---

# 18. Instagram / Visual Gallery

Create a highly visual section.

Heading:

```txt
A Little Sweetness on Your Feed
```

Subtext:

```txt
Follow along for behind-the-scenes baking, new creations and everyday inspiration.
```

Create a 6-image editorial grid.

Images should include:

- Cake close-up
- Croissant
- Baker working
- Pink floral cake
- Cookie box
- Bakery counter

Use different aspect ratios for an editorial magazine layout.

Hover:

```txt
image scale
soft pink overlay
Instagram icon
```

CTA:

```txt
@SweetSisAndCo
```

---

# 19. Newsletter Section

Create a soft pink newsletter block.

Background:

```txt
#F6C6C6
```

Heading:

```txt
Something Sweet,
Straight to Your Inbox.
```

Description:

```txt
New bakes, seasonal menus, special treats and occasional surprises.
```

Input:

```txt
Your email address
```

Button:

```txt
Join Us
```

Keep the form minimal and elegant.

---

# 20. Local Delivery Section

Create a two-column section.

### Left — Green Card

Background:

```txt
#3D4930
```

Icon:

```txt
MapPin
```

Heading:

```txt
Sweetness, Delivered.
```

Description:

```txt
We carefully pack every order so it reaches you looking as beautiful as when it left our kitchen.
```

Coverage:

```txt
Lucknow
Gomti Nagar
Hazratganj
Indira Nagar
Aliganj
Mahanagar
Vibhuti Khand
Nearby Areas
```

CTA:

```txt
Check Delivery Availability
```

### Right

Heading:

```txt
Order Information
```

Rows:

```txt
Same-Day Orders
Order before 11:00 AM

Next-Day Orders
Order by 6:00 PM

Custom Cakes
Please order 3–5 days in advance

Wedding Cakes
Please inquire 2–4 weeks ahead
```

---

# 21. Footer

Background:

```txt
#3D4930
```

Text:

```txt
white
```

Top section: 4 columns.

### Column 1

```txt
SWEETSIS & CO.
```

Tagline:

```txt
Small batches.
Big feelings.
```

Social icons:

```txt
Instagram
Facebook
Pinterest
```

### Column 2 — Shop

```txt
All Bakes
Cakes
Pastries
Cookies
Gift Boxes
Seasonal Menu
```

### Column 3 — Services

```txt
Custom Cakes
Wedding Cakes
Events
Corporate Orders
Gift Orders
Delivery
```

### Column 4 — Information

```txt
About Us
Contact
Delivery
FAQs
Care Guide
Privacy Policy
```

Bottom:

```txt
© 2026 SweetSis & Co. All rights reserved.
```

---

# 22. Framer Motion Animation System

Animations should feel **soft, elegant and organic**, not flashy.

Use:

```jsx
import { motion } from "framer-motion";
```

## Hero

```txt
Eyebrow
→ fade + y

Heading
→ fade + y + blur

Description
→ fade

Buttons
→ fade + y
```

## Scroll reveal

Use:

```jsx
initial={{
  opacity: 0,
  y: 40
}}

whileInView={{
  opacity: 1,
  y: 0
}}

viewport={{
  once: true,
  margin: "-80px"
}}

transition={{
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
}}
```

## Product cards

Use:

```txt
y: 0 → -5
image scale: 1 → 1.05
soft pink shadow
```

## Image reveal

Use:

```txt
clip-path / scale / opacity
```

for premium editorial image entrances.

## Buttons

Use subtle:

```txt
scale: 1 → 1.02
```

Never make buttons bounce excessively.

---

# 23. Grain Texture

Add a very subtle fixed grain overlay.

```jsx
export function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
        opacity: 0.025,
      }}
    />
  );
}
```

Keep it extremely subtle.

---

# 24. Decorative Elements

Use botanical-inspired details throughout the website.

Possible elements:

- Tiny leaves
- Small flowers
- Hand-drawn botanical lines
- Small stars `✦`
- Thin editorial dividers
- Soft pink circles
- Organic curved shapes
- Small wheat/bakery motifs

Do not overuse them.

They should feel like **luxury packaging details**, not illustrations for children.

---

# 25. Responsive Design

## Mobile `<768px`

Navbar:

```txt
Logo + hamburger
```

Hero:

```txt
Full-screen image
Centered/left aligned content
```

H1:

```txt
clamp(2.8rem, 10vw, 4rem)
```

CTAs:

```txt
stacked
full width
```

Categories:

```txt
1 column
```

Products:

```txt
2 columns
```

About:

```txt
image first
text second
```

Custom cake section:

```txt
centered content
```

Testimonials:

```txt
1 column
```

Footer:

```txt
2 columns
```

---

# 26. Desktop Design

At `1024px+`:

Navbar:

```txt
Logo | Navigation | Cart + CTA
```

Hero:

```txt
Full-bleed editorial image
Left-aligned content
```

Categories:

```txt
4 columns
```

Products:

```txt
3 columns × 2 rows
```

How It Works:

```txt
3 horizontal columns
```

About:

```txt
50 / 50 split
```

Custom Cakes:

```txt
Full-bleed image
Left aligned content
```

Testimonials:

```txt
3 columns
```

Footer:

```txt
4 columns
```

---

# 27. Image Direction

All imagery should maintain a consistent visual identity.

Use:

```txt
Soft natural light
Warm cream backgrounds
Blush pink details
Fresh green botanical elements
Shallow depth of field
Editorial food photography
Luxury bakery photography
Natural textures
High-end magazine composition
```

Avoid:

```txt
Overly saturated colors
Artificial studio lighting
Generic stock photos
Cartoon bakery imagery
Excessive props
Cheap-looking food photography
```

---

# 28. UX Requirements

The website should feel like a **real bakery e-commerce website**, not just a visual landing page.

Implement:

### Navigation

- Sticky navbar
- Smooth scrolling
- Mobile menu
- Active navigation state

### Shopping

- Product cards
- Add to Cart interactions
- Cart count
- Product detail pages
- Category filtering
- Basic cart drawer

### Forms

- Custom cake inquiry
- Newsletter signup
- Contact form

### Buttons

All CTAs should have proper hover/focus states.

### Accessibility

Use:

```txt
semantic HTML
alt text
keyboard navigation
focus states
ARIA labels where necessary
```

---

# 29. Overall Brand Personality

SweetSis & Co. should communicate:

> **"A bakery that takes dessert seriously, without taking itself too seriously."**

The design should feel:

```txt
Soft
Elegant
Warm
Handmade
Romantic
Fresh
Premium
Artistic
Welcoming
```

The **Soft Blossom Pink `#F6C6C6` should be the hero brand color**, while **Deep Stem `#3D4930` and Garden Green `#7FB069` provide the sophisticated botanical contrast**.

The final result should feel closer to a **luxury lifestyle brand / premium patisserie editorial website** than a conventional bakery website.

---

# 30. Final Implementation Instruction

Build the complete website in:

**React + Vite + JavaScript + Tailwind CSS + Framer Motion + shadcn/ui + lucide-react**

**Do not use TypeScript.**

Prioritize:

1. Beautiful visual hierarchy
2. Premium food imagery
3. Soft Blossom Pink brand identity
4. Editorial typography
5. Excellent responsive design
6. Smooth Framer Motion animations
7. Strong product presentation
8. Realistic bakery e-commerce interactions
9. Clean reusable React components
10. Performance and accessibility

The website should look **finished and production-ready**, not like an AI-generated template.

### Brand

**SweetSis & Co.**

### Primary Color

**Soft Blossom — `#F6C6C6`**

### Secondary

**Garden Green — `#7FB069`**

### Dark

**Deep Stem — `#3D4930`**

### Light

**Spring Mist — `#F3F8E8`**

### Supporting

**Fresh Leaf — `#B9D8A0`**

### Typography

**Cormorant Garamond + Jost**

### Framework

**React + Vite**

### Language

**JavaScript**

### Animation

**Framer Motion**
