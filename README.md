# Sri Chidananda Ji - Vedic Astrology Platform

A complete digital presence for a solo astrologer opening a horoscope shop in **Radha Madhav Nagar, Bhubaneswar**, with online booking for national and international clients.

## Design

Premium 3D feel with:
- Deep space gradient background with animated floating orbs (celestial theme)
- Twinkling starfield background
- 3D tilted photo frames with hover tilt effect
- Glassmorphism cards with backdrop-filter blur
- Reveal-on-scroll animations
- Glowing accent colors (amber/gold #fbbf24, #d97706)

## Photo placeholders (replace with real photos)

Three blank photo placeholders are built in — simply replace the placeholder `div` content with an `` tag:

1. **Grandpa's photo** — `#about .photo-grandpa`
2. **Shop photo** — `#contact .photo-shop`
3. **Sri Chidananda Ji photo** — `#guru .photo-guru`

Example:
```html
<img src="images/grandpa.jpg" alt="Sri Chidananda Ji" />
```

Add your images to the `images/` folder.

## Key features matching the blueprint

| Blueprint item | Implementation |
|---|---|
| Self-hosted WordPress (WooCommerce) | Static HTML ready to drop into a WordPress theme, or convert to a WP theme |
| Amelia booking engine | Custom booking form with birth details (DOB, TOB, place), consultation type, topics |
| Razorpay / PhonePe PG | Payment method logos shown; webhook-ready form endpoint |
| Cashfree failover | Listed as secondary gateway |
| Zoom / Google Meet sync | Info cards note unique meeting links sent after payment |
| WhatsApp/SMS alerts | Noted in success message; wire to WhatsApp Business API |
| Local SEO schema | JSON-LD `ProfessionalService` markup in `<head>` with Radha Madhav Nagar address |
| Multilingual ready | English base; add Odia/Hindi pages as needed |
| Mobile-first | Responsive grid, large touch targets, UPI-friendly checkout |

## Deployment options

### Option A: Static hosting (fastest, lowest cost)
Upload the `astrology-platform/` folder to any static host:
- Netlify (free tier)
- Vercel (free tier)
- GitHub Pages
- Cloudflare Pages

Point your domain (e.g. `srichidanandaji.in`) at the host and enable SSL.

### Option B: WordPress (per the blueprint)
1. Deploy WordPress on managed cloud hosting (Cloudways / LiteSpeed).
2. Install the **Amelia** booking plugin.
3. Install **WooCommerce** + Razorpay/PhonePe plugin.
4. Convert `index.html` into a custom WordPress page template, or use a page builder (Elementor) replicating the sections.
5. Install an SEO plugin (Rank Math / Yoast) and add the LocalBusiness JSON-LD.

## Payment gateway setup (India)

Recommended primary: **Razorpay** or **PhonePe PG** (best UPI success rates).
Recommended secondary/failover: **Cashfree** (T+1 settlement, fast payouts).

In production, replace the simulated form submit in `js/main.js` with the gateway's checkout integration and verify webhooks server-side before marking bookings as confirmed.

## Local SEO (Bhubaneswar)

- Create/verify a **Google Business Profile** for the Radha Madhav Nagar shop.
- Keep Name, Address, Phone (NAP) consistent across directories.
- Add locality pages for Acharya Vihar, Saheed Nagar, Master Canteen, Patia.
- Hand out QR code cards at the shop linking to the online booking page.

## File structure

```
astrology-platform/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/          <-- add grandpa.jpg, shop.jpg, guru.jpg here
└── README.md
```

## Next steps for grandpa's shop

1. Replace photo placeholders with real photos of grandpa, the shop, and Sri Chidananda Ji.
2. Update phone number (`+91-XXXXXXXXXX`) and address in `index.html`.
3. Register a domain and set up hosting.
4. Set up Razorpay/PhonePe merchant account.
5. Configure Amelia (WordPress) or connect the form to your payment gateway.
6. Print QR cards for the Radha Madhav Nagar storefront.
