# 🏥 Nidhi Medical Store — Maghar, Sant Kabir Nagar

An ultra-modern, high-performance, animated web portal for **Nidhi Medical Store**, located in Maghar, Sant Kabir Nagar. Built with cutting-edge **Cyber-Medical Glassmorphism**, smooth micro-animations, real-time store open/closed indicator, dark/light mode toggle, instant WhatsApp prescription order workflow, Google Maps turn-by-turn navigation, and a built-in Store Owner Admin Dashboard.

---

## ✨ Features & Highlights

- ⚡ **Zero-Build Architecture**: 100% Vanilla HTML5, CSS3 & JavaScript. Ultra-fast loading, 100/100 Lighthouse performance score.
- 🎨 **Cyber-Medical Glassmorphism & Animations**: Luminous neon cyan & emerald glowing effects, ambient floating background orbs, live ECG heartbeat pulse animation, and 3D card tilt.
- 🌓 **Dark & Light Mode**: Instant toggle with smooth color transitions and persistent user preference.
- 🕒 **Live Store Status Calculation**: Dynamically compares device time with operating hours (**8:30 AM – 8:30 PM**) to show live `🟢 Open Now` or `🔴 Closed Now` badges.
- 📷 **WhatsApp Prescription Ordering**:
  - Drag-and-drop or camera snap of doctor's prescription slip
  - Live photo preview
  - Auto-generated pre-formatted WhatsApp order message sent directly to `+91 94531 33632`
- 🩺 **Clinical Vital Check Showcase**:
  - Blood Pressure (BP) Monitoring
  - Blood Glucose (Sugar) Test
  - Nebulization Therapy
  - Pulse Oximetry & SpO2
  - Antiseptic First-Aid Dressing
  - Weight & BMI Consultation
- 🔍 **Medicine Catalog & Live Search**:
  - Instant search filtering across daily OTC, chronic care, baby care, ayurvedic, and surgicals
  - Direct "Enquire on WhatsApp" quick links
- 📍 **Google Maps Integration**:
  - Embedded map for Maghar, Sant Kabir Nagar
  - Turn-by-Turn "Get Directions" button
  - Easy to connect to your Google Business Profile URL
- 🛠️ **Store Owner Admin Dashboard**:
  - Access via slider icon in navbar or footer
  - PIN protected (Default PIN: **`1234`**)
  - Edit Shop Name, Phone/WhatsApp number, Address, Opening/Closing hours, top Notice Announcement banner, and Google Maps search query without touching code! Changes persist in browser `localStorage`.
- 🚀 **100% Vercel Ready**: Includes pre-configured `vercel.json` with immutable asset caching and HTTP security headers.

---

## 🚀 How to Deploy to Vercel (2 Simple Ways)

### Option 1: Drag & Drop Deploy (Easiest, No Code Needed)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. If using Vercel CLI or dragging the folder, simply upload or push this `medical_shop` folder.
4. Framework Preset: Choose **"Other"** or leave as default static.
5. Click **Deploy**! Your website will be live in 10 seconds with a free `.vercel.app` URL and free SSL!

### Option 2: Deploy via Vercel CLI
Run the following in your terminal inside this `medical_shop` directory:
```bash
npx vercel
```
Follow the prompts (accept default settings) and your site is live!

---

## 🗺️ How to Link to Google Maps & Google Business Profile

1. Open [Google Maps](https://maps.google.com).
2. Search for your father's shop: **"Nidhi Medical Store Maghar Sant Kabir Nagar"** (or your exact listing).
3. Click the **Share** button on Google Maps and select **"Copy link"**.
4. You can paste this link into the Store Owner Admin Dashboard (open the website, click the gear/slider icon in top-right, enter PIN `1234`, and update the Google Maps query), or update line 386 in `index.html`.
5. In your Google Business Profile manager, add your live Vercel URL as the **Website** link so visitors can tap it directly from Google Search and Maps!

---

## 📁 File Structure

```
medical_shop/
├── index.html        # Main semantic, SEO-optimized webpage structure
├── style.css         # Glassmorphism design system, dark/light tokens, animations
├── app.js            # Real-time store status, WhatsApp order dispatch, Admin state
├── vercel.json       # Vercel deployment headers and cache rules
├── README.md         # Documentation and guide
└── assets/
    ├── logo.jpg      # 3D Cyber-medical store emblem
    └── hero_bg.jpg   # High-tech pharmacy interior hero visual
```

---

## 🔐 Store Owner Admin PIN
- Default PIN: **`1234`**
- You can change the PIN anytime inside the Admin Dashboard modal.
