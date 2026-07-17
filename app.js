/**
 * FLIPKART CLONE - CORE LOGIC & STATE
 */

class FlipkartApp {
    constructor() {
        // Mock Database of Products
        this.products = [
            {
                id: "p1",
                name: "Apple iPhone 15 Pro (Natural Titanium, 128 GB)",
                category: "mobile",
                price: 127990,
                mrp: 134900,
                discount: 5,
                rating: 4.7,
                ratingsCount: 8432,
                reviewsCount: 654,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/4/x/-original-imagtc3gfyggzqsu.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/4/x/-original-imagtc3gfyggzqsu.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/r/q/-original-imagtc3ge3bvfwhd.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/h/m/-original-imagtc3ghkfjdz3u.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/b/g/-original-imagtc3gs59y4xzy.jpeg"
                ],
                description: "Experience the ultimate iPhone with iPhone 15 Pro. Featuring a strong and light aerospace-grade titanium design with textured matte-glass back. It also features a Ceramic Shield front cover that's tougher than any smartphone glass. And it's splash, water, and dust resistant.",
                highlights: [
                    "128 GB ROM",
                    "15.49 cm (6.1 inch) Super Retina XDR Display",
                    "48MP + 12MP + 12MP Primary Camera | 12MP Front Camera",
                    "A17 Pro Chip with 6 Core GPU Processor",
                    "Titanium Design with Action Button",
                    "USB-C Connectivity with USB 3 speeds"
                ],
                specs: {
                    "In The Box": "iPhone, USB-C Charge Cable (1m), Documentation",
                    "Model Number": "MTV13HN/A",
                    "Model Name": "iPhone 15 Pro",
                    "Color": "Natural Titanium",
                    "Display Size": "15.49 cm (6.1 inch)",
                    "Resolution": "2556 x 1179 Pixels",
                    "Processor Type": "A17 Pro Chip",
                    "Primary Camera": "48MP + 12MP + 12MP",
                    "Secondary Camera": "12MP Front Camera"
                }
            },
            {
                id: "p2",
                name: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)",
                category: "mobile",
                price: 129999,
                mrp: 144999,
                discount: 10,
                rating: 4.6,
                ratingsCount: 3120,
                reviewsCount: 290,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imagxpy4gqy5g4dt.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imagxpy4gqy5g4dt.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/o/8/-original-imagxpzeqhh26cug.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/f/r/-original-imagxpy4367q83sz.jpeg"
                ],
                description: "Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25 cm flat display. It's an absolute marvel of design. The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat screen.",
                highlights: [
                    "12 GB RAM | 256 GB ROM",
                    "17.27 cm (6.8 inch) Quad HD+ Display",
                    "200MP + 50MP + 12MP + 10MP | 12MP Front Camera",
                    "5000 mAh Lithium Ion Battery",
                    "Snapdragon 8 Gen 3 Processor",
                    "S Pen Included"
                ],
                specs: {
                    "In The Box": "Handset, Data Cable (Type C to C), Ejection Pin",
                    "Model Number": "SM-S928BZGQINS",
                    "Model Name": "Galaxy S24 Ultra 5G",
                    "Color": "Titanium Gray",
                    "RAM": "12 GB",
                    "Internal Storage": "256 GB",
                    "Processor": "Snapdragon 8 Gen 3",
                    "Primary Camera": "200MP + 50MP + 12MP + 10MP",
                    "Battery Capacity": "5000 mAh"
                }
            },
            {
                id: "p3",
                name: "OnePlus 12 (Flowy Emerald, 256 GB)",
                category: "mobile",
                price: 64999,
                mrp: 69999,
                discount: 7,
                rating: 4.5,
                ratingsCount: 4210,
                reviewsCount: 395,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/o/d/12-cph2573-oneplus-original-imagxgnsw7jyyydt.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/o/d/12-cph2573-oneplus-original-imagxgnsw7jyyydt.jpeg"
                ],
                description: "Redefined flagship specifications. OnePlus 12 pairs top-tier hardware with state of the art Hasselblad cameras, rapid 100W SuperVOOC charging, and the fluid Snapdragon 8 Gen 3.",
                highlights: [
                    "12 GB RAM | 256 GB ROM",
                    "17.32 cm (6.82 inch) Display",
                    "50MP + 64MP + 48MP Primary Camera | 32MP Front",
                    "5400 mAh Battery | 100W Charging",
                    "Qualcomm Snapdragon 8 Gen 3"
                ],
                specs: {
                    "Model Name": "12",
                    "Color": "Flowy Emerald",
                    "RAM": "12 GB",
                    "Internal Storage": "256 GB",
                    "Primary Camera": "50MP + 64MP + 48MP",
                    "Battery": "5400 mAh"
                }
            },
            {
                id: "p4",
                name: "Apple MacBook Air M3 (13.6 inch, 8GB RAM, 256GB SSD)",
                category: "electronics",
                price: 99900,
                mrp: 114900,
                discount: 13,
                rating: 4.8,
                ratingsCount: 1530,
                reviewsCount: 140,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagzh3b8hygah8g.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagzh3b8hygah8g.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/o/t/-original-imagzh3bffghhghy.jpeg"
                ],
                description: "The M3 chip brings even greater capabilities to the superportable 13-inch MacBook Air. With up to 18 hours of battery life and a gorgeous Liquid Retina display, you can take it anywhere and blaze through work and play.",
                highlights: [
                    "Apple M3 Processor",
                    "8 GB Unified Memory | 256 GB SSD",
                    "34.46 cm (13.6 inch) Liquid Retina Display",
                    "macOS Sonoma Operating System",
                    "Backlit Magic Keyboard with Touch ID"
                ],
                specs: {
                    "In The Box": "MacBook Air, 30W USB-C Power Adapter, USB-C to MagSafe 3 Cable",
                    "Model Name": "MacBook Air",
                    "Color": "Space Grey",
                    "Processor": "Apple M3",
                    "SSD Capacity": "256 GB",
                    "RAM": "8 GB",
                    "OS": "macOS Sonoma"
                }
            },
            {
                id: "p5",
                name: "HP 15s Intel Core i5 12th Gen (16GB RAM, 512GB SSD)",
                category: "electronics",
                price: 52990,
                mrp: 68250,
                discount: 22,
                rating: 4.3,
                ratingsCount: 9845,
                reviewsCount: 884,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/y/6/4/-original-imagzqga8qy6gzdg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/y/6/4/-original-imagzqga8qy6gzdg.jpeg"
                ],
                description: "Stay connected to what matters most with long-lasting battery life and a thin micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15.6 inch Laptop features reliable performance and an expansive display.",
                highlights: [
                    "Intel Core i5 (12th Gen) Processor",
                    "16 GB DDR4 RAM | 512 GB SSD",
                    "39.62 cm (15.6 inch) Full HD Display",
                    "Windows 11 Home",
                    "MS Office Home & Student 2021 Included"
                ],
                specs: {
                    "Model Name": "15s-fq5330TU",
                    "Color": "Natural Silver",
                    "Processor": "Intel Core i5 (12th Gen)",
                    "RAM": "16 GB",
                    "Storage": "512 GB SSD",
                    "Screen Size": "39.62 cm (15.6 inch)"
                }
            },
            {
                id: "p6",
                name: "Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones",
                category: "electronics",
                price: 26990,
                mrp: 34990,
                discount: 22,
                rating: 4.6,
                ratingsCount: 5410,
                reviewsCount: 512,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/l47rsy80/headphone/t/r/k/wh-1000xm5-sony-original-imagf5szgkyffghb.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/l47rsy80/headphone/t/r/k/wh-1000xm5-sony-original-imagf5szgkyffghb.jpeg",
                    "https://rukminim2.flixcart.com/image/312/312/l47rsy80/headphone/q/z/y/wh-1000xm5-sony-original-imagf5szhs3ffsfg.jpeg"
                ],
                description: "Our industry-leading noise canceling headphones rewrite the rules with two processors controlling eight microphones, Auto NC Optimizer, and a specially designed driver unit.",
                highlights: [
                    "With Mic: Yes",
                    "Bluetooth Version: 5.2",
                    "Battery Life: Up to 30 Hours",
                    "Industry Leading Active Noise Cancellation",
                    "Quick Charge: 3 mins for 3 hours playback"
                ],
                specs: {
                    "Type": "Over the Ear",
                    "Connectivity": "Bluetooth / Wired",
                    "Battery Life": "30 Hours",
                    "Charging Time": "3.5 Hours",
                    "Noise Cancellation": "Yes, Active Noise Cancellation"
                }
            },
            {
                id: "p7",
                name: "Canon EOS R50 Mirrorless Camera (Body with 18-45mm Lens)",
                category: "electronics",
                price: 63990,
                mrp: 75995,
                discount: 15,
                rating: 4.4,
                ratingsCount: 820,
                reviewsCount: 92,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/camera/e/o/y/eos-r50-24-2-canon-original-imagng75cghkdggh.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/camera/e/o/y/eos-r50-24-2-canon-original-imagng75cghkdggh.jpeg"
                ],
                description: "Designed for content creators and vloggers, the Canon EOS R50 is a compact, lightweight mirrorless camera featuring a 24.2MP APS-C sensor, DIGIC X processor, and dual pixel CMOS AF II.",
                highlights: [
                    "Effective Pixels: 24.2 MP",
                    "Sensor Type: CMOS",
                    "WiFi & Bluetooth Supported",
                    "4K 30p Video Recording (6K oversampled)",
                    "15 FPS Continuous Shooting Speed"
                ],
                specs: {
                    "Model Name": "EOS R50",
                    "Effective Pixels": "24.2 Megapixels",
                    "Sensor Size": "APS-C (22.3 x 14.9 mm)",
                    "Lens Included": "RF-S 18-45mm f/4.5-6.3 IS STM",
                    "Video Resolution": "4K UHD at 30 fps"
                }
            },
            {
                id: "p8",
                name: "Men's Solid Slim Fit Casual Cotton Shirt",
                category: "fashion",
                price: 499,
                mrp: 1499,
                discount: 66,
                rating: 4.0,
                ratingsCount: 45210,
                reviewsCount: 3950,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/y/l-green-shirt-original-imagzhyfyghhgk.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/y/l-green-shirt-original-imagzhyfyghhgk.jpeg"
                ],
                description: "Revamp your wardrobe with this stylish slim-fit solid cotton shirt. Made from high-quality breathable cotton fabric, it ensures comfort throughout the day. Perfect for both casual outings and semi-formal events.",
                highlights: [
                    "Pack of: 1",
                    "Style: Slim Fit",
                    "Fabric: 100% Pure Premium Cotton",
                    "Pattern: Solid",
                    "Sleeve: Full Sleeve"
                ],
                specs: {
                    "Ideal For": "Men",
                    "Fit": "Slim",
                    "Occasion": "Casual / Semi-Formal",
                    "Fabric Care": "Gentle Machine Wash, Iron at low temperature"
                }
            },
            {
                id: "p9",
                name: "Women Floral Print Pure Georgette Anarkali Kurta",
                category: "fashion",
                price: 799,
                mrp: 2499,
                discount: 68,
                rating: 4.2,
                ratingsCount: 12540,
                reviewsCount: 1120,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/r/x/m-floral-georgette-anarkali-original-imagzgfyghdfsd.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/r/x/m-floral-georgette-anarkali-original-imagzgfyghdfsd.jpeg"
                ],
                description: "Look elegant and feel graceful in this gorgeous floral print Anarkali kurta crafted from premium soft georgette. Comes with a comfortable lining and flows beautifully.",
                highlights: [
                    "Style: Anarkali / Flaired",
                    "Fabric: Pure Georgette",
                    "Print: Beautiful Floral Printed Pattern",
                    "Occasion: Festive & Party Wear"
                ],
                specs: {
                    "Ideal For": "Women",
                    "Type": "Anarkali Kurta",
                    "Neck": "Round Neck",
                    "Fabric Care": "Hand wash or Dry Clean recommended"
                }
            },
            {
                id: "p10",
                name: "Nike Air Max Sneakers for Men (Black/Grey)",
                category: "fashion",
                price: 8499,
                mrp: 9999,
                discount: 15,
                rating: 4.3,
                ratingsCount: 2210,
                reviewsCount: 195,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/i/l/8-air-max-nike-black-original-imagzhyfyghhgk.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/i/l/8-air-max-nike-black-original-imagzhyfyghhgk.jpeg"
                ],
                description: "Built with the revolutionary Air-sole unit, these sneakers provide responsive cushioning, excellent durability, and a sleek contemporary design for runners and streetwear fans alike.",
                highlights: [
                    "Sole: Rubber with Air-Sole Unit",
                    "Closure: Lace-Up",
                    "Weight: Lightweight",
                    "Upper Material: Mesh breathable upper"
                ],
                specs: {
                    "Ideal For": "Men",
                    "Type": "Sneakers / Running",
                    "Outer Material": "Mesh & Synthetic Leather",
                    "Sole Material": "Rubber"
                }
            },
            {
                id: "p11",
                name: "Premium Tata Tea Gold (1 kg Leaf Tea)",
                category: "grocery",
                price: 499,
                mrp: 650,
                discount: 23,
                rating: 4.4,
                ratingsCount: 85210,
                reviewsCount: 7420,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/tea/k/k/y/-original-imagzhyfgyh.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/tea/k/k/y/-original-imagzhyfgyh.jpeg"
                ],
                description: "Savour the rich aroma and exquisite taste of Tata Tea Gold. Specially curated with high-quality Assam tea leaves and long leaves for an indulgent experience.",
                highlights: [
                    "Type: Black Tea / Leaf Tea",
                    "Quantity: 1 kg",
                    "Container: Pouch pack",
                    "Shelf Life: 12 Months"
                ],
                specs: {
                    "Brand": "Tata Tea",
                    "Form Factor": "Powder / Granules",
                    "Ingredients": "Assam Orthodox Tea Leaves"
                }
            },
            {
                id: "p12",
                name: "California Almonds Value Pack (500g)",
                category: "grocery",
                price: 399,
                mrp: 599,
                discount: 33,
                rating: 4.3,
                ratingsCount: 14210,
                reviewsCount: 1205,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/a/l/m/-original-imagzhgfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/a/l/m/-original-imagzhgfg.jpeg"
                ],
                description: "Handpicked premium crunchy California almonds. Packed with proteins, healthy fats, fiber, and vitamins. Ideal for daily snacking and healthy lifestyle.",
                highlights: [
                    "Type: Whole Almonds",
                    "Quantity: 500g",
                    "Packaging: Vacuum Sealed Bag",
                    "Rich in Vitamin E and antioxidants"
                ],
                specs: {
                    "Brand": "Happilo / Dry Fruits",
                    "Type": "Almonds (Badam)",
                    "Nutrient Content": "Protein, Dietary Fiber, Iron"
                }
            },
            {
                id: "p13",
                name: "Green Soul Ergonomic Office High Back Chair",
                category: "home",
                price: 8990,
                mrp: 18990,
                discount: 52,
                rating: 4.4,
                ratingsCount: 5410,
                reviewsCount: 560,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/g/h/y/-original-imagzgfyghjgjgjg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/g/h/y/-original-imagzgfyghjgjgjg.jpeg"
                ],
                description: "Engineered for maximum lumbar comfort. Features adjustable 3D armrests, breathable mesh back, synchro-tilt mechanism, and heavy-duty metal wheelbase.",
                highlights: [
                    "Frame Material: Nylon Glass Fiber",
                    "Upholstery: High-quality Mesh Fabric",
                    "Adjustable Lumbar Support & Armrest",
                    "DIY Installation (Manual Included)"
                ],
                specs: {
                    "Brand": "Green Soul",
                    "Type": "Office Chair",
                    "Adjustable Height": "Yes",
                    "Wheels": "5 Dual castor wheels",
                    "Weight Capacity": "120 kg"
                }
            },
            {
                id: "p14",
                name: "Solid Sheesham Wood Coffee Table for Living Room",
                category: "home",
                price: 4999,
                mrp: 12999,
                discount: 61,
                rating: 4.1,
                ratingsCount: 1840,
                reviewsCount: 201,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/s/s/w/-original-imagzhyfgyhhhg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/s/s/w/-original-imagzhyfgyhhhg.jpeg"
                ],
                description: "Handcrafted from seasoned Solid Sheesham Wood (Rosewood), this elegant coffee table features a rich honey finish that complements any living room decor. Highly durable and strong.",
                highlights: [
                    "Material: Solid Sheesham Wood",
                    "Finish Color: Honey Finish",
                    "Dimensions: H 45cm x W 85cm x D 45cm",
                    "No Assembly Required (Pre-assembled)"
                ],
                specs: {
                    "Brand": "Urban Wood",
                    "Material": "Solid Wood (Sheesham)",
                    "Storage Included": "No",
                    "Style": "Contemporary & Modern"
                }
            },
            {
                id: "p15",
                name: "IFB 6.5 kg Fully Automatic Front Load Washing Machine",
                category: "appliances",
                price: 28490,
                mrp: 35990,
                discount: 20,
                rating: 4.5,
                ratingsCount: 16540,
                reviewsCount: 1480,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/u/j/h/-original-imagzhyfgyhg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/u/j/h/-original-imagzhyfgyhg.jpeg"
                ],
                description: "Keep your clothes looking brand new with the IFB Front Load washing machine. Features 2D Wash, Cradle Wash for delicates, Aqua Energie filter, and custom Express 15 wash.",
                highlights: [
                    "Fully Automatic Front Load | 1000 RPM",
                    "Capacity: 6.5 kg | Ideal for 3-4 members",
                    "10 Wash Programs",
                    "4 Years Comprehensive Warranty"
                ],
                specs: {
                    "Brand": "IFB",
                    "Model Name": "SENATOR NEO MXS 6510",
                    "Washing Capacity": "6.5 kg",
                    "Maximum Spin Speed": "1000 RPM",
                    "Built-in Heater": "Yes"
                }
            },
            {
                id: "p16",
                name: "Redmi Note 13 Pro 5G (Coral Purple, 128 GB)",
                category: "mobile",
                price: 25999,
                mrp: 28999,
                discount: 10,
                rating: 4.3,
                ratingsCount: 22432,
                reviewsCount: 2154,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/5/f/-original-imagvpy2xqytdjga.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/5/f/-original-imagvpy2xqytdjga.jpeg"
                ],
                description: "Redefining premium design with a double-sided glass body, a stunning 1.5K AMOLED display, and a flagship 200MP camera with OIS. Powered by Snapdragon 7s Gen 2.",
                highlights: [
                    "8 GB RAM | 128 GB ROM",
                    "16.94 cm (6.67 inch) Super AMOLED Display",
                    "200MP + 8MP + 2MP Primary | 16MP Front",
                    "5100 mAh Battery with 67W Turbo Charge",
                    "Snapdragon 7s Gen 2 Mobile Platform"
                ],
                specs: {
                    "Model Name": "Note 13 Pro 5G",
                    "Color": "Coral Purple",
                    "RAM": "8 GB",
                    "Internal Storage": "128 GB",
                    "Primary Camera": "200MP + 8MP + 2MP",
                    "Battery Capacity": "5100 mAh"
                }
            },
            {
                id: "p17",
                name: "Motorola Edge 50 Pro 5G (Luxe Lavender, 256 GB)",
                category: "mobile",
                price: 31999,
                mrp: 36999,
                discount: 13,
                rating: 4.4,
                ratingsCount: 8940,
                reviewsCount: 954,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-pro-5g-pb1d0002in-motorola-original-imagzhgft7ysygag.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-pro-5g-pb1d0002in-motorola-original-imagzhgft7ysygag.jpeg"
                ],
                description: "Motorola Edge 50 Pro features a Pantone-validated display and camera, 125W TurboPower charging, and a gorgeous vegan leather finish.",
                highlights: [
                    "12 GB RAM | 256 GB ROM",
                    "17.02 cm (6.7 inch) Curved pOLED Display",
                    "50MP + 13MP + 10MP | 50MP Front Camera",
                    "4500 mAh Battery | 125W Wired Charging",
                    "Snapdragon 7 Gen 3 Processor"
                ],
                specs: {
                    "Model Name": "Edge 50 Pro 5G",
                    "Color": "Luxe Lavender",
                    "RAM": "12 GB",
                    "Storage": "256 GB",
                    "Primary Camera": "50MP + 13MP + 10MP",
                    "Secondary Camera": "50MP Front"
                }
            },
            {
                id: "p18",
                name: "Google Pixel 8 (Obsidian, 128 GB)",
                category: "mobile",
                price: 61999,
                mrp: 75999,
                discount: 18,
                rating: 4.5,
                ratingsCount: 5410,
                reviewsCount: 480,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/p/3/-original-imagtysxxzgah9vb.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/p/3/-original-imagtysxxzgah9vb.jpeg"
                ],
                description: "Meet Pixel 8. The helpful phone engineered by Google. Powered by Google Tensor G3, it's fast, efficient, and secure, with advanced AI capabilities for photos and videos.",
                highlights: [
                    "8 GB RAM | 128 GB ROM",
                    "15.75 cm (6.2 inch) Actua Display",
                    "50MP + 12MP Primary | 10.5MP Front",
                    "4575 mAh Battery with 30W Fast Charge",
                    "Google Tensor G3 Processor with Titan M2"
                ],
                specs: {
                    "Model Name": "Pixel 8",
                    "Color": "Obsidian",
                    "RAM": "8 GB",
                    "Internal Storage": "128 GB",
                    "Processor": "Tensor G3",
                    "Battery": "4575 mAh"
                }
            },
            {
                id: "p19",
                name: "Apple iPad Air (11-inch) M2 (Space Grey, 128 GB Wi-Fi)",
                category: "electronics",
                price: 59900,
                mrp: 64900,
                discount: 7,
                rating: 4.7,
                ratingsCount: 1240,
                reviewsCount: 88,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/y/a/r/-original-imagzhyfgyh.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/y/a/r/-original-imagzhyfgyh.jpeg"
                ],
                description: "iPad Air with M2 delivers blazing-fast performance, a landscape front camera, and compatibility with the new Apple Pencil Pro. Perfect for productivity and creativity.",
                highlights: [
                    "128 GB ROM",
                    "27.94 cm (11 inch) Liquid Retina Display",
                    "Apple M2 Chip with 8-Core CPU and 9-Core GPU",
                    "12MP Wide Rear Camera | 12MP Landscape Front",
                    "iPadOS 17 with Stage Manager"
                ],
                specs: {
                    "Model Name": "iPad Air (6th Gen)",
                    "Color": "Space Grey",
                    "Storage": "128 GB",
                    "Processor": "Apple M2",
                    "Display Size": "27.94 cm (11 inch)"
                }
            },
            {
                id: "p20",
                name: "SanDisk Extreme Portable 1TB USB 3.2 SSD",
                category: "electronics",
                price: 9999,
                mrp: 18999,
                discount: 47,
                rating: 4.5,
                ratingsCount: 25410,
                reviewsCount: 2205,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/external-hard-drive/ssd/t/h/-original-imagzhyfgyhg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/external-hard-drive/ssd/t/h/-original-imagzhyfgyhg.jpeg"
                ],
                description: "Get fast NVMe solid state performance featuring 1050MB/s read and 1000MB/s write speeds in a portable, high-capacity drive that's perfect for creating amazing content.",
                highlights: [
                    "Capacity: 1 TB",
                    "Interface: USB 3.2 Gen 2",
                    "Read Speed: up to 1050 MB/s",
                    "Water & Dust Resistant (IP55 rated)"
                ],
                specs: {
                    "Brand": "SanDisk",
                    "Type": "Portable SSD",
                    "Capacity": "1 TB",
                    "Interface": "Type-C USB 3.2"
                }
            },
            {
                id: "p21",
                name: "SAMSUNG 27 inch Curved Full HD LED Backlit Monitor",
                category: "electronics",
                price: 12499,
                mrp: 21999,
                discount: 43,
                rating: 4.4,
                ratingsCount: 14850,
                reviewsCount: 1564,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/w/b/g/-original-imagzhyfgyhg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/w/b/g/-original-imagzhyfgyhg.jpeg"
                ],
                description: "Experience immersive viewing with the Samsung 1800R curved monitor. Features AMD FreeSync, Game Mode, and a slim design with circular stand.",
                highlights: [
                    "27 inch Curved Full HD Display",
                    "Panel Type: VA Panel | 60 Hz Refresh",
                    "Response Time: 4 ms",
                    "HDMI & VGA Connectivity Ports"
                ],
                specs: {
                    "Brand": "Samsung",
                    "Display Size": "68.58 cm (27 inch)",
                    "Screen Resolution": "1920 x 1080 Pixels",
                    "Aspect Ratio": "16:9"
                }
            },
            {
                id: "p22",
                name: "Men's Regular Fit Solid Denim Jacket",
                category: "fashion",
                price: 1299,
                mrp: 3499,
                discount: 62,
                rating: 4.1,
                ratingsCount: 15410,
                reviewsCount: 1420,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/d/j/a/-original-imagzhyfgyh.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/d/j/a/-original-imagzhyfgyh.jpeg"
                ],
                description: "Look classic and cool in this premium heavy-washed cotton denim jacket. Features button-up front closure, double chest pockets, and side welt pockets.",
                highlights: [
                    "Fabric: Cotton Denim",
                    "Pattern: Solid Washed",
                    "Closure: Metal Buttons",
                    "Pockets: 4 Pockets"
                ],
                specs: {
                    "Ideal For": "Men",
                    "Type": "Denim Jacket",
                    "Fabric Care": "Machine Wash Cold"
                }
            },
            {
                id: "p23",
                name: "Unisex Retro Round Sunglasses (UV Protected)",
                category: "fashion",
                price: 399,
                mrp: 1999,
                discount: 80,
                rating: 3.9,
                ratingsCount: 32540,
                reviewsCount: 2901,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/r/t/r/-original-imagzhyfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/r/t/r/-original-imagzhyfg.jpeg"
                ],
                description: "Make a vintage statement with these lightweight retro round sunglasses. Equipped with high-quality polycarbonate lenses offering 100% UV400 protection.",
                highlights: [
                    "Size: Medium",
                    "Frame: Gold Metal Alloy",
                    "Lens: UV Protected Polycarbonate",
                    "Frame Style: Full Rim Round"
                ],
                specs: {
                    "Ideal For": "Men & Women",
                    "Lens Color": "Green / Black",
                    "UV Protection": "Yes, UV400"
                }
            },
            {
                id: "p24",
                name: "Fastrack Analog Watch for Men (Minimalist Black)",
                category: "fashion",
                price: 1599,
                mrp: 2499,
                discount: 36,
                rating: 4.2,
                ratingsCount: 18450,
                reviewsCount: 1290,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/b/l/k/-original-imagzhyfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/b/l/k/-original-imagzhyfg.jpeg"
                ],
                description: "Fastrack watches represent sporty sophistication. Features a clean black dial, durable silicone strap, quartz movement, and 50m water resistance.",
                highlights: [
                    "Strap Material: Silicone / Rubber",
                    "Display Type: Analog Dial",
                    "Movement: Quartz Battery",
                    "Water Resistance: 50 Meters"
                ],
                specs: {
                    "Brand": "Fastrack",
                    "Dial Color": "Black",
                    "Strap Color": "Black",
                    "Warranty": "1 Year Brand Warranty"
                }
            },
            {
                id: "p25",
                name: "Women High Rise Flared Blue Jeans",
                category: "fashion",
                price: 899,
                mrp: 2499,
                discount: 64,
                rating: 4.1,
                ratingsCount: 7850,
                reviewsCount: 654,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/f/l/a/-original-imagzhyfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/f/l/a/-original-imagzhyfg.jpeg"
                ],
                description: "Retro flared jeans featuring a high rise waistline and stretch denim fabric for a comfortable leg-lengthening fit. Styled with 5 pockets.",
                highlights: [
                    "Style: Flared / Bootcut",
                    "Fabric: Cotton Polyester Blend Stretchable",
                    "Rise: High Rise"
                ],
                specs: {
                    "Ideal For": "Women",
                    "Fit": "Flared Fit",
                    "Fabric Care": "Wash inside out with similar colors"
                }
            },
            {
                id: "p26",
                name: "Nescafe Classic Instant Coffee Jar (200g)",
                category: "grocery",
                price: 580,
                mrp: 650,
                discount: 10,
                rating: 4.5,
                ratingsCount: 45210,
                reviewsCount: 3205,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/n/s/c/-original-imagzhyfgyhg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/n/s/c/-original-imagzhyfgyhg.jpeg"
                ],
                description: "Start your morning with a rich cup of Nescafe Classic. The original choice of coffee lovers worldwide, made from premium roasted Robusta beans.",
                highlights: [
                    "Type: Instant Coffee Powder",
                    "Quantity: 200g Glass Jar",
                    "Rich Aroma & Double Filtered Taste"
                ],
                specs: {
                    "Brand": "Nescafe",
                    "Form": "Powder",
                    "Container Type": "Glass Jar"
                }
            },
            {
                id: "p27",
                name: "Fortune Premium Kachi Ghani Mustard Oil (1 L)",
                category: "grocery",
                price: 165,
                mrp: 195,
                discount: 15,
                rating: 4.4,
                ratingsCount: 65420,
                reviewsCount: 5210,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/edible-oil/m/u/s/-original-imagzhyfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/edible-oil/m/u/s/-original-imagzhyfg.jpeg"
                ],
                description: "Fortune Kachi Ghani Mustard Oil is a premium quality cold-pressed oil made from the finest mustard seeds. It retains all natural pungency and health benefits.",
                highlights: [
                    "Type: Pure Mustard Oil (Kachi Ghani)",
                    "Quantity: 1 Liter PET Bottle",
                    "Rich in Omega-3 and Monounsaturated Fatty Acids"
                ],
                specs: {
                    "Brand": "Fortune",
                    "Form": "Liquid",
                    "Shelf Life": "9 Months"
                }
            },
            {
                id: "p28",
                name: "Adorn 3-Seater Fabric Sofa (Royal Blue)",
                category: "home",
                price: 14999,
                mrp: 29999,
                discount: 50,
                rating: 4.2,
                ratingsCount: 3120,
                reviewsCount: 340,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/3/s/t/-original-imagzhyfgyhg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/3/s/t/-original-imagzhyfgyhg.jpeg"
                ],
                description: "Add a pop of elegance to your living room with this sturdy, comfortably padded 3-seater sofa. Built with seasoned neem wood and upholstered in premium soft fabric.",
                highlights: [
                    "Seating Capacity: 3 Seater",
                    "Frame: Neem Wood",
                    "Fabric Quality: 320 GSM Chenille",
                    "Firm Seat Density (32 Density foam)"
                ],
                specs: {
                    "Brand": "Adorn Homez",
                    "Type": "Sofa Set",
                    "Warranty": "1 Year Manufacturer Warranty"
                }
            },
            {
                id: "p29",
                name: "Multi-Purpose Foldable Laptop Study Table",
                category: "home",
                price: 399,
                mrp: 1299,
                discount: 69,
                rating: 4.0,
                ratingsCount: 85410,
                reviewsCount: 9240,
                imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/desk-table/l/a/p/-original-imagzhyfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/612/612/xif0q/desk-table/l/a/p/-original-imagzhyfg.jpeg"
                ],
                description: "Work comfortably from your bed or sofa. Features foldable metal legs, a cup holder slot, tablet slot, and a smooth non-slip MDF board top.",
                highlights: [
                    "Material: MDF Engineered Wood & Metal Legs",
                    "Foldable & Portable Space Saver",
                    "Built-in Phone/Tablet and Cup Slots"
                ],
                specs: {
                    "Brand": "Generic / Quality Craft",
                    "Type": "Laptop Table / Study Desk",
                    "Weight": "1.5 kg"
                }
            },
            {
                id: "p30",
                name: "Mi 108 cm (43 inch) Ultra HD 4K LED Smart TV",
                category: "appliances",
                price: 26999,
                mrp: 42999,
                discount: 37,
                rating: 4.4,
                ratingsCount: 38430,
                reviewsCount: 3512,
                imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/m/i/43-original-imagzhyfg.jpeg",
                thumbnails: [
                    "https://rukminim2.flixcart.com/image/312/312/xif0q/television/m/i/43-original-imagzhyfg.jpeg"
                ],
                description: "Experience stunning visuals with the Mi Smart TV. Features Google TV with PatchWall, Dolby Audio, 20W speakers, and 4K Ultra HD resolution.",
                highlights: [
                    "Resolution: Ultra HD 4K (3840 x 2160)",
                    "Sound Output: 20W Dolby Audio",
                    "Google TV | Chromecast Built-in | PatchWall",
                    "Smart Remote with Google Assistant shortcuts"
                ],
                specs: {
                    "Brand": "Mi (Xiaomi)",
                    "Model Name": "L43M8-5AIN",
                    "Display Size": "108 cm (43 inch)",
                    "Smart TV": "Yes, Android TV / Google TV",
                    "Supported Apps": "Netflix, Prime Video, YouTube, Hotstar"
                }
            }
        ];

        // Generate 100,000 products dynamically to keep loading lightning fast
        this.generateMockProducts(100000);

        // Fix hardcoded product images to use high-quality Unsplash images instead of hotlink-blocked rukmin URLs
        this.products.forEach((p, idx) => {
            if (p.id.startsWith('p')) { // Hardcoded product
                const categoryImages = {
                    mobile: [
                        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
                        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
                        "https://images.unsplash.com/photo-1565849906461-0e25f5d4755a?w=400&q=80",
                        "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&q=80"
                    ],
                    electronics: [
                        "https://images.unsplash.com/photo-1496181130204-755241524eab?w=400&q=80",
                        "https://images.unsplash.com/photo-1588449668338-d15176d315b7?w=400&q=80",
                        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400&q=80",
                        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80"
                    ],
                    fashion: [
                        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
                        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
                        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
                        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80"
                    ],
                    grocery: [
                        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
                        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&q=80",
                        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
                        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"
                    ],
                    home: [
                        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
                        "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=400&q=80",
                        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&q=80",
                        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&q=80"
                    ],
                    appliances: [
                        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
                        "https://images.unsplash.com/photo-1595248646749-2d3544839959?w=400&q=80",
                        "https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?w=400&q=80"
                    ]
                };

                const imgs = categoryImages[p.category] || categoryImages['electronics'];
                const imgUrl = imgs[idx % imgs.length];
                p.imageUrl = imgUrl;
                p.thumbnails = [imgUrl];
            }
        });

        // Carousel Slider Images (High-quality Flipkart banners)
        this.banners = [
            "https://rukminim1.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/banner_1_e4171d.jpg", // Fashion
            "https://rukminim2.flixcart.com/fk-p-linchpin-web/1000/280/image/dfcb93d39589d984.jpg", // Mobiles
            "https://rukminim2.flixcart.com/fk-p-linchpin-web/1000/280/image/d94943fcfd43d3b7.jpg", // Electronics
            "https://rukminim2.flixcart.com/fk-p-linchpin-web/1000/280/image/cc1db39fb3993d0c.jpg"  // Home Appliances
        ];

        // State Variables
        this.mode = 'flipkart'; // 'flipkart' or 'minutes'
        this.cart = [];
        this.currentView = 'home';
        this.currentSlideIndex = 0;
        this.carouselInterval = null;
        this.filteredProductsList = [...this.products];
        this.activeCategory = 'all';
        this.currentPage = 1;
        this.resultsPerPage = 40;

        // Custom banners list for Minutes mode
        this.minutesBanners = [
            "https://rukminim2.flixcart.com/fk-p-linchpin-web/1000/280/image/cc1db39fb3993d0c.jpg", // Groceries
            "https://rukminim2.flixcart.com/fk-p-linchpin-web/1000/280/image/dfcb93d39589d984.jpg", // Deals
            "https://rukminim2.flixcart.com/fk-p-linchpin-web/1000/280/image/d94943fcfd43d3b7.jpg"  // Snacks
        ];

        // Auto initialization
        window.addEventListener('DOMContentLoaded', () => this.init());
    }

    init() {
        // Render shelves on Home
        this.renderHomeShelves();

        // Setup Carousel Banners
        this.initCarousel();

        // Setup Search Actions
        this.setupSearch();

        // Register event listener on logo and buttons
        document.getElementById('login-btn').addEventListener('click', () => {
            alert('Flipkart login modal simulated successfully! Username/Password verification connected.');
        });

        // Initialize cart calculations
        this.updateCartUI();

        // Check if there are hash-based links in state or direct actions
        console.log("Flipkart Clone App initialized successfully.");
    }

    // ==========================================
    // FLIPKART MINUTES SWITCHER & MODE LOGIC
    // ==========================================
    switchMode(mode) {
        if (this.mode === mode) return;
        this.mode = mode;

        const body = document.body;
        const flipkartTab = document.getElementById('mode-flipkart');
        const minutesTab = document.getElementById('mode-minutes');
        const flipkartCategories = document.getElementById('flipkart-categories');
        const minutesCategories = document.getElementById('minutes-categories');
        const flipkartHomeShelves = document.getElementById('flipkart-home-shelves');
        const minutesHomeShelves = document.getElementById('minutes-home-shelves');
        const searchInput = document.getElementById('search-input');
        const headerLogo = document.getElementById('header-logo-img');
        const explorePlus = document.getElementById('explore-plus-container');

        if (mode === 'minutes') {
            body.classList.add('minutes-theme');
            flipkartTab.classList.remove('active');
            minutesTab.classList.add('active');

            flipkartCategories.classList.add('hidden');
            minutesCategories.classList.remove('hidden');

            flipkartHomeShelves.classList.add('hidden');
            minutesHomeShelves.classList.remove('hidden');

            searchInput.placeholder = "Search for Groceries, Essentials, Snacks & more (10 Mins Delivery)";
            
            headerLogo.style.display = 'none';
            explorePlus.innerHTML = `<span class="minutes-logo-text"><i class="fa-solid fa-bolt"></i> minutes</span><span class="minutes-badge">10 MINS</span>`;
            explorePlus.style.fontSize = '16px';
            explorePlus.style.fontWeight = '900';

            // Render minutes home shelves
            this.renderMinutesHomeShelves();
        } else {
            body.classList.remove('minutes-theme');
            flipkartTab.classList.add('active');
            minutesTab.classList.remove('active');

            flipkartCategories.classList.remove('hidden');
            minutesCategories.classList.add('hidden');

            flipkartHomeShelves.classList.remove('hidden');
            minutesHomeShelves.classList.add('hidden');

            searchInput.placeholder = "Search for products, brands and more";

            headerLogo.style.display = 'block';
            explorePlus.innerHTML = `Explore <span class="plus-text">Plus <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus star" class="plus-star"></span>`;
            explorePlus.style.fontSize = '11px';
            explorePlus.style.fontWeight = '500';
        }

        this.currentSlideIndex = 0;
        this.initCarousel();
        this.navigateTo('home');
    }

    renderMinutesHomeShelves() {
        // Grocery items are Minutes eligible
        const groceryList = this.products.filter(p => p.category === 'grocery');
        
        // 10-15 Min Super Deals
        const deals = groceryList.slice(0, 5);
        // Snacks & Drinks
        const snacks = groceryList.slice(5, 12);

        this.populateMinutesShelf(deals, 'minutes-deals-shelf');
        this.populateMinutesShelf(snacks, 'minutes-snacks-shelf');
    }

    populateMinutesShelf(list, elementId) {
        const container = document.getElementById(elementId);
        if (!container) return;
        container.innerHTML = '';

        list.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => this.navigateTo('detail', p.id);

            // Check if item is already in cart to display counter or ADD button
            const cartItem = this.cart.find(item => item.product.id === p.id);
            let actionHtml = '';

            if (cartItem) {
                actionHtml = `
                    <div class="minutes-qty-counter">
                        <button class="minutes-counter-btn" onclick="event.stopPropagation(); app.updateMinutesQty('${p.id}', -1)">-</button>
                        <span class="minutes-counter-val">${cartItem.quantity}</span>
                        <button class="minutes-counter-btn" onclick="event.stopPropagation(); app.updateMinutesQty('${p.id}', 1)">+</button>
                    </div>
                `;
            } else {
                actionHtml = `<button class="minutes-add-btn" onclick="event.stopPropagation(); app.addToMinutesCart('${p.id}')">ADD</button>`;
            }

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${p.imageUrl}" alt="${p.name}">
                    <i class="fa-solid fa-heart wishlist-heart" onclick="event.stopPropagation(); this.classList.toggle('active')"></i>
                </div>
                <div class="delivery-badge-pill"><i class="fa-solid fa-bolt"></i> 10 MINS</div>
                <h3>${p.name}</h3>
                <div class="rating-row">
                    <div class="rating-badge">
                        ${p.rating} <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="review-count">(${p.ratingsCount.toLocaleString()})</span>
                </div>
                <div class="price-row-card">
                    <span class="actual-price">₹${p.price.toLocaleString()}</span>
                    <span class="mrp-price">₹${p.mrp.toLocaleString()}</span>
                    <span class="discount-tag">${p.discount}% off</span>
                </div>
                <div class="quick-add-container">
                    ${actionHtml}
                </div>
            `;
            container.appendChild(card);
        });
    }

    addToMinutesCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existing = this.cart.find(item => item.product.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.cart.push({ product, quantity: 1 });
        }

        this.updateCartUI();
        this.renderMinutesHomeShelves();
        if (this.currentView === 'search') {
            this.renderSearchResults(this.lastFilteredResults, false);
        }
    }

    updateMinutesQty(productId, delta) {
        const item = this.cart.find(i => i.product.id === productId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.cart = this.cart.filter(item => item.product.id !== productId);
        }
        
        this.updateCartUI();
        this.renderMinutesHomeShelves();
        if (this.currentView === 'search') {
            this.renderSearchResults(this.lastFilteredResults, false);
        }
    }

    // ==========================================
    // DIALOG & NOTIFICATION CONTROLLERS
    // ==========================================
    toggleLocationPopup() {
        const dialog = document.getElementById('location-dialog');
        dialog.classList.toggle('hidden');
    }

    applyNewLocation() {
        const pinInput = document.getElementById('dialog-pincode-input');
        const pincode = pinInput.value.trim();
        if (pincode.length !== 6 || isNaN(pincode)) {
            alert('Please enter a valid 6-digit Pincode.');
            return;
        }
        document.getElementById('header-pincode').textContent = `New Delhi ${pincode}`;
        document.getElementById('cart-delivery-pin').innerHTML = `New Delhi - <strong>${pincode}</strong>`;
        this.toggleLocationPopup();
        alert(`Location successfully updated to Pincode: ${pincode}`);
    }

    detectCurrentLocation() {
        alert('Accessing GPS location... Pincode detected: 110001 (New Delhi).');
        document.getElementById('header-pincode').textContent = 'New Delhi 110001';
        document.getElementById('cart-delivery-pin').innerHTML = 'New Delhi - <strong>110001</strong>';
        this.toggleLocationPopup();
    }

    toggleNotifications() {
        const dropdown = document.getElementById('notification-dropdown');
        dropdown.classList.toggle('hidden');
        document.getElementById('bell-badge').style.display = 'none';
    }

    // ==========================================
    // CAROUSEL BANNER CONTROLLER
    // ==========================================
    initCarousel() {
        const wrapper = document.getElementById('carousel-wrapper');
        const dotsContainer = document.getElementById('carousel-dots');
        wrapper.innerHTML = '';
        dotsContainer.innerHTML = '';

        const activeBanners = this.mode === 'minutes' ? this.minutesBanners : this.banners;

        activeBanners.forEach((bannerUrl, index) => {
            // Slide
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            const targetCategory = this.mode === 'minutes' ? 'grocery' : 'electronics';
            slide.innerHTML = `<img src="${bannerUrl}" alt="Flipkart Banner Offer ${index+1}" onclick="app.filterByCategory('${targetCategory}')">`;
            wrapper.appendChild(slide);

            // Dot
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => this.goToSlide(index);
            dotsContainer.appendChild(dot);
        });

        this.startCarouselAutoplay();
    }

    startCarouselAutoplay() {
        if (this.carouselInterval) clearInterval(this.carouselInterval);
        this.carouselInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Rotate every 5 seconds
    }

    goToSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        if (slides.length === 0) return;

        slides[this.currentSlideIndex].classList.remove('active');
        dots[this.currentSlideIndex].classList.remove('active');

        this.currentSlideIndex = index;

        slides[this.currentSlideIndex].classList.add('active');
        dots[this.currentSlideIndex].classList.add('active');

        this.startCarouselAutoplay(); // Reset timer on manual action
    }

    nextSlide() {
        const activeBanners = this.mode === 'minutes' ? this.minutesBanners : this.banners;
        let nextIndex = this.currentSlideIndex + 1;
        if (nextIndex >= activeBanners.length) nextIndex = 0;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const activeBanners = this.mode === 'minutes' ? this.minutesBanners : this.banners;
        let prevIndex = this.currentSlideIndex - 1;
        if (prevIndex < 0) prevIndex = activeBanners.length - 1;
        this.goToSlide(prevIndex);
    }

    // ==========================================
    // ROUTING / VIEW CONTROLLER
    // ==========================================
    navigateTo(viewId, productId = null) {
        // Hide all views
        const views = ['home-view', 'search-view', 'detail-view', 'cart-view', 'success-view'];
        views.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });

        // Show targets
        const targetView = document.getElementById(`${viewId}-view`);
        if (targetView) targetView.classList.remove('hidden');

        this.currentView = viewId;
        window.scrollTo(0,0);

        // Subviews loading
        if (viewId === 'detail' && productId) {
            this.renderProductDetail(productId);
        } else if (viewId === 'cart') {
            this.renderCartItems();
        } else if (viewId === 'home') {
            this.startCarouselAutoplay();
        } else {
            // Clear carousel interval if not on homepage to save memory
            if (this.carouselInterval) clearInterval(this.carouselInterval);
        }
    }

    // ==========================================
    // RENDERING HOME PRODUCT CAROUSELS
    // ==========================================
    renderHomeShelves() {
        const electronicsList = this.products.filter(p => p.category === 'electronics').slice(0, 5);
        const mobilesList = this.products.filter(p => p.category === 'mobile').slice(0, 5);
        const fashionList = this.products.filter(p => p.category === 'fashion').slice(0, 5);

        this.populateShelf(electronicsList, 'electronics-shelf');
        this.populateShelf(mobilesList, 'mobiles-shelf');
        this.populateShelf(fashionList, 'fashion-shelf');
    }

    populateShelf(list, elementId) {
        const container = document.getElementById(elementId);
        if (!container) return;
        container.innerHTML = '';

        list.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => this.navigateTo('detail', p.id);

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${p.imageUrl}" alt="${p.name}">
                    <i class="fa-solid fa-heart wishlist-heart" onclick="event.stopPropagation(); this.classList.toggle('active')"></i>
                </div>
                <h3>${p.name}</h3>
                <div class="rating-row">
                    <div class="rating-badge">
                        ${p.rating} <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="review-count">(${p.ratingsCount.toLocaleString()})</span>
                </div>
                <div class="price-row-card">
                    <span class="actual-price">₹${p.price.toLocaleString()}</span>
                    <span class="mrp-price">₹${p.mrp.toLocaleString()}</span>
                    <span class="discount-tag">${p.discount}% off</span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // ==========================================
    // SEARCH ENGINE & AUTOCOMPLETE
    // ==========================================
    setupSearch() {
        const input = document.getElementById('search-input');
        const suggestionsBox = document.getElementById('search-suggestions');
        const searchBtn = document.getElementById('search-btn');

        // Input matching listener
        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();
            if (query === '') {
                suggestionsBox.classList.add('hidden');
                return;
            }

            // Find matching product names or categories
            const matches = this.products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query)
            ).slice(0, 6);

            if (matches.length === 0) {
                suggestionsBox.innerHTML = `<div class="suggestion-item"><i>No match found</i></div>`;
            } else {
                suggestionsBox.innerHTML = '';
                matches.forEach(p => {
                    const item = document.createElement('div');
                    item.className = 'suggestion-item';
                    item.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> <span><strong>${p.name.substring(0, query.length)}</strong>${p.name.substring(query.length)}</span>`;
                    item.onclick = () => {
                        input.value = p.name;
                        suggestionsBox.classList.add('hidden');
                        this.triggerSearch(p.name);
                    };
                    suggestionsBox.appendChild(item);
                });
            }
            suggestionsBox.classList.remove('hidden');
        });

        // Hide suggestions on outside click
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.classList.add('hidden');
            }
        });

        // Handle enter key press
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.triggerSearch(input.value);
                suggestionsBox.classList.add('hidden');
            }
        });

        // Button click
        searchBtn.addEventListener('click', () => {
            this.triggerSearch(input.value);
            suggestionsBox.classList.add('hidden');
        });
    }

    triggerSearch(queryText) {
        this.currentPage = 1;
        const query = queryText.trim().toLowerCase();
        this.navigateTo('search');

        if (query === '') {
            this.filteredProductsList = [...this.products];
            this.activeCategory = 'all';
        } else {
            this.filteredProductsList = this.products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        this.applyFilters();
    }

    filterByCategory(categoryName) {
        this.currentPage = 1;
        this.navigateTo('search');
        this.activeCategory = categoryName;

        // Reset filter sidebar links active class
        const links = document.querySelectorAll('.filter-group ul li');
        links.forEach(li => li.classList.remove('active-category-link'));

        // Highlight matching link
        const targetLink = Array.from(links).find(li => 
            li.getAttribute('onclick') && li.getAttribute('onclick').includes(categoryName)
        );
        if (targetLink) targetLink.classList.add('active-category-link');

        if (categoryName === 'all') {
            this.filteredProductsList = [...this.products];
        } else {
            this.filteredProductsList = this.products.filter(p => p.category === categoryName);
        }

        this.applyFilters();
    }

    // ==========================================
    // SIDEBAR FILTERS (PRICE, RATINGS, DISCOUNT)
    // ==========================================
    applyFilters() {
        this.currentPage = 1;
        const minPrice = parseInt(document.getElementById('min-price-select').value);
        const maxPrice = parseInt(document.getElementById('max-price-select').value);
        
        // Ratings checkboxes
        const ratingCheckboxes = document.querySelectorAll('.rating-checkbox:checked');
        const requiredRatings = Array.from(ratingCheckboxes).map(cb => parseInt(cb.value));

        // Discount radio
        const discountRadio = document.querySelector('input[name="discount-filter"]:checked');
        const minDiscount = discountRadio ? parseInt(discountRadio.value) : 0;

        // Filter operations
        let list = [...this.filteredProductsList];

        // 1. Price
        list = list.filter(p => p.price >= minPrice && p.price <= maxPrice);

        // 2. Ratings
        if (requiredRatings.length > 0) {
            const minAllowedRating = Math.min(...requiredRatings);
            list = list.filter(p => p.rating >= minAllowedRating);
        }

        // 3. Discount
        if (minDiscount > 0) {
            list = list.filter(p => p.discount >= minDiscount);
        }

        this.renderSearchResults(list);
    }

    sortResults(sortBy) {
        // Toggle active sort tabs
        const tabs = document.querySelectorAll('.sort-tab');
        tabs.forEach(t => t.classList.remove('active'));

        const clickedTab = Array.from(tabs).find(t => 
            t.getAttribute('onclick') && t.getAttribute('onclick').includes(sortBy)
        );
        if (clickedTab) clickedTab.classList.add('active');

        let list = [...this.lastFilteredResults || this.filteredProductsList];

        if (sortBy === 'lowToHigh') {
            list.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'highToLow') {
            list.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'discount') {
            list.sort((a, b) => b.discount - a.discount);
        } else {
            // Default Relevance: reset to original order matches
            list = [...this.lastFilteredResults || this.filteredProductsList];
        }

        this.renderSearchResults(list, false); // Render sorted, don't update memory
    }

    renderSearchResults(results, updateLastResultList = true) {
        if (updateLastResultList) {
            this.lastFilteredResults = results;
        }

        const countEl = document.getElementById('results-count');
        const grid = document.getElementById('search-products-grid');

        grid.innerHTML = '';

        if (results.length === 0) {
            countEl.textContent = `Showing 0 of 0 products`;
            grid.innerHTML = `
                <div class="empty-search-alert" style="grid-column: 1 / -1; text-align: center; padding: 48px; width: 100%;">
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c0.png" alt="No results" style="max-width: 200px; margin-bottom: 16px;">
                    <h2>Sorry, no results found!</h2>
                    <p style="color:#878787; margin-top:8px;">Please check the spelling or try searching for another term.</p>
                </div>
            `;
            return;
        }

        // Pagination calculations
        const visibleCount = this.currentPage * this.resultsPerPage;
        const visibleResults = results.slice(0, visibleCount);

        countEl.textContent = `Showing ${Math.min(visibleResults.length, results.length).toLocaleString()} of ${results.length.toLocaleString()} products`;

        visibleResults.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => this.navigateTo('detail', p.id);

            let modeBadgeHtml = '';
            let actionHtml = '';

            if (this.mode === 'minutes') {
                modeBadgeHtml = `<div class="delivery-badge-pill"><i class="fa-solid fa-bolt"></i> 10 MINS</div>`;
                
                const cartItem = this.cart.find(item => item.product.id === p.id);
                if (cartItem) {
                    actionHtml = `
                        <div class="quick-add-container">
                            <div class="minutes-qty-counter">
                                <button class="minutes-counter-btn" onclick="event.stopPropagation(); app.updateMinutesQty('${p.id}', -1)">-</button>
                                <span class="minutes-counter-val">${cartItem.quantity}</span>
                                <button class="minutes-counter-btn" onclick="event.stopPropagation(); app.updateMinutesQty('${p.id}', 1)">+</button>
                            </div>
                        </div>
                    `;
                } else {
                    actionHtml = `
                        <div class="quick-add-container">
                            <button class="minutes-add-btn" onclick="event.stopPropagation(); app.addToMinutesCart('${p.id}')">ADD</button>
                        </div>
                    `;
                }
            }

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${p.imageUrl}" alt="${p.name}">
                    <i class="fa-solid fa-heart wishlist-heart" onclick="event.stopPropagation(); this.classList.toggle('active')"></i>
                </div>
                ${modeBadgeHtml}
                <h3>${p.name}</h3>
                <div class="rating-row">
                    <div class="rating-badge">
                        ${p.rating} <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="review-count">(${p.ratingsCount.toLocaleString()})</span>
                </div>
                <div class="price-row-card">
                    <span class="actual-price">₹${p.price.toLocaleString()}</span>
                    <span class="mrp-price">₹${p.mrp.toLocaleString()}</span>
                    <span class="discount-tag">${p.discount}% off</span>
                </div>
                ${actionHtml}
            `;
            grid.appendChild(card);
        });

        // Add "Load More" Button if there are remaining results
        if (results.length > visibleResults.length) {
            const loadMoreWrapper = document.createElement('div');
            loadMoreWrapper.style.gridColumn = "1 / -1";
            loadMoreWrapper.style.textAlign = "center";
            loadMoreWrapper.style.padding = "24px 0";
            
            const btn = document.createElement('button');
            btn.textContent = "Load More Products";
            btn.style.backgroundColor = "var(--fk-blue)";
            btn.style.color = "#fff";
            btn.style.fontWeight = "500";
            btn.style.padding = "10px 24px";
            btn.style.borderRadius = "2px";
            btn.style.fontSize = "14px";
            btn.style.cursor = "pointer";
            btn.style.boxShadow = "var(--shadow-light)";
            btn.style.transition = "background-color 0.2s";
            btn.onmouseover = () => btn.style.backgroundColor = "#2063cc";
            btn.onmouseout = () => btn.style.backgroundColor = "var(--fk-blue)";
            btn.onclick = () => {
                this.currentPage++;
                this.renderSearchResults(this.lastFilteredResults, false);
            };
            
            loadMoreWrapper.appendChild(btn);
            grid.appendChild(loadMoreWrapper);
        }
    }

    // ==========================================
    // VIEW: PRODUCT DETAIL RENDERER
    // ==========================================
    renderProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        const container = document.getElementById('product-detail-content');
        if (!product || !container) return;

        // Render Specs table
        let specsRows = '';
        for (const [key, val] of Object.entries(product.specs)) {
            specsRows += `
                <tr>
                    <td class="spec-label">${key}</td>
                    <td class="spec-val">${val}</td>
                </tr>
            `;
        }

        // Render Highlights bullet points
        let highlightsHtml = '';
        product.highlights.forEach(h => {
            highlightsHtml += `<li><i class="fa-solid fa-circle" style="font-size: 6px; color: #878787; margin-right: 12px; vertical-align: middle;"></i> ${h}</li>`;
        });

        // Render Thumbnails strip
        let thumbsHtml = '';
        product.thumbnails.forEach((thumb, idx) => {
            thumbsHtml += `
                <div class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="app.changeDetailImage('${thumb}', this)">
                    <img src="${thumb}" alt="thumbnail ${idx+1}">
                </div>
            `;
        });

        container.innerHTML = `
            <!-- Left Gallery CTA column -->
            <div class="detail-gallery-col">
                <div class="primary-image-view">
                    <img src="${product.imageUrl}" alt="${product.name}" id="main-product-image">
                </div>
                <div class="thumbnails-strip">
                    ${thumbsHtml}
                </div>
                <div class="detail-actions-row">
                    <button class="detail-cta-btn add-to-cart-btn" onclick="app.addToCart('${product.id}')">
                        <i class="fa-solid fa-cart-shopping"></i> ADD TO CART
                    </button>
                    <button class="detail-cta-btn buy-now-btn" onclick="app.buyNow('${product.id}')">
                        <i class="fa-solid fa-bolt"></i> BUY NOW
                    </button>
                </div>
            </div>

            <!-- Right Details Info column -->
            <div class="detail-info-col">
                <div class="product-breadcrumbs">
                    <span>Home</span> &gt; <span>${product.category}</span> &gt; <span>${product.name.split(' ')[0]}</span>
                </div>
                <h1 class="detail-title">${product.name}</h1>
                
                <div class="detail-ratings-row">
                    <span class="rating-badge">${product.rating} <i class="fa-solid fa-star"></i></span>
                    <span class="rating-count-text">${product.ratingsCount.toLocaleString()} Ratings & ${product.reviewsCount.toLocaleString()} Reviews</span>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_6272cc.png" alt="Flipkart Assured" class="assured-tag">
                </div>

                <div class="detail-price-box">
                    <span class="detail-actual">₹${product.price.toLocaleString()}</span>
                    <span class="detail-mrp">₹${product.mrp.toLocaleString()}</span>
                    <span class="detail-discount">${product.discount}% Off</span>
                </div>

                <!-- Offers Box -->
                <div class="bank-offers-box">
                    <h4>Available Offers</h4>
                    <div class="bank-offer-item">
                        <i class="fa-solid fa-tag"></i>
                        <span><strong>Bank Offer</strong> 10% instant discount on SBI Credit Cards, up to ₹1,500. <a href="#" style="color:#2874f0; font-weight:500;">T&C</a></span>
                    </div>
                    <div class="bank-offer-item">
                        <i class="fa-solid fa-tag"></i>
                        <span><strong>Bank Offer</strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. <a href="#" style="color:#2874f0; font-weight:500;">T&C</a></span>
                    </div>
                    <div class="bank-offer-item">
                        <i class="fa-solid fa-tag"></i>
                        <span><strong>Partner Offer</strong> Purchase now and get a surprise cashback coupon up to ₹500. <a href="#" style="color:#2874f0; font-weight:500;">Know More</a></span>
                    </div>
                </div>

                <!-- Pincode check -->
                <div class="delivery-check-box">
                    <span style="font-size: 14px; font-weight:500; color:#878787;"><i class="fa-solid fa-location-dot" style="margin-right:8px;"></i> Delivery</span>
                    <input type="text" placeholder="Enter Delivery Pincode" value="110001">
                    <button onclick="alert('Pincode verified! Free delivery is available at this location.')">Check</button>
                </div>

                <!-- Highlights & Description -->
                <div style="display:flex; gap: 32px; margin-top: 12px;">
                    <div style="width: 50%;">
                        <h4 style="font-weight:500; font-size:16px; margin-bottom:12px;">Highlights</h4>
                        <ul style="display:flex; flex-direction:column; gap:8px; font-size:14px;">
                            ${highlightsHtml}
                        </ul>
                    </div>
                    <div style="width: 50%;">
                        <h4 style="font-weight:500; font-size:16px; margin-bottom:12px;">Product Description</h4>
                        <p style="font-size:13px; color:#4f4f4f; line-height:1.5;">${product.description}</p>
                    </div>
                </div>

                <!-- Specifications Table -->
                <div style="border: 1px solid #f0f0f0; padding:16px; border-radius:4px; margin-top: 16px;">
                    <h3 style="font-size: 18px; font-weight: 500; margin-bottom: 12px; border-bottom: 1px solid #f1f3f6; padding-bottom:8px;">Specifications</h3>
                    <table class="specifications-table">
                        <tbody>
                            ${specsRows}
                        </tbody>
                    </table>
                </div>

                <!-- Standard reviews -->
                <div class="customer-reviews-box">
                    <h3 style="font-size: 18px; font-weight:500; margin-bottom: 8px;">Customer Ratings & Reviews</h3>
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-badge">5 <i class="fa-solid fa-star"></i></span>
                            <span class="review-title">Excellent Choice!</span>
                        </div>
                        <p class="review-body">Must buy product. Sleek build quality, phenomenal performance and camera works top-tier. Exceeded my expectations.</p>
                        <div class="review-footer">
                            <span>Aman Verma</span>
                            <span><i class="fa-solid fa-circle-check" style="color:var(--fk-success-green);"></i> Certified Buyer</span>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-badge">4 <i class="fa-solid fa-star"></i></span>
                            <span class="review-title">Highly recommended</span>
                        </div>
                        <p class="review-body">Battery backup is great and handles high-end gaming easily. Sound output could be slightly better but outstanding overall.</p>
                        <div class="review-footer">
                            <span>Priya Sharma</span>
                            <span><i class="fa-solid fa-circle-check" style="color:var(--fk-success-green);"></i> Certified Buyer</span>
                            <span>1 week ago</span>
                        </div>
                    </div>
                </div>

            </div>
        `;
    }

    changeDetailImage(imageUrl, thumbEl) {
        document.getElementById('main-product-image').src = imageUrl;

        // Toggle Active
        const thumbs = document.querySelectorAll('.thumb-img');
        thumbs.forEach(t => t.classList.remove('active'));
        thumbEl.classList.add('active');
    }

    // ==========================================
    // CART MANAGEMENT (STATE & INTERFACE)
    // ==========================================
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        // Check if already in cart
        const existing = this.cart.find(item => item.product.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.cart.push({ product, quantity: 1 });
        }

        this.updateCartUI();
        alert(`${product.name.split('(')[0]} added to cart successfully!`);
        this.navigateTo('cart');
    }

    buyNow(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        // Add to cart if not present
        const existing = this.cart.find(item => item.product.id === productId);
        if (!existing) {
            this.cart.push({ product, quantity: 1 });
        }

        this.updateCartUI();
        this.navigateTo('cart');
    }

    updateCartUI() {
        const badge = document.getElementById('cart-badge');
        const totalItemsCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItemsCount;

        // Animate badge
        badge.style.animation = 'none';
        // Trigger reflow
        badge.offsetHeight; 
        badge.style.animation = 'bounceBadge 0.3s ease-out';
    }

    renderCartItems() {
        const listContainer = document.getElementById('cart-items-list');
        const billingItemsCount = document.getElementById('billing-items-count');
        const billingMrp = document.getElementById('billing-mrp');
        const billingDiscount = document.getElementById('billing-discount');
        const billingTotal = document.getElementById('billing-total');
        const billingSavings = document.getElementById('billing-savings');

        if (this.cart.length === 0) {
            listContainer.innerHTML = `
                <div class="empty-cart-view">
                    <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" alt="Empty Cart">
                    <h2>Your cart is empty!</h2>
                    <p>Add items to it now.</p>
                    <button class="shop-now-btn" onclick="app.navigateTo('home')">Shop Now</button>
                </div>
            `;
            // Reset billing details
            billingItemsCount.textContent = '0';
            billingMrp.textContent = '₹0';
            billingDiscount.textContent = '-₹0';
            billingTotal.textContent = '₹0';
            billingSavings.textContent = '₹0';
            
            // Hide place order actions
            document.querySelector('.cart-actions-bar').style.display = 'none';
            return;
        }

        // Show actions
        document.querySelector('.cart-actions-bar').style.display = 'flex';
        listContainer.innerHTML = '';

        let totalMrp = 0;
        let totalActual = 0;

        this.cart.forEach(item => {
            const p = item.product;
            totalMrp += p.mrp * item.quantity;
            totalActual += p.price * item.quantity;

            const card = document.createElement('div');
            card.className = 'cart-item-card';
            card.innerHTML = `
                <div class="cart-item-img-box">
                    <img src="${p.imageUrl}" alt="${p.name}">
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="app.updateQty('${p.id}', -1)">-</button>
                        <input type="text" class="qty-input" value="${item.quantity}" readonly>
                        <button class="qty-btn" onclick="app.updateQty('${p.id}', 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-details-box">
                    <h3>${p.name}</h3>
                    <span class="seller-text">Seller: SuperComNet | <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_6272cc.png" alt="Flipkart Assured" style="height: 15px; vertical-align: middle;"></span>
                    <div class="cart-item-prices">
                        <span class="cart-item-actual">₹${(p.price * item.quantity).toLocaleString()}</span>
                        <span class="cart-item-mrp">₹${(p.mrp * item.quantity).toLocaleString()}</span>
                        <span class="cart-item-discount">${p.discount}% Off</span>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-action-link">SAVE FOR LATER</button>
                        <button class="cart-action-link" onclick="app.removeFromCart('${p.id}')">REMOVE</button>
                    </div>
                </div>
            `;
            listContainer.appendChild(card);
        });

        // Price calculations
        const savings = totalMrp - totalActual;

        billingItemsCount.textContent = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        billingMrp.textContent = `₹${totalMrp.toLocaleString()}`;
        billingDiscount.textContent = `-₹${savings.toLocaleString()}`;
        billingTotal.textContent = `₹${totalActual.toLocaleString()}`;
        billingSavings.textContent = `₹${savings.toLocaleString()}`;
    }

    updateQty(productId, delta) {
        const item = this.cart.find(i => i.product.id === productId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.updateCartUI();
            this.renderCartItems();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.product.id !== productId);
        this.updateCartUI();
        this.renderCartItems();
    }

    // ==========================================
    // CHECKOUT SIMULATOR
    // ==========================================
    placeOrder() {
        if (this.cart.length === 0) return;

        // Generate Random Order ID
        const orderId = "FK" + Math.floor(100000000000 + Math.random() * 900000000000);
        document.getElementById('success-order-id').textContent = orderId;

        const successHeading = document.getElementById('success-heading');
        const successDesc = document.getElementById('success-description');
        const successDelivery = document.getElementById('success-delivery-time');

        if (this.mode === 'minutes') {
            successHeading.textContent = "Order Placed Successfully! (Minutes Delivery)";
            successDesc.textContent = "Your items have been picked and packed. Delivery partner is on the way!";
            
            // Calculate current time + 10 mins
            const now = new Date();
            now.setMinutes(now.getMinutes() + 10);
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            successDelivery.textContent = `Today, by ${timeStr} (10 Mins Delivery)`;
        } else {
            successHeading.textContent = "Order Placed Successfully!";
            successDesc.textContent = "Thank you for shopping with us. Your order has been placed successfully.";
            successDelivery.textContent = "Tomorrow, by 9:00 PM";
        }

        // Clear cart
        this.cart = [];
        this.updateCartUI();

        // Navigate to success
        this.navigateTo('success');
    }

    // ==========================================
    // DYNAMIC PRODUCTS GENERATOR (100,000 items)
    // ==========================================
    generateMockProducts(count) {
        const categories = ['mobile', 'electronics', 'fashion', 'grocery', 'home', 'appliances'];
        
        const data = {
            mobile: {
                brands: ['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Realme', 'Vivo', 'Oppo', 'Motorola', 'Google', 'Nokia'],
                models: ['Galaxy', 'Pro', 'Max', 'Ultra', 'Neo', 'Lite', 'Zoom', 'Play', 'Edge', 'Note'],
                colors: ['Phantom Black', 'Titanium Silver', 'Midnight Blue', 'Mint Green', 'Sunset Orange', 'Pearl White'],
                images: [
                    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1565849906461-0e25f5d4755a?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=312&auto=format&fit=crop&q=80"
                ]
            },
            electronics: {
                brands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Apple', 'Acer', 'Sony', 'JBL', 'Bose', 'Logitech', 'SanDisk', 'Seagate'],
                models: ['Inspiron', 'Latitude', 'ThinkPad', 'ZenBook', 'MacBook', 'Vostro', 'ROG', 'Nitro', 'Extreme', 'Wireless'],
                colors: ['Charcoal Black', 'Platinum Gray', 'Space Grey', 'Ice Blue'],
                images: [
                    "https://images.unsplash.com/photo-1496181130204-755241524eab?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1588449668338-d15176d315b7?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=312&auto=format&fit=crop&q=80"
                ]
            },
            fashion: {
                brands: ['Roadster', "Levi's", 'Puma', 'Nike', 'Adidas', 'Zara', 'H&M', 'Allen Solly', 'Van Heusen', 'Peter England'],
                models: ['Slim Fit Shirt', 'Regular Fit Jeans', 'Cotton Kurta', 'Printed Dress', 'Casual Shoes', 'Running Sneakers', 'Sports Jacket'],
                colors: ['Olive Green', 'Deep Blue', 'Classic White', 'Jet Black', 'Crimson Red'],
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=312&auto=format&fit=crop&q=80"
                ]
            },
            grocery: {
                brands: ['Tata Tea', 'Fortune', 'Aashirvaad', 'Nescafe', 'Happilo', 'Dabur', 'Amul', 'Britannia', 'Catch', 'Cadbury'],
                models: ['Gold Leaf Tea', 'Premium Mustard Oil', 'Whole Wheat Atta', 'Classic Instant Coffee', 'Raw California Almonds', 'Organic Pure Honey'],
                colors: ['Value Pack', 'Glass Jar', 'Combo Pack', '1kg Saver Pack'],
                images: [
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=312&auto=format&fit=crop&q=80"
                ]
            },
            home: {
                brands: ['Green Soul', 'Urban Wood', 'Adorn', 'Solimo', 'Sleepwell', 'Wakefit', 'HomeTown', 'Nilkamal'],
                models: ['Ergonomic Chair', 'Solid Wood Table', '3-Seater Sofa', 'Memory Foam Mattress', 'Study Desk', 'Wall Bookshelf'],
                colors: ['Royal Blue', 'Honey Finish', 'Classic Walnut', 'Carbon Black'],
                images: [
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=312&auto=format&fit=crop&q=80"
                ]
            },
            appliances: {
                brands: ['Mi', 'IFB', 'Samsung', 'LG', 'Whirlpool', 'Bosch', 'Haier', 'Panasonic', 'Godrej'],
                models: ['Ultra HD 4K TV', 'Fully Automatic Washing Machine', 'Double Door Refrigerator', 'Convection Microwave', 'Inverter Split AC'],
                colors: ['Metallic Grey', 'Midnight Black', 'Stainless Steel', 'Floral Pattern'],
                images: [
                    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1595248646749-2d3544839959?w=312&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?w=312&auto=format&fit=crop&q=80"
                ]
            }
        };

        for (let i = 1; i <= count; i++) {
            const cat = categories[i % categories.length];
            const catData = data[cat];
            
            const brand = catData.brands[Math.floor(Math.random() * catData.brands.length)];
            const model = catData.models[Math.floor(Math.random() * catData.models.length)];
            const color = catData.colors[Math.floor(Math.random() * catData.colors.length)];
            const image = catData.images[Math.floor(Math.random() * catData.images.length)];
            
            // Build logical price structure
            let basePrice = 500;
            if (cat === 'mobile') basePrice = 8000 + Math.floor(Math.random() * 92000);
            else if (cat === 'electronics') basePrice = 3000 + Math.floor(Math.random() * 87000);
            else if (cat === 'appliances') basePrice = 12000 + Math.floor(Math.random() * 38000);
            else if (cat === 'home') basePrice = 1500 + Math.floor(Math.random() * 25000);
            else if (cat === 'fashion') basePrice = 299 + Math.floor(Math.random() * 4700);
            else if (cat === 'grocery') basePrice = 50 + Math.floor(Math.random() * 950);
            
            const discountPct = 5 + Math.floor(Math.random() * 65);
            const mrp = Math.floor(basePrice * (1 + discountPct / 100));
            const rating = parseFloat((3.5 + Math.random() * 1.4).toFixed(1));
            const ratingsCount = 100 + Math.floor(Math.random() * 85000);
            const reviewsCount = Math.floor(ratingsCount * (0.05 + Math.random() * 0.08));
            
            const specModelName = `${model} ${10 + (i % 90)}`;
            const name = `${brand} ${model} ${i} (${color})`;

            this.products.push({
                id: `gen_p${i}`,
                name: name,
                category: cat,
                price: basePrice,
                mrp: mrp,
                discount: discountPct,
                rating: rating,
                ratingsCount: ratingsCount,
                reviewsCount: reviewsCount,
                imageUrl: image,
                thumbnails: [image],
                description: `This is a high-performance ${brand} ${model} designed to provide outstanding utility and premium experience. Specially built for modern consumers with advanced technology.`,
                highlights: [
                    `Genuine Brand Product by ${brand}`,
                    `Premium materials used`,
                    `Highly rated with ${rating} stars`,
                    `Fast shipping available`
                ],
                specs: {
                    "Brand": brand,
                    "Model": specModelName,
                    "Category": cat,
                    "Color": color,
                    "Warranty": "1 Year Domestic Warranty"
                }
            });
        }
    }
}

// Global initialization
const app = new FlipkartApp();
