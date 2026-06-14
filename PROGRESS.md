# Carboryn Website Progress

Last updated: June 14, 2026

## Current Status

The original single-page HTML website has been replaced with a production-ready
Next.js foundation and a new Carboryn-focused visual identity.

The website is running locally at `http://localhost:3000`.

## Completed

- [x] Validated startup positioning and scientific claim boundaries
- [x] Defined Carboryn as the master brand and EcoConcrete as an application
- [x] Migrated from one HTML file to Next.js, React, TypeScript, and Tailwind CSS
- [x] Built shared layout, navigation, footer, and design tokens
- [x] Built responsive homepage
- [x] Built `/technology`, `/evidence`, `/pilot`, and `/company` routes
- [x] Added evidence-status labels for claims, estimates, targets, and milestones
- [x] Built scroll-driven React Three Fiber mineralization experience
- [x] Added GSAP scroll control and reduced-motion support
- [x] Optimized 3D rendering to update only when required
- [x] Upgraded the visual system with premium mineral-glass lighting
- [x] Added spectral green-blue highlights and dimensional glass surfaces
- [x] Refined 3D materials, reaction rings, lighting, and particle quality
- [x] Added a live material-intelligence HUD to the hero experience
- [x] Removed decorative sequence numbers and template-like slash labels
- [x] Unified the full site into a black and aesthetic-green palette
- [x] Reworked section labels with natural typography and green glass signals
- [x] Converted formerly light sections and cards into premium dark glass surfaces
- [x] Integrated the official Carboryn glass logo
- [x] Added Carboryn LinkedIn contact links
- [x] Reduced oversized typography across desktop and mobile
- [x] Added pointer-responsive lighting and tactile hover/press interactions
- [x] Applied iPhone-like spring feedback across navigation, cards, data, and CTAs
- [x] Added interpolated 60Hz pointer lighting and responsive press illumination
- [x] Added animated ambient glass optics across the site
- [x] Rebuilt the 3D hero background with black optical lighting and glass refractions
- [x] Added visibility-aware continuous 3D motion and animated scene lighting
- [x] Added subtle viewport-driven content reveals
- [x] Migrated typography to the Apple system font stack and reduced oversized type
- [x] Upgraded navigation and content surfaces with animated optical glass
- [x] Replaced the block visualization with a continuously rotating atomic mineral model
- [x] Added scroll-driven atomic expansion, mineral transformation, and reaction lighting
- [x] Replaced binary hover motion with continuous liquid-glass lens interactions
- [x] Added scroll-aware shrinking navigation and soft content dissolve beneath it
- [x] Added backdrop-filter fallbacks and hardware-accelerated glass movement
- [x] Unified motion timing and removed competing binary hover transforms
- [x] Added frame-rate-independent pointer and lens interpolation
- [x] Smoothed scroll-driven 3D transitions and reduced off-screen rendering work
- [x] Verified desktop and mobile layouts
- [x] Passed `npm run lint`
- [x] Passed `npm run build`

## Next Steps

### Priority 1: Content and Scientific Validation

- [ ] Review all website copy with the Carboryn team
- [ ] Confirm which prototype results can be published
- [ ] Replace modeled claims with documented calculation sources
- [ ] Prepare laboratory photos, calibration records, and material test results
- [ ] Confirm how Norm Cement discussions may be described publicly

### Priority 2: Brand Assets

- [ ] Finalize Carboryn logo and wordmark
- [ ] Validate the premium mineral-glass visual direction with the full team
- [ ] Create favicon, social preview image, and metadata graphics
- [x] Add real team portraits
- [x] Added premium illuminated team showcases to homepage and company page
- [x] Expanded achievements into large animated glass panels
- [x] Refined team cards to preserve portrait quality and added LinkedIn profile links
- [x] Added GreenTech III diploma and trophy as visual achievement evidence
- [x] Removed award image backgrounds and rebuilt them as sharpened transparent assets
- [x] Corrected GreenTech III positioning as a startup and innovation competition
- [ ] Produce an accurate industrial-process schematic

### Priority 3: Product Features

- [ ] Add a working pilot-partner inquiry form
- [ ] Add downloadable technical brief or white paper
- [ ] Add Azerbaijani language support
- [ ] Add a news, updates, or pilot-results section
- [ ] Add privacy policy and required legal pages

### Priority 4: Quality and Launch

- [ ] Run formal accessibility audit
- [ ] Measure Core Web Vitals and optimize production bundle
- [ ] Test on physical mid-range mobile devices
- [ ] Add analytics with privacy-conscious configuration
- [ ] Configure `carboryn.az` deployment and production environment
- [ ] Run final scientific and legal claim review before launch

## Known Risks

- The `58%` emissions-reduction figure is currently a modeled estimate.
- Sensor-backed measurement is not yet independent carbon verification.
- Construction-grade output still requires material-performance validation.
- The industrial feedstock recovery process remains the largest technical and
  economic uncertainty.
- `npm audit` reports two moderate PostCSS advisories inherited through Next.js;
  the suggested automatic fix would cause a breaking downgrade.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
```
