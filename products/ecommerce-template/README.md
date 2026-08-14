# Nora Goods — E-commerce Template

A polished, responsive Next.js storefront starter for creators and small brands. It includes a product catalogue, category filters, add-to-bag flow, cart drawer, responsive layout, and a demo checkout API ready to connect to Stripe.

## Included

- Next.js 14 + React 18 + TypeScript
- Responsive editorial storefront design
- Product catalogue with category filtering
- Shopping bag with item removal and total calculation
- Checkout email capture and API route
- Accessible buttons, focus states, and mobile layout
- No database required for the demo

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production checkout

The checkout route is intentionally safe for a template: it validates the cart and returns a demo session. To accept real payments, replace the marked section in `pages/api/checkout.ts` with your Stripe Checkout server code and keep secret keys in environment variables, never in the frontend.

## Customize

Edit the `products` array in `pages/index.tsx` to change product names, prices, categories, descriptions, and feature bullets. Update the colors in `styles/globals.css` to match a brand. Replace the placeholder product artwork with licensed images or your own assets.

## Sell this template on Gumroad

1. Run `npm run build` and confirm the build succeeds.
2. Remove the `.next` and `node_modules` directories before packaging.
3. Zip the contents of this folder.
4. Upload the ZIP as a digital product.
5. Include the product description, installation commands, and license terms in your Gumroad listing.

## Important license note

Before selling, add a license file describing what the buyer may do with the template. Do not include third-party assets or API keys unless their licenses permit redistribution.

## العربية

هذا قالب متجر إلكتروني حقيقي قابل للتشغيل. يحتوي على صفحة متجر، منتجات، تصفية حسب الفئة، سلة مشتريات، نموذج Checkout، ومسار API تجريبي. لتشغيله استخدم `npm install` ثم `npm run dev`. الدفع الحالي تجريبي، ويجب ربط Stripe قبل استقبال أموال حقيقية.
