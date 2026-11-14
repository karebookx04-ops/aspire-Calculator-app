/* ==========================================================================
   ASPIRE ENTERPRISES STORE — SAARA CONTENT IS FILE MEIN HAI
   Products, price, photo, offer, delivery charge, policy: sab yahin badlein.
   Website ka design (index.html) chhedne ki zaroorat nahi.

   NIYAM (rules), taaki website na tute:
   - Text hamesha "double quotes" ke andar likhein.
   - Har line/item ke baad comma ( , ) lagayein, jaisa pehle se laga hai.
   - Price sirf number mein likhein: 899  (₹ ya comma nahi).
   - Badalne ke baad page refresh karke check karein.
   ========================================================================== */

/* ---------- 1. DUKAAN KI JAANKARI ---------- */
const STORE = {
  name: "Aspire Enterprises",
  whatsapp: "919990602827",     // 91 + mobile number, bina + aur space ke
  phone: "+91 99906 02827",
  email: "",                        // email ho to likhein, jaise "sales@aspire.in"
  address: "Second Floor, A-3, Kh. No. 1ETC/30/2, Main Wazirabad Road, Brijpuri, New Delhi 110094",
  hours_en: "Mon to Sat, 10 am to 7 pm",
  hours_hi: "सोम से शनि, सुबह 10 से शाम 7",
  freeShipAbove: 499,       // itne ₹ ya zyada par delivery free
  shipping: 49,             // usse kam par delivery charge (₹)
  returnDays: 7,            // kitne din mein return/badlav
  dispatchDays: "1-2",     // order kitne din mein bhejte hain
  deliveryDays: "3-7"      // delivery mein kitne din
};

/* ---------- 2. COUPON / OFFER ----------
   type "pct"  = percent chhoot (max = zyada se zyada kitne ₹)
   type "flat" = seedhe ₹ chhoot
   min = kam se kam itne ₹ ka order ho
   Pehla coupon home page aur upar ki patti par dikhta hai. */
const COUPONS = [
  {"code":"WELCOME10","type":"pct","value":10,"max":200,"min":0,"en":"10% off your first order (up to ₹200)","hi":"पहले ऑर्डर पर 10% छूट (₹200 तक)"},
  {"code":"ASPIRE100","type":"flat","value":100,"min":1499,"en":"₹100 off on orders of ₹1,499 or more","hi":"₹1,499 या ज़्यादा के ऑर्डर पर ₹100 छूट"}
];

/* ---------- 3. CATEGORY ---------- */
const CATEGORIES = [
  {"id":"bags","name":"Bags","sub":"Laptop bags, hand bags"},
  {"id":"covers","name":"Appliance covers","sub":"Washing machine, AC"}
];

/* ---------- 4. PRODUCTS ----------
   Naya product jodne ke liye: ek poora { ... } block copy karke neeche paste karein
   aur sab cheezein badal dein. "id" chhota, angrezi, bina space (jaise "trolley-bag").

   id          : product ka naam-pehchaan (web address mein aata hai)
   cat         : "bags" ya "covers"
   type        : "Laptop bags", "Hand bags", "Washing machine covers", "AC covers", "Kitchen appliance covers"
   name / name_hi     : naam angrezi / hindi mein
   price / mrp        : bechne ka daam / MRP (kata hua daam)
   tag         : photo par chhota label, jaise "Bestseller" ya "New". Na chahiye to "" rakhein
   photo       : main photo, photos folder mein (1200x1200, saaf)
   more_photos : aur photos, jaise ["photos/laptop-backpack-2.jpg", "photos/laptop-backpack-3.jpg"]
   colours     : ["Rang ka naam", "#rang-code"]
   sizes       : saare size. Size na ho to yeh line hata dein
   points / points_hi : product ki khaas baatein
   size_guide  : size table (cm). cols = upar ke naam, rows = har size ki line
   reviews     : asli customer reviews, jaise
                 {name:"Rahul, Delhi", stars:5, date:"Dec 2026", text:"Achha bag hai"}
   ------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "laptop-backpack",
    cat: "bags",
    type: "Laptop bags",
    name: "Laptop Backpack 15.6 inch",
    name_hi: "लैपटॉप बैकपैक 15.6 इंच",
    price: 899,
    mrp: 1499,
    tag: "Bestseller",
    photo: "photos/laptop-backpack.jpg",
    more_photos: [],
    colours: [["Black","#1A1A1A"],["Grey","#6B6F75"],["Navy","#22324F"]],
    points: [
      "Padded laptop section for up to 15.6 inch",
      "Two main compartments and front zip pocket",
      "Padded shoulder straps for daily use",
      "Water resistant fabric"
    ],
    points_hi: [
      "15.6 इंच तक के लैपटॉप के लिए गद्देदार हिस्सा",
      "दो बड़े कम्पार्टमेंट और आगे ज़िप पॉकेट",
      "रोज़ के इस्तेमाल के लिए गद्देदार स्ट्रैप",
      "पानी से बचाने वाला कपड़ा"
    ],
    size_guide: {
      cols: ["Laptop","Fits up to (L × W × H)"],
      rows: [
      ["Up to 15.6 inch","37 × 26 × 3"]
    ]
    },
    reviews: [],
    art: "backpack"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "office-laptop-bag",
    cat: "bags",
    type: "Laptop bags",
    name: "Office Laptop Bag with Shoulder Strap",
    name_hi: "ऑफिस लैपटॉप बैग, शोल्डर स्ट्रैप के साथ",
    price: 799,
    mrp: 1299,
    tag: "",
    photo: "photos/office-laptop-bag.jpg",
    more_photos: [],
    colours: [["Black","#1A1A1A"],["Brown","#6B4430"]],
    points: [
      "Fits laptops up to 15.6 inch",
      "Separate pocket for charger and files",
      "Detachable shoulder strap and top handle",
      "Strong zips and stitched corners"
    ],
    points_hi: [
      "15.6 इंच तक के लैपटॉप के लिए",
      "चार्जर और फाइल के लिए अलग पॉकेट",
      "निकलने वाला शोल्डर स्ट्रैप और हैंडल",
      "मज़बूत ज़िप और सिले हुए कोने"
    ],
    size_guide: {
      cols: ["Laptop","Fits up to (L × W × H)"],
      rows: [
      ["Up to 15.6 inch","37 × 26 × 3"]
    ]
    },
    reviews: [],
    art: "laptop"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "tote-bag",
    cat: "bags",
    type: "Hand bags",
    name: "Everyday Tote Hand Bag",
    name_hi: "रोज़ाना टोट हैंड बैग",
    price: 649,
    mrp: 999,
    tag: "New",
    photo: "photos/tote-bag.jpg",
    more_photos: [],
    colours: [["Tan","#B57B4C"],["Black","#1A1A1A"],["Maroon","#6E1F2A"]],
    points: [
      "Roomy main section with inner zip pocket",
      "Comfortable double handles",
      "Magnetic snap closure",
      "Easy to wipe clean"
    ],
    points_hi: [
      "बड़ा हिस्सा और अंदर ज़िप पॉकेट",
      "आरामदायक दो हैंडल",
      "मैग्नेटिक बटन",
      "आसानी से साफ़ होता है"
    ],
    reviews: [],
    art: "tote"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "sling-bag",
    cat: "bags",
    type: "Hand bags",
    name: "Compact Sling Bag",
    name_hi: "कॉम्पैक्ट स्लिंग बैग",
    price: 499,
    mrp: 799,
    tag: "",
    photo: "photos/sling-bag.jpg",
    more_photos: [],
    colours: [["Black","#1A1A1A"],["Beige","#CDB89A"],["Olive","#5C6440"]],
    points: [
      "Adjustable cross-body strap",
      "Front pocket for phone and cards",
      "Light and easy to carry",
      "Zip closure"
    ],
    points_hi: [
      "एडजस्ट होने वाला क्रॉस-बॉडी स्ट्रैप",
      "फ़ोन और कार्ड के लिए आगे पॉकेट",
      "हल्का और ले जाने में आसान",
      "ज़िप बंद"
    ],
    reviews: [],
    art: "sling"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "wm-cover-top",
    cat: "covers",
    type: "Washing machine covers",
    name: "Top Load Washing Machine Cover",
    name_hi: "टॉप लोड वॉशिंग मशीन कवर",
    price: 399,
    mrp: 699,
    tag: "Bestseller",
    photo: "photos/wm-cover-top.jpg",
    more_photos: [],
    colours: [["Grey","#7A7F86"],["Blue","#2E5C8A"],["Maroon","#6E1F2A"]],
    sizes: ["6-6.5 kg","7-7.5 kg","8-9 kg"],
    points: [
      "Keeps out dust, sun and water",
      "Thick waterproof fabric",
      "Zip opening on the lid for easy use",
      "Elastic bottom for a snug fit"
    ],
    points_hi: [
      "धूल, धूप और पानी से बचाव",
      "मोटा वॉटरप्रूफ़ कपड़ा",
      "ढक्कन पर ज़िप, इस्तेमाल में आसान",
      "नीचे इलास्टिक, सही फ़िटिंग"
    ],
    size_guide: {
      cols: ["Size","Height","Width","Depth"],
      rows: [
      ["6-6.5 kg","85-90","52-54","52-55"],
      ["7-7.5 kg","90-95","54-56","55-58"],
      ["8-9 kg","95-100","57-60","58-62"]
    ]
    },
    reviews: [],
    art: "wm-top"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "wm-cover-front",
    cat: "covers",
    type: "Washing machine covers",
    name: "Front Load Washing Machine Cover",
    name_hi: "फ्रंट लोड वॉशिंग मशीन कवर",
    price: 449,
    mrp: 749,
    tag: "",
    photo: "photos/wm-cover-front.jpg",
    more_photos: [],
    colours: [["Grey","#7A7F86"],["Blue","#2E5C8A"]],
    sizes: ["6-7 kg","7.5-8 kg","9-10 kg"],
    points: [
      "Front zip window for the door",
      "Waterproof and dustproof",
      "Fits most front load brands",
      "Machine washable"
    ],
    points_hi: [
      "दरवाज़े के लिए आगे ज़िप खिड़की",
      "वॉटरप्रूफ़ और डस्टप्रूफ़",
      "ज़्यादातर फ्रंट लोड ब्रांड में फ़िट",
      "मशीन में धुल सकता है"
    ],
    size_guide: {
      cols: ["Size","Height","Width","Depth"],
      rows: [
      ["6-7 kg","84-86","59-60","50-55"],
      ["7.5-8 kg","84-86","59-60","55-60"],
      ["9-10 kg","84-86","59-60","60-65"]
    ]
    },
    reviews: [],
    art: "wm-front"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "ac-split-set",
    cat: "covers",
    type: "AC covers",
    name: "Split AC Cover Set (Indoor + Outdoor)",
    name_hi: "स्प्लिट एसी कवर सेट (इनडोर + आउटडोर)",
    price: 549,
    mrp: 899,
    tag: "Value pack",
    photo: "photos/ac-split-set.jpg",
    more_photos: [],
    colours: [["Grey","#7A7F86"],["Beige","#CDB89A"]],
    sizes: ["1 ton","1.5 ton","2 ton"],
    points: [
      "Set of 2: indoor and outdoor unit covers",
      "Protects from rain, dust and sun",
      "Elastic edges for a tight fit",
      "Easy to put on and remove"
    ],
    points_hi: [
      "2 कवर का सेट: इनडोर और आउटडोर यूनिट",
      "बारिश, धूल और धूप से बचाव",
      "इलास्टिक किनारे, टाइट फ़िटिंग",
      "लगाना और निकालना आसान"
    ],
    size_guide: {
      cols: ["Size","Indoor (W × H × D)","Outdoor (W × H × D)"],
      rows: [
      ["1 ton","80-85 × 28 × 20","70 × 50 × 25"],
      ["1.5 ton","90-100 × 30 × 22","80 × 55 × 30"],
      ["2 ton","100-110 × 32 × 24","85 × 60 × 32"]
    ]
    },
    reviews: [],
    art: "ac-split"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "laptop-sleeve",
    cat: "bags",
    type: "Laptop bags",
    name: "Padded Laptop Sleeve 14 inch",
    name_hi: "गद्देदार लैपटॉप स्लीव 14 इंच",
    price: 399,
    mrp: 699,
    tag: "",
    photo: "photos/laptop-sleeve.jpg",
    more_photos: [],
    colours: [["Black","#1A1A1A"],["Grey","#6B6F75"],["Navy","#22324F"]],
    points: [
      "Slim padded sleeve for laptops up to 14 inch",
      "Soft inner lining to prevent scratches",
      "Front pocket for charger and mouse",
      "Fits inside a backpack"
    ],
    points_hi: [
      "14 इंच तक के लैपटॉप के लिए पतली गद्देदार स्लीव",
      "अंदर मुलायम परत, खरोंच से बचाव",
      "चार्जर और माउस के लिए आगे पॉकेट",
      "बैकपैक के अंदर आराम से आती है"
    ],
    size_guide: {
      cols: ["Laptop","Fits up to (L × W × H)"],
      rows: [
      ["Up to 14 inch","33 × 23 × 2"]
    ]
    },
    reviews: [],
    art: "sleeve"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "shoulder-bag",
    cat: "bags",
    type: "Hand bags",
    name: "Ladies Shoulder Hand Bag",
    name_hi: "लेडीज़ शोल्डर हैंड बैग",
    price: 749,
    mrp: 1199,
    tag: "",
    photo: "photos/shoulder-bag.jpg",
    more_photos: [],
    colours: [["Black","#1A1A1A"],["Tan","#B57B4C"],["Pink","#C98A94"]],
    points: [
      "Three sections with zip middle pocket",
      "Long shoulder strap and short handle",
      "Gold-tone zips and buckle",
      "Fits phone, wallet and diary"
    ],
    points_hi: [
      "तीन हिस्से, बीच में ज़िप पॉकेट",
      "लंबा शोल्डर स्ट्रैप और छोटा हैंडल",
      "गोल्डन ज़िप और बकल",
      "फ़ोन, पर्स और डायरी आ जाती है"
    ],
    reviews: [],
    art: "shoulder"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "ac-outdoor",
    cat: "covers",
    type: "AC covers",
    name: "AC Outdoor Unit Cover",
    name_hi: "एसी आउटडोर यूनिट कवर",
    price: 349,
    mrp: 599,
    tag: "",
    photo: "photos/ac-outdoor.jpg",
    more_photos: [],
    colours: [["Grey","#7A7F86"],["Beige","#CDB89A"]],
    sizes: ["1 ton","1.5 ton","2 ton"],
    points: [
      "Protects the outdoor unit in winter and rain",
      "Thick waterproof fabric",
      "Elastic bottom stays in place in wind",
      "Remove before running the AC"
    ],
    points_hi: [
      "सर्दी और बारिश में आउटडोर यूनिट का बचाव",
      "मोटा वॉटरप्रूफ़ कपड़ा",
      "नीचे इलास्टिक, हवा में नहीं उड़ता",
      "एसी चलाने से पहले हटा दें"
    ],
    size_guide: {
      cols: ["Size","Width","Height","Depth"],
      rows: [
      ["1 ton","70","50","25"],
      ["1.5 ton","80","55","30"],
      ["2 ton","85","60","32"]
    ]
    },
    reviews: [],
    art: "ac-outdoor"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "microwave-cover",
    cat: "covers",
    type: "Kitchen appliance covers",
    name: "Microwave Oven Cover",
    name_hi: "माइक्रोवेव ओवन कवर",
    price: 299,
    mrp: 499,
    tag: "New",
    photo: "photos/microwave-cover.jpg",
    more_photos: [],
    colours: [["Grey","#7A7F86"],["Maroon","#6E1F2A"],["Blue","#2E5C8A"]],
    sizes: ["20-25 L","28-32 L"],
    points: [
      "Keeps dust and oil off the oven",
      "Side pockets for gloves and remote",
      "Washable fabric",
      "Fits most solo and convection ovens"
    ],
    points_hi: [
      "ओवन को धूल और तेल से बचाता है",
      "ग्लव्स और रिमोट के लिए साइड पॉकेट",
      "धुलने वाला कपड़ा",
      "ज़्यादातर सोलो और कन्वेक्शन ओवन में फ़िट"
    ],
    size_guide: {
      cols: ["Size","Fits oven up to (W × H × D)"],
      rows: [
      ["20-25 L","46 × 27 × 35"],
      ["28-32 L","52 × 31 × 40"]
    ]
    },
    reviews: [],
    art: "microwave"      // photo na ho to yeh drawing dikhti hai
  },
  {
    id: "ac-window",
    cat: "covers",
    type: "AC covers",
    name: "Window AC Cover",
    name_hi: "विंडो एसी कवर",
    price: 449,
    mrp: 749,
    tag: "",
    photo: "photos/ac-window.jpg",
    more_photos: [],
    colours: [["Grey","#7A7F86"],["Blue","#2E5C8A"]],
    sizes: ["0.75-1 ton","1.5 ton","2 ton"],
    points: [
      "Covers the outside part of the window AC",
      "Waterproof coated fabric",
      "Strong elastic and tie straps",
      "Folds small for storage"
    ],
    points_hi: [
      "विंडो एसी के बाहर वाले हिस्से को ढकता है",
      "वॉटरप्रूफ़ कोटेड कपड़ा",
      "मज़बूत इलास्टिक और बाँधने वाले स्ट्रैप",
      "छोटा मोड़कर रख सकते हैं"
    ],
    size_guide: {
      cols: ["Size","Width","Height","Depth"],
      rows: [
      ["0.75-1 ton","56","38","52"],
      ["1.5 ton","66","43","67"],
      ["2 ton","66","43","75"]
    ]
    },
    reviews: [],
    art: "ac-window"      // photo na ho to yeh drawing dikhti hai
  }
];

/* ---------- 5. HINDI NAAM (type, rang, category) ---------- */
const TYPE_HI={"Laptop bags":"लैपटॉप बैग","Hand bags":"हैंड बैग","Washing machine covers":"वॉशिंग मशीन कवर","AC covers":"एसी कवर","Kitchen appliance covers":"किचन अप्लायंस कवर"};
const COL_HI={"Black":"काला","Grey":"ग्रे","Navy":"नेवी ब्लू","Brown":"भूरा","Tan":"टैन","Maroon":"मैरून","Beige":"बेज","Olive":"ऑलिव","Blue":"नीला","Pink":"गुलाबी"};
const CAT_HI={"bags":"बैग","covers":"अप्लायंस कवर"};

/* ======================================================================
   POLICY PAGES (English / Hindi)
   ====================================================================== */
function policyHTML(key){
 const S=STORE, hi=LANG==="hi";
 const P={
 shipping: hi?`
  <h3>डिलीवरी कहाँ होती है</h3><p>हम पूरे भारत में डिलीवरी करते हैं, जहाँ कूरियर सेवा पहुँचती है।</p>
  <h3>कितना समय लगता है</h3><ul><li>ऑर्डर पक्का होने के ${S.dispatchDays} कामकाजी दिन में पार्सल भेजा जाता है।</li><li>दिल्ली NCR में आमतौर पर 2-3 दिन, बाकी भारत में ${S.deliveryDays} कामकाजी दिन लगते हैं।</li><li>रविवार और छुट्टी के दिन पार्सल नहीं भेजे जाते।</li></ul>
  <h3>डिलीवरी चार्ज</h3><ul><li>₹${S.freeShipAbove} या ज़्यादा के ऑर्डर पर डिलीवरी फ़्री है।</li><li>इससे कम के ऑर्डर पर ₹${S.shipping} डिलीवरी चार्ज लगता है।</li><li>कैश ऑन डिलीवरी पर कोई अलग चार्ज नहीं है।</li></ul>
  <h3>ट्रैकिंग</h3><p>पार्सल भेजने के बाद हम ट्रैकिंग नंबर आपके WhatsApp पर भेजते हैं।</p>
  <h3>पार्सल लेते समय</h3><p>अगर पैकेट फटा या खुला हुआ हो, तो डिलीवरी न लें या पैकेट खोलते समय वीडियो बनाएं। इससे शिकायत जल्दी सुलझती है।</p>`:`
  <h3>Where we deliver</h3><p>We deliver across India to all pincodes served by our courier partners.</p>
  <h3>Delivery time</h3><ul><li>Orders are dispatched within ${S.dispatchDays} working days after confirmation.</li><li>Delivery usually takes 2-3 days in Delhi NCR and ${S.deliveryDays} working days in the rest of India.</li><li>Parcels are not dispatched on Sundays and public holidays.</li></ul>
  <h3>Delivery charges</h3><ul><li>Free delivery on orders of ₹${S.freeShipAbove} or more.</li><li>A delivery charge of ₹${S.shipping} applies below that.</li><li>No extra charge for cash on delivery.</li></ul>
  <h3>Tracking</h3><p>Once your parcel is shipped, we send the tracking number to your WhatsApp.</p>
  <h3>When you receive the parcel</h3><p>If the package looks torn or opened, refuse the delivery or record a video while opening it. This helps us settle any complaint quickly.</p>`,
 returns: hi?`
  <h3>${S.returnDays} दिन में वापसी</h3><p>डिलीवरी के ${S.returnDays} दिन के अंदर आप इन हालात में वापसी या बदलाव माँग सकते हैं:</p><ul><li>सामान टूटा, फटा या खराब निकला।</li><li>गलत प्रोडक्ट, रंग या साइज़ आया।</li><li>साइज़ फ़िट नहीं हुआ (एक बार बदलाव, सामान बिना इस्तेमाल हो)।</li></ul>
  <h3>शर्तें</h3><ul><li>सामान इस्तेमाल न किया हो, धुला न हो, और टैग व पैकिंग साथ हो।</li><li>पैकेट खोलते समय का वीडियो या फ़ोटो भेजें।</li><li>साइज़ बदलवाने पर वापसी का कूरियर खर्च ग्राहक देगा। हमारी गलती होने पर पूरा खर्च हम देंगे।</li></ul>
  <h3>कैसे माँगें</h3><p>WhatsApp ${S.phone} पर अपना नाम, ऑर्डर की जानकारी और फ़ोटो/वीडियो भेजें। हम 2 कामकाजी दिन में जवाब देंगे।</p>
  <h3>रिफ़ंड</h3><p>वापस आया सामान जाँचने के बाद 5-7 कामकाजी दिन में पैसा आपके UPI या बैंक खाते में भेज दिया जाता है। कैश ऑन डिलीवरी वाले ऑर्डर का रिफ़ंड भी UPI/बैंक में होता है।</p>`:`
  <h3>${S.returnDays}-day returns</h3><p>Within ${S.returnDays} days of delivery you can ask for a return or replacement if:</p><ul><li>The item arrived damaged, torn or defective.</li><li>You received the wrong product, colour or size.</li><li>The size does not fit (one exchange, item unused).</li></ul>
  <h3>Conditions</h3><ul><li>The item must be unused and unwashed, with tags and original packing.</li><li>Please share an unboxing video or photos.</li><li>For size exchanges the customer pays the return courier charge. If the mistake is ours, we pay all charges.</li></ul>
  <h3>How to request</h3><p>WhatsApp us at ${S.phone} with your name, order details and photos or video. We reply within 2 working days.</p>
  <h3>Refunds</h3><p>After we receive and check the item, the refund is sent to your UPI or bank account within 5-7 working days. Cash on delivery orders are also refunded to UPI or bank.</p>`,
 privacy: hi?`
  <h3>हम क्या जानकारी लेते हैं</h3><p>ऑर्डर के लिए आपका नाम, मोबाइल नंबर, पता, पिनकोड, और ज़रूरत हो तो GSTIN।</p>
  <h3>किसलिए</h3><ul><li>ऑर्डर पक्का करने, डिलीवरी करने और GST बिल बनाने के लिए।</li><li>ऑर्डर के बारे में WhatsApp या कॉल पर बात करने के लिए।</li></ul>
  <h3>किसके साथ साझा होती है</h3><p>सिर्फ़ कूरियर कंपनी के साथ, ताकि पार्सल पहुँच सके। हम आपकी जानकारी कभी बेचते नहीं हैं।</p>
  <h3>यह वेबसाइट</h3><p>आपका कार्ट, पसंदीदा लिस्ट और भाषा आपके अपने ब्राउज़र में सेव होती है। हम कोई विज्ञापन ट्रैकिंग नहीं करते।</p>
  <h3>आपकी जानकारी हटवाना</h3><p>अपनी जानकारी देखने या हटवाने के लिए WhatsApp ${S.phone} पर लिखें। GST कानून के लिए ज़रूरी बिल रिकॉर्ड हम रखते हैं।</p>`:`
  <h3>What we collect</h3><p>To process an order we collect your name, mobile number, address, pincode and, if you give it, your GSTIN.</p>
  <h3>Why we use it</h3><ul><li>To confirm and deliver your order and make your GST invoice.</li><li>To contact you about your order on WhatsApp or by call.</li></ul>
  <h3>Who we share it with</h3><p>Only with our courier partner, so the parcel can reach you. We never sell your information.</p>
  <h3>This website</h3><p>Your cart, wishlist and language choice are saved in your own browser. We do not use advertising trackers.</p>
  <h3>Your choices</h3><p>To see or delete your details, WhatsApp us at ${S.phone}. We keep invoice records that GST law requires.</p>`,
 terms: hi?`
  <h3>दाम</h3><p>सभी दाम भारतीय रुपये में हैं और इनमें GST शामिल है। दाम और ऑफ़र बिना सूचना के बदल सकते हैं। ऑर्डर के समय वाला दाम ही लगेगा।</p>
  <h3>ऑर्डर</h3><ul><li>ऑर्डर WhatsApp या कॉल पर पक्का करने के बाद ही माना जाता है।</li><li>स्टॉक न होने पर हम ऑर्डर रद्द कर सकते हैं। पहले से दिया पैसा पूरा लौटाया जाएगा।</li></ul>
  <h3>प्रोडक्ट</h3><p>फ़ोटो असली प्रोडक्ट जैसी दिखाने की कोशिश है, फिर भी स्क्रीन के कारण रंग थोड़ा अलग लग सकता है। साइज़ लगभग हैं।</p>
  <h3>कूपन</h3><p>एक ऑर्डर पर एक ही कूपन लगेगा। कूपन नकद में नहीं बदले जा सकते।</p>
  <h3>कानून</h3><p>ये शर्तें भारत के कानून के अनुसार हैं। किसी विवाद में नई दिल्ली की अदालतें मान्य होंगी।</p>
  <h3>विक्रेता</h3><p>Aspire Enterprises (प्रोप्राइटरशिप), GSTIN 07BMCPH3880E1Z8, ${S.address}।</p>`:`
  <h3>Prices</h3><p>All prices are in Indian Rupees and include GST. Prices and offers may change without notice. The price at the time of your order applies.</p>
  <h3>Orders</h3><ul><li>An order is accepted only after we confirm it on WhatsApp or by call.</li><li>We may cancel an order if the item is out of stock. Any amount paid is refunded in full.</li></ul>
  <h3>Products</h3><p>We try to show products accurately, but colours can look slightly different on screens. Sizes are approximate.</p>
  <h3>Coupons</h3><p>Only one coupon can be used per order. Coupons cannot be exchanged for cash.</p>
  <h3>Law</h3><p>These terms follow the laws of India. Courts in New Delhi have jurisdiction over any dispute.</p>
  <h3>Seller</h3><p>Aspire Enterprises (Proprietorship), GSTIN 07BMCPH3880E1Z8, ${S.address}.</p>`
 };
 return P[key];
}
const FAQ=[
 ["How do I place an order?","ऑर्डर कैसे करें?","Add products to the cart, fill in your delivery details and tap “Place order”. Then send the order details to us on WhatsApp. We confirm by call or message.","प्रोडक्ट कार्ट में डालें, डिलीवरी की जानकारी भरें और “ऑर्डर करें” दबाएं। फिर ऑर्डर की जानकारी हमें WhatsApp पर भेजें। हम कॉल या मैसेज से पक्का करेंगे।"],
 ["Is cash on delivery available?","क्या कैश ऑन डिलीवरी है?","Yes, across India. You can also pay by UPI before dispatch.","हाँ, पूरे भारत में। आप भेजने से पहले UPI से भी भुगतान कर सकते हैं।"],
 ["How long does delivery take?","डिलीवरी में कितने दिन लगते हैं?","Orders are dispatched in {dispatch} working days. Delivery takes 2-3 days in Delhi NCR and {delivery} working days elsewhere.","ऑर्डर {dispatch} कामकाजी दिन में भेजा जाता है। दिल्ली NCR में 2-3 दिन और बाकी जगह {delivery} कामकाजी दिन लगते हैं।"],
 ["Is delivery free?","क्या डिलीवरी फ़्री है?","Yes, on orders of ₹{free} or more. Below that it costs ₹{ship}.","हाँ, ₹{free} या ज़्यादा के ऑर्डर पर। इससे कम पर ₹{ship} लगते हैं।"],
 ["Which size of cover should I buy?","कौन सा साइज़ का कवर लूँ?","Check your machine's capacity (kg) or AC tonnage, then see the size guide on the product page. If unsure, send us a photo of your appliance on WhatsApp.","अपनी मशीन की क्षमता (kg) या एसी का टन देखें, फिर प्रोडक्ट पेज पर साइज़ गाइड देखें। पक्का न हो तो सामान की फ़ोटो WhatsApp पर भेजें।"],
 ["Can I return or exchange?","क्या वापसी या बदलाव हो सकता है?","Yes, within {days} days for damaged, defective or wrong items, and one size exchange for unused items. See the return policy.","हाँ, टूटे, खराब या गलत सामान के लिए {days} दिन में, और बिना इस्तेमाल सामान का एक बार साइज़ बदलाव। वापसी नीति देखें।"],
 ["Will I get a GST bill?","क्या GST बिल मिलेगा?","Yes, every order comes with a GST invoice. Add your GSTIN at checkout to get a business bill.","हाँ, हर ऑर्डर के साथ GST बिल मिलता है। बिज़नेस बिल के लिए चेकआउट पर अपना GSTIN डालें।"],
 ["Do you take bulk or wholesale orders?","क्या थोक ऑर्डर लेते हैं?","Yes. Shops, resellers and companies get factory prices. Custom colours and your logo are possible on bulk orders.","हाँ। दुकानदारों, रीसेलर और कंपनियों को फ़ैक्ट्री रेट मिलते हैं। थोक ऑर्डर पर अपना रंग और लोगो भी बन सकता है।"]
];
