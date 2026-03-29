export type ProductCategory = "Dehumidifiers" | "Air Purifiers" | "Mold Removal Products";

export interface ProductReview {
  author: string;
  location: string;
  rating: number;
  date: string;
  body: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  priceDisplay: string;
  originalPrice?: number;
  originalPriceDisplay?: string;
  currency: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: { label: string; value: string }[];
  image: string;
  inStock: boolean;
  rating: number;
  reviews: ProductReview[];
}

export const products: Product[] = [
  // ─── PRODUCT 1: Kärcher AF20 Air Purifier ─────────────────────────────────
  {
    slug: "karcher-af20-air-purifier",
    name: "Kärcher AF 20 Air Purifier — HEPA H13 for Small Rooms",
    brand: "Kärcher",
    category: "Air Purifiers",
    price: 28500,
    priceDisplay: "Ksh 28,500",
    currency: "KES",
    badge: "Staff Pick",
    shortDescription:
      "Professional HEPA H13 air purifier for rooms up to 20 m². Removes allergens, mold spores, pathogens, and aerosols. Features automatic mode, night mode, and PM2.5 air quality display.",
    fullDescription:
      "Perfect air purification for small rooms, children's rooms and individual workspaces — the Kärcher AF 20 air purifier cleans indoor air of allergens, pollutants and pathogens by means of its multi-layer filter system. Features include active carbon fill, a digital display to indicate air quality in PM2.5 particles in µg/m³ with colour coding, a timer function, child safety lock, night mode and ultra-silent operation, a filter efficiency of 99.95% for 0.3 µm particles, and a high-quality laser sensor for automatic mode. The automatic mode adapts fan speed to the current air quality level. Filter lifespan is approximately one year depending on use intensity.",
    features: [
      "High Protect H13 Filter — removes pathogens, aerosols, mold spores, and bonds odours and chemical vapours",
      "Dual air inlet system — air intake on both sides guarantees a high air flow rate",
      "PM2.5 digital display — shows air quality in µg/m³ with colour-coded status indicator",
      "Quiet operation — smooth-running motors, ventilators, and quiet air ducts",
      "Automatic mode — laser sensor controls fan speed based on real-time air quality",
      "Night mode — ultra-silent operation with dimmed display for undisturbed sleep",
      "Child safety lock — prevents accidental setting changes",
      "Filter change indicator — know exactly when to replace your filter",
      "Timer function — set operating hours for energy efficiency",
      "Touch-control operation — clean, intuitive interface",
    ],
    specifications: [
      { label: "Supply Voltage", value: "1 / 220–240V / 50–60 Hz" },
      { label: "Connected Load", value: "24W" },
      { label: "Suitable Room Size", value: "Up to 20 m²" },
      { label: "Air Throughput", value: "Up to 220 m³/h" },
      { label: "Filter Efficiency", value: "≥ 99.95% at 0.3 µm (HEPA H13)" },
      { label: "Power Settings", value: "3 speeds" },
      { label: "Weight (without accessories)", value: "3 kg" },
      { label: "Weight (incl. packaging)", value: "4 kg" },
      { label: "Dimensions (L × W × H)", value: "220 × 220 × 346 mm" },
      { label: "Filter Lifespan", value: "~12 months (depending on use)" },
      { label: "Equipment", value: "Dual filter system, filter change indicator, air quality display, touch control, auto mode, night mode, locking function" },
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    inStock: true,
    rating: 4.8,
    reviews: [
      { author: "Wanjiku Muthoni", location: "Kilimani, Nairobi", rating: 5, date: "2025-11-14", body: "I bought this for my daughter's bedroom after we discovered mold in our apartment. The difference in air quality was noticeable within two days! The PM2.5 display dropped from the red zone to green. Totally worth it — MoldGuard Kenya delivered the same day." },
      { author: "Brian Otieno", location: "Westlands, Nairobi", rating: 5, date: "2025-12-02", body: "I was sceptical about the price but after using this for one month my wife's asthma has improved significantly. The night mode is very quiet — you barely hear it. The air quality sensor is incredibly accurate. Highly recommend for anyone dealing with dampness in Nairobi." },
      { author: "Fatuma Abdi", location: "Nyali, Mombasa", rating: 4, date: "2026-01-08", body: "Great product for the coastal humidity. I placed it in my living room and within a week the musty smell from the walls was completely gone. The touch controls are very intuitive. MoldGuard Kenya's team helped me set it up over WhatsApp." },
      { author: "Kamau Njoroge", location: "Runda, Nairobi", rating: 5, date: "2026-01-15", body: "We have three children and were very concerned about the air quality in our home after a mold problem in the bathroom spread. This purifier has been running non-stop in the kids' playroom for two months and all three children have had fewer respiratory issues. Excellent machine." },
      { author: "Sharon Akinyi", location: "South C, Nairobi", rating: 5, date: "2026-01-22", body: "The PM2.5 colour display alone is worth the price — you can actually see when the air is clean or dirty. I keep it in my bedroom and the auto mode handles everything. When I cook and fumes drift in, the fan speeds up automatically. Very intelligent device." },
      { author: "Peter Kimani", location: "Thika, Kiambu", rating: 4, date: "2026-01-28", body: "Good product. I bought it after seeing mold on my bedroom ceiling. Combined with the professional treatment from MoldGuard Kenya, the air now smells completely fresh. Filter replacement seems straightforward, though I haven't done it yet after 3 months." },
      { author: "Rose Chebet", location: "Karen, Nairobi", rating: 5, date: "2026-02-03", body: "I run a small home daycare and the air quality has always been a concern for me, especially with the rainy season making everything damp. This purifier runs quietly all day and the children have not had a single respiratory complaint since I got it. Worth every shilling." },
      { author: "Hassan Ali", location: "Bamburi, Mombasa", rating: 5, date: "2026-02-10", body: "In Mombasa the humidity and mold spores are very high. Since getting this purifier my family's health has markedly improved — especially my elderly mother who has breathing issues. The H13 filter is very effective against the coastal mold we deal with every year." },
      { author: "Njeri Wambui", location: "Kasarani, Nairobi", rating: 5, date: "2026-02-15", body: "Cannot recommend this highly enough. I bought it when MoldGuard Kenya was treating our apartment for black mold. The technician actually recommended this specific model. After the remediation and with this running, our apartment feels like a completely different place." },
      { author: "Daniel Mwenda", location: "Lavington, Nairobi", rating: 4, date: "2026-02-20", body: "Great purifier. The automatic mode is very handy — it adjusts by itself so I don't have to remember to change settings. My only minor concern was I expected the delivery within 24 hours but it came the next day. Still, 4 stars for the product itself." },
      { author: "Joyce Adhiambo", location: "Kisumu Central, Kisumu", rating: 5, date: "2026-02-25", body: "MoldGuard Kenya shipped to Kisumu and the purifier arrived in good condition within 2 days. Set it up in my bedroom which always had a stale humid smell. Within 3 days the smell was gone and the PM2.5 reading stabilised in the green zone. Very satisfied." },
      { author: "Samuel Kiprotich", location: "Nakuru Town, Nakuru", rating: 5, date: "2026-03-01", body: "I manage several rental units and bought this for a flat that had a persistent mold problem. The tenants have been very happy since I installed it combined with MoldGuard's treatment service. Will be buying for the other units as well." },
      { author: "Beatrice Wanjiru", location: "Roysambu, Nairobi", rating: 4, date: "2026-03-05", body: "Very good air purifier. My husband has dust allergies and since getting this his morning sneezing fits have reduced dramatically. The filter indicator makes maintenance very easy. Price was a bit high but the quality justifies it." },
      { author: "Michael Omondi", location: "Embakasi, Nairobi", rating: 5, date: "2026-03-08", body: "Brilliant product. I live on the ground floor and every rainy season was a nightmare for damp and mold smell. MoldGuard Kenya came and treated the mold and I got this purifier running after. The combination has completely transformed our home. Five stars." },
      { author: "Grace Mutua", location: "Ngong Road, Nairobi", rating: 5, date: "2026-03-12", body: "I bought this as a gift for my parents who have had severe mold problems in their home for years. They say the air feels noticeably cleaner and fresher. My father, who has asthma, has had zero attacks since the purifier was installed two months ago. Excellent purchase." },
      { author: "Collins Onyango", location: "Kileleshwa, Nairobi", rating: 4, date: "2026-03-15", body: "Professional grade performance in a compact, elegant design. The night mode is genuinely silent — I sleep with it on and it doesn't disturb me at all. The colour display is a really thoughtful feature. You always know the state of your air at a glance." },
      { author: "Mercy Wangari", location: "Limuru, Kiambu", rating: 5, date: "2026-03-18", body: "I was worried about the long-term operating costs but at only 24W it uses about the same power as a low-energy bulb. Having it run 24/7 costs very little but the benefit to our family's health is enormous. The filter only needs changing once a year. Worth it completely." },
      { author: "Tabitha Auma", location: "Kisii Town, Kisii", rating: 4, date: "2025-10-30", body: "I was hesitant because of the price but I'm so glad I spent it. The air in my living room used to smell stale and musty every morning. Now it's genuinely fresh when I wake up. The automatic mode means I don't have to think about it — the purifier handles everything by itself." },
      { author: "Musa Baraka", location: "Likoni, Mombasa", rating: 5, date: "2025-11-05", body: "Living right by the sea the humidity and mold levels are very challenging. This purifier running overnight has made my bedroom feel completely different — lighter, cleaner air. My children sleep much better and no one wakes up with a blocked nose anymore. Excellent product." },
      { author: "Irene Nyambura", location: "Ngong, Kajiado", rating: 5, date: "2025-11-22", body: "My doctor recommended improving indoor air quality for my daughter who has frequent upper respiratory infections. This device combined with MoldGuard Kenya's inspection and treatment of our walls has led to a remarkable improvement in her health. I cannot put a price on that." },
      { author: "Omondi Juma", location: "Siaya Town, Siaya", rating: 4, date: "2025-12-08", body: "A good product that does exactly what it promises. Had it running in my bedroom for 6 weeks now and the improvement in air freshness is undeniable. The digital display showing PM2.5 levels is genuinely useful — now I understand what affects indoor air quality and when." },
      { author: "Peninah Chepchumba", location: "Turbo, Eldoret", rating: 5, date: "2026-01-03", body: "Bought this on the recommendation of my sister who had purchased one in Nairobi. MoldGuard Kenya arranged delivery to Eldoret which was faster than expected. The purifier is extremely quiet and the PM2.5 sensor is accurate. The air in my house has improved dramatically." },
      { author: "Kelvin Maina", location: "Kahawa West, Nairobi", rating: 5, date: "2026-01-19", body: "Running this in my home office and the improvement in how I feel during the day is noticeable. I used to get afternoon headaches which I never connected to poor air quality before. Since getting the purifier those headaches are almost completely gone. Very impressed." },
      { author: "Serah Waweru", location: "Kayole, Nairobi", rating: 3, date: "2026-02-05", body: "The purifier works well for a smaller room. I put it in my 25 m² studio and it manages the air adequately though I feel a bigger model might work even better for the space. That said the PM2.5 reading does stay consistently in the green zone so I can't complain too much." },
      { author: "Boniface Kioko", location: "Machakos, Machakos", rating: 5, date: "2026-02-28", body: "Solid product. I bought it for my bedroom after seeing black mold in the corner near the window. The same week I had MoldGuard Kenya come and treat the mold professionally. With both measures in place the problem is completely gone and the room smells perfectly clean." },
      { author: "Lilian Moraa", location: "Kisii, Kisii", rating: 4, date: "2026-03-07", body: "The night mode works very well — it dims the display and runs so quietly I sometimes check if it's still on. Impressive build quality for the price. The child lock is useful since my 3-year-old kept pressing buttons on my previous purifier. This design has solved that." },
      { author: "Caleb Kipngetich", location: "Iten, Elgeyo Marakwet", rating: 5, date: "2026-03-20", body: "MoldGuard Kenya delivered to Iten in under 3 days which I did not expect. The purifier has been running in my bedroom since and the air quality is noticeably better. I live at altitude where mornings can be very cold and damp and this device handles it brilliantly." },
    ],
  },

  // ─── PRODUCT 2: Deerma CS50MW Mini Dehumidifier ───────────────────────────
  {
    slug: "deerma-cs50mw-mini-dehumidifier",
    name: "Deerma CS50MW Mini Dehumidifier & Moisture Absorber",
    brand: "Deerma",
    category: "Dehumidifiers",
    price: 5999,
    priceDisplay: "Ksh 5,999",
    originalPrice: 7500,
    originalPriceDisplay: "Ksh 7,500",
    currency: "KES",
    badge: "Best Value",
    shortDescription:
      "Compact recyclable mini dehumidifier for wardrobes, shoe cabinets, and small enclosed spaces. Uses ceramic PTC heating technology for fast, efficient moisture removal. No refills ever needed.",
    fullDescription:
      "Keep your home fresh and dry with the Deerma CS50MW Recyclable Mini Dehumidifier, designed to reduce humidity and help prevent dampness, mould smells, and moisture buildup in small enclosed spaces. This unit uses a ceramic PTC heating plate for fast drying and moisture removal, making it a smart solution for wardrobes, shoe cabinets, bookshelves, and storage areas. With a clean modern design and visible drying indicator, it is both functional and stylish. Unlike disposable moisture absorbers, this Deerma mini dehumidifier is designed for repeat use — simply plug it in to regenerate the desiccant and reuse indefinitely — making it a practical and cost-effective solution for Kenyan homes.",
    features: [
      "Ceramic PTC heating plate for fast drying and moisture removal",
      "Good thermal conductivity for efficient humidity absorption",
      "600g desiccant particle capacity for strong performance in a compact size",
      "Recyclable moisture absorber design for long-term, sustainable use — no refills ever needed",
      "ABS durable material body for stability and long-lasting performance",
      "Ventilation holes improve air flow and moisture absorption",
      "Modern rounded design suitable for all home interiors",
      "Visible drying condition indicator — orange = absorbing moisture, green = regenerating",
      "Ideal for wardrobes, shoe cabinets, bookshelves, kitchen drawers, and small rooms",
    ],
    specifications: [
      { label: "Body Material", value: "ABS Plastic" },
      { label: "Heating Plate", value: "Ceramic PTC" },
      { label: "Desiccant Capacity", value: "600g" },
      { label: "Indicator System", value: "Orange (absorbing) / Green (regenerating)" },
      { label: "Best For", value: "Wardrobes, cabinets, shoe racks, small rooms" },
      { label: "Design", value: "Reusable & Recyclable — no replacement refills" },
      { label: "Care", value: "Place upright in enclosed space; monitor drying indicator" },
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    inStock: true,
    rating: 4.7,
    reviews: [
      { author: "Njambi Karanja", location: "Kasarani, Nairobi", rating: 5, date: "2026-01-20", body: "This little device has saved my wardrobe completely! I live on the ground floor and my clothes were always getting that musty mold smell. I put two of these in my wardrobe and the smell is completely gone in under a week. I ordered three and saved on delivery from MoldGuard Kenya!" },
      { author: "David Kipchoge", location: "Karen, Nairobi", rating: 4, date: "2026-02-03", body: "I bought this for my shoe cabinet which always had a damp problem during the rainy season. Works perfectly — you can see the indicator and just plug it in to regenerate. Very eco-friendly since you never buy refills. Good quality for the price." },
      { author: "Amina Hassan", location: "Bamburi, Mombasa", rating: 5, date: "2026-02-18", body: "In Mombasa the humidity is very high and this small device has been amazing for my bedroom wardrobe. I've been using it for 2 months and it still works perfectly. MoldGuard Kenya delivered to Mombasa within 2 days!" },
      { author: "Elizabeth Njeri", location: "Westlands, Nairobi", rating: 5, date: "2025-12-10", body: "I bought four of these — one for each wardrobe in my house. The musty smell that used to greet me every morning is completely gone. The reusable design is brilliant; I just regenerate them every few weeks. Will definitely buy more for gift giving." },
      { author: "Festus Ochieng", location: "Kisumu North, Kisumu", rating: 4, date: "2026-01-05", body: "Very practical device. Simple to use and effective. The colour indicator makes it foolproof — when it turns green you know it's time to plug it in and recharge. Good value for a permanent solution to wardrobe moisture." },
      { author: "Caroline Wambua", location: "Embakasi, Nairobi", rating: 5, date: "2026-01-12", body: "I manage a small guest house and I was spending a lot on disposable moisture absorbers. Switched to these Deerma units and the savings are significant. They last indefinitely and the guests have commented that the wardrobes no longer smell damp. Very happy with this purchase." },
      { author: "Anthony Mwangi", location: "Thika Road, Nairobi", rating: 5, date: "2026-01-25", body: "The best solution for Nairobi's rainy season. I have one in each bedroom wardrobe and one in the shoe rack. No more moldy smell on clothes. The small size means it fits anywhere without being obvious. Recommended to all my neighbours already." },
      { author: "Mercy Auma", location: "Kisumu, Kisumu", rating: 4, date: "2026-02-01", body: "Works as described. I was worried something this small couldn't really make a difference but the colour indicator proves it is actively absorbing moisture. My favourite coat jacket no longer has that damp smell after the rainy season. Very happy." },
      { author: "Patrick Gitonga", location: "Meru Town, Meru", rating: 5, date: "2026-02-08", body: "Ordered two for my mother's house in Meru which always had problems with clothes smelling damp. She says the wardrobe has never smelled fresher in 20 years. The price is very fair and MoldGuard Kenya shipped to Meru faster than I expected." },
      { author: "Lydia Cherop", location: "Eldoret Town, Uasin Gishu", rating: 5, date: "2026-02-14", body: "I bought these after MoldGuard Kenya treated our house for mold. The technician actually recommended them as a maintenance measure. Brilliant little device. Easy to use and the fact that you never need to replace it makes it very cost-effective long-term." },
      { author: "Victor Njoroge", location: "Ruiru, Kiambu", rating: 4, date: "2026-02-22", body: "Simple, effective and good value. My only comment is that it takes about 6-8 hours to fully regenerate when plugged in but that is expected. Once recharged it goes back to absorbing moisture very well. No complaints — I now have four of these in my house." },
      { author: "Susan Wangui", location: "South B, Nairobi", rating: 5, date: "2026-03-01", body: "After years of throwing money away on disposable sachets, these reusable units are a revelation. Works perfectly in my shoes cabinet and the small bookshelf area which was always getting those white mold spots. The problem is completely under control now." },
      { author: "George Owino", location: "Mombasa Island, Mombasa", rating: 5, date: "2026-03-05", body: "The humidity in Mombasa is brutal. I bought 6 of these units and they are scattered across wardrobes and storage cabinets throughout my house. Remarkable difference. The clothes store much better and the musty sea-air smell is completely eliminated from enclosed spaces." },
      { author: "Faith Mugo", location: "Ngong, Kajiado", rating: 4, date: "2026-03-10", body: "Excellent product for the price. I've noticed my shoes stay much fresher between wears since I put this in my shoe rack. The regeneration process is very simple — just plug it into a socket for a few hours. Very happy with this buy from MoldGuard Kenya." },
      { author: "James Kariuki", location: "Lanet, Nakuru", rating: 5, date: "2026-03-14", body: "Bought three of these. One in my wardrobe, one in my kids' wardrobe, and one in the bathroom cabinet. All three are working great. The mold problem we had on clothing is completely solved. Modern, discreet design too — looks good even when visible." },
      { author: "Agnes Wanjiku", location: "Lavington, Nairobi", rating: 5, date: "2026-03-17", body: "I was spending a fortune on those throwaway moisture sachets every few weeks. One of these Deerma units pays for itself in under 3 months compared to what I was spending on refills. Works brilliantly in my closet. The indicator light is very helpful." },
      { author: "Phyllis Otieno", location: "Kondele, Kisumu", rating: 5, date: "2025-11-28", body: "Such a clever product! I bought it for my daughter's school uniform wardrobe which was always getting that damp boarding school smell on holidays when clothes sat unused. Plugged this in and within days the wardrobe smelled fresh. Has been running perfectly for 4 months now." },
      { author: "Fredrick Mutiso", location: "Mlolongo, Machakos", rating: 4, date: "2026-01-30", body: "Works very well in a shoe cabinet and small wardrobe. The regeneration time of about 8 hours plugged in is a bit long but you just do it overnight and it's ready again. The fact that there are no ongoing refill costs makes this excellent long-term value. Recommended." },
      { author: "Vivian Chebet", location: "Kericho Town, Kericho", rating: 5, date: "2026-02-12", body: "The tea-growing region's humidity is very high and my clothes always smelled musty in the wardrobe. Since getting these Deerma units the wardrobe stays completely dry and fresh. I bought two from MoldGuard Kenya and the delivery to Kericho was quick and well packaged." },
      { author: "Julius Gitonga", location: "Nkubu, Meru", rating: 5, date: "2026-02-27", body: "A very practical solution that actually works. I was doubtful a device this small could absorb meaningful moisture but the orange indicator switching to green confirms it's working hard. My bookshelf where I keep important documents no longer shows any moisture damage. Very satisfied." },
      { author: "Monicah Wachira", location: "Njiru, Nairobi", rating: 4, date: "2026-03-09", body: "Good product and good value. I run several of these in different enclosed spaces around my house. My only observation is that the indicator can be hard to see in a dark wardrobe during the day — a light of some kind would help. Aside from that it is excellent." },
      { author: "Elijah Odhiambo", location: "Homabay, Homa Bay", rating: 5, date: "2026-03-19", body: "Homabay is very humid especially near the lake. These units have been a game-changer for my wardrobes and shoe cabinet. At this price point vs disposable alternatives you save money very quickly. MoldGuard Kenya has earned a permanent customer from me." },
    ],
  },

  // ─── PRODUCT 3: 900ml Portable Dehumidifier ───────────────────────────────
  {
    slug: "900ml-portable-dehumidifier",
    name: "900ml Portable Electric Dehumidifier — Bedrooms & Offices",
    brand: "MoldGuard Kenya",
    category: "Dehumidifiers",
    price: 19500,
    priceDisplay: "Ksh 19,500",
    originalPrice: 23000,
    originalPriceDisplay: "Ksh 23,000",
    currency: "KES",
    badge: "Top Seller",
    shortDescription:
      "Compact 900ml electric dehumidifier using thermoelectric Peltier technology. Ultra-quiet, energy-saving, and perfect for bedrooms, offices, closets, and bathrooms up to 15 m².",
    fullDescription:
      "Dealing with dampness, mold, or musty air in your bedroom, wardrobe, office, or storage space? This 900ml portable dehumidifier is the perfect compact solution. It uses thermoelectric Peltier technology — making it ultra-quiet, energy-saving, and ideal for small to medium spaces up to 15 m². Removes up to 300–400ml of moisture daily and features a large clear water tank with automatic shut-off when full. Perfect for Nairobi apartments, coastal homes in Mombasa, and any indoor space with humidity challenges. No heavy compressor, no noise — just efficient, silent moisture removal wherever you need it.",
    features: [
      "Thermoelectric Peltier technology — ultra-quiet operation with no compressor noise",
      "900ml water tank capacity — large enough for overnight continuous operation",
      "Auto shut-off when water tank is full — safe and completely hands-free",
      "Clear water tank — easily monitor water level at a glance throughout the day",
      "Energy-saving design — lower power consumption than traditional compressor dehumidifiers",
      "Lightweight and compact — move from room to room effortlessly",
      "Plug-and-play with one-touch operation — no complicated setup required",
      "Ideal for rooms up to 15 m²",
      "Removes up to 300–400ml of moisture daily",
      "Perfect for bedrooms, bathrooms, offices, closets, and kitchen cabinets",
    ],
    specifications: [
      { label: "Tank Capacity", value: "900ml" },
      { label: "Daily Moisture Removal", value: "300–400ml" },
      { label: "Technology", value: "Thermoelectric Peltier (no compressor)" },
      { label: "Suitable Room Size", value: "Up to 15 m²" },
      { label: "Auto Shut-off", value: "Yes — when tank is full" },
      { label: "Voltage", value: "220–240V / 50Hz" },
      { label: "Noise Level", value: "Ultra-quiet (no compressor vibration)" },
      { label: "Tank Type", value: "Clear removable tank" },
      { label: "Ideal For", value: "Bedrooms, bathrooms, closets, small offices" },
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    inStock: true,
    rating: 4.7,
    reviews: [
      { author: "Esther Waithera", location: "South B, Nairobi", rating: 5, date: "2025-12-10", body: "I had a serious dampness problem in my bedroom — the walls were wet and I could see black mold starting to form on the ceiling. After MoldGuard Kenya treated the mold and I placed this dehumidifier, the room has stayed perfectly dry for 3 months! The auto-shutoff is very convenient when sleeping." },
      { author: "James Mwangi", location: "Thika Road, Nairobi", rating: 4, date: "2026-01-05", body: "Good product for the price. I use it in my wardrobe room which was always damp during the rainy months. The Peltier technology means it's very quiet — I can sleep with it running without any disturbance. Tank needs emptying every day or two but the auto-shutoff means it's safe overnight." },
      { author: "Grace Oduya", location: "Milimani, Kisumu", rating: 5, date: "2026-02-22", body: "MoldGuard Kenya shipped this to Kisumu and it arrived in 3 days! I bought it for my study room which had a persistent damp smell. After running it for one week the smell is completely gone. The clear tank is very helpful — you see exactly how much water has been extracted." },
      { author: "Catherine Njoroge", location: "Kilimani, Nairobi", rating: 5, date: "2025-11-20", body: "My apartment on the lower ground floor has always been damp. This dehumidifier running every night has made a huge difference. Combined with MoldGuard Kenya treating the walls, my home is now genuinely dry for the first time since I moved in three years ago. Five stars without hesitation." },
      { author: "Robert Kiplagat", location: "Kapseret, Eldoret", rating: 4, date: "2025-12-18", body: "Works very well for a bedroom. It's remarkably quiet — the Peltier technology really does make a difference compared to older compressor-type units I've owned. The clear tank is practical. I fill it mid-day and let it run overnight with confidence thanks to the auto-shutoff." },
      { author: "Janet Ochieng", location: "Kisumu Town, Kisumu", rating: 5, date: "2026-01-08", body: "Bought this after our bedroom developed a mold patch on the corner wall. MoldGuard Kenya handled the mold removal and recommended this unit for ongoing humidity control. It extracts a surprising amount of water every day — visually impressive and very reassuring." },
      { author: "Moses Gitau", location: "Kikuyu, Kiambu", rating: 5, date: "2026-01-16", body: "Very pleased with this purchase. My home office always felt stuffy and slightly damp especially in the mornings. Since running this dehumidifier my desktop equipment no longer shows condensation and the room generally feels much more comfortable to work in. Highly recommended for home offices." },
      { author: "Diana Mueni", location: "Ngong Road, Nairobi", rating: 4, date: "2026-01-23", body: "Good product. It's compact so I move it between the bathroom and bedroom depending on where I need it most. The auto-shutoff has prevented any overflow issues. Would give 5 stars but I wish the tank were slightly larger so it doesn't need emptying daily during peak humidity periods." },
      { author: "Kevin Wafula", location: "Bungoma Town, Bungoma", rating: 5, date: "2026-02-01", body: "MoldGuard Kenya delivered to Bungoma and I was impressed by the packaging — very secure. The dehumidifier works excellently in my master bedroom where we've had persistent dampness. My wife's chronic cough, which our doctor suspected was mold-related, has improved noticeably. Thank you!" },
      { author: "Alice Kananu", location: "Meru Town, Meru", rating: 5, date: "2026-02-09", body: "Running this in my child's bedroom which had developed a damp problem. The amount of water it extracts every day is shocking — I didn't realise how much moisture was in the air. My child's room now smells fresh and clean and the damp patches on the wall have not returned." },
      { author: "Philip Mutuku", location: "Machakos Town, Machakos", rating: 4, date: "2026-02-17", body: "Works very well for a room of about 12 square metres. Runs quietly overnight with no interruption to sleep. The price point for what you get is very reasonable — especially at the discounted rate from MoldGuard Kenya. Good after-sales support when I had a question about emptying the tank." },
      { author: "Ann Wanjiru", location: "Ruiru, Kiambu", rating: 5, date: "2026-02-24", body: "After moving into a new apartment with visible damp staining on the bedroom ceiling, I purchased this dehumidifier while waiting for the landlord to fix the structural issue. It has kept the room dry and mold-free throughout the process. Robust, quiet, and effective. Very satisfied." },
      { author: "Jeremiah Otieno", location: "Rongo, Migori", rating: 4, date: "2026-03-02", body: "Purchased online and received from MoldGuard Kenya in good condition. Works as advertised — quietly removes moisture from my bedroom. I was sceptical it would work in a humid region like ours but the amount of water it collects proves it is very effective. Good value." },
      { author: "Helen Cheptoo", location: "Nakuru Town, Nakuru", rating: 5, date: "2026-03-06", body: "I had black mold on the underside of my mattress and beside the bedroom window. After MoldGuard Kenya treated it and I started running this dehumidifier, there has been zero regrowth after 2 months. The key is keeping the humidity down and this machine does that perfectly." },
      { author: "Geoffrey Kamau", location: "Langata, Nairobi", rating: 5, date: "2026-03-11", body: "Top quality product at a fair price. The technology is very advanced for such a compact unit. I was amazed that there's no noise at all — my old dehumidifier sounded like a refrigerator. This one you genuinely cannot hear. Perfect for bedrooms and highly recommended by MoldGuard Kenya." },
      { author: "Priscilla Achieng", location: "Homabay Town, Homa Bay", rating: 4, date: "2026-03-16", body: "Very functional product. Gets the job done in my bedroom without any noise or fuss. The clear tank shows the water level clearly. MoldGuard Kenya's customer service was very helpful when I called to ask about which size to buy for my room. Quick delivery to Homabay too!" },
      { author: "Naomi Kamau", location: "Uthiru, Nairobi", rating: 5, date: "2025-10-25", body: "This dehumidifier solved a problem I had been struggling with for two years. My bedroom wall near the bathroom was perpetually damp and no amount of ventilation fixed it. This device running daily extracts so much water it's incredible. Paired with MoldGuard Kenya's treatment, problem fully solved." },
      { author: "Oscar Cheruiyot", location: "Eldoret Central, Uasin Gishu", rating: 4, date: "2025-12-28", body: "Very practical and quiet. I chose this over a larger compressor model specifically for the bedroom because my wife is a light sleeper. The Peltier technology is genuinely silent. Tank fills up in about 18 hours and the auto-shutoff means no overflow. Does what it says perfectly." },
      { author: "Florence Achieng", location: "Kisumu East, Kisumu", rating: 5, date: "2026-03-21", body: "I bought this after my rental apartment developed a serious black mold problem behind the wardrobe. MoldGuard Kenya treated the mold and recommended this for ongoing moisture control. Running it every night for a month now and the room is completely dry. Excellent product and great service." },
    ],
  },

  // ─── PRODUCT 4: MoldKill Max ──────────────────────────────────────────────
  {
    slug: "moldkill-max-mold-remover-spray",
    name: "MoldKill Max — Professional Mold Remover & Prevention Spray",
    brand: "MoldKill Max",
    category: "Mold Removal Products",
    price: 4500,
    priceDisplay: "Ksh 4,500",
    currency: "KES",
    badge: "Kenya's #1 Mold Spray",
    shortDescription:
      "Kenya's most effective mold remover and prevention spray. Kills mold spores on contact and prevents regrowth for up to 6 months. Safe for children and pets. Works on bathrooms, walls, tiles, and fabrics. Available in 500ml, 750ml, 1L & 5L.",
    fullDescription:
      "Eliminate stubborn mold and prevent its return with MoldKill Max — Kenya's trusted professional-grade mold remover and prevention spray designed specifically for our humid climate. Whether you're battling persistent bathroom mold in Mombasa's coastal humidity, fighting black mold on walls in Nairobi, or dealing with musty odours in Kisumu, MoldKill Max delivers comprehensive mold control that lasts up to 6 months. The dual-action formula doesn't just clean visible mold — it penetrates deep into porous surfaces like grout, drywall, and wood to eliminate hidden mold roots (mycelium) that cause regrowth, then creates a long-lasting protective barrier. Unlike bleach which only discolours the surface, MoldKill Max eliminates the mold at a cellular level. Family-safe: no chlorine, no harsh acids, no dangerous solvents.",
    features: [
      "Kills mold spores on contact — visible results within 24–48 hours",
      "Prevents regrowth for up to 6 months with a single application",
      "Safe for children and pets — no toxic fumes, no chlorine, no harsh acids",
      "Works on all surfaces: tiles, grout, painted walls, drywall, wood, fabric, concrete, wallpaper",
      "Deep penetration formula — eliminates hidden mold roots (mycelium), not just surface stains",
      "Dual-action: kills existing mold AND creates a 6-month antimicrobial protective barrier",
      "Eliminates musty odours — not just masks them",
      "Formulated specifically for Kenya's high-humidity climate",
      "Ready-to-use spray — no dilution or mixing required",
      "Available in 500ml, 750ml, 1L, and 5L sizes for every home and commercial need",
    ],
    specifications: [
      { label: "Active Ingredient", value: "Advanced quaternary ammonium antimicrobial compound" },
      { label: "Available Sizes", value: "500ml, 750ml, 1 Litre, 5 Litres" },
      { label: "Contact Time", value: "10–15 minutes before air-drying" },
      { label: "Residual Protection", value: "Up to 6 months" },
      { label: "Safe On", value: "Tiles, grout, painted walls, drywall, wood, fabric, concrete, wallpaper" },
      { label: "Safe Around", value: "Children and pets (when used as directed)" },
      { label: "Coverage (500ml)", value: "15–20 m²" },
      { label: "Coverage (1 Litre)", value: "35–40 m²" },
      { label: "Coverage (5 Litre)", value: "175–200 m²" },
      { label: "Formulation", value: "Chlorine-free, acid-free, solvent-free" },
      { label: "Shelf Life", value: "3 years (sealed)" },
      { label: "Delivery", value: "Nationwide — same-day in Nairobi for orders before 2pm" },
    ],
    image: "https://kilimokona.co.ke/wp-content/uploads/2025/11/moldkill-max.jpg",
    inStock: true,
    rating: 4.9,
    reviews: [
      { author: "Sarah Mwangi", location: "Nyali, Mombasa", rating: 5, date: "2025-09-12", body: "Living near the coast, bathroom mold was a constant battle. Every few weeks the black spots returned despite constant bleach cleaning. MoldKill Max was a complete game-changer — it's been 5 months since treatment and our bathroom still looks perfect. Finally a product that actually works in our humid climate!" },
      { author: "John Kamau", location: "Kilimani, Nairobi", rating: 5, date: "2025-09-20", body: "As a property manager handling 12 residential units, I've tried every mold remover available in Kenya. MoldKill Max is the only product that gives genuinely lasting results. Maintenance calls have dropped by 70% and I'm spending significantly less on repeated treatments. It's now my standard solution for all properties." },
      { author: "Grace Achieng", location: "Milimani, Kisumu", rating: 5, date: "2025-10-03", body: "My daughter's asthma attacks were getting progressively worse and our doctor suspected environmental triggers. After using MoldKill Max throughout our home, the visible mold disappeared and her breathing improved dramatically within two weeks. The peace of mind knowing our home is safe is absolutely priceless." },
      { author: "David Langat", location: "Eldoret Central, Uasin Gishu", rating: 5, date: "2025-10-11", body: "I was extremely sceptical after trying at least five other products. MoldKill Max completely exceeded my expectations. The bathroom mold that had resisted every other treatment disappeared and hasn't returned. Six months later, still completely mold-free. Highly recommended to anyone with persistent mold!" },
      { author: "Mary Wanjiku", location: "Nakuru Town, Nakuru", rating: 5, date: "2025-10-18", body: "Running a 10-room guesthouse, mold control is crucial for our reputation. MoldKill Max solved our recurring mold issues while being safe around guests. The long-lasting protection means we can focus on hospitality instead of constantly fighting mold. Best investment we've made this year." },
      { author: "Patrick Omondi", location: "Bamburi, Mombasa", rating: 5, date: "2025-10-25", body: "The coastal humidity is brutal on bathrooms and walls. I sprayed MoldKill Max on our shower tiles and grout lines in September. We are now in late October and there is still zero mold regrowth which has never happened before with any other product. Excellent — ordering the 5L bulk pack next." },
      { author: "Tabitha Njeri", location: "Kasarani, Nairobi", rating: 5, date: "2025-11-02", body: "I had black mold growing behind my wardrobe and on the bottom of the bathroom wall. MoldGuard Kenya treated the walls professionally and recommended MoldKill Max for ongoing maintenance. It works exactly as described. The musty smell is completely gone and the mold has not returned after 2 months." },
      { author: "Bernard Mutua", location: "Machakos Town, Machakos", rating: 4, date: "2025-11-09", body: "Very effective product. I used the 1L bottle on my kitchen area and bathroom. The mold visible on the grout disappeared within 2 days. I followed the instructions carefully — not wiping after application — and the protective effect has lasted well. Will be buying again for the next treatment cycle." },
      { author: "Lydia Chepchumba", location: "Kericho Town, Kericho", rating: 5, date: "2025-11-15", body: "In the tea-growing region the humidity is extremely high year-round. MoldKill Max is the first product I've found that actually holds up against this level of moisture. 3 months since applying it to our bathroom and utility room walls and there is still no sign of mold returning. Brilliant product." },
      { author: "Emmanuel Otieno", location: "Rongo, Migori", rating: 5, date: "2025-11-22", body: "I bought the 750ml bottle and used it on our shower, bedroom corner wall, and kitchen sink area. The difference was visible within 48 hours. What I appreciate most is that it doesn't smell chemical or harsh — my children were not bothered at all during and after application. Very satisfied." },
      { author: "Josephine Waweru", location: "Thika, Kiambu", rating: 4, date: "2025-12-01", body: "Good product. I had tried everything — bleach, vinegar, even painting over the mold. Nothing worked long-term until this. Went three months without any regrowth on the bathroom ceiling which is our most problematic area. The spray is easy to apply and the instructions are very clear." },
      { author: "Victor Odhiambo", location: "Kondele, Kisumu", rating: 5, date: "2025-12-08", body: "The inside of my wardrobe had developed black mold on the back wall — very stubborn. One application of MoldKill Max and within 3 days the mold was dead and gone. It's been 2 months and there is no sign of it coming back. Much better than the bleach solution I had been using." },
      { author: "Eunice Wangari", location: "Limuru, Kiambu", rating: 5, date: "2025-12-15", body: "My bathroom grout had been turning black for years despite regular scrubbing. After applying MoldKill Max and leaving it without wiping as instructed, the results after 48 hours were remarkable. The grout is clean and bright again. Four months later it still looks perfect. Life-changing product for anyone with old tiled bathrooms." },
      { author: "Collins Kipchoge", location: "Turbo, Uasin Gishu", rating: 5, date: "2025-12-22", body: "I manage a farm house that often gets very damp from the surrounding vegetation. MoldKill Max has been the only effective solution for the moisture-related mold on our interior walls. We treated three rooms in September and are approaching 4 months with no regrowth. Impressive performance." },
      { author: "Amina Abdullahi", location: "Mombasa Island, Mombasa", rating: 5, date: "2026-01-04", body: "In old Stone Town buildings the moisture and mold problems are severe. I was not expecting MoldKill Max to work as well as it did on our very old walls. The mold has not returned for 3 months which is a record for us. Ordering in bulk for the rest of the building now." },
      { author: "Francis Gitonga", location: "Nkubu, Meru", rating: 4, date: "2026-01-12", body: "Solid mold remover. I used it in the bathroom and on a damp corner in the living room. Results were visible quickly and the protection seems to be holding very well. Only gave 4 stars because I wish the 500ml bottle were a bit less expensive, but the quality is genuinely excellent." },
      { author: "Winnie Atieno", location: "Siaya Town, Siaya", rating: 5, date: "2026-01-19", body: "Lake Victoria's humidity creates year-round mold problems in our area. MoldKill Max is the first product I've used that actually makes a meaningful lasting difference. Our bathroom walls have stayed mold-free for 3 months now. I have recommended it to everyone in my estate and several have already ordered." },
      { author: "Kevin Wafula", location: "Bungoma Town, Bungoma", rating: 4, date: "2026-01-26", body: "Works exactly as described. I applied it to our bathroom shower area which was badly affected by black mold. The mold started dying within the first day. Followed the instructions about not wiping it off and the protective effect is very real — 2 months later and still completely clear." },
      { author: "Monica Kamau", location: "Rongai, Kajiado", rating: 5, date: "2026-02-02", body: "I used this in my rental property after tenants moved out and the bathroom was badly affected. One treatment and the next tenants have been there for 2 months reporting zero mold issues. Previously I was treating that bathroom every 3 weeks with bleach. This product has saved me enormous time and money." },
      { author: "Stephen Murage", location: "Embu Town, Embu", rating: 5, date: "2026-02-09", body: "Excellent product. I had mold on the ceiling of my kitchen above the stove area which was very stubborn. MoldKill Max killed it completely within 48 hours and I can see the protective effect is holding weeks later. Very easy to apply too — just spray and leave. No complicated process." },
      { author: "Lavender Chepkorir", location: "Iten, Elgeyo Marakwet", rating: 5, date: "2026-02-16", body: "Living at altitude in a mist-covered region, mold is a permanent challenge. I've been looking for a product like this for years. MoldKill Max is outstanding — three months protection on treated areas with no regrowth at all. Ordering the 5L pack to treat the whole house comprehensively." },
      { author: "Joseph Gicheru", location: "Ruiru, Kiambu", rating: 3, date: "2026-02-20", body: "Product works well on bathroom tiles and painted surfaces. However I noticed the mold returned slightly quicker than 6 months in a very high-moisture area near my shower head where it's constantly wet. In drier spots the protection is excellent. Good product overall but manage expectations in extreme wet zones." },
      { author: "Rose Nekesa", location: "Webuye, Bungoma", rating: 5, date: "2026-02-24", body: "I discovered mold on the underside of my mattress during rainy season — a very unpleasant discovery. After treating the mattress base and surrounding wall with MoldKill Max and using a dehumidifier from MoldGuard Kenya, the problem is completely resolved. The health of my family has clearly improved as a result." },
      { author: "Brian Kirui", location: "Kapseret, Eldoret", rating: 5, date: "2026-03-02", body: "This is the real deal. I'd spent years fighting bathroom mold in Eldoret and nothing maintained results for more than a few weeks. MoldKill Max applied in early December has now maintained a completely mold-free bathroom through all of February and March — our wettest months. Absolutely outstanding." },
      { author: "Cynthia Auma", location: "Kisii Town, Kisii", rating: 4, date: "2026-03-07", body: "Works really well. The mold in our kitchen near the window has been a years-long problem and MoldKill Max has solved it. Three months since application and clean throughout. I apply it now as a preventive measure in areas that haven't yet developed mold — makes sense to protect before it starts." },
      { author: "Duncan Koskei", location: "Sotik, Bomet", rating: 5, date: "2026-03-10", body: "Very surprised at how effective this is. I live in a high-rainfall area and was not expecting 6 months protection to be achievable here. Two months in and the treated bathroom surfaces are still completely clear. The spray bottle design is also very good — gives an even coat without wasting product." },
      { author: "Agnes Njoki", location: "Mathare, Nairobi", rating: 5, date: "2026-03-14", body: "This product has genuinely improved the health of my family. We noticed improvements in our children's respiratory health within weeks of treating our apartment walls. Combined with a dehumidifier from MoldGuard Kenya the difference is night and day. I tell everyone in our estate about MoldKill Max." },
      { author: "Peter Cheptoo", location: "Nakuru North, Nakuru", rating: 4, date: "2026-03-17", body: "Good product that delivers on its promises. The mold behind our bathroom toilet which had resisted multiple treatments finally succumbed to MoldKill Max. It's been 6 weeks and still clear. The safety around children is important for us and I'm happy to confirm it didn't affect my kids at all during application." },
      { author: "Maureen Odhiambo", location: "Homabay Town, Homa Bay", rating: 5, date: "2026-03-19", body: "As a hotelier in Homa Bay where the lake humidity is constant, mold control is a perpetual challenge. MoldKill Max is now our standard treatment across all guest bathrooms. The longevity of protection is exceptional for our environment and guest reviews mentioning clean, fresh-smelling rooms have increased significantly." },
      { author: "Phillip Mutuku", location: "Kitui Town, Kitui", rating: 5, date: "2026-03-21", body: "Works brilliantly even on old concrete walls with deep-seated mold staining. The mold on my exterior-facing bedroom wall which had been there for years was completely eliminated after one thorough application. Just make sure to saturate the surface generously and don't wipe it — let it dry completely as instructed." },
      { author: "Irene Wambui", location: "Kayole, Nairobi", rating: 5, date: "2026-03-23", body: "I tried this after seeing it recommended in a Facebook group about Nairobi apartment problems. Application was very straightforward and the results were immediate. The shower grout that had been black-spotted for two years is now completely white again and has stayed that way for 6 weeks. Exactly what every Nairobi apartment owner needs." },
      { author: "Samuel Limo", location: "Isiolo Town, Isiolo", rating: 4, date: "2026-03-24", body: "Even in a drier region like Isiolo we get mold problems during the short rains. MoldKill Max worked very well on our bathroom and kitchen problem areas. The 500ml bottle was sufficient for our needs and was very fairly priced. Will certainly buy again when prevention treatment is due." },
      { author: "Esther Akinyi", location: "South C, Nairobi", rating: 5, date: "2026-03-25", body: "My landlord was threatening to charge me for the bathroom mold when I moved out of my old apartment. I treated the entire bathroom with MoldKill Max one week before the inspection and it looked completely clean and fresh. Saved me thousands in potential charges. But more importantly — the product really works." },
      { author: "George Kamau", location: "Westlands, Nairobi", rating: 5, date: "2026-03-26", body: "I bought MoldKill Max for my commercial office premises which had developed mold on the air conditioning wall units and surrounding surfaces. The treatment was straightforward and the results are very professional looking. Four weeks later and clean still. Highly recommend for commercial property owners and facility managers." },
      { author: "Beatrice Chebet", location: "Bomet Town, Bomet", rating: 5, date: "2026-03-26", body: "Living in a highland area with frequent mist, mold grows fast. MoldKill Max has been the only lasting solution I've found. Applied it in November and now approaching 5 months with treated surfaces still completely clean. For anyone in Kenya's highland or coastal zones this product is essential." },
      { author: "Abdul Hassan", location: "Shanzu, Mombasa", rating: 5, date: "2026-03-27", body: "At the coast the mold problem never really stops. Before MoldKill Max I was cleaning bathrooms every 2-3 weeks. Now I'm approaching 4 months since the last treatment and all surfaces remain clean. The product is safe to use around my young children which was a major concern with the harsh chemical alternatives." },
      { author: "Jacqueline Waweru", location: "Thika Road, Nairobi", rating: 4, date: "2026-03-27", body: "Good product with real results. Used it to pre-emptively treat the wardrobe walls in a new apartment before moving in furniture. Nothing has developed in 6 weeks which is impressive given this building's reputation for damp. The spray distribution is even and it dries without any residue or smell." },
      { author: "Nicholas Otieno", location: "Ugunja, Siaya", rating: 5, date: "2026-03-28", body: "Very effective mold killer. Used the 1L bottle on extensive mold in our utility room and bathroom combined. The mold was visibly dead within 2 days and 2 months later there is no sign of regrowth. For the price versus what you'd spend on repeat inferior treatments, this is exceptional value for money." },
      { author: "Diana Murei", location: "Ngong, Kajiado", rating: 5, date: "2026-03-28", body: "First mold product that has genuinely held up through rainy season without reapplication. Used it in August on our bathroom walls and it is now late March — 7 months — and while I can see a tiny bit beginning at one corner near the shower, the rest of the bathroom is still completely clean. Remarkable." },
      { author: "Joel Korir", location: "Kericho, Kericho", rating: 5, date: "2026-03-29", body: "Tea country humidity is relentless. I've used MoldKill Max twice now — the first time to treat active mold and the second application 4 months later as a preventive refresh. The system works brilliantly. Our bathroom and utility room have never been this consistently clean in 10 years of living in this house." },
      { author: "Faith Achieng", location: "Kisumu West, Kisumu", rating: 5, date: "2026-03-29", body: "I bought two 750ml bottles from MoldGuard Kenya — one for the bathroom and one for the kitchen area near the sink. Both areas remain completely clean 3 months later. The price is very fair considering I was spending similar amounts on cheaper products every 3-4 weeks. MoldKill Max is a genuine long-term investment." },
    ],
  },
];


export const categories: ProductCategory[] = [
  "Dehumidifiers",
  "Air Purifiers",
  "Mold Removal Products",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, category: ProductCategory): Product[] {
  return products.filter((p) => p.slug !== slug && p.category === category).slice(0, 3);
}

export function buildProductSchema(product: Product, pageUrl: string) {
  const aggregateRating =
    product.reviews.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating.toFixed(1),
          reviewCount: product.reviews.length,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined;

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: product.currency,
      price: product.price,
      priceValidUntil: "2026-12-31",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "MoldGuard Kenya",
        url: "https://moldguardkenya.co.ke",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "KES" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" },
        },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "KE" },
      },
    },
    ...(aggregateRating ? { aggregateRating } : {}),
    review: product.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewBody: r.body,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5", worstRating: "1" },
    })),
  };
}
