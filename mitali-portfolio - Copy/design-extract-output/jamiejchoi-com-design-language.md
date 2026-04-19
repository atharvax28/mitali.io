# Design Language: Manoa Bakery Cafe — Jamie Choi

> Extracted from `https://www.jamiejchoi.com/work/manoa-bakery-cafe` on April 18, 2026
> 1372 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#22181c` | rgb(34, 24, 28) | hsl(336, 17%, 11%) | 2144 |
| Secondary | `#fe8357` | rgb(254, 131, 87) | hsl(16, 99%, 67%) | 116 |
| Accent | `#ffede8` | rgb(255, 237, 232) | hsl(13, 100%, 95%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 477 |
| `#ffffff` | hsl(0, 0%, 100%) | 33 |

### Background Colors

Used on large-area elements: `#ffffff`, `#ffede8`

### Text Colors

Text color palette: `#000000`, `#22181c`, `#ffffff`, `#fe8357`, `#fa452a`

### Gradients

```css
background-image: linear-gradient(rgb(254, 131, 87), rgb(254, 131, 87));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#22181c` | text, border, background | 2144 |
| `#000000` | text, border, background | 477 |
| `#fe8357` | text, border | 116 |
| `#ffffff` | background, text, border | 33 |
| `#fa452a` | text, border | 16 |
| `#ffede8` | background | 1 |

## Typography

### Font Families

- **proxima-nova** — used for all (1244 elements)
- **sans-serif** — used for body (82 elements)
- **adobe-caslon-pro** — used for headings (46 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 48px | 3rem | 300 | 48px | 0.841728px | a, div |
| 43.648px | 2.728rem | 600 | 56.7075px | 0.87296px | h2, br |
| 31.36px | 1.96rem | 600 | 42.1478px | 0.6272px | h3, h2 |
| 21.0432px | 1.3152rem | 300 | 21.0432px | 0.70144px | div, nav |
| 17.536px | 1.096rem | 300 | 29.8112px | 0.70144px | div, a, span, svg |
| 16px | 1rem | 400 | normal | normal | html, head, meta, base |
| 14.464px | 0.904rem | 500 | normal | 0.28928px | a, p |
| 10px | 0.625rem | 300 | 10px | 0.70144px | div, span |
| 0px | 0rem | 300 | 0px | 0.70144px | div, a, img |

### Heading Scale

```css
h2 { font-size: 43.648px; font-weight: 600; line-height: 56.7075px; }
h3 { font-size: 31.36px; font-weight: 600; line-height: 42.1478px; }
h4 { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Body Text

```css
body { font-size: 17.536px; font-weight: 300; line-height: 29.8112px; }
```

### Font Weights in Use

`300` (1044x), `400` (248x), `600` (52x), `700` (19x), `500` (9x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-13 | 13px | 0.8125rem |
| spacing-24 | 24px | 1.5rem |
| spacing-38 | 38px | 2.375rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-84 | 84px | 5.25rem |
| spacing-96 | 96px | 6rem |
| spacing-127 | 127px | 7.9375rem |
| spacing-295 | 295px | 18.4375rem |
| spacing-328 | 328px | 20.5rem |
| spacing-340 | 340px | 21.25rem |
| spacing-393 | 393px | 24.5625rem |
| spacing-412 | 412px | 25.75rem |
| spacing-443 | 443px | 27.6875rem |
| spacing-451 | 451px | 28.1875rem |
| spacing-467 | 467px | 29.1875rem |
| spacing-480 | 480px | 30rem |
| spacing-490 | 490px | 30.625rem |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0) 3.5072px 0px 0px 0px, rgba(255, 255, 255, 0) -3.5072px 0px 0px 0px;
```

## CSS Custom Properties

### Colors

```css
--tweak-summary-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-blog-basic-grid-list-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-item-title-color: hsla(336,17.24137931%,11.37254902%,1);
--portfolio-hover-static-title-color: hsla(336,17.24137931%,11.37254902%,1);
--secondary-button-font-font-weight: 500;
--tweak-product-basic-item-gallery-controls-color: hsla(0,0%,0%,1);
--list-section-carousel-card-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--siteBackgroundColor: hsla(0,0%,100%,1);
--tweak-product-basic-item-sale-price-color: hsla(0,0%,100%,1);
--form-field-radio-shape-border-bottom-left-radius: 5px;
--tweak-newsletter-block-button-text-color: hsla(0,0%,100%,1);
--video-grid-basic-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-alternating-side-by-side-list-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-single-column-list-title-color: hsla(336,17.24137931%,11.37254902%,1);
--solidHeaderBackgroundColor: hsla(0,0%,100%,1);
--toggle-on-color: hsla(336,17.24137931%,11.37254902%,1);
--course-item-nav-border-color: hsla(336,17.24137931%,11.37254902%,.25);
--tweak-product-basic-item-breadcumb-nav-color: hsla(336,17.24137931%,11.37254902%,1);
--social-links-block-secondary-icon-color: hsla(0,0%,100%,1);
--primary-button-font-font-style: normal;
--tweak-blog-alternating-side-by-side-list-excerpt-color: hsla(336,17.24137931%,11.37254902%,1);
--secondary-button-font-font-size-value: 1.1;
--tweak-form-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--primary-button-padding-y: 1.2em;
--form-field-survey-shape-border-top-right-radius: 5px;
--tweak-blog-item-pagination-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--video-grid-basic-description-color: hsla(336,17.24137931%,11.37254902%,1);
--backgroundOverlayColor: hsla(0,0%,100%,1);
--tweak-events-item-pagination-date-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-button-text-color: hsla(0,0%,100%,1);
--list-section-simple-card-description-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-newsletter-block-footnote-color: hsla(336,17.24137931%,11.37254902%,1);
--course-list-grid-layout-course-item-text-color: hsla(336,17.24137931%,11.37254902%,1);
--safeInverseLightAccent-hsl: 0,0%,0%;
--tweak-video-item-pagination-title-color: hsla(336,17.24137931%,11.37254902%,1);
--safeDarkAccent-hsl: 0,0%,0%;
--list-section-simple-card-button-background-color: hsla(0,0%,0%,1);
--menuOverlayBackgroundColor: hsla(0,0%,100%,1);
--video-preview-badge-font-color: hsla(0,0%,100%,1);
--tweak-summary-block-header-text-color: hsla(336,17.24137931%,11.37254902%,1);
--course-list-course-progress-bar-color: hsla(0,0%,100%,1);
--list-section-simple-title-color: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-font-font-size: 1rem;
--form-field-survey-shape-border-bottom-left-radius: 5px;
--tweak-form-block-field-input-color-on-background-hsl: 336,17.24137931%,11.37254902%;
--tweak-form-block-field-border-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-simple-card-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-heading-medium-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--menuOverlayButtonBackgroundColor: hsla(0,0%,0%,1);
--tweak-summary-block-primary-metadata-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-font-line-height: 1.2em;
--image-block-card-inline-link-color: hsla(336,17.24137931%,11.37254902%,1);
--product-detail-subscriptions-frequency-text-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-card-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-marquee-block-heading-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-fill-color-a: 1;
--list-section-banner-slideshow-card-button-text-color: hsla(0,0%,100%,1);
--paragraphLinkColor: hsla(0,0%,0%,1);
--form-field-shape-border-top-right-radius: 5px;
--image-block-card-image-title-separation: 6%;
--gradientHeaderNavigationColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-heading-small-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-content-link-block-title-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-card-button-background-color: hsla(0,0%,0%,1);
--product-detail-subscriptions-button-text-color: hsla(0,0%,100%,1);
--headingMediumColor: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-card-description-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-title-color: hsla(336,17.24137931%,11.37254902%,1);
--lightAccent-hsl: 18.46153846,96.2962963%,78.82352941%;
--tweak-summary-block-read-more-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-menu-block-title-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-simple-description-color: hsla(336,17.24137931%,11.37254902%,1);
--secondary-button-font-font-family: "adobe-caslon-pro";
--form-field-radio-shape-border-top-left-radius: 5px;
--image-block-overlap-image-title-bg-color: hsla(0,0%,100%,1);
--form-field-survey-shape-border-bottom-right-radius: 5px;
--form-field-checkbox-shape-border-bottom-left-radius: 5px;
--scheduling-block-button-accent-color: hsla(0,0%,0%,1);
--tweak-blog-side-by-side-list-read-more-color: hsla(0,0%,0%,1);
--image-block-card-image-width: 50%;
--secondary-button-font-text-transform: none;
--tweak-video-item-description-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-card-image-title-bg-color: hsla(0,0%,100%,0);
--primaryButtonPadding: 1.2em;
--tweak-blog-single-column-list-excerpt-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-collage-image-subtitle-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-newsletter-block-footnote-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tertiaryButtonTextColor: hsla(0,0%,100%,1);
--tweak-summary-block-secondary-metadata-color: hsla(336,17.24137931%,11.37254902%,1);
--darkAccent-hsl: 336,17.24137931%,11.37254902%;
--list-section-carousel-arrow-color: hsla(0,0%,100%,1);
--video-preview-badge-background-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-video-item-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-grid-text-below-list-status-color: hsla(0,0%,100%,1);
--tweak-product-basic-item-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-stack-image-button-bg-color: hsla(0,0%,0%,1);
--tweak-form-block-field-input-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-newsletter-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-form-block-field-fill-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-newsletter-block-title-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-input-color: hsla(336,17.24137931%,11.37254902%,1);
--portfolio-grid-basic-title-color: hsla(336,17.24137931%,11.37254902%,1);
--course-list-grid-layout-course-item-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-product-grid-text-below-list-price-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-list-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-item-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-item-author-profile-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-stack-image-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-menu-block-item-price-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-text-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-newsletter-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--shape-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-gallery-lightbox-background-color: hsla(0,0%,100%,1);
--headerDropShadowColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-accent-color-on-background-a: 1;
--image-block-collage-image-button-bg-color: hsla(0,0%,0%,1);
--headerBorderColor: hsla(336,17.24137931%,11.37254902%,1);
--headingSmallColor: hsla(336,17.24137931%,11.37254902%,1);
--headingExtraLargeColor: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-rounded-border-bottom-left-radius: 6.4px;
--tweak-newsletter-block-button-background-color: hsla(0,0%,0%,1);
--tweak-blog-masonry-list-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--safeInverseDarkAccent-hsl: 0,0%,100%;
--list-section-carousel-arrow-background-color: hsla(0,0%,0%,1);
--tweak-summary-block-excerpt-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--product-basic-item-discount-chip-text-color: hsla(0,0%,100%,1);
--tweak-form-block-description-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-newsletter-block-button-background-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--scheduling-block-button-text-color: hsla(0,0%,100%,1);
--form-field-shape-border-bottom-left-radius: 5px;
--tweak-portfolio-item-pagination-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--product-basic-item-add-ons-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-line-block-line-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-carousel-description-color: hsla(336,17.24137931%,11.37254902%,1);
--tertiary-button-rounded-border-top-left-radius: 6.4px;
--course-item-nav-active-lesson-text-color: hsla(0,0%,100%,1);
--list-section-simple-button-text-color: hsla(0,0%,100%,1);
--siteTitleColor: hsla(336,17.24137931%,11.37254902%,1);
--video-grid-basic-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--text-highlight-color-on-background: hsla(0,0%,0%,1);
--tweak-product-grid-text-below-list-sale-price-color: hsla(0,0%,100%,1);
--tweak-form-block-caption-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--portfolio-hover-follow-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tertiary-button-rounded-border-bottom-left-radius: 6.4px;
--tweak-newsletter-block-description-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-quote-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-blog-masonry-list-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-accent-color-hsl: 0,0%,100%;
--list-section-carousel-card-button-text-color: hsla(0,0%,100%,1);
--tweak-blog-masonry-list-read-more-color: hsla(0,0%,0%,1);
--summary-block-limited-availability-label-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-portfolio-item-pagination-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--course-item-nav-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-product-list-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-summary-block-primary-metadata-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-item-pagination-title-color: hsla(336,17.24137931%,11.37254902%,1);
--solidHeaderNavigationColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-marquee-block-paragraph-color: hsla(336,17.24137931%,11.37254902%,1);
--secondary-button-rounded-border-bottom-right-radius: 6.4px;
--primary-button-rounded-border-top-right-radius: 6.4px;
--tweak-form-block-field-border-color-a: 1;
--image-block-poster-image-title-bg-color-v2: hsla(0,0%,100%,0);
--tweak-form-block-field-accessory-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-accordion-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-accordion-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--secondaryButtonBackgroundColor: hsla(0,0%,0%,1);
--course-list-course-item-text-color: hsla(336,17.24137931%,11.37254902%,1);
--paragraphLargeColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-accent-color: hsla(0,0%,100%,1);
--tweak-form-block-survey-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-collage-image-button-text-color: hsla(0,0%,100%,1);
--tweak-form-block-title-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-basic-grid-list-excerpt-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-button-background-color-on-background: hsla(0,0%,0%,1);
--tweak-summary-block-secondary-metadata-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--product-list-filters-drawer-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-form-block-field-accessory-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-quick-view-button-color: hsla(336,17.24137931%,11.37254902%,1);
--course-item-nav-text-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-poster-image-button-bg-color: hsla(0,0%,0%,1);
--primary-button-font-font-weight: 500;
--tweak-product-basic-item-price-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-border-color-on-background-a: 1;
--safeLightAccent-hsl: 0,0%,100%;
--tweak-form-block-caption-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-overlap-image-button-text-color: hsla(0,0%,100%,1);
--image-block-poster-image-overlay-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-events-item-pagination-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-paragraph-small-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--secondary-button-font-font-style: normal;
--tweak-product-basic-item-variant-fields-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-carousel-card-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-stack-inline-link-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-carousel-card-button-background-color: hsla(0,0%,0%,1);
--secondary-button-padding-y: 1.2em;
--image-block-card-image-button-text-color: hsla(0,0%,100%,1);
--primary-button-padding-x: 2.004em;
--tweak-portfolio-item-pagination-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-collage-inline-link-color: hsla(336,17.24137931%,11.37254902%,1);
--product-detail-subscriptions-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-summary-block-read-more-color: hsla(336,17.24137931%,11.37254902%,1);
--safeInverseAccent-hsl: 0,0%,0%;
--primaryButtonTextColor: hsla(0,0%,100%,1);
--secondary-button-rounded-border-bottom-left-radius: 6.4px;
--form-field-survey-shape-border-top-left-radius: 5px;
--menuOverlayButtonTextColor: hsla(0,0%,100%,1);
--tweak-newsletter-block-description-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-card-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--solidHeaderDropShadowColor: hsla(336,17.24137931%,11.37254902%,1);
--form-field-checkbox-shape-border-top-right-radius: 5px;
--image-block-overlap-image-title-color: hsla(336,17.24137931%,11.37254902%,1);
--paragraphMediumColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-input-color-a: 1;
--tweak-blog-single-column-list-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--primaryButtonBackgroundColor: hsla(0,0%,0%,1);
--primary-button-font-letter-spacing: .02em;
--secondary-button-padding-x: 2.004em;
--course-list-grid-layout-course-item-hover-background-color: hsla(18.46153846,96.2962963%,78.82352941%,.75);
--tweak-text-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tertiary-button-rounded-border-bottom-right-radius: 6.4px;
--tweak-product-basic-item-description-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-overlay-color: hsla(336,17.24137931%,11.37254902%,.5);
--image-block-overlap-image-overlay-color: hsla(336,17.24137931%,11.37254902%,1);
--form-field-shape-border-bottom-right-radius: 5px;
--tweak-form-block-field-fill-color-on-background-hsl: 0,0%,100%;
--tweak-newsletter-block-button-text-color-on-background: hsla(0,0%,100%,1);
--gradientHeaderBorderColor: hsla(336,17.24137931%,11.37254902%,1);
--list-section-carousel-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-single-column-list-read-more-color: hsla(0,0%,0%,1);
--tweak-accordion-block-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--accent-hsl: 0,0%,100%;
--image-block-stack-image-button-text-color: hsla(0,0%,100%,1);
--gradientHeaderBackgroundColor: hsla(0,0%,100%,1);
--shape-block-dropshadow-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--secondary-button-font-line-height: 1.2em;
--headingLinkColor: hsla(0,0%,0%,1);
--list-section-carousel-card-description-color: hsla(336,17.24137931%,11.37254902%,1);
--product-basic-item-restock-notification-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-carousel-button-background-color: hsla(0,0%,0%,1);
--tweak-blog-basic-grid-list-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-grid-text-below-list-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-quick-view-lightbox-overlay-color: hsla(0,0%,100%,1);
--tweak-menu-block-nav-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-accent-color-on-background: hsla(0,0%,100%,1);
--tweak-accordion-block-icon-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-paragraph-medium-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--image-block-overlap-image-subtitle-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-menu-block-item-description-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-summary-block-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-stack-image-subtitle-color: hsla(336,17.24137931%,11.37254902%,1);
--secondaryButtonTextColor: hsla(0,0%,100%,1);
--navigationLinkColor: hsla(336,17.24137931%,11.37254902%,1);
--announcement-bar-background-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-input-color-on-background-a: 1;
--tertiaryButtonBackgroundColor: hsla(0,0%,0%,1);
--list-section-simple-card-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-marquee-block-paragraph-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--scheduling-block-scheduler-background-color: hsla(0,0%,100%,1);
--tertiary-button-rounded-border-top-right-radius: 6.4px;
--list-section-banner-slideshow-description-color: hsla(336,17.24137931%,11.37254902%,1);
--video-grid-category-nav-color: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-stroke: 0px;
--product-detail-subscriptions-description-text-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-accordion-block-divider-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-grid-text-below-list-category-nav-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-simple-card-description-link-color: hsla(0,0%,0%,1);
--product-detail-subscriptions-button-background-color: hsla(0,0%,0%,1);
--image-block-poster-inline-link-color: hsla(0,0%,100%,1);
--shape-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--course-item-nav-active-lesson-background-color: hsla(336,17.24137931%,11.37254902%,1);
--scheduling-block-header-text-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-quote-block-text-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-accent-color-a: 1;
--tweak-form-block-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-poster-image-button-text-color: hsla(0,0%,100%,1);
--list-section-banner-slideshow-arrow-background-color: hsla(0,0%,0%,1);
--product-list-filter-dropdown-label-color: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-font-font-family: "adobe-caslon-pro";
--tweak-quote-block-text-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-gallery-icon-background-color: hsla(0,0%,100%,1);
--course-list-grid-layout-chapter-divider-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-carousel-card-description-link-color: hsla(0,0%,0%,1);
--tweak-heading-extra-large-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-marquee-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--social-links-block-main-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-rounded-border-top-left-radius: 6.4px;
--gradientHeaderDropShadowColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-fill-color-on-background: hsla(0,0%,100%,1);
--image-block-collage-image-title-bg-color: hsla(0,0%,100%,0);
--product-detail-one-time-purchase-price-text-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-card-image-subtitle-color: hsla(336,17.24137931%,11.37254902%,1);
--section-divider-stroke-color: hsla(0,0%,0%,1);
--scheduling-block-background-color: hsla(0,0%,100%,1);
--secondary-button-rounded-border-top-left-radius: 6.4px;
--product-list-filters-drawer-text-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-menu-block-item-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-heading-large-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-marquee-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--list-section-carousel-button-text-color: hsla(0,0%,100%,1);
--tweak-blog-side-by-side-list-title-color: hsla(336,17.24137931%,11.37254902%,1);
--form-field-checkbox-shape-border-bottom-right-radius: 5px;
--tweak-form-block-button-text-color-on-background: hsla(0,0%,100%,1);
--paragraphSmallColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-grid-text-below-list-scarcity-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-stack-image-title-bg-color: hsla(0,0%,100%,0);
--secondary-button-stroke: 0px;
--solidHeaderBorderColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-option-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--product-basic-item-discount-chip-background-color: hsla(0,0%,0%,1);
--image-block-poster-image-subtitle-color: hsla(0,0%,100%,1);
--form-field-radio-border-thickness: 1px;
--portfolio-grid-overlay-overlay-color: hsla(0,0%,100%,1);
--tweak-blog-alternating-side-by-side-list-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-card-image-button-bg-color: hsla(0,0%,0%,1);
--section-inset-border-color: hsla(0,0%,100%,1);
--tweak-blog-item-comment-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-gallery-lightbox-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-description-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--form-field-shape-border-top-left-radius: 5px;
--tweak-form-block-field-border-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-video-item-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-fill-color-hsl: 18.46153846,96.2962963%,78.82352941%;
--text-highlight-color: hsla(0,0%,0%,1);
--tweak-accordion-block-divider-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-card-description-link-color: hsla(0,0%,0%,1);
--secondary-button-font-font-size: 1.1rem;
--tweak-quote-block-source-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--announcement-bar-text-color: hsla(0,0%,100%,1);
--image-block-collage-image-overlay-color: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-font-font-size-value: 1;
--tweak-marquee-block-heading-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-simple-button-background-color: hsla(0,0%,0%,1);
--image-block-overlap-image-button-bg-color: hsla(0,0%,0%,1);
--primary-button-rounded-border-bottom-right-radius: 6.4px;
--tweak-form-block-button-background-color: hsla(0,0%,0%,1);
--secondary-button-font-letter-spacing: .02em;
--tweak-blog-basic-grid-list-read-more-color: hsla(0,0%,0%,1);
--image-block-card-image-card-separation: 10%;
--tweak-video-item-pagination-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-card-image-overlay-color: hsla(336,17.24137931%,11.37254902%,1);
--donation-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-masonry-list-excerpt-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-button-background-color: hsla(0,0%,0%,1);
--donation-block-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--course-list-grid-layout-course-item-border-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-events-item-pagination-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-quote-block-source-color: hsla(336,17.24137931%,11.37254902%,1);
--form-field-survey-border-thickness: 1px;
--tweak-product-grid-text-below-list-pagination-color: hsla(336,17.24137931%,11.37254902%,1);
--secondary-button-rounded-border-top-right-radius: 6.4px;
--form-field-checkbox-border-thickness: 1px;
--tweak-quote-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-product-basic-item-scarcity-color: hsla(0,0%,100%,1);
--tweak-blog-side-by-side-list-meta-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-side-by-side-list-excerpt-color: hsla(336,17.24137931%,11.37254902%,1);
--product-detail-subscription-price-text-color: hsla(336,17.24137931%,11.37254902%,1);
--primary-button-font-text-transform: none;
--list-section-banner-slideshow-arrow-color: hsla(0,0%,100%,1);
--image-block-stack-image-overlay-color: hsla(336,17.24137931%,11.37254902%,1);
--form-field-border-thickness: 1px;
--tweak-gallery-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-fill-color-on-background-a: 1;
--tweak-product-quick-view-lightbox-controls-color: hsla(336,17.24137931%,11.37254902%,1);
--form-field-radio-shape-border-top-right-radius: 5px;
--tweak-summary-block-title-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--menuOverlayNavigationLinkColor: hsla(336,17.24137931%,11.37254902%,1);
--image-block-card-image-button-separation: 6%;
--tweak-form-block-field-border-color-on-background-hsl: 336,17.24137931%,11.37254902%;
--tweak-summary-block-header-text-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-blog-alternating-side-by-side-list-read-more-color: hsla(0,0%,0%,1);
--course-list-course-chapter-divider-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-survey-title-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-paragraph-link-color-on-background: hsla(0,0%,0%,1);
--tweak-blog-item-comment-text-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-card-image-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-summary-block-stroke-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-border-color-hsl: 336,17.24137931%,11.37254902%;
--form-field-checkbox-shape-border-top-left-radius: 5px;
--toggle-off-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-product-list-description-text-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-poster-image-title-color: hsla(0,0%,100%,1);
--image-block-overlap-inline-link-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-collage-background-color: hsla(18.46153846,96.2962963%,78.82352941%,1);
--tweak-paragraph-large-color-on-background: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-option-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-input-color-hsl: 336,17.24137931%,11.37254902%;
--tweak-newsletter-block-title-color: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-field-accent-color-on-background-hsl: 0,0%,100%;
--scheduling-block-scheduler-text-color: hsla(336,17.24137931%,11.37254902%,1);
--form-field-radio-shape-border-bottom-right-radius: 5px;
--list-section-simple-card-button-text-color: hsla(0,0%,100%,1);
--tweak-blog-item-pagination-icon-color: hsla(336,17.24137931%,11.37254902%,1);
--portfolio-grid-overlay-title-color: hsla(336,17.24137931%,11.37254902%,1);
--image-block-collage-image-title-color: hsla(336,17.24137931%,11.37254902%,1);
--list-section-banner-slideshow-title-color: hsla(336,17.24137931%,11.37254902%,1);
--portfolio-index-background-title-color: hsla(336,17.24137931%,11.37254902%,1);
--headingLargeColor: hsla(336,17.24137931%,11.37254902%,1);
--tweak-form-block-button-text-color: hsla(0,0%,100%,1);
--tweak-summary-block-excerpt-color: hsla(336,17.24137931%,11.37254902%,1);
```

### Spacing

```css
--course-item-lesson-name-font-letter-spacing: .02em;
--portfolio-grid-overlay-title-font-font-size-value: 2;
--menu-block-item-description-font-letter-spacing: .04em;
--portfolio-item-pagination-font-font-size-value: 2;
--portfolio-item-pagination-font-font-size: 2rem;
--portfolio-index-background-title-font-letter-spacing: .02em;
--menu-block-item-title-font-font-size: 1.2rem;
--product-basic-item-restock-notification-full-layout-font-font-size-value: 1.1;
--form-label-spacing-bottom: 4px;
--site-title-font-letter-spacing: .02em;
--video-item-meta-font-font-size-value: 1.2;
--course-item-name-mobile-font-font-size-value: 1.3;
--mobile-site-title-font-letter-spacing: .02em;
--form-field-checkbox-column-gap: 20px;
--list-section-title-text-font-font-size-value: 2.8;
--video-basic-grid-list-excerpt-font-font-size-value: .9;
--blog-side-by-side-list-excerpt-font-font-size: 1.1rem;
--product-basic-item-restock-notification-wrap-layout-font-font-size-value: 1.1;
--blog-basic-grid-list-excerpt-font-font-size: .9rem;
--product-block-price-font-font-size: 1.1rem;
--commerce-mini-cart-image-size: 60px;
--product-grid-text-below-price-font-font-size-value: 1.2;
--product-basic-item-scarcity-full-layout-font-letter-spacing: .01em;
--blog-single-column-list-excerpt-font-letter-spacing: .04em;
--video-basic-grid-list-category-nav-font-letter-spacing: .04em;
--blog-side-by-side-list-title-font-font-size-value: 2.8;
--course-list-course-item-lesson-excerpt-font-font-size: .875rem;
--form-block-caption-text-font-letter-spacing: .04em;
--product-list-description-font-letter-spacing: .04em;
--form-field-spacing-bottom: 20px;
--video-item-title-font-letter-spacing: .02em;
--blog-grid-masonry-list-title-font-font-size: 2rem;
--product-basic-item-add-ons-title-full-layout-font-font-size-value: 1.1;
--blog-alternating-side-by-side-list-title-font-letter-spacing: .02em;
--product-grid-text-below-scarcity-font-letter-spacing: .01em;
--events-item-pagination-font-font-size: 2rem;
--product-block-description-font-font-size-value: 1.1;
--product-basic-item-add-ons-title-half-layout-font-font-size-value: 1.1;
--newsletter-block-footnote-text-font-font-size-value: .9;
--events-item-pagination-date-font-font-size-value: 1.2;
--product-basic-item-description-half-layout-font-font-size: 1.1rem;
--image-block-collage-image-content-padding: 10%;
--product-basic-item-variant-fields-wrap-layout-font-letter-spacing: .04em;
--blog-grid-masonry-list-excerpt-font-font-size: .9rem;
--blog-side-by-side-list-meta-font-letter-spacing: .01em;
--newsletter-block-title-text-font-font-size: 2rem;
--content-link-block-title-font-font-size: 1.1rem;
--product-grid-text-below-price-font-font-size: 1.2rem;
--product-basic-item-description-font-letter-spacing: .04em;
--form-field-radio-size: 17px;
--newsletter-block-description-text-font-font-size-value: 1.1;
--portfolio-grid-basic-title-font-font-size-value: 1.2;
--portfolio-hover-follow-title-font-letter-spacing: .02em;
--course-item-side-nav-chapter-meta-font-font-size-value: .8;
--course-item-side-nav-lesson-meta-font-letter-spacing: .01em;
--header-button-font-font-size: .9rem;
--announcement-bar-font-letter-spacing: .04em;
--menu-block-title-font-letter-spacing: .02em;
--product-grid-text-below-scarcity-font-font-size: 1.2rem;
--product-basic-item-price-full-layout-font-font-size-value: 1.1;
--blog-single-column-list-meta-font-letter-spacing: .01em;
--product-block-description-font-letter-spacing: .04em;
--portfolio-index-background-title-font-font-size-value: 4;
--course-list-course-item-lesson-excerpt-font-font-size-value: .875;
--course-item-side-nav-lesson-meta-font-font-size: .8rem;
--course-list-grid-layout-chapter-name-font-font-size-value: 2;
--newsletter-block-button-text-font-font-size-value: 1.1;
--newsletter-block-field-text-font-letter-spacing: .04em;
--course-list-chapter-item-chapter-name-font-font-size-value: 2;
--course-list-grid-layout-course-item-meta-font-font-size: .75rem;
--product-basic-item-variant-fields-wrap-layout-font-font-size: .75rem;
--course-item-name-mobile-font-letter-spacing: .02em;
--product-basic-item-title-font-font-size: 2.8rem;
--normal-text-size-value: 1.1;
--product-basic-item-title-full-layout-font-letter-spacing: .02em;
--course-item-side-nav-chapter-meta-font-font-size: .8rem;
--product-basic-item-title-half-layout-font-letter-spacing: .02em;
--header-button-font-letter-spacing: .02em;
--product-basic-item-price-half-layout-font-font-size: 1.1rem;
--cookie-banner-disclaimer-font-font-size-value: .8;
--site-navigation-font-font-size: 1.1rem;
--blog-item-pagination-font-font-size-value: 2;
--product-basic-item-add-ons-title-full-layout-font-font-size: 1.1rem;
--course-list-chapter-item-chapter-meta-font-font-size-value: .75;
--blog-item-pagination-font-font-size: 2rem;
--tertiary-button-padding-x: 2.004em;
--course-item-side-nav-lesson-name-font-font-size-value: 1;
--form-block-description-text-font-font-size-value: .9;
--quote-block-source-font-font-size-value: 1.2;
--blog-side-by-side-list-title-font-font-size: 2.8rem;
--form-field-radio-row-gap: 12px;
--form-field-radio-column-gap: 20px;
--product-basic-item-restock-notification-wrap-layout-font-letter-spacing: .04em;
--blog-item-title-font-font-size: 4rem;
--form-block-option-text-font-font-size: .9rem;
--product-block-description-font-font-size: 1.1rem;
--product-grid-text-below-status-font-font-size: 1.2rem;
--product-basic-item-title-font-letter-spacing: .02em;
--course-list-grid-layout-course-item-excerpt-font-font-size-value: .875;
--video-preview-badge-font-letter-spacing: .04em;
--blog-side-by-side-list-meta-font-font-size-value: 1.2;
--form-block-option-text-font-font-size-value: .9;
--course-list-course-description-font-font-size: 1.5rem;
--video-preview-badge-font-font-size-value: 1.1;
--form-block-select-dropdown-text-font-font-size-value: .9;
--site-navigation-font-font-size-value: 1.1;
--course-list-grid-layout-course-item-name-font-letter-spacing: .02em;
--normal-meta-size-value: 1.2;
--menu-block-nav-font-letter-spacing: .01em;
--course-list-course-item-lesson-name-font-font-size-value: 1.125;
--product-basic-item-restock-notification-half-layout-font-font-size-value: 1.1;
--product-basic-item-description-wrap-layout-font-font-size-value: 1.1;
--course-list-grid-layout-course-item-name-font-font-size: 1.125rem;
--newsletter-block-button-text-font-letter-spacing: .04em;
--portfolio-item-pagination-font-letter-spacing: .02em;
--blog-basic-grid-list-title-font-font-size: 2rem;
--form-block-survey-title-text-font-letter-spacing: .04em;
--course-list-chapter-item-chapter-name-font-letter-spacing: .02em;
--product-basic-item-price-font-font-size-value: 1.2;
--course-list-course-name-font-letter-spacing: .02em;
--menu-block-item-title-font-font-size-value: 1.2;
--site-title-font-font-size: 2rem;
--heading-1-size-value: 4;
--tertiary-button-font-font-size-value: .9;
--product-basic-item-description-full-layout-font-font-size-value: 1.1;
--form-block-survey-title-text-font-font-size: 1.1rem;
--blog-single-column-list-title-font-font-size: 4rem;
--product-basic-item-add-ons-title-font-font-size: 1.1rem;
--product-basic-item-variant-fields-full-layout-font-font-size: .75rem;
--events-item-pagination-date-font-letter-spacing: .01em;
--product-basic-item-description-wrap-layout-font-font-size: 1.1rem;
--form-block-caption-text-font-font-size-value: .9;
--product-basic-item-add-ons-title-half-layout-font-letter-spacing: .04em;
--blog-item-meta-font-font-size: 1.2rem;
--course-list-chapter-item-chapter-meta-font-font-size: .75rem;
--product-basic-item-title-full-layout-font-font-size-value: 4;
--events-item-pagination-font-font-size-value: 2;
--heading-4-size: 1.2rem;
--heading-font-letter-spacing: .02em;
--product-basic-item-price-full-layout-font-font-size: 1.1rem;
--newsletter-block-description-text-font-font-size: 1.1rem;
--blog-item-author-profile-font-letter-spacing: .04em;
--product-basic-item-variant-fields-font-letter-spacing: .01em;
--blog-grid-masonry-list-excerpt-font-font-size-value: .9;
--product-grid-text-below-title-font-font-size: 1.2rem;
--blog-grid-masonry-list-title-font-letter-spacing: .02em;
--list-section-title-text-font-font-size: 2.8rem;
--product-basic-item-scarcity-wrap-layout-font-font-size-value: .85;
--list-section-title-text-font-letter-spacing: .02em;
--product-block-title-font-font-size: 1.3rem;
--product-basic-item-variant-fields-font-font-size-value: 1.2;
--blog-item-meta-font-letter-spacing: .01em;
--course-list-course-name-font-font-size: 4rem;
--video-item-title-font-font-size: 2.8rem;
--newsletter-block-footnote-text-font-letter-spacing: .04em;
--course-list-grid-layout-chapter-meta-font-font-size-value: .875;
--product-basic-item-variant-fields-half-layout-font-font-size: .75rem;
--form-field-checkbox-row-gap: 12px;
--product-basic-item-title-wrap-layout-font-font-size: 4rem;
--video-basic-grid-list-category-nav-font-font-size: 1.1rem;
--product-basic-item-price-wrap-layout-font-font-size-value: 1.1;
--blog-side-by-side-list-excerpt-font-letter-spacing: .04em;
--course-list-course-item-lesson-name-font-letter-spacing: .04em;
--product-basic-item-add-ons-title-font-font-size-value: 1.1;
--body-font-letter-spacing: .04em;
--blog-grid-masonry-list-meta-font-letter-spacing: .01em;
--menu-block-title-font-font-size-value: 2;
--form-block-description-text-font-font-size: .9rem;
--course-item-chapter-name-font-letter-spacing: .04em;
--blog-basic-grid-list-excerpt-font-letter-spacing: .04em;
--blog-single-column-list-title-font-letter-spacing: .02em;
--product-basic-item-description-font-font-size-value: 1.1;
--form-block-survey-title-text-font-font-size-value: 1.1;
--form-block-placeholder-text-font-font-size-value: .9;
--product-basic-item-price-wrap-layout-font-font-size: 1.1rem;
--product-basic-item-add-ons-title-wrap-layout-font-letter-spacing: .04em;
--blog-side-by-side-list-excerpt-font-font-size-value: 1.1;
--cookie-banner-disclaimer-font-font-size: .8rem;
--small-text-size: .9rem;
--video-item-title-font-font-size-value: 2.8;
--small-text-size-value: .9;
--content-link-block-title-font-letter-spacing: .04em;
--product-basic-item-description-half-layout-font-letter-spacing: .04em;
--course-list-grid-layout-chapter-meta-font-letter-spacing: .01em;
--course-item-chapter-name-font-font-size: 1rem;
--large-text-size-value: 1.5;
--blog-side-by-side-list-title-font-letter-spacing: .02em;
--form-block-placeholder-text-font-font-size: .9rem;
--blog-single-column-list-excerpt-font-font-size: 1.1rem;
--course-list-course-description-font-font-size-value: 1.5;
--product-grid-text-below-price-font-letter-spacing: .01em;
--product-list-description-font-font-size: 1.1rem;
--blog-alternating-side-by-side-list-meta-font-letter-spacing: .01em;
--product-grid-text-below-status-font-letter-spacing: .01em;
--form-field-padding-horizontal: 10px;
--product-basic-item-restock-notification-half-layout-font-letter-spacing: .04em;
--portfolio-grid-overlay-title-font-letter-spacing: .02em;
--form-field-padding-vertical: 10px;
--heading-4-size-value: 1.2;
--header-button-font-font-size-value: .9;
--blog-single-column-list-title-font-font-size-value: 4;
--video-item-meta-font-font-size: 1.2rem;
--product-basic-item-title-half-layout-font-font-size-value: 4;
--newsletter-block-footnote-text-font-font-size: .9rem;
--product-grid-text-below-title-font-font-size-value: 1.2;
--blog-side-by-side-list-meta-font-font-size: 1.2rem;
--menu-block-title-font-font-size: 2rem;
--product-grid-text-below-scarcity-font-font-size-value: 1.2;
--menu-block-item-price-font-letter-spacing: .04em;
--product-basic-item-description-full-layout-font-letter-spacing: .04em;
--menu-block-item-description-font-font-size: 1.1rem;
--product-basic-item-scarcity-full-layout-font-font-size-value: .85;
--course-item-name-font-letter-spacing: .02em;
--video-basic-grid-list-excerpt-font-letter-spacing: .04em;
--newsletter-block-description-text-font-letter-spacing: .04em;
--announcement-bar-font-font-size: .9rem;
--video-item-description-font-letter-spacing: .04em;
--video-basic-grid-list-title-font-font-size-value: 1.2;
--product-block-price-font-font-size-value: 1.1;
--events-item-pagination-font-letter-spacing: .02em;
--normal-meta-size: 1.2rem;
--menu-block-nav-font-font-size-value: 1.2;
--mobile-site-title-font-font-size: 2rem;
--course-list-grid-layout-chapter-name-font-letter-spacing: .02em;
--course-item-side-nav-chapter-meta-font-letter-spacing: .01em;
--product-basic-item-scarcity-half-layout-font-font-size: .85rem;
--heading-3-size: 2rem;
--product-list-description-font-font-size-value: 1.1;
--newsletter-block-title-text-font-font-size-value: 2;
--course-list-grid-layout-course-item-name-font-font-size-value: 1.125;
--announcement-bar-font-font-size-value: .9;
--product-block-price-font-letter-spacing: .04em;
--video-item-description-font-font-size-value: 1.1;
--blog-grid-masonry-list-excerpt-font-letter-spacing: .04em;
--course-item-side-nav-chapter-name-font-font-size: 1.5rem;
--product-basic-item-title-wrap-layout-font-letter-spacing: .02em;
--video-item-pagination-font-font-size-value: 2;
--blog-alternating-side-by-side-list-title-font-font-size: 2.8rem;
--portfolio-index-background-title-font-font-size: 4rem;
--video-basic-grid-list-title-font-letter-spacing: .02em;
--portfolio-hover-static-title-font-font-size-value: 4;
--form-block-input-text-font-font-size: 1.1rem;
--course-list-course-item-lesson-meta-font-font-size: .75rem;
--product-basic-item-variant-fields-full-layout-font-letter-spacing: .04em;
--product-basic-item-scarcity-wrap-layout-font-letter-spacing: .01em;
--course-list-grid-layout-chapter-name-font-font-size: 2rem;
--product-basic-item-price-font-letter-spacing: .02em;
--large-text-size: 1.5rem;
--product-basic-item-add-ons-title-wrap-layout-font-font-size: 1.1rem;
--blog-item-title-font-font-size-value: 4;
--course-list-course-item-lesson-excerpt-font-letter-spacing: .04em;
--product-block-title-font-font-size-value: 1.3;
--blog-grid-masonry-list-meta-font-font-size-value: 1.2;
--product-basic-item-restock-notification-font-font-size-value: 1.1;
--blog-item-author-profile-font-font-size-value: .9;
--course-item-side-nav-lesson-name-font-font-size: 1rem;
--product-basic-item-title-full-layout-font-font-size: 4rem;
--form-block-description-text-font-letter-spacing: .04em;
--product-basic-item-title-wrap-layout-font-font-size-value: 4;
--product-basic-item-description-half-layout-font-font-size-value: 1.1;
--product-basic-item-add-ons-title-wrap-layout-font-font-size-value: 1.1;
--product-basic-item-add-ons-title-half-layout-font-font-size: 1.1rem;
--blog-alternating-side-by-side-list-meta-font-font-size: 1.2rem;
--blog-basic-grid-list-title-font-font-size-value: 2;
--blog-basic-grid-list-excerpt-font-font-size-value: .9;
--form-field-radio-space-between-icon-and-text: 11px;
--heading-2-size: 2.8rem;
--blog-alternating-side-by-side-list-title-font-font-size-value: 2.8;
--portfolio-hover-static-title-font-font-size: 4rem;
--product-basic-item-price-half-layout-font-font-size-value: 1.1;
--product-basic-item-price-wrap-layout-font-letter-spacing: .04em;
--product-basic-item-restock-notification-full-layout-font-font-size: 1.1rem;
--product-basic-item-restock-notification-wrap-layout-font-font-size: 1.1rem;
--blog-basic-grid-list-meta-font-font-size: 1.2rem;
--course-item-name-mobile-font-font-size: 1.3rem;
--course-list-grid-layout-course-item-meta-font-letter-spacing: .01em;
--blog-basic-grid-list-title-font-letter-spacing: .02em;
--blog-item-title-font-letter-spacing: .02em;
--product-basic-item-restock-notification-font-font-size: 1.1rem;
--video-item-pagination-font-letter-spacing: .02em;
--blog-alternating-side-by-side-list-excerpt-font-letter-spacing: .04em;
--form-field-checkbox-padding-horizontal: 10px;
--course-item-lesson-name-font-font-size: 4rem;
--form-block-input-text-font-font-size-value: 1.1;
--quote-block-source-font-letter-spacing: .01em;
--form-block-placeholder-text-font-letter-spacing: .04em;
--product-basic-item-description-full-layout-font-font-size: 1.1rem;
--course-list-course-name-font-font-size-value: 4;
--form-field-column-gap: 10px;
--course-item-chapter-name-font-font-size-value: 1;
--video-basic-grid-list-title-font-font-size: 1.2rem;
--course-item-name-font-font-size: 2rem;
--product-basic-item-scarcity-wrap-layout-font-font-size: .85rem;
--product-basic-item-variant-fields-wrap-layout-font-font-size-value: .75;
--menu-block-item-price-font-font-size-value: 1.1;
--menu-block-nav-font-font-size: 1.2rem;
--video-basic-grid-list-meta-font-letter-spacing: .01em;
--meta-font-letter-spacing: .01em;
--normal-text-size: 1.1rem;
--form-field-checkbox-space-between-icon-and-text: 11px;
--blog-alternating-side-by-side-list-excerpt-font-font-size-value: 1.1;
--form-field-survey-size: 17px;
--course-list-grid-layout-chapter-meta-font-font-size: .875rem;
--product-basic-item-add-ons-title-font-letter-spacing: .04em;
--video-item-description-font-font-size: 1.1rem;
--video-basic-grid-list-meta-font-font-size: 1.2rem;
--product-basic-item-price-full-layout-font-letter-spacing: .04em;
--portfolio-hover-follow-title-font-font-size: 4rem;
--portfolio-grid-basic-title-font-font-size: 1.2rem;
--course-item-side-nav-chapter-name-font-font-size-value: 1.5;
--base-font-size: 16px;
--product-basic-item-restock-notification-font-letter-spacing: .04em;
--product-basic-item-variant-fields-full-layout-font-font-size-value: .75;
--blog-alternating-side-by-side-list-excerpt-font-font-size: 1.1rem;
--tertiary-button-padding-y: 1.2em;
--course-list-grid-layout-course-item-meta-font-font-size-value: .75;
--quote-block-text-font-font-size-value: 1.5;
--video-item-pagination-font-font-size: 2rem;
--course-item-lesson-name-font-font-size-value: 4;
--course-list-course-description-font-letter-spacing: .04em;
--newsletter-block-field-text-font-font-size: 1.1rem;
--course-list-grid-layout-course-item-excerpt-font-font-size: .875rem;
--site-title-font-font-size-value: 2;
--course-item-name-font-font-size-value: 2;
--portfolio-grid-overlay-title-font-font-size: 2rem;
--newsletter-block-title-text-font-letter-spacing: .02em;
--newsletter-block-field-text-font-font-size-value: 1.1;
--product-basic-item-variant-fields-half-layout-font-letter-spacing: .04em;
--course-list-grid-layout-course-item-excerpt-font-letter-spacing: .04em;
--course-list-course-item-lesson-meta-font-letter-spacing: .01em;
--product-basic-item-variant-fields-half-layout-font-font-size-value: .75;
--video-basic-grid-list-excerpt-font-font-size: .9rem;
--product-basic-item-variant-fields-font-font-size: 1.2rem;
--product-basic-item-restock-notification-half-layout-font-font-size: 1.1rem;
--form-field-radio-padding-horizontal: 10px;
--blog-basic-grid-list-meta-font-letter-spacing: .01em;
--form-caption-spacing-bottom: 2px;
--form-block-select-dropdown-text-font-letter-spacing: .04em;
--product-basic-item-restock-notification-full-layout-font-letter-spacing: .04em;
--menu-block-item-title-font-letter-spacing: .02em;
--blog-basic-grid-list-meta-font-font-size-value: 1.2;
--course-item-side-nav-chapter-name-font-letter-spacing: .02em;
--mobile-site-title-font-font-size-value: 2;
--blog-single-column-list-excerpt-font-font-size-value: 1.1;
--form-description-spacing-bottom: 4px;
--product-basic-item-title-font-font-size-value: 2.8;
--quote-block-text-font-font-size: 1.5rem;
--form-block-title-text-font-letter-spacing: .04em;
--form-block-title-text-font-font-size-value: 1.1;
--course-list-chapter-item-chapter-meta-font-letter-spacing: .01em;
--product-grid-text-below-title-font-letter-spacing: .02em;
--form-block-input-text-font-letter-spacing: .04em;
--heading-3-size-value: 2;
--blog-item-author-profile-font-font-size: .9rem;
--portfolio-hover-static-title-font-letter-spacing: .02em;
--menu-block-item-price-font-font-size: 1.1rem;
--product-basic-item-price-font-font-size: 1.2rem;
--product-basic-item-title-half-layout-font-font-size: 4rem;
--product-basic-item-description-wrap-layout-font-letter-spacing: .04em;
--product-block-title-font-letter-spacing: .04em;
--quote-block-source-font-font-size: 1.2rem;
--form-field-checkbox-padding-vertical: 10px;
--product-basic-item-price-half-layout-font-letter-spacing: .04em;
--events-item-pagination-date-font-font-size: 1.2rem;
--quote-block-text-font-letter-spacing: .04em;
--product-basic-item-scarcity-font-font-size-value: 1.2;
--commerce-mini-cart-image-placeholder-size: 22px;
--product-basic-item-scarcity-font-letter-spacing: .01em;
--blog-item-meta-font-font-size-value: 1.2;
--video-preview-badge-font-font-size: 1.1rem;
--tertiary-button-font-letter-spacing: .02em;
--blog-grid-masonry-list-meta-font-font-size: 1.2rem;
--product-basic-item-description-font-font-size: 1.1rem;
--form-field-radio-padding-vertical: 10px;
--form-field-checkbox-size: 16px;
--form-block-option-text-font-letter-spacing: .04em;
--form-block-caption-text-font-font-size: .9rem;
--course-list-chapter-item-chapter-name-font-font-size: 2rem;
--blog-alternating-side-by-side-list-meta-font-font-size-value: 1.2;
--heading-2-size-value: 2.8;
--course-item-side-nav-lesson-name-font-letter-spacing: .04em;
--portfolio-grid-basic-title-font-letter-spacing: .02em;
--course-list-course-item-lesson-meta-font-font-size-value: .75;
--blog-single-column-list-meta-font-font-size: 1.2rem;
--content-link-block-title-font-font-size-value: 1.1;
--blog-grid-masonry-list-title-font-font-size-value: 2;
--form-block-title-text-font-font-size: 1.1rem;
--course-item-side-nav-lesson-meta-font-font-size-value: .8;
--product-basic-item-scarcity-font-font-size: 1.2rem;
--product-basic-item-scarcity-full-layout-font-font-size: .85rem;
--video-basic-grid-list-category-nav-font-font-size-value: 1.1;
--heading-1-size: 4rem;
--form-block-select-dropdown-text-font-font-size: .9rem;
--portfolio-hover-follow-title-font-font-size-value: 4;
--newsletter-block-button-text-font-font-size: 1.1rem;
--cookie-banner-disclaimer-font-letter-spacing: .04em;
--product-basic-item-scarcity-half-layout-font-letter-spacing: .01em;
--site-navigation-font-letter-spacing: .04em;
--tertiary-button-font-font-size: .9rem;
--blog-single-column-list-meta-font-font-size-value: 1.2;
--product-basic-item-scarcity-half-layout-font-font-size-value: .85;
--video-item-meta-font-letter-spacing: .01em;
--blog-item-pagination-font-letter-spacing: .02em;
--product-grid-text-below-status-font-font-size-value: 1.2;
--course-list-course-item-lesson-name-font-font-size: 1.125rem;
--menu-block-item-description-font-font-size-value: 1.1;
--form-field-dropdown-icon-size: 18px;
--video-basic-grid-list-meta-font-font-size-value: 1.2;
--product-basic-item-add-ons-title-full-layout-font-letter-spacing: .04em;
```

### Typography

```css
--tertiary-button-font-font-style: normal;
--content-link-block-title-font-font-weight: 300;
--product-basic-item-restock-notification-wrap-layout-font-font-style: normal;
--product-basic-item-title-half-layout-font-font-family: "adobe-caslon-pro";
--quote-block-text-font-font-family: "proxima-nova";
--quote-block-text-font-font-weight: 300;
--product-basic-item-add-ons-title-half-layout-font-font-weight: 300;
--course-list-grid-layout-chapter-meta-font-font-style: normal;
--product-basic-item-description-font-line-height: 1.7em;
--product-basic-item-restock-notification-wrap-layout-font-text-transform: none;
--course-list-course-description-font-line-height: 1.7em;
--product-basic-item-scarcity-font-line-height: 1em;
--video-basic-grid-list-category-nav-font-font-family: "proxima-nova";
--form-block-placeholder-text-font-line-height: 1.7em;
--product-list-description-font-text-transform: none;
--blog-grid-masonry-list-title-font-text-transform: none;
--product-basic-item-variant-fields-wrap-layout-font-font-family: "proxima-nova";
--blog-item-author-profile-font-line-height: 1.7em;
--product-basic-item-add-ons-title-wrap-layout-font-font-weight: 300;
--video-basic-grid-list-title-font-font-weight: 600;
--blog-item-author-profile-font-font-family: "proxima-nova";
--mobile-site-title-font-text-transform: none;
--course-item-side-nav-lesson-meta-font-line-height: 1em;
--blog-side-by-side-list-excerpt-font-font-family: "proxima-nova";
--portfolio-item-pagination-font-font-style: normal;
--newsletter-block-button-text-font-line-height: 1.7em;
--blog-basic-grid-list-meta-font-font-style: normal;
--product-basic-item-variant-fields-font-line-height: 1em;
--newsletter-block-description-text-font-font-family: "proxima-nova";
--menu-block-title-font-font-style: normal;
--course-list-course-item-lesson-meta-font-font-weight: 400;
--heading-font-font-weight: 600;
--blog-alternating-side-by-side-list-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-title-full-layout-font-font-weight: 600;
--events-item-pagination-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-font-style: normal;
--form-block-survey-title-text-font-font-style: normal;
--product-basic-item-add-ons-title-half-layout-font-font-family: "proxima-nova";
--meta-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-weight: 400;
--course-list-course-item-lesson-meta-font-font-style: normal;
--menu-block-item-description-font-font-style: normal;
--blog-single-column-list-excerpt-font-font-style: normal;
--site-title-font-line-height: 1.4em;
--blog-side-by-side-list-meta-font-font-style: normal;
--product-basic-item-variant-fields-font-font-weight: 400;
--video-basic-grid-list-meta-font-text-transform: none;
--product-basic-item-scarcity-font-font-style: normal;
--course-list-course-name-font-font-family: "adobe-caslon-pro";
--product-basic-item-restock-notification-full-layout-font-font-weight: 300;
--course-list-grid-layout-chapter-name-font-font-style: normal;
--product-basic-item-variant-fields-font-font-style: normal;
--blog-basic-grid-list-meta-font-line-height: 1em;
--course-item-chapter-name-font-font-weight: 300;
--product-basic-item-description-wrap-layout-font-text-transform: none;
--portfolio-hover-follow-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-scarcity-font-text-transform: none;
--tertiary-button-font-line-height: 1.2em;
--product-grid-text-below-price-font-line-height: 1em;
--video-item-description-font-font-style: normal;
--blog-single-column-list-meta-font-font-style: normal;
--portfolio-grid-overlay-title-font-text-transform: none;
--blog-basic-grid-list-meta-font-font-weight: 400;
--product-grid-text-below-price-font-font-family: "proxima-nova";
--content-link-block-title-font-font-family: "proxima-nova";
--product-grid-text-below-status-font-font-weight: 400;
--quote-block-source-font-font-style: normal;
--form-block-description-text-font-text-transform: none;
--newsletter-block-field-text-font-text-transform: none;
--course-item-side-nav-lesson-name-font-font-style: normal;
--product-basic-item-restock-notification-half-layout-font-line-height: 1.7em;
--menu-block-item-description-font-text-transform: none;
--video-preview-badge-font-font-style: normal;
--course-list-grid-layout-course-item-name-font-font-family: "adobe-caslon-pro";
--portfolio-hover-follow-title-font-text-transform: none;
--course-list-grid-layout-course-item-name-font-line-height: 1.4em;
--blog-single-column-list-excerpt-font-text-transform: none;
--form-block-select-dropdown-text-font-font-family: "proxima-nova";
--newsletter-block-button-text-font-font-weight: 300;
--product-basic-item-add-ons-title-font-line-height: 1.7em;
--course-list-chapter-item-chapter-meta-font-font-weight: 400;
--video-item-description-font-font-family: "proxima-nova";
--product-basic-item-scarcity-half-layout-font-font-family: "proxima-nova";
--blog-alternating-side-by-side-list-excerpt-font-font-family: "proxima-nova";
--product-basic-item-variant-fields-wrap-layout-font-line-height: 1.7em;
--site-title-font-font-style: normal;
--blog-side-by-side-list-meta-font-font-family: "proxima-nova";
--form-block-select-dropdown-text-font-font-style: normal;
--course-list-grid-layout-course-item-meta-font-line-height: 1em;
--cookie-banner-disclaimer-font-line-height: 1.7em;
--blog-grid-masonry-list-meta-font-font-family: "proxima-nova";
--form-block-description-text-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-line-height: 1em;
--product-basic-item-add-ons-title-wrap-layout-font-font-family: "proxima-nova";
--product-basic-item-restock-notification-full-layout-font-text-transform: none;
--course-list-course-description-font-font-family: "proxima-nova";
--blog-alternating-side-by-side-list-excerpt-font-line-height: 1.7em;
--course-item-name-mobile-font-font-weight: 600;
--blog-item-meta-font-font-style: normal;
--video-basic-grid-list-title-font-line-height: 1.4em;
--form-block-option-text-font-line-height: 1.7em;
--product-basic-item-restock-notification-wrap-layout-font-font-family: "proxima-nova";
--announcement-bar-font-font-family: "proxima-nova";
--menu-block-nav-font-font-weight: 400;
--video-basic-grid-list-meta-font-line-height: 1em;
--product-basic-item-title-half-layout-font-font-weight: 600;
--product-basic-item-title-full-layout-font-line-height: 1.4em;
--product-basic-item-price-full-layout-font-font-family: "proxima-nova";
--events-item-pagination-font-font-weight: 600;
--video-basic-grid-list-meta-font-font-family: "proxima-nova";
--product-basic-item-add-ons-title-font-text-transform: none;
--course-list-course-item-lesson-excerpt-font-line-height: 1.7em;
--video-item-meta-font-font-weight: 400;
--events-item-pagination-date-font-font-family: "proxima-nova";
--form-block-title-text-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-line-height: 1em;
--blog-single-column-list-title-font-text-transform: none;
--newsletter-block-description-text-font-font-style: normal;
--form-block-option-text-font-font-weight: 300;
--menu-block-item-price-font-font-style: normal;
--blog-alternating-side-by-side-list-meta-font-font-family: "proxima-nova";
--blog-grid-masonry-list-excerpt-font-line-height: 1.7em;
--product-block-description-font-line-height: 1.7em;
--course-item-side-nav-chapter-meta-font-font-style: normal;
--video-basic-grid-list-excerpt-font-font-weight: 300;
--product-basic-item-title-wrap-layout-font-text-transform: none;
--blog-single-column-list-title-font-font-weight: 600;
--list-section-title-text-font-text-transform: none;
--product-list-description-font-font-family: "proxima-nova";
--product-grid-text-below-scarcity-font-font-style: normal;
--blog-side-by-side-list-excerpt-font-line-height: 1.7em;
--events-item-pagination-date-font-font-weight: 400;
--blog-basic-grid-list-title-font-font-weight: 600;
--video-basic-grid-list-excerpt-font-font-style: normal;
--meta-font-font-weight: 400;
--course-list-chapter-item-chapter-meta-font-font-style: normal;
--product-basic-item-title-full-layout-font-text-transform: none;
--form-block-placeholder-text-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-text-transform: none;
--portfolio-index-background-title-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-text-transform: none;
--blog-item-title-font-font-style: normal;
--product-basic-item-title-full-layout-font-font-style: normal;
--portfolio-item-pagination-font-font-family: "adobe-caslon-pro";
--mobile-site-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-title-half-layout-font-font-style: normal;
--header-button-font-text-transform: none;
--product-basic-item-restock-notification-font-font-style: normal;
--course-item-side-nav-chapter-meta-font-text-transform: none;
--video-item-pagination-font-font-style: normal;
--blog-grid-masonry-list-title-font-font-style: normal;
--course-list-grid-layout-chapter-name-font-font-family: "adobe-caslon-pro";
--product-grid-text-below-status-font-text-transform: none;
--course-item-side-nav-chapter-name-font-font-family: "adobe-caslon-pro";
--portfolio-grid-overlay-title-font-font-weight: 600;
--product-basic-item-price-full-layout-font-text-transform: none;
--product-basic-item-price-half-layout-font-font-weight: 300;
--course-list-course-description-font-font-style: normal;
--blog-grid-masonry-list-meta-font-text-transform: none;
--course-list-grid-layout-chapter-meta-font-font-family: "proxima-nova";
--form-block-survey-title-text-font-text-transform: none;
--product-grid-text-below-title-font-font-family: "adobe-caslon-pro";
--site-navigation-font-font-weight: 300;
--portfolio-index-background-title-font-font-style: normal;
--blog-side-by-side-list-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-add-ons-title-full-layout-font-font-family: "proxima-nova";
--blog-grid-masonry-list-title-font-line-height: 1.4em;
--video-item-title-font-line-height: 1.4em;
--course-list-course-item-lesson-excerpt-font-font-weight: 300;
--menu-block-item-description-font-font-family: "proxima-nova";
--product-block-description-font-font-family: "proxima-nova";
--product-basic-item-scarcity-half-layout-font-line-height: 1em;
--form-block-title-text-font-font-family: "proxima-nova";
--menu-block-item-title-font-font-weight: 600;
--course-list-course-description-font-text-transform: none;
--blog-item-pagination-font-font-style: normal;
--menu-block-item-title-font-line-height: 1.4em;
--course-list-grid-layout-course-item-excerpt-font-text-transform: none;
--product-basic-item-restock-notification-wrap-layout-font-font-weight: 300;
--video-item-pagination-font-font-weight: 600;
--content-link-block-title-font-line-height: 1.7em;
--blog-single-column-list-title-font-line-height: 1.4em;
--video-item-pagination-font-font-family: "adobe-caslon-pro";
--form-block-select-dropdown-text-font-font-weight: 300;
--product-basic-item-variant-fields-half-layout-font-line-height: 1.7em;
--product-list-description-font-font-weight: 300;
--course-list-course-name-font-font-weight: 600;
--menu-block-title-font-font-weight: 600;
--form-block-title-text-font-font-weight: 300;
--product-basic-item-restock-notification-font-line-height: 1.7em;
--menu-block-nav-font-text-transform: none;
--blog-alternating-side-by-side-list-meta-font-font-weight: 400;
--form-block-title-text-font-line-height: 1.7em;
--product-basic-item-price-font-font-family: "adobe-caslon-pro";
--product-basic-item-restock-notification-half-layout-font-font-style: normal;
--product-basic-item-restock-notification-full-layout-font-font-style: normal;
--product-basic-item-scarcity-half-layout-font-font-style: normal;
--product-basic-item-title-half-layout-font-line-height: 1.4em;
--course-item-side-nav-lesson-meta-font-font-weight: 400;
--product-basic-item-scarcity-font-font-family: "proxima-nova";
--form-block-survey-title-text-font-font-weight: 300;
--newsletter-block-field-text-font-font-style: normal;
--course-item-side-nav-lesson-name-font-font-weight: 300;
--blog-alternating-side-by-side-list-title-font-font-weight: 600;
--cookie-banner-disclaimer-font-font-weight: 300;
--portfolio-hover-follow-title-font-font-weight: 600;
--course-item-lesson-name-font-text-transform: none;
--site-navigation-font-font-family: "proxima-nova";
--product-block-description-font-font-style: normal;
--course-item-side-nav-lesson-name-font-line-height: 1.7em;
--header-button-font-font-weight: 500;
--product-block-title-font-font-family: "proxima-nova";
--menu-block-item-price-font-font-weight: 300;
--blog-side-by-side-list-title-font-line-height: 1.4em;
--blog-item-pagination-font-line-height: 1.4em;
--course-list-chapter-item-chapter-name-font-font-family: "adobe-caslon-pro";
--course-item-chapter-name-font-font-family: "proxima-nova";
--video-preview-badge-font-font-weight: 300;
--product-basic-item-title-wrap-layout-font-line-height: 1.4em;
--form-block-description-text-font-font-family: "proxima-nova";
--product-basic-item-description-wrap-layout-font-font-family: "proxima-nova";
--body-font-font-family: "proxima-nova";
--course-list-grid-layout-course-item-name-font-font-style: normal;
--body-font-line-height: 1.7em;
--course-list-course-name-font-line-height: 1.4em;
--product-basic-item-price-wrap-layout-font-font-style: normal;
--video-basic-grid-list-excerpt-font-font-family: "proxima-nova";
--product-block-price-font-font-family: "proxima-nova";
--product-basic-item-restock-notification-full-layout-font-line-height: 1.7em;
--product-basic-item-restock-notification-font-text-transform: none;
--course-list-grid-layout-chapter-name-font-line-height: 1.4em;
--portfolio-hover-follow-title-font-line-height: 1.4em;
--course-item-name-font-text-transform: none;
--course-list-grid-layout-chapter-name-font-text-transform: none;
--site-title-font-font-weight: 600;
--newsletter-block-button-text-font-font-family: "proxima-nova";
--quote-block-text-font-text-transform: none;
--menu-block-item-title-font-text-transform: none;
--course-list-course-item-lesson-meta-font-text-transform: none;
--meta-font-line-height: 1em;
--site-navigation-font-font-style: normal;
--quote-block-text-font-font-style: normal;
--video-preview-badge-font-text-transform: none;
--product-basic-item-variant-fields-wrap-layout-font-font-style: normal;
--product-basic-item-variant-fields-full-layout-font-line-height: 1.7em;
--heading-font-font-style: normal;
--blog-item-meta-font-font-family: "proxima-nova";
--course-item-name-font-line-height: 1.4em;
--product-basic-item-description-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-family: "proxima-nova";
--cookie-banner-disclaimer-font-font-style: normal;
--course-item-side-nav-chapter-name-font-font-style: normal;
--video-item-pagination-font-line-height: 1.4em;
--blog-basic-grid-list-title-font-line-height: 1.4em;
--product-basic-item-description-full-layout-font-font-style: normal;
--list-section-title-text-font-font-weight: 600;
--product-basic-item-price-half-layout-font-font-style: normal;
--product-grid-text-below-status-font-font-style: normal;
--product-basic-item-scarcity-half-layout-font-font-weight: 400;
--course-item-side-nav-lesson-name-font-font-family: "proxima-nova";
--announcement-bar-font-text-transform: none;
--product-basic-item-add-ons-title-half-layout-font-text-transform: none;
--form-block-input-text-font-font-weight: 300;
--product-list-description-font-line-height: 1.7em;
--blog-grid-masonry-list-excerpt-font-font-style: normal;
--course-item-lesson-name-font-font-family: "adobe-caslon-pro";
--portfolio-hover-static-title-font-font-weight: 600;
--blog-basic-grid-list-excerpt-font-font-weight: 300;
--blog-item-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-description-wrap-layout-font-font-style: normal;
--heading-font-text-transform: none;
--product-basic-item-description-full-layout-font-line-height: 1.7em;
--tertiary-button-font-font-family: "adobe-caslon-pro";
--form-block-placeholder-text-font-font-family: "proxima-nova";
--form-block-caption-text-font-font-family: "proxima-nova";
--video-item-description-font-line-height: 1.7em;
--video-basic-grid-list-meta-font-font-style: normal;
--course-item-name-font-font-family: "adobe-caslon-pro";
--product-block-price-font-font-style: normal;
--product-basic-item-scarcity-wrap-layout-font-text-transform: none;
--blog-grid-masonry-list-title-font-font-family: "adobe-caslon-pro";
--form-block-caption-text-font-font-style: normal;
--blog-item-title-font-line-height: 1.4em;
--product-basic-item-title-wrap-layout-font-font-weight: 600;
--product-basic-item-scarcity-full-layout-font-line-height: 1em;
--course-list-course-item-lesson-excerpt-font-text-transform: none;
--portfolio-hover-static-title-font-font-style: normal;
--blog-grid-masonry-list-title-font-font-weight: 600;
--product-basic-item-title-font-font-style: normal;
--product-basic-item-price-half-layout-font-font-family: "proxima-nova";
--blog-grid-masonry-list-meta-font-font-style: normal;
--product-block-title-font-font-style: normal;
--content-link-block-title-font-text-transform: none;
--portfolio-grid-basic-title-font-line-height: 1.4em;
--portfolio-hover-static-title-font-font-family: "adobe-caslon-pro";
--video-preview-badge-font-line-height: 1.7em;
--blog-grid-masonry-list-excerpt-font-text-transform: none;
--menu-block-title-font-line-height: 1.4em;
--course-list-course-item-lesson-excerpt-font-font-family: "proxima-nova";
--product-list-description-font-font-style: normal;
--course-item-side-nav-chapter-name-font-font-weight: 600;
--product-basic-item-variant-fields-half-layout-font-font-weight: 300;
--blog-alternating-side-by-side-list-title-font-text-transform: none;
--blog-basic-grid-list-meta-font-text-transform: none;
--product-basic-item-add-ons-title-wrap-layout-font-font-style: normal;
--product-grid-text-below-price-font-font-style: normal;
--product-grid-text-below-status-font-line-height: 1em;
--menu-block-nav-font-font-style: normal;
--course-list-grid-layout-course-item-name-font-font-weight: 600;
--product-basic-item-add-ons-title-full-layout-font-font-style: normal;
--site-navigation-font-text-transform: none;
--blog-item-pagination-font-font-family: "adobe-caslon-pro";
--form-block-caption-text-font-font-weight: 300;
--course-item-side-nav-chapter-name-font-line-height: 1.4em;
--blog-alternating-side-by-side-list-title-font-line-height: 1.4em;
--site-title-font-font-family: "adobe-caslon-pro";
--course-list-grid-layout-course-item-excerpt-font-font-family: "proxima-nova";
--cookie-banner-disclaimer-font-text-transform: none;
--product-basic-item-title-half-layout-font-text-transform: none;
--newsletter-block-title-text-font-font-style: normal;
--body-font-text-transform: none;
--newsletter-block-title-text-font-font-weight: 600;
--blog-item-meta-font-line-height: 1em;
--form-block-input-text-font-font-family: "proxima-nova";
--announcement-bar-font-line-height: 1.7em;
--video-item-pagination-font-text-transform: none;
--portfolio-grid-basic-title-font-font-style: normal;
--course-item-lesson-name-font-font-style: normal;
--course-list-grid-layout-course-item-excerpt-font-line-height: 1.7em;
--blog-single-column-list-title-font-font-style: normal;
--video-item-title-font-text-transform: none;
--product-basic-item-variant-fields-half-layout-font-font-style: normal;
--cookie-banner-disclaimer-font-font-family: "proxima-nova";
--newsletter-block-footnote-text-font-font-weight: 300;
--content-link-block-title-font-font-style: normal;
--product-basic-item-restock-notification-half-layout-font-text-transform: none;
--newsletter-block-footnote-text-font-font-family: "proxima-nova";
--blog-side-by-side-list-title-font-font-style: normal;
--blog-item-author-profile-font-font-weight: 300;
--course-list-grid-layout-chapter-meta-font-font-weight: 400;
--blog-side-by-side-list-title-font-font-weight: 600;
--portfolio-grid-overlay-title-font-line-height: 1.4em;
--course-item-side-nav-chapter-meta-font-font-weight: 400;
--form-block-survey-title-text-font-font-family: "proxima-nova";
--product-basic-item-price-font-font-style: normal;
--blog-side-by-side-list-excerpt-font-font-weight: 300;
--blog-single-column-list-title-font-font-family: "adobe-caslon-pro";
--meta-font-font-style: normal;
--form-block-survey-title-text-font-line-height: 1.7em;
--video-item-description-font-text-transform: none;
--product-basic-item-price-full-layout-font-font-weight: 300;
--portfolio-item-pagination-font-text-transform: none;
--heading-font-line-height: 1.4em;
--product-basic-item-restock-notification-half-layout-font-font-weight: 300;
--product-basic-item-restock-notification-font-font-weight: 300;
--newsletter-block-field-text-font-font-weight: 300;
--menu-block-nav-font-line-height: 1em;
--portfolio-index-background-title-font-font-weight: 600;
--course-item-name-mobile-font-line-height: 1.4em;
--product-basic-item-title-font-text-transform: none;
--product-grid-text-below-price-font-text-transform: none;
--video-basic-grid-list-category-nav-font-font-style: normal;
--product-basic-item-add-ons-title-wrap-layout-font-line-height: 1.7em;
--blog-single-column-list-meta-font-font-weight: 400;
--form-block-option-text-font-font-family: "proxima-nova";
--product-basic-item-price-wrap-layout-font-text-transform: none;
--blog-single-column-list-excerpt-font-font-family: "proxima-nova";
--product-block-title-font-font-weight: 300;
--product-grid-text-below-title-font-text-transform: none;
--form-block-input-text-font-text-transform: none;
--product-basic-item-add-ons-title-half-layout-font-font-style: normal;
--newsletter-block-title-text-font-line-height: 1.4em;
--product-basic-item-description-half-layout-font-text-transform: none;
--video-item-title-font-font-style: normal;
--blog-grid-masonry-list-meta-font-line-height: 1em;
--product-grid-text-below-status-font-font-family: "proxima-nova";
--product-basic-item-description-full-layout-font-font-family: "proxima-nova";
--video-item-meta-font-font-family: "proxima-nova";
--product-basic-item-description-full-layout-font-font-weight: 300;
--portfolio-grid-basic-title-font-font-weight: 600;
--form-block-select-dropdown-text-font-text-transform: none;
--product-basic-item-price-font-font-weight: 600;
--portfolio-index-background-title-font-font-family: "adobe-caslon-pro";
--portfolio-grid-basic-title-font-font-family: "adobe-caslon-pro";
--blog-item-pagination-font-font-weight: 600;
--heading-font-font-family: "adobe-caslon-pro";
--events-item-pagination-font-font-style: normal;
--blog-item-author-profile-font-font-style: normal;
--product-basic-item-description-half-layout-font-font-style: normal;
--video-item-meta-font-text-transform: none;
--menu-block-item-description-font-font-weight: 300;
--form-block-description-text-font-line-height: 1.7em;
--course-list-course-item-lesson-name-font-text-transform: none;
--product-basic-item-scarcity-font-font-weight: 400;
--events-item-pagination-font-font-family: "adobe-caslon-pro";
--product-basic-item-variant-fields-wrap-layout-font-text-transform: none;
--course-list-grid-layout-course-item-excerpt-font-font-style: normal;
--portfolio-hover-static-title-font-line-height: 1.4em;
--product-basic-item-scarcity-wrap-layout-font-font-style: normal;
--video-basic-grid-list-category-nav-font-line-height: 1.7em;
--product-basic-item-restock-notification-half-layout-font-font-family: "proxima-nova";
--form-block-select-dropdown-text-font-line-height: 1.7em;
--quote-block-text-font-line-height: 1.7em;
--blog-single-column-list-meta-font-font-family: "proxima-nova";
--newsletter-block-footnote-text-font-line-height: 1.7em;
--announcement-bar-font-font-weight: 300;
--newsletter-block-button-text-font-font-style: normal;
--newsletter-block-title-text-font-text-transform: none;
--menu-block-item-price-font-line-height: 1.7em;
--product-basic-item-price-full-layout-font-font-style: normal;
--video-basic-grid-list-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-price-wrap-layout-font-font-weight: 300;
--mobile-site-title-font-font-weight: 600;
--product-basic-item-add-ons-title-font-font-weight: 300;
--course-item-lesson-name-font-line-height: 1.4em;
--events-item-pagination-date-font-text-transform: none;
--product-basic-item-description-font-font-style: normal;
--blog-item-title-font-font-weight: 600;
--blog-alternating-side-by-side-list-meta-font-font-style: normal;
--newsletter-block-button-text-font-text-transform: none;
--video-basic-grid-list-excerpt-font-line-height: 1.7em;
--blog-single-column-list-excerpt-font-font-weight: 300;
--blog-single-column-list-meta-font-text-transform: none;
--product-basic-item-description-half-layout-font-font-family: "proxima-nova";
--quote-block-source-font-font-family: "proxima-nova";
--blog-item-title-font-text-transform: none;
--blog-side-by-side-list-meta-font-text-transform: none;
--blog-alternating-side-by-side-list-excerpt-font-text-transform: none;
--product-grid-text-below-scarcity-font-line-height: 1em;
--blog-grid-masonry-list-meta-font-font-weight: 400;
--product-basic-item-scarcity-full-layout-font-font-weight: 400;
--product-basic-item-variant-fields-full-layout-font-font-family: "proxima-nova";
--blog-grid-masonry-list-excerpt-font-font-family: "proxima-nova";
--menu-block-item-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-add-ons-title-full-layout-font-text-transform: none;
--blog-item-meta-font-text-transform: none;
--product-basic-item-restock-notification-wrap-layout-font-line-height: 1.7em;
--video-item-meta-font-line-height: 1em;
--menu-block-item-price-font-font-family: "proxima-nova";
--site-title-font-text-transform: none;
--video-basic-grid-list-title-font-font-style: normal;
--course-list-chapter-item-chapter-name-font-text-transform: none;
--product-basic-item-title-full-layout-font-font-family: "adobe-caslon-pro";
--video-basic-grid-list-category-nav-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-font-style: normal;
--course-item-side-nav-chapter-name-font-text-transform: none;
--portfolio-hover-static-title-font-text-transform: none;
--portfolio-grid-overlay-title-font-font-family: "adobe-caslon-pro";
--product-basic-item-restock-notification-font-font-family: "proxima-nova";
--course-list-chapter-item-chapter-name-font-line-height: 1.4em;
--blog-side-by-side-list-meta-font-font-weight: 400;
--course-list-chapter-item-chapter-name-font-font-weight: 600;
--form-block-description-text-font-font-weight: 300;
--course-list-course-item-lesson-name-font-line-height: 1.7em;
--course-list-course-item-lesson-meta-font-line-height: 1em;
--product-basic-item-price-full-layout-font-line-height: 1.7em;
--video-item-description-font-font-weight: 300;
--video-basic-grid-list-meta-font-font-weight: 400;
--product-basic-item-scarcity-full-layout-font-text-transform: none;
--course-list-course-item-lesson-meta-font-font-family: "proxima-nova";
--blog-single-column-list-excerpt-font-line-height: 1.7em;
--blog-item-pagination-font-text-transform: none;
--product-basic-item-description-wrap-layout-font-line-height: 1.7em;
--course-item-side-nav-chapter-meta-font-line-height: 1em;
--course-item-chapter-name-font-line-height: 1.7em;
--events-item-pagination-date-font-line-height: 1em;
--course-list-course-name-font-text-transform: none;
--blog-single-column-list-meta-font-line-height: 1em;
--header-button-font-font-family: "proxima-nova";
--product-grid-text-below-title-font-font-style: normal;
--product-basic-item-variant-fields-half-layout-font-text-transform: none;
--announcement-bar-font-font-style: normal;
--product-basic-item-title-font-font-family: "adobe-caslon-pro";
--product-block-title-font-text-transform: none;
--blog-alternating-side-by-side-list-excerpt-font-font-style: normal;
--newsletter-block-field-text-font-line-height: 1.7em;
--portfolio-item-pagination-font-font-weight: 600;
--video-item-title-font-font-weight: 600;
--product-grid-text-below-title-font-font-weight: 600;
--product-basic-item-description-half-layout-font-line-height: 1.7em;
--course-item-name-font-font-weight: 600;
--product-basic-item-price-font-line-height: 1.4em;
--tertiary-button-font-text-transform: none;
--product-basic-item-variant-fields-font-font-family: "proxima-nova";
--product-grid-text-below-title-font-line-height: 1.4em;
--events-item-pagination-date-font-font-style: normal;
--events-item-pagination-font-line-height: 1.4em;
--blog-basic-grid-list-meta-font-font-family: "proxima-nova";
--form-block-option-text-font-font-style: normal;
--list-section-title-text-font-font-style: normal;
--product-basic-item-variant-fields-wrap-layout-font-font-weight: 300;
--course-list-course-item-lesson-excerpt-font-font-style: normal;
--menu-block-item-description-font-line-height: 1.7em;
--form-block-input-text-font-line-height: 1.7em;
--newsletter-block-title-text-font-font-family: "adobe-caslon-pro";
--newsletter-block-description-text-font-font-weight: 300;
--product-basic-item-restock-notification-full-layout-font-font-family: "proxima-nova";
--product-basic-item-title-wrap-layout-font-font-family: "adobe-caslon-pro";
--quote-block-source-font-line-height: 1em;
--product-grid-text-below-price-font-font-weight: 400;
--list-section-title-text-font-font-family: "adobe-caslon-pro";
--product-basic-item-description-font-font-family: "proxima-nova";
--product-basic-item-description-font-font-weight: 300;
--blog-side-by-side-list-meta-font-line-height: 1em;
--product-basic-item-price-half-layout-font-line-height: 1.7em;
--product-block-price-font-line-height: 1.7em;
--product-basic-item-scarcity-full-layout-font-font-family: "proxima-nova";
--product-basic-item-scarcity-wrap-layout-font-line-height: 1em;
--blog-basic-grid-list-title-font-font-style: normal;
--course-item-name-font-font-style: normal;
--video-basic-grid-list-excerpt-font-text-transform: none;
--blog-side-by-side-list-excerpt-font-text-transform: none;
--course-list-chapter-item-chapter-meta-font-font-family: "proxima-nova";
--video-basic-grid-list-category-nav-font-font-weight: 300;
--product-basic-item-price-half-layout-font-text-transform: none;
--form-block-placeholder-text-font-font-style: normal;
--course-list-course-item-lesson-name-font-font-style: normal;
--list-section-title-text-font-line-height: 1.4em;
--product-block-description-font-text-transform: none;
--product-basic-item-price-font-text-transform: none;
--menu-block-item-price-font-text-transform: none;
--form-block-caption-text-font-line-height: 1.7em;
--product-basic-item-variant-fields-full-layout-font-font-style: normal;
--product-basic-item-add-ons-title-wrap-layout-font-text-transform: none;
--product-grid-text-below-scarcity-font-text-transform: none;
--menu-block-title-font-text-transform: none;
--product-basic-item-price-wrap-layout-font-line-height: 1.7em;
--product-basic-item-description-wrap-layout-font-font-weight: 300;
--portfolio-grid-basic-title-font-text-transform: none;
--course-item-side-nav-chapter-meta-font-font-family: "proxima-nova";
--meta-font-font-family: "proxima-nova";
--mobile-site-title-font-line-height: 1.4em;
--portfolio-item-pagination-font-line-height: 1.4em;
--product-basic-item-add-ons-title-full-layout-font-line-height: 1.7em;
--newsletter-block-description-text-font-text-transform: none;
--product-basic-item-scarcity-half-layout-font-text-transform: none;
--blog-alternating-side-by-side-list-title-font-font-style: normal;
--form-block-caption-text-font-text-transform: none;
--video-preview-badge-font-font-family: "proxima-nova";
--course-item-side-nav-lesson-meta-font-font-family: "proxima-nova";
--product-basic-item-scarcity-wrap-layout-font-font-family: "proxima-nova";
--course-list-course-description-font-font-weight: 300;
--product-basic-item-description-full-layout-font-text-transform: none;
--form-block-placeholder-text-font-font-weight: 300;
--quote-block-source-font-font-weight: 400;
--product-block-title-font-line-height: 1.7em;
--course-list-grid-layout-chapter-name-font-font-weight: 600;
--video-item-title-font-font-family: "adobe-caslon-pro";
--blog-basic-grid-list-title-font-font-family: "adobe-caslon-pro";
--course-item-side-nav-lesson-name-font-text-transform: none;
--course-list-grid-layout-course-item-excerpt-font-font-weight: 300;
--course-list-chapter-item-chapter-name-font-font-style: normal;
--product-basic-item-title-wrap-layout-font-font-style: normal;
--newsletter-block-footnote-text-font-text-transform: none;
--blog-side-by-side-list-title-font-text-transform: none;
--product-block-description-font-font-weight: 300;
--product-basic-item-add-ons-title-full-layout-font-font-weight: 300;
--product-basic-item-variant-fields-font-text-transform: none;
--newsletter-block-field-text-font-font-family: "proxima-nova";
--course-item-name-mobile-font-font-family: "adobe-caslon-pro";
--course-list-chapter-item-chapter-meta-font-line-height: 1em;
--video-item-meta-font-font-style: normal;
--menu-block-item-title-font-font-style: normal;
--product-basic-item-scarcity-wrap-layout-font-font-weight: 400;
--form-block-title-text-font-font-style: normal;
--course-list-course-name-font-font-style: normal;
--menu-block-nav-font-font-family: "proxima-nova";
--blog-basic-grid-list-excerpt-font-font-family: "proxima-nova";
--product-basic-item-scarcity-full-layout-font-font-style: normal;
--product-basic-item-price-wrap-layout-font-font-family: "proxima-nova";
--course-list-grid-layout-course-item-name-font-text-transform: none;
--course-list-course-item-lesson-name-font-font-weight: 300;
--header-button-font-line-height: 1.2em;
--newsletter-block-description-text-font-line-height: 1.7em;
--course-item-side-nav-lesson-meta-font-text-transform: none;
--newsletter-block-footnote-text-font-font-style: normal;
--product-basic-item-add-ons-title-font-font-style: normal;
--course-list-chapter-item-chapter-meta-font-text-transform: none;
--blog-basic-grid-list-excerpt-font-line-height: 1.7em;
--video-basic-grid-list-title-font-text-transform: none;
--course-item-name-mobile-font-text-transform: none;
--product-block-price-font-text-transform: none;
--portfolio-hover-follow-title-font-font-style: normal;
--course-item-name-mobile-font-font-style: normal;
--menu-block-title-font-font-family: "adobe-caslon-pro";
--course-item-lesson-name-font-font-weight: 600;
--course-item-chapter-name-font-text-transform: none;
--blog-side-by-side-list-excerpt-font-font-style: normal;
--course-item-side-nav-lesson-meta-font-font-style: normal;
--mobile-site-title-font-font-style: normal;
--site-navigation-font-line-height: 1.7em;
--product-basic-item-variant-fields-full-layout-font-font-weight: 300;
--product-basic-item-add-ons-title-font-font-family: "proxima-nova";
--product-basic-item-title-font-line-height: 1.4em;
--blog-alternating-side-by-side-list-excerpt-font-font-weight: 300;
--body-font-font-weight: 300;
--form-block-option-text-font-text-transform: none;
--course-list-grid-layout-course-item-meta-font-text-transform: none;
--quote-block-source-font-text-transform: none;
--portfolio-index-background-title-font-line-height: 1.4em;
--product-basic-item-description-half-layout-font-font-weight: 300;
--body-font-font-style: normal;
--product-basic-item-title-font-font-weight: 600;
--course-list-course-item-lesson-name-font-font-family: "proxima-nova";
--blog-item-author-profile-font-text-transform: none;
--product-basic-item-variant-fields-half-layout-font-font-family: "proxima-nova";
--form-block-input-text-font-font-style: normal;
--product-grid-text-below-scarcity-font-font-weight: 400;
--blog-item-meta-font-font-weight: 400;
--product-grid-text-below-scarcity-font-font-family: "proxima-nova";
--course-item-chapter-name-font-font-style: normal;
--blog-basic-grid-list-title-font-text-transform: none;
--portfolio-grid-overlay-title-font-font-style: normal;
--product-basic-item-variant-fields-full-layout-font-text-transform: none;
--header-button-font-font-style: normal;
--product-block-price-font-font-weight: 300;
--blog-alternating-side-by-side-list-meta-font-text-transform: none;
--blog-grid-masonry-list-excerpt-font-font-weight: 300;
--product-basic-item-add-ons-title-half-layout-font-line-height: 1.7em;
--tertiary-button-font-font-weight: 500;
```

### Other

```css
--form-field-dropdown-icon-thickness: 1px;
--image-block-stack-image-button-separation: 4%;
--previous-section-divider-offset: 0px;
--tertiary-button-stroke: 0px;
--image-block-overlap-image-content-offset: 35%;
--image-block-stack-image-title-separation: 4%;
--tweak-global-animations-animation-delay: .6s;
--white-hsl: 0,0%,100%;
--image-block-overlap-image-button-separation: 5%;
--tweak-global-animations-animation-duration: .9s;
--image-block-collage-image-width: 70%;
--image-block-collage-image-content-width: 50%;
--image-block-poster-image-content-width: 70%;
--image-block-stack-image-content-separation: 7%;
--image-block-overlap-image-width: 55%;
--course-list-course-item-hover-background: hsla(18.46153846,96.2962963%,78.82352941%,.75);
--course-list-course-item-background: hsla(18.46153846,96.2962963%,78.82352941%,1);
--black-hsl: 336,17.24137931%,11.37254902%;
--image-block-collage-image-button-separation: 5%;
--image-block-collage-image-content-offset: 5%;
--image-block-poster-image-title-separation: 5%;
--image-block-overlap-image-title-separation: 3%;
--image-block-poster-image-button-separation: 6%;
--image-block-collage-image-title-separation: 4%;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 430px | max-width |
| 575px | 575px | max-width |
| sm | 576px | min-width |
| sm | 640px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 1099px | 1099px | max-width |
| 1199px | 1199px | max-width |
| xl | 1280px | max-width |
| xl | 1281px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.14s`, `0.1s`, `0.4s`, `0.9s`, `0.00280374s`, `0.00560748s`, `0.00841121s`, `0.011215s`, `0.0140187s`, `0.25s`, `0.0168224s`, `0.0196262s`, `0.0224299s`, `0.0252336s`, `0.0280374s`, `0.0308411s`, `0.6s`, `0.0336449s`, `0.0364486s`, `0.0392523s`, `0.0420561s`, `0.0448598s`, `0.0476636s`, `0.0504673s`, `0.053271s`, `0.0560748s`, `0.0588785s`, `0.0616822s`, `0.064486s`, `0.0672897s`, `0.0700935s`, `0.0728972s`, `0.0757009s`, `0.0785047s`, `0.0813084s`, `0.0841121s`, `0.0869159s`, `0.0897196s`, `0.0925234s`, `0.0953271s`, `0.0981308s`, `0.100935s`, `0.103738s`, `0.106542s`, `0.109346s`, `0.11215s`, `0.114953s`, `0.117757s`, `0.120561s`, `0.123364s`, `0.126168s`, `0.128972s`, `0.131776s`, `0.134579s`, `0.137383s`, `0.140187s`, `0.142991s`, `0.145794s`, `0.148598s`, `0.151402s`, `0.154206s`, `0.157009s`, `0.159813s`, `0.162617s`, `0.165421s`, `0.168224s`, `0.171028s`, `0.173832s`, `0.176636s`, `0.179439s`, `0.182243s`, `0.185047s`, `0.18785s`, `0.190654s`, `0.193458s`, `0.196262s`, `0.199065s`, `0.8s`, `0.201869s`, `0.204673s`, `0.207477s`, `0.21028s`, `0.213084s`, `0.215888s`, `0.218692s`, `0.221495s`, `0.224299s`, `0.227103s`, `0.229907s`, `0.23271s`, `0.235514s`, `0.238318s`, `0.241121s`, `0.243925s`, `0.246729s`, `0.249533s`, `0.252336s`, `0.25514s`, `0.257944s`, `0.260748s`, `0.263551s`, `0.266355s`, `0.269159s`, `0.271963s`, `0.274766s`, `0.27757s`, `0.280374s`, `0.283178s`, `0.285981s`, `0.288785s`, `0.291589s`, `0.294393s`, `0.297196s`, `0.3s`, `0.302804s`, `0.305607s`, `0.308411s`, `0.311215s`, `0.314019s`, `0.316822s`, `0.319626s`, `0.32243s`, `0.325234s`, `0.328037s`, `0.330841s`, `0.333645s`, `0.336449s`, `0.339252s`, `0.342056s`, `0.34486s`, `0.347664s`, `0.350467s`, `0.353271s`, `0.356075s`, `0.358879s`, `0.361682s`, `0.364486s`, `0.36729s`, `0.370093s`, `0.372897s`, `0.375701s`, `0.378505s`, `0.381308s`, `0.384112s`, `0.386916s`, `0.38972s`, `0.392523s`, `0.395327s`, `0.398131s`, `0.400935s`, `0.403738s`, `0.406542s`, `0.409346s`, `0.41215s`, `0.414953s`, `0.417757s`, `0.420561s`, `0.423364s`, `0.426168s`, `0.428972s`, `0.431776s`, `0.434579s`, `0.437383s`, `0.440187s`, `0.442991s`, `0.445794s`, `0.448598s`, `0.451402s`, `0.454206s`, `0.457009s`, `0.459813s`, `0.462617s`, `0.465421s`, `0.468224s`, `0.471028s`, `0.473832s`, `0.476636s`, `0.479439s`, `0.482243s`, `0.485047s`, `0.48785s`, `0.490654s`, `0.493458s`, `0.496262s`, `0.499065s`, `0.501869s`, `0.504673s`, `0.507477s`, `0.51028s`, `0.513084s`, `0.515888s`, `0.518692s`, `0.521495s`, `0.524299s`, `0.527103s`, `0.529907s`, `0.53271s`, `0.535514s`, `0.538318s`, `0.541121s`, `0.543925s`, `0.546729s`, `0.549533s`, `0.552336s`, `0.55514s`, `0.557944s`, `0.560748s`, `0.563551s`, `0.566355s`, `0.569159s`, `0.571963s`, `0.574766s`, `0.57757s`, `0.580374s`, `0.583178s`, `0.585981s`, `0.588785s`, `0.591589s`, `0.594393s`, `0.597196s`, `0.17s`

### Common Transitions

```css
transition: all;
transition: transform 0.14s ease-in-out;
transition: opacity 0.1s linear;
transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.9s;
transition: opacity 0.9s 0.00280374s;
transition: opacity 0.9s 0.00560748s;
transition: opacity 0.9s 0.00841121s;
transition: opacity 0.9s 0.011215s;
transition: opacity 0.9s 0.0140187s;
```

### Keyframe Animations

**fonts-loading**
```css
@keyframes fonts-loading {
  0%, 99% { color: transparent; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (41 instances)

```css
.button {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-size: 17.536px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (9 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (26 instances)

```css
.link {
  color: rgb(254, 131, 87);
  font-size: 17.536px;
  font-weight: 300;
}
```

### Navigation (54 instances)

```css
.navigatio {
  background-color: rgb(255, 255, 255);
  color: rgb(34, 24, 28);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.foote {
  color: rgb(34, 24, 28);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 17.536px;
}
```

### Modals (10 instances)

```css
.modal {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (17 instances)

```css
.dropdown {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border-color: rgb(34, 24, 28);
  padding-top: 0px;
}
```

### Badges (1 instances)

```css
.badge {
  color: rgb(254, 131, 87);
  font-size: 17.536px;
  font-weight: 300;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Layout System

**0 grid containers** and **66 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1500px | 51.2px |
| 2500px | 0px |
| 2080px | 0px |
| 2250px | 0px |
| 2254px | 0px |
| 2447px | 0px |
| 1125px | 0px |
| 2048px | 0px |
| 1382px | 0px |
| 924px | 0px |
| 968px | 0px |
| 1444px | 0px |
| 211px | 0px |
| 1680px | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 5x |
| row/nowrap | 58x |
| row/wrap | 3x |

**Gap values:** `12px normal`

## Accessibility (WCAG 2.1)

**Overall Score: 85%** — 33 passing, 6 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#000000` | `#22181c` | 1.22:1 | FAIL | div (6x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#22181c` | `#ffffff` | 17.28:1 | AAA |
| `#ffffff` | `#000000` | 21:1 | AAA |
| `#22181c` | `#ffede8` | 15.25:1 | AAA |

## Design System Score

**Overall: 82/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 80/100 |
| Spacing System | 40/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 85/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Good CSS variable tokenization

**Issues:**
- No consistent spacing base unit detected — values appear arbitrary
- 6 WCAG contrast failures

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |

```css
background: linear-gradient(rgb(254, 131, 87), rgb(254, 131, 87));
```

## Z-Index Map

**7 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 100,100 | div.f.l.o.a.t.i.n.g.-.c.a.r.t. .h.i.d.d.e.n |
| sticky | 10,10 | header.h.e.a.d.e.r. .t.h.e.m.e.-.c.o.l.-.-.p.r.i.m.a.r.y |
| base | 0,9 | div.s.q.s.-.h.t.m.l.-.c.o.n.t.e.n.t, div.s.q.s.-.h.t.m.l.-.c.o.n.t.e.n.t, div.s.q.s.-.h.t.m.l.-.c.o.n.t.e.n.t |

## SVG Icons

**4 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| lg | 2 |
| xl | 2 |

**Icon colors:** `rgba(0, 0, 0, 0)`, `rgb(34, 24, 28)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| proxima-nova | self-hosted | 300, 400, 500, 700 | normal, italic |
| adobe-caslon-pro | self-hosted | 600 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| hero | 17 | objectFit: cover, borderRadius: 0px, shape: square |
| general | 9 | objectFit: cover, borderRadius: 0px, shape: square |
| thumbnail | 7 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 5 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 16:9 (7x), 4:3 (6x), 3:2 (4x), 1:1 (2x), 2:3 (2x), 9:16 (2x), 22.13:1 (2x), 2.16:1 (1x)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `proxima-nova` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
