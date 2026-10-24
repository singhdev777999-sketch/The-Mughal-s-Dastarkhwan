import { MenuItem, GalleryPhoto, Review, PairingAddon } from '../types';

export const RESTAURANT_INFO = {
  name: "The Mughal's Dastarkhwan",
  tagline: "Lucknow • Estd. Heritage Awadh",
  address: "Near Lalbagh & Tulsi Theatre Crossing, Hazratganj, Lucknow, Uttar Pradesh 226001",
  phoneDisplay: "+91 (0522) 261 4455 / +91 98390 12345",
  phoneRaw: "+915222614455",
  email: "concierge@mughalsdastarkhwan.com",
  serviceHours: {
    lunch: "12:30 PM – 04:00 PM (Dastarkhwan-e-Khaas)",
    dinner: "07:00 PM – 11:30 PM (Dastarkhwan-e-Shab)"
  },
  locationCoords: "26.8467° N, 80.9462° E",
  googleMapsUrl: "https://maps.google.com/?q=Hazratganj+Lucknow+The+Mughals+Dastarkhwan"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'galawati-kebab',
    name: 'Galawat Ke Kebab & Sheermal',
    hindiName: 'गलावट कबाब व शीरमाल',
    category: 'kebabs',
    dietary: 'non-veg',
    price: 680,
    description: 'Velvety smoked minced baby goat medallions tenderized with green raw papaya and folded with sandalwood-smoked clarified ghee. Accompanied by saffron sweet milk bread.',
    story: 'Created originally in 18th-century Lucknow for the toothless Nawab Asad-ud-Daula so he could relish mutton without chewing. Infused with our closely guarded 160 potli botanicals.',
    pairing: 'Fresh Onion Laccha & Saffron Sheermal',
    badge: 'Royal Signature',
    spiceLevel: 2,
    heritageMethod: 'Tawa Dhoongar Firing',
    tags: ['160 Spices', 'Melt-in-Mouth', 'Signature'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2-3 Persons (6 Medallions + 2 Sheermal)',
    prepTime: '25-30 Mins (Live Sigri Dhoongar)',
    estimatedDelivery: '30-40 Mins Express in Lucknow',
    rating: 4.9,
    reviewsCount: 148,
    ingredients: [
      'Prime Young Mutton Mince (Double ground)',
      'Green Raw Papaya Pulp tenderizer',
      '160 Potli Botanicals (Paan ki jad, Baadiyan, Cubeb pepper)',
      'Sandalwood Smoke Clarified Cow Ghee',
      'Pampore Saffron & Screw-pine Kewra',
      'Roasted Chickpea Flour (Bhuna Besan)'
    ]
  },
  {
    id: 'dum-biryani',
    name: 'Awadhi Dum Gosht Biryani',
    hindiName: 'अवधी दम गोश्त बिरयानी',
    category: 'biryani_nihari',
    dietary: 'non-veg',
    price: 590,
    description: 'Long-grain aged dehraduni basmati cooked with sweet whole milk, Kashmiri saffron, kewra water, and prime mutton cutlets sealed with puran dough in heavy brass degh.',
    story: 'True Awadhi biryani is subtle and perfumed, never aggressive with red chilies. The meat yakhni and rice simmer in harmony beneath a flour dough seal.',
    pairing: 'Burani Garlic Raita',
    badge: 'Slow Cooked',
    spiceLevel: 2,
    heritageMethod: 'Clay-Sealed Dum Pukht',
    tags: ['Dehraduni Rice', 'Zaffran', 'Purani Tehzeeb'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2-3 Persons (750g Handi)',
    prepTime: '30 Mins (Dum Pukht Sealed)',
    estimatedDelivery: '35-45 Mins Express in Lucknow',
    rating: 4.9,
    reviewsCount: 132,
    ingredients: [
      'Aged Extra-Long Dehraduni Basmati',
      'Prime Mutton Yakhni Infusion',
      'Whole Buffalo Milk & Kashmiri Saffron',
      'Green Cardamom, Mace & Nutmeg',
      'Atta Dough Seal for Deg Retention',
      'Crispy Barista Fried Brown Onions'
    ]
  },
  {
    id: 'nalli-nihari',
    name: 'Nalli Nihari Khaas',
    hindiName: 'नल्ली निहारी ख़ास',
    category: 'biryani_nihari',
    dietary: 'non-veg',
    price: 640,
    description: 'Slow braised shank cutlets simmering from midnight until dawn in rich bone marrow reduction, fresh ginger slivers, and roasted gram flour roux.',
    story: 'Derived from the Arabic word "Nahar" meaning morning; originally served to Nawabs and their royal sentries at sunrise after Fajr prayer for boundless vigor.',
    pairing: 'Khamiri Roti',
    badge: '12-Hour Simmer',
    spiceLevel: 3,
    heritageMethod: 'Slow Overnight Braise',
    tags: ['Marrow Rich', 'Ginger Silvers', 'Historic Breakfast'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2 Persons (2 Nalli Shanks + Rich Gravy)',
    prepTime: '12-Hour Slow Overnight Pot',
    estimatedDelivery: '30-40 Mins Express in Lucknow',
    rating: 4.8,
    reviewsCount: 96,
    ingredients: [
      'Prime Baby Goat Bone-in Shanks (Nalli)',
      'Rich Bone Marrow Reduction',
      'Dry Ginger (Saunth) & Pipali Long Pepper',
      'Atta Roux Thickener',
      'Desi Clarified Butter Tarka',
      'Julienned Young Ginger & Fresh Green Chili'
    ]
  },
  {
    id: 'murgh-chaap',
    name: 'Royal Murgh Chaap',
    hindiName: 'शाही मुर्ग़ चाप',
    category: 'curries',
    dietary: 'non-veg',
    price: 520,
    description: 'Succulent chicken legs marinated in cashew paste, charred brown onions, white pepper, and mace, gently rendered on heavy cast iron tawa until glazed.',
    story: 'A favorite of the court salons, celebrated for its velvety nutty sauce and tender bone-in cuts that absorb aromatic mace and nutmeg.',
    pairing: 'Rumali Roti',
    badge: 'Chef Recommended',
    spiceLevel: 2,
    heritageMethod: 'Slow Iron Tawa Glaze',
    tags: ['Cashew Paste', 'Court Favorite', 'Velvety'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2 Persons (2 Grand Chicken Chaap Cuts)',
    prepTime: '20-25 Mins',
    estimatedDelivery: '30-40 Mins Express in Lucknow',
    rating: 4.8,
    reviewsCount: 84,
    ingredients: [
      'Selected Whole Chicken Leg Cuts',
      'Stone-Ground Cashew & Melon Nut Paste',
      'Slow Caramelized Onion Purée',
      'White Malabar Pepper & Javitri (Mace)',
      'Aromatic Kewra Water',
      'Desi Ghee Glaze'
    ]
  },
  {
    id: 'boti-kebab',
    name: 'Seekh & Boti Kebab Grill',
    hindiName: 'सीख़ व बोटी कबाब',
    category: 'kebabs',
    dietary: 'non-veg',
    price: 580,
    description: 'Charcoal-scorched cubes of baby goat marinated with wild caraway, garlic emulsion, smoked mustard oil, and freshly ground cubeb pepper.',
    story: 'Prepared live on glowing acacia coals at our courtyard sigri counter, basted continually with clarified cow ghee and saffron mist.',
    pairing: 'Mint Chutney & Ring Onions',
    badge: 'Live Sigri',
    spiceLevel: 3,
    heritageMethod: 'Acacia Coal Bhatti',
    tags: ['From The Sigri', 'Live Grill', 'Smoky Char'],
    image: '/assets/aistudio/download_14514960.jfif',
    serves: '2 Persons (8 Skewered Tender Cuts)',
    prepTime: '15-20 Mins (Live Bhatti Grill)',
    estimatedDelivery: '25-35 Mins Express in Lucknow',
    rating: 4.9,
    reviewsCount: 112,
    ingredients: [
      'Boneless Baby Goat Cuts',
      'Smoked Raw Mustard Oil & Garlic Emulsion',
      'Wild Caraway Seeds (Shahi Jeera)',
      'Black Stone Flower (Dagad Phool)',
      'Freshly Ground Cubeb & Clove',
      'Clarified Butter Basting on Embers'
    ]
  },
  {
    id: 'paneer-lazeez',
    name: 'Paneer Korma Lazeez',
    hindiName: 'पनीर क़ोरमा लज़ीज़',
    category: 'curries',
    dietary: 'veg',
    price: 440,
    description: 'Fresh churned country cottage cheese submerged in velvet gravy of melon seeds, roasted almond cream, saffron threads, and royal green cardamom.',
    story: 'Crafted for the royal vegetarian courtiers of Awadh using the same dum techniques and fragrant bouquet garni as the meat gravies.',
    pairing: 'Butter Taftan Roti',
    badge: 'Awadhi Velvet',
    spiceLevel: 1,
    heritageMethod: 'Dum Stewing',
    tags: ['Vegetarian Khaas', 'Melon Seeds', 'Almond Cream'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2-3 Persons (Generous Bowl)',
    prepTime: '20 Mins',
    estimatedDelivery: '30-40 Mins Express in Lucknow',
    rating: 4.7,
    reviewsCount: 79,
    ingredients: [
      'Malai Cottage Cheese Cubes',
      'Magaz (Melon Seeds) Emulsion',
      'Mamra Almond Cream',
      'Green Cardamom Seeds',
      'Saffron & Kewra Droplets',
      'Lightly Stewed Ghee Gravy'
    ]
  },
  {
    id: 'shahi-tukda',
    name: 'Shahi Tukda & Phirni',
    hindiName: 'शाही टुकड़ा व फिरनी',
    category: 'desserts',
    dietary: 'veg',
    price: 320,
    description: 'Ghee-crisped brioche bathed in thickened saffron rabri adorned with edible pure silver leaf (varq), alongside earthen pot chilled rice phirni scented with screwpine.',
    story: 'The crowning ceremonial conclusion to any Nawabi banquet, balancing warm richness with cool clay-pot fragrance.',
    pairing: 'Kahwa or Rose Sherbet',
    badge: 'Silver Varq',
    spiceLevel: 1,
    heritageMethod: 'Clay Matka Chilling',
    tags: ['Royal Sweet Ending', 'Silver Leaf', 'Kewra Scent'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2 Persons (2 Shahi Tukda + 1 Clay Sakora Phirni)',
    prepTime: 'Ready to Pack Instantly',
    estimatedDelivery: '25-35 Mins Express in Lucknow',
    rating: 4.9,
    reviewsCount: 68,
    ingredients: [
      'Double-Fried Ghee Bread Crisps',
      'Thick Whole Buffalo Milk Rabri',
      'Pure Edible Chandi Ka Varq (Silver Leaf)',
      'Pistachio & Charoli Nuts',
      'Screw-pine Kewra Essence'
    ]
  },
  {
    id: 'sheermal-bread',
    name: 'Zafrani Sheermal & Taftan',
    hindiName: 'ज़फ़रानी शीरमाल व ताफ़्तान',
    category: 'breads',
    dietary: 'veg',
    price: 180,
    description: 'Saffron-infused milk bread brushed with golden clarified butter, baked in clay tandoor until blistering with amber caramel spots.',
    story: 'Invented by the master baker Mehmood during the reign of King Ghazi-ud-Din Haidar. Each loaf is bathed in saffron water prior to firing.',
    pairing: 'Galawat Kebab or Nihari',
    badge: 'Heritage Bread',
    spiceLevel: 1,
    heritageMethod: 'Tandoor Oven Baked',
    tags: ['Saffron Bathed', 'Warm Milk Dough', 'Nawabi Staple'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2 Loaves',
    prepTime: '15 Mins (Hot Tandoor Pull)',
    estimatedDelivery: '25-35 Mins Express in Lucknow',
    rating: 4.8,
    reviewsCount: 92,
    ingredients: [
      'Fine Maida kneaded with Warm Milk',
      'Kashmiri Saffron Wash',
      'Desi Cow Ghee glaze',
      'Sugar hint & Cardamom essence',
      'Baked in Charcoal Clay Tandoor'
    ]
  },
  {
    id: 'subz-biryani',
    name: 'Subz Gulzar Awadhi Biryani',
    hindiName: 'सब्ज़ गुलज़ार बिरयानी',
    category: 'biryani_nihari',
    dietary: 'veg',
    price: 460,
    description: 'Farm-fresh heritage vegetables, lotus stems, green peas, and baby carrots layered with dehraduni rice and steeped in mint and kewra essence.',
    story: 'Demonstrating that the Dum Pukht philosophy breathes magic into botanical treasures just as profoundly as prime cuts.',
    pairing: 'Boondi Burani Raita',
    badge: 'Vegetarian Delight',
    spiceLevel: 2,
    heritageMethod: 'Handi Dum Sealing',
    tags: ['Lotus Stem', 'Mint Infused', 'Vegetarian Khaas'],
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    serves: '2-3 Persons',
    prepTime: '25 Mins',
    estimatedDelivery: '30-40 Mins Express in Lucknow',
    rating: 4.7,
    reviewsCount: 54,
    ingredients: [
      'Kamal Kakdi (Lotus Stem)',
      'Baby Carrots, Beans & Green Peas',
      'Aged Long Grain Basmati',
      'Saffron & Kewra Dum Infusion',
      'Fresh Garden Mint & Coriander'
    ]
  },
  {
    id: 'kakori-kebab',
    name: 'Nawabi Kakori Kebab',
    hindiName: 'काकोरी कबाब',
    category: 'kebabs',
    dietary: 'non-veg',
    price: 690,
    description: 'Silken minced mutton kneaded with kidney suet, raw khoya, rose petals, and roasted chickpea flour, roasted on silver-wrapped iron skewers.',
    story: 'Created by the cooks of the Kakori estate to outdo the British traveler who complained about tough kebabs. Its tenderness is legendary.',
    pairing: 'Ulte Tawe Ka Paratha',
    badge: 'Aristocratic Heritage',
    spiceLevel: 2,
    heritageMethod: 'Charcoal Sigri Skewer',
    tags: ['Melt in Mouth', 'Rose Petals', 'Kakori Legacy'],
    image: '/assets/aistudio/download_14514960.jfif',
    serves: '2 Persons (4 Majestic Skewers)',
    prepTime: '20 Mins (Live Sigri)',
    estimatedDelivery: '30-40 Mins Express in Lucknow',
    rating: 4.9,
    reviewsCount: 104,
    ingredients: [
      'Triple-Ground Baby Goat Tenderloin',
      'Kidney Suet & Raw Khoya',
      'Damask Rose Petal Powder',
      'Roasted Cloves & Cardamom Seeds',
      'Charcoal Embers Live Skewered'
    ]
  }
];

export const POPULAR_PAIRINGS: PairingAddon[] = [
  {
    id: 'saffron-sheermal',
    name: 'Zafrani Saffron Sheermal (2 pcs)',
    hindiName: 'ज़फ़रानी शीरमाल',
    price: 180,
    description: 'Clay tandoor baked warm sweet milk bread infused with pure Kashmiri saffron and desi ghee.'
  },
  {
    id: 'burani-raita',
    name: 'Burani Garlic & Roasted Cumin Raita',
    hindiName: 'बुरानी रायता',
    price: 140,
    description: 'Thick hung curd whisked with smoked garlic cloves, roasted cumin, and red chili flakes.'
  },
  {
    id: 'ulte-tawe-paratha',
    name: 'Ulte Tawe Ka Paratha (2 pcs)',
    hindiName: 'उलटे तवे का परांठा',
    price: 120,
    description: 'Feather-light flaky paratha roasted on the dome of an inverted iron griddle with clarified butter.'
  },
  {
    id: 'shahi-phirni',
    name: 'Zafrani Phirni in Clay Sakora',
    hindiName: 'शाही फिरनी सकूरा',
    price: 160,
    description: 'Ground rice pudding slow cooked with whole milk, cardamom, and pistachio served chilled in terracotta.'
  },
  {
    id: 'khamiri-roti',
    name: 'Mughlai Khamiri Roti (2 pcs)',
    hindiName: 'ख़मीरी रोटी',
    price: 110,
    description: 'Naturally leavened soft pillowy Awadhi bread baked on burning embers.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    dishId: 'galawati-kebab',
    author: 'Nawabzada Tariq Khan',
    location: 'Chowk, Old Lucknow',
    rating: 5,
    date: 'Yesterday',
    comment: 'SubhanAllah! True to the authentic Awadhi dastarkhwan, the Galawati dissolves in the mouth before your teeth even meet it. Sandalwood smoke and the 160 potli spices are balanced with peerless perfection. Delivered piping hot in sealed brass-foil degh packaging in just 28 minutes.',
    verified: true
  },
  {
    id: 'rev-2',
    dishId: 'galawati-kebab',
    author: 'Dr. Shalini Srivastava',
    location: 'Gomti Nagar, Lucknow',
    rating: 5,
    date: '3 days ago',
    comment: 'We ordered this for a family feast at Gomti Nagar. The Sheermal pairing is heavenly—the saffron aroma filled our entire dining room. Best instant delivery experience in Lucknow hands down!',
    verified: true
  },
  {
    id: 'rev-3',
    dishId: 'galawati-kebab',
    author: 'Aditya Mathur',
    location: 'Hazratganj, Lucknow',
    rating: 5,
    date: '1 week ago',
    comment: 'The hallmark of great Galawati is zero gristle, silky texture, and delicate aroma. The Mughal Dastarkhwan remains the undisputed crown jewel of Lucknow.',
    verified: true
  },
  {
    id: 'rev-4',
    dishId: 'dum-biryani',
    author: 'Syed Farhan Ali',
    location: 'Aliganj, Lucknow',
    rating: 5,
    date: '2 days ago',
    comment: 'The fragrant steam of kewra and pure saffron when breaking open the puran flour dough seal was sheer poetry. Meat fell off the bone gracefully.',
    verified: true
  },
  {
    id: 'rev-5',
    dishId: 'dum-biryani',
    author: 'Meenakshi Kapoor',
    location: 'Indira Nagar, Lucknow',
    rating: 5,
    date: '4 days ago',
    comment: 'Authentic Awadhi biryani—gentle, aromatic, not drowned in burning chilies like commercial biryanis. Delivered in 35 mins with chilled Burani raita.',
    verified: true
  },
  {
    id: 'rev-6',
    dishId: 'nalli-nihari',
    author: 'Mirza Danish Beg',
    location: 'Aminabad, Lucknow',
    rating: 5,
    date: 'Yesterday',
    comment: 'The 12-hour slow simmer shows in the gelatinous, rich bone marrow reduction. The ginger slivers and khamiri roti pairing transported me straight to Old Lucknow.',
    verified: true
  },
  {
    id: 'rev-7',
    dishId: 'boti-kebab',
    author: 'Rohan Deshmukh',
    location: 'Hazratganj, Lucknow',
    rating: 5,
    date: '3 days ago',
    comment: 'Charcoal charred on the outside, incredibly juicy inside. You can taste the wild caraway and smoky mustard basting.',
    verified: true
  },
  {
    id: 'rev-8',
    dishId: 'paneer-lazeez',
    author: 'Sunita Agrawal',
    location: 'Mahanagar, Lucknow',
    rating: 5,
    date: '5 days ago',
    comment: 'A masterpiece for vegetarians. The melon seed and roasted almond cream velvety gravy is sheer royalty. Highly recommended!',
    verified: true
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'historic-facade',
    title: 'The Historic Facade & Urdu Crest',
    subtitle: 'Hazratganj Landmark',
    description: 'Recognized across the subcontinent as the timeless benchmark of Awadhi cuisine and courtly warmth.',
    image: '/assets/aistudio/unnamed_dc341110.jpg',
    tag: 'Hazratganj Landmark',
    colSpanDesktop: 'md:col-span-7'
  },
  {
    id: 'open-embers',
    title: 'The Open Embers',
    subtitle: 'Sigri Artistry',
    description: 'Skewered seekh and chicken cooked to golden perfection over glowing fruitwood charcoals.',
    image: '/assets/aistudio/download_14514960.jfif',
    tag: 'Live Sigri Bhatti',
    colSpanDesktop: 'md:col-span-5'
  },
  {
    id: 'wooden-archway',
    title: 'The Grand Wooden Archway',
    subtitle: 'Nawabi Foyer',
    description: 'Intricate wood and brass craftsmanship welcoming discerning gastronomes into our heritage chambers.',
    image: '/assets/aistudio/unnamed__1__8be86869.jpg',
    tag: 'Heritage Portal',
    colSpanDesktop: 'md:col-span-5'
  },
  {
    id: 'dastarkhwan-feast',
    title: 'Daawat-e-Khaas Feast',
    subtitle: 'The Royal Spread',
    description: 'An opulent royal ensemble of melt-in-mouth Galawat Kebabs, Nihari, fragrant gravies, and saffron Sheermal.',
    image: '/assets/aistudio/unnamed__2__2503d562.jpg',
    tag: 'Dastarkhwan Spread',
    colSpanDesktop: 'md:col-span-7'
  },
  {
    id: 'golden-arches-estate',
    title: 'Royal Arches Estate',
    subtitle: 'Awadhi Architecture',
    description: 'The iconic golden arched pavilions of The Mughal Dastarkhwan estate in Hazratganj.',
    image: '/assets/aistudio/unnamed__4__fa9b6c6e.jpg',
    tag: 'Heritage Estate',
    colSpanDesktop: 'md:col-span-7'
  },
  {
    id: 'official-crest',
    title: 'House of Mughlai Delicacies',
    subtitle: 'The Royal Insignia',
    description: 'Honouring the Nawabi culinary legacy and courtly tehzeeb of Lucknow.',
    image: '/assets/aistudio/unnamed__3__8ceca9c8.jpg',
    tag: 'Royal Insignia',
    colSpanDesktop: 'md:col-span-5'
  }
];

export const TESTIMONIALS = [
  {
    quote: "The Galawati Kebab here dissolves on the tongue with the softness of a whispered verse. Nowhere else in India can rival this pedigree of Dum Pukht.",
    author: "Prof. Irfan Habib",
    designation: "Historian & Cultural Biographer of Awadh",
    verified: "Patron since 1982"
  },
  {
    quote: "Dining here is entering a sacred sanctuary of culinary adab. The perfume of sandalwood smoke and rosewater is unforgettable.",
    author: "Sanjoy Roy",
    designation: "Cultural Connoisseur & Festival Director",
    verified: "Dine-in Guest"
  }
];
