// Search and sales copy for each product page, keyed by product slug.
//
// - seoTitle: the <title> tag. Keep it under 60 characters or Google cuts it off.
// - seoDescription: the snippet under the title in search results. Keep it
//   under 155 characters. It carries the price, so update it when a price changes.
// - bestFor / reasons / faqs: shown on the product page. Every figure here is
//   taken from the product's specifications in products.ts; keep them in step.

export interface ProductSeo {
  seoTitle: string;
  seoDescription: string;
  bestFor: string;
  reasons: string[];
  faqs: { q: string; a: string }[];
}

const ORDER_ANSWER =
  "Order on WhatsApp or by phone on 0710907628. We deliver the same day in Nairobi and send orders to the rest of Kenya, usually within 1 to 3 days.";

export const productSeo: Record<string, ProductSeo> = {
  "deerma-cs50mw-mini-dehumidifier": {
    seoTitle: "Deerma CS50MW Mini Dehumidifier Price in Kenya | Ksh 5,999",
    seoDescription:
      "Deerma CS50MW reusable mini dehumidifier for wardrobes and shoe cabinets. No refills, ever. Ksh 5,999 with same-day Nairobi delivery. Call 0710907628.",
    bestFor:
      "Wardrobes, shoe cabinets, bookshelves and drawers where clothes, shoes or documents pick up a musty smell.",
    reasons: [
      "Reusable: plug it in to dry out the 600g of desiccant and use it again. There are no refills to buy.",
      "The colour indicator tells you when it is working and when it needs recharging, so there is no guesswork.",
      "Compact enough to stand inside a closed wardrobe, cabinet or shoe rack.",
    ],
    faqs: [
      {
        q: "How does the Deerma CS50MW mini dehumidifier work?",
        a: "It holds 600g of desiccant that absorbs moisture from the air inside an enclosed space. When the indicator shows it is full, you plug it in and the ceramic PTC heating plate dries the desiccant so it can be used again.",
      },
      {
        q: "Can the Deerma mini dehumidifier dry a whole bedroom?",
        a: "No. It is made for small enclosed spaces such as wardrobes, cabinets and shoe racks. For a bedroom, choose an electric dehumidifier such as the 900ml portable unit or a 20L compressor model.",
      },
      { q: "How do I order the Deerma CS50MW in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "900ml-portable-dehumidifier": {
    seoTitle: "900ml Portable Dehumidifier Price in Kenya | Ksh 19,500",
    seoDescription:
      "Quiet 900ml electric dehumidifier for bedrooms, bathrooms and offices up to 15 m². Auto shut-off. Ksh 19,500, same-day Nairobi delivery. Call 0710907628.",
    bestFor:
      "Bedrooms, bathrooms, closets and small offices up to 15 m² with condensation on windows or a damp smell.",
    reasons: [
      "Thermoelectric Peltier technology has no compressor, so it runs quietly enough for a bedroom at night.",
      "Removes 300–400ml of moisture a day and switches itself off when the 900ml tank is full.",
      "The clear removable tank shows how much water it has pulled from the room.",
    ],
    faqs: [
      {
        q: "What room size does the 900ml portable dehumidifier cover?",
        a: "It suits rooms up to 15 m², such as a bedroom, bathroom, closet or small office. Larger or very damp rooms need a 20L compressor dehumidifier.",
      },
      {
        q: "Is the 900ml dehumidifier noisy?",
        a: "No. It uses thermoelectric Peltier technology with no compressor, so there is no compressor vibration and it is quiet enough to run in a bedroom.",
      },
      { q: "How do I order the 900ml portable dehumidifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "moldkill-max-mold-remover-spray": {
    seoTitle: "MoldKill Max Mold Remover Spray Kenya | From Ksh 4,500",
    seoDescription:
      "MoldKill Max kills mold on walls, tiles and fabric and protects for up to 6 months. Chlorine-free, safe around children and pets. From Ksh 4,500.",
    bestFor:
      "Mold on bathroom tiles and grout, painted walls, ceilings, wood and fabric that keeps coming back after cleaning with bleach.",
    reasons: [
      "Leaves residual protection for up to 6 months, so the patch does not return a few weeks later.",
      "Chlorine-free, acid-free and solvent-free, and safe around children and pets when used as directed.",
      "One litre covers 35–40 m². It comes in 500ml, 750ml, 1 litre and 5 litre sizes.",
    ],
    faqs: [
      {
        q: "How do I use MoldKill Max mold remover spray?",
        a: "Spray it on the affected surface, leave it for 10–15 minutes, then let it air-dry. It is safe on tiles, grout, painted walls, drywall, wood, fabric, concrete and wallpaper.",
      },
      {
        q: "Is MoldKill Max better than bleach for mould on walls?",
        a: "Bleach is mostly water and does not reach mold roots in porous walls. MoldKill Max is a chlorine-free antimicrobial treatment that leaves protection on the surface for up to 6 months.",
      },
      {
        q: "How much area does a bottle of MoldKill Max cover?",
        a: "A 500ml bottle covers 15–20 m², 1 litre covers 35–40 m² and 5 litres cover 175–200 m².",
      },
      { q: "How do I order MoldKill Max in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "20l-compressor-dehumidifier": {
    seoTitle: "20L Compressor Dehumidifier Price in Kenya | Ksh 79,000",
    seoDescription:
      "20 litres a day compressor dehumidifier for living rooms, basements and whole houses up to 50 m². Continuous drainage. Ksh 79,000. Call 0710907628.",
    bestFor:
      "Large living rooms, basements, offices and whole houses up to 50 m² with damp walls, condensation or recurring mold.",
    reasons: [
      "Removes up to 20 litres of moisture a day with a rotary compressor.",
      "Continuous drainage option, so it can run unattended without the 4.5 litre tank needing to be emptied.",
      "Uses 320W and eco-friendly R290 refrigerant, and shuts off automatically when the tank is full.",
    ],
    faqs: [
      {
        q: "What size room does a 20L dehumidifier cover?",
        a: "This 20L compressor dehumidifier is suitable for spaces up to 50 m², such as a large living room, a basement, a commercial office or a whole small house.",
      },
      {
        q: "How much electricity does the 20L compressor dehumidifier use?",
        a: "It draws 320W on a standard 220–240V supply.",
      },
      {
        q: "Do I have to empty the water tank every day?",
        a: "Not if you use the continuous drainage option, which lets the water run out through a hose. Otherwise the 4.5 litre tank needs emptying and the unit shuts off automatically when it is full.",
      },
      { q: "How do I order the 20L compressor dehumidifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "havit-hap102-air-purifier": {
    seoTitle: "HAVIT HAP 102 Air Purifier Price in Kenya | Ksh 16,900",
    seoDescription:
      "HAVIT HAP 102 HEPA 11 air purifier for rooms of 12–20 m². Captures dust, allergens, smoke and odours. Ksh 16,900, same-day Nairobi delivery.",
    bestFor:
      "Bedrooms, nurseries and home offices of 12–20 m² where dust, allergens, smoke or pet dander are the problem.",
    reasons: [
      "Three filter stages: a pre-filter, activated carbon for odours and a HEPA 11 filter that captures up to 99.95% of 0.3 micron particles.",
      "Night mode and a 2, 4 or 8 hour timer, with noise from 35 dB.",
      "Compact at 2 kg and uses only 24W, so it is cheap to leave running.",
    ],
    faqs: [
      {
        q: "What room size is the HAVIT HAP 102 air purifier for?",
        a: "It covers 12–20 m² with a clean air delivery rate (CADR) of 120 m³/h, which suits a bedroom or small office.",
      },
      {
        q: "Does the HAVIT HAP 102 remove mold spores?",
        a: "Its HEPA 11 filter captures up to 99.95% of particles down to 0.3 microns. Mold spores are larger than that, so they are trapped as air passes through. It cleans the air but does not remove mold growing on a wall.",
      },
      { q: "How do I order the HAVIT HAP 102 in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "havit-hap215-smart-air-purifier": {
    seoTitle: "Havit HAP215 Smart Air Purifier Price Kenya | Ksh 21,199",
    seoDescription:
      "Havit HAP215 air purifier for rooms up to 30 m². 200 m³/h CADR, quiet from 25 dB, only 24W. Ksh 21,199 with same-day Nairobi delivery.",
    bestFor:
      "Master bedrooms and living rooms of 25–30 m² where you want clean air without fan noise.",
    reasons: [
      "200 m³/h CADR cleans the air in a 25–30 m² room.",
      "Runs from 25 dB, quiet enough to sleep next to.",
      "Uses 24W, so running it all day costs very little.",
    ],
    faqs: [
      {
        q: "What room size does the Havit HAP215 cover?",
        a: "It covers 25–30 m² with a clean air delivery rate (CADR) of 200 m³/h.",
      },
      {
        q: "How loud is the Havit HAP215 air purifier?",
        a: "It runs between 25 and 50 dB(A) depending on the fan speed.",
      },
      { q: "How do I order the Havit HAP215 in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "xiaomi-smart-air-purifier-4-compact": {
    seoTitle: "Xiaomi Air Purifier 4 Compact Price in Kenya | Ksh 21,500",
    seoDescription:
      "Xiaomi Smart Air Purifier 4 Compact: 99.97% HEPA filtration, 230 m³/h CADR, app and voice control, 20 dB sleep mode. Ksh 21,500 in Kenya.",
    bestFor:
      "Bedrooms and studies of 16–27 m², especially if you want to control and monitor the purifier from your phone.",
    reasons: [
      "Filters 99.97% of particles down to 0.3 microns, with 360° air intake and 230 m³/h CADR.",
      "Control it from the Xiaomi Home app or by voice with Google Assistant and Amazon Alexa.",
      "Sleep mode runs at 20 dB, and a four-colour LED shows the air quality in the room.",
    ],
    faqs: [
      {
        q: "What room size is the Xiaomi Smart Air Purifier 4 Compact for?",
        a: "It covers 16–27 m² with a clean air delivery rate (CADR) of 230 m³/h.",
      },
      {
        q: "Does the Xiaomi 4 Compact work with a phone app?",
        a: "Yes. It connects to the Xiaomi Home app and works with Google Assistant and Amazon Alexa voice control.",
      },
      { q: "How do I order the Xiaomi Air Purifier 4 Compact in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "xiaomi-smart-air-purifier-4-lite": {
    seoTitle: "Xiaomi Air Purifier 4 Lite Price in Kenya | Ksh 29,500",
    seoDescription:
      "Xiaomi Smart Air Purifier 4 Lite for rooms up to 43 m². 360 m³/h CADR, 99.97% filtration, carbon odour removal, app control. Ksh 29,500.",
    bestFor:
      "Living rooms and open-plan spaces of 25–43 m² that need both particle and odour removal.",
    reasons: [
      "360 m³/h particle CADR with 99.97% filtration of 0.3 micron particles.",
      "200g of activated carbon removes odours and formaldehyde (120 m³/h formaldehyde CADR).",
      "Xiaomi Home app and voice control, with a filter that lasts 6–12 months.",
    ],
    faqs: [
      {
        q: "What room size does the Xiaomi Air Purifier 4 Lite cover?",
        a: "It covers 25–43 m² with a particle clean air delivery rate (CADR) of 360 m³/h.",
      },
      {
        q: "How often do I change the Xiaomi 4 Lite filter?",
        a: "The filter lasts 6–12 months, depending on how polluted the air is and how many hours a day the purifier runs.",
      },
      { q: "How do I order the Xiaomi Air Purifier 4 Lite in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "xiaomi-smart-air-purifier-4-pro": {
    seoTitle: "Xiaomi Air Purifier 4 Pro Price in Kenya | Ksh 51,500",
    seoDescription:
      "Xiaomi Smart Air Purifier 4 Pro for large rooms up to 60 m². 500 m³/h CADR, 99.97% HEPA, PM2.5 and PM10 sensing, app control. Ksh 51,500.",
    bestFor:
      "Large living rooms, open-plan homes, offices and clinics of 35–60 m² that need the strongest filtration in the range.",
    reasons: [
      "500 m³/h particle CADR, the highest of the purifiers we sell, with 99.97% filtration of 0.3 micron particles.",
      "Detects PM2.5 and PM10 particles, with 650,000 mg of activated carbon for odours.",
      "Night mode at 33.7 dB, plus Xiaomi Home app and voice control.",
    ],
    faqs: [
      {
        q: "What room size is the Xiaomi Smart Air Purifier 4 Pro for?",
        a: "It covers 35–60 m² with a particle clean air delivery rate (CADR) of 500 m³/h.",
      },
      {
        q: "What is the difference between the Xiaomi 4 Pro and the 4 Lite?",
        a: "The 4 Pro has a 500 m³/h CADR and covers up to 60 m², against 360 m³/h and 43 m² for the 4 Lite. The Pro also measures PM10 as well as PM2.5 and has more activated carbon.",
      },
      { q: "How do I order the Xiaomi Air Purifier 4 Pro in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "green-lion-compact-air-purifier": {
    seoTitle: "Green Lion Compact Air Purifier Price Kenya | Ksh 19,000",
    seoDescription:
      "Green Lion Compact Air Purifier for rooms up to 22 m². 3-in-1 filtration, 185 m³/h CADR, aromatherapy, child lock and timer. Ksh 19,000.",
    bestFor:
      "Bedrooms and children's rooms up to 22 m² where you want a purifier that also works as a diffuser and night light.",
    reasons: [
      "3-in-1 filtration with 360° air intake and 185 m³/h CADR.",
      "Child lock, so small hands cannot change the settings.",
      "Built-in aromatherapy, atmosphere lighting and a timer of up to 8 hours.",
    ],
    faqs: [
      {
        q: "What room size does the Green Lion Compact Air Purifier cover?",
        a: "It covers rooms up to 22 m² with a clean air delivery rate (CADR) of 185 m³/h.",
      },
      {
        q: "How long does the Green Lion filter last?",
        a: "The filter is rated for 1,440 hours of use.",
      },
      { q: "How do I order the Green Lion Compact Air Purifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "gree-20l-dehumidifier": {
    seoTitle: "Gree 20L Dehumidifier Price in Kenya | Ksh 51,400",
    seoDescription:
      "Gree 20 litres a day dehumidifier for homes, apartments and offices. Stops mold, damp walls and condensation. Ksh 51,400. Call 0710907628.",
    bestFor:
      "Homes, apartments and offices with damp walls, condensation or a musty smell that returns every rainy season.",
    reasons: [
      "Extracts up to 20 litres of moisture a day.",
      "Made by Gree, one of the world's largest air-conditioning manufacturers.",
      "Simple controls and low maintenance, for home or commercial use.",
    ],
    faqs: [
      {
        q: "How much moisture does the Gree 20L dehumidifier remove?",
        a: "It extracts up to 20 litres of moisture from the air per day.",
      },
      {
        q: "Will a Gree dehumidifier stop mold in my house?",
        a: "Mold needs moisture to grow. Keeping indoor humidity down with a dehumidifier removes that moisture from the air, which helps prevent mold, mildew, damp walls and condensation. Existing mold still needs to be cleaned or treated.",
      },
      { q: "How do I order the Gree 20L dehumidifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "westpoint-25l-dehumidifier": {
    seoTitle: "Westpoint 25L Dehumidifier Price in Kenya | Ksh 46,760",
    seoDescription:
      "Westpoint 25 litres a day dehumidifier for homes, offices and hotels. Stops mold, dampness and musty odours. Ksh 46,760. Call 0710907628.",
    bestFor:
      "Larger homes, offices and hotel rooms where a small dehumidifier cannot keep up with the damp.",
    reasons: [
      "Extracts up to 25 litres of moisture every 24 hours.",
      "Extracts more per day than the 20-litre models we sell, at a lower price.",
      "Easy to operate and low maintenance, for residential or commercial use.",
    ],
    faqs: [
      {
        q: "How much moisture does the Westpoint 25L dehumidifier remove?",
        a: "It extracts up to 25 litres of moisture from the air every 24 hours.",
      },
      {
        q: "Is the Westpoint 25L suitable for a home?",
        a: "Yes. It is recommended for both residential and commercial use, including homes, offices and hotels.",
      },
      { q: "How do I order the Westpoint 25L dehumidifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "westpoint-35l-dehumidifier": {
    seoTitle: "Westpoint 35L Dehumidifier Price in Kenya | Ksh 58,360",
    seoDescription:
      "Westpoint 35 litres a day heavy-duty dehumidifier for large homes, offices, hotels and clinics with high humidity. Ksh 58,360. Call 0710907628.",
    bestFor:
      "Large homes, offices, hotels, clinics and warehouses with high humidity.",
    reasons: [
      "Extracts up to 35 litres of moisture every 24 hours.",
      "Heavy-duty, long-lasting build for residential and commercial spaces.",
      "Easy to operate and low maintenance.",
    ],
    faqs: [
      {
        q: "How much moisture does the Westpoint 35L dehumidifier remove?",
        a: "It extracts up to 35 litres of moisture from the air every 24 hours.",
      },
      {
        q: "Should I choose the Westpoint 25L or the 35L?",
        a: "Choose the 35L for larger or more humid spaces such as big homes, hotels, clinics and warehouses. The 25L suits standard homes and offices.",
      },
      { q: "How do I order the Westpoint 35L dehumidifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
  "westpoint-60l-dehumidifier": {
    seoTitle: "Westpoint 60L Industrial Dehumidifier Kenya | Ksh 69,960",
    seoDescription:
      "Westpoint 60 litres a day industrial dehumidifier for warehouses, hotels, hospitals and storage with severe humidity. Ksh 69,960 in Kenya.",
    bestFor:
      "Warehouses, hotels, hospitals, storage facilities and large commercial spaces with severe humidity.",
    reasons: [
      "Extracts up to 60 litres of moisture every 24 hours, the highest capacity we sell.",
      "Built for industrial and commercial spaces where smaller units cannot cope.",
      "Easy to use, for residential, commercial and industrial settings.",
    ],
    faqs: [
      {
        q: "How much moisture does the Westpoint 60L dehumidifier remove?",
        a: "It extracts up to 60 litres of moisture from the air every 24 hours.",
      },
      {
        q: "Where is a 60L industrial dehumidifier used?",
        a: "It is built for warehouses, hotels, hospitals, offices, storage facilities and other large commercial spaces with severe humidity.",
      },
      { q: "How do I order the Westpoint 60L dehumidifier in Kenya?", a: ORDER_ANSWER },
    ],
  },
};

export function getProductSeo(slug: string): ProductSeo | undefined {
  return productSeo[slug];
}
