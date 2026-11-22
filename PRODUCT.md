# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Service Seekers (Everyday Users & Business Seekers):** Individuals and commercial teams needing freight capacity, posting structured one-time cargo orders, comparing bids from verified truck owners, paying through test escrow, confirming delivery, and raising disputes when needed.
- **Fleet Transporters:** Vehicle owners managing multiple trucks in one account, viewing compatible open orders in range, submitting competitive truck-specific bids, assigning trips to permanent or dispatched drivers, or operating as verified owner-operators.
- **Owner-Operators:** Fleet transporters choosing self-drive mode to operate their own registered truck on an active assignment after required driving-credential verification.
- **Commercial Drivers:** Dedicated drivers identified inside the system for trip dispatch or permanent fleet contracts, able to accept or reject assignments, coordinate active trips, report operational issues or trip fuel expenses, and never permitted to bypass fleet owners by posting orders or bidding directly.
- **Platform Admin (Internal Operations):** Controlled operators handling verification, dispute arbitration, operational incident rulings, and private test governance.

## Product Purpose

Digi_TransX is a digital transport marketplace under D-HAG built from real family transport-operations experience to replace fragmented phone calls, paper slips, and middleman handoffs with a transparent, connected workflow from order creation to verified completion. The public website explains the concept, participant roles, operational guardrails, and honest pre-launch status without exposing proprietary pricing percentages, internal settlement math, fee formulas, penalties, or unreleased modules.

## Positioning

Unlike opaque broker networks or automatic dispatch apps that remove choice, Digi_TransX uses rule-based truck compatibility matching while keeping selection human and transparent: every eligible fleet bids with a concrete registered truck, seekers compare offers openly, delivery closes with a one-time verification code shared only upon physical cargo acceptance, and drivers operate under strict single-assignment accountability under a transporter or verified owner-operator credential gate.

## Operating Context

- **One-Time Transport Flow Only:** The live public narrative covers the structured one-time shipment lifecycle (`Requirement -> Compatibility Match -> Bidding -> Test Escrow Hold -> Active Trip Coordination -> OTP Verification & Review / Dispute Arbitration`).
- **Role & Driver Guardrails:**
  - Service seekers define requirements, compare offers, hold funds during the trip, verify physical delivery, and review performance.
  - Transporters register owned trucks with specs and operating areas, bid openly, and coordinate fulfillment either via hired/dispatched drivers or verified self-drive mode.
  - Drivers operate under per-trip dispatch or permanent employment contracts with strict conflict checks (one active trip execution at a time) and role boundaries (no direct marketplace ordering or bidding).
  - Owner-operators can drive their own truck only when active fleet ownership and verified driving credentials align.
- **Verification & Resolution:** Delivery completion relies on an inspector-first OTP handshake rather than blind auto-payout; unresolved disagreements freeze settlement under contextual chat and admin arbitration.
- **Deployment Boundary:** Static marketing/documentary site served via Cloudflare Workers/Assets from `./public` (`wrangler.jsonc`) for `https://digi-transx.d-hag.com/`, with strict CSP, no client secrets, and no live booking or auth backend inside this repository.

## Capabilities and Constraints

- **Implemented & Internally Tested Core:** Role foundations (`everyday_user`, `service_seeker`, `transporter`, `owner-operator`, `driver`, `admin`), multi-truck registration & configuration, rule-based truck compatibility filtering, open transporter bidding, test/dummy escrow checkout & refund logic, full one-time trip lifecycle, verified delivery OTP confirmation concept, staged settlement & review gating, contextual chat, dispute arbitration, in-app notifications, and driver dispatch/hire/fuel logging.
- **Honest In-Development / Hardening Areas:** Auth, session/device controls, MPIN access-lock hardening, frontend-to-backend endpoint alignment, and operational UI cleanup remain under active refinement before any external pilot.
- **Explicit Exclusions (Strict Boundaries):**
  - **Zero mention of Agreements / corporate monthly billing lifecycle** anywhere on the public site.
  - **Zero mention of `Future/` concepts** (such as third-party fuel station portals, shopkeeper marketplace, truck maintenance modules, or AI assistants).
  - **Zero exposure of proprietary numbers or internal business rules** (no exact commission percentages or breakdowns, no reserve minimums, no fuel credit rupee limits, no payout split ratios, no timer durations, no penalty amounts, and no withdrawal tier fees).
- **Honest Infrastructure Status:** Not publicly launched; checkout uses internal test/dummy card workflows (no live payment gateway or real bank withdrawals yet); dedicated external vehicle GPS tracker hardware integration remains disabled/planned while trip-scoped smartphone check-ins exist only for active accepted driver/owner-operator assignments.

## Brand Commitments

- **Parent Brand:** A D-HAG project (`https://d-hag.com/`, contact `support@d-hag.com`, official WhatsApp Channel and Instagram links already established in footer).
- **Name & Visual Assets:** Preserve the `Digi_TransX` brand name and existing brand logos/assets (`public/assets/digi-transx-logo.webp`, `digi-transx-favicon-64.png`, `digi-transx-apple-touch.png`, `social-card.png`).
- **Voice & Restraint:** Plainspoken, honest engineering documentary clarity; attractive interactive UI polish and hover feedback without flashy gimmicks, synthetic testimonials, inflated user numbers, or fabricated partner claims.

## Evidence on Hand

- Existing D-HAG brand marks and workflow illustration (`D:\Digi_TransX_Website\public\assets\`).
- Official domain deployment config (`wrangler.jsonc`), security headers (`public/_headers`), SEO metadata (`robots.txt`, `sitemap.xml`, `llms.txt`), and `404.html`.
- Complete audit verification of the `Digi_TransX` repository (`backend/` & `frontend-react/`) excluding `Future/` and `agreements/` per scope instructions.

## Product Principles

1. **Radical Honesty Over Launch Hype:** Clearly separate tested marketplace mechanics from dummy checkout, offline vehicle hardware GPS, and ongoing security hardening.
2. **Concept Clarity Without Rule Leaks:** Teach seekers, transporters, and drivers *how* the ecosystem protects fairness, cargo, and money without exposing exploitable internal thresholds or fee math.
3. **Human & Accountable Logistics:** Emphasize rule-assisted matching paired with deliberate transporter choice, one-time OTP delivery confirmation, and clear driver accountability.
4. **Refined Craft Without Noise:** Use interactive motion, micro-transitions, and structured typography to make a dense multi-role workflow feel effortless rather than overwhelming.

## Accessibility & Inclusion

- High-contrast readable typography across desktop and mobile viewports, full keyboard focus navigation, semantic headings/landmarks, `prefers-reduced-motion` compliance, and mobile menu accessibility without horizontal overflow.
