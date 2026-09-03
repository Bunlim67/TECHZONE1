function imgTag({ src, seed, size = 400, alt = '', cls = '' }){
  const fallback = `https://picsum.photos/seed/${seed}/${size}/${size}`;
  return `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy"
            onerror="this.onerror=null;this.src='${fallback}';">`;
}
const translations = {
  en: {
    navHome:"Home", navShop:"Shop", navCollection:"Collection", navBlog:"Blog", navContact:"Contact",
    topWarranty:"1 Year Warranty", topShipping2:"Free Shipping", topSupport:"24/7 Support",
    heroBadge:"NEW ARRIVALS", heroTitle1:"SMART TECH", heroTitle2:"BETTER LIFE",
    heroLead:"Discover the latest smart devices that power your productivity and entertainment.",
    heroBtnShop:"Shop Now →", heroBtnDeals:"View Deals",
    feat1Title:"Premium Quality", feat1Desc:"Carefully selected",
    feat2Title:"Best Prices", feat2Desc:"Affordable & competitive",
    feat3Title:"Easy Returns", feat3Desc:"30-day money back",
    feat4Title:"Secure Checkout", feat4Desc:"100% safe",
    catEyebrow:"BROWSE COLLECTIONS", catTitle:"Shop by Category", catViewAll:"View All Categories →",
    catSmartphones:"Smartphones", catLaptops:"Laptops", catSmartwatches:"Smartwatches", catGaming:"Gaming",
    shopEyebrow:"FROM OUR CATALOG", shopTitle:"Shop All Products",
    searchPlaceholder:"Search products by name...",
    filterCategoryLabel:"Category", filterBrandLabel:"Brand", filterAll:"All",
    clearFilters:"Clear Filters", noResultsMsg:"No products match your filters.", showMoreProducts:"Show more products",
    resultsCountLabel:"products found",
    sortPopularity:"Sort: Popularity", sortPriceLow:"Price: Low to High",
    sortPriceHigh:"Price: High to Low", sortNameAZ:"Name: A to Z",
    productsSuffix:"Products", addToCart:"Add to Cart", inStock:"in stock",
    detailBrand:"Brand", detailSpecs:"Specifications",
    collectionEyebrow:"CURATED FOR YOU", collectionTitle:"Our Collections",
    colNew:"New Arrivals", colBest:"Best Sellers", colGaming:"Gaming Zone", colHome:"Home & Office",
    blogEyebrow:"FROM THE BLOG", blogTitle:"Latest Articles", blogReadMore:"Read More →",
    contactEyebrow:"GET IN TOUCH", contactTitle:"Contact Us",
    contactAddrLabel:"Address", contactAddrValue:"Phnom Penh, Cambodia",
    contactPhoneLabel:"Phone", contactEmailLabel:"Email",
    contactHoursLabel:"Working Hours", contactHoursValue:"Mon - Sat: 8AM - 6PM",
    contactNamePh:"Your Name", contactEmailPh:"Your Email", contactMsgPh:"Your Message",
    contactSend:"Send Message", contactSentMsg:"✓ Message sent! We'll get back to you soon.",
    footerAbout:"Your trusted destination for smart gadgets and accessories.",
    footerQuickLinks:"Quick Links", footerCategories:"Categories",
    footerNewsletter:"Newsletter", footerNewsletterDesc:"Subscribe to get special offers.",
    footerSubscribe:"Subscribe", footerEmailPh:"Enter your email",
    footerCopyright:"© 2026 TECHZONE. All rights reserved.",
    cartTitle:"Shopping Cart", cartEmpty:"Your cart is empty", cartSubtotal:"Subtotal",
    cartCheckout:"Proceed to Checkout", cartRemove:"Remove",
    checkoutTitle:"Checkout", checkoutSubtitle:"Complete your order safely and quickly.", checkoutProtected:"Protected checkout • SSL secured", checkoutSecure:"SECURE CHECKOUT", checkoutStepInfo:"Information", checkoutStepPayment:"Payment", checkoutStepDone:"Confirmation",
    checkoutCustomerTitle:"Customer information", checkoutCustomerDesc:"Where should we deliver your order?", payPhone:"Phone Number", payCity:"City / Province", deliveryTitle:"Delivery method", deliveryFreeTitle:"Standard Delivery", deliveryFreeDesc:"2–4 business days • FREE", deliveryExpressTitle:"Express Delivery", deliveryExpressDesc:"1–2 business days • +$8", checkoutPaymentTitle:"Payment method", checkoutPaymentDesc:"Your payment details are encrypted and secure.",
    checkoutNamePh:"Enter your full name", checkoutAddressPh:"House number, street, city", checkoutCardPh:"1234 5678 9012 3456", checkoutSaveCard:"Save payment details for next time", checkoutSecurityNote:"Secure payment • Your card details are protected.",
    checkoutSummaryKicker:"YOUR ORDER", checkoutSummaryTitle:"Order Summary", promoPlaceholder:"Promo code", promoApply:"Apply", paymentMethodsLabel:"WE ACCEPT", summarySubtotal:"Subtotal", summaryDiscount:"Discount", summaryShipping:"Shipping", summaryFree:"FREE", summaryTax:"Estimated tax", summaryTotal:"Total",
    trustSecureTitle:"Secure payment", trustSecureDesc:"256-bit encrypted", trustShippingTitle:"Fast delivery", trustShippingDesc:"Free shipping available", trustReturnsTitle:"Easy returns", trustReturnsDesc:"30-day return policy", checkoutNeedHelp:"Need help? Contact our support team.",
    checkoutItems:"items", checkoutItem:"item", checkoutPhonePh:"+855 12 345 678", checkoutCityPh:"Phnom Penh", checkoutPhoneError:"Please enter a valid phone number.", checkoutCityError:"Please enter your city or province.", checkoutCardError:"Enter a valid 16-digit card number.", checkoutNameError:"Please enter your full name.", checkoutAddressError:"Please enter your shipping address.", checkoutExpiryError:"Enter a valid MM/YY date.", checkoutCvvError:"Enter a valid 3-digit CVV.", successKicker:"PAYMENT COMPLETE",
    payFullName:"Full Name", payAddress:"Shipping Address", payCardNumber:"Card Number", payExpiry:"Expiry Date", payCVV:"CVV", payPayNow:"Pay Now",
    successTitle:"Order Placed!", successMsg:"Thank you for your purchase. Your order is being processed.",
    successContinue:"Continue Shopping", orderNumberLabel:"Order Number",
    detailCategory:"Category", detailQty:"Quantity"
  },
  km: {
    navHome:"ទំព័រដើម", navShop:"ហាង", navCollection:"ជម្រើសពិសេស", navBlog:"អត្ថបទ", navContact:"ទំនាក់ទំនង",
    topWarranty:"ធានា 1 ឆ្នាំ", topShipping2:"ដឹកជញ្ជូនឥតគិតថ្លៃ", topSupport:"គាំទ្រ 24/7",
    heroBadge:"ទំនិញចូលថ្មី", heroTitle1:"បច្ចេកវិទ្យាឆ្លាតវៃ", heroTitle2:"ជីវិតកាន់តែប្រសើរ",
    heroLead:"ស្វែងរកឧបករណ៍ឆ្លាតវៃចុងក្រោយបំផុត ដែលជួយបង្កើនផលិតភាព និងការកម្សាន្តរបស់អ្នក។",
    heroBtnShop:"ទិញឥឡូវនេះ →", heroBtnDeals:"មើលការបញ្ចុះតម្លៃ",
    feat1Title:"គុណភាពខ្ពស់", feat1Desc:"ជ្រើសរើសយ៉ាងម៉ត់ចត់",
    feat2Title:"តម្លៃល្អបំផុត", feat2Desc:"សមរម្យ និងប្រកួតប្រជែង",
    feat3Title:"ប្តូរទំនិញងាយស្រួល", feat3Desc:"ដាក់សងប្រាក់ក្នុងរយៈពេល ៣០ ថ្ងៃ",
    feat4Title:"ការទូទាត់សុវត្ថិភាព", feat4Desc:"សុវត្ថិភាព ១០០%",
    catEyebrow:"រុករកជម្រើសផលិតផល", catTitle:"ទិញតាមប្រភេទ", catViewAll:"មើលប្រភេទទាំងអស់ →",
    catSmartphones:"ស្មាតហ្វូន", catLaptops:"កុំព្យូទ័រយួរដៃ", catSmartwatches:"នាឡិកាឆ្លាតវៃ", catGaming:"ហ្គេម",
    shopEyebrow:"ពីកាតាឡុករបស់យើង", shopTitle:"ទំនិញទាំងអស់",
    searchPlaceholder:"ស្វែងរកទំនិញតាមឈ្មោះ...",
    filterCategoryLabel:"ប្រភេទ", filterBrandLabel:"ម៉ាក", filterAll:"ទាំងអស់",
    clearFilters:"សម្អាតតម្រង", noResultsMsg:"រកមិនឃើញទំនិញត្រូវនឹងតម្រងរបស់អ្នកទេ។", showMoreProducts:"បង្ហាញផលិតផលបន្ថែម",
    resultsCountLabel:"ទំនិញត្រូវបានរកឃើញ",
    sortPopularity:"តម្រៀប៖ ពេញនិយម", sortPriceLow:"តម្លៃ៖ ទាបទៅខ្ពស់",
    sortPriceHigh:"តម្លៃ៖ ខ្ពស់ទៅទាប", sortNameAZ:"ឈ្មោះ៖ ក ដល់ អ",
    productsSuffix:"ផលិតផល", addToCart:"ដាក់ចូលកន្ត្រក", inStock:"នៅសល់",
    detailBrand:"ម៉ាក", detailSpecs:"លក្ខណៈបច្ចេកទេស",
    collectionEyebrow:"ជ្រើសរើសសម្រាប់អ្នក", collectionTitle:"ជម្រើសពិសេសរបស់យើង",
    colNew:"ទំនិញចូលថ្មី", colBest:"លក់ដាច់បំផុត", colGaming:"តំបន់ហ្គេម", colHome:"ផ្ទះ និងការិយាល័យ",
    blogEyebrow:"អត្ថបទថ្មីៗ", blogTitle:"អត្ថបទចុងក្រោយ", blogReadMore:"អានបន្ថែម →",
    contactEyebrow:"ទាក់ទងមកយើង", contactTitle:"ទំនាក់ទំនងមកយើង",
    contactAddrLabel:"អាសយដ្ឋាន", contactAddrValue:"ភ្នំពេញ កម្ពុជា",
    contactPhoneLabel:"លេខទូរស័ព្ទ", contactEmailLabel:"អ៊ីមែល",
    contactHoursLabel:"ម៉ោងធ្វើការ", contactHoursValue:"ច័ន្ទ - សៅរ៍៖ ៨ព្រឹក - ៦ល្ងាច",
    contactNamePh:"ឈ្មោះរបស់អ្នក", contactEmailPh:"អ៊ីមែលរបស់អ្នក", contactMsgPh:"សារបស់អ្នក",
    contactSend:"ផ្ញើសារ", contactSentMsg:"✓ សារត្រូវបានផ្ញើ! យើងនឹងឆ្លើយតបទៅអ្នកឆាប់ៗនេះ។",
    footerAbout:"គោលដៅដ៏គួរឱ្យទុកចិត្តរបស់អ្នក សម្រាប់ឧបករណ៍ និងគ្រឿងបន្លាស់បច្ចេកវិទ្យា។",
    footerQuickLinks:"តំណភ្ជាប់រហ័ស", footerCategories:"ប្រភេទទំនិញ",
    footerNewsletter:"ព័ត៌មានថ្មីៗ", footerNewsletterDesc:"ចុះឈ្មោះដើម្បីទទួលបានការផ្តល់ជូនពិសេស។",
    footerSubscribe:"ចុះឈ្មោះ", footerEmailPh:"បញ្ចូលអ៊ីមែលរបស់អ្នក",
    footerCopyright:"© ២០២៦ TECHZONE។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    cartTitle:"កន្ត្រកទំនិញ", cartEmpty:"កន្ត្រករបស់អ្នកគ្មានទំនិញ", cartSubtotal:"សរុបរង",
    cartCheckout:"បន្តទៅការទូទាត់", cartRemove:"លុប",
    checkoutTitle:"ការទូទាត់", checkoutSubtitle:"បំពេញការបញ្ជាទិញរបស់អ្នកដោយសុវត្ថិភាព និងរហ័ស។", checkoutProtected:"ការទូទាត់មានការការពារ • SSL សុវត្ថិភាព", checkoutSecure:"ការទូទាត់មានសុវត្ថិភាព", checkoutStepInfo:"ព័ត៌មាន", checkoutStepPayment:"ការទូទាត់", checkoutStepDone:"បញ្ជាក់",
    checkoutCustomerTitle:"ព័ត៌មានអតិថិជន", checkoutCustomerDesc:"តើយើងគួរដឹកជញ្ជូនការបញ្ជាទិញទៅណា?", payPhone:"លេខទូរស័ព្ទ", payCity:"ក្រុង / ខេត្ត", deliveryTitle:"វិធីដឹកជញ្ជូន", deliveryFreeTitle:"ដឹកជញ្ជូនធម្មតា", deliveryFreeDesc:"២–៤ ថ្ងៃធ្វើការ • ឥតគិតថ្លៃ", deliveryExpressTitle:"ដឹកជញ្ជូនរហ័ស", deliveryExpressDesc:"១–២ ថ្ងៃធ្វើការ • +$8", checkoutPaymentTitle:"វិធីទូទាត់", checkoutPaymentDesc:"ព័ត៌មានទូទាត់របស់អ្នកត្រូវបានការពារ និងអ៊ិនគ្រីប។",
    checkoutNamePh:"បញ្ចូលឈ្មោះពេញ", checkoutAddressPh:"លេខផ្ទះ ផ្លូវ ក្រុង", checkoutCardPh:"1234 5678 9012 3456", checkoutSaveCard:"រក្សាទុកព័ត៌មានទូទាត់សម្រាប់លើកក្រោយ", checkoutSecurityNote:"ការទូទាត់មានសុវត្ថិភាព • ព័ត៌មានកាតរបស់អ្នកត្រូវបានការពារ។",
    checkoutSummaryKicker:"ការបញ្ជាទិញរបស់អ្នក", checkoutSummaryTitle:"សង្ខេបការបញ្ជាទិញ", promoPlaceholder:"លេខកូដបញ្ចុះតម្លៃ", promoApply:"ប្រើ", paymentMethodsLabel:"យើងទទួលយក", summarySubtotal:"សរុបរង", summaryDiscount:"បញ្ចុះតម្លៃ", summaryShipping:"ដឹកជញ្ជូន", summaryFree:"ឥតគិតថ្លៃ", summaryTax:"ពន្ធប៉ាន់ស្មាន", summaryTotal:"សរុប",
    trustSecureTitle:"ការទូទាត់សុវត្ថិភាព", trustSecureDesc:"អ៊ិនគ្រីប 256-bit", trustShippingTitle:"ដឹកជញ្ជូនរហ័ស", trustShippingDesc:"មានដឹកជញ្ជូនឥតគិតថ្លៃ", trustReturnsTitle:"ប្តូរទំនិញងាយស្រួល", trustReturnsDesc:"គោលការណ៍ប្តូរ 30 ថ្ងៃ", checkoutNeedHelp:"ត្រូវការជំនួយ? ទាក់ទងក្រុមគាំទ្ររបស់យើង។",
    checkoutItems:"មុខទំនិញ", checkoutItem:"មុខទំនិញ", checkoutPhonePh:"+855 12 345 678", checkoutCityPh:"ភ្នំពេញ", checkoutPhoneError:"សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ។", checkoutCityError:"សូមបញ្ចូលក្រុង ឬខេត្ត។", checkoutCardError:"សូមបញ្ចូលលេខកាត 16 ខ្ទង់ត្រឹមត្រូវ។", checkoutNameError:"សូមបញ្ចូលឈ្មោះពេញ។", checkoutAddressError:"សូមបញ្ចូលអាសយដ្ឋានដឹកជញ្ជូន។", checkoutExpiryError:"សូមបញ្ចូលកាលបរិច្ឆេទ MM/YY ត្រឹមត្រូវ។", checkoutCvvError:"សូមបញ្ចូល CVV 3 ខ្ទង់ត្រឹមត្រូវ។", successKicker:"ការទូទាត់បានបញ្ចប់",
    payFullName:"ឈ្មោះពេញ", payAddress:"អាសយដ្ឋានដឹកជញ្ជូន", payCardNumber:"លេខកាត", payExpiry:"កាលបរិច្ឆេទផុតកំណត់", payCVV:"CVV", payPayNow:"បង់ប្រាក់ឥឡូវនេះ",
    successTitle:"ការបញ្ជាទិញបានជោគជ័យ!", successMsg:"អរគុណសម្រាប់ការទិញទំនិញ។ ការបញ្ជាទិញរបស់អ្នកកំពុងដំណើរការ។",
    successContinue:"បន្តទិញទំនិញ", orderNumberLabel:"លេខការបញ្ជាទិញ",
    detailCategory:"ប្រភេទ", detailQty:"បរិមាណ"
  }
};
const specLabels = {
  en: { cpu:"CPU", ram:"RAM", storage:"Storage", display:"Display", battery:"Battery", camera:"Camera",
        gpu:"GPU", batteryLife:"Battery Life", waterResistance:"Water Resistance", sensors:"Sensors",
        connectivity:"Connectivity", driverSize:"Driver Size", noiseCancellation:"Noise Cancellation",
        outputPower:"Output Power", compatibility:"Compatibility", vibrationFeedback:"Vibration Feedback" },
  km: { cpu:"ស៊ីភីយូ (CPU)", ram:"RAM", storage:"ទំហំផ្ទុក", display:"អេក្រង់", battery:"ថ្ម", camera:"កាមេរ៉ា",
        gpu:"ជីភីយូ (GPU)", batteryLife:"អាយុថ្ម", waterResistance:"ធន់ទឹក", sensors:"ឧបករណ៍ចាប់សញ្ញា",
        connectivity:"ការតភ្ជាប់", driverSize:"ទំហំឌ្រាយវើរ", noiseCancellation:"កាត់សំឡេងរំខាន",
        outputPower:"កម្លាំងសំឡេងចេញ", compatibility:"ភាពឆបគ្នា", vibrationFeedback:"ការញ័រឆ្លើយតប" }
};
function applyLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });
  document.querySelectorAll('#langSwitch span').forEach(s=>{
    s.classList.toggle('active', s.dataset.lang === lang);
  });
  localStorage.setItem('techzone_lang', lang);
  renderCategories(lang);
  renderShop();
  renderBlog(lang);
  renderCart(lang);
}
document.getElementById('langSwitch').addEventListener('click', (e)=>{
  const target = e.target.closest('[data-lang]');
  if(!target) return;
  applyLanguage(target.dataset.lang);
});
function currentLang(){ return localStorage.getItem('techzone_lang') || 'en'; }
const DB_KEY = 'techzone_products_v10';
const categoryMeta = {
  smartphones:  { key:"catSmartphones",  image:"image/samsungs26ultra.jpg",  seed:"smartphones-cat" },
  laptops:      { key:"catLaptops",      image:"image/laptop.png",      seed:"laptops-cat" },
  smartwatches: { key:"catSmartwatches", image:"image/smartwatch.jpg", seed:"smartwatches-cat" },
  accessories:  { key:"catAccessories",  image:"image/keyboard.jpg",  seed:"accessories-cat" },
  audio:        { key:"catAudio",        image:"image/audio.jpg",        seed:"audio-cat" },
  gaming:       { key:"catGaming",       image:"image/gaming.jpg",       seed:"gaming-cat" }
};
translations.en.catAccessories = "Accessories"; translations.km.catAccessories = "គ្រឿងបន្លាស់";
translations.en.catAudio = "Audio"; translations.km.catAudio = "ឧបករណ៍សំឡេង";
const brandsByCategory = {
  smartphones:  ["Samsung","Apple","Oppo","OnePlus","Xiaomi","RedMagic","Vivo","Motorola"],
  laptops:      ["Lenovo","Dell","Asus","HP","Acer","Apple","MSI","Razer"],
  smartwatches: ["Samsung","Apple","Xiaomi","Huawei"],
  accessories:  ["Sony","JBL","Anker","Samsung","Apple",],
  audio:        ["JBL","Sony",],
  gaming:       ["Logitech","Sony","Microsoft","Razer",]
};

// short bilingual description generators, one per category
const descTemplates = {
  smartphones:  { en:n=>`${n} delivers a vivid display, all-day battery life, and a versatile camera system for everyday use.`,
                  km:n=>`${n} ផ្តល់នូវអេក្រង់ភ្លឺច្បាស់ ថ្មប្រើបានពេញមួយថ្ងៃ និងប្រព័ន្ធកាមេរ៉ាដ៏សម្បូរបែបសម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃ។` },
  laptops:      { en:n=>`${n} combines a lightweight build with strong performance, perfect for work and study on the go.`,
                  km:n=>`${n} រួមបញ្ចូលគ្នារវាងទម្ងន់ស្រាល និងសមត្ថភាពដំណើរការខ្ពស់ ស័ក្តិសមសម្រាប់ការងារ និងការសិក្សាគ្រប់ទីកន្លែង។` },
  smartwatches: { en:n=>`${n} tracks your heart rate, sleep, and activity in a sleek, everyday-wearable design.`,
                  km:n=>`${n} តាមដានចង្វាក់បេះដូង ការគេង និងសកម្មភាពរបស់អ្នក ក្នុងរចនាបថស្រស់ស្អាតងាយពាក់ជារៀងរាល់ថ្ងៃ។` },
  accessories:  { en:n=>`${n} offers rich, clear sound with a comfortable fit for all-day listening.`,
                  km:n=>`${n} ផ្តល់សំឡេងច្បាស់ សម្បូរបែប និងសមរម្យសម្រាប់ស្តាប់ពេញមួយថ្ងៃ។` },
  audio:        { en:n=>`${n} fills the room with rich, balanced sound in a compact, portable design.`,
                  km:n=>`${n} បំពេញបន្ទប់ដោយសំឡេងសម្បូរបែប ស័ក្តិសមក្នុងទំហំតូច ចល័តងាយស្រួល។` },
  gaming:       { en:n=>`${n} gives you responsive controls and a comfortable grip for competitive gaming sessions.`,
                  km:n=>`${n} ផ្តល់ការគ្រប់គ្រងឆ្លើយតបលឿន និងកាន់បានស្រួល សម្រាប់ការលេងហ្គេមប្រកួតប្រជែង។` }
};
const seedProductsRaw = [
  { 
  name: "Galaxy S26 Ultra", 
  category: "smartphones", 
  brand: "Samsung", 
  price: 1299, 
  stock: 45,
  image: "image/samsungs26ultra.jpg",
  specs: { 
    cpu: "Snapdragon 8 Elite (Gen 4)", 
    ram: "16GB", 
    storage: "512GB", 
    display: "6.9\" Dynamic AMOLED 2X 120Hz", 
    battery: "5500mAh (45W Fast Charging)", 
    camera: "200MP Quad Camera (200MP + 50MP + 50MP + 12MP)" 
  } 
},
  { 
  name: "iPhone 17 Pro Max", 
  category: "smartphones", 
  brand: "Apple", 
  price: 1199, 
  stock: 90,  
  image: "image/iphone-17-pro-max.jpg",
  specs: { 
    cpu: "Apple A19 Pro", 
    ram: "12GB", 
    storage: "256GB", 
    display: "6.9\" Super Retina XDR 120Hz", 
    battery: "4823mAh", 
    camera: "48MP Triple Camera" 
  } 
},
  { 
  name: "Oppo Find X9 Ultra", 
  category: "smartphones", 
  brand: "Oppo", 
  price: 1299, 
  stock: 110, 
  image: "image/oppo-find-x9-ultra.webp", 
  specs: { 
    cpu: "Snapdragon 8 Elite Gen 5", 
    ram: "16GB", 
    storage: "512GB", 
    display: "6.82\" LTPO AMOLED 144Hz", 
    battery: "7050mAh", 
    camera: "200MP Quad Camera" 
  } 
},
  { 
  name: "OnePlus 15", 
  category: "smartphones", 
  brand: "OnePlus", 
  price: 999, 
  stock: 95,  
  image: "image/oneplus-15.jpg",
  specs: { 
    cpu: "Snapdragon 8 Elite Gen 5", 
    ram: "16GB", 
    storage: "512GB", 
    display: "6.78\" 1.5K AMOLED 165Hz", 
    battery: "7300mAh", 
    camera: "50MP Triple Camera" 
  } 
},
  { 
  name: "Xiaomi 17 Pro Max", 
  category: "smartphones", 
  brand: "Xiaomi", 
  price: 1099, 
  stock: 130, 
  image: "image/xiaomi-17-pro-max.jpg",
  specs: { 
    cpu: "Snapdragon 8 Elite Gen 5", 
    ram: "16GB", 
    storage: "512GB", 
    display: "6.9\" LTPO AMOLED 120Hz", 
    battery: "7500mAh (100W Fast Charging)", 
    camera: "50MP Triple Camera" 
  } 
},
  { 
  name: "Huawei Pura 80 Ultra", 
  category: "smartphones", 
  brand: "Huawei", 
  price: 1399, 
  stock: 65,  
  image: "image/huawei-pura-80-ultra.jpg",
  specs: { 
    cpu: "Kirin 9020", 
    ram: "16GB", 
    storage: "512GB", 
    display: "6.8\" LTPO OLED 120Hz", 
    battery: "5700mAh (100W Fast Charging)", 
    camera: "50MP Quad Camera" 
  } 
},
  { 
  name: "RedMagic 11 Pro", 
  category: "smartphones", 
  brand: "RedMagic", 
  price: 699, 
  stock: 85,  
  image: "image/redmagic-11-pro.jpg",
  specs: { 
    cpu: "Snapdragon 8 Elite Gen 5", 
    ram: "12GB", 
    storage: "256GB", 
    display: "6.85\" AMOLED 144Hz", 
    battery: "7500mAh (80W Fast Charging)", 
    camera: "50MP Triple Camera" 
  } 
},
{ 
    name: "Samsung Galaxy Z Fold 8 Ultra", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 2099, 
    stock: 30, 
    image: "image/Samsung Galaxy Z Fold 8 Ultra.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "1TB", display: "8.1\" AMOLED 120Hz", battery: "4800mAh", camera: "200MP Quad" } 
  },
  { 
    name: "Samsung Galaxy Z Fold 8", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 1799, 
    stock: 50, 
    image: "image/Samsung Galaxy Z Fold 8.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "12GB", storage: "512GB", display: "7.8\" AMOLED 120Hz", battery: "4500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy Z Flip 8", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 1099, 
    stock: 85, 
    image: "image/Samsung Galaxy Z Flip 8.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "4200mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Samsung Galaxy Z Fold 7", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 1499, 
    stock: 40, 
    image: "image/Samsung Galaxy Z Fold 7.jpg",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "12GB", storage: "512GB", display: "7.6\" AMOLED 120Hz", battery: "4400mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy Z Flip 7", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 899, 
    stock: 100, 
    image: "image/Samsung Galaxy Z Flip 7.jpg",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "4000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Samsung Galaxy Z Flip 7 FE", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 699, 
    stock: 120, 
    image: "image/Samsung Galaxy Z Flip 7 FE.jpg",
    specs: { cpu: "Exynos 2400e", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "4000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Samsung Galaxy Z Fold 6", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 1299, 
    stock: 45, 
    image: "image/Samsung Galaxy Z Fold 6.jpg",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "7.6\" AMOLED 120Hz", battery: "4400mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy Z TriFold", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 2499, 
    stock: 20, 
    image: "image/Samsung Galaxy Z TriFold.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "1TB", display: "10.2\" Tri-Fold OLED", battery: "5500mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S26+", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 999, 
    stock: 90, 
    image: "image/Samsung Galaxy S26+.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "12GB", storage: "256GB", display: "6.7\" Dynamic AMOLED 2X", battery: "4900mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S26", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 799, 
    stock: 110, 
    image: "image/Samsung Galaxy S26.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "8GB", storage: "256GB", display: "6.2\" Dynamic AMOLED 2X", battery: "4100mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S25 Ultra", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 1149, 
    stock: 65, 
    image: "image/Samsung Galaxy S25 Ultra.jpg",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "12GB", storage: "256GB", display: "6.8\" Dynamic AMOLED 2X", battery: "5000mAh", camera: "200MP Quad" } 
  },
  { 
    name: "Samsung Galaxy S25+", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 899, 
    stock: 85, 
    image: "image/Samsung Galaxy S25+.jpg",
    specs: { cpu: "Exynos 2500", ram: "12GB", storage: "256GB", display: "6.7\" Dynamic AMOLED 2X", battery: "4900mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S25", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 699, 
    stock: 105, 
    image: "image/Samsung Galaxy S25.jpg",
    specs: { cpu: "Exynos 2500", ram: "8GB", storage: "256GB", display: "6.2\" Dynamic AMOLED 2X", battery: "4000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S25 Edge", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 849, 
    stock: 50, 
    image: "image/Samsung Galaxy S25 Edge.jpg",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "12GB", storage: "256GB", display: "6.5\" Curved AMOLED", battery: "4500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S25 FE", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 599, 
    stock: 150, 
    image: "image/Samsung Galaxy S25 FE.jpg",
    specs: { cpu: "Exynos 2400e", ram: "8GB", storage: "128GB", display: "6.4\" AMOLED 120Hz", battery: "4500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy S24 Ultra", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 999, 
    stock: 40, 
    image: "image/Samsung Galaxy S24 Ultra.jpg",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "5000mAh", camera: "200MP Quad" } 
  },
  { 
    name: "Samsung Galaxy S24 FE", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 499, 
    stock: 130, 
    image: "image/Samsung Galaxy S24 FE.jpg",
    specs: { cpu: "Exynos 2400e", ram: "8GB", storage: "128GB", display: "6.7\" AMOLED 120Hz", battery: "4700mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy A57", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 449, 
    stock: 200, 
    image: "image/Samsung Galaxy A57.jpg",
    specs: { cpu: "Exynos 1580", ram: "8GB", storage: "256GB", display: "6.6\" Super AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy A56 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 399, 
    stock: 180, 
    image: "image/Samsung Galaxy A56 5G.jpg",
    specs: { cpu: "Exynos 1580", ram: "8GB", storage: "128GB", display: "6.6\" Super AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy A36 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 299, 
    stock: 220, 
    image: "image/Samsung Galaxy A36 5G.jpg",
    specs: { cpu: "Exynos 1380", ram: "6GB", storage: "128GB", display: "6.6\" Super AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy A27", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 249, 
    stock: 250, 
    image: "image/Samsung Galaxy A27.jpg",
    specs: { cpu: "MediaTek Dimensity 7050", ram: "6GB", storage: "128GB", display: "6.5\" Super AMOLED 90Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy A17 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 199, 
    stock: 300, 
    image: "image/Samsung Galaxy A17 5G.jpg",
    specs: { cpu: "MediaTek Dimensity 6100+", ram: "4GB", storage: "128GB", display: "6.5\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Samsung Galaxy A07 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 149, 
    stock: 350, 
    image: "image/Samsung Galaxy A07 5G.jpg",
    specs: { cpu: "MediaTek Dimensity 6020", ram: "4GB", storage: "64GB", display: "6.5\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Samsung Galaxy M47", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 349, 
    stock: 160, 
    image: "image/Samsung Galaxy M47.jpg",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "8GB", storage: "256GB", display: "6.7\" Super AMOLED 120Hz", battery: "6000mAh", camera: "64MP Triple" } 
  },
  { 
    name: "Samsung Galaxy M17 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 219, 
    stock: 190, 
    image: "image/Samsung Galaxy M17 5G.jpg",
    specs: { cpu: "Exynos 1330", ram: "6GB", storage: "128GB", display: "6.5\" LCD 90Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Samsung Galaxy M56 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 399, 
    stock: 140, 
    image: "image/Samsung Galaxy M56 5G.jpg",
    specs: { cpu: "Snapdragon 7s Gen 2", ram: "8GB", storage: "256GB", display: "6.7\" Super AMOLED 120Hz", battery: "6000mAh", camera: "108MP Triple" } 
  },
  { 
    name: "Samsung Galaxy F70 Pro", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 499, 
    stock: 110, 
    image: "image/Samsung Galaxy F70 Pro.jpg",
    specs: { cpu: "Snapdragon 7+ Gen 3", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "5500mAh", camera: "64MP Triple" } 
  },
  { 
    name: "Samsung Galaxy F56 5G", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 349, 
    stock: 170, 
    image: "image/Samsung Galaxy F56 5G.jpg",
    specs: { cpu: "Exynos 1480", ram: "8GB", storage: "128GB", display: "6.6\" Super AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Samsung Galaxy XCover 7 Pro", 
    category: "smartphones", 
    brand: "Samsung", 
    price: 599, 
    stock: 60, 
    image: "image/Samsung Galaxy XCover 7 Pro.jpg",
    specs: { cpu: "Snapdragon 7s Gen 2", ram: "8GB", storage: "128GB", display: "6.6\" IPS LCD 120Hz", battery: "4050mAh (Removable)", camera: "50MP Dual" } 
  },
  { 
    name: "iPhone 18 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 1299, 
    stock: 50, 
    image: "image/iphone-18-pro-max.jpg",
    specs: { cpu: "Apple A20 Pro", ram: "12GB", storage: "256GB", display: "6.9\" Super Retina XDR 120Hz", battery: "4900mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 18 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 1099, 
    stock: 60, 
    image: "image/iphone-18-pro.jpg",
    specs: { cpu: "Apple A20 Pro", ram: "12GB", storage: "256GB", display: "6.3\" Super Retina XDR 120Hz", battery: "4300mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 17 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 1199, 
    stock: 75, 
    image: "image/iphone-17-pro-max.jpg",
    specs: { cpu: "Apple A19 Pro", ram: "12GB", storage: "256GB", display: "6.9\" Super Retina XDR 120Hz", battery: "4823mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 17 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 999, 
    stock: 80, 
    image: "image/iphone-17-pro.jpg",
    specs: { cpu: "Apple A19 Pro", ram: "12GB", storage: "256GB", display: "6.3\" Super Retina XDR 120Hz", battery: "4200mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone Air", 
    category: "smartphones", 
    brand: "Apple", 
    price: 949, 
    stock: 90, 
    image: "image/iphone-air.jpg",
    specs: { cpu: "Apple A19", ram: "8GB", storage: "256GB", display: "6.6\" Super Retina XDR 120Hz", battery: "3800mAh", camera: "48MP Single" } 
  },
  { 
    name: "iPhone 17", 
    category: "smartphones", 
    brand: "Apple", 
    price: 799, 
    stock: 110, 
    image: "image/iphone-17.jpg",
    specs: { cpu: "Apple A19", ram: "8GB", storage: "128GB", display: "6.1\" Super Retina XDR 120Hz", battery: "3600mAh", camera: "48MP Dual" } 
  },
  { 
    name: "iPhone 17e", 
    category: "smartphones", 
    brand: "Apple", 
    price: 599, 
    stock: 130, 
    image: "image/iphone-17e.jpg",
    specs: { cpu: "Apple A18", ram: "8GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "3500mAh", camera: "48MP Single" } 
  },
  { 
    name: "iPhone 16 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 1199, 
    stock: 45, 
    image: "image/iphone-16-pro-max.jpg",
    specs: { cpu: "Apple A18 Pro", ram: "8GB", storage: "256GB", display: "6.9\" Super Retina XDR 120Hz", battery: "4685mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 16 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 999, 
    stock: 55, 
    image: "image/iphone-16-pro.jpg",
    specs: { cpu: "Apple A18 Pro", ram: "8GB", storage: "128GB", display: "6.3\" Super Retina XDR 120Hz", battery: "3582mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 16 Plus", 
    category: "smartphones", 
    brand: "Apple", 
    price: 899, 
    stock: 70, 
    image: "image/iphone-16-plus.jpg",
    specs: { cpu: "Apple A18", ram: "8GB", storage: "128GB", display: "6.7\" Super Retina XDR 60Hz", battery: "4674mAh", camera: "48MP Dual" } 
  },
  { 
    name: "iPhone 16", 
    category: "smartphones", 
    brand: "Apple", 
    price: 799, 
    stock: 95, 
    image: "image/iphone-16.jpg",
    specs: { cpu: "Apple A18", ram: "8GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "3561mAh", camera: "48MP Dual" } 
  },
  { 
    name: "iPhone 16e", 
    category: "smartphones", 
    brand: "Apple", 
    price: 599, 
    stock: 110, 
    image: "image/iphone-16e.jpg",
    specs: { cpu: "Apple A17", ram: "8GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "3400mAh", camera: "48MP Single" } 
  },
  { 
    name: "iPhone 15 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 1099, 
    stock: 35, 
    image: "image/iphone-15-pro-max.jpg",
    specs: { cpu: "Apple A17 Pro", ram: "8GB", storage: "256GB", display: "6.7\" Super Retina XDR 120Hz", battery: "4441mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 15 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 899, 
    stock: 40, 
    image: "image/iphone-15-pro.jpg",
    specs: { cpu: "Apple A17 Pro", ram: "8GB", storage: "128GB", display: "6.1\" Super Retina XDR 120Hz", battery: "3274mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 15 Plus", 
    category: "smartphones", 
    brand: "Apple", 
    price: 799, 
    stock: 50, 
    image: "image/iphone-15-plus.jpg",
    specs: { cpu: "Apple A16 Bionic", ram: "6GB", storage: "128GB", display: "6.7\" Super Retina XDR 60Hz", battery: "4383mAh", camera: "48MP Dual" } 
  },
  { 
    name: "iPhone 15", 
    category: "smartphones", 
    brand: "Apple", 
    price: 699, 
    stock: 65, 
    image: "image/iphone-15.jpg",
    specs: { cpu: "Apple A16 Bionic", ram: "6GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "3349mAh", camera: "48MP Dual" } 
  },
  { 
    name: "iPhone 14 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 999, 
    stock: 25, 
    image: "image/iphone-14-pro-max.jpg",
    specs: { cpu: "Apple A16 Bionic", ram: "6GB", storage: "128GB", display: "6.7\" Super Retina XDR 120Hz", battery: "4323mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 14 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 899, 
    stock: 30, 
    image: "image/iphone-14-pro.jpg",
    specs: { cpu: "Apple A16 Bionic", ram: "6GB", storage: "128GB", display: "6.1\" Super Retina XDR 120Hz", battery: "3200mAh", camera: "48MP Triple" } 
  },
  { 
    name: "iPhone 14 Plus", 
    category: "smartphones", 
    brand: "Apple", 
    price: 699, 
    stock: 40, 
    image: "image/iphone-14-plus.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "6GB", storage: "128GB", display: "6.7\" Super Retina XDR 60Hz", battery: "4325mAh", camera: "12MP Dual" } 
  },
  { 
    name: "iPhone 14", 
    category: "smartphones", 
    brand: "Apple", 
    price: 599, 
    stock: 50, 
    image: "image/iphone-14.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "6GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "3279mAh", camera: "12MP Dual" } 
  },
  { 
    name: "iPhone SE (3rd Generation)", 
    category: "smartphones", 
    brand: "Apple", 
    price: 429, 
    stock: 75, 
    image: "image/iphone-se-3rd-generation.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "4GB", storage: "64GB", display: "4.7\" Retina HD 60Hz", battery: "2018mAh", camera: "12MP Single" } 
  },
  { 
    name: "iPhone 13 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 899, 
    stock: 15, 
    image: "image/iphone-13-pro-max.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "6GB", storage: "128GB", display: "6.7\" Super Retina XDR 120Hz", battery: "4352mAh", camera: "12MP Triple" } 
  },
  { 
    name: "iPhone 13 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 799, 
    stock: 20, 
    image: "image/iphone-13-pro.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "6GB", storage: "128GB", display: "6.1\" Super Retina XDR 120Hz", battery: "3095mAh", camera: "12MP Triple" } 
  },
  { 
    name: "iPhone 13", 
    category: "smartphones", 
    brand: "Apple", 
    price: 599, 
    stock: 45, 
    image: "image/iphone-13.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "4GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "3240mAh", camera: "12MP Dual" } 
  },
  { 
    name: "iPhone 13 mini", 
    category: "smartphones", 
    brand: "Apple", 
    price: 499, 
    stock: 30, 
    image: "image/iphone-13-mini.jpg",
    specs: { cpu: "Apple A15 Bionic", ram: "4GB", storage: "128GB", display: "5.4\" Super Retina XDR 60Hz", battery: "2438mAh", camera: "12MP Dual" } 
  },
  { 
    name: "iPhone 12 Pro Max", 
    category: "smartphones", 
    brand: "Apple", 
    price: 749, 
    stock: 10, 
    image: "",
    specs: { cpu: "Apple A14 Bionic", ram: "6GB", storage: "128GB", display: "6.7\" Super Retina XDR 60Hz", battery: "3687mAh", camera: "12MP Triple" } 
  },
  { 
    name: "iPhone 12 Pro", 
    category: "smartphones", 
    brand: "Apple", 
    price: 649, 
    stock: 15, 
    image: "",
    specs: { cpu: "Apple A14 Bionic", ram: "6GB", storage: "128GB", display: "6.1\" Super Retina XDR 60Hz", battery: "2815mAh", camera: "12MP Triple" } 
  },
  { 
    name: "iPhone 12", 
    category: "smartphones", 
    brand: "Apple", 
    price: 499, 
    stock: 25, 
    image: "",
    specs: { cpu: "Apple A14 Bionic", ram: "4GB", storage: "64GB", display: "6.1\" Super Retina XDR 60Hz", battery: "2815mAh", camera: "12MP Dual" } 
  },
  { 
    name: "iPhone 12 mini", 
    category: "smartphones", 
    brand: "Apple", 
    price: 429, 
    stock: 20, 
    image: "",
    specs: { cpu: "Apple A14 Bionic", ram: "4GB", storage: "64GB", display: "5.4\" Super Retina XDR 60Hz", battery: "2227mAh", camera: "12MP Dual" } 
  },
  { 
    name: "iPhone SE", 
    category: "smartphones", 
    brand: "Apple", 
    price: 299, 
    stock: 40, 
    image: "",
    specs: { cpu: "Apple A13 Bionic", ram: "3GB", storage: "64GB", display: "4.7\" Retina HD 60Hz", battery: "1821mAh", camera: "12MP Single" } 
  },
  { 
    name: "OnePlus 15T", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 799, 
    stock: 70, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus 15R", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 599, 
    stock: 110, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus 13", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 899, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "12GB", storage: "256GB", display: "6.82\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus 13T", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 699, 
    stock: 60, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus 13R", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 499, 
    stock: 85, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "8GB", storage: "128GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus 13s", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 749, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.3\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus 12", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 799, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.82\" AMOLED 120Hz", battery: "5400mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus 12R", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 499, 
    stock: 65, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "8GB", storage: "128GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Open (Foldable)", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 1699, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "16GB", storage: "512GB", display: "7.82\" Foldable AMOLED 120Hz", battery: "4805mAh", camera: "48MP Triple" } 
  },
  { 
    name: "OnePlus Nord 6", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 449, 
    stock: 120, 
    image: "",
    specs: { cpu: "Snapdragon 7+ Gen 3", ram: "8GB", storage: "256GB", display: "6.74\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord CE 6", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 349, 
    stock: 150, 
    image: "",
    specs: { cpu: "Dimensity 7300", ram: "8GB", storage: "128GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord CE 6 Lite", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 249, 
    stock: 180, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "6GB", storage: "128GB", display: "6.56\" LCD 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord 5", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 399, 
    stock: 90, 
    image: "",
    specs: { cpu: "Snapdragon 7+ Gen 2", ram: "8GB", storage: "256GB", display: "6.74\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Nord CE 5", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 299, 
    stock: 110, 
    image: "",
    specs: { cpu: "Dimensity 7200", ram: "8GB", storage: "128GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord 4", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 379, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon 7+ Gen 3", ram: "8GB", storage: "256GB", display: "6.74\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord CE 4", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 279, 
    stock: 100, 
    image: "",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "8GB", storage: "128GB", display: "6.7\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord CE 4 Lite", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 219, 
    stock: 140, 
    image: "",
    specs: { cpu: "Snapdragon 695", ram: "8GB", storage: "128GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Nord 3", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 349, 
    stock: 45, 
    image: "",
    specs: { cpu: "Dimensity 9000", ram: "8GB", storage: "128GB", display: "6.74\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Nord CE 3", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 259, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 782G", ram: "8GB", storage: "128GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 6 Ultra", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 549, 
    stock: 55, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.83\" AMOLED 144Hz", battery: "7000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 6", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 449, 
    stock: 80, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 6T", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 399, 
    stock: 90, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Ace 5 Ultra", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 529, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 5 Pro", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 479, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "6300mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 5", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 419, 
    stock: 85, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "6200mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 3 Pro", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 439, 
    stock: 65, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "6100mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OnePlus Ace 3V", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 299, 
    stock: 110, 
    image: "",
    specs: { cpu: "Snapdragon 7+ Gen 3", ram: "12GB", storage: "256GB", display: "6.74\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus Turbo 6", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 329, 
    stock: 95, 
    image: "",
    specs: { cpu: "Dimensity 8400", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OnePlus N6", 
    category: "smartphones", 
    brand: "OnePlus", 
    price: 199, 
    stock: 160, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 3", ram: "6GB", storage: "128GB", display: "6.56\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Find X9 Pro", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 1099, 
    stock: 65, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "6200mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Find X9s", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 799, 
    stock: 80, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.59\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Find X9", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 899, 
    stock: 70, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "12GB", storage: "256GB", display: "6.59\" AMOLED 120Hz", battery: "5800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Find N6 (Foldable)", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 1799, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "8.1\" Foldable AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Find N5 (Foldable)", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "7.82\" Foldable AMOLED 120Hz", battery: "4800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Find X8 Pro", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 999, 
    stock: 40, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "5910mAh", camera: "50MP Quad" } 
  },
  { 
    name: "OPPO Find X8", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 799, 
    stock: 60, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.59\" AMOLED 120Hz", battery: "5630mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Reno16 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 599, 
    stock: 85, 
    image: "",
    specs: { cpu: "Dimensity 8400", ram: "12GB", storage: "512GB", display: "6.7\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Reno16 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 499, 
    stock: 100, 
    image: "",
    specs: { cpu: "Dimensity 7300", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5800mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno16 F 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 399, 
    stock: 120, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno16c 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 329, 
    stock: 110, 
    image: "",
    specs: { cpu: "Dimensity 6300", ram: "8GB", storage: "256GB", display: "6.67\" LCD 120Hz", battery: "5600mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno15 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 549, 
    stock: 50, 
    image: "",
    specs: { cpu: "Dimensity 8300", ram: "12GB", storage: "512GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Reno15 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 449, 
    stock: 70, 
    image: "",
    specs: { cpu: "Dimensity 7200", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno15 F 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 369, 
    stock: 90, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno14 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 529, 
    stock: 30, 
    image: "",
    specs: { cpu: "Dimensity 9200+", ram: "12GB", storage: "512GB", display: "6.74\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Reno14 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 429, 
    stock: 45, 
    image: "",
    specs: { cpu: "Dimensity 7050", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno13 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 499, 
    stock: 25, 
    image: "",
    specs: { cpu: "Dimensity 8200", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "4600mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Reno13 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Dimensity 7050", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO Reno12 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 459, 
    stock: 35, 
    image: "",
    specs: { cpu: "Dimensity 7300-Energy", ram: "12GB", storage: "512GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO Reno12 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 369, 
    stock: 55, 
    image: "",
    specs: { cpu: "Dimensity 7300-Energy", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO A6 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 299, 
    stock: 150, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5800mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO A6i", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 189, 
    stock: 200, 
    image: "",
    specs: { cpu: "Snapdragon 680", ram: "6GB", storage: "128GB", display: "6.67\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO A6 4G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 169, 
    stock: 220, 
    image: "",
    specs: { cpu: "Helio G91", ram: "6GB", storage: "128GB", display: "6.67\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO A7 Pro Max 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 349, 
    stock: 90, 
    image: "",
    specs: { cpu: "Dimensity 7050", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "6000mAh", camera: "64MP Triple" } 
  },
  { 
    name: "OPPO F33 Pro 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 379, 
    stock: 80, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 2", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "64MP Triple" } 
  },
  { 
    name: "OPPO K15 Pro Plus", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 429, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 8s Gen 3", ram: "12GB", storage: "512GB", display: "6.78\" AMOLED 144Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO K15 Pro", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 379, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon 7+ Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 144Hz", battery: "6300mAh", camera: "50MP Triple" } 
  },
  { 
    name: "OPPO K15 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 299, 
    stock: 110, 
    image: "",
    specs: { cpu: "Dimensity 8300", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "OPPO K14x 5G", 
    category: "smartphones", 
    brand: "Oppo", 
    price: 219, 
    stock: 140, 
    image: "",
    specs: { cpu: "Dimensity 6300", ram: "6GB", storage: "128GB", display: "6.67\" LCD 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Xiaomi 17 Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.7\" AMOLED 120Hz", battery: "5800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 17", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 799, 
    stock: 85, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "12GB", storage: "256GB", display: "6.36\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 17T Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 699, 
    stock: 70, 
    image: "",
    specs: { cpu: "Dimensity 9400+", ram: "12GB", storage: "512GB", display: "6.67\" AMOLED 144Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 17T", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 549, 
    stock: 90, 
    image: "",
    specs: { cpu: "Dimensity 8400", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 144Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 15 Ultra", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 1099, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "6.73\" LTPO AMOLED 120Hz", battery: "5000mAh", camera: "200MP Quad" } 
  },
  { 
    name: "Xiaomi 15 Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 899, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "6.73\" AMOLED 120Hz", battery: "6100mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 15", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 699, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.36\" AMOLED 120Hz", battery: "5400mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 15T Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 649, 
    stock: 65, 
    image: "",
    specs: { cpu: "Dimensity 9300+", ram: "12GB", storage: "512GB", display: "6.67\" AMOLED 144Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi 15T", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 499, 
    stock: 80, 
    image: "",
    specs: { cpu: "Dimensity 8300-Ultra", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 144Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Xiaomi Mix Fold 4", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 1599, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "1TB", display: "7.98\" Foldable AMOLED 120Hz", battery: "5100mAh", camera: "50MP Quad" } 
  },
  { 
    name: "Xiaomi Mix Flip", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 999, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "512GB", display: "6.86\" Foldable AMOLED 120Hz", battery: "4780mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Redmi Note 17 Pro Max", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 399, 
    stock: 150, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 3", ram: "12GB", storage: "512GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Redmi Note 17 Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 349, 
    stock: 180, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 3", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Redmi Note 17 5G", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 279, 
    stock: 200, 
    image: "",
    specs: { cpu: "Dimensity 7300", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "108MP Dual" } 
  },
  { 
    name: "Redmi Note 17", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 219, 
    stock: 220, 
    image: "",
    specs: { cpu: "Helio G99 Ultra", ram: "8GB", storage: "128GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "108MP Dual" } 
  },
  { 
    name: "Redmi 17 5G", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 189, 
    stock: 250, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 2", ram: "6GB", storage: "128GB", display: "6.79\" LCD 120Hz", battery: "5030mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Redmi 17", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 149, 
    stock: 300, 
    image: "",
    specs: { cpu: "Helio G91 Ultra", ram: "6GB", storage: "128GB", display: "6.79\" LCD 90Hz", battery: "5030mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Redmi Note 15 Pro+ 5G", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 379, 
    stock: 110, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 2", ram: "12GB", storage: "512GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Redmi Note 15 Pro 5G", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 329, 
    stock: 130, 
    image: "",
    specs: { cpu: "Dimensity 7200-Ultra", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5100mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Redmi Note 15 5G", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 259, 
    stock: 160, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "108MP Dual" } 
  },
  { 
    name: "Redmi 15", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 139, 
    stock: 280, 
    image: "",
    specs: { cpu: "Helio G88", ram: "4GB", storage: "128GB", display: "6.79\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Redmi 15C", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 119, 
    stock: 320, 
    image: "",
    specs: { cpu: "Helio G85", ram: "4GB", storage: "128GB", display: "6.74\" LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Poco F9 Ultra", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 649, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.67\" AMOLED 144Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Poco F9 Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 529, 
    stock: 80, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Poco X8 Pro", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 379, 
    stock: 100, 
    image: "",
    specs: { cpu: "Dimensity 8400", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Poco M8", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 209, 
    stock: 140, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 2", ram: "6GB", storage: "128GB", display: "6.79\" LCD 120Hz", battery: "5030mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Redmi Turbo 5", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 349, 
    stock: 90, 
    image: "",
    specs: { cpu: "Snapdragon 8s Gen 3", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Redmi K90 Ultra", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 599, 
    stock: 50, 
    image: "",
    specs: { cpu: "Dimensity 9400+", ram: "16GB", storage: "512GB", display: "6.67\" AMOLED 144Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Redmi A3x", 
    category: "smartphones", 
    brand: "Xiaomi", 
    price: 89, 
    stock: 400, 
    image: "",
    specs: { cpu: "Unisoc T603", ram: "3GB", storage: "64GB", display: "6.71\" LCD 90Hz", battery: "5000mAh", camera: "8MP Dual" } 
  },
  { 
    name: "RedMagic 11S Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 849, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "24GB", storage: "1TB", display: "6.85\" AMOLED 144Hz", battery: "7000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 11S Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 749, 
    stock: 65, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.85\" AMOLED 144Hz", battery: "7000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 11 Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 799, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "24GB", storage: "512GB", display: "6.85\" AMOLED 144Hz", battery: "7500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 11 Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 699, 
    stock: 80, 
    image: "image/redmagic-11-pro.jpg",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "12GB", storage: "256GB", display: "6.85\" AMOLED 144Hz", battery: "7500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 11 Air", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 599, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 144Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "RedMagic 11 Pro Golden Saga Limited Edition", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 1499, 
    stock: 15, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "24GB", storage: "1TB", display: "6.85\" AMOLED 144Hz", battery: "7500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 10S Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 799, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "24GB", storage: "1TB", display: "6.85\" AMOLED 144Hz", battery: "7050mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 10S Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 699, 
    stock: 55, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "16GB", storage: "512GB", display: "6.85\" AMOLED 144Hz", battery: "7050mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 10 Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 769, 
    stock: 45, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "24GB", storage: "1TB", display: "6.85\" AMOLED 144Hz", battery: "7050mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 10 Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 649, 
    stock: 70, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "12GB", storage: "256GB", display: "6.85\" AMOLED 144Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 10 Air", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 549, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 144Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "RedMagic 10 Pro Golden Saga Limited Edition", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 1399, 
    stock: 10, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite (Gen 4)", ram: "24GB", storage: "1TB", display: "6.85\" AMOLED 144Hz", battery: "7050mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 9S Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 729, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3 Leading Version", ram: "16GB", storage: "512GB", display: "6.8\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 9S Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 649, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3 Leading Version", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 9 Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "6.8\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 9 Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 599, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "6500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 8S Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 679, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2 Leading Version", ram: "16GB", storage: "512GB", display: "6.8\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 8S Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 579, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2 Leading Version", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 8 Pro+", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 649, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "16GB", storage: "512GB", display: "6.8\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 8 Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 549, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "RedMagic 7S Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 499, 
    stock: 15, 
    image: "",
    specs: { cpu: "Snapdragon 8+ Gen 1", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "5000mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 7S", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 449, 
    stock: 10, 
    image: "",
    specs: { cpu: "Snapdragon 8+ Gen 1", ram: "8GB", storage: "128GB", display: "6.8\" AMOLED 165Hz", battery: "4500mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 7 Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 429, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 1", ram: "12GB", storage: "256GB", display: "6.8\" AMOLED 120Hz", battery: "5000mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 7", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 379, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 1", ram: "8GB", storage: "128GB", display: "6.8\" AMOLED 165Hz", battery: "4500mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 6S Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 329, 
    stock: 15, 
    image: "",
    specs: { cpu: "Snapdragon 888+", ram: "12GB", storage: "128GB", display: "6.8\" AMOLED 165Hz", battery: "5050mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 6R", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 279, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 888", ram: "8GB", storage: "128GB", display: "6.67\" AMOLED 144Hz", battery: "4200mAh", camera: "64MP Quad" } 
  },
  { 
    name: "RedMagic 6 Pro", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 299, 
    stock: 10, 
    image: "",
    specs: { cpu: "Snapdragon 888", ram: "16GB", storage: "256GB", display: "6.8\" AMOLED 165Hz", battery: "5050mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 6", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 249, 
    stock: 12, 
    image: "",
    specs: { cpu: "Snapdragon 888", ram: "8GB", storage: "128GB", display: "6.8\" AMOLED 165Hz", battery: "5050mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 5S", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 199, 
    stock: 8, 
    image: "",
    specs: { cpu: "Snapdragon 865", ram: "8GB", storage: "128GB", display: "6.65\" AMOLED 144Hz", battery: "4500mAh", camera: "64MP Triple" } 
  },
  { 
    name: "RedMagic 5G", 
    category: "smartphones", 
    brand: "RedMagic", 
    price: 179, 
    stock: 5, 
    image: "",
    specs: { cpu: "Snapdragon 865", ram: "8GB", storage: "128GB", display: "6.65\" AMOLED 144Hz", battery: "4500mAh", camera: "64MP Triple" } 
  },
  { 
    name: "ThinkPad X1 Carbon", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1499, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "ThinkPad X1 2-in-1", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1599, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "ThinkPad T14", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1199, 
    stock: 60, 
    image: "",
    specs: { cpu: "AMD Ryzen 7 Pro", ram: "32GB", storage: "512GB SSD", display: "14\" WUXGA IPS", gpu: "AMD Radeon Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "ThinkPad T14s", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1299, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "512GB SSD", display: "14\" WUXGA IPS", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "ThinkPad T16", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1249, 
    stock: 45, 
    image: "",
    specs: { cpu: "AMD Ryzen 7 Pro", ram: "32GB", storage: "512GB SSD", display: "16\" WUXGA IPS", gpu: "AMD Radeon Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "ThinkPad E14", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 799, 
    stock: 80, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA IPS", gpu: "AMD Radeon Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "ThinkPad E16", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 849, 
    stock: 75, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "16GB", storage: "512GB SSD", display: "16\" WUXGA IPS", gpu: "Intel Iris Xe", battery: "Up to 12 hrs" } 
  },
  { 
    name: "ThinkPad L14", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 899, 
    stock: 50, 
    image: "",
    specs: { cpu: "AMD Ryzen 5 Pro", ram: "16GB", storage: "512GB SSD", display: "14\" FHD IPS", gpu: "AMD Radeon Graphics", battery: "Up to 11 hrs" } 
  },
  { 
    name: "ThinkPad X13", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1299, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "13.3\" WUXGA IPS", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "ThinkPad P16", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 2199, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "16\" 4K UHD+ OLED", gpu: "NVIDIA RTX 4000 Ada", battery: "Up to 9 hrs" } 
  },
  { 
    name: "Yoga Pro 9i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "16\" 3.2K Mini-LED 165Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 11 hrs" } 
  },
  { 
    name: "Yoga Pro 7i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1299, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14.5\" 3K PureSight 120Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 12 hrs" } 
  },
  { 
    name: "Yoga Slim 7x", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon X Elite", ram: "32GB", storage: "1TB SSD", display: "14.5\" 3K OLED 90Hz", gpu: "Qualcomm Adreno", battery: "Up to 22 hrs" } 
  },
  { 
    name: "Yoga 7i 2-in-1", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA OLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Yoga Book 9i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1999, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "Dual 13.3\" 2.8K OLED", gpu: "Intel Arc Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Legion Pro 7i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 2399, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "32GB", storage: "1TB SSD", display: "16\" 2.5K IPS 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Legion Pro 5i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1599, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "1TB SSD", display: "16\" 2.5K IPS 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Legion 7i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1899, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "32GB", storage: "1TB SSD", display: "16\" 3.2K IPS 165Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "Legion 5i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1399, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "15.6\" WQHD 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Legion Slim 5", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1299, 
    stock: 55, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" WQXGA 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 8 hrs" } 
  },
  { 
    name: "Lenovo LOQ 15", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 899, 
    stock: 90, 
    image: "",
    specs: { cpu: "AMD Ryzen 5 / Intel Core i5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Lenovo LOQ 16", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 999, 
    stock: 70, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" WUXGA 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "IdeaPad Pro 5", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 949, 
    stock: 65, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED 120Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 11 hrs" } 
  },
  { 
    name: "IdeaPad Slim 5", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 699, 
    stock: 100, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA OLED", gpu: "AMD Radeon Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "IdeaPad Slim 3", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 499, 
    stock: 150, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Iris Xe", battery: "Up to 10 hrs" } 
  },
  { 
    name: "IdeaPad 5 2-in-1", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 749, 
    stock: 75, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA Touch", gpu: "AMD Radeon Graphics", battery: "Up to 11 hrs" } 
  },
  { 
    name: "Lenovo Slim 7i", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1199, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "ThinkBook 16", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 849, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "16\" WUXGA IPS", gpu: "Intel Iris Xe", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ThinkBook Plus", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 1499, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "13.5\" 2.8K + E-Ink Dual Screen", gpu: "Intel Arc Graphics", battery: "Up to 9 hrs" } 
  },
  { 
    name: "Lenovo Chromebook Plus", 
    category: "laptops", 
    brand: "Lenovo", 
    price: 399, 
    stock: 120, 
    image: "",
    specs: { cpu: "Intel Core i3", ram: "8GB", storage: "128GB SSD", display: "14\" FHD IPS Touch", gpu: "Intel UHD Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "HP OmniBook Ultra Flip 14", 
    category: "laptops", 
    brand: "HP", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED Touch 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "HP OmniBook X Flip 16", 
    category: "laptops", 
    brand: "HP", 
    price: 1499, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "16\" 3K OLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "HP OmniBook Ultra 14", 
    category: "laptops", 
    brand: "HP", 
    price: 1299, 
    stock: 50, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "14\" 2.2K IPS Touch", gpu: "AMD Radeon 880M", battery: "Up to 21 hrs" } 
  },
  { 
    name: "HP OmniBook X 14", 
    category: "laptops", 
    brand: "HP", 
    price: 1199, 
    stock: 45, 
    image: "",
    specs: { cpu: "Snapdragon X Elite", ram: "16GB", storage: "1TB SSD", display: "14\" 2.2K IPS Touch", gpu: "Qualcomm Adreno", battery: "Up to 22 hrs" } 
  },
  { 
    name: "HP OmniBook 7", 
    category: "laptops", 
    brand: "HP", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" 2.2K IPS", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "HP OmniBook 5 14", 
    category: "laptops", 
    brand: "HP", 
    price: 799, 
    stock: 80, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" FHD+ IPS", gpu: "AMD Radeon Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "HP OmniBook 3", 
    category: "laptops", 
    brand: "HP", 
    price: 649, 
    stock: 100, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "14\" FHD IPS", gpu: "Intel UHD Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "HP OmniBook 7 Aero", 
    category: "laptops", 
    brand: "HP", 
    price: 1049, 
    stock: 40, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "13.3\" 2.5K IPS", gpu: "AMD Radeon Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "HP OmniBook Ultra 16", 
    category: "laptops", 
    brand: "HP", 
    price: 1399, 
    stock: 30, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "16\" 3K OLED 120Hz", gpu: "AMD Radeon 880M", battery: "Up to 17 hrs" } 
  },
  { 
    name: "HP OmniBook 5 16", 
    category: "laptops", 
    brand: "HP", 
    price: 849, 
    stock: 65, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ IPS", gpu: "Intel Graphics", battery: "Up to 11 hrs" } 
  },
  { 
    name: "HyperX Omen Max 16", 
    category: "laptops", 
    brand: "HP", 
    price: 2199, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "HP Omen Transcend 14", 
    category: "laptops", 
    brand: "HP", 
    price: 1599, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED 120Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 8 hrs" } 
  },
  { 
    name: "HP Omen 16", 
    category: "laptops", 
    brand: "HP", 
    price: 1399, 
    stock: 50, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "1TB SSD", display: "16\" QHD+ 165Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 7 hrs" } 
  },
  { 
    name: "HyperX Omen 16 Valorant Limited Edition", 
    category: "laptops", 
    brand: "HP", 
    price: 1699, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 6 hrs" } 
  },
  { 
    name: "HP Victus 16", 
    category: "laptops", 
    brand: "HP", 
    price: 999, 
    stock: 80, 
    image: "",
    specs: { cpu: "AMD Ryzen 7 / Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "16.1\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "HP Victus 15", 
    category: "laptops", 
    brand: "HP", 
    price: 799, 
    stock: 110, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "12GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 6 hrs" } 
  },
  { 
    name: "HyperX Omen 15", 
    category: "laptops", 
    brand: "HP", 
    price: 1199, 
    stock: 40, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "15.6\" QHD 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 7 hrs" } 
  },
  { 
    name: "HP EliteBook X G2", 
    category: "laptops", 
    brand: "HP", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "HP EliteBook Ultra G1q", 
    category: "laptops", 
    brand: "HP", 
    price: 1599, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon X Elite", ram: "16GB", storage: "1TB SSD", display: "14\" 2.2K IPS Touch", gpu: "Qualcomm Adreno", battery: "Up to 20 hrs" } 
  },
  { 
    name: "HP EliteBook 8 G2", 
    category: "laptops", 
    brand: "HP", 
    price: 1449, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "512GB SSD", display: "14\" WUXGA IPS", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "HP EliteBook 6 G1q", 
    category: "laptops", 
    brand: "HP", 
    price: 1199, 
    stock: 55, 
    image: "",
    specs: { cpu: "AMD Ryzen 7 Pro", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA IPS", gpu: "AMD Radeon Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "HP ProBook 4 G2", 
    category: "laptops", 
    brand: "HP", 
    price: 899, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "HP ProBook 4 G1i", 
    category: "laptops", 
    brand: "HP", 
    price: 849, 
    stock: 95, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" FHD IPS", gpu: "AMD Radeon Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "HP ZBook Fury G1i 18", 
    category: "laptops", 
    brand: "HP", 
    price: 3299, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" 4K+ IPS 120Hz", gpu: "NVIDIA RTX 5000 Ada", battery: "Up to 8 hrs" } 
  },
  { 
    name: "HP ZBook Fury G1i 16", 
    category: "laptops", 
    brand: "HP", 
    price: 2899, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" WQUXGA OLED", gpu: "NVIDIA RTX 3500 Ada", battery: "Up to 9 hrs" } 
  },
  { 
    name: "HP ZBook X G1i 16", 
    category: "laptops", 
    brand: "HP", 
    price: 2499, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "16\" 4K OLED Touch", gpu: "NVIDIA RTX 2000 Ada", battery: "Up to 10 hrs" } 
  },
  { 
    name: "HP ZBook 8 G2i 14", 
    category: "laptops", 
    brand: "HP", 
    price: 1999, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED", gpu: "NVIDIA RTX 1000 Ada", battery: "Up to 12 hrs" } 
  },
  { 
    name: "HP Spectre x360 14", 
    category: "laptops", 
    brand: "HP", 
    price: 1449, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED Touch 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "HP Envy x360 14", 
    category: "laptops", 
    brand: "HP", 
    price: 949, 
    stock: 65, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5 / AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" FHD OLED Touch", gpu: "Intel Arc / Radeon", battery: "Up to 14 hrs" } 
  },
  { 
    name: "HP Pavilion 16", 
    category: "laptops", 
    brand: "HP", 
    price: 749, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core i5 / AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ IPS", gpu: "Intel Iris Xe / Radeon", battery: "Up to 10 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M5 Max, 2026)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3499, 
    stock: 25, 
    image: "",
    specs: { cpu: "Apple M5 Max", ram: "64GB", storage: "1TB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M5 Max 40-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M5 Pro, 2026)", 
    category: "laptops", 
    brand: "Apple", 
    price: 2499, 
    stock: 35, 
    image: "",
    specs: { cpu: "Apple M5 Pro", ram: "32GB", storage: "512GB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M5 Pro 20-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M5 Max, 2026)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3199, 
    stock: 30, 
    image: "",
    specs: { cpu: "Apple M5 Max", ram: "48GB", storage: "1TB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M5 Max 36-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M5 Pro, 2026)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1999, 
    stock: 45, 
    image: "",
    specs: { cpu: "Apple M5 Pro", ram: "24GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M5 Pro 16-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M5, 2025)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1599, 
    stock: 60, 
    image: "",
    specs: { cpu: "Apple M5", ram: "16GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M5 10-core GPU", battery: "Up to 24 hrs" } 
  },
  { 
    name: "MacBook Air 15-inch (M5, 2026)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1299, 
    stock: 70, 
    image: "",
    specs: { cpu: "Apple M5", ram: "16GB", storage: "512GB SSD", display: "15.3\" Liquid Retina 60Hz", gpu: "Apple M5 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Air 13-inch (M5, 2026)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1099, 
    stock: 90, 
    image: "",
    specs: { cpu: "Apple M5", ram: "16GB", storage: "256GB SSD", display: "13.6\" Liquid Retina 60Hz", gpu: "Apple M5 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Air 15-inch (M4, 2025)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Apple M4", ram: "16GB", storage: "256GB SSD", display: "15.3\" Liquid Retina 60Hz", gpu: "Apple M4 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Air 13-inch (M4, 2025)", 
    category: "laptops", 
    brand: "Apple", 
    price: 999, 
    stock: 80, 
    image: "",
    specs: { cpu: "Apple M4", ram: "16GB", storage: "256GB SSD", display: "13.6\" Liquid Retina 60Hz", gpu: "Apple M4 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M4 Max, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3499, 
    stock: 20, 
    image: "",
    specs: { cpu: "Apple M4 Max", ram: "36GB", storage: "1TB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M4 Max 32-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M4 Pro, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 2499, 
    stock: 30, 
    image: "",
    specs: { cpu: "Apple M4 Pro", ram: "24GB", storage: "512GB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M4 Pro 20-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M4 Max, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3199, 
    stock: 25, 
    image: "",
    specs: { cpu: "Apple M4 Max", ram: "36GB", storage: "1TB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M4 Max 32-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M4 Pro, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1999, 
    stock: 40, 
    image: "",
    specs: { cpu: "Apple M4 Pro", ram: "18GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M4 Pro 16-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M4, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1599, 
    stock: 55, 
    image: "",
    specs: { cpu: "Apple M4", ram: "16GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M4 10-core GPU", battery: "Up to 24 hrs" } 
  },
  { 
    name: "MacBook Air 15-inch (M3, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1299, 
    stock: 45, 
    image: "",
    specs: { cpu: "Apple M3", ram: "8GB", storage: "256GB SSD", display: "15.3\" Liquid Retina 60Hz", gpu: "Apple M3 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Air 13-inch (M3, 2024)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1099, 
    stock: 65, 
    image: "",
    specs: { cpu: "Apple M3", ram: "8GB", storage: "256GB SSD", display: "13.6\" Liquid Retina 60Hz", gpu: "Apple M3 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M3 Max, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3499, 
    stock: 15, 
    image: "",
    specs: { cpu: "Apple M3 Max", ram: "36GB", storage: "1TB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M3 Max 30-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M3 Pro, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 2499, 
    stock: 20, 
    image: "",
    specs: { cpu: "Apple M3 Pro", ram: "18GB", storage: "512GB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M3 Pro 18-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M3 Max, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3199, 
    stock: 15, 
    image: "",
    specs: { cpu: "Apple M3 Max", ram: "36GB", storage: "1TB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M3 Max 30-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M3 Pro, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1999, 
    stock: 25, 
    image: "",
    specs: { cpu: "Apple M3 Pro", ram: "18GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M3 Pro 14-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M3, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1599, 
    stock: 35, 
    image: "",
    specs: { cpu: "Apple M3", ram: "8GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M3 10-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Air 15-inch (M2, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1299, 
    stock: 40, 
    image: "",
    specs: { cpu: "Apple M2", ram: "8GB", storage: "256GB SSD", display: "15.3\" Liquid Retina 60Hz", gpu: "Apple M2 10-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M2 Max, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3499, 
    stock: 10, 
    image: "",
    specs: { cpu: "Apple M2 Max", ram: "32GB", storage: "1TB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M2 Max 30-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 16-inch (M2 Pro, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 2499, 
    stock: 15, 
    image: "",
    specs: { cpu: "Apple M2 Pro", ram: "16GB", storage: "512GB SSD", display: "16.2\" Liquid Retina XDR 120Hz", gpu: "Apple M2 Pro 19-core GPU", battery: "Up to 22 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M2 Max, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 3099, 
    stock: 12, 
    image: "",
    specs: { cpu: "Apple M2 Max", ram: "32GB", storage: "1TB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M2 Max 30-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 14-inch (M2 Pro, 2023)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1999, 
    stock: 18, 
    image: "",
    specs: { cpu: "Apple M2 Pro", ram: "16GB", storage: "512GB SSD", display: "14.2\" Liquid Retina XDR 120Hz", gpu: "Apple M2 Pro 16-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 13-inch (M2, 2022)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1299, 
    stock: 20, 
    image: "",
    specs: { cpu: "Apple M2", ram: "8GB", storage: "256GB SSD", display: "13.3\" Retina 60Hz", gpu: "Apple M2 10-core GPU", battery: "Up to 20 hrs" } 
  },
  { 
    name: "MacBook Air (M2, 2022)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Apple M2", ram: "8GB", storage: "256GB SSD", display: "13.6\" Liquid Retina 60Hz", gpu: "Apple M2 8-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "MacBook Pro 13-inch (M1, 2020)", 
    category: "laptops", 
    brand: "Apple", 
    price: 1299, 
    stock: 15, 
    image: "",
    specs: { cpu: "Apple M1", ram: "8GB", storage: "256GB SSD", display: "13.3\" Retina 60Hz", gpu: "Apple M1 8-core GPU", battery: "Up to 20 hrs" } 
  },
  { 
    name: "MacBook Air (M1, 2020)", 
    category: "laptops", 
    brand: "Apple", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Apple M1", ram: "8GB", storage: "256GB SSD", display: "13.3\" Retina 60Hz", gpu: "Apple M1 7-core GPU", battery: "Up to 18 hrs" } 
  },
  { 
    name: "Dell XPS 13", 
    category: "laptops", 
    brand: "Dell", 
    price: 1299, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "13.4\" FHD+ Touch 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Dell XPS 14", 
    category: "laptops", 
    brand: "Dell", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "14.5\" 3.2K OLED 120Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 12 hrs" } 
  },
  { 
    name: "Dell XPS 16", 
    category: "laptops", 
    brand: "Dell", 
    price: 1899, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "16.3\" 4K+ OLED 90Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Dell XPS 17", 
    category: "laptops", 
    brand: "Dell", 
    price: 2199, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "32GB", storage: "1TB SSD", display: "17.0\" UHD+ Touch", gpu: "NVIDIA RTX 4060", battery: "Up to 9 hrs" } 
  },
  { 
    name: "Alienware 18 Area-51", 
    category: "laptops", 
    brand: "Dell", 
    price: 3499, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" QHD+ 165Hz", gpu: "NVIDIA RTX 4090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "Alienware 16 Area-51", 
    category: "laptops", 
    brand: "Dell", 
    price: 2999, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Alienware 16X Aurora", 
    category: "laptops", 
    brand: "Dell", 
    price: 2499, 
    stock: 18, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Alienware m16 R2", 
    category: "laptops", 
    brand: "Dell", 
    price: 1799, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Alienware m18 R2", 
    category: "laptops", 
    brand: "Dell", 
    price: 2799, 
    stock: 12, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "18\" QHD+ 165Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 5 hrs" } 
  },
  { 
    name: "Alienware x16 R2", 
    category: "laptops", 
    brand: "Dell", 
    price: 2299, 
    stock: 22, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Dell Inspiron 14 Plus", 
    category: "laptops", 
    brand: "Dell", 
    price: 899, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "14\" 2.2K IPS", gpu: "Intel Arc Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "Dell Inspiron 16 Plus", 
    category: "laptops", 
    brand: "Dell", 
    price: 1099, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "16\" 3K OLED 120Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Dell Inspiron 5440", 
    category: "laptops", 
    brand: "Dell", 
    price: 649, 
    stock: 80, 
    image: "",
    specs: { cpu: "Intel Core 5", ram: "16GB", storage: "512GB SSD", display: "14\" FHD+ IPS", gpu: "Intel Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Dell Inspiron 13 5330", 
    category: "laptops", 
    brand: "Dell", 
    price: 699, 
    stock: 70, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "16GB", storage: "512GB SSD", display: "13.3\" QHD+ IPS", gpu: "Intel Iris Xe", battery: "Up to 11 hrs" } 
  },
  { 
    name: "Dell Inspiron 16 2-in-1", 
    category: "laptops", 
    brand: "Dell", 
    price: 899, 
    stock: 45, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ Touch", gpu: "AMD Radeon Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Dell Inspiron 15 3530", 
    category: "laptops", 
    brand: "Dell", 
    price: 499, 
    stock: 120, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "15.6\" FHD 120Hz", gpu: "Intel UHD Graphics", battery: "Up to 8 hrs" } 
  },
  { 
    name: "Dell Pro 16", 
    category: "laptops", 
    brand: "Dell", 
    price: 1199, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ IPS", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "Dell Pro 16 Plus", 
    category: "laptops", 
    brand: "Dell", 
    price: 1399, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "16\" 2.5K IPS", gpu: "Intel Arc Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "Dell Pro 14", 
    category: "laptops", 
    brand: "Dell", 
    price: 1099, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" FHD+ IPS", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Dell Pro 14 Premium", 
    category: "laptops", 
    brand: "Dell", 
    price: 1499, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "Dell Pro 13 Plus 2-in-1", 
    category: "laptops", 
    brand: "Dell", 
    price: 1399, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "13.3\" FHD+ Touch", gpu: "Intel Arc Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "Dell Pro 15 Essential", 
    category: "laptops", 
    brand: "Dell", 
    price: 749, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Graphics", battery: "Up to 9 hrs" } 
  },
  { 
    name: "Dell Latitude 7450 2-in-1", 
    category: "laptops", 
    brand: "Dell", 
    price: 1599, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7 vPro", ram: "32GB", storage: "512GB SSD", display: "14\" FHD+ Touch", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "Dell Latitude 7455", 
    category: "laptops", 
    brand: "Dell", 
    price: 1499, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon X Elite", ram: "16GB", storage: "512GB SSD", display: "14\" QHD+ IPS", gpu: "Qualcomm Adreno", battery: "Up to 20 hrs" } 
  },
  { 
    name: "Dell Latitude 7350 Detachable", 
    category: "laptops", 
    brand: "Dell", 
    price: 1699, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "13\" 3K Touch", gpu: "Intel Arc Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Dell Pro Precision 5", 
    category: "laptops", 
    brand: "Dell", 
    price: 2499, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "16\" 4K OLED", gpu: "NVIDIA RTX 2000 Ada", battery: "Up to 9 hrs" } 
  },
  { 
    name: "Dell Pro Precision 7", 
    category: "laptops", 
    brand: "Dell", 
    price: 3199, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "17.3\" UHD+ IPS", gpu: "NVIDIA RTX 5000 Ada", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Dell G15 Gaming Laptop", 
    category: "laptops", 
    brand: "Dell", 
    price: 1099, 
    stock: 55, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Dell Vostro 3520", 
    category: "laptops", 
    brand: "Dell", 
    price: 549, 
    stock: 100, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "256GB SSD", display: "15.6\" FHD 120Hz", gpu: "Intel UHD Graphics", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Dell Chromebook 11", 
    category: "laptops", 
    brand: "Dell", 
    price: 299, 
    stock: 150, 
    image: "",
    specs: { cpu: "Intel Celeron", ram: "4GB", storage: "32GB eMMC", display: "11.6\" HD", gpu: "Intel UHD Graphics", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ROG Strix SCAR 18 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 3899, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" Nebula HDR Mini-LED 240Hz", gpu: "NVIDIA RTX 5090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "ROG Strix SCAR 17 X3D", 
    category: "laptops", 
    brand: "Asus", 
    price: 3299, 
    stock: 20, 
    image: "",
    specs: { cpu: "AMD Ryzen 9 7945HX3D", ram: "32GB", storage: "1TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX 4090", battery: "Up to 6 hrs" } 
  },
  { 
    name: "ROG Strix SCAR 16 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 3499, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" Nebula HDR Mini-LED 240Hz", gpu: "NVIDIA RTX 5080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "ROG Strix SCAR 15", 
    category: "laptops", 
    brand: "Asus", 
    price: 2299, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "32GB", storage: "1TB SSD", display: "15.6\" QHD 300Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "ROG Strix SCAR 17", 
    category: "laptops", 
    brand: "Asus", 
    price: 2699, 
    stock: 22, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "32GB", storage: "1TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "ROG Strix G18 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 2799, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "18\" QHD+ 240Hz", gpu: "NVIDIA RTX 5080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "ROG Strix G16 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 2299, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "16GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 5070 Ti", battery: "Up to 7 hrs" } 
  },
  { 
    name: "ROG Strix G17", 
    category: "laptops", 
    brand: "Asus", 
    price: 1899, 
    stock: 30, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "16GB", storage: "1TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 7 hrs" } 
  },
  { 
    name: "ROG Strix G15", 
    category: "laptops", 
    brand: "Asus", 
    price: 1499, 
    stock: 40, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "15.6\" WQHD 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ROG Zephyrus G14 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 1999, 
    stock: 35, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9 HX", ram: "32GB", storage: "1TB SSD", display: "14\" OLED 120Hz", gpu: "NVIDIA RTX 5070", battery: "Up to 12 hrs" } 
  },
  { 
    name: "ROG Zephyrus G16 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 2499, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "16\" OLED 240Hz", gpu: "NVIDIA RTX 5080", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ROG Zephyrus Duo (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 3999, 
    stock: 12, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "64GB", storage: "2TB SSD", display: "16\" 3K OLED + ScreenPad Plus", gpu: "NVIDIA RTX 5090", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ROG Zephyrus M16", 
    category: "laptops", 
    brand: "Asus", 
    price: 2199, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "32GB", storage: "1TB SSD", display: "16\" Nebula HDR 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ROG Zephyrus G15", 
    category: "laptops", 
    brand: "Asus", 
    price: 1799, 
    stock: 30, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "16GB", storage: "1TB SSD", display: "15.6\" QHD 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 9 hrs" } 
  },
  { 
    name: "ROG Zephyrus Duo 16", 
    category: "laptops", 
    brand: "Asus", 
    price: 3499, 
    stock: 15, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "32GB", storage: "2TB SSD", display: "16\" Mini-LED + ScreenPad Plus", gpu: "NVIDIA RTX 4090", battery: "Up to 7 hrs" } 
  },
  { 
    name: "ROG Flow X13", 
    category: "laptops", 
    brand: "Asus", 
    price: 1499, 
    stock: 35, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "16GB", storage: "1TB SSD", display: "13.4\" QHD+ 165Hz Touch", gpu: "NVIDIA RTX 4070", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ROG Flow X16", 
    category: "laptops", 
    brand: "Asus", 
    price: 1999, 
    stock: 20, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "32GB", storage: "1TB SSD", display: "16\" Mini-LED Touch 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ROG Flow Z13", 
    category: "laptops", 
    brand: "Asus", 
    price: 1799, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "16GB", storage: "1TB SSD", display: "13.4\" QHD+ 165Hz Touch", gpu: "NVIDIA RTX 4060", battery: "Up to 7 hrs" } 
  },
  { 
    name: "ASUS TUF Gaming A15", 
    category: "laptops", 
    brand: "Asus", 
    price: 999, 
    stock: 70, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ASUS TUF Gaming A17", 
    category: "laptops", 
    brand: "Asus", 
    price: 1099, 
    stock: 60, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "17.3\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ASUS TUF Gaming F15", 
    category: "laptops", 
    brand: "Asus", 
    price: 999, 
    stock: 75, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 7 hrs" } 
  },
  { 
    name: "ASUS TUF Gaming F17", 
    category: "laptops", 
    brand: "Asus", 
    price: 1099, 
    stock: 55, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "17.3\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 7 hrs" } 
  },
  { 
    name: "ASUS TUF Gaming A16 Advantage Edition", 
    category: "laptops", 
    brand: "Asus", 
    price: 1049, 
    stock: 50, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" QHD+ 165Hz", gpu: "AMD Radeon RX 7600S", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ASUS ProArt P16", 
    category: "laptops", 
    brand: "Asus", 
    price: 2299, 
    stock: 25, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" 4K OLED Touch", gpu: "NVIDIA RTX 4070", battery: "Up to 11 hrs" } 
  },
  { 
    name: "ASUS ProArt PX13", 
    category: "laptops", 
    brand: "Asus", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "13.3\" 3K OLED Touch", gpu: "NVIDIA RTX 4060", battery: "Up to 12 hrs" } 
  },
  { 
    name: "ASUS Zenbook Pro 16X OLED", 
    category: "laptops", 
    brand: "Asus", 
    price: 2599, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "32GB", storage: "1TB SSD", display: "16\" 3.2K OLED 120Hz Touch", gpu: "NVIDIA RTX 4070", battery: "Up to 9 hrs" } 
  },
  { 
    name: "ASUS Zenbook Pro 14 OLED", 
    category: "laptops", 
    brand: "Asus", 
    price: 1499, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "1TB SSD", display: "14.5\" 2.8K OLED 120Hz Touch", gpu: "NVIDIA RTX 4070", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ASUS Zenbook 14 OLED", 
    category: "laptops", 
    brand: "Asus", 
    price: 899, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "14\" 3K OLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "ASUS Vivobook Pro 16X OLED", 
    category: "laptops", 
    brand: "Asus", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "1TB SSD", display: "16\" 3.2K OLED 120Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 9 hrs" } 
  },
  { 
    name: "ASUS Vivobook S 15 OLED", 
    category: "laptops", 
    brand: "Asus", 
    price: 849, 
    stock: 85, 
    image: "",
    specs: { cpu: "Snapdragon X Elite / Intel Ultra 7", ram: "16GB", storage: "512GB SSD", display: "15.6\" 3K OLED 120Hz", gpu: "Intel Arc / Adreno", battery: "Up to 16 hrs" } 
  },
  { 
    name: "ASUS Zenbook DUO (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 1799, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "Dual 14\" 3K OLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 11 hrs" } 
  },
  { 
    name: "ASUS Zenbook S 16 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" 3K OLED 120Hz", gpu: "AMD Radeon 890M", battery: "Up to 15 hrs" } 
  },
  { 
    name: "ASUS Zenbook S 14 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 1299, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" 3K OLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "ASUS Zenbook A16 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" IPS 144Hz", gpu: "AMD Radeon Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "ASUS Zenbook A14 (2026)", 
    category: "laptops", 
    brand: "Asus", 
    price: 1099, 
    stock: 55, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "14\" IPS 120Hz", gpu: "AMD Radeon Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "ProArt PZ14", 
    category: "laptops", 
    brand: "Asus", 
    price: 1249, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon X Plus", ram: "16GB", storage: "1TB SSD", display: "14\" 3K OLED Touch", gpu: "Qualcomm Adreno", battery: "Up to 17 hrs" } 
  },
  { 
    name: "ASUS Vivobook S 16", 
    category: "laptops", 
    brand: "Asus", 
    price: 799, 
    stock: 75, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" 3.2K OLED 120Hz", gpu: "AMD Radeon Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "ASUS Vivobook S 14", 
    category: "laptops", 
    brand: "Asus", 
    price: 749, 
    stock: 80, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" OLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "ASUS ExpertBook Ultra", 
    category: "laptops", 
    brand: "Asus", 
    price: 1599, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7 vPro", ram: "32GB", storage: "1TB SSD", display: "14\" 2.8K OLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "ASUS TUF Gaming A14", 
    category: "laptops", 
    brand: "Asus", 
    price: 1199, 
    stock: 45, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "16GB", storage: "512GB SSD", display: "14\" QHD+ 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 10 hrs" } 
  },
  { 
    name: "ROG Ally X", 
    category: "gaming", 
    brand: "Asus", 
    price: 799, 
    stock: 100, 
    image: "",
    specs: { cpu: "AMD Ryzen Z1 Extreme", ram: "24GB", storage: "1TB SSD", display: "7\" FHD 120Hz Touch", gpu: "AMD Radeon Graphics", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ASUS Vivobook 15", 
    category: "laptops", 
    brand: "Asus", 
    price: 529, 
    stock: 130, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Iris Xe", battery: "Up to 8 hrs" } 
  },
  { 
    name: "ProArt StudioBook 16", 
    category: "laptops", 
    brand: "Asus", 
    price: 2999, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9", ram: "64GB", storage: "2TB SSD", display: "16\" 3.2K OLED 120Hz Touch", gpu: "NVIDIA RTX 4070", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Surface Laptop (8th Edition, 13.8-inch)", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon X Elite / Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "13.8\" PixelSense Flow Touch", gpu: "Qualcomm Adreno / Intel Arc", battery: "Up to 22 hrs" } 
  },
  { 
    name: "Surface Laptop (8th Edition, 15-inch)", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1599, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon X Elite / Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "15\" PixelSense Flow Touch", gpu: "Qualcomm Adreno / Intel Arc", battery: "Up to 22 hrs" } 
  },
  { 
    name: "Surface Pro (12th Edition)", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1299, 
    stock: 45, 
    image: "",
    specs: { cpu: "Snapdragon X Elite / Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "13\" PixelSense OLED Touch 120Hz", gpu: "Qualcomm Adreno / Intel Arc", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Surface Laptop (7th Edition, 13.8-inch)", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon X Plus", ram: "16GB", storage: "256GB SSD", display: "13.8\" PixelSense Flow Touch", gpu: "Qualcomm Adreno", battery: "Up to 20 hrs" } 
  },
  { 
    name: "Surface Laptop (7th Edition, 15-inch)", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon X Elite", ram: "16GB", storage: "512GB SSD", display: "15\" PixelSense Flow Touch", gpu: "Qualcomm Adreno", battery: "Up to 22 hrs" } 
  },
  { 
    name: "Surface Pro (11th Edition)", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1199, 
    stock: 55, 
    image: "",
    specs: { cpu: "Snapdragon X Plus", ram: "16GB", storage: "256GB SSD", display: "13\" PixelSense OLED Touch", gpu: "Qualcomm Adreno", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Surface Laptop Go", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 549, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "128GB SSD", display: "12.4\" PixelSense Touch", gpu: "Intel Iris Xe", battery: "Up to 13 hrs" } 
  },
  { 
    name: "Surface Laptop Studio 2", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1999, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "32GB", storage: "1TB SSD", display: "14.4\" PixelSense Flow Touch 120Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 18 hrs" } 
  },
  { 
    name: "Surface Pro 9", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core i5 / Microsoft SQ3", ram: "8GB", storage: "256GB SSD", display: "13\" PixelSense Touch 120Hz", gpu: "Intel Iris Xe / Microsoft SQ3", battery: "Up to 15 hrs" } 
  },
  { 
    name: "Surface Laptop 5", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 899, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "256GB SSD", display: "13.5\" PixelSense Touch", gpu: "Intel Iris Xe", battery: "Up to 18 hrs" } 
  },
  { 
    name: "Surface Go 4", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 419, 
    stock: 80, 
    image: "",
    specs: { cpu: "Intel N200", ram: "8GB", storage: "128GB UFS", display: "10.5\" PixelSense Touch", gpu: "Intel UHD Graphics", battery: "Up to 12.5 hrs" } 
  },
  { 
    name: "Surface Pro 10 for Business", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1299, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5 vPro", ram: "16GB", storage: "256GB SSD", display: "13\" PixelSense Touch", gpu: "Intel Arc Graphics", battery: "Up to 19 hrs" } 
  },
  { 
    name: "Surface Laptop 6 for Business", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1299, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5 vPro", ram: "16GB", storage: "256GB SSD", display: "13.5\" PixelSense Touch", gpu: "Intel Arc Graphics", battery: "Up to 19 hrs" } 
  },
  { 
    name: "Surface Hub 3", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 8999, 
    stock: 5, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "32GB", storage: "256GB SSD", display: "50\" PixelSense Touch 4K", gpu: "Intel Iris Xe", battery: "N/A (AC Power)" } 
  },
  { 
    name: "Surface Duo 2", 
    category: "smartphones", 
    brand: "Microsoft", 
    price: 1199, 
    stock: 10, 
    image: "",
    specs: { cpu: "Snapdragon 888 5G", ram: "8GB", storage: "128GB", display: "Dual 5.8\" AMOLED 90Hz", battery: "4449mAh", camera: "12MP Triple" } 
  },
  { 
    name: "Surface Pro 8", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 899, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "256GB SSD", display: "13\" PixelSense Touch 120Hz", gpu: "Intel Iris Xe", battery: "Up to 16 hrs" } 
  },
  { 
    name: "Surface Laptop 4", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 799, 
    stock: 40, 
    image: "",
    specs: { cpu: "AMD Ryzen 5 / Intel Core i5", ram: "8GB", storage: "256GB SSD", display: "13.5\" PixelSense Touch", gpu: "Intel Iris Xe / Radeon", battery: "Up to 19 hrs" } 
  },
  { 
    name: "Surface Book 3", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 1299, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "256GB SSD", display: "13.5\" PixelSense Touch", gpu: "NVIDIA GTX 1650", battery: "Up to 17.5 hrs" } 
  },
  { 
    name: "Surface Studio 2+", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 4499, 
    stock: 8, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "32GB", storage: "1TB SSD", display: "28\" PixelSense Touch 4K", gpu: "NVIDIA RTX 3060", battery: "N/A (AC Power)" } 
  },
  { 
    name: "Surface Pro 7+", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 699, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "128GB SSD", display: "12.3\" PixelSense Touch", gpu: "Intel Iris Xe", battery: "Up to 15 hrs" } 
  },
  { 
    name: "Surface Laptop 3", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 649, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "128GB SSD", display: "13.5\" PixelSense Touch", gpu: "Intel Iris Plus", battery: "Up to 11.5 hrs" } 
  },
  { 
    name: "Surface Go 3", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 399, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Pentium Gold", ram: "4GB", storage: "64GB eMMC", display: "10.5\" PixelSense Touch", gpu: "Intel UHD Graphics", battery: "Up to 11 hrs" } 
  },
  { 
    name: "Surface Pro X", 
    category: "laptops", 
    brand: "Microsoft", 
    price: 799, 
    stock: 15, 
    image: "",
    specs: { cpu: "Microsoft SQ2", ram: "8GB", storage: "128GB SSD", display: "13\" PixelSense Touch", gpu: "Microsoft SQ2 Adreno", battery: "Up to 15 hrs" } 
  },
  { 
    name: "MSI Titan 18 HX AI", 
    category: "laptops", 
    brand: "MSI", 
    price: 3999, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" UHD+ Mini-LED 120Hz", gpu: "NVIDIA RTX 4090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "MSI Raider 18 HX AI", 
    category: "laptops", 
    brand: "MSI", 
    price: 3499, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "2TB SSD", display: "18\" QHD+ 240Hz", gpu: "NVIDIA RTX 4090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "MSI Raider 16 Max HX", 
    category: "laptops", 
    brand: "MSI", 
    price: 2699, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "MSI Stealth 16 AI+", 
    category: "laptops", 
    brand: "MSI", 
    price: 2199, 
    stock: 25, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "MSI Crosshair 16 Max HX", 
    category: "laptops", 
    brand: "MSI", 
    price: 1599, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core i7 HX", ram: "16GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 6 hrs" } 
  },
  { 
    name: "MSI Katana 15 HX", 
    category: "laptops", 
    brand: "MSI", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core i7 HX", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 5 hrs" } 
  },
  { 
    name: "MSI Cyborg 15 Max", 
    category: "laptops", 
    brand: "MSI", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "MSI Vector GP76", 
    category: "laptops", 
    brand: "MSI", 
    price: 1899, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "1TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 5 hrs" } 
  },
  { 
    name: "MSI Pulse 17 AI", 
    category: "laptops", 
    brand: "MSI", 
    price: 1499, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "MSI Sword 16 HX", 
    category: "laptops", 
    brand: "MSI", 
    price: 1249, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Core i7 HX", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ 144Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "MSI Thin GF63", 
    category: "laptops", 
    brand: "MSI", 
    price: 799, 
    stock: 80, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "15.6\" FHD 144Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 5 hrs" } 
  },
  { 
    name: "MSI Creator A16 AI+", 
    category: "laptops", 
    brand: "MSI", 
    price: 1799, 
    stock: 25, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 165Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "MSI Creator Z17 HX Studio", 
    category: "laptops", 
    brand: "MSI", 
    price: 2899, 
    stock: 12, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "2TB SSD", display: "17\" QHD+ Touch 165Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 7 hrs" } 
  },
  { 
    name: "MSI Creator Pro M17", 
    category: "laptops", 
    brand: "MSI", 
    price: 2199, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "32GB", storage: "1TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX A1000", battery: "Up to 6 hrs" } 
  },
  { 
    name: "MSI Prestige 16 AI+ Evo", 
    category: "laptops", 
    brand: "MSI", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ IPS", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "MSI Prestige 14 AI+ Evo", 
    category: "laptops", 
    brand: "MSI", 
    price: 1299, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" QHD+ IPS", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "MSI Prestige 13 AI+ Evo", 
    category: "laptops", 
    brand: "MSI", 
    price: 1199, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "13.3\" 2.8K OLED", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "MSI Summit A16 AI+", 
    category: "laptops", 
    brand: "MSI", 
    price: 1499, 
    stock: 30, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ Touch", gpu: "AMD Radeon Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "MSI Summit 13 AI+ Evo", 
    category: "laptops", 
    brand: "MSI", 
    price: 1299, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "13.3\" FHD+ Touch", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "MSI Modern 15", 
    category: "laptops", 
    brand: "MSI", 
    price: 699, 
    stock: 75, 
    image: "",
    specs: { cpu: "Intel Core i5 / AMD Ryzen 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Iris Xe / Radeon", battery: "Up to 8 hrs" } 
  },
  { 
    name: "MSI Modern 14", 
    category: "laptops", 
    brand: "MSI", 
    price: 599, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "14\" FHD IPS", gpu: "Intel Iris Xe", battery: "Up to 8 hrs" } 
  },
  { 
    name: "MSI Claw A1M (Handheld)", 
    category: "gaming", 
    brand: "MSI", 
    price: 699, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "7\" FHD 120Hz Touch", gpu: "Intel Arc Graphics", battery: "Up to 7 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book6 Ultra", 
    category: "laptops", 
    brand: "Samsung", 
    price: 2399, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 9", ram: "32GB", storage: "1TB SSD", display: "16\" 3K AMOLED 120Hz", gpu: "NVIDIA RTX 4070", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book6 Pro", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1499, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "16\" 3K AMOLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book6 Pro 360", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "16\" 3K AMOLED Touch 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book6 Edge", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1299, 
    stock: 45, 
    image: "",
    specs: { cpu: "Snapdragon X Elite", ram: "16GB", storage: "512GB SSD", display: "14\" 3K AMOLED 120Hz", gpu: "Qualcomm Adreno", battery: "Up to 22 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book6 (14-inch / 16-inch)", 
    category: "laptops", 
    brand: "Samsung", 
    price: 999, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD AMOLED", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book6 Touch", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1099, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD AMOLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book5 Pro 360", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1599, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "16\" 3K AMOLED Touch 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book5 Pro", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1399, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "14\" 3K AMOLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book5 360", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1249, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD AMOLED Touch", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book5", 
    category: "laptops", 
    brand: "Samsung", 
    price: 899, 
    stock: 70, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "8GB", storage: "256GB SSD", display: "15.6\" FHD AMOLED", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "Samsung Galaxy Book5 Edge", 
    category: "laptops", 
    brand: "Samsung", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon X Plus", ram: "16GB", storage: "512GB SSD", display: "15.6\" 3K AMOLED", gpu: "Qualcomm Adreno", battery: "Up to 20 hrs" } 
  },
  { 
    name: "Razer Blade 18 (2026)", 
    category: "laptops", 
    brand: "Razer", 
    price: 4499, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" UHD+ 200Hz", gpu: "NVIDIA RTX 5090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "Razer Blade 18 (Mercury Edition)", 
    category: "laptops", 
    brand: "Razer", 
    price: 4599, 
    stock: 8, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" QHD+ 240Hz", gpu: "NVIDIA RTX 5090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "Razer Blade 16 (2026)", 
    category: "laptops", 
    brand: "Razer", 
    price: 3799, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" Dual-Mode Mini-LED", gpu: "NVIDIA RTX 5080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Razer Blade 16 OLED", 
    category: "laptops", 
    brand: "Razer", 
    price: 3899, 
    stock: 12, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ OLED 240Hz", gpu: "NVIDIA RTX 5080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Razer Blade 16 (Mercury Edition)", 
    category: "laptops", 
    brand: "Razer", 
    price: 3999, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 5080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "Razer Blade 14 (2026)", 
    category: "laptops", 
    brand: "Razer", 
    price: 2699, 
    stock: 25, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "14\" QHD+ 240Hz", gpu: "NVIDIA RTX 5070", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Razer Blade 14 (Mercury Edition)", 
    category: "laptops", 
    brand: "Razer", 
    price: 2799, 
    stock: 20, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "32GB", storage: "1TB SSD", display: "14\" QHD+ 240Hz", gpu: "NVIDIA RTX 5070", battery: "Up to 10 hrs" } 
  },
  { 
    name: "LG gram Pro 17 (Copilot+ PC)", 
    category: "laptops", 
    brand: "LG", 
    price: 1999, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "17\" WQXGA+ 144Hz", gpu: "NVIDIA RTX 3050 / Intel Arc", battery: "Up to 17 hrs" } 
  },
  { 
    name: "LG gram Pro 16 (Copilot+ PC)", 
    category: "laptops", 
    brand: "LG", 
    price: 1799, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "16\" WQXGA+ OLED 144Hz", gpu: "NVIDIA RTX 3050 / Intel Arc", battery: "Up to 18 hrs" } 
  },
  { 
    name: "LG gram Pro 2-in-1 16-inch", 
    category: "laptops", 
    brand: "LG", 
    price: 1899, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "16\" WQXGA+ IPS Touch 144Hz", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "LG gram 17 (Copilot+ PC)", 
    category: "laptops", 
    brand: "LG", 
    price: 1699, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "17\" WQXGA IPS", gpu: "Intel Arc Graphics", battery: "Up to 21 hrs" } 
  },
  { 
    name: "LG gram 16 (Copilot+ PC)", 
    category: "laptops", 
    brand: "LG", 
    price: 1599, 
    stock: 45, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "16\" WQXGA IPS", gpu: "Intel Arc Graphics", battery: "Up to 22 hrs" } 
  },
  { 
    name: "LG gram 15 (Copilot+ PC)", 
    category: "laptops", 
    brand: "LG", 
    price: 1399, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Arc Graphics", battery: "Up to 20 hrs" } 
  },
  { 
    name: "LG gram 14 (Copilot+ PC)", 
    category: "laptops", 
    brand: "LG", 
    price: 1299, 
    stock: 60, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA IPS", gpu: "Intel Arc Graphics", battery: "Up to 23 hrs" } 
  },
  { 
    name: "LG gram Book 16", 
    category: "laptops", 
    brand: "LG", 
    price: 999, 
    stock: 70, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ IPS", gpu: "Intel Iris Xe", battery: "Up to 15 hrs" } 
  },
  { 
    name: "LG gram Book 15", 
    category: "laptops", 
    brand: "LG", 
    price: 899, 
    stock: 80, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "512GB SSD", display: "15.6\" FHD IPS", gpu: "Intel Iris Xe", battery: "Up to 14 hrs" } 
  },
  { 
    name: "LG gram Book 14 (2026 Edition)", 
    category: "laptops", 
    brand: "LG", 
    price: 799, 
    stock: 90, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" FHD IPS", gpu: "Intel Arc Graphics", battery: "Up to 16 hrs" } 
  },
  { 
    name: "LG gram Style 16 (OLED)", 
    category: "laptops", 
    brand: "LG", 
    price: 1799, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "16\" 3.2K OLED 120Hz", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "LG gram Style 14 (OLED)", 
    category: "laptops", 
    brand: "LG", 
    price: 1499, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "14\" 3K OLED 90Hz", gpu: "Intel Arc Graphics", battery: "Up to 14 hrs" } 
  },
  { 
    name: "LG gram SuperSlim 15", 
    category: "laptops", 
    brand: "LG", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "15.6\" OLED FHD+", gpu: "Intel Arc Graphics", battery: "Up to 13 hrs" } 
  },
  { 
    name: "LG gram 2-in-1 14-inch", 
    category: "laptops", 
    brand: "LG", 
    price: 1399, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "14\" WUXGA IPS Touch", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "LG UltraPC 16 (AMD Ryzen)", 
    category: "laptops", 
    brand: "LG", 
    price: 899, 
    stock: 60, 
    image: "",
    specs: { cpu: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD", display: "16\" WUXGA IPS", gpu: "AMD Radeon Graphics", battery: "Up to 12 hrs" } 
  },
  { 
    name: "LG UltraPC 14", 
    category: "laptops", 
    brand: "LG", 
    price: 799, 
    stock: 70, 
    image: "",
    specs: { cpu: "AMD Ryzen 5", ram: "8GB", storage: "512GB SSD", display: "14\" FHD IPS", gpu: "AMD Radeon Graphics", battery: "Up to 11 hrs" } 
  },
  { 
    name: "AORUS Master 18", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 3699, 
    stock: 10, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "64GB", storage: "2TB SSD", display: "18\" QHD+ 240Hz", gpu: "NVIDIA RTX 4090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "AORUS Master 16", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 2999, 
    stock: 15, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 6 hrs" } 
  },
  { 
    name: "GIGABYTE AERO X16", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 1899, 
    stock: 25, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 165Hz OLED", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "GIGABYTE Gaming A18 Pro", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 2199, 
    stock: 20, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "1TB SSD", display: "18\" QHD+ 240Hz", gpu: "NVIDIA RTX 4080", battery: "Up to 5 hrs" } 
  },
  { 
    name: "GIGABYTE Gaming A16", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 1199, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "16\" FHD+ 165Hz", gpu: "NVIDIA RTX 4060", battery: "Up to 6 hrs" } 
  },
  { 
    name: "AERO 16 OLED", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 1999, 
    stock: 30, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "1TB SSD", display: "16\" 4K+ OLED", gpu: "NVIDIA RTX 4070", battery: "Up to 8 hrs" } 
  },
  { 
    name: "AERO 14 OLED", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 1499, 
    stock: 35, 
    image: "",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED 90Hz", gpu: "NVIDIA RTX 4050", battery: "Up to 9 hrs" } 
  },
  { 
    name: "AORUS 17X", 
    category: "laptops", 
    brand: "Gigabyte", 
    price: 3299, 
    stock: 12, 
    image: "",
    specs: { cpu: "Intel Core i9 HX", ram: "32GB", storage: "2TB SSD", display: "17.3\" QHD 240Hz", gpu: "NVIDIA RTX 4090", battery: "Up to 5 hrs" } 
  },
  { 
    name: "Framework Laptop 13 (AMD Ryzen AI 300 Series)", 
    category: "laptops", 
    brand: "Framework", 
    price: 1249, 
    stock: 45, 
    image: "",
    specs: { cpu: "AMD Ryzen AI 9", ram: "16GB", storage: "512GB SSD", display: "13.5\" 2.25K IPS 3:2", gpu: "AMD Radeon 880M", battery: "Up to 14 hrs" } 
  },
  { 
    name: "Framework Laptop 13 Pro (Intel Core Ultra Series 3)", 
    category: "laptops", 
    brand: "Framework", 
    price: 1399, 
    stock: 40, 
    image: "",
    specs: { cpu: "Intel Core Ultra 7", ram: "32GB", storage: "1TB SSD", display: "13.5\" 2.25K IPS 3:2", gpu: "Intel Arc Graphics", battery: "Up to 15 hrs" } 
  },
  { 
    name: "Framework Laptop 16 (AMD Ryzen 7040 / Ryzen 9)", 
    category: "laptops", 
    brand: "Framework", 
    price: 1699, 
    stock: 30, 
    image: "",
    specs: { cpu: "AMD Ryzen 9", ram: "32GB", storage: "1TB SSD", display: "16\" QHD+ 165Hz Modular", gpu: "AMD Radeon RX 7700S", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Framework Laptop Chromebook Edition", 
    category: "laptops", 
    brand: "Framework", 
    price: 999, 
    stock: 50, 
    image: "",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "256GB SSD", display: "13.5\" 2.25K IPS 3:2", gpu: "Intel Iris Xe", battery: "Up to 10 hrs" } 
  },
  { 
    name: "Huawei Watch Ultimate 2", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 899, 
    stock: 25, 
    image: "",
    specs: { display: "1.5\" LTPO AMOLED", batteryLife: "Up to 14 days", waterResistance: "10ATM (Dive-capable)", sensors: "ECG, Heart Rate, SpO2, TruSeen 6.0" } 
  },
  { 
    name: "Huawei Watch Ultimate Design", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 2999, 
    stock: 10, 
    image: "",
    specs: { display: "1.5\" LTPO AMOLED", batteryLife: "Up to 14 days", waterResistance: "10ATM", sensors: "18K Gold Inlays, ECG, Heart Rate, SpO2" } 
  },
  { 
    name: "Huawei Watch Ultimate", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 799, 
    stock: 30, 
    image: "",
    specs: { display: "1.5\" LTPO AMOLED", batteryLife: "Up to 14 days", waterResistance: "10ATM", sensors: "Zirconium-based Liquid Metal, ECG, SpO2" } 
  },
  { 
    name: "Huawei Watch 6 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 549, 
    stock: 45, 
    image: "",
    specs: { display: "1.46\" LTPO AMOLED", batteryLife: "Up to 7 days", waterResistance: "5ATM", sensors: "ECG, Arterial Stiffness, SpO2" } 
  },
  { 
    name: "Huawei Watch 6 (46mm)", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 399, 
    stock: 60, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 5 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Tracking" } 
  },
  { 
    name: "Huawei Watch 6 (41mm)", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 369, 
    stock: 55, 
    image: "",
    specs: { display: "1.32\" AMOLED", batteryLife: "Up to 4 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Menstrual Cycle" } 
  },
  { 
    name: "Huawei Watch 5 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 499, 
    stock: 40, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 4.5 days", waterResistance: "5ATM", sensors: "ECG, Heart Rate, SpO2, GPS" } 
  },
  { 
    name: "Huawei Watch 5 (46mm)", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 349, 
    stock: 70, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 3 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Dual-band GPS" } 
  },
  { 
    name: "Huawei Watch 5 (42mm)", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 319, 
    stock: 65, 
    image: "",
    specs: { display: "1.32\" AMOLED", batteryLife: "Up to 2.5 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Tracker" } 
  },
  { 
    name: "Huawei Watch 4 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 449, 
    stock: 35, 
    image: "",
    specs: { display: "1.5\" LTPO AMOLED", batteryLife: "Up to 4.5 days", waterResistance: "5ATM", sensors: "Respiratory Check, ECG, SpO2" } 
  },
  { 
    name: "Huawei Watch 4", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 399, 
    stock: 50, 
    image: "",
    specs: { display: "1.5\" LTPO AMOLED", batteryLife: "Up to 3 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Skin Temperature" } 
  },
  { 
    name: "Huawei Watch D2", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 499, 
    stock: 40, 
    image: "",
    specs: { display: "1.82\" AMOLED", batteryLife: "Up to 6 days", waterResistance: "IP68", sensors: "Ambulatory Blood Pressure Monitoring (ABPM), ECG" } 
  },
  { 
    name: "Huawei Watch D", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 399, 
    stock: 30, 
    image: "",
    specs: { display: "1.64\" AMOLED", batteryLife: "Up to 7 days", waterResistance: "IP68", sensors: "Real Blood Pressure Measurement, ECG" } 
  },
  { 
    name: "Huawei Watch GT 6 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 379, 
    stock: 80, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Golf Course Maps, ECG, Heart Rate, SpO2" } 
  },
  { 
    name: "Huawei Watch GT 6", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 249, 
    stock: 120, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Dual-band GPS" } 
  },
  { 
    name: "Huawei Watch GT 5 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 349, 
    stock: 75, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "ECG, Free Diving Mode, Golf Maps" } 
  },
  { 
    name: "Huawei Watch GT 5", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 229, 
    stock: 110, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Route Back" } 
  },
  { 
    name: "Huawei Watch GT 4", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 199, 
    stock: 150, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Calorie Counter, Heart Rate, GPS" } 
  },
  { 
    name: "Huawei Watch GT 3 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 299, 
    stock: 50, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "ECG, Freediving, SpO2" } 
  },
  { 
    name: "Huawei Watch GT 3", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 159, 
    stock: 90, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Dual-band GPS" } 
  },
  { 
    name: "Huawei Watch GT 3 SE", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 129, 
    stock: 85, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Tracking" } 
  },
  { 
    name: "Huawei Watch GT Runner", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 229, 
    stock: 40, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Running Ability Index, Dual-Band GPS" } 
  },
  { 
    name: "Huawei Watch GT Cyber", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 179, 
    stock: 45, 
    image: "",
    specs: { display: "1.32\" AMOLED", batteryLife: "Up to 7 days", waterResistance: "5ATM", sensors: "Interchangeable Shell Design, Heart Rate" } 
  },
  { 
    name: "Huawei Watch Fit 5 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 149, 
    stock: 90, 
    image: "",
    specs: { display: "1.82\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Animated Workouts" } 
  },
  { 
    name: "Huawei Watch Fit 5", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 119, 
    stock: 130, 
    image: "",
    specs: { display: "1.74\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Monitor" } 
  },
  { 
    name: "Huawei Watch Fit 4 Pro", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 139, 
    stock: 70, 
    image: "",
    specs: { display: "1.82\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "Built-in GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Huawei Watch Fit 4", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 99, 
    stock: 150, 
    image: "",
    specs: { display: "1.74\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Quick Workout Animations" } 
  },
  { 
    name: "Huawei Watch Fit 3", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 89, 
    stock: 200, 
    image: "",
    specs: { display: "1.82\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "GPS, Heart Rate, SpO2, Running Coach" } 
  },
  { 
    name: "Huawei Watch Fit 2", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 69, 
    stock: 140, 
    image: "",
    specs: { display: "1.74\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "Bluetooth Calling, Heart Rate, SpO2" } 
  },
  { 
    name: "Huawei Watch Fit (1st Gen)", 
    category: "smartwatches", 
    brand: "Huawei", 
    price: 49, 
    stock: 80, 
    image: "",
    specs: { display: "1.64\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Watch S5 46mm", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 199, 
    stock: 90, 
    image: "",
    specs: { display: "1.43\" AMOLED 60Hz", batteryLife: "Up to 15 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Dual-Frequency GPS" } 
  },
  { 
    name: "Xiaomi Watch 5", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 169, 
    stock: 110, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Tracking" } 
  },
  { 
    name: "Xiaomi Watch S4 41mm", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 149, 
    stock: 85, 
    image: "",
    specs: { display: "1.32\" AMOLED", batteryLife: "Up to 7 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, NFC" } 
  },
  { 
    name: "Xiaomi Watch S4", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 179, 
    stock: 100, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 15 days", waterResistance: "5ATM", sensors: "Interchangeable Bezels, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Watch S3", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 149, 
    stock: 130, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 15 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, GPS" } 
  },
  { 
    name: "Xiaomi Watch 2", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 169, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon W5+ Gen 1", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 65 hrs", waterResistance: "5ATM", sensors: "Wear OS, Heart Rate, SpO2, GPS" } 
  },
  { 
    name: "Xiaomi Watch 2 Pro", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 229, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon W5+ Gen 1", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 65 hrs", waterResistance: "5ATM", sensors: "Wear OS, LTE Option, Body Composition, GPS" } 
  },
  { 
    name: "Xiaomi Watch S1 Pro", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 199, 
    stock: 40, 
    image: "",
    specs: { display: "1.47\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Sapphire Glass, Heart Rate, SpO2, GPS" } 
  },
  { 
    name: "Xiaomi Watch S1", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 149, 
    stock: 55, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 12 days", waterResistance: "5ATM", sensors: "Sapphire Crystal, Heart Rate, SpO2, GPS" } 
  },
  { 
    name: "Xiaomi Watch S1 Active", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 129, 
    stock: 70, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 12 days", waterResistance: "5ATM", sensors: "117 Fitness Modes, Dual-Band GPS, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 6", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 99, 
    stock: 160, 
    image: "",
    specs: { display: "1.97\" AMOLED", batteryLife: "Up to 20 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Built-in GPS" } 
  },
  { 
    name: "Xiaomi Redmi Watch 6 Lite", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 69, 
    stock: 180, 
    image: "",
    specs: { display: "1.96\" AMOLED", batteryLife: "Up to 18 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Connected GPS" } 
  },
  { 
    name: "Xiaomi Redmi Watch 6 Active", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 49, 
    stock: 220, 
    image: "",
    specs: { display: "2.0\" LCD", batteryLife: "Up to 18 days", waterResistance: "5ATM", sensors: "Heart Rate, Sleep Tracker, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 5 Active", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 45, 
    stock: 250, 
    image: "",
    specs: { display: "2.0\" LCD", batteryLife: "Up to 18 days", waterResistance: "5ATM", sensors: "Bluetooth Calling, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 5 Lite", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 59, 
    stock: 200, 
    image: "",
    specs: { display: "1.96\" AMOLED", batteryLife: "Up to 18 days", waterResistance: "5ATM", sensors: "Built-in GNSS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 4", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 89, 
    stock: 140, 
    image: "",
    specs: { display: "1.97\" AMOLED", batteryLife: "Up to 20 days", waterResistance: "5ATM", sensors: "Aluminum Frame, Built-in GPS, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 3", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 79, 
    stock: 90, 
    image: "",
    specs: { display: "1.75\" AMOLED", batteryLife: "Up to 12 days", waterResistance: "5ATM", sensors: "Built-in GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 3 Active", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 39, 
    stock: 300, 
    image: "",
    specs: { display: "1.83\" LCD", batteryLife: "Up to 12 days", waterResistance: "5ATM", sensors: "Bluetooth Calling, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Redmi Watch 2 Lite", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 59, 
    stock: 110, 
    image: "",
    specs: { display: "1.55\" TFT", batteryLife: "Up to 10 days", waterResistance: "5ATM", sensors: "GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 10 Pro", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 79, 
    stock: 180, 
    image: "",
    specs: { display: "1.72\" AMOLED 60Hz", batteryLife: "Up to 22 days", waterResistance: "5ATM", sensors: "Built-in GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 10", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 49, 
    stock: 350, 
    image: "",
    specs: { display: "1.62\" AMOLED 60Hz", batteryLife: "Up to 21 days", waterResistance: "5ATM", sensors: "Linear Haptic Motor, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 9 Pro", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 69, 
    stock: 200, 
    image: "",
    specs: { display: "1.74\" AMOLED 60Hz", batteryLife: "Up to 21 days", waterResistance: "5ATM", sensors: "Built-in GNSS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 9", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 39, 
    stock: 400, 
    image: "",
    specs: { display: "1.62\" AMOLED 60Hz", batteryLife: "Up to 21 days", waterResistance: "5ATM", sensors: "Aluminum Body, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 9 Active", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 25, 
    stock: 300, 
    image: "",
    specs: { display: "1.47\" TFT", batteryLife: "Up to 18 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Tracking" } 
  },
  { 
    name: "Xiaomi Smart Band 8 Pro", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 59, 
    stock: 150, 
    image: "",
    specs: { display: "1.74\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Built-in GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 8", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 35, 
    stock: 300, 
    image: "",
    specs: { display: "1.62\" AMOLED", batteryLife: "Up to 16 days", waterResistance: "5ATM", sensors: "Pendant/Running Clip Accessories, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Smart Band 8 Active", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 22, 
    stock: 250, 
    image: "",
    specs: { display: "1.47\" TFT", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Monitor" } 
  },
  { 
    name: "Xiaomi Smart Band 7 Pro", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 49, 
    stock: 120, 
    image: "",
    specs: { display: "1.64\" AMOLED", batteryLife: "Up to 12 days", waterResistance: "5ATM", sensors: "Built-in GPS, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Mi Band 7", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 29, 
    stock: 180, 
    image: "",
    specs: { display: "1.62\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Always-On Display, Heart Rate, SpO2" } 
  },
  { 
    name: "Xiaomi Mi Band 6", 
    category: "smartwatches", 
    brand: "Xiaomi", 
    price: 24, 
    stock: 100, 
    image: "",
    specs: { display: "1.56\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "SpO2 Sensor, Heart Rate, Sleep Tracking" } 
  },
  { 
    name: "Apple Watch Ultra 3", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 799, 
    stock: 45, 
    image: "",
    specs: { display: "Always-On Retina OLED (3000 nits)", batteryLife: "Up to 72 hrs (Low Power Mode)", waterResistance: "100m (WR100)", sensors: "Dual-Frequency GPS, Blood Oxygen, ECG, Satellite SOS" } 
  },
  { 
    name: "Apple Watch Series 11", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 399, 
    stock: 90, 
    image: "",
    specs: { display: "Always-On Retina LTPO3 OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "S11 SiP, ECG, Blood Oxygen, Temperature Sensor" } 
  },
  { 
    name: "Apple Watch SE 3", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 249, 
    stock: 120, 
    image: "",
    specs: { display: "Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Heart Rate Monitor, Fall Detection, Crash Detection" } 
  },
  { 
    name: "Apple Watch Ultra 2", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 749, 
    stock: 40, 
    image: "",
    specs: { display: "Always-On Retina OLED (3000 nits)", batteryLife: "Up to 36 hrs", waterResistance: "100m (WR100)", sensors: "S9 SiP, Double Tap Gesture, Precision Finding" } 
  },
  { 
    name: "Apple Watch Series 10", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 389, 
    stock: 75, 
    image: "",
    specs: { display: "Wide-Angle OLED (Thinner Chassis)", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Sleep Apnea Detection, Fast Charging, ECG" } 
  },
  { 
    name: "Apple Watch Series 9", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 329, 
    stock: 50, 
    image: "",
    specs: { display: "Always-On Retina OLED (2000 nits)", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "S9 Chip, Double Tap, On-Device Siri" } 
  },
  { 
    name: "Apple Watch Ultra", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 649, 
    stock: 20, 
    image: "",
    specs: { display: "Always-On Retina OLED (2000 nits)", batteryLife: "Up to 36 hrs", waterResistance: "100m (WR100)", sensors: "Titanium Case, Dual-Frequency GPS, Depth Gauge" } 
  },
  { 
    name: "Apple Watch SE (2nd Generation)", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 229, 
    stock: 85, 
    image: "",
    specs: { display: "Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "S8 Chip, Crash Detection, Heart Rate Monitor" } 
  },
  { 
    name: "Apple Watch Series 8", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 299, 
    stock: 30, 
    image: "",
    specs: { display: "Always-On Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Temperature Sensing, Crash Detection, ECG" } 
  },
  { 
    name: "Apple Watch Series 7", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 249, 
    stock: 25, 
    image: "",
    specs: { display: "Always-On Retina OLED (Larger Screen)", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Fast Charging, Blood Oxygen, ECG" } 
  },
  { 
    name: "Apple Watch Series 6", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 199, 
    stock: 15, 
    image: "",
    specs: { display: "Always-On Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Blood Oxygen Sensor, ECG, S6 Chip" } 
  },
  { 
    name: "Apple Watch SE (1st Generation)", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 179, 
    stock: 20, 
    image: "",
    specs: { display: "Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Fall Detection, Heart Rate Monitor, Compass" } 
  },
  { 
    name: "Apple Watch Series 5", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 159, 
    stock: 10, 
    image: "",
    specs: { display: "Always-On Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Built-in Compass, ECG, Heart Rate" } 
  },
  { 
    name: "Apple Watch Series 4", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 129, 
    stock: 10, 
    image: "",
    specs: { display: "Retina OLED (Larger Display)", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Electrical Heart Sensor (ECG), Fall Detection" } 
  },
  { 
    name: "Apple Watch Series 3", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 99, 
    stock: 15, 
    image: "",
    specs: { display: "Retina OLED", batteryLife: "Up to 18 hrs", waterResistance: "50m (WR50)", sensors: "Optical Heart Sensor, Barometric Altimeter" } 
  },
  { 
    name: "Apple Watch Series 2", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 79, 
    stock: 5, 
    image: "",
    specs: { display: "OLED Retina Display with Force Touch", batteryLife: "Up to 18 hrs", waterResistance: "50m (Swimproof)", sensors: "Built-in GPS, Heart Rate Monitor" } 
  },
  { 
    name: "Apple Watch Series 1", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 59, 
    stock: 5, 
    image: "",
    specs: { display: "OLED Retina Display with Force Touch", batteryLife: "Up to 18 hrs", waterResistance: "Splash Resistant", sensors: "Dual-Core Processor, Heart Rate Monitor" } 
  },
  { 
    name: "Apple Watch (1st generation)", 
    category: "smartwatches", 
    brand: "Apple", 
    price: 49, 
    stock: 2, 
    image: "",
    specs: { display: "AMOLED with Sapphire Glass", batteryLife: "Up to 18 hrs", waterResistance: "Splash Resistant", sensors: "Heart Rate Monitor, Taptic Engine" } 
  },
  { 
    name: "Samsung Galaxy Watch Ultra 2", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 699, 
    stock: 35, 
    image: "",
    specs: { display: "1.5\" Super AMOLED", batteryLife: "Up to 100 hrs (Power Saving)", waterResistance: "10ATM + IP68", sensors: "BioActive Sensor, Dual-Frequency GPS, Emergency Siren" } 
  },
  { 
    name: "Samsung Galaxy Watch 9", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 349, 
    stock: 65, 
    image: "",
    specs: { display: "1.4\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "Advanced BioActive Sensor, Sleep Apnea Detection" } 
  },
  { 
    name: "Samsung Galaxy Watch 8 Classic", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 449, 
    stock: 40, 
    image: "",
    specs: { display: "1.5\" Super AMOLED with Physical Rotating Bezel", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "ECG, Blood Pressure, BioActive Sensor" } 
  },
  { 
    name: "Samsung Galaxy Watch 8", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 319, 
    stock: 80, 
    image: "",
    specs: { display: "1.4\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "BioActive Sensor, Body Composition, GPS" } 
  },
  { 
    name: "Samsung Galaxy Watch Ultra", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 649, 
    stock: 30, 
    image: "",
    specs: { display: "1.5\" Super AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "10ATM + IP68", sensors: "Titanium Cushion Design, Dual-Frequency GPS, BioActive Sensor" } 
  },
  { 
    name: "Samsung Galaxy Watch 7", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 299, 
    stock: 90, 
    image: "",
    specs: { display: "1.5\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "3nm Processor, BioActive Sensor, Dual-Frequency GPS" } 
  },
  { 
    name: "Samsung Galaxy Watch FE", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 199, 
    stock: 120, 
    image: "",
    specs: { display: "1.2\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "BioActive Sensor, Body Composition Analysis" } 
  },
  { 
    name: "Samsung Galaxy Watch 6 Classic", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 399, 
    stock: 45, 
    image: "",
    specs: { display: "1.5\" Super AMOLED with Rotating Bezel", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "ECG, Blood Pressure, Body Composition" } 
  },
  { 
    name: "Samsung Galaxy Watch 6", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 279, 
    stock: 85, 
    image: "",
    specs: { display: "1.47\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "Advanced Sleep Coaching, Heart Rate, Body Composition" } 
  },
  { 
    name: "Samsung Galaxy Watch 5 Pro", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 349, 
    stock: 40, 
    image: "",
    specs: { display: "1.4\" Super AMOLED (Sapphire Crystal)", batteryLife: "Up to 80 hrs", waterResistance: "5ATM + IP68", sensors: "Titanium Frame, Route Workout, BioActive Sensor" } 
  },
  { 
    name: "Samsung Galaxy Watch 5", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 229, 
    stock: 95, 
    image: "",
    specs: { display: "1.4\" Super AMOLED", batteryLife: "Up to 50 hrs", waterResistance: "5ATM + IP68", sensors: "BioActive Sensor, Temperature Sensor, Sleep Tracker" } 
  },
  { 
    name: "Samsung Galaxy Watch 4 Classic", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 249, 
    stock: 35, 
    image: "",
    specs: { display: "1.4\" Super AMOLED with Rotating Bezel", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, BioActive Sensor, ECG" } 
  },
  { 
    name: "Samsung Galaxy Watch 4", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 179, 
    stock: 60, 
    image: "",
    specs: { display: "1.4\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Body Composition, Heart Rate" } 
  },
  { 
    name: "Samsung Galaxy Watch 3", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 149, 
    stock: 25, 
    image: "",
    specs: { display: "1.4\" Super AMOLED with Rotating Bezel", batteryLife: "Up to 2 days", waterResistance: "5ATM + IP68", sensors: "Blood Oxygen, ECG, Fall Detection" } 
  },
  { 
    name: "Samsung Galaxy Watch Active 2", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 119, 
    stock: 40, 
    image: "",
    specs: { display: "1.4\" Super AMOLED Digital Bezel", batteryLife: "Up to 2 days", waterResistance: "5ATM + IP68", sensors: "ECG, Heart Rate, Running Coach" } 
  },
  { 
    name: "Samsung Galaxy Watch Active", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 89, 
    stock: 20, 
    image: "",
    specs: { display: "1.1\" AMOLED", batteryLife: "Up to 45 hrs", waterResistance: "5ATM", sensors: "Heart Rate Monitor, Sleep & Stress Tracking" } 
  },
  { 
    name: "Samsung Galaxy Watch", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 99, 
    stock: 15, 
    image: "",
    specs: { display: "1.3\" Super AMOLED with Rotating Bezel", batteryLife: "Up to 4 days", waterResistance: "5ATM + IP68", sensors: "Heart Rate, GPS, Military-Grade Durability" } 
  },
  { 
    name: "Samsung Galaxy Fit 3", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 59, 
    stock: 180, 
    image: "",
    specs: { display: "1.6\" AMOLED", batteryLife: "Up to 13 days", waterResistance: "5ATM + IP68", sensors: "Fall Detection, Heart Rate, Sleep Monitor" } 
  },
  { 
    name: "Samsung Galaxy Fit 2", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 39, 
    stock: 70, 
    image: "",
    specs: { display: "1.1\" AMOLED", batteryLife: "Up to 15 days", waterResistance: "5ATM", sensors: "Heart Rate, Sleep Tracking, Hand Wash Reminder" } 
  },
  { 
    name: "Samsung Galaxy Fit e", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 29, 
    stock: 30, 
    image: "",
    specs: { display: "0.74\" PMOLED", batteryLife: "Up to 7 days", waterResistance: "5ATM", sensors: "Basic Heart Rate & Activity Tracking" } 
  },
  { 
    name: "Samsung Galaxy Fit", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 35, 
    stock: 40, 
    image: "",
    specs: { display: "0.95\" AMOLED", batteryLife: "Up to 7 days", waterResistance: "5ATM", sensors: "Auto Workout Tracking, Heart Rate" } 
  },
  { 
    name: "Samsung Gear S3 Frontier", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 79, 
    stock: 10, 
    image: "",
    specs: { display: "1.3\" Super AMOLED", batteryLife: "Up to 3 days", waterResistance: "IP68", sensors: "Rugged Design, GPS, Rotating Bezel" } 
  },
  { 
    name: "Samsung Gear S3 Classic", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 79, 
    stock: 10, 
    image: "",
    specs: { display: "1.3\" Super AMOLED", batteryLife: "Up to 3 days", waterResistance: "IP68", sensors: "Classic Watch Styling, GPS, Rotating Bezel" } 
  },
  { 
    name: "Samsung Gear S2", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 59, 
    stock: 5, 
    image: "",
    specs: { display: "1.2\" Super AMOLED Circular", batteryLife: "Up to 2 days", waterResistance: "IP68", sensors: "Rotating Bezel Interface, Heart Rate" } 
  },
  { 
    name: "Samsung Gear Sport", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 69, 
    stock: 8, 
    image: "",
    specs: { display: "1.2\" Super AMOLED", batteryLife: "Up to 3-4 days", waterResistance: "5ATM", sensors: "Swim Tracking, GPS, Heart Rate" } 
  },
  { 
    name: "Samsung Gear Fit 2 Pro", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 55, 
    stock: 12, 
    image: "",
    specs: { display: "1.5\" Curved Super AMOLED", batteryLife: "Up to 3-4 days", waterResistance: "5ATM", sensors: "Built-in GPS, Swim Tracking, Spotify Offline" } 
  },
  { 
    name: "Samsung Gear Fit 2", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 45, 
    stock: 10, 
    image: "",
    specs: { display: "1.5\" Curved Super AMOLED", batteryLife: "Up to 3-4 days", waterResistance: "IP68", sensors: "Built-in GPS, Heart Rate Monitor" } 
  },
  { 
    name: "Samsung Gear S", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 89, 
    stock: 3, 
    image: "",
    specs: { display: "2.0\" Curved Super AMOLED", batteryLife: "Up to 2 days", waterResistance: "IP67", sensors: "Standalone 3G Cellular, GPS, Heart Rate" } 
  },
  { 
    name: "Samsung Galaxy Watch 6 Bespoke Edition", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 329, 
    stock: 25, 
    image: "",
    specs: { display: "1.47\" Super AMOLED", batteryLife: "Up to 40 hrs", waterResistance: "5ATM + IP68", sensors: "Custom Strap Options, BioActive Sensor, ECG" } 
  },
  { 
    name: "Samsung Galaxy Watch 5 Bespoke Edition", 
    category: "smartwatches", 
    brand: "Samsung", 
    price: 259, 
    stock: 30, 
    image: "",
    specs: { display: "1.4\" Super AMOLED", batteryLife: "Up to 50 hrs", waterResistance: "5ATM + IP68", sensors: "Custom Color Combinations, BioActive Sensor" } 
  },
  { 
    name: "OnePlus Watch 4 (Midnight Titanium)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 299, 
    stock: 50, 
    image: "",
    specs: { display: "1.46\" AMOLED", batteryLife: "Up to 100 hrs (Smart Mode) / 16 days", waterResistance: "5ATM + IP68", sensors: "Dual-Engine Architecture, Dual-Frequency GPS, ECG" } 
  },
  { 
    name: "OnePlus Watch 4 (Evergreen Titanium)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 299, 
    stock: 45, 
    image: "",
    specs: { display: "1.46\" AMOLED", batteryLife: "Up to 100 hrs (Smart Mode) / 16 days", waterResistance: "5ATM + IP68", sensors: "Titanium Chassis, Dual-Frequency GPS, Health Tracking" } 
  },
  { 
    name: "OnePlus Watch 3 46mm (Midnight Black Titanium)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 279, 
    stock: 60, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Titanium Alloy, Dual-Engine Architecture, GPS" } 
  },
  { 
    name: "OnePlus Watch 3 46mm (Emerald Green Titanium)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 279, 
    stock: 55, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Titanium Alloy, Health Monitoring, Dual-Frequency GPS" } 
  },
  { 
    name: "OnePlus Watch 3 43mm (Black Steel)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 249, 
    stock: 70, 
    image: "",
    specs: { display: "1.32\" AMOLED", batteryLife: "Up to 72 hrs", waterResistance: "5ATM + IP68", sensors: "Stainless Steel Case, Heart Rate, SpO2" } 
  },
  { 
    name: "OnePlus Watch 3 43mm (Silver Steel)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 249, 
    stock: 65, 
    image: "",
    specs: { display: "1.32\" AMOLED", batteryLife: "Up to 72 hrs", waterResistance: "5ATM + IP68", sensors: "Stainless Steel Case, Sleep Tracking, SpO2" } 
  },
  { 
    name: "OnePlus Watch 3 (Obsidian Titanium)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 279, 
    stock: 40, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Titanium Build, Dual-Engine, Comprehensive Health Suite" } 
  },
  { 
    name: "OnePlus Watch Lite (Midnight Black)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 119, 
    stock: 120, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Fitness Tracking" } 
  },
  { 
    name: "OnePlus Watch Lite (Silver Steel)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 119, 
    stock: 110, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Heart Rate, SpO2, Sleep Tracking" } 
  },
  { 
    name: "OnePlus Watch 2R (Forest Green)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 229, 
    stock: 80, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Dual-Engine, GPS" } 
  },
  { 
    name: "OnePlus Watch 2R (Gunmetal Gray)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 229, 
    stock: 85, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Lightweight Aluminum Chassis, GPS" } 
  },
  { 
    name: "OnePlus Watch 2 (Black Steel)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 299, 
    stock: 70, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Stainless Steel Body, Dual-Frequency GPS" } 
  },
  { 
    name: "OnePlus Watch 2 (Radiant Steel)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 299, 
    stock: 65, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Sapphire Crystal Glass, Dual-Engine" } 
  },
  { 
    name: "OnePlus Watch 2 (Nordic Blue Edition)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 329, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Special Leather/Fluorrubber Strap, GPS" } 
  },
  { 
    name: "OnePlus Watch 2 (Cellular/eSIM)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 349, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 90 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, LTE Support, Dual-Frequency GPS" } 
  },
  { 
    name: "OnePlus Nord Watch", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 69, 
    stock: 150, 
    image: "",
    specs: { display: "1.78\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "IP68", sensors: "Heart Rate, SpO2, Women's Health Tracking" } 
  },
  { 
    name: "OnePlus Nord Watch 2", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 79, 
    stock: 130, 
    image: "",
    specs: { display: "1.85\" AMOLED", batteryLife: "Up to 12 days", waterResistance: "IP68", sensors: "Bluetooth Calling, Heart Rate, SpO2" } 
  },
  { 
    name: "OnePlus Watch Harry Potter Limited Edition", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 199, 
    stock: 15, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Custom Themes & Watch Faces, SpO2, Heart Rate" } 
  },
  { 
    name: "OnePlus Watch Cobalt Limited Edition", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 229, 
    stock: 10, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Cobalt Alloy Case, Sapphire Glass, SpO2" } 
  },
  { 
    name: "OnePlus Watch (Midnight Black)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 159, 
    stock: 50, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Built-in GPS, SpO2, Workout Tracking" } 
  },
  { 
    name: "OnePlus Watch (Moonlight Silver)", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 159, 
    stock: 45, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Built-in GPS, SpO2, Heart Rate Monitor" } 
  },
  { 
    name: "OnePlus Watch 3R", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 219, 
    stock: 60, 
    image: "",
    specs: { display: "1.43\" AMOLED", batteryLife: "Up to 80 hrs", waterResistance: "5ATM + IP68", sensors: "Sporty Design, Dual-Engine, Heart Rate" } 
  },
  { 
    name: "OnePlus Watch 3 Pro", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 349, 
    stock: 30, 
    image: "",
    specs: { display: "1.5\" AMOLED Sapphire Crystal", batteryLife: "Up to 120 hrs", waterResistance: "10ATM", sensors: "Advanced Medical-Grade Health Sensors, Dual-Frequency GPS" } 
  },
  { 
    name: "OnePlus Watch 2 Active", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 249, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon W5 + BES2700", ram: "2GB", storage: "32GB", display: "1.43\" AMOLED", batteryLife: "Up to 100 hrs", waterResistance: "5ATM + IP68", sensors: "Wear OS, Rugged Sport Strap, GPS" } 
  },
  { 
    name: "OnePlus Nord Watch Classic", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 89, 
    stock: 90, 
    image: "",
    specs: { display: "1.78\" AMOLED", batteryLife: "Up to 10 days", waterResistance: "IP68", sensors: "Classic Round/Rectangular Hybrid Design, SpO2" } 
  },
  { 
    name: "OnePlus Band", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 35, 
    stock: 120, 
    image: "",
    specs: { display: "1.1\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Continuous SpO2, Optical Heart Rate, Sleep Tracking" } 
  },
  { 
    name: "OnePlus Band Steven Harrington Special Edition", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 39, 
    stock: 50, 
    image: "",
    specs: { display: "1.1\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Artist Designed Straps & Faces, SpO2, Heart Rate" } 
  },
  { 
    name: "OnePlus Watch Gen-1 Sport", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 149, 
    stock: 35, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Sport Edition Band, GPS, SpO2" } 
  },
  { 
    name: "OnePlus Watch Style Edition", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 169, 
    stock: 30, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", specs: "Leather Strap Option, GPS, SpO2" } 
  },
  { 
    name: "OnePlus Watch Developer Edition", 
    category: "smartwatches", 
    brand: "OnePlus", 
    price: 199, 
    stock: 10, 
    image: "",
    specs: { display: "1.39\" AMOLED", batteryLife: "Up to 14 days", waterResistance: "5ATM", sensors: "Unlocked Firmware, Open Source Support, GPS" } 
  },
  { 
    name: "Apple MagSafe Charger", 
    category: "accessories", 
    brand: "Apple", 
    price: 39, 
    stock: 150, 
    image: "",
    specs: { connectivity: "Magnetic Wireless", outputPower: "Up to 15W/25W Fast Charging", compatibility: "iPhone 12 and later" } 
  },
  { 
    name: "Apple MagSafe Battery Pack", 
    category: "accessories", 
    brand: "Apple", 
    price: 99, 
    stock: 80, 
    image: "",
    specs: { batteryLife: "Portable Wireless Backup", connectivity: "Lightning / Lightning-to-USB", compatibility: "iPhone 12 and later" } 
  },
  { 
    name: "Apple 20W USB-C Power Adapter", 
    category: "accessories", 
    brand: "Apple", 
    price: 19, 
    stock: 200, 
    image: "",
    specs: { outputPower: "20W Fast Charge", connectivity: "USB-C Port", compatibility: "Universal iPhone/iPad" } 
  },
  { 
    name: "Apple 35W Dual USB-C Port Compact Power Adapter", 
    category: "accessories", 
    brand: "Apple", 
    price: 59, 
    stock: 90, 
    image: "",
    specs: { outputPower: "35W Total (Dual Ports)", connectivity: "Dual USB-C", compatibility: "MacBook Air, iPhone, iPad" } 
  },
  { 
    name: "Apple Magic Keyboard with Touch ID", 
    category: "accessories", 
    brand: "Apple", 
    price: 149, 
    stock: 50, 
    image: "",
    specs: { connectivity: "Bluetooth, Lightning-to-USB", compatibility: "Mac computers with Apple silicon", batteryLife: "Rechargeable internal battery" } 
  },
  { 
    name: "Apple Magic Mouse", 
    category: "accessories", 
    brand: "Apple", 
    price: 79, 
    stock: 60, 
    image: "",
    specs: { connectivity: "Bluetooth, Wireless", surface: "Multi-Touch Surface", compatibility: "Mac, iPadOS" } 
  },
  { 
    name: "Apple Magic Trackpad", 
    category: "accessories", 
    brand: "Apple", 
    price: 129, 
    stock: 40, 
    image: "",
    specs: { connectivity: "Bluetooth, Force Touch", surface: "Edge-to-edge glass surface", compatibility: "Mac, iPadOS" } 
  },
  { 
    name: "Apple Pencil (USB-C)", 
    category: "accessories", 
    brand: "Apple", 
    price: 79, 
    stock: 70, 
    image: "",
    specs: { connectivity: "USB-C, Magnetic attachment", compatibility: "Select iPad models", latency: "Low pixel-perfect precision" } 
  },
  { 
    name: "Apple Pencil (2nd Generation)", 
    category: "accessories", 
    brand: "Apple", 
    price: 129, 
    stock: 65, 
    image: "",
    specs: { connectivity: "Wireless pairing and charging", compatibility: "iPad Pro, iPad Air, iPad mini", features: "Double-tap to change tools" } 
  },
  { 
    name: "Apple AirTag (4-Pack)", 
    category: "accessories", 
    brand: "Apple", 
    price: 99, 
    stock: 110, 
    image: "",
    specs: { connectivity: "Bluetooth, Ultra Wideband (Precision Finding)", waterResistance: "IP67", battery: "User-replaceable CR2032 coin cell" } 
  },
  { 
    name: "Apple AirTag Leather Loop", 
    category: "accessories", 
    brand: "Apple", 
    price: 39, 
    stock: 50, 
    image: "",
    specs: { material: "European leather", design: "Secure attachment loop", compatibility: "AirTag" } 
  },
  { 
    name: "Apple FineWoven Wallet with MagSafe", 
    category: "accessories", 
    brand: "Apple", 
    price: 59, 
    stock: 80, 
    image: "",
    specs: { material: "Microtwill FineWoven", compatibility: "iPhone with MagSafe", features: "Supports Find My network" } 
  },
  { 
    name: "Apple Smart Folio for iPad", 
    category: "accessories", 
    brand: "Apple", 
    price: 79, 
    stock: 75, 
    image: "",
    specs: { design: "Thin, lightweight folding cover", feature: "Wake on open, sleep on close", compatibility: "Select iPad models" } 
  },
  { 
    name: "Apple Magic Keyboard for iPad Pro", 
    category: "accessories", 
    brand: "Apple", 
    price: 349, 
    stock: 30, 
    image: "",
    specs: { features: "Floating cantilever design, built-in trackpad, backlit keys", connectivity: "Smart Connector", compatibility: "iPad Pro models" } 
  },
  { 
    name: "Apple Thunderbolt 4 (USB-C) Pro Cable", 
    category: "accessories", 
    brand: "Apple", 
    price: 129, 
    stock: 45, 
    image: "",
    specs: { length: "1.8m", transferSpeed: "Up to 40Gb/s data transfer", powerDelivery: "Up to 240W charging" } 
  },
  { 
    name: "Apple Watch Solo Loop", 
    category: "accessories", 
    brand: "Apple", 
    price: 49, 
    stock: 90, 
    image: "",
    specs: { material: "Liquid silicone rubber", design: "Stretchable, clasp-free design", compatibility: "Apple Watch cases" } 
  },
  { 
    name: "Apple Watch Sport Band", 
    category: "accessories", 
    brand: "Apple", 
    price: 49, 
    stock: 140, 
    image: "",
    specs: { material: "High-performance fluoroelastomer", closure: "Pin-and-tuck", compatibility: "Apple Watch cases" } 
  },
  { 
    name: "Apple Watch Milanese Loop", 
    category: "accessories", 
    brand: "Apple", 
    price: 99, 
    stock: 60, 
    image: "",
    specs: { material: "Woven stainless steel mesh", closure: "Magnetic clasp", compatibility: "Apple Watch cases" } 
  },
  { 
    name: "Apple Watch Braided Solo Loop", 
    category: "accessories", 
    brand: "Apple", 
    price: 99, 
    stock: 55, 
    image: "",
    specs: { material: "Recycled yarn interwoven with silicone threads", design: "Stretchable design", compatibility: "Apple Watch cases" } 
  },
  { 
    name: "Apple Watch Titanium Link Bracelet", 
    category: "accessories", 
    brand: "Apple", 
    price: 349, 
    stock: 15, 
    image: "",
    specs: { material: "Titanium alloy", closure: "Custom butterfly closure", compatibility: "Apple Watch Ultra / Pro cases" } 
  },
  { 
    name: "Apple World Travel Adapter Kit", 
    category: "accessories", 
    brand: "Apple", 
    price: 29, 
    stock: 65, 
    image: "",
    specs: { compatibility: "Apple USB power adapters", components: "Set of seven AC plugs for global outlets" } 
  },
  { 
    name: "Apple 240W USB-C Charge Cable", 
    category: "accessories", 
    brand: "Apple", 
    price: 29, 
    stock: 100, 
    image: "",
    specs: { length: "2m", powerDelivery: "Up to 240W", design: "Woven design with USB-C connectors" } 
  },
  { 
    name: "Apple Polishing Cloth", 
    category: "accessories", 
    brand: "Apple", 
    price: 19, 
    stock: 250, 
    image: "",
    specs: { material: "Soft, nonabrasive material", compatibility: "All Apple displays, including nano-texture glass" } 
  },
  { 
    name: "Apple Vision Pro Travel Case", 
    category: "accessories", 
    brand: "Apple", 
    price: 199, 
    stock: 20, 
    image: "",
    specs: { design: "Molded shell to protect Vision Pro headset and accessories", material: "Woven fabric exterior" } 
  },
  { 
    name: "Apple Vision Pro Battery", 
    category: "accessories", 
    brand: "Apple", 
    price: 199, 
    stock: 25, 
    image: "",
    specs: { batteryLife: "Up to 2 hours of general use", connectivity: "Custom power cable connector", compatibility: "Apple Vision Pro" } 
  },
  { 
    name: "Apple Vision Pro Solo Knit Band", 
    category: "accessories", 
    brand: "Apple", 
    price: 99, 
    stock: 35, 
    image: "",
    specs: { material: "3D knitted riptide design", feature: "Fit dial adjustment", compatibility: "Apple Vision Pro" } 
  },
  { 
    name: "Apple Vision Pro Dual Loop Band", 
    category: "accessories", 
    brand: "Apple", 
    price: 99, 
    stock: 30, 
    image: "",
    specs: { design: "Dual upper and lower straps for balanced weight distribution", compatibility: "Apple Vision Pro" } 
  },
  { 
    name: "Apple Vision Pro Light Seal", 
    category: "accessories", 
    brand: "Apple", 
    price: 199, 
    stock: 20, 
    image: "",
    specs: { material: "Soft textile fabric", feature: "Conforms to face for precise light blocking", compatibility: "Apple Vision Pro" } 
  },
  { 
    name: "Apple Vision Pro Optical Inserts (ZEISS)", 
    category: "accessories", 
    brand: "Apple", 
    price: 149, 
    stock: 40, 
    image: "",
    specs: { partnership: "ZEISS optical design", compatibility: "Apple Vision Pro", feature: "Custom prescription lens attachment" } 
  },
  { 
    name: "Apple MagSafe Clear Case", 
    category: "accessories", 
    brand: "Apple", 
    price: 49, 
    stock: 110, 
    image: "",
    specs: { material: "Optically clear polycarbonate and flexible materials", features: "Built-in MagSafe magnets, scratch-resistant coating" } 
  },
  { 
    name: "Samsung Silicone Magnet Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 39, 
    stock: 95, 
    image: "",
    specs: { material: "Silmooth silicone", features: "Magnetic alignment for ecosystem accessories", compatibility: "Galaxy flagship devices" } 
  },
  { 
    name: "Samsung Slim Magnet Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 34, 
    stock: 85, 
    image: "",
    specs: { material: "Ultra-thin polycarbonate", features: "Low-profile magnetic mounting support" } 
  },
  { 
    name: "Samsung Rugged Magnet Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 70, 
    image: "",
    specs: { material: "Drop-tested military-grade polymer", features: "Kickstand support, magnetic compatibility" } 
  },
  { 
    name: "Samsung Clear Magnet Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 29, 
    stock: 120, 
    image: "",
    specs: { material: "Anti-yellowing transparent TPU", features: "Mag-compatible ring array" } 
  },
  { 
    name: "Samsung Smart View Wallet Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 65, 
    image: "",
    specs: { features: "Interactive display window for calls and notifications, card pocket" } 
  },
  { 
    name: "Samsung Standing Grip Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 45, 
    stock: 80, 
    image: "",
    specs: { features: "Integrated strap/grip that doubles as a media viewing stand" } 
  },
  { 
    name: "Samsung S Pen (Galaxy Ultra Edition)", 
    category: "accessories", 
    brand: "Samsung", 
    price: 59, 
    stock: 90, 
    image: "",
    specs: { features: "Low latency, Bluetooth gestures, built-in silo fit for Ultra models" } 
  },
  { 
    name: "Samsung S Pen Fold Edition", 
    category: "accessories", 
    brand: "Samsung", 
    price: 79, 
    stock: 40, 
    image: "",
    specs: { features: "Custom soft-tip design tailored for foldable inner screens" } 
  },
  { 
    name: "Samsung Book Cover Keyboard Slim", 
    category: "accessories", 
    brand: "Samsung", 
    price: 159, 
    stock: 35, 
    image: "",
    specs: { features: "Detachable keyboard layout, slim profile, DeX shortcut key support" } 
  },
  { 
    name: "Samsung Book Cover for Galaxy Tab", 
    category: "laptops", 
    brand: "Samsung", 
    price: 79, 
    stock: 50, 
    image: "",
    specs: { features: "Multi-angle stand positioning, auto sleep/wake capability" } 
  },
  { 
    name: "Samsung Galaxy Watch Hybrid Band", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 100, 
    image: "",
    specs: { material: "Leather exterior with sweat-resistant fluoroelastomer inner lining" } 
  },
  { 
    name: "Samsung Galaxy Watch Sport Band", 
    category: "accessories", 
    brand: "Samsung", 
    price: 39, 
    stock: 130, 
    image: "",
    specs: { material: "Breathable fluoroelastomer engineered for intense workouts" } 
  },
  { 
    name: "Samsung Galaxy Watch Trail Band", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 60, 
    image: "",
    specs: { material: "Lightweight woven textile with secure hook-and-loop fastener" } 
  },
  { 
    name: "Samsung Galaxy Watch Marine Band", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 50, 
    image: "",
    specs: { material: "Corrosion-resistant molded elastomer designed for water sports" } 
  },
  { 
    name: "Samsung Qi2 25W Magnet Wireless Charger", 
    category: "accessories", 
    brand: "Samsung", 
    price: 59, 
    stock: 75, 
    image: "",
    specs: { outputPower: "25W Qi2 Fast Wireless Charging", features: "Magnetic alignment ring" } 
  },
  { 
    name: "Samsung Qi2 Magnet Wireless Battery Pack", 
    category: "accessories", 
    brand: "Samsung", 
    price: 79, 
    stock: 65, 
    image: "",
    specs: { capacity: "5,000mAh / 10,000mAh options", connectivity: "Qi2 Magnetic Wireless + USB-C" } 
  },
  { 
    name: "Samsung Wireless Charger Duo", 
    category: "accessories", 
    brand: "Samsung", 
    price: 89, 
    stock: 50, 
    image: "",
    specs: { features: "Simultaneous dual-device charging pad (Phone + Watch or Earbuds)" } 
  },
  { 
    name: "Samsung 45W Power Adapter Trio", 
    category: "accessories", 
    brand: "Samsung", 
    price: 59, 
    stock: 85, 
    image: "",
    specs: { outputPower: "45W Max across 3 ports (USB-C & USB-A)", technology: "GaN fast charging" } 
  },
  { 
    name: "Samsung 25W USB-C Power Adapter", 
    category: "accessories", 
    brand: "Samsung", 
    price: 19, 
    stock: 220, 
    image: "",
    specs: { outputPower: "25W Super Fast Charging", connectivity: "Single USB-C port" } 
  },
  { 
    name: "Samsung 10,000 mAh Wireless Power Bank", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 90, 
    image: "",
    specs: { capacity: "10,000 mAh", features: "Supports 25W wired charging and wireless pad charging simultaneously" } 
  },
  { 
    name: "Samsung Galaxy SmartTag 2", 
    category: "accessories", 
    brand: "Samsung", 
    price: 29, 
    stock: 180, 
    image: "",
    specs: { connectivity: "Bluetooth LE, NFC, SmartThings Find network", batteryLife: "Up to 500 days (Power Saving mode)" } 
  },
  { 
    name: "Samsung Galaxy Buds Case Cover", 
    category: "accessories", 
    brand: "Samsung", 
    price: 19, 
    stock: 110, 
    image: "",
    specs: { compatibility: "Galaxy Buds charging cases", material: "Protective silicone shell" } 
  },
  { 
    name: "Samsung USB-C to USB-C Cable", 
    category: "accessories", 
    brand: "Samsung", 
    price: 15, 
    stock: 300, 
    image: "",
    specs: { length: "1.0m / 1.8m", powerDelivery: "Supports up to 5A / 100W charging" } 
  },
  { 
    name: "Samsung Anti-Reflective Screen Protector", 
    category: "accessories", 
    brand: "Samsung", 
    price: 24, 
    stock: 140, 
    image: "",
    specs: { features: "Low-reflection optical coating, high touch sensitivity, scratch-resistant" } 
  },
  { 
    name: "Samsung 3.5mm to USB-C Headphone Jack Adapter", 
    category: "accessories", 
    brand: "Samsung", 
    price: 12, 
    stock: 200, 
    image: "",
    specs: { compatibility: "USB-C devices without legacy headphone jack", output: "24-bit/192kHz DAC support" } 
  },
  { 
    name: "Samsung DeX Cable / HDMI Adapter", 
    category: "accessories", 
    brand: "Samsung", 
    price: 39, 
    stock: 75, 
    image: "",
    specs: { features: "Transforms Galaxy phone/tablet interface into desktop environment on external displays" } 
  },
  { 
    name: "Samsung Portable SSD T9 Shield Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 29, 
    stock: 50, 
    image: "",
    specs: { compatibility: "Samsung T7/T9 Shield portable drives", material: "Shock-absorbent molded EVA case" } 
  },
  { 
    name: "Samsung The Freestyle Battery Base", 
    category: "accessories", 
    brand: "Samsung", 
    price: 99, 
    stock: 25, 
    image: "",
    specs: { capacity: "32,000mAh", compatibility: "The Freestyle projector, provides up to 3 hours of portable projection" } 
  },
  { 
    name: "Samsung The Freestyle Carry Case", 
    category: "accessories", 
    brand: "Samsung", 
    price: 49, 
    stock: 30, 
    image: "",
    specs: { rating: "IP55 water and dust resistance", compatibility: "The Freestyle projector" } 
  },
  { 
    name: "Samsung Smart Remote SolarCell", 
    category: "accessories", 
    brand: "Samsung", 
    price: 39, 
    stock: 60, 
    image: "",
    specs: { powerSource: "Indoor/outdoor solar panel charging, USB-C backup", compatibility: "Samsung Smart TVs" } 
  },
  { 
    name: "Sony WH-1000XM5 Wireless Headphones", 
    category: "accessories", 
    brand: "Sony", 
    price: 399, 
    stock: 70, 
    image: "",
    specs: { batteryLife: "Up to 30 hrs (ANC on)", connectivity: "Bluetooth 5.2", noiseCancellation: "Industry-leading Auto ANC with Integrated Processor V1" } 
  },
  { 
    name: "Sony WF-1000XM5 Wireless Earbuds", 
    category: "accessories", 
    brand: "Sony", 
    price: 299, 
    stock: 85, 
    image: "",
    specs: { batteryLife: "Up to 8 hrs (+ 16 hrs with case)", connectivity: "Bluetooth 5.3", noiseCancellation: "High-Performance Noise Canceling Processors" } 
  },
  { 
    name: "Sony WH-1000XM4 Wireless Headphones", 
    category: "accessories", 
    brand: "Sony", 
    price: 349, 
    stock: 50, 
    image: "",
    specs: { batteryLife: "Up to 30 hrs", connectivity: "Multipoint Bluetooth connection", noiseCancellation: "Dual Noise Sensor technology" } 
  },
  { 
    name: "Sony LinkBuds S", 
    category: "accessories", 
    brand: "Sony", 
    price: 199, 
    stock: 60, 
    image: "",
    specs: { design: "Ultra-small and lightweight ambient-aware design", batteryLife: "Up to 20 hrs total" } 
  },
  { 
    name: "Sony LinkBuds Open", 
    category: "accessories", 
    brand: "Sony", 
    price: 199, 
    stock: 45, 
    image: "",
    specs: { design: "Open-ring driver keeping you connected to your physical surroundings", batteryLife: "Up to 22 hrs total" } 
  },
  { 
    name: "Sony WH-CH720N Wireless Noise Canceling Headphones", 
    category: "accessories", 
    brand: "Sony", 
    price: 149, 
    stock: 90, 
    image: "",
    specs: { batteryLife: "Up to 35 hrs", weight: "Lightweight ergonomic build (approx. 192g)" } 
  },
  { 
    name: "Sony WF-C700N Wireless Earbuds", 
    category: "accessories", 
    brand: "Sony", 
    price: 119, 
    stock: 100, 
    image: "",
    specs: { noiseCancellation: "Digital ANC", batteryLife: "Up to 15 hrs total with charging case", waterResistance: "IPX4" } 
  },
  { 
    name: "Sony WF-C500 True Wireless Earbuds", 
    category: "accessories", 
    brand: "Sony", 
    price: 89, 
    stock: 120, 
    image: "",
    specs: { batteryLife: "Up to 20 hrs total", design: "Compact body fits securely in ear", waterResistance: "IPX4" } 
  },
  { 
    name: "Sony INZONE H9 II Wireless Gaming Headset", 
    category: "accessories", 
    brand: "Sony", 
    price: 299, 
    stock: 40, 
    image: "",
    specs: { connectivity: "2.4GHz wireless USB dongle + Bluetooth", features: "360 Spatial Sound for Gaming, active noise cancellation" } 
  },
  { 
    name: "Sony INZONE Buds True Wireless Gaming Earbuds", 
    category: "accessories", 
    brand: "Sony", 
    price: 199, 
    stock: 55, 
    image: "",
    specs: { latency: "Low-latency 2.4GHz wireless via USB-C dongle", batteryLife: "Up to 12 hrs on earbuds" } 
  },
  { 
    name: "Sony PlayStation 5 Pro Console", 
    category: "gaming", 
    brand: "Sony", 
    price: 699, 
    stock: 25, 
    image: "",
    specs: { storage: "2TB Custom SSD", gpu: "Upgraded GPU with 28% faster RAM and advanced ray tracing", compatibility: "PS5 games and accessories" } 
  },
  { 
    name: "Sony PlayStation 5 Slim Console", 
    category: "gaming", 
    brand: "Sony", 
    price: 499, 
    stock: 60, 
    image: "",
    specs: { storage: "1TB SSD", design: "Reduced volume by over 30%, detachable disc drive option" } 
  },
  { 
    name: "Sony PlayStation VR2", 
    category: "gaming", 
    brand: "Sony", 
    price: 549, 
    stock: 30, 
    image: "",
    specs: { display: "Dual OLED 2000 x 2040 panels per eye", features: "Eye tracking, headset feedback, Tempest 3D AudioTech" } 
  },
  { 
    name: "Sony DualSense Wireless Controller", 
    category: "gaming", 
    brand: "Sony", 
    price: 69, 
    stock: 150, 
    image: "",
    specs: { features: "Haptic feedback, adaptive triggers, built-in microphone" } 
  },
  { 
    name: "Sony DualSense Edge Wireless Controller", 
    category: "gaming", 
    brand: "Sony", 
    price: 199, 
    stock: 45, 
    image: "",
    specs: { features: "Hardware customization, swappable stick modules, back buttons, custom profiles" } 
  },
  { 
    name: "Sony Alpha 7 IV Full-Frame Camera", 
    category: "accessories", 
    brand: "Sony", 
    price: 2499, 
    stock: 15, 
    image: "",
    specs: { sensor: "33MP Full-Frame Exmor R CMOS sensor", video: "4K 60p recording", autofocus: "Real-time Eye AF" } 
  },
  { 
    name: "Sony Alpha 7R V Camera", 
    category: "accessories", 
    brand: "Sony", 
    price: 3899, 
    stock: 10, 
    image: "",
    specs: { sensor: "61MP Full-Frame High-Resolution sensor", processor: "AI processing unit for advanced subject recognition" } 
  },
  { 
    name: "Sony Alpha 7C II Camera", 
    category: "accessories", 
    brand: "Sony", 
    price: 2199, 
    stock: 20, 
    image: "",
    specs: { sensor: "33MP Full-Frame", design: "Compact and lightweight rangefinder-style body format" } 
  },
  { 
    name: "Sony Alpha 6700 APS-C Camera", 
    category: "accessories", 
    brand: "Sony", 
    price: 1399, 
    stock: 30, 
    image: "",
    specs: { sensor: "26.0MP APS-C Exmor R CMOS", video: "4K 120p high-frame-rate options", stabilization: "5-axis in-body image stabilization" } 
  },
  { 
    name: "Sony ZV-E10 II Vlog Camera", 
    category: "accessories", 
    brand: "Sony", 
    price: 999, 
    stock: 40, 
    image: "",
    specs: { sensor: "26MP APS-C sensor", features: "Interchangeable lens design, Product Showcase Setting, Cinematic Vlog Setting" } 
  },
  { 
    name: "Sony ZV-1 II Digital Camera", 
    category: "accessories", 
    brand: "Sony", 
    price: 899, 
    stock: 35, 
    image: "",
    specs: { lens: "18-50mm wide-angle zoom lens", sensor: "1.0-type image sensor", target: "Vloggers and content creators" } 
  },
  { 
    name: "Sony GP-VPT3 Multi-Function Shooting Grip", 
    category: "accessories", 
    brand: "Sony", 
    price: 149, 
    stock: 50, 
    image: "",
    specs: { features: "Wireless remote control commands, converts into stable tabletop tripod" } 
  },
  { 
    name: "Sony SRS-XB100 Portable Wireless Speaker", 
    category: "audio", 
    brand: "Sony", 
    price: 59, 
    stock: 110, 
    image: "",
    specs: { rating: "IP67 waterproof and dustproof", batteryLife: "Up to 16 hrs", sound: "Extra Bass with sound diffusion processor" } 
  },
  { 
    name: "Sony SRS-ULT FIELD 1 Speaker", 
    category: "audio", 
    brand: "Sony", 
    price: 129, 
    stock: 65, 
    image: "",
    specs: { feature: "ULT Power Sound mode for enhanced bass performance", rating: "IP67 water/dust/shock resistant" } 
  },
  { 
    name: "Sony SRS-ULT FIELD 7 Speaker", 
    category: "audio", 
    brand: "Sony", 
    price: 399, 
    stock: 25, 
    image: "",
    specs: { feature: "Massive party sound with multi-color lighting effects and mic/guitar input" } 
  },
  { 
    name: "Sony HT-A9 Home Theater System", 
    category: "audio", 
    brand: "Sony", 
    price: 1799, 
    stock: 12, 
    image: "",
    specs: { channels: "Spatial Sound Mapping technology with 4 wireless speakers", setup: "Flexible layout calibration" } 
  },
  { 
    name: "Sony BRAVIA 9 Mini LED 4K HDR TV", 
    category: "audio", 
    brand: "Sony", 
    price: 2299, 
    stock: 15, 
    image: "",
    specs: { display: "Mini LED backlight with XR Backlight Master Drive", resolution: "4K HDR with peak brightness" } 
  },
  { 
    name: "Sony BRAVIA 8 OLED 4K HDR TV", 
    category: "audio", 
    brand: "Sony", 
    price: 1999, 
    stock: 18, 
    image: "",
    specs: { display: "Self-lit OLED panel", features: "Acoustic Surface Audio+, infinite contrast ratio" } 
  },
  { 
    name: "Sony Xperia 1 VI Smartphone", 
    category: "smartphones", 
    brand: "Sony", 
    price: 1299, 
    stock: 25, 
    image: "",
    specs: { display: "6.5\" 19.5:9 FHD+ OLED 120Hz", camera: "True optical zoom telephoto lens", cpu: "Snapdragon 8 Gen 3" } 
  },
  { 
    name: "Sony Xperia 10 VI Smartphone", 
    category: "smartphones", 
    brand: "Sony", 
    price: 399, 
    stock: 40, 
    image: "",
    specs: { batteryLife: "Multi-day 5,000mAh battery", display: "6.1\" OLED screen", weight: "Ultra lightweight" } 
  },
  { 
    name: "Anker Prime Charger (250W, 6 Ports, GaNPrime)", 
    category: "accessories", 
    brand: "Anker", 
    price: 149, 
    stock: 50, 
    image: "",
    specs: { outputPower: "250W total max output across 6 ports", technology: "GaNPrime with smart power distribution" } 
  },
  { 
    name: "Anker Prime Charger (160W, 3 Ports, Smart Display)", 
    category: "accessories", 
    brand: "Anker", 
    price: 119, 
    stock: 45, 
    image: "",
    specs: { outputPower: "160W max", display: "Digital real-time power status screen" } 
  },
  { 
    name: "Anker Prime Charger (200W, 6 Ports, GaN)", 
    category: "accessories", 
    brand: "Anker", 
    price: 129, 
    stock: 40, 
    image: "",
    specs: { outputPower: "200W across 4 USB-C and 2 USB-A ports" } 
  },
  { 
    name: "Anker Prime Charger (100W, 3 Ports, GaN)", 
    category: "accessories", 
    brand: "Anker", 
    price: 79, 
    stock: 75, 
    image: "",
    specs: { outputPower: "100W max output via 2x USB-C and 1x USB-A" } 
  },
  { 
    name: "Anker Charger (140W, 4-Port, PD 3.1)", 
    category: "accessories", 
    brand: "Anker", 
    price: 99, 
    stock: 60, 
    image: "",
    specs: { outputPower: "Supports USB Power Delivery 3.1 for high-draw laptops (e.g. MacBook Pro 16)" } 
  },
  { 
    name: "Anker Nano Charger (70W, 3 Ports)", 
    category: "accessories", 
    brand: "Anker", 
    price: 49, 
    stock: 90, 
    image: "",
    specs: { design: "Compact foldable plug configuration, 2x USB-C and 1x USB-A" } 
  },
  { 
    name: "Anker Nano Charger (45W with Smart Display)", 
    category: "accessories", 
    brand: "Anker", 
    price: 39, 
    stock: 85, 
    image: "",
    specs: { outputPower: "45W Super Fast Charging with integrated screen feedback" } 
  },
  { 
    name: "Anker 715 Charger (Nano II 65W)", 
    category: "accessories", 
    brand: "Anker", 
    price: 49, 
    stock: 100, 
    image: "",
    specs: { technology: "GaN II technology resulting in 58% smaller footprint than standard stock chargers" } 
  },
  { 
    name: "Anker 735 Charger (Nano II 65W)", 
    category: "accessories", 
    brand: "Anker", 
    price: 59, 
    stock: 80, 
    image: "",
    specs: { ports: "2x USB-C and 1x USB-A ports for simultaneous multi-device charging" } 
  },
  { 
    name: "Anker Prime Power Bank (26,250mAh, 300W)", 
    category: "accessories", 
    brand: "Anker", 
    price: 179, 
    stock: 35, 
    image: "",
    specs: { capacity: "26,250mAh", outputPower: "300W max total output", feature: "Smart OLED display with battery health insights" } 
  },
  { 
    name: "Anker Laptop Power Bank (25,000mAh, 165W with Built-In/Retractable Cables)", 
    category: "accessories", 
    brand: "Anker", 
    price: 129, 
    stock: 45, 
    image: "",
    specs: { capacity: "25,000mAh", features: "Integrated retractable charging cable design" } 
  },
  { 
    name: "Anker 737 Power Bank (PowerCore 24K)", 
    category: "accessories", 
    brand: "Anker", 
    price: 149, 
    stock: 50, 
    image: "",
    specs: { capacity: "24,000mAh", technology: "Bidirectional 140W max output via PowerIQ 3.0" } 
  },
  { 
    name: "Anker Nano Power Bank (5,000mAh, MagGo, Slim)", 
    category: "accessories", 
    brand: "Anker", 
    price: 49, 
    stock: 120, 
    image: "",
    specs: { capacity: "5,000mAh", feature: "Magnetic wireless connection tailored for portable phone mounting" } 
  },
  { 
    name: "Anker Zolo Power Bank (10,000mAh with Built-in Cable)", 
    category: "accessories", 
    brand: "Anker", 
    price: 32, 
    stock: 150, 
    image: "",
    specs: { capacity: "10,000mAh", feature: "Attached USB-C cable for hassle-free mobile charging" } 
  },
  { 
    name: "Anker 548 Power Bank (Outdoor/High-Capacity)", 
    category: "accessories", 
    brand: "Anker", 
    price: 139, 
    stock: 20, 
    image: "",
    specs: { capacity: "60,000mAh (192Wh)", features: "Emergency SOS light, solar panel recharge capability, multi-port output" } 
  },
  { 
    name: "Anker MagGo Wireless Charging Station (3-in-1, Foldable)", 
    category: "accessories", 
    brand: "Anker", 
    price: 109, 
    stock: 55, 
    image: "",
    specs: { certification: "Qi2 Certified fast magnetic charging for iPhone, AirPods, and Apple Watch" } 
  },
  { 
    name: "Anker Prime MagSafe Charger (Foldable Travel Stand)", 
    category: "accessories", 
    brand: "Anker", 
    price: 89, 
    stock: 40, 
    image: "",
    specs: { design: "Ultra-compact pocket size configuration with adjustable angle view" } 
  },
  { 
    name: "Anker MagGo Magnetic Power Bank (Qi2 Certified)", 
    category: "accessories", 
    brand: "Anker", 
    price: 89, 
    stock: 70, 
    image: "",
    specs: { capacity: "10,000mAh", certification: "Qi2 15W ultra-fast magnetic wireless charging" } 
  },
  { 
    name: "Anker Nano 13-in-1 Docking Station", 
    category: "accessories", 
    brand: "Anker", 
    price: 199, 
    stock: 25, 
    image: "",
    specs: { ports: "HDMI, DisplayPort, USB-C, USB-A, Ethernet, SD card slots, audio jacks" } 
  },
  { 
    name: "Anker 10-in-1 Nano Power Strip (with USB-C/USB-A and Surge Protection)", 
    category: "accessories", 
    brand: "Anker", 
    price: 49, 
    stock: 65, 
    image: "",
    specs: { safety: "Advanced ActiveShield safety system, comprehensive AC outlets and USB ports" } 
  },
  { 
    name: "Anker USB-C to USB-C Cable (240W, Upcycled-Braided)", 
    category: "accessories", 
    brand: "Anker", 
    price: 21, 
    stock: 180, 
    image: "",
    specs: { powerDelivery: "Supports up to 240W fast power transfer", material: "Eco-friendly bio-based/upcycled braided nylon" } 
  },
  { 
    name: "Anker Nylon USB-C to USB-C Cable (100W)", 
    category: "accessories", 
    brand: "Anker", 
    price: 16, 
    stock: 200, 
    image: "",
    specs: { durability: "Tested to withstand over 10,000 bends" } 
  },
  { 
    name: "Anker Thunderbolt 4 Cable", 
    category: "accessories", 
    brand: "Anker", 
    price: 39, 
    stock: 55, 
    image: "",
    specs: { transferSpeed: "40Gbps data, 8K video output support, 100W power charging" } 
  },
  { 
    name: "Anker USB-C to Lightning Braided Cable", 
    category: "accessories", 
    brand: "Anker", 
    price: 19, 
    stock: 130, 
    image: "",
    specs: { certification: "MFi certified compatibility for fast-charging legacy Apple devices" } 
  },
  { 
    name: "Anker 553 USB-C Hub (8-in-1)", 
    category: "accessories", 
    brand: "Anker", 
    price: 59, 
    stock: 45, 
    image: "",
    specs: { ports: "4K HDMI, 100W Power Delivery input, USB-A data ports, microSD/SD card readers" } 
  },
  { 
    name: "Anker USB-C to HDMI Adapter", 
    category: "accessories", 
    brand: "Anker", 
    price: 24, 
    stock: 90, 
    image: "",
    specs: { resolution: "Supports up to 4K @ 60Hz crystal-clear video streaming" } 
  },
  { 
    name: "Anker Soundcore Space One Wireless Noise-Canceling Headphones", 
    category: "accessories", 
    brand: "Anker", 
    price: 99, 
    stock: 75, 
    image: "",
    specs: { noiseCancellation: "Up to 98% reduction with upgraded ANC system", batteryLife: "40 hrs with ANC on" } 
  },
  { 
    name: "Anker Soundcore Liberty 4 NC True Wireless Earbuds", 
    category: "accessories", 
    brand: "Anker", 
    price: 99, 
    stock: 110, 
    image: "",
    specs: { noiseCancellation: "Adaptive ANC 2.0", sound: "Hi-Res Audio Wireless certified" } 
  },
  { 
    name: "Anker Soundcore Motion 300 Portable Bluetooth Speaker", 
    category: "audio", 
    brand: "Anker", 
    price: 79, 
    stock: 65, 
    image: "",
    specs: { sound: "Stereo sound with SmartTune adaptive technology", rating: "IPX7 waterproof" } 
  },
  { 
    name: "Anker Soundcore Select 4 Go Portable Speaker", 
    category: "audio", 
    brand: "Anker", 
    price: 39, 
    stock: 140, 
    image: "",
    specs: { design: "Ultra-compact lanyard design, vibrant color options", rating: "IP67 waterproof" } 
  },
  { 
    name: "JBL Boombox 4", 
    category: "audio", 
    brand: "JBL", 
    price: 499, 
    stock: 20, 
    image: "",
    specs: { sound: "Monstrous JBL Original Pro Sound with deeper bass", batteryLife: "Massive multi-hour playtime", rating: "IP67 dust/waterproof" } 
  },
  { 
    name: "JBL Charge 6", 
    category: "audio", 
    brand: "JBL", 
    price: 179, 
    stock: 70, 
    image: "",
    specs: { features: "Built-in power bank capability, upgraded driver clarity, Bluetooth 5.3" } 
  },
  { 
    name: "JBL Flip 7", 
    category: "audio", 
    brand: "JBL", 
    price: 129, 
    stock: 95, 
    image: "",
    specs: { design: "Cylindrical portable shape, robust fabric grill, enhanced acoustic output" } 
  },
  { 
    name: "JBL Clip 5", 
    category: "audio", 
    brand: "JBL", 
    price: 79, 
    stock: 120, 
    image: "",
    specs: { design: "Redesigned integrated carabiner clip for effortless backpack attachment" } 
  },
  { 
    name: "JBL Go 5", 
    category: "audio", 
    brand: "JBL", 
    price: 49, 
    stock: 160, 
    image: "",
    specs: { design: "Pocket-sized micro speaker with surprisingly bold audio performance" } 
  },
  { 
    name: "JBL Xtreme 5", 
    category: "audio", 
    brand: "JBL", 
    price: 379, 
    stock: 35, 
    image: "",
    specs: { design: "Four drivers and dual JBL bass radiators with convenient carrying strap" } 
  },
  { 
    name: "JBL Pulse 6", 
    category: "audio", 
    brand: "JBL", 
    price: 249, 
    stock: 45, 
    image: "",
    specs: { display: "360-degree immersive high-resolution LED light show synced to music beats" } 
  },
  { 
    name: "JBL PartyBox Ultimate", 
    category: "audio", 
    brand: "JBL", 
    price: 1499, 
    stock: 10, 
    image: "",
    specs: { sound: "Massive sound arena with Dolby Atmos, dual subwoofers, dynamic light show" } 
  },
  { 
    name: "JBL PartyBox Stage 320", 
    category: "audio", 
    brand: "JBL", 
    price: 599, 
    stock: 25, 
    image: "",
    specs: { features: "Telescopic handle, smooth wheels, replaceable battery pack, dual mic/guitar inputs" } 
  },
  { 
    name: "JBL PartyBox Encore 2", 
    category: "audio", 
    brand: "JBL", 
    price: 349, 
    stock: 30, 
    image: "",
    specs: { design: "Portable party speaker configuration complete with wireless microphones included" } 
  },
  { 
    name: "JBL Tour Pro 3", 
    category: "audio", 
    brand: "JBL", 
    price: 299, 
    stock: 50, 
    image: "",
    specs: { case: "Smart Charging Case with integrated touch display screen", noiseCancellation: "True Adaptive ANC 2.0" } 
  },
  { 
    name: "JBL Tour One M2", 
    category: "audio", 
    brand: "JBL", 
    price: 299, 
    stock: 40, 
    image: "",
    specs: { design: "Over-ear active noise canceling headphones with Spatial Sound capabilities" } 
  },
  { 
    name: "JBL Live Beam 3", 
    category: "audio", 
    brand: "JBL", 
    price: 199, 
    stock: 60, 
    image: "",
    specs: { case: "Smart touch-display charging case for track and setting controls without phone use" } 
  },
  { 
    name: "JBL Live 780NC", 
    category: "audio", 
    brand: "JBL", 
    price: 149, 
    stock: 55, 
    image: "",
    specs: { design: "On-ear/over-ear hybrid design with True Adaptive Noise Cancelling" } 
  },
  { 
    name: "JBL Tune 770NC", 
    category: "audio", 
    brand: "JBL", 
    price: 129, 
    stock: 70, 
    image: "",
    specs: { batteryLife: "Up to 70 hrs playtime with ANC disabled", connectivity: "Bluetooth 5.3 LE Audio ready" } 
  },
  { 
    name: "JBL Tune 670NC", 
    category: "audio", 
    brand: "JBL", 
    price: 99, 
    stock: 85, 
    image: "",
    specs: { design: "Lightweight foldable on-ear form factor with Adaptive Noise Cancelling" } 
  },
  { 
    name: "JBL Tune 720BT", 
    category: "audio", 
    brand: "JBL", 
    price: 79, 
    stock: 90, 
    image: "",
    specs: { batteryLife: "Up to 76 hours of wireless audio playback on a single charge" } 
  },
  { 
    name: "JBL Tune 520BT", 
    category: "audio", 
    brand: "JBL", 
    price: 49, 
    stock: 130, 
    image: "",
    specs: { sound: "JBL Pure Bass sound profile, lightweight comfortable headband" } 
  },
  { 
    name: "JBL Endurance Race 2", 
    category: "audio", 
    brand: "JBL", 
    price: 79, 
    stock: 75, 
    image: "",
    specs: { design: "Secure twist-lock ear hook fit tailored for high-motion sports and workouts" } 
  },
  { 
    name: "JBL Sense Lite", 
    category: "audio", 
    brand: "JBL", 
    price: 89, 
    stock: 50, 
    image: "",
    specs: { features: "Open-ear listening comfort combined with directional sound technology" } 
  },
  { 
    name: "JBL Quantum Sphere 360", 
    category: "gaming", 
    brand: "JBL", 
    price: 249, 
    stock: 25, 
    image: "",
    specs: { features: "Professional head-tracking enhanced positional surround sound for competitive gaming setups" } 
  },
  { 
    name: "JBL Authentics 300", 
    category: "audio", 
    brand: "JBL", 
    price: 429, 
    stock: 20, 
    image: "",
    specs: { design: "Retro-inspired leather-like enclosure with built-in battery handle and Wi-Fi streaming" } 
  },
  { 
    name: "JBL Cove X1", 
    category: "audio", 
    brand: "JBL", 
    price: 119, 
    stock: 40, 
    image: "",
    specs: { features: "Specialized acoustic tuning and modern minimalist style architecture" } 
  },
  { 
    name: "JBL Cove P1", 
    category: "audio", 
    brand: "JBL", 
    price: 99, 
    stock: 45, 
    image: "",
    specs: { features: "Compact residential listening companion with signature punchy bass" } 
  },
  { 
    name: "JBL Cove M1", 
    category: "audio", 
    brand: "JBL", 
    price: 79, 
    stock: 55, 
    image: "",
    specs: { features: "Portable multi-room audio peripheral with clear vocal reproduction" } 
  },
  { 
    name: "JBL Charge 5 Wi-Fi", 
    category: "audio", 
    brand: "JBL", 
    price: 249, 
    stock: 50, 
    image: "",
    specs: { connectivity: "AirPlay, Alexa Multi-Room Music, Chromecast built-in alongside Bluetooth" } 
  },
  { 
    name: "JBL Boombox 3 Wi-Fi", 
    category: "audio", 
    brand: "JBL", 
    price: 599, 
    stock: 20, 
    image: "",
    specs: { connectivity: "High-bandwidth Wi-Fi streaming and outdoor Bluetooth pairing flexibility" } 
  },
  { 
    name: "JBL Grip", 
    category: "audio", 
    brand: "JBL", 
    price: 29, 
    stock: 100, 
    image: "",
    specs: { accessories: "Ergonomic protective grip band attachment for select portable speakers" } 
  },
  { 
    name: "JBL EasySing Mics", 
    category: "audio", 
    brand: "JBL", 
    price: 99, 
    stock: 40, 
    image: "",
    specs: { compatibility: "JBL PartyBox sound systems", features: "Dual wireless karaoke microphone set" } 
  },
  { 
    name: "JBL PartyLight Stick", 
    category: "audio", 
    brand: "JBL", 
    price: 69, 
    stock: 35, 
    image: "",
    specs: { features: "Ambient dynamic multi-color reactive light wand that pairs with party speakers" } 
  },
  { 
    name: "Razer DeathAdder V3 Pro", 
    category: "gaming", 
    brand: "Razer", 
    price: 149, 
    stock: 85, 
    image: "",
    specs: { connectivity: "2.4GHz Wireless / Wired", sensor: "Focus Pro 30K Optical Sensor", weight: "63g" } 
  },
  { 
    name: "Razer Basilisk V3 Pro", 
    category: "gaming", 
    brand: "Razer", 
    price: 159, 
    stock: 70, 
    image: "",
    specs: { connectivity: "HyperSpeed Wireless / Bluetooth / Wired", features: "13-Zone Chroma Lighting, Tilt Wheel", sensor: "Focus Pro 30K" } 
  },
  { 
    name: "Razer Cobra Pro Wireless Mouse", 
    category: "gaming", 
    brand: "Razer", 
    price: 129, 
    stock: 60, 
    image: "",
    specs: { design: "Symmetrical lightweight gaming mouse", lighting: "11-Zone Chroma RGB", weight: "77g" } 
  },
  { 
    name: "Razer Naga V2 Pro Wireless MMO Mouse", 
    category: "gaming", 
    brand: "Razer", 
    price: 179, 
    stock: 45, 
    image: "",
    specs: { features: "3 interchangeable side plates with up to 19+1 programmable buttons", connectivity: "HyperSpeed Wireless" } 
  },
  { 
    name: "Razer Huntsman V3 Pro Analog Optical Keyboard", 
    category: "gaming", 
    brand: "Razer", 
    price: 249, 
    stock: 40, 
    image: "",
    specs: { switches: "Gen-2 Analog Optical Switches", features: "Adjustable actuation, Rapid Trigger mode" } 
  },
  { 
    name: "Razer BlackWidow V4 Pro Mechanical Keyboard", 
    category: "gaming", 
    brand: "Razer", 
    price: 229, 
    stock: 50, 
    image: "",
    specs: { features: "Razer Command Dial, dedicated macro keys, per-key RGB underglow", switches: "Mechanical Green/Yellow" } 
  },
  { 
    name: "Razer BlackWidow V4 75%", 
    category: "gaming", 
    brand: "Razer", 
    price: 189, 
    stock: 65, 
    image: "",
    specs: { design: "Hot-swappable 75% compact layout", switches: "Razer Orange tactile switches" } 
  },
  { 
    name: "Razer DeathStalker V2 Pro Tenkeyless", 
    category: "gaming", 
    brand: "Razer", 
    price: 219, 
    stock: 55, 
    image: "",
    specs: { design: "Ultra-slim optical low-profile keyboard", connectivity: "HyperSpeed Wireless & Bluetooth" } 
  },
  { 
    name: "Razer Ornata V3 Tenkeyless", 
    category: "gaming", 
    brand: "Razer", 
    price: 69, 
    stock: 110, 
    image: "",
    specs: { switches: "Razer Mecha-Membrane switches", design: "Low-profile ergonomic gaming keyboard" } 
  },
  { 
    name: "Razer Kraken V4 Pro Wireless Headset", 
    category: "gaming", 
    brand: "Razer", 
    price: 399, 
    stock: 25, 
    image: "",
    specs: { features: "OLED Control Hub, Sensa HD Haptics, THX Spatial Audio", connectivity: "2.4GHz + Bluetooth" } 
  },
  { 
    name: "Razer BlackShark V3 Pro", 
    category: "gaming", 
    brand: "Razer", 
    price: 199, 
    stock: 50, 
    image: "",
    specs: { features: "Pro-tuned esports audio profile, ultra-clear wideband mic", connectivity: "Wireless" } 
  },
  { 
    name: "Razer Kraken Kitty V2 Pro", 
    category: "gaming", 
    brand: "Razer", 
    price: 199, 
    stock: 40, 
    image: "",
    specs: { features: "Interchangeable kitty, bear, and bunny ears with stream-reactive RGB lighting" } 
  },
  { 
    name: "Razer Barracuda Pro Wireless Headset", 
    category: "gaming", 
    brand: "Razer", 
    price: 249, 
    stock: 45, 
    image: "",
    specs: { features: "Hybrid active noise cancellation (ANC), integrated beamforming mics for lifestyle use" } 
  },
  { 
    name: "Razer Hammerhead HyperSpeed Wireless Earbuds", 
    category: "gaming", 
    brand: "Razer", 
    price: 149, 
    stock: 75, 
    image: "",
    specs: { connectivity: "Dual-wireless (2.4GHz via USB-C dongle & Bluetooth)", features: "Active Noise Cancellation" } 
  },
  { 
    name: "Razer Wolverine V3 Pro Controller", 
    category: "gaming", 
    brand: "Razer", 
    price: 199, 
    stock: 50, 
    image: "",
    specs: { compatibility: "Xbox Series X/S and PC", features: "Hall Effect magnetic switches, 4 back paddles, 2 extra bumper buttons" } 
  },
  { 
    name: "Razer Kitsune All-Button Arcade Controller", 
    category: "gaming", 
    brand: "Razer", 
    price: 299, 
    stock: 20, 
    image: "",
    specs: { design: "Optical leverless arcade controller for fighting games", compatibility: "PS5 and PC" } 
  },
  { 
    name: "Razer Kishi V3 Pro Mobile Controller", 
    category: "gaming", 
    brand: "Razer", 
    price: 129, 
    stock: 60, 
    image: "",
    specs: { connectivity: "USB-C direct phone connection", features: "Microswitch buttons, hall effect triggers, haptic feedback" } 
  },
  { 
    name: "Razer Seiren V3 Chroma USB Microphone", 
    category: "gaming", 
    brand: "Razer", 
    price: 129, 
    stock: 55, 
    image: "",
    specs: { features: "Supercardioid condenser mic, multi-function tap-to-mute sensor, full-spectrum Chroma RGB" } 
  },
  { 
    name: "Razer Kiyo V2 Webcam", 
    category: "gaming", 
    brand: "Razer", 
    price: 129, 
    stock: 40, 
    image: "",
    specs: { resolution: "4K AI-powered framing or high-fps 1080p stream settings, autofocus" } 
  },
  { 
    name: "Razer Iskur V2 Gaming Chair", 
    category: "gaming", 
    brand: "Razer", 
    price: 649, 
    stock: 15, 
    image: "",
    specs: { features: "World-first adaptive & pivoting lumbar system, 4D armrests, high-density foam" } 
  },
  { 
    name: "Razer Enki Gaming Chair", 
    category: "gaming", 
    brand: "Razer", 
    price: 499, 
    stock: 25, 
    image: "",
    specs: { features: "All-day comfort design with optimized weight distribution and built-in arch support" } 
  },
  { 
    name: "Razer Freyja Haptic Gaming Cushion", 
    category: "gaming", 
    brand: "Razer", 
    price: 299, 
    stock: 20, 
    image: "",
    specs: { features: "HD haptic feedback seat cushion powered by Razer Sensa HD Haptics" } 
  },
  { 
    name: "Razer Leviathan V2 X PC Soundbar", 
    category: "gaming", 
    brand: "Razer", 
    price: 99, 
    stock: 70, 
    image: "",
    specs: { design: "Compact under-monitor desktop soundbar with full-range drivers and Chroma RGB" } 
  },
  { 
    name: "Razer Gigantus V2 Mouse Mat (Large)", 
    category: "gaming", 
    brand: "Razer", 
    price: 29, 
    stock: 200, 
    image: "",
    specs: { material: "Textured micro-weave cloth surface for speed and control playstyles" } 
  },
  { 
    name: "Razer Strider Large Gaming Mat", 
    category: "gaming", 
    brand: "Razer", 
    price: 39, 
    stock: 120, 
    image: "",
    specs: { material: "Hybrid soft-hard mat surface, water-resistant, anti-fraying stitched edges" } 
  },
  { 
    name: "Razer Thunderbolt 5 Dock", 
    category: "gaming", 
    brand: "Razer", 
    price: 399, 
    stock: 15, 
    image: "",
    specs: { connectivity: "Thunderbolt 5 ports, multi-display outputs, high-speed data transfer and power delivery" } 
  },
  { 
    name: "Razer Laptop Cooling Pad", 
    category: "gaming", 
    brand: "Razer", 
    price: 149, 
    stock: 35, 
    image: "",
    specs: { features: "Variable fan speed control, dust filtration system, custom magnetic seals for gaming laptops" } 
  },
  { 
    name: "Razer Aether Lamp", 
    category: "gaming", 
    brand: "Razer", 
    price: 79, 
    stock: 60, 
    image: "",
    specs: { features: "Matter-compatible smart ambient lighting lamp with multi-zone control" } 
  },
  { 
    name: "Razer Core X V2 eGPU Enclosure", 
    category: "gaming", 
    brand: "Razer", 
    price: 399, 
    stock: 10, 
    image: "",
    specs: { compatibility: "External desktop graphics card enclosure via Thunderbolt connection" } 
  },
  { 
    name: "Surface Pro 13-inch Flex Keyboard with Slim Pen", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 349, 
    stock: 30, 
    image: "",
    specs: { compatibility: "Surface Pro 13-inch", features: "Can be used detached or attached, built-in storage and charging slot for Slim Pen" } 
  },
  { 
    name: "Surface Pro 13-inch Keyboard with Pen Storage", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 279, 
    stock: 40, 
    image: "",
    specs: { compatibility: "Surface Pro 13-inch", features: "Mechanical keyset, secure slot to store and charge Surface Slim Pen" } 
  },
  { 
    name: "Surface Pro 12-inch Keyboard", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 179, 
    stock: 45, 
    image: "",
    specs: { compatibility: "Surface Pro 12-inch", features: "Standard mechanical keyboard layout with large glass trackpad" } 
  },
  { 
    name: "Surface Pro 12-inch Keyboard with Slim Pen", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 269, 
    stock: 35, 
    image: "",
    specs: { compatibility: "Surface Pro 12-inch", features: "Includes bundled Surface Slim Pen with integrated charging dock" } 
  },
  { 
    name: "Surface Slim Pen", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 129, 
    stock: 75, 
    image: "",
    specs: { features: "Haptic feedback, zero-force inking, precise shading performance" } 
  },
  { 
    name: "Surface Arc Mouse", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 79, 
    stock: 90, 
    image: "",
    specs: { design: "Snaps flat for travel, curves comfortably to fit hand, full scroll plane" } 
  },
  { 
    name: "Surface Thunderbolt 4 Dock", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 299, 
    stock: 25, 
    image: "",
    specs: { connectivity: "Thunderbolt 4 ports, USB-C, Ethernet, up to dual 4K display support" } 
  },
  { 
    name: "Surface 45W USB-C Wall Charger", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 49, 
    stock: 100, 
    image: "",
    specs: { outputPower: "45W power delivery via standard USB-C cable connector" } 
  },
  { 
    name: "Microsoft Adaptive Hub", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 69, 
    stock: 30, 
    image: "",
    specs: { features: "Central hub to connect Microsoft adaptive switches and buttons for custom control setups" } 
  },
  { 
    name: "Microsoft Adaptive Mouse", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 59, 
    stock: 40, 
    image: "",
    specs: { features: "Tailor-made tail extension and thumb support for accessible computing" } 
  },
  { 
    name: "Microsoft Adaptive Button", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 49, 
    stock: 45, 
    image: "",
    specs: { features: "Programmable wireless input button with 8 digital inputs via attached d-pad/joystick" } 
  },
  { 
    name: "Microsoft Adaptive D-Pad / Joystick", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 39, 
    stock: 50, 
    image: "",
    specs: { features: "Modular button topper attachments for the Microsoft Adaptive ecosystem" } 
  },
  { 
    name: "Xbox Wireless Controller (Carbon Black)", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 59, 
    stock: 150, 
    image: "",
    specs: { compatibility: "Xbox Series X/S, Xbox One, Windows PC, mobile devices", features: "Hybrid D-pad, textured grips" } 
  },
  { 
    name: "Xbox Wireless Controller (Robot White)", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 59, 
    stock: 140, 
    image: "",
    specs: { compatibility: "Xbox consoles and PC", features: "Share button, Bluetooth technology" } 
  },
  { 
    name: "Xbox Elite Wireless Controller Series 2", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 179, 
    stock: 60, 
    image: "",
    specs: { features: "Adjustable-tension thumbsticks, wrap-around rubberized grip, shorter hair trigger locks" } 
  },
  { 
    name: "Xbox Adaptive Controller", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 99, 
    stock: 25, 
    image: "",
    specs: { features: "Unified accessible gaming hub designed to fit gamers with limited mobility needs" } 
  },
  { 
    name: "Xbox Stereo Headset", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 59, 
    stock: 80, 
    image: "",
    specs: { features: "Lightweight design, flexible boom mic, supports spatial sound technologies like Windows Sonic" } 
  },
  { 
    name: "Xbox Wireless Headset", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 99, 
    stock: 70, 
    image: "",
    specs: { connectivity: "Direct-to-console pairing & Bluetooth simultaneously", features: "Auto-mute and voice isolation" } 
  },
  { 
    name: "Microsoft Designer Compact Keyboard", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 69, 
    stock: 50, 
    image: "",
    specs: { design: "Slim, sleek profile, Bluetooth multi-device pairing capabilities" } 
  },
  { 
    name: "Microsoft Number Pad", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 29, 
    stock: 85, 
    image: "",
    specs: { connectivity: "Bluetooth wireless number pad with dedicated calculator hotkey" } 
  },
  { 
    name: "Microsoft Bluetooth Ergonomic Mouse", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 49, 
    stock: 90, 
    image: "",
    specs: { design: "Sculpted ergonomic thumb rest, wireless Bluetooth connectivity" } 
  },
  { 
    name: "Microsoft Modern Mobile Mouse", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 34, 
    stock: 110, 
    image: "",
    specs: { design: "Lightweight, low-profile travel mouse with smooth wheel tracking" } 
  },
  { 
    name: "Microsoft Audio Dock", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 249, 
    stock: 20, 
    image: "",
    specs: { features: "Omni-directional speakers, pass-through charging ports, built-in Microsoft Teams controls" } 
  },
  { 
    name: "Microsoft Modern USB-C Speaker", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 99, 
    stock: 40, 
    image: "",
    specs: { features: "Compact certified Microsoft Teams speaker phone configuration with intuitive controls" } 
  },
  { 
    name: "Microsoft Modern Webcam", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 69, 
    stock: 60, 
    image: "",
    specs: { resolution: "1080p HDR video with integrated privacy shutter" } 
  },
  { 
    name: "Surface Dock 2", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 259, 
    stock: 35, 
    image: "",
    specs: { ports: "Surface Connect cable, USB-C ports, Ethernet, audio jack" } 
  },
  { 
    name: "Microsoft USB-C Travel Hub", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 99, 
    stock: 50, 
    image: "",
    specs: { ports: "VGA, HDMI, USB-C, USB-A, Ethernet multi-port adapter" } 
  },
  { 
    name: "Microsoft Ergonomic Keyboard", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 59, 
    stock: 65, 
    image: "",
    specs: { design: "Split keyboard layout with cushioned palm rest for natural typing posture" } 
  },
  { 
    name: "Microsoft Sculpt Ergonomic Desktop", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 129, 
    stock: 40, 
    image: "",
    specs: { design: "Advanced split keyboard layout, separate numeric keypad, and ergonomic mouse combo" } 
  },
  { 
    name: "Microsoft Presentation Pointer 400", 
    category: "gaming", 
    brand: "Microsoft", 
    price: 79, 
    stock: 45, 
    image: "",
    specs: { features: "Bright red laser pointer, intuitive slide-changing controls, wireless presentation tool" } 
  },
  { 
    name: "Sony WH-1000XM5 Wireless Headphones", 
    category: "gaming", 
    brand: "Sony", 
    price: 399, 
    stock: 70, 
    image: "",
    specs: { batteryLife: "Up to 30 hrs", connectivity: "Bluetooth 5.2", noiseCancellation: "Industry-leading Auto ANC" } 
  },
  { 
    name: "Sony WF-1000XM5 Wireless Earbuds", 
    category: "gaming", 
    brand: "Sony", 
    price: 299, 
    stock: 85, 
    image: "",
    specs: { batteryLife: "Up to 8 hrs", connectivity: "Bluetooth 5.3", noiseCancellation: "High-Performance Noise Canceling Processors" } 
  },
  { 
    name: "Sony WH-1000XM4 Wireless Headphones", 
    category: "gaming", 
    brand: "Sony", 
    price: 349, 
    stock: 50, 
    image: "",
    specs: { batteryLife: "Up to 30 hrs", connectivity: "Multipoint Bluetooth connection", noiseCancellation: "Dual Noise Sensor technology" } 
  },
  { 
    name: "Sony LinkBuds S", 
    category: "gaming", 
    brand: "Sony", 
    price: 199, 
    stock: 60, 
    image: "",
    specs: { design: "Ultra-small and lightweight ambient-aware design", batteryLife: "Up to 20 hrs total" } 
  },
  { 
    name: "Sony LinkBuds Open", 
    category: "gaming", 
    brand: "Sony", 
    price: 199, 
    stock: 45, 
    image: "",
    specs: { design: "Open-ring driver keeping you connected to your surroundings", batteryLife: "Up to 22 hrs total" } 
  },
  { 
    name: "Sony WH-CH720N Wireless Noise Canceling Headphones", 
    category: "gaming", 
    brand: "Sony", 
    price: 149, 
    stock: 90, 
    image: "",
    specs: { batteryLife: "Up to 35 hrs", weight: "Lightweight ergonomic build" } 
  },
  { 
    name: "Sony WF-C700N Wireless Earbuds", 
    category: "gaming", 
    brand: "Sony", 
    price: 119, 
    stock: 100, 
    image: "",
    specs: { noiseCancellation: "Digital ANC", batteryLife: "Up to 15 hrs total", waterResistance: "IPX4" } 
  },
  { 
    name: "Sony WF-C500 True Wireless Earbuds", 
    category: "gaming", 
    brand: "Sony", 
    price: 89, 
    stock: 120, 
    image: "",
    specs: { batteryLife: "Up to 20 hrs total", design: "Compact body fits securely", waterResistance: "IPX4" } 
  },
  { 
    name: "Sony INZONE H9 II Wireless Gaming Headset", 
    category: "gaming", 
    brand: "Sony", 
    price: 299, 
    stock: 40, 
    image: "",
    specs: { connectivity: "2.4GHz USB dongle + Bluetooth", features: "360 Spatial Sound for Gaming" } 
  },
  { 
    name: "Sony INZONE Buds True Wireless Gaming Earbuds", 
    category: "gaming", 
    brand: "Sony", 
    price: 199, 
    stock: 55, 
    image: "",
    specs: { latency: "Low-latency 2.4GHz wireless via USB-C dongle", batteryLife: "Up to 12 hrs on earbuds" } 
  },
  { 
    name: "Sony PlayStation 5 Pro Console", 
    category: "gaming", 
    brand: "Sony", 
    price: 699, 
    stock: 25, 
    image: "",
    specs: { storage: "2TB Custom SSD", gpu: "Upgraded GPU with advanced ray tracing" } 
  },
  { 
    name: "Sony PlayStation 5 Slim Console", 
    category: "gaming", 
    brand: "Sony", 
    price: 499, 
    stock: 60, 
    image: "",
    specs: { storage: "1TB SSD", design: "Reduced volume, detachable disc drive option" } 
  },
  { 
    name: "Sony PlayStation VR2", 
    category: "gaming", 
    brand: "Sony", 
    price: 549, 
    stock: 30, 
    image: "",
    specs: { display: "Dual OLED panels", features: "Eye tracking, headset feedback" } 
  },
  { 
    name: "Sony DualSense Wireless Controller", 
    category: "gaming", 
    brand: "Sony", 
    price: 69, 
    stock: 150, 
    image: "",
    specs: { features: "Haptic feedback, adaptive triggers" } 
  },
  { 
    name: "Sony DualSense Edge Wireless Controller", 
    category: "gaming", 
    brand: "Sony", 
    price: 199, 
    stock: 45, 
    image: "",
    specs: { features: "Hardware customization, swappable stick modules, back buttons" } 
  },
  {
    name: "Logitech G PRO X Superlight 2 DEX Wireless Gaming Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 159, 
    stock: 60, 
    image: "",
    specs: { design: "Asymmetric ergonomic shape", sensor: "HERO 2 sensor, up to 32,000 DPI", connectivity: "LIGHTSPEED Wireless" } 
  },
  { 
    name: "Logitech G PRO X Superlight 2 LIGHTSPEED Wireless Gaming Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 159, 
    stock: 75, 
    image: "",
    specs: { weight: "60g", switches: "LIGHTFORCE hybrid optical-mechanical switches" } 
  },
  { 
    name: "Logitech G305 X SUPERLIGHT Wireless Gaming Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 99, 
    stock: 90, 
    image: "",
    specs: { connectivity: "LIGHTSPEED Wireless", sensor: "HERO sensor for accurate tracking" } 
  },
  { 
    name: "Logitech G502 X PLUS LIGHTSPEED Wireless RGB Gaming Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 159, 
    stock: 50, 
    image: "",
    specs: { features: "LIGHTFORCE hybrid switches, 8-zone LIGHTSYNC RGB, dual-mode scroll wheel" } 
  },
  { 
    name: "Logitech G502 X Wired Gaming Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 79, 
    stock: 85, 
    image: "",
    specs: { switches: "LIGHTFORCE optical-mechanical switches, high-precision HERO 25K sensor" } 
  },
  { 
    name: "Logitech G203 LIGHTSYNC Gaming Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 39, 
    stock: 150, 
    image: "",
    specs: { features: "Vibrant LIGHTSYNC RGB, gaming-grade sensor, classic 6-button design" } 
  },
  { 
    name: "Logitech G316 X 98 Mechanical Gaming Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 139, 
    stock: 45, 
    image: "",
    specs: { design: "98% compact layout, mechanical switches, wireless connectivity" } 
  },
  { 
    name: "Logitech G915 LIGHTSPEED Wireless Mechanical Gaming Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 249, 
    stock: 35, 
    image: "",
    specs: { design: "Low-profile mechanical switches, premium brushed aluminum top case" } 
  },
  { 
    name: "Logitech G PRO X TKL Rapid Gaming Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 169, 
    stock: 40, 
    image: "",
    specs: { switches: "Magnetic analog switches with adjustable actuation and rapid trigger" } 
  },
  { 
    name: "Logitech G715 Wireless Mechanical Gaming Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 199, 
    stock: 30, 
    image: "",
    specs: { design: "Cloud-soft palm rest, dreamy aesthetic, LIGHTSPEED wireless connectivity" } 
  },
  { 
    name: "Logitech G413 SE Full-Size Mechanical Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 69, 
    stock: 80, 
    image: "",
    specs: { switches: "Tactile mechanical switches, black-brushed aluminum alloy top case" } 
  },
  { 
    name: "Logitech G325 LIGHTSPEED Wireless Gaming Headset", 
    category: "gaming", 
    brand: "Logitech", 
    price: 79, 
    stock: 90, 
    image: "",
    specs: { connectivity: "LIGHTSPEED wireless and Bluetooth, lightweight comfort design" } 
  },
  { 
    name: "Logitech G PRO X 2 LIGHTSPEED Wireless Gaming Headset", 
    category: "gaming", 
    brand: "Logitech", 
    price: 249, 
    stock: 45, 
    image: "",
    specs: { drivers: "Graphene audio drivers, professional-grade DTS Headphone:X 2.0 surround sound" } 
  },
  { 
    name: "Logitech G735 Wireless Gaming Headset", 
    category: "gaming", 
    brand: "Logitech", 
    price: 229, 
    stock: 35, 
    image: "",
    specs: { design: "Designed for smaller head sizes and glasses-wearers, soft RGB lighting" } 
  },
  { 
    name: "Logitech G432 7.1 Surround Sound Gaming Headset", 
    category: "gaming", 
    brand: "Logitech", 
    price: 79, 
    stock: 100, 
    image: "",
    specs: { drivers: "50mm audio drivers, 7.1 surround sound on PC via USB DAC" } 
  },
  { 
    name: "Logitech G335 Wired Gaming Headset", 
    category: "gaming", 
    brand: "Logitech", 
    price: 49, 
    stock: 120, 
    image: "",
    specs: { weight: "240g lightweight suspension headband design, 3.5mm audio jack" } 
  },
  { 
    name: "Logitech G923 Racing Wheel and Pedals", 
    category: "gaming", 
    brand: "Logitech", 
    price: 399, 
    stock: 20, 
    image: "",
    specs: { features: "TRUEFORCE high-definition force feedback, programmable dual-clutch launch control" } 
  },
  { 
    name: "Logitech G PRO Racing Wheel (Direct Drive)", 
    category: "gaming", 
    brand: "Logitech", 
    price: 999, 
    stock: 10, 
    image: "",
    specs: { features: "Direct Drive motor, TRUEFORCE feedback technology, designed for pro sim racers" } 
  },
  { 
    name: "Logitech G ASTRO A50 X Wireless Gaming Headset + Base Station", 
    category: "gaming", 
    brand: "Logitech", 
    price: 379, 
    stock: 25, 
    image: "",
    specs: { features: "PLAYSYNC multi-console audio switching, PRO-G Graphene drivers, HDMI 2.1 passthrough" } 
  },
  { 
    name: "Logitech G ASTRO A10 Gen 2 Wired Headset", 
    category: "gaming", 
    brand: "Logitech", 
    price: 59, 
    stock: 90, 
    image: "",
    specs: { features: "Durable construction, flip-to-mute boom mic, custom-tuned 32mm drivers" } 
  },
  { 
    name: "Logitech BRIO 500 Full HD Webcam", 
    category: "gaming", 
    brand: "Logitech", 
    price: 129, 
    stock: 50, 
    image: "",
    specs: { resolution: "1080p HDR with auto-light correction and Show Mode" } 
  },
  { 
    name: "Logitech C920 HD Pro Webcam", 
    category: "gaming", 
    brand: "Logitech", 
    price: 79, 
    stock: 110, 
    image: "",
    specs: { resolution: "Full 1080p HD video at 30 fps, dual stereo mics" } 
  },
  { 
    name: "Logitech C922 Pro Stream Webcam", 
    category: "gaming", 
    brand: "Logitech", 
    price: 99, 
    stock: 80, 
    image: "",
    specs: { resolution: "720p at 60fps or 1080p at 30fps streaming optimized performance" } 
  },
  { 
    name: "Logitech Yeti Orb USB Microphone", 
    category: "gaming", 
    brand: "Logitech", 
    price: 59, 
    stock: 85, 
    image: "",
    specs: { features: "Custom condenser capsule designed for game streaming, RGB status indicator" } 
  },
  { 
    name: "Logitech Blue Yeti USB Microphone for Streaming", 
    category: "gaming", 
    brand: "Logitech", 
    price: 129, 
    stock: 65, 
    image: "",
    specs: { features: "Multiple pattern selection (cardioid, bidirectional, omnidirectional, stereo)" } 
  },
  { 
    name: "Logitech Wave Keys Ergonomic Wireless Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 79, 
    stock: 70, 
    image: "",
    specs: { design: "Wavy ergonomic layout with cushioned palm rest for all-day typing comfort" } 
  },
  { 
    name: "Logitech MX Master 3S Advanced Wireless Mouse", 
    category: "gaming", 
    brand: "Logitech", 
    price: 99, 
    stock: 95, 
    image: "",
    specs: { features: "8000 DPI track-on-glass sensor, quiet clicks, MagSpeed electromagnetic scrolling" } 
  },
  { 
    name: "Logitech MX Mechanical Wireless Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 169, 
    stock: 45, 
    image: "",
    specs: { switches: "Low-profile mechanical tactile quiet switches, smart backlighting" } 
  },
  { 
    name: "Logitech Pebble Keys 2 K380s Bluetooth Keyboard", 
    category: "gaming", 
    brand: "Logitech", 
    price: 39, 
    stock: 140, 
    image: "",
    specs: { design: "Slim, minimalist, round-keyed portable multi-device keyboard" } 
  },
  { 
    name: "Logitech G Powerplay Wireless Charging Mouse Pad", 
    category: "gaming", 
    brand: "Logitech", 
    price: 119, 
    stock: 35, 
    image: "",
    specs: { features: "Continuous wireless charging system for compatible Logitech G mice while in use" } 
  },
  { 
    name: "Vivo X300 Ultra", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1399, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.82\" AMOLED 144Hz", battery: "6600mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Vivo X300 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1099, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X300", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 899, 
    stock: 65, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X200 Ultra", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1299, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "6000mAh", camera: "200MP Triple" } 
  },
  { 
    name: "Vivo X200 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 999, 
    stock: 45, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X200", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 799, 
    stock: 60, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X200 Pro mini", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 849, 
    stock: 50, 
    image: "",
    specs: { cpu: "Dimensity 9400", ram: "12GB", storage: "256GB", display: "6.31\" AMOLED 120Hz", battery: "5700mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X100 Ultra", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1199, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X100 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 899, 
    stock: 35, 
    image: "",
    specs: { cpu: "Dimensity 9300", ram: "16GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "5400mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X100", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 699, 
    stock: 50, 
    image: "",
    specs: { cpu: "Dimensity 9300", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X Fold 3 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1599, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "16GB", storage: "512GB", display: "8.03\" Foldable AMOLED 120Hz", battery: "5700mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X Fold 3", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1399, 
    stock: 25, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "12GB", storage: "256GB", display: "8.03\" Foldable AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X Fold 2", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1199, 
    stock: 15, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "12GB", storage: "256GB", display: "8.03\" Foldable AMOLED 120Hz", battery: "4800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X Flip", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 999, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon 8+ Gen 1", ram: "12GB", storage: "256GB", display: "6.74\" Foldable AMOLED 120Hz", battery: "4400mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo X90 Pro+", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 1049, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 2", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "4700mAh", camera: "50MP Quad" } 
  },
  { 
    name: "Vivo X90 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 849, 
    stock: 30, 
    image: "",
    specs: { cpu: "Dimensity 9200", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "4870mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo X90", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 699, 
    stock: 45, 
    image: "",
    specs: { cpu: "Dimensity 9200", ram: "8GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "4810mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo V40 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 599, 
    stock: 70, 
    image: "",
    specs: { cpu: "Dimensity 9200+", ram: "12GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo V40", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 499, 
    stock: 90, 
    image: "",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo V40 Lite", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 329, 
    stock: 120, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 2", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo V40 SE", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 279, 
    stock: 110, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 2", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo V30 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 549, 
    stock: 50, 
    image: "",
    specs: { cpu: "Dimensity 8200", ram: "12GB", storage: "512GB", display: "6.78\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo V30", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 449, 
    stock: 80, 
    image: "",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo V30e", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 349, 
    stock: 95, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo V29 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 499, 
    stock: 40, 
    image: "",
    specs: { cpu: "Dimensity 8200", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "4600mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo V29", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 399, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon 778G+", ram: "8GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "4600mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo V27 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 379, 
    stock: 60, 
    image: "",
    specs: { cpu: "Dimensity 8200", ram: "8GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "4600mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Vivo T3 Ultra", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 389, 
    stock: 85, 
    image: "",
    specs: { cpu: "Dimensity 9200+", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo T3 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 299, 
    stock: 100, 
    image: "",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "8GB", storage: "256GB", display: "6.77\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo T3", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 239, 
    stock: 130, 
    image: "",
    specs: { cpu: "Dimensity 7200", ram: "8GB", storage: "128GB", display: "6.67\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo T3x", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 179, 
    stock: 160, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "6GB", storage: "128GB", display: "6.72\" LCD 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo Y300 Pro", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 269, 
    stock: 140, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.77\" AMOLED 120Hz", battery: "6500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Vivo Y200", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 229, 
    stock: 150, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 1", ram: "8GB", storage: "128GB", display: "6.67\" AMOLED 120Hz", battery: "4800mAh", camera: "64MP Dual" } 
  },
  { 
    name: "Vivo Y28", 
    category: "smartphones", 
    brand: "Vivo", 
    price: 189, 
    stock: 180, 
    image: "",
    specs: { cpu: "Helio G85", ram: "8GB", storage: "256GB", display: "6.56\" LCD 90Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Razr Fold", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 1799, 
    stock: 20, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "16GB", storage: "512GB", display: "8.0\" Foldable AMOLED 120Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Razr Ultra (2026)", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 1099, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "6.9\" Foldable AMOLED 165Hz", battery: "4500mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Razr+ (2026)", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 999, 
    stock: 55, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "12GB", storage: "512GB", display: "6.9\" Foldable AMOLED 165Hz", battery: "4000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Razr (2026)", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 699, 
    stock: 70, 
    image: "",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "8GB", storage: "256GB", display: "6.9\" Foldable AMOLED 144Hz", battery: "4200mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Razr 70 Ultra", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 1149, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite Gen 5", ram: "16GB", storage: "512GB", display: "7.0\" Foldable AMOLED 165Hz", battery: "4700mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Razr 70", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 749, 
    stock: 60, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 3", ram: "12GB", storage: "256GB", display: "6.9\" Foldable AMOLED 144Hz", battery: "4300mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Edge 70 Max", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 899, 
    stock: 45, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "16GB", storage: "512GB", display: "6.8\" AMOLED 165Hz", battery: "6000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Edge 70 Pro Plus", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 849, 
    stock: 40, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "16GB", storage: "512GB", display: "6.7\" AMOLED 144Hz", battery: "5200mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Edge 70 Pro", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 749, 
    stock: 50, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "5000mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Edge 70 Fusion+", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 499, 
    stock: 75, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 3", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "5200mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Edge 70 Fusion", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 429, 
    stock: 90, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 2", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Edge 70", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 599, 
    stock: 65, 
    image: "",
    specs: { cpu: "Snapdragon 7 Gen 3", ram: "8GB", storage: "256GB", display: "6.67\" AMOLED 144Hz", battery: "4800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Edge 60 Pro", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 699, 
    stock: 45, 
    image: "",
    specs: { cpu: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "4800mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Edge 60 Fusion", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 399, 
    stock: 80, 
    image: "",
    specs: { cpu: "Snapdragon 7s Gen 2", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 144Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Edge 50 Ultra", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 899, 
    stock: 35, 
    image: "",
    specs: { cpu: "Snapdragon 8s Gen 3", ram: "16GB", storage: "1TB", display: "6.7\" AMOLED 144Hz", battery: "4500mAh", camera: "50MP Triple" } 
  },
  { 
    name: "Motorola Moto G Max", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 299, 
    stock: 120, 
    image: "",
    specs: { cpu: "MediaTek Dimensity 7025", ram: "8GB", storage: "256GB", display: "6.7\" IPS LCD 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G87", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 269, 
    stock: 110, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G77 Power", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 229, 
    stock: 130, 
    image: "",
    specs: { cpu: "Snapdragon 6s Gen 3", ram: "8GB", storage: "256GB", display: "6.6\" IPS LCD 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G77", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 219, 
    stock: 140, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "128GB", display: "6.7\" AMOLED 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G67 Power 5G", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 199, 
    stock: 150, 
    image: "",
    specs: { cpu: "MediaTek Dimensity 6300", ram: "8GB", storage: "256GB", display: "6.5\" IPS LCD 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G67", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 189, 
    stock: 160, 
    image: "",
    specs: { cpu: "MediaTek Dimensity 6300", ram: "8GB", storage: "128GB", display: "6.5\" IPS LCD 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G57 Power 5G", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 179, 
    stock: 170, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 2", ram: "6GB", storage: "128GB", display: "6.5\" IPS LCD 120Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G47", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 169, 
    stock: 180, 
    image: "",
    specs: { cpu: "Snapdragon 4 Gen 2", ram: "6GB", storage: "128GB", display: "6.5\" IPS LCD 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G37 Power", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 159, 
    stock: 190, 
    image: "",
    specs: { cpu: "Helio G99", ram: "6GB", storage: "128GB", display: "6.5\" IPS LCD 90Hz", battery: "6000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G37", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 149, 
    stock: 200, 
    image: "",
    specs: { cpu: "Helio G99", ram: "6GB", storage: "128GB", display: "6.5\" IPS LCD 90Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G35 5G", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 199, 
    stock: 150, 
    image: "",
    specs: { cpu: "Unisoc T760", ram: "4GB", storage: "128GB", display: "6.72\" IPS LCD 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G Stylus (2026)", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 299, 
    stock: 100, 
    image: "",
    specs: { cpu: "Snapdragon 6 Gen 1", ram: "8GB", storage: "256GB", display: "6.7\" pOLED 120Hz", battery: "5000mAh", camera: "50MP Dual", feature: "Built-in Stylus" } 
  },
  { 
    name: "Motorola Moto G Power (2026)", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 249, 
    stock: 110, 
    image: "",
    specs: { cpu: "MediaTek Dimensity 6300", ram: "8GB", storage: "128GB", display: "6.7\" IPS LCD 120Hz", battery: "5000mAh", camera: "50MP Dual" } 
  },
  { 
    name: "Motorola Moto G Play (2026)", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 139, 
    stock: 220, 
    image: "",
    specs: { cpu: "Snapdragon 680", ram: "4GB", storage: "64GB", display: "6.5\" IPS LCD 90Hz", battery: "5000mAh", camera: "16MP Single" } 
  },
  { 
    name: "Motorola Signature", 
    category: "smartphones", 
    brand: "Motorola", 
    price: 899, 
    stock: 30, 
    image: "",
    specs: { cpu: "Snapdragon 8 Elite", ram: "16GB", storage: "1TB", display: "6.7\" AMOLED 165Hz", battery: "5000mAh", camera: "50MP Triple" } 
  }
];
  
const seedProducts = seedProductsRaw.map((p, i)=>({
  id: i + 1,
  ...p,
  desc_en: descTemplates[p.category].en(p.name),
  desc_km: descTemplates[p.category].km(p.name)
}));


/* ===== LOCAL PRODUCT IMAGE MANIFEST =====
   Every product is resolved to a real file inside ./image/.
   This fixes empty/old image paths and keeps product cards + modal consistent. */
const PRODUCT_IMAGE_MAP = {
  "Galaxy S26 Ultra": "image/samsungs26ultra.jpg",
  "iPhone 17 Pro Max": "image/iphone-17-pro-max.jpg",
  "Oppo Find X9 Ultra": "image/oppo-find-x9-ultra.webp",
  "OnePlus 15": "image/oneplus_15.jpg",
  "Xiaomi 17 Pro Max": "image/xiaomi-17-pro-max.jpg",
  "Huawei Pura 80 Ultra": "image/huawei-pura-80-ultra.jpg",
  "RedMagic 11 Pro": "image/RedMagic 11 Pro.jpg",
  "Samsung Galaxy Z Fold 8 Ultra": "image/Samsung Galaxy Z Fold 8 Ultra.jpg",
  "Samsung Galaxy Z Fold 8": "image/Samsung Galaxy Z Fold 8.jpg",
  "Samsung Galaxy Z Flip 8": "image/Samsung Galaxy Z Flip 8.jpg",
  "Samsung Galaxy Z Fold 7": "image/Samsung Galaxy Z Fold 7.webp",
  "Samsung Galaxy Z Flip 7": "image/Samsung Galaxy Z Flip 7.jpg",
  "Samsung Galaxy Z Flip 7 FE": "image/Samsung Galaxy Z Flip 7 FE.webp",
  "Samsung Galaxy Z Fold 6": "image/Samsung Galaxy Z Fold 6.jpg",
  "Samsung Galaxy Z TriFold": "image/Samsung Galaxy Z TriFold.jpg",
  "Samsung Galaxy S26+": "image/Samsung Galaxy S26.jpg",
  "Samsung Galaxy S26": "image/Samsung Galaxy S26.jpg",
  "Samsung Galaxy S25 Ultra": "image/Samsung Galaxy S25 Ultra.avif",
  "Samsung Galaxy S25+": "image/Samsung Galaxy S25+.jpg",
  "Samsung Galaxy S25": "image/Samsung Galaxy S25+.jpg",
  "Samsung Galaxy S25 Edge": "image/Samsung Galaxy S25 Edge.jpg",
  "Samsung Galaxy S25 FE": "image/Samsung Galaxy S25 FE.jpg",
  "Samsung Galaxy S24 Ultra": "image/Samsung Galaxy S24 Ultra.jpg",
  "Samsung Galaxy S24 FE": "image/Samsung Galaxy S24 FE.jpg",
  "Samsung Galaxy A57": "image/Samsung Galaxy A57.webp",
  "Samsung Galaxy A56 5G": "image/Samsung Galaxy A56 5G.webp",
  "Samsung Galaxy A36 5G": "image/Samsung Galaxy A36 5G.webp",
  "Samsung Galaxy A27": "image/Samsung Galaxy A27.jpg",
  "Samsung Galaxy A17 5G": "image/Samsung Galaxy A17 5G.jpg",
  "Samsung Galaxy A07 5G": "image/Samsung Galaxy A07 5G.webp",
  "Samsung Galaxy M47": "image/Samsung Galaxy M47.webp",
  "Samsung Galaxy M17 5G": "image/Samsung Galaxy M17 5G.jpg",
  "Samsung Galaxy M56 5G": "image/Samsung Galaxy M56 5G.jpg",
  "Samsung Galaxy F70 Pro": "image/Samsung Galaxy F70 Pro.webp",
  "Samsung Galaxy F56 5G": "image/Samsung Galaxy F56 5G.avif",
  "Samsung Galaxy XCover 7 Pro": "image/Samsung Galaxy XCover 7 Pro.jpg",
  "iPhone 18 Pro Max": "image/iPhone 18 Pro Max.jpg",
  "iPhone 18 Pro": "image/iPhone 18 Pro.avif",
  "iPhone 17 Pro": "image/iPhone 17 Pro.jpg",
  "iPhone Air": "image/iPhone Air.jpg",
  "iPhone 17": "image/iPhone 17.webp",
  "iPhone 16 Pro Max": "image/iPhone 16 Pro Max.jpg",
  "iPhone 16 Pro": "image/iPhone 16 Pro.jpg",
  "iPhone 16 Plus": "image/iPhone 16 Plus.jpg",
  "iPhone 16": "image/iPhone 16.jpg",
  "iPhone 16e": "image/iPhone 16e.avif",
  "iPhone 15 Pro Max": "image/iPhone 15 Pro Max.jpg",
  "iPhone 15 Pro": "image/iPhone 15 Pro.jpg",
  "iPhone 15 Plus": "image/iPhone 15 Plus.jpg",
  "iPhone 15": "image/iPhone 15.jpg",
  "iPhone 14 Pro Max": "image/iPhone 14 Pro Max.jpg",
  "iPhone 14 Pro": "image/iPhone 14 Pro.jpg",
  "iPhone 14 Plus": "image/iPhone 14 Plus.jpg",
  "iPhone 14": "image/iPhone 14.jpg",
  "iPhone SE (3rd Generation)": "image/iPhone SE (3rd Generation).webp",
  "iPhone 13 Pro Max": "image/iPhone 13 Pro Max.jpg",
  "iPhone 13 Pro": "image/iPhone 13 Pro.jpg",
  "iPhone 13": "image/iPhone 13.webp",
  "iPhone 13 mini": "image/iPhone 13 mini.jpg",
  "iPhone 12 Pro Max": "image/iPhone 12 Pro Max.webp",
  "iPhone 12 Pro": "image/iPhone 12 Pro.jpg",
  "iPhone 12": "image/iPhone 12.jpg",
  "iPhone 12 mini": "image/iPhone 12 mini.jpg",
  "iPhone SE": "image/iPhone SE.jpg",
  "OnePlus 15T": "image/OnePlus 15T.jpg",
  "OnePlus 15R": "image/OnePlus 15R.jpg",
  "OnePlus 13": "image/OnePlus 13.jpg",
  "OnePlus 13T": "image/OnePlus 13T.jpg",
  "OnePlus 13R": "image/OnePlus 13R.jpg",
  "OnePlus 13s": "image/OnePlus 13.jpg",
  "OnePlus 12": "image/OnePlus 12.jpg",
  "OnePlus 12R": "image/OnePlus 12R.jpg",
  "OnePlus Open (Foldable)": "image/OnePlus Open (Foldable).jpg",
  "OnePlus Nord 6": "image/OnePlus Nord 6.jpg",
  "OnePlus Nord CE 6": "image/OnePlus Nord CE 6.jpg",
  "OnePlus Nord CE 6 Lite": "image/OnePlus Nord CE 6 Lite.jpg",
  "OnePlus Nord 5": "image/OnePlus Nord 5.webp",
  "OnePlus Nord CE 5": "image/OnePlus Nord CE 5.jpg",
  "OnePlus Nord 4": "image/OnePlus Nord 4.jpg",
  "OnePlus Nord CE 4": "image/OnePlus Nord CE 4.jpg",
  "OnePlus Nord CE 4 Lite": "image/OnePlus Nord CE 4 Lite.jpg",
  "OnePlus Nord 3": "image/OnePlus Nord 3.jpg",
  "OnePlus Nord CE 3": "image/OnePlus Nord CE 3.jpg",
  "OnePlus Ace 6 Ultra": "image/OnePlus Ace 6 Ultra.jpg",
  "OnePlus Ace 6": "image/OnePlus Ace 6.webp",
  "OnePlus Ace 6T": "image/OnePlus Ace 6T.jpg",
  "OnePlus Ace 5 Ultra": "image/OnePlus Ace 5 Ultra.jpg",
  "OnePlus Ace 5 Pro": "image/OnePlus Ace 5 Pro.jpg",
  "OnePlus Ace 5": "image/OnePlus Ace 5.jpg",
  "OnePlus Ace 3 Pro": "image/OnePlus Ace 3 Pro.jpg",
  "OnePlus Ace 3V": "image/OnePlus Ace 3V.jpg",
  "OnePlus Turbo 6": "image/OnePlus Turbo 6.jpg",
  "OnePlus N6": "image/OnePlus N6.jpg",
  "OPPO Find X9 Pro": "image/OPPO Find X9 Pro.jpg",
  "OPPO Find X9s": "image/OPPO Find X9s.jpg",
  "OPPO Find X9": "image/OPPO Find X9.jpg",
  "OPPO Find N6 (Foldable)": "image/OPPO Find N6 (Foldable).jpg",
  "OPPO Find N5 (Foldable)": "image/OPPO Find N5 (Foldable).jpg",
  "OPPO Find X8 Pro": "image/OPPO Find X8 Pro.jpg",
  "OPPO Find X8": "image/OPPO Find X8.jpg",
  "OPPO Reno16 Pro 5G": "image/OPPO Reno16 Pro 5G.jpg",
  "OPPO Reno16 5G": "image/OPPO Reno16 5G.jpg",
  "OPPO Reno16 F 5G": "image/OPPO Reno16 F 5G.jpg",
  "OPPO Reno15 Pro 5G": "image/OPPO Reno15 Pro 5G.jpg",
  "OPPO Reno15 5G": "image/OPPO Reno15 5G.jpg",
  "OPPO Reno15 F 5G": "image/OPPO Reno15 F 5G.jpg",
  "OPPO Reno14 Pro 5G": "image/OPPO Reno14 Pro 5G.jpg",
  "OPPO Reno14 5G": "image/OPPO Reno14 5G.jpg",
  "OPPO Reno13 Pro 5G": "image/OPPO Reno13 Pro 5G.jpg",
  "OPPO Reno13 5G": "image/OPPO Reno13 5G.jpg",
  "OPPO Reno12 Pro 5G": "image/OPPO Reno12 Pro 5G.jpg",
  "OPPO Reno12 5G": "image/OPPO Reno12 Pro 5G.jpg",
  "OPPO A6 Pro 5G": "image/OPPO A6 Pro 5G.jpg",
  "OPPO A6i": "image/OPPO A6i.jpg",
  "OPPO A6 4G": "image/OPPO A6 4G.jpg",
  "OPPO A7 Pro Max 5G": "image/OPPO A7 Pro Max 5G.jpg",
  "OPPO F33 Pro 5G": "image/OPPO F33 Pro 5G.jpg",
  "OPPO K15 Pro Plus": "image/OPPO K15 Pro Plus.jpg",
  "OPPO K15 Pro": "image/OPPO K15 Pro.jpg",
  "OPPO K15 5G": "image/OPPO K15 5G.jpg",
  "OPPO K14x 5G": "image/OPPO K14x 5G.jpg",
  "Xiaomi 17 Pro": "image/Xiaomi 17 Pro.jpg",
  "Xiaomi 17": "image/Xiaomi 17.jpg",
  "Xiaomi 17T Pro": "image/Xiaomi 17T Pro.jpg",
  "Xiaomi 17T": "image/Xiaomi 17T.jpg",
  "Xiaomi 15 Ultra": "image/Xiaomi 15 Ultra.jpg",
  "Xiaomi 15 Pro": "image/Xiaomi 15 Pro.jpg",
  "Xiaomi 15": "image/Xiaomi 15.jpg",
  "Xiaomi 15T Pro": "image/Xiaomi 15T Pro.jpg",
  "Xiaomi 15T": "image/Xiaomi 15T.jpg",
  "Xiaomi Mix Fold 4": "image/Xiaomi Mix Fold 4.jpg",
  "Xiaomi Mix Flip": "image/Xiaomi Mix Flip.jpg",
  "Redmi Note 17 Pro Max": "image/Redmi Note 17 Pro Max.jpg",
  "Redmi Note 17 Pro": "image/Redmi Note 17 Pro.jpg",
  "Redmi Note 17 5G": "image/Redmi Note 17 5G.jpg",
  "Redmi Note 17": "image/Redmi Note 17.jpg",
  "Redmi 17 5G": "image/Redmi 17 5G.jpg",
  "Redmi 17": "image/Redmi 17.jpg",
  "Redmi Note 15 Pro+ 5G": "image/Redmi Note 15 Pro 5G.jpg",
  "Redmi Note 15 Pro 5G": "image/Redmi Note 15 Pro 5G.jpg",
  "Redmi Note 15 5G": "image/Redmi Note 15 Pro+ 5G.jpg",
  "Redmi 15": "image/Redmi 15.jpg",
  "Redmi 15C": "image/Redmi 15c.jpg",
  "Poco F9 Ultra": "image/Poco F9 Ultra.jpg",
  "Poco F9 Pro": "image/Poco F9 Pro.jpg",
  "Poco X8 Pro": "image/Poco X8 Pro.jpg",
  "Poco M8": "image/Poco M8.jpg",
  "Redmi Turbo 5": "image/Redmi Turbo 5.jpg",
  "Redmi K90 Ultra": "image/Redmi K90 Ultra.jpg",
  "Redmi A3x": "image/Redmi A3x.jpg",
  "RedMagic 11S Pro+": "image/RedMagic 11S Pro+.jpg",
  "RedMagic 11S Pro": "image/RedMagic 11S Pro.jpg",
  "RedMagic 11 Pro+": "image/RedMagic 11 Pro+.jpg",
  "RedMagic 11 Air": "image/RedMagic 11 Air.jpg",
  "RedMagic 11 Pro Golden Saga Limited Edition": "image/RedMagic 11 Pro Golden Saga Limited Edition.jpg",
  "RedMagic 10S Pro+": "image/RedMagic 10S Pro+.jpg",
  "RedMagic 10S Pro": "image/RedMagic 10S Pro.jpg",
  "RedMagic 10 Pro+": "image/RedMagic 10 Pro+.jpg",
  "RedMagic 10 Pro": "image/RedMagic 10 Pro.jpg",
  "RedMagic 10 Air": "image/RedMagic 10 Air.jpg",
  "RedMagic 10 Pro Golden Saga Limited Edition": "image/RedMagic 10 Pro Golden Saga Limited Edition.jpg",
  "RedMagic 9S Pro+": "image/RedMagic 9S Pro+.jpg",
  "RedMagic 9S Pro": "image/RedMagic 9S Pro.jpg",
  "RedMagic 9 Pro+": "image/RedMagic 9 Pro+.jpg",
  "RedMagic 9 Pro": "image/RedMagic 9 Pro.jpg",
  "RedMagic 8S Pro+": "image/RedMagic 8S Pro+.jpg",
  "RedMagic 8S Pro": "image/RedMagic 8S Pro.jpg",
  "RedMagic 8 Pro+": "image/RedMagic 8 Pro+.jpg",
  "RedMagic 8 Pro": "image/RedMagic 8 Pro.jpg",
  "RedMagic 7S Pro": "image/RedMagic 7S Pro.jpg",
  "RedMagic 7S": "image/RedMagic 7S.jpg",
  "RedMagic 7 Pro": "image/RedMagic 7 pro.jpg",
  "RedMagic 7": "image/RedMagic 7.jpg",
  "RedMagic 6S Pro": "image/RedMagic 6S Pro.jpg",
  "RedMagic 6R": "image/RedMagic 6R.jpg",
  "RedMagic 6 Pro": "image/RedMagic 6 Pro.jpg",
  "RedMagic 6": "image/RedMagic 6.jpg",
  "RedMagic 5S": "image/RedMagic 5S.jpg",
  "RedMagic 5G": "image/RedMagic 5G.jpg",
  "ThinkPad X1 Carbon": "image/ThinkPad X1 Carbon.jpg",
  "ThinkPad X1 2-in-1": "image/ThinkPad X1 2-in-1.jpg",
  "ThinkPad T14": "image/ThinkPad T14.jpg",
  "ThinkPad T14s": "image/ThinkPad T14s.jpg",
  "ThinkPad T16": "image/ThinkPad T16.jpg",
  "ThinkPad E14": "image/ThinkPad E14.jpg",
  "ThinkPad E16": "image/ThinkPad E16.jpg",
  "ThinkPad L14": "image/ThinkPad L14.jpg",
  "ThinkPad X13": "image/ThinkPad X13.jpg",
  "ThinkPad P16": "image/ThinkPad P16.jpg",
  "Yoga Pro 9i": "image/Yoga Pro 9i.jpg",
  "Yoga Pro 7i": "image/Yoga Pro 7i.jpg",
  "Yoga Slim 7x": "image/Yoga Slim 7x.jpg",
  "Yoga 7i 2-in-1": "image/Yoga 7i 2-in-1.jpg",
  "Yoga Book 9i": "image/Yoga Book 9i.jpg",
  "Legion Pro 7i": "image/Legion Pro 7i.jpg",
  "Legion Pro 5i": "image/Legion Pro 5i.jpg",
  "Legion 7i": "image/Legion 7i.jpg",
  "Legion 5i": "image/Legion 5i.jpg",
  "Legion Slim 5": "image/Legion Slim 5.jpg",
  "Lenovo LOQ 15": "image/Lenovo LOQ 15.jpg",
  "Lenovo LOQ 16": "image/Lenovo LOQ 16.jpg",
  "IdeaPad Pro 5": "image/IdeaPad Pro 5.jpg",
  "IdeaPad Slim 5": "image/IdeaPad Slim 5.jpg",
  "IdeaPad Slim 3": "image/IdeaPad Slim 3.jpg",
  "IdeaPad 5 2-in-1": "image/IdeaPad 5 2-in-1.jpg",
  "Lenovo Slim 7i": "image/Lenovo Slim 7i.jpg",
  "ThinkBook 16": "image/ThinkBook 16.jpg",
  "ThinkBook Plus": "image/ThinkBook Plus.jpg",
  "Lenovo Chromebook Plus": "image/Lenovo Chromebook Plus.jpg",
  "HP OmniBook Ultra Flip 14": "image/HP OmniBook Ultra Flip 14.jpg",
  "HP OmniBook X Flip 16": "image/HP OmniBook X Flip 16.jpg",
  "HP OmniBook Ultra 14": "image/HP OmniBook Ultra 14.jpg",
  "HP OmniBook X 14": "image/HP OmniBook X 14.jpg",
  "HP OmniBook 7": "image/HP OmniBook 7.jpg",
  "HP OmniBook 5 14": "image/HP OmniBook 5 14.jpg",
  "HP OmniBook 3": "image/HP OmniBook 3.jpg",
  "HP OmniBook 7 Aero": "image/HP OmniBook 7 Aero.jpg",
  "HP OmniBook Ultra 16": "image/HP OmniBook Ultra 16.jpg",
  "HP OmniBook 5 16": "image/HP OmniBook 5 16.jpg",
  "HyperX Omen Max 16": "image/HyperX Omen Max 16.jpg",
  "HP Omen Transcend 14": "image/HP Omen Transcend 14.jpg",
  "HP Omen 16": "image/HP Omen 16.jpg",
  "HyperX Omen 16 Valorant Limited Edition": "image/HyperX Omen 16 Valorant Limited Edition.jpg",
  "HP Victus 16": "image/HP Victus 16.jpg",
  "HP Victus 15": "image/HP Victus 15.jpg",
  "HyperX Omen 15": "image/HyperX Omen 15.jpg",
  "HP EliteBook X G2": "image/HP EliteBook X G2.jpg",
  "HP EliteBook Ultra G1q": "image/HP EliteBook Ultra G1q.jpg",
  "HP EliteBook 8 G2": "image/HP EliteBook 8 G2.jpg",
  "HP EliteBook 6 G1q": "image/HP EliteBook 6 G1q.jpg",
  "HP ProBook 4 G2": "image/HP ProBook 4 G2.jpg",
  "HP ProBook 4 G1i": "image/HP ProBook 4 G1i.jpg",
  "HP ZBook Fury G1i 18": "image/HP ZBook Fury G1i 18.jpg",
  "HP ZBook Fury G1i 16": "image/HP ZBook Fury G1i 16.jpg",
  "HP ZBook X G1i 16": "image/HP ZBook X G1i 16.jpg",
  "HP ZBook 8 G2i 14": "image/HP ZBook 8 G2i 14.jpg",
  "HP Spectre x360 14": "image/HP Spectre x360 14.jpg",
  "HP Envy x360 14": "image/HP Envy x360 14.jpg",
  "HP Pavilion 16": "image/HP Pavilion 16.jpg",
  "MacBook Pro 16-inch (M5 Max, 2026)": "image/MacBook Pro 16-inch (M5 Max, 2026).jpg",
  "MacBook Pro 16-inch (M5 Pro, 2026)": "image/MacBook Pro 16-inch (M5 Pro, 2026).jpg",
  "MacBook Pro 14-inch (M5 Max, 2026)": "image/MacBook Pro 14-inch (M5 Max, 2026).jpg",
  "MacBook Pro 14-inch (M5 Pro, 2026)": "image/MacBook Pro 14-inch (M5 Pro, 2026).jpg",
  "MacBook Pro 14-inch (M5, 2025)": "image/MacBook Pro 14-inch (M5, 2025).jpg",
  "MacBook Air 15-inch (M5, 2026)": "image/MacBook Air 15-inch (M5, 2026).jpg",
  "MacBook Air 13-inch (M5, 2026)": "image/MacBook Air 13-inch (M5, 2026).jpg",
  "MacBook Air 15-inch (M4, 2025)": "image/MacBook Air 15-inch (M4, 2025).jpg",
  "MacBook Air 13-inch (M4, 2025)": "image/MacBook Air 13-inch (M4, 2025).jpg",
  "MacBook Pro 16-inch (M4 Max, 2024)": "image/MacBook Pro 16-inch (M4 Max, 2024).jpg",
  "MacBook Pro 16-inch (M4 Pro, 2024)": "image/MacBook Pro 16-inch (M4 Pro, 2024).jpg",
  "MacBook Pro 14-inch (M4 Max, 2024)": "image/MacBook Pro 14-inch (M4 Max, 2024).jpg",
  "MacBook Pro 14-inch (M4 Pro, 2024)": "image/MacBook Pro 14-inch (M4 Pro, 2024).jpg",
  "MacBook Pro 14-inch (M4, 2024)": "image/MacBook Pro 14-inch (M4, 2024).jpg",
  "MacBook Air 15-inch (M3, 2024)": "image/MacBook Air 15-inch (M3, 2024).jpg",
  "MacBook Air 13-inch (M3, 2024)": "image/MacBook Air 13-inch (M3, 2024).jpg",
  "MacBook Pro 16-inch (M3 Max, 2023)": "image/MacBook Pro 16-inch (M3 Max, 2023).jpg",
  "MacBook Pro 16-inch (M3 Pro, 2023)": "image/MacBook Pro 16-inch (M3 Pro, 2023).jpg",
  "MacBook Pro 14-inch (M3 Max, 2023)": "image/MacBook Pro 14-inch (M3 Max, 2023).jpg",
  "MacBook Pro 14-inch (M3 Pro, 2023)": "image/MacBook Pro 14-inch (M3 Pro, 2023).jpg",
  "MacBook Pro 14-inch (M3, 2023)": "image/MacBook Pro 14-inch (M3, 2023).jpg",
  "MacBook Air 15-inch (M2, 2023)": "image/MacBook Air 15-inch (M2, 2023).jpg",
  "MacBook Pro 16-inch (M2 Max, 2023)": "image/MacBook Pro 16-inch (M2 Max, 2023).jpg",
  "MacBook Pro 16-inch (M2 Pro, 2023)": "image/MacBook Pro 16-inch (M2 Pro, 2023).jpg",
  "MacBook Pro 14-inch (M2 Max, 2023)": "image/MacBook Pro 14-inch (M2 Max, 2023).jpg",
  "MacBook Pro 14-inch (M2 Pro, 2023)": "image/MacBook Pro 14-inch (M2 Pro, 2023).jpg",
  "MacBook Pro 13-inch (M2, 2022)": "image/MacBook Pro 13-inch (M2, 2022).jpg",
  "MacBook Air (M2, 2022)": "image/MacBook Air (M2, 2022).jpg",
  "MacBook Pro 13-inch (M1, 2020)": "image/MacBook Pro 13-inch (M1, 2020).jpg",
  "MacBook Air (M1, 2020)": "image/MacBook Air (M1, 2020).jpg",
  "Dell XPS 13": "image/Dell XPS 13.jpg",
  "Dell XPS 14": "image/Dell XPS 14.jpg",
  "Dell XPS 16": "image/Dell XPS 16.jpg",
  "Dell XPS 17": "image/Dell XPS 17.jpg",
  "Alienware 18 Area-51": "image/Alienware 18 Area-51.jpg",
  "Alienware 16 Area-51": "image/Alienware 16 Area-51.jpg",
  "Alienware 16X Aurora": "image/Alienware 16X Aurora.jpg",
  "Alienware m16 R2": "image/Alienware m16 R2.jpg",
  "Alienware m18 R2": "image/Alienware m18 R2.jpg",
  "Alienware x16 R2": "image/Alienware x16 R2.jpg",
  "Dell Inspiron 14 Plus": "image/Dell Inspiron 14 Plus.jpg",
  "Dell Inspiron 16 Plus": "image/Dell Inspiron 16 Plus.jpg",
  "Dell Inspiron 5440": "image/Dell Inspiron 5440.jpg",
  "Dell Inspiron 13 5330": "image/Dell Inspiron 13 5330.jpg",
  "Dell Inspiron 16 2-in-1": "image/Dell Inspiron 16 2-in-1.jpg",
  "Dell Inspiron 15 3530": "image/Dell Inspiron 15 3530.jpg",
  "Dell Pro 16": "image/Dell Pro 16.jpg",
  "Dell Pro 16 Plus": "image/Dell Pro 16 Plus.jpg",
  "Dell Pro 14": "image/Dell Pro 14.jpg",
  "Dell Pro 14 Premium": "image/Dell Pro 14 Premium.jpg",
  "Dell Pro 13 Plus 2-in-1": "image/Dell Pro 13 Plus 2-in-1.jpg",
  "Dell Pro 15 Essential": "image/Dell Pro 15 Essential.jpg",
  "Dell Latitude 7450 2-in-1": "image/Dell Latitude 7450 2-in-1.jpg",
  "Dell Latitude 7455": "image/Dell Latitude 7455.jpg",
  "Dell Latitude 7350 Detachable": "image/Dell Latitude 7350 Detachable.jpg",
  "Dell Pro Precision 5": "image/Dell Pro Precision 5.jpg",
  "Dell Pro Precision 7": "image/Dell Pro Precision 7.jpg",
  "Dell G15 Gaming Laptop": "image/Dell G15 Gaming Laptop.jpg",
  "Dell Vostro 3520": "image/Dell Vostro 3520.jpg",
  "Dell Chromebook 11": "image/Dell Chromebook 11.jpg",
  "ROG Strix SCAR 18 (2026)": "image/ROG Strix SCAR 18 (2026).jpg",
  "ROG Strix SCAR 17 X3D": "image/ROG Strix SCAR 17 X3D.jpg",
  "ROG Strix SCAR 16 (2026)": "image/ROG Strix SCAR 16 (2026).jpg",
  "ROG Strix SCAR 15": "image/ROG Strix SCAR 15.jpg",
  "ROG Strix SCAR 17": "image/ROG Strix SCAR 17.jpg",
  "ROG Strix G18 (2026)": "image/ROG Strix G18 (2026).jpg",
  "ROG Strix G16 (2026)": "image/ROG Strix G16 (2026).jpg",
  "ROG Strix G17": "image/ROG Strix G17.jpg",
  "ROG Strix G15": "image/ROG Strix G15.jpg",
  "ROG Zephyrus G14 (2026)": "image/ROG Zephyrus G14 (2026).jpg",
  "ROG Zephyrus G16 (2026)": "image/ROG Zephyrus G16 (2026).jpg",
  "ROG Zephyrus Duo (2026)": "image/ROG Zephyrus Duo (2026).jpg",
  "ROG Zephyrus M16": "image/ROG Zephyrus M16.jpg",
  "ROG Zephyrus G15": "image/ROG Zephyrus G15.jpg",
  "ROG Zephyrus Duo 16": "image/ROG Zephyrus Duo 16.jpg",
  "ROG Flow X13": "image/ROG Flow X13.jpg",
  "ROG Flow X16": "image/ROG Flow X16.jpg",
  "ROG Flow Z13": "image/ROG Flow Z13.jpg",
  "ASUS TUF Gaming A15": "image/ASUS TUF Gaming A15.jpg",
  "ASUS TUF Gaming A17": "image/ASUS TUF Gaming A17.jpg",
  "ASUS TUF Gaming F15": "image/ASUS TUF Gaming F15.jpg",
  "ASUS TUF Gaming F17": "image/ASUS TUF Gaming F17.jpg",
  "ASUS TUF Gaming A16 Advantage Edition": "image/SUS TUF Gaming A16 Advantage Edition.jpg",
  "ASUS ProArt P16": "image/ASUS ProArt P16.jpg",
  "ASUS ProArt PX13": "image/ASUS ProArt PX13.jpg",
  "ASUS Zenbook Pro 16X OLED": "image/ASUS Zenbook Pro 16X OLED.jpg",
  "ASUS Zenbook Pro 14 OLED": "image/ASUS Zenbook Pro 14 OLED.jpg",
  "ASUS Zenbook 14 OLED": "image/ASUS Zenbook 14 OLED.jpg",
  "ASUS Vivobook Pro 16X OLED": "image/ASUS Vivobook Pro 16X OLED.jpg",
  "ASUS Vivobook S 15 OLED": "image/ASUS Vivobook S 15 OLED.jpg",
  "ASUS Zenbook DUO (2026)": "image/ASUS Zenbook DUO (2026).jpg",
  "ASUS Zenbook S 16 (2026)": "image/ASUS Zenbook S 16 (2026).jpg",
  "ASUS Zenbook S 14 (2026)": "image/ASUS Zenbook S 14 (2026).jpg",
  "ASUS Zenbook A16 (2026)": "image/ASUS Zenbook A16 (2026).jpg",
  "ASUS Zenbook A14 (2026)": "image/ASUS Zenbook A14 (2026).jpg",
  "ProArt PZ14": "image/ProArt PZ14.jpg",
  "ASUS Vivobook S 16": "image/ASUS Vivobook S 16.jpg",
  "ASUS Vivobook S 14": "image/ASUS Vivobook S 14.jpg",
  "ASUS ExpertBook Ultra": "image/ASUS ExpertBook Ultra.jpg",
  "ASUS TUF Gaming A14": "image/ASUS TUF Gaming A14.jpg",
  "ROG Ally X": "image/ROG Ally X.jpg",
  "ASUS Vivobook 15": "image/ASUS Vivobook 15.jpg",
  "ProArt StudioBook 16": "image/ProArt StudioBook 16.jpg",
  "Surface Laptop (8th Edition, 13.8-inch)": "image/Surface Laptop (8th Edition, 13.8-inch).jpg",
  "Surface Laptop (8th Edition, 15-inch)": "image/Surface Laptop (8th Edition, 15-inch).jpg",
  "Surface Pro (12th Edition)": "image/Surface Pro (12th Edition).jpg",
  "Surface Laptop (7th Edition, 13.8-inch)": "image/Surface Laptop (7th Edition, 13.8-inch).jpg",
  "Surface Laptop (7th Edition, 15-inch)": "image/Surface Laptop (7th Edition, 15-inch).jpg",
  "Surface Pro (11th Edition)": "image/Surface Pro (11th Edition).jpg",
  "Surface Laptop Go": "image/Surface Laptop Go.jpg",
  "Surface Laptop Studio 2": "image/Surface Laptop Studio 2.jpg",
  "Surface Pro 9": "image/Surface Pro 9.jpg",
  "Surface Laptop 5": "image/Surface Laptop 5.jpg",
  "Surface Go 4": "image/Surface Go 4.jpg",
  "Surface Pro 10 for Business": "image/Surface Pro 10 for Business.jpg",
  "Surface Laptop 6 for Business": "image/Surface Laptop 6 for Business.jpg",
  "Surface Hub 3": "image/Surface Hub 3.jpg",
  "Surface Duo 2": "image/Surface Duo 2.jpg",
  "Surface Pro 8": "image/Surface Pro 8.jpg",
  "Surface Laptop 4": "image/Surface Laptop 4.jpg",
  "Surface Book 3": "image/Surface Book 3.jpg",
  "Surface Studio 2+": "image/Surface Studio 2+.jpg",
  "Surface Pro 7+": "image/Surface Pro 7+.jpg",
  "Surface Laptop 3": "image/Surface Laptop 3.jpg",
  "Surface Go 3": "image/Surface Go 3.jpg",
  "Surface Pro X": "image/Surface Pro X.jpg",
  "MSI Titan 18 HX AI": "image/MSI Titan 18 HX AI.jpg",
  "MSI Raider 18 HX AI": "image/MSI Raider 18 HX AI.jpg",
  "MSI Raider 16 Max HX": "image/MSI Raider 16 Max HX.jpg",
  "MSI Stealth 16 AI+": "image/MSI Stealth 16 AI+.jpg",
  "MSI Crosshair 16 Max HX": "image/MSI Crosshair 16 Max HX.jpg",
  "MSI Katana 15 HX": "image/MSI Katana 15 HX.jpg",
  "MSI Cyborg 15 Max": "image/MSI Cyborg 15 Max.jpg",
  "MSI Vector GP76": "image/MSI Vector GP76.jpg",
  "MSI Pulse 17 AI": "image/MSI Pulse 17 AI.jpg",
  "MSI Sword 16 HX": "image/MSI Sword 16 HX.jpg",
  "MSI Thin GF63": "image/MSI Thin GF63.jpg",
  "MSI Creator A16 AI+": "image/MSI Creator A16 AI+.jpg",
  "MSI Creator Z17 HX Studio": "image/MSI Creator Z17 HX Studio.jpg",
  "MSI Creator Pro M17": "image/MSI Creator Pro M17.jpg",
  "MSI Prestige 16 AI+ Evo": "image/MSI Prestige 16 AI+ Evo.jpg",
  "MSI Prestige 14 AI+ Evo": "image/MSI Prestige 14 AI+ Evo.jpg",
  "MSI Prestige 13 AI+ Evo": "image/MSI Prestige 13 AI+ Ev.jpg",
  "MSI Summit A16 AI+": "image/MSI Summit A16 AI+.jpg",
  "MSI Summit 13 AI+ Evo": "image/MSI Summit 13 AI+ Evo.jpg",
  "MSI Modern 15": "image/MSI Modern 15.jpg",
  "MSI Modern 14": "image/MSI Modern 14.jpg",
  "MSI Claw A1M (Handheld)": "image/MSI Claw A1M (Handheld).jpg",
  "Samsung Galaxy Book6 Ultra": "image/Samsung Galaxy Book6 Ultra.jpg",
  "Samsung Galaxy Book6 Pro": "image/Samsung Galaxy Book6 Pro.jpg",
  "Samsung Galaxy Book6 Pro 360": "image/Samsung Galaxy Book6 Pro 360.jpg",
  "Samsung Galaxy Book6 Edge": "image/Samsung Galaxy Book6 Edge.jpg",
  "Samsung Galaxy Book6 (14-inch / 16-inch)": "image/Samsung Galaxy Book6 Pro.jpg",
  "Samsung Galaxy Book6 Touch": "image/Samsung Galaxy Book6 Touch.jpg",
  "Samsung Galaxy Book5 Pro 360": "image/Samsung Galaxy Book5 Pro 360.webp",
  "Samsung Galaxy Book5 Pro": "image/Samsung Galaxy Book5 Pro.jpg",
  "Samsung Galaxy Book5 360": "image/Samsung Galaxy Book5 360.jpg",
  "Samsung Galaxy Book5": "image/Samsung Galaxy Book5.jpg",
  "Samsung Galaxy Book5 Edge": "image/Samsung Galaxy Book5 Edge.jpg",
  "Razer Blade 18 (2026)": "image/Razer Blade 18 (2026).jpg",
  "Razer Blade 18 (Mercury Edition)": "image/Razer Blade 18 (Mercury Edition).jpg",
  "Razer Blade 16 (2026)": "image/Razer Blade 16 (2026).jpg",
  "Razer Blade 16 OLED": "image/Razer Blade 16 OLED.jpg",
  "Razer Blade 16 (Mercury Edition)": "image/Razer Blade 16 (Mercury Edition).jpg",
  "Razer Blade 14 (2026)": "image/Razer Blade 14 (2026).jpg",
  "Razer Blade 14 (Mercury Edition)": "image/Razer Blade 14 (Mercury Edition).jpg",
  "LG gram Pro 17 (Copilot+ PC)": "image/LG gram Pro 17 (Copilot+ PC).jpg",
  "LG gram Pro 16 (Copilot+ PC)": "image/LG gram Pro 16 (Copilot+ PC).jpg",
  "LG gram Pro 2-in-1 16-inch": "image/LG gram Pro 2-in-1 16-inch.jpg",
  "LG gram 17 (Copilot+ PC)": "image/LG gram 17 (Copilot+ PC).jpg",
  "LG gram 16 (Copilot+ PC)": "image/LG gram 16 (Copilot+ PC).jpg",
  "LG gram 15 (Copilot+ PC)": "image/LG gram 15 (Copilot+ PC).jpg",
  "LG gram 14 (Copilot+ PC)": "image/LG gram 14 (Copilot+ PC).jpg",
  "LG gram Book 16": "image/LG gram Book 16.jpg",
  "LG gram Book 15": "image/LG gram Book 15.jpg",
  "LG gram Book 14 (2026 Edition)": "image/LG gram Book 14 (2026 Edition).jpg",
  "LG gram Style 16 (OLED)": "image/LG gram Style 16 (OLED).jpg",
  "LG gram Style 14 (OLED)": "image/LG gram Style 14 (OLED).jpg",
  "LG gram SuperSlim 15": "image/LG gram SuperSlim 15.jpg",
  "LG gram 2-in-1 14-inch": "image/LG gram 2-in-1 14-inch.jpg",
  "LG UltraPC 16 (AMD Ryzen)": "image/LG UltraPC 16 (AMD Ryzen).jpg",
  "LG UltraPC 14": "image/LG UltraPC 14.jpg",
  "AORUS Master 18": "image/AORUS Master 18.jpg",
  "AORUS Master 16": "image/AORUS Master 16.jpg",
  "GIGABYTE AERO X16": "image/GIGABYTE AERO X16.jpg",
  "GIGABYTE Gaming A18 Pro": "image/GIGABYTE Gaming A18 Pro.jpg",
  "GIGABYTE Gaming A16": "image/GIGABYTE Gaming A16.jpg",
  "AERO 16 OLED": "image/AERO 16 OLED.jpg",
  "AERO 14 OLED": "image/AERO 14 OLED.jpg",
  "AORUS 17X": "image/AORUS 17X.jpg",
  "Framework Laptop 13 (AMD Ryzen AI 300 Series)": "image/Framework Laptop 13 (AMD Ryzen AI 300 Series).jpg",
  "Framework Laptop 13 Pro (Intel Core Ultra Series 3)": "image/Framework Laptop 13 Pro (Intel Core Ultra Series 3).jpg",
  "Framework Laptop 16 (AMD Ryzen 7040 / Ryzen 9)": "image/Framework Laptop 16.jpg",
  "Framework Laptop Chromebook Edition": "image/Framework Laptop Chromebook Edition.jpg",
  "Huawei Watch Ultimate 2": "image/Huawei Watch Ultimate 2.jpg",
  "Huawei Watch Ultimate Design": "image/Huawei Watch Ultimate Design.jpg",
  "Huawei Watch Ultimate": "image/Huawei Watch Ultimate.jpg",
  "Huawei Watch 6 Pro": "image/Huawei Watch 6 Pro.jpg",
  "Huawei Watch 6 (46mm)": "image/Huawei Watch 6 (46mm).jpg",
  "Huawei Watch 6 (41mm)": "image/Huawei Watch 6 (41mm).jpg",
  "Huawei Watch 5 Pro": "image/Huawei Watch 5 Pro.jpg",
  "Huawei Watch 5 (46mm)": "image/Huawei Watch 5 (46mm).jpg",
  "Huawei Watch 5 (42mm)": "image/Huawei Watch 5 (42mm).jpg",
  "Huawei Watch 4 Pro": "image/Huawei Watch 4 Pro.jpg",
  "Huawei Watch 4": "image/Huawei Watch 4.jpg",
  "Huawei Watch D2": "image/Huawei Watch D2.jpg",
  "Huawei Watch D": "image/Huawei Watch D.jpg",
  "Huawei Watch GT 6 Pro": "image/Huawei Watch GT 6 Pro.jpg",
  "Huawei Watch GT 6": "image/Huawei Watch GT 6.jpg",
  "Huawei Watch GT 5 Pro": "image/Huawei Watch GT 5 Pro.jpg",
  "Huawei Watch GT 5": "image/Huawei Watch GT 5.jpg",
  "Huawei Watch GT 4": "image/Huawei Watch GT 4.jpg",
  "Huawei Watch GT 3 Pro": "image/Huawei Watch GT 3 Pro.jpg",
  "Huawei Watch GT 3": "image/Huawei Watch GT 3.jpg",
  "Huawei Watch GT 3 SE": "image/Huawei Watch GT 3 SE.jpg",
  "Huawei Watch GT Runner": "image/Huawei Watch GT Runner.jpg",
  "Huawei Watch GT Cyber": "image/Huawei Watch GT Cyber.jpg",
  "Huawei Watch Fit 5 Pro": "image/Huawei Watch Fit 5 Pro.jpg",
  "Huawei Watch Fit 5": "image/Huawei Watch Fit 5.jpg",
  "Huawei Watch Fit 4 Pro": "image/Huawei Watch Fit 4 Pro.jpg",
  "Huawei Watch Fit 4": "image/Huawei Watch Fit 4.jpg",
  "Huawei Watch Fit 3": "image/Huawei Watch Fit 3.jpg",
  "Huawei Watch Fit 2": "image/Huawei Watch Fit 2.jpg",
  "Huawei Watch Fit (1st Gen)": "image/Huawei Watch Fit (1st Gen).jpg",
  "Xiaomi Watch S5 46mm": "image/Xiaomi Watch S5 46mm.jpg",
  "Xiaomi Watch 5": "image/Xiaomi Watch 5.jpg",
  "Xiaomi Watch S4 41mm": "image/Xiaomi Watch S4 41mm.jpg",
  "Xiaomi Watch S4": "image/Xiaomi Watch S4.jpg",
  "Xiaomi Watch S3": "image/Xiaomi Watch S3.jpg",
  "Xiaomi Watch 2": "image/Xiaomi Watch 2.jpg",
  "Xiaomi Watch 2 Pro": "image/Xiaomi Watch 2 Pro.jpg",
  "Xiaomi Watch S1 Pro": "image/Xiaomi Watch S1 Pro.jpg",
  "Xiaomi Watch S1": "image/Xiaomi Watch S1.jpg",
  "Xiaomi Watch S1 Active": "image/Xiaomi Watch S1 Active.jpg",
  "Xiaomi Redmi Watch 6": "image/Xiaomi Redmi Watch 6.jpg",
  "Xiaomi Redmi Watch 6 Lite": "image/Xiaomi Redmi Watch 6 Lite.jpg",
  "Xiaomi Redmi Watch 6 Active": "image/Xiaomi Redmi Watch 6 Active.jpg",
  "Xiaomi Redmi Watch 5 Active": "image/Xiaomi Redmi Watch 5 Active.jpg",
  "Xiaomi Redmi Watch 5 Lite": "image/Xiaomi Redmi Watch 5 Lite.jpg",
  "Xiaomi Redmi Watch 4": "image/Xiaomi Redmi Watch 4.jpg",
  "Xiaomi Redmi Watch 3": "image/Xiaomi Redmi Watch 3.jpg",
  "Xiaomi Redmi Watch 3 Active": "image/Xiaomi Redmi Watch 3 Active.jpg",
  "Xiaomi Redmi Watch 2 Lite": "image/Xiaomi Redmi Watch 2 Lite.jpg",
  "Xiaomi Smart Band 10 Pro": "image/Xiaomi Smart Band 10 Pro.jpg",
  "Xiaomi Smart Band 10": "image/Xiaomi Smart Band 10.jpg",
  "Xiaomi Smart Band 9 Pro": "image/Xiaomi Smart Band 9 Pro.jpg",
  "Xiaomi Smart Band 9": "image/Xiaomi Smart Band 9.jpg",
  "Xiaomi Smart Band 9 Active": "image/Xiaomi Smart Band 9 Active.jpg",
  "Xiaomi Smart Band 8 Pro": "image/Xiaomi Smart Band 8 Pro.jpg",
  "Xiaomi Smart Band 8": "image/Xiaomi Smart Band 8.jpg",
  "Xiaomi Smart Band 8 Active": "image/Xiaomi Smart Band 8 Active.jpg",
  "Xiaomi Smart Band 7 Pro": "image/Xiaomi Smart Band 7 Pro.jpg",
  "Xiaomi Mi Band 7": "image/Xiaomi Mi Band 7.jpg",
  "Xiaomi Mi Band 6": "image/Xiaomi Mi Band 6.jpg",
  "Apple Watch Ultra 3": "image/Apple Watch Ultra 3.jpg",
  "Apple Watch Series 11": "image/Apple Watch Series 11.jpg",
  "Apple Watch SE 3": "image/Apple Watch SE 3.jpg",
  "Apple Watch Ultra 2": "image/Apple Watch Ultra 2.jpg",
  "Apple Watch Series 10": "image/Apple Watch Series 10.jpg",
  "Apple Watch Series 9": "image/Apple Watch Series 9.jpg",
  "Apple Watch Ultra": "image/Apple Watch Ultra.jpg",
  "Apple Watch SE (2nd Generation)": "image/Apple Watch SE (2nd Generation).jpg",
  "Apple Watch Series 8": "image/Apple Watch Series 8.jpg",
  "Apple Watch Series 7": "image/Apple Watch Series 7.jpg",
  "Apple Watch Series 6": "image/Apple Watch Series 6.jpg",
  "Apple Watch SE (1st Generation)": "image/Apple Watch SE (1st Generation).jpg",
  "Apple Watch Series 5": "image/Apple Watch Series 5.jpg",
  "Apple Watch Series 4": "image/Apple Watch Series 4.jpg",
  "Apple Watch Series 3": "image/Apple Watch Series 3.jpg",
  "Apple Watch Series 2": "image/Apple Watch Series 2.jpg",
  "Apple Watch Series 1": "image/Apple Watch Series 1.jpg",
  "Apple Watch (1st generation)": "image/Apple Watch (1st generation).jpg",
  "Samsung Galaxy Watch Ultra 2": "image/Samsung Galaxy Watch Ultra 2.jpg",
  "Samsung Galaxy Watch 9": "image/Samsung Galaxy Watch 9.jpg",
  "Samsung Galaxy Watch 8 Classic": "image/Samsung Galaxy Watch 8 Classic.jpg",
  "Samsung Galaxy Watch 8": "image/Samsung Galaxy Watch 8.jpg",
  "Samsung Galaxy Watch Ultra": "image/Samsung Galaxy Watch Ultra.jpg",
  "Samsung Galaxy Watch 7": "image/Samsung Galaxy Watch 7.jpg",
  "Samsung Galaxy Watch FE": "image/Samsung Galaxy Watch FE.jpg",
  "Samsung Galaxy Watch 6 Classic": "image/Samsung Galaxy Watch 6 Classic.jpg",
  "Samsung Galaxy Watch 6": "image/Samsung Galaxy Watch 6.jpg",
  "Samsung Galaxy Watch 5 Pro": "image/Samsung Galaxy Watch 5 Pro.jpg",
  "Samsung Galaxy Watch 5": "image/Samsung Galaxy Watch 5.jpg",
  "Samsung Galaxy Watch 4 Classic": "image/Samsung Galaxy Watch 4 Classic.jpg",
  "Samsung Galaxy Watch 4": "image/Samsung Galaxy Watch 4.jpg",
  "Samsung Galaxy Watch 3": "image/Samsung Galaxy Watch 3.jpg",
  "Samsung Galaxy Watch Active 2": "image/Samsung Galaxy Watch Active 2.jpg",
  "Samsung Galaxy Watch Active": "image/Samsung Galaxy Watch Active.jpg",
  "Samsung Galaxy Watch": "image/Samsung Galaxy Watch.jpg",
  "Samsung Galaxy Fit 3": "image/Samsung Galaxy Fit 3.jpg",
  "Samsung Galaxy Fit 2": "image/Samsung Galaxy Fit 2.jpg",
  "Samsung Galaxy Fit e": "image/Samsung Galaxy Fit e.jpg",
  "Samsung Galaxy Fit": "image/Samsung Galaxy Fit.jpg",
  "Samsung Gear S3 Frontier": "image/Samsung Gear S3 Frontier.jpg",
  "Samsung Gear S3 Classic": "image/Samsung Gear S3 Classic.jpg",
  "Samsung Gear S2": "image/Samsung Gear S2.jpg",
  "Samsung Gear Sport": "image/Samsung Gear Sport.jpg",
  "Samsung Gear Fit 2 Pro": "image/Samsung Gear Fit 2 Pro.jpg",
  "Samsung Gear Fit 2": "image/Samsung Gear Fit 2.jpg",
  "Samsung Gear S": "image/Samsung Gear S.jpg",
  "Samsung Galaxy Watch 6 Bespoke Edition": "image/Samsung Galaxy Watch 6 Bespoke Edition.jpg",
  "Samsung Galaxy Watch 5 Bespoke Edition": "image/Samsung Galaxy Watch 5 Bespoke Edition.jpg",
  "OnePlus Watch 4 (Midnight Titanium)": "image/OnePlus Watch 3 46mm (Midnight Black Titanium).jpg",
  "OnePlus Watch 4 (Evergreen Titanium)": "image/OnePlus Watch 4 (Evergreen Titanium).jpg",
  "OnePlus Watch 3 46mm (Midnight Black Titanium)": "image/OnePlus Watch 3 46mm (Midnight Black Titanium).jpg",
  "OnePlus Watch 3 46mm (Emerald Green Titanium)": "image/OnePlus Watch 3 46mm (Emerald Green Titanium).jpg",
  "OnePlus Watch 3 43mm (Black Steel)": "image/OnePlus Watch 3 43mm (Black Steel).jpg",
  "OnePlus Watch 3 43mm (Silver Steel)": "image/OnePlus Watch 3 43mm (Silver Steel).jpg",
  "OnePlus Watch 3 (Obsidian Titanium)": "image/OnePlus Watch 3 (Obsidian Titanium).jpg",
  "OnePlus Watch Lite (Midnight Black)": "image/OnePlus Watch Lite (Midnight Black).jpg",
  "OnePlus Watch Lite (Silver Steel)": "image/OnePlus Watch Lite (Silver Steel).jpg",
  "OnePlus Watch 2R (Forest Green)": "image/OnePlus Watch 2R (Forest Green).jpg",
  "OnePlus Watch 2R (Gunmetal Gray)": "image/OnePlus Watch 2R (Gunmetal Gray).jpg",
  "OnePlus Watch 2 (Black Steel)": "image/OnePlus Watch 2 (Black Steel).jpg",
  "OnePlus Watch 2 (Radiant Steel)": "image/OnePlus Watch 2 (Radiant Steel).jpg",
  "OnePlus Watch 2 (Nordic Blue Edition)": "image/OnePlus Watch 2 (Nordic Blue Edition).jpg",
  "OnePlus Watch 2 (Cellular/eSIM)": "image/OnePlus Watch 2.jpg",
  "OnePlus Nord Watch": "image/OnePlus Nord Watch.jpg",
  "OnePlus Nord Watch 2": "image/OnePlus Nord Watch 2.jpg",
  "OnePlus Watch Harry Potter Limited Edition": "image/OnePlus Watch Harry Potter Limited Edition.jpg",
  "OnePlus Watch Cobalt Limited Edition": "image/OnePlus Watch Cobalt Limited Edition.jpg",
  "OnePlus Watch (Midnight Black)": "image/OnePlus Watch (Midnight Black).jpg",
  "OnePlus Watch (Moonlight Silver)": "image/OnePlus Watch (Moonlight Silver).jpg",
  "OnePlus Watch 3R": "image/OnePlus Watch 3R.jpg",
  "OnePlus Watch 3 Pro": "image/OnePlus Watch 3 Pro.jpg",
  "OnePlus Watch 2 Active": "image/OnePlus Watch 2 Active.jpg",
  "OnePlus Nord Watch Classic": "image/OnePlus Nord Watch Classic.jpg",
  "OnePlus Band": "image/OnePlus Band.jpg",
  "OnePlus Band Steven Harrington Special Edition": "image/OnePlus Band Steven Harrington Special Edition.jpg",
  "OnePlus Watch Gen-1 Sport": "image/OnePlus Watch Gen-1 Sport.jpg",
  "OnePlus Watch Style Edition": "image/OnePlus Watch Style Edition.jpg",
  "OnePlus Watch Developer Edition": "image/OnePlus Watch Developer Edition.jpg",
  "Apple MagSafe Charger": "image/Apple MagSafe Charger.jpg",
  "Apple MagSafe Battery Pack": "image/Apple MagSafe Battery Pack.jpg",
  "Apple 20W USB-C Power Adapter": "image/Apple 20W USB-C Power Adapter.png",
  "Apple 35W Dual USB-C Port Compact Power Adapter": "image/Apple 35W Dual USB-C Port Compact Power Adapter.jpg",
  "Apple Magic Keyboard with Touch ID": "image/Apple Magic Keyboard with Touch ID.jpg",
  "Apple Magic Mouse": "image/Apple Magic Mouse.jpg",
  "Apple Magic Trackpad": "image/Apple Magic Trackpad.jpg",
  "Apple Pencil (USB-C)": "image/Apple Pencil (USB-C).png",
  "Apple Pencil (2nd Generation)": "image/Apple Pencil (2nd Generation).jpg",
  "Apple AirTag (4-Pack)": "image/Apple AirTag (4-Pack).jpg",
  "Apple AirTag Leather Loop": "image/Apple AirTag Leather Loop.jpg",
  "Apple FineWoven Wallet with MagSafe": "image/Apple FineWoven Wallet with MagSafe.jpg",
  "Apple Smart Folio for iPad": "image/Apple Smart Folio for iPad.jpg",
  "Apple Magic Keyboard for iPad Pro": "image/Apple Magic Keyboard for iPad Pro.jpg",
  "Apple Thunderbolt 4 (USB-C) Pro Cable": "image/Apple Thunderbolt 4 (USB-C) Pro Cable.jpg",
  "Apple Watch Solo Loop": "image/Apple Watch Braided Solo Loop.jpg",
  "Apple Watch Sport Band": "image/Apple Watch Sport Band.jpg",
  "Apple Watch Milanese Loop": "image/Apple Watch Milanese Loop.jpg",
  "Apple Watch Braided Solo Loop": "image/Apple Watch Braided Solo Loop.jpg",
  "Apple Watch Titanium Link Bracelet": "image/Apple Watch Titanium Link Bracelet.png",
  "Apple World Travel Adapter Kit": "image/Apple World Travel Adapter Kit.jpg",
  "Apple 240W USB-C Charge Cable": "image/Apple 240W USB-C Charge Cable.jpg",
  "Apple Polishing Cloth": "image/Apple Polishing Cloth.jpg",
  "Apple Vision Pro Travel Case": "image/Apple Vision Pro Travel Case.jpg",
  "Apple Vision Pro Battery": "image/Apple Vision Pro Battery.jpg",
  "Apple Vision Pro Solo Knit Band": "image/Apple Vision Pro Solo Knit Band.jpg",
  "Apple Vision Pro Dual Loop Band": "image/Apple Vision Pro Dual Loop Band.jpg",
  "Apple Vision Pro Light Seal": "image/Apple Vision Pro Light Seal.jpg",
  "Apple Vision Pro Optical Inserts (ZEISS)": "image/Apple Vision Pro Optical Inserts (ZEISS).jpg",
  "Apple MagSafe Clear Case": "image/Apple MagSafe Clear Case.jpg",
  "Samsung Silicone Magnet Case": "image/Samsung Silicone Magnet Case.jpg",
  "Samsung Slim Magnet Case": "image/Samsung Slim Magnet Case.jpg",
  "Samsung Rugged Magnet Case": "image/Samsung Rugged Magnet Case.jpg",
  "Samsung Clear Magnet Case": "image/Samsung Clear Magnet Case.jpg",
  "Samsung Smart View Wallet Case": "image/Samsung Smart View Wallet Case.jpg",
  "Samsung Standing Grip Case": "image/Samsung Standing Grip Case.jpg",
  "Samsung S Pen (Galaxy Ultra Edition)": "image/Samsung S Pen (Galaxy Ultra Edition).jpg",
  "Samsung S Pen Fold Edition": "image/Samsung S Pen Fold Edition.jpg",
  "Samsung Book Cover Keyboard Slim": "image/Samsung Book Cover Keyboard Slim.jpg",
  "Samsung Book Cover for Galaxy Tab": "image/Samsung Book Cover for Galaxy Tab.jpg",
  "Samsung Galaxy Watch Hybrid Band": "image/Samsung Galaxy Watch Hybrid Band.jpg",
  "Samsung Galaxy Watch Sport Band": "image/Samsung Galaxy Watch Sport Band.png",
  "Samsung Galaxy Watch Trail Band": "image/Samsung Galaxy Watch Trail Band.jpg",
  "Samsung Galaxy Watch Marine Band": "image/Samsung Galaxy Watch Marine Band.jpg",
  "Samsung Qi2 25W Magnet Wireless Charger": "image/Samsung Qi2 25W Magnet Wireless Charger.jpg",
  "Samsung Qi2 Magnet Wireless Battery Pack": "image/Samsung Qi2 Magnet Wireless Battery Pack.jpg",
  "Samsung Wireless Charger Duo": "image/Samsung Wireless Charger Duo.jpg",
  "Samsung 45W Power Adapter Trio": "image/Samsung 45W Power Adapter Trio.jpg",
  "Samsung 25W USB-C Power Adapter": "image/Samsung 25W USB-C Power Adapter.jpg",
  "Samsung 10,000 mAh Wireless Power Bank": "image/Samsung 10,000 mAh Wireless Power Bank.jpg",
  "Samsung Galaxy SmartTag 2": "image/Samsung Galaxy SmartTag 2.jpg",
  "Samsung Galaxy Buds Case Cover": "image/Samsung Galaxy Buds Case Cover.jpg",
  "Samsung USB-C to USB-C Cable": "image/Samsung USB-C to USB-C Cable.jpg",
  "Samsung Anti-Reflective Screen Protector": "image/Samsung Anti-Reflective Screen Protector.jpg",
  "Samsung 3.5mm to USB-C Headphone Jack Adapter": "image/Samsung 3.5mm to USB-C Headphone Jack Adapter.jpg",
  "Samsung DeX Cable / HDMI Adapter": "image/Samsung DeX Cable HDMI Adapter.jpg",
  "Samsung Portable SSD T9 Shield Case": "image/Samsung Portable SSD T9 Shield Case.jpg",
  "Samsung The Freestyle Battery Base": "image/Samsung The Freestyle Battery Base.jpg",
  "Samsung The Freestyle Carry Case": "image/Samsung The Freestyle Carry Case.jpg",
  "Samsung Smart Remote SolarCell": "image/Samsung Smart Remote SolarCell.jpg",
  "Sony WH-1000XM5 Wireless Headphones": "image/Sony WH 1000XM5 Wireless Headphones.jpg",
  "Sony WF-1000XM5 Wireless Earbuds": "image/Sony WF-1000XM5 Wireless Earbuds.jpg",
  "Sony WH-1000XM4 Wireless Headphones": "image/Sony WH-1000XM4 Wireless Headphones.jpg",
  "Sony LinkBuds S": "image/Sony LinkBuds S.jpg",
  "Sony LinkBuds Open": "image/Sony LinkBuds Open.jpg",
  "Sony WH-CH720N Wireless Noise Canceling Headphones": "image/Sony WH-CH720N Wireless Noise Canceling Headphones.jpg",
  "Sony WF-C700N Wireless Earbuds": "image/Sony WF-C700N Wireless Earbuds.jpg",
  "Sony WF-C500 True Wireless Earbuds": "image/Sony WF-C500 True Wireless Earbuds.jpg",
  "Sony INZONE H9 II Wireless Gaming Headset": "image/Sony INZONE H9 II Wireless Gaming Headset.jpg",
  "Sony INZONE Buds True Wireless Gaming Earbuds": "image/Sony INZONE Buds True Wireless Gaming Earbuds.jpg",
  "Sony PlayStation 5 Pro Console": "image/Sony PlayStation 5 Pro Console.jpg",
  "Sony PlayStation 5 Slim Console": "image/Sony PlayStation 5 Slim Console.jpg",
  "Sony PlayStation VR2": "image/Sony PlayStation VR2.jpg",
  "Sony DualSense Wireless Controller": "image/Sony DualSense Wireless Controller.jpg",
  "Sony DualSense Edge Wireless Controller": "image/Sony DualSense Edge Wireless Controller.jpg",
  "Sony Alpha 7 IV Full-Frame Camera": "image/Sony Alpha 7 IV Full-Frame Camera.jpg",
  "Sony Alpha 7R V Camera": "image/Sony Alpha 7R V Camera.jpg",
  "Sony Alpha 7C II Camera": "image/Sony Alpha 7C II Camera.jpg",
  "Sony Alpha 6700 APS-C Camera": "image/Sony Alpha 6700 APS-C Camera.jpg",
  "Sony ZV-E10 II Vlog Camera": "image/Sony ZV-E10 II Vlog Camera.jpg",
  "Sony ZV-1 II Digital Camera": "image/Sony ZV-1 II Digital Camera.jpg",
  "Sony GP-VPT3 Multi-Function Shooting Grip": "image/Sony GP-VPT3 Multi-Function Shooting Grip.jpg",
  "Sony SRS-XB100 Portable Wireless Speaker": "image/Sony SRS-XB100 Portable Wireless Speaker.jpg",
  "Sony SRS-ULT FIELD 1 Speaker": "image/Sony SRS-ULT FIELD 1 Speaker.jpg",
  "Sony SRS-ULT FIELD 7 Speaker": "image/Sony SRS-ULT FIELD 7 Speaker.jpg",
  "Sony HT-A9 Home Theater System": "image/Sony HT-A9 Home Theater System.jpg",
  "Sony BRAVIA 9 Mini LED 4K HDR TV": "image/Sony BRAVIA 9 Mini LED 4K HDR TV.jpg",
  "Sony BRAVIA 8 OLED 4K HDR TV": "image/Sony BRAVIA 8 OLED 4K HDR TV.jpg",
  "Sony Xperia 1 VI Smartphone": "image/Sony Xperia 1 VI Smartphone.jpg",
  "Sony Xperia 10 VI Smartphone": "image/Sony Xperia 10 VI Smartphone.jpg",
  "Anker Prime Charger (250W, 6 Ports, GaNPrime)": "image/Anker Prime Charger (250W, 6 Ports, GaNPrime).jpg",
  "Anker Prime Charger (160W, 3 Ports, Smart Display)": "image/Anker Prime Charger (160W, 3 Ports, Smart Display).jpg",
  "Anker Prime Charger (200W, 6 Ports, GaN)": "image/Anker Prime Charger (200W, 6 Ports, GaN).jpg",
  "Anker Prime Charger (100W, 3 Ports, GaN)": "image/Anker Prime Charger (100W, 3 Ports, GaN).jpg",
  "Anker Charger (140W, 4-Port, PD 3.1)": "image/Anker Charger (140W, 4-Port, PD 3.1).jpg",
  "Anker Nano Charger (70W, 3 Ports)": "image/Anker Nano Charger (70W, 3 Ports).jpg",
  "Anker Nano Charger (45W with Smart Display)": "image/Anker Nano Charger (45W with Smart Display).jpg",
  "Anker 715 Charger (Nano II 65W)": "image/Anker 715 Charger (Nano II 65W).jpg",
  "Anker 735 Charger (Nano II 65W)": "image/Anker 735 Charger (Nano II 65W).jpg",
  "Anker Prime Power Bank (26,250mAh, 300W)": "image/Anker Prime Power Bank (26,250mAh, 300W).jpg",
  "Anker Laptop Power Bank (25,000mAh, 165W with Built-In/Retractable Cables)": "image/Anker Laptop Power Bank (25,000mAh, 165W with Built-In Retractable Cables).jpg",
  "Anker 737 Power Bank (PowerCore 24K)": "image/Anker 737 Power Bank (PowerCore 24K).jpg",
  "Anker Nano Power Bank (5,000mAh, MagGo, Slim)": "image/Anker Nano Power Bank (5,000mAh, MagGo, Slim).jpg",
  "Anker Zolo Power Bank (10,000mAh with Built-in Cable)": "image/Anker Zolo Power Bank (10,000mAh with Built-in Cable).jpg",
  "Anker 548 Power Bank (Outdoor/High-Capacity)": "image/Anker 548 Power Bank (Outdoor High-Capacity).jpg",
  "Anker MagGo Wireless Charging Station (3-in-1, Foldable)": "image/Anker MagGo Wireless Charging Station (3-in-1, Foldable).jpg",
  "Anker Prime MagSafe Charger (Foldable Travel Stand)": "image/Anker Prime MagSafe Charger (Foldable Travel Stand).jpg",
  "Anker MagGo Magnetic Power Bank (Qi2 Certified)": "image/Anker MagGo Magnetic Power Bank (Qi2 Certified).jpg",
  "Anker Nano 13-in-1 Docking Station": "image/Anker Nano 13-in-1 Docking Station.jpg",
  "Anker 10-in-1 Nano Power Strip (with USB-C/USB-A and Surge Protection)": "image/Anker 10-in-1 Nano Power Strip (with USB-C USB-A and Surge Protection).jpg",
  "Anker USB-C to USB-C Cable (240W, Upcycled-Braided)": "image/Anker USB-C to USB-C Cable (240W, Upcycled-Braided).jpg",
  "Anker Nylon USB-C to USB-C Cable (100W)": "image/Anker Nylon USB-C to USB-C Cable (100W).jpg",
  "Anker Thunderbolt 4 Cable": "image/Anker Thunderbolt 4 Cable.jpg",
  "Anker USB-C to Lightning Braided Cable": "image/Anker USB-C to Lightning Braided Cable.jpg",
  "Anker 553 USB-C Hub (8-in-1)": "image/Anker 553 USB-C Hub (8-in-1).png",
  "Anker USB-C to HDMI Adapter": "image/Anker USB-C to HDMI Adapter.jpg",
  "Anker Soundcore Space One Wireless Noise-Canceling Headphones": "image/Anker Soundcore Space One Wireless Noise-Canceling Headphones.jpg",
  "Anker Soundcore Liberty 4 NC True Wireless Earbuds": "image/Anker Soundcore Liberty 4 NC True Wireless Earbuds.jpg",
  "Anker Soundcore Motion 300 Portable Bluetooth Speaker": "image/Anker Soundcore Motion 300 Portable Bluetooth Speaker.jpg",
  "Anker Soundcore Select 4 Go Portable Speaker": "image/Anker Soundcore Select 4 Go Portable Speaker.jpg",
  "JBL Boombox 4": "image/JBL Boombox 4.jpg",
  "JBL Charge 6": "image/JBL Charge 6.jpg",
  "JBL Flip 7": "image/JBL Flip 7.jpg",
  "JBL Clip 5": "image/JBL Clip 5.jpg",
  "JBL Go 5": "image/JBL Go 5.jpg",
  "JBL Xtreme 5": "image/JBL Xtreme 5.jpg",
  "JBL Pulse 6": "image/JBL Pulse 6.jpg",
  "JBL PartyBox Ultimate": "image/JBL PartyBox Ultimate.jpg",
  "JBL PartyBox Stage 320": "image/JBL PartyBox Stage 320.jpg",
  "JBL PartyBox Encore 2": "image/JBL PartyBox Encore 2.jpg",
  "JBL Tour Pro 3": "image/JBL Tour Pro 3.jpg",
  "JBL Tour One M2": "image/JBL Tour One M2.jpg",
  "JBL Live Beam 3": "image/JBL Live Beam 3.jpg",
  "JBL Live 780NC": "image/JBL Live 780NC.jpg",
  "JBL Tune 770NC": "image/JBL Tune 770NC.jpg",
  "JBL Tune 670NC": "image/JBL Tune 670NC.jpg",
  "JBL Tune 720BT": "image/JBL Tune 720BT.jpg",
  "JBL Tune 520BT": "image/JBL Tune 520BT.jpg",
  "JBL Endurance Race 2": "image/JBL Endurance Race 2.jpg",
  "JBL Sense Lite": "image/JBL Sense Lite.jpg",
  "JBL Quantum Sphere 360": "image/JBL Quantum Sphere 360.jpg",
  "JBL Authentics 300": "image/JBL Authentics 300.jpg",
  "JBL Cove X1": "image/JBL Cove X1.jpg",
  "JBL Cove P1": "image/JBL Cove P1.jpg",
  "JBL Cove M1": "image/JBL Cove M1.jpg",
  "JBL Charge 5 Wi-Fi": "image/JBL Charge 5 Wi-Fi.jpg",
  "JBL Boombox 3 Wi-Fi": "image/JBL Boombox 3 Wi-Fi.jpg",
  "JBL Grip": "image/JBL Grip.jpg",
  "JBL EasySing Mics": "image/JBL EasySing Mics.jpg",
  "JBL PartyLight Stick": "image/JBL PartyLight Stick.jpg",
  "Razer DeathAdder V3 Pro": "image/Razer DeathAdder V3 Pro.jpg",
  "Razer Basilisk V3 Pro": "image/Razer Basilisk V3 Pro.jpg",
  "Razer Cobra Pro Wireless Mouse": "image/Razer Cobra Pro Wireless Mouse.jpg",
  "Razer Naga V2 Pro Wireless MMO Mouse": "image/Razer Naga V2 Pro Wireless MMO Mouse.jpg",
  "Razer Huntsman V3 Pro Analog Optical Keyboard": "image/Razer Huntsman V3 Pro Analog Optical Keyboard.jpg",
  "Razer BlackWidow V4 Pro Mechanical Keyboard": "image/Razer BlackWidow V4 Pro Mechanical Keyboard.jpg",
  "Razer BlackWidow V4 75%": "image/Razer BlackWidow V4 75%.jpg",
  "Razer DeathStalker V2 Pro Tenkeyless": "image/Razer DeathStalker V2 Pro Tenkeyless.jpg",
  "Razer Ornata V3 Tenkeyless": "image/Razer Ornata V3 Tenkeyless.jpg",
  "Razer Kraken V4 Pro Wireless Headset": "image/Razer Kraken V4 Pro Wireless Headset.jpg",
  "Razer BlackShark V3 Pro": "image/Razer BlackShark V3 Pro.jpg",
  "Razer Kraken Kitty V2 Pro": "image/Razer Kraken Kitty V2 Pro.jpg",
  "Razer Barracuda Pro Wireless Headset": "image/Razer Barracuda Pro Wireless Headset.jpg",
  "Razer Hammerhead HyperSpeed Wireless Earbuds": "image/Razer Hammerhead HyperSpeed Wireless Earbuds.jpg",
  "Razer Wolverine V3 Pro Controller": "image/Razer Wolverine V3 Pro Controller.jpg",
  "Razer Kitsune All-Button Arcade Controller": "image/Razer Kitsune All-Button Arcade Controller.jpg",
  "Razer Kishi V3 Pro Mobile Controller": "image/Razer Kishi V3 Pro Mobile Controller.jpg",
  "Razer Seiren V3 Chroma USB Microphone": "image/Razer Seiren V3 Chroma USB Microphone.jpg",
  "Razer Kiyo V2 Webcam": "image/Razer Kiyo V2 Webcam.jpg",
  "Razer Iskur V2 Gaming Chair": "image/Razer Iskur V2 Gaming Chair.jpg",
  "Razer Enki Gaming Chair": "image/Razer Enki Gaming Chair.jpg",
  "Razer Freyja Haptic Gaming Cushion": "image/azer Freyja Haptic Gaming Cushion.jpg",
  "Razer Leviathan V2 X PC Soundbar": "image/Razer Leviathan V2 X PC Soundbar.jpg",
  "Razer Gigantus V2 Mouse Mat (Large)": "image/Razer Gigantus V2 Mouse Mat (Large).jpg",
  "Razer Strider Large Gaming Mat": "image/Razer Strider Large Gaming Mat.jpg",
  "Razer Thunderbolt 5 Dock": "image/Razer Thunderbolt 5 Dock.jpg",
  "Razer Laptop Cooling Pad": "image/Razer Laptop Cooling Pad.jpg",
  "Razer Aether Lamp": "image/Razer Aether Lamp.jpg",
  "Razer Core X V2 eGPU Enclosure": "image/Razer Core X V2 eGPU Enclosure.jpg",
  "Surface Pro 13-inch Flex Keyboard with Slim Pen": "image/Surface Pro 13-inch Flex Keyboard with Slim Pen.jpg",
  "Surface Pro 13-inch Keyboard with Pen Storage": "image/Surface Pro 13-inch Keyboard with Pen Storage.jpg",
  "Surface Pro 12-inch Keyboard": "image/Surface Pro 12-inch Keyboard.jpg",
  "Surface Pro 12-inch Keyboard with Slim Pen": "image/Surface Pro 12-inch Keyboard.jpg",
  "Surface Slim Pen": "image/Surface Slim Pen.jpg",
  "Surface Arc Mouse": "image/Surface Arc Mouse.jpg",
  "Surface Thunderbolt 4 Dock": "image/Surface Thunderbolt 4 Dock.jpg",
  "Surface 45W USB-C Wall Charger": "image/Surface 45W USB-C Wall Charger.jpg",
  "Microsoft Adaptive Hub": "image/Microsoft Adaptive Hub.jpg",
  "Microsoft Adaptive Mouse": "image/Microsoft Adaptive Mouse.jpg",
  "Microsoft Adaptive Button": "image/Microsoft Adaptive Button.jpg",
  "Microsoft Adaptive D-Pad / Joystick": "image/Microsoft Adaptive D-Pad  Joystick.jpg",
  "Xbox Wireless Controller (Carbon Black)": "image/Xbox Wireless Controller (Carbon Black).jpg",
  "Xbox Wireless Controller (Robot White)": "image/Xbox Wireless Controller (Robot White).jpg",
  "Xbox Elite Wireless Controller Series 2": "image/Xbox Elite Wireless Controller Series 2.jpg",
  "Xbox Adaptive Controller": "image/Xbox Adaptive Controller.jpg",
  "Xbox Stereo Headset": "image/Xbox Stereo Headset.jpg",
  "Xbox Wireless Headset": "image/Xbox Wireless Headset.jpg",
  "Microsoft Designer Compact Keyboard": "image/Microsoft Designer Compact Keyboard.jpg",
  "Microsoft Number Pad": "image/Microsoft Number Pad.jpg",
  "Microsoft Bluetooth Ergonomic Mouse": "image/Microsoft Bluetooth Ergonomic Mouse.jpg",
  "Microsoft Modern Mobile Mouse": "image/Microsoft Modern Mobile Mouse.jpg",
  "Microsoft Audio Dock": "image/Microsoft Audio Dock.jpg",
  "Microsoft Modern USB-C Speaker": "image/Microsoft Modern USB-C Speaker.jpg",
  "Microsoft Modern Webcam": "image/Microsoft Modern Webcam.jpg",
  "Surface Dock 2": "image/Surface Dock 2.jpg",
  "Microsoft USB-C Travel Hub": "image/Microsoft USB-C Travel Hub.jpg",
  "Microsoft Ergonomic Keyboard": "image/Microsoft Ergonomic Keyboard.jpg",
  "Microsoft Sculpt Ergonomic Desktop": "image/Microsoft Sculpt Ergonomic Desktop.jpg",
  "Microsoft Presentation Pointer 400": "image/Microsoft Presentation Pointer 400.jpg",
  "Logitech G PRO X Superlight 2 DEX Wireless Gaming Mouse": "image/Logitech G PRO X Superlight 2 DEX Wireless Gaming Mouse.jpg",
  "Logitech G PRO X Superlight 2 LIGHTSPEED Wireless Gaming Mouse": "image/Logitech G PRO X Superlight 2 LIGHTSPEED Wireless Gaming Mouse.jpg",
  "Logitech G305 X SUPERLIGHT Wireless Gaming Mouse": "image/Logitech G305 X SUPERLIGHT Wireless Gaming Mouse.jpg",
  "Logitech G502 X PLUS LIGHTSPEED Wireless RGB Gaming Mouse": "image/Logitech G502 X PLUS LIGHTSPEED Wireless RGB Gaming Mouse.jpg",
  "Logitech G502 X Wired Gaming Mouse": "image/Logitech G502 X Wired Gaming Mouse.jpg",
  "Logitech G203 LIGHTSYNC Gaming Mouse": "image/Logitech G203 LIGHTSYNC Gaming Mouse.jpg",
  "Logitech G316 X 98 Mechanical Gaming Keyboard": "image/Logitech G316 X 98 Mechanical Gaming Keyboard.jpg",
  "Logitech G915 LIGHTSPEED Wireless Mechanical Gaming Keyboard": "image/Logitech G915 LIGHTSPEED Wireless Mechanical Gaming Keyboard.jpg",
  "Logitech G PRO X TKL Rapid Gaming Keyboard": "image/Logitech G PRO X TKL Rapid Gaming Keyboard.jpg",
  "Logitech G715 Wireless Mechanical Gaming Keyboard": "image/Logitech G715 Wireless Mechanical Gaming Keyboard.jpg",
  "Logitech G413 SE Full-Size Mechanical Keyboard": "image/Logitech G413 SE Full-Size Mechanical Keyboard.jpg",
  "Logitech G325 LIGHTSPEED Wireless Gaming Headset": "image/Logitech G325 LIGHTSPEED Wireless Gaming Headset.jpg",
  "Logitech G PRO X 2 LIGHTSPEED Wireless Gaming Headset": "image/Logitech G PRO X 2 LIGHTSPEED Wireless Gaming Headset.jpg",
  "Logitech G735 Wireless Gaming Headset": "image/Logitech G735 Wireless Gaming Headset.jpg",
  "Logitech G432 7.1 Surround Sound Gaming Headset": "image/Logitech G432 7.1 Surround Sound Gaming Headset.jpg",
  "Logitech G335 Wired Gaming Headset": "image/Logitech G335 Wired Gaming Headset.jpg",
  "Logitech G923 Racing Wheel and Pedals": "image/Logitech G923 Racing Wheel and Pedals.jpg",
  "Logitech G PRO Racing Wheel (Direct Drive)": "image/Logitech G PRO Racing Wheel (Direct Drive).jpg",
  "Logitech G ASTRO A50 X Wireless Gaming Headset + Base Station": "image/Logitech G ASTRO A50 X Wireless Gaming Headset + Base Station.jpg",
  "Logitech G ASTRO A10 Gen 2 Wired Headset": "image/Logitech G ASTRO A10 Gen 2 Wired Headset.jpg",
  "Logitech BRIO 500 Full HD Webcam": "image/Logitech BRIO 500 Full HD Webcam.jpg",
  "Logitech C920 HD Pro Webcam": "image/Logitech C920 HD Pro Webcam.jpg",
  "Logitech C922 Pro Stream Webcam": "image/Logitech C922 Pro Stream Webcam.jpg",
  "Logitech Yeti Orb USB Microphone": "image/Logitech Yeti Orb USB Microphone.jpg",
  "Logitech Blue Yeti USB Microphone for Streaming": "image/Logitech Blue Yeti USB Microphone for Streaming.jpg",
  "Logitech Wave Keys Ergonomic Wireless Keyboard": "image/Logitech Wave Keys Ergonomic Wireless Keyboard.jpg",
  "Logitech MX Master 3S Advanced Wireless Mouse": "image/Logitech MX Master 3S Advanced Wireless Mouse.jpg",
  "Logitech MX Mechanical Wireless Keyboard": "image/Logitech MX Mechanical Wireless Keyboard.jpg",
  "Logitech Pebble Keys 2 K380s Bluetooth Keyboard": "image/Logitech Pebble Keys 2 K380s Bluetooth Keyboard.jpg",
  "Logitech G Powerplay Wireless Charging Mouse Pad": "image/Logitech G Powerplay Wireless Charging Mouse Pad.jpg",
  "iPhone 17e": "image/iPhone 17.jpg",
  "OPPO Reno16c 5G": "image/OPPO Reno16 5G.jpg",
};

const IMPORTED_PRODUCT_IMAGES = new Set([
  "Motorola Edge 50 Ultra", "Motorola Edge 60 Fusion", "Motorola Edge 60 Pro",
  "Motorola Edge 70", "Motorola Edge 70 Fusion", "Motorola Edge 70 Fusion+",
  "Motorola Edge 70 Max", "Motorola Edge 70 Pro", "Motorola Edge 70 Pro Plus",
  "Motorola Moto G Max", "Motorola Moto G Play (2026)", "Motorola Moto G Power (2026)",
  "Motorola Moto G Stylus (2026)", "Motorola Moto G35 5G", "Motorola Moto G37",
  "Motorola Moto G37 Power", "Motorola Moto G47", "Motorola Moto G57 Power 5G",
  "Motorola Moto G67", "Motorola Moto G67 Power 5G", "Motorola Moto G77",
  "Motorola Moto G77 Power", "Motorola Moto G87", "Motorola Razr (2026)",
  "Motorola Razr 70", "Motorola Razr 70 Ultra", "Motorola Razr Fold",
  "Motorola Razr Ultra (2026)", "Motorola Razr+ (2026)", "Motorola Signature",
  "Vivo T3", "Vivo T3 Pro", "Vivo T3 Ultra", "Vivo T3x", "Vivo V27 Pro",
  "Vivo V29", "Vivo V29 Pro", "Vivo V30 Pro", "Vivo V30e", "Vivo V40",
  "Vivo V40 Lite", "Vivo V40 Pro", "Vivo V40 SE", "Vivo X Flip", "Vivo X Fold 2",
  "Vivo X Fold 3", "Vivo X Fold 3 Pro", "Vivo X100", "Vivo X100 Pro",
  "Vivo X100 Ultra", "Vivo X200", "Vivo X200 Pro", "Vivo X200 Pro mini",
  "Vivo X200 Ultra", "Vivo X300", "Vivo X300 Pro", "Vivo X300 Ultra",
  "Vivo X90", "Vivo X90 Pro", "Vivo X90 Pro+", "Vivo Y200", "Vivo Y28", "Vivo Y300 Pro"
]);

const CATEGORY_IMAGE_FALLBACK = {
  smartphones: 'image/samsungs26ultra.jpg',
  laptops: 'image/laptop.png',
  smartwatches: 'image/smartwatch.jpg',
  accessories: 'image/keyboard.jpg',
  audio: 'image/audio.jpg',
  gaming: 'image/gaming.jpg'
};

function localImagePath(path){
  if(!path) return '';
  return encodeURI(path).replace(/#/g, '%23');
}

// Always resolve the product image from the local ./image folder first.
function productImage(p){
  if(IMPORTED_PRODUCT_IMAGES.has(p.name)) return localImagePath(`image/${p.name}.jpg`);
  const mapped = PRODUCT_IMAGE_MAP[p.name];
  if(mapped) return localImagePath(mapped);
  if(p.image) return localImagePath(p.image);
  return localImagePath(CATEGORY_IMAGE_FALLBACK[p.category] || 'image/laptop.png');
}

function getProducts(){
  const raw = localStorage.getItem(DB_KEY);
  if(!raw){ localStorage.setItem(DB_KEY, JSON.stringify(seedProducts)); return seedProducts; }
  try { return JSON.parse(raw); } catch(e){ return seedProducts; }
}
function findProduct(id){ return getProducts().find(p=>p.id === Number(id)); }

function renderCategories(lang){
  const products = getProducts();
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = '';
  Object.keys(categoryMeta).forEach(catKey=>{
    const meta = categoryMeta[catKey];
    const count = products.filter(p=>p.category === catKey).length;
    const label = translations[lang][meta.key];
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-2';
    col.innerHTML = `
      <div class="cat-card" data-category="${catKey}">
        <div class="cat-icon">${imgTag({ src:meta.image, seed:meta.seed, size:200, alt:label })}</div>
        <h6>${label}</h6>
        <p>${count} ${translations[lang].productsSuffix}</p>
      </div>`;
    grid.appendChild(col);
  });
  grid.querySelectorAll('.cat-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      shopState.category = card.dataset.category;
      shopState.brand = 'all';
      shopState.search = '';
      resetVisibleProducts();
      document.getElementById('productSearch').value = '';
      renderShop();
      document.getElementById('shopSection').scrollIntoView({behavior:'smooth'});
    });
  });
}

/* ---------- SHOP: search + category + brand pill filtering ---------- */
const SHOP_PAGE_SIZE = 12;
const shopState = { search:'', category:'all', brand:'all', sort:'popularity', visibleCount:SHOP_PAGE_SIZE };
function resetVisibleProducts(){ shopState.visibleCount = SHOP_PAGE_SIZE; }

function renderCategoryFilterList(){
  const lang = currentLang();
  const wrap = document.getElementById('categoryFilterList');
  const cats = ['all', ...Object.keys(categoryMeta)];
  wrap.innerHTML = cats.map(catKey=>{
    const label = catKey === 'all' ? translations[lang].filterAll : translations[lang][categoryMeta[catKey].key];
    const active = shopState.category === catKey ? 'active' : '';
    return `<button class="filter-pill ${active}" data-category="${catKey}">${label}</button>`;
  }).join('');
  wrap.querySelectorAll('.filter-pill').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      shopState.category = btn.dataset.category;
      shopState.brand = 'all';
      resetVisibleProducts();
      renderShop();
    });
  });
}

function renderBrandFilterList(){
  const lang = currentLang();
  const wrap = document.getElementById('brandFilterList');

  // brand bar only pops open once a specific category is picked (not "All")
  if(shopState.category === 'all'){
    wrap.classList.remove('show');
    wrap.innerHTML = '';
    return;
  }

  const brandOptions = ['all', ...(brandsByCategory[shopState.category] || [])];
  wrap.innerHTML = brandOptions.map(b=>{
    const label = b === 'all' ? translations[lang].filterAll : b;
    const active = shopState.brand === b ? 'active' : '';
    return `<button class="filter-pill ${active}" data-brand="${b}">${label}</button>`;
  }).join('');
  wrap.classList.add('show');
  wrap.querySelectorAll('.filter-pill').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      shopState.brand = btn.dataset.brand;
      resetVisibleProducts();
      renderShop();
    });
  });
}

function mixProductsByBrand(products){
  const brandGroups = new Map();
  products.forEach(product=>{
    const key = product.brand || 'Other';
    if(!brandGroups.has(key)) brandGroups.set(key, []);
    brandGroups.get(key).push(product);
  });

  const groups = [...brandGroups.entries()]
    .sort(([brandA],[brandB])=> brandA.localeCompare(brandB))
    .map(([,items])=> items);
  const mixed = [];
  let row = 0;
  let productsAdded = true;

  while(productsAdded){
    productsAdded = false;
    const offset = row % Math.max(groups.length, 1);
    for(let i = 0; i < groups.length; i++){
      const group = groups[(i + offset) % groups.length];
      if(group[row]){
        mixed.push(group[row]);
        productsAdded = true;
      }
    }
    row++;
  }
  return mixed;
}

function getFilteredProducts(){
  const q = shopState.search.trim().toLowerCase();
  const filtered = getProducts().filter(p=>{
    const matchesSearch = !q || p.name.toLowerCase().includes(q);
    const matchesCategory = shopState.category === 'all' || p.category === shopState.category;
    const matchesBrand = shopState.brand === 'all' || p.brand === shopState.brand;
    return matchesSearch && matchesCategory && matchesBrand;
  });
  switch(shopState.sort){
    case 'priceLow':  return filtered.sort((a,b)=> a.price - b.price);
    case 'priceHigh': return filtered.sort((a,b)=> b.price - a.price);
    case 'nameAZ':    return filtered.sort((a,b)=> a.name.localeCompare(b.name));
    default:          return shopState.brand === 'all' ? mixProductsByBrand(filtered) : filtered;
  }
}
function renderProducts(lang, products){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach(p=>{
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4';
    col.innerHTML = `
      <div class="product-card" data-id="${p.id}">
        <div class="product-photo">${imgTag({ src:productImage(p), seed:`product-${p.id}`, size:400, alt:p.name })}</div>
        <div class="product-body">
          <h6>${p.name}</h6>
          <div class="product-price">$${p.price}</div>
          <div class="product-stock mb-2">${p.stock} ${translations[lang].inStock}</div>
          <button class="btn btn-primary rounded-pill w-100 btn-add-cart" data-id="${p.id}">${translations[lang].addToCart}</button>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}
function renderShop(){
  const lang = currentLang();
  renderCategoryFilterList();
  renderBrandFilterList();
  const filtered = getFilteredProducts();
  const visibleProducts = filtered.slice(0, shopState.visibleCount);
  renderProducts(lang, visibleProducts);
  document.getElementById('shopResultsCount').textContent = `${visibleProducts.length} / ${filtered.length} ${translations[lang].resultsCountLabel}`;
  document.getElementById('noResultsMsg').classList.toggle('d-none', filtered.length !== 0);
  document.getElementById('showMoreWrap').classList.toggle('d-none', visibleProducts.length >= filtered.length);
}
document.getElementById('productSearch').addEventListener('input', (e)=>{
  shopState.search = e.target.value;
  resetVisibleProducts();
  renderShop();
});
document.getElementById('sortSelect').addEventListener('change', (e)=>{
  shopState.sort = e.target.value;
  resetVisibleProducts();
  renderShop();
});
document.getElementById('clearFiltersBtn').addEventListener('click', ()=>{
  shopState.search = ''; shopState.category = 'all'; shopState.brand = 'all'; shopState.sort = 'popularity';
  resetVisibleProducts();
  document.getElementById('productSearch').value = '';
  document.getElementById('sortSelect').value = 'popularity';
  renderShop();
});
document.getElementById('showMoreBtn').addEventListener('click', ()=>{
  shopState.visibleCount += SHOP_PAGE_SIZE;
  renderShop();
});
document.getElementById('productGrid').addEventListener('click', (e)=>{
  const addBtn = e.target.closest('.btn-add-cart');
  if(addBtn){ addToCart(addBtn.dataset.id, 1); return; }
  const card = e.target.closest('.product-card');
  if(card){ openProductDetail(card.dataset.id); }
});
const blogPosts = [
  { image:"image/How to Choose the Right Laptop in 2026.jpg", seed:"blog-laptop", date:"Aug 10, 2026",
    title_en:"How to Choose the Right Laptop in 2026", title_km:"វិធីជ្រើសរើសកុំព្យូទ័រយួរដៃឲ្យត្រូវក្នុងឆ្នាំ ២០២៦",
    excerpt_en:"A quick guide to picking the specs that actually matter for your budget and workflow.",
    excerpt_km:"មគ្គុទ្ទេសក៍សង្ខេបសម្រាប់ជ្រើសរើសលក្ខណៈបច្ចេកទេសសមស្របទៅនឹងថវិកា និងការងាររបស់អ្នក។",
    content_en:"<p>Picking a laptop is really about matching three things to how you actually work: the CPU/RAM for how many apps you juggle at once, storage for how much you keep locally, and the screen/battery for how and where you'll use it daily.</p><p>For general study and browsing, 8–16GB RAM and a mid-range CPU is plenty. Creators and gamers should prioritize a dedicated GPU and faster storage (NVMe SSD) over raw CPU speed. If you travel a lot, battery life and weight matter more than benchmark scores.</p><p>Finally, don't buy on specs alone — check after-sales support and warranty coverage in your country, since that's what actually saves you money down the road.</p>",
    content_km:"<p>ការជ្រើសរើសកុំព្យូទ័រយួរដៃ គឺជាការផ្គូផ្គងចំណុចសំខាន់បី ទៅនឹងរបៀបដែលអ្នកប្រើប្រាស់ជាក់ស្តែង៖ CPU/RAM សម្រាប់ចំនួនកម្មវិធីដែលអ្នកបើកក្នុងពេលតែមួយ ទំហំផ្ទុកសម្រាប់ទិន្នន័យដែលអ្នករក្សាទុក និងអេក្រង់/ថ្មសម្រាប់របៀបប្រើប្រាស់ប្រចាំថ្ងៃ។</p><p>សម្រាប់ការសិក្សា និងការស្វែងរកព័ត៌មានទូទៅ RAM ៨–១៦GB និង CPU កម្រិតមធ្យមគឺគ្រប់គ្រាន់។ អ្នកបង្កើតមាតិកា និងហ្គេមមឺរគួរផ្តោតលើ GPU ដាច់ដោយឡែក និង SSD ល្បឿនលឿនជាងល្បឿន CPU។ ប្រសិនបើអ្នកធ្វើដំណើរញឹកញាប់ អាយុថ្ម និងទម្ងន់សំខាន់ជាងពិន្ទុតេស្ត។</p><p>ជាចុងក្រោយ កុំទិញដោយផ្អែកលើលក្ខណៈបច្ចេកទេសតែឯង៖ ពិនិត្យសេវាកម្មក្រោយការលក់ និងការធានាក្នុងប្រទេសអ្នក ព្រោះនោះទើបជាអ្វីដែលជួយសន្សំលុយអ្នកពិតប្រាកដនាពេលក្រោយ។</p>" },
  { image:"image/Top 5 Smartwatches for Fitness.jpg", seed:"blog-smartwatch", date:"Aug 5, 2026",
    title_en:"Top 5 Smartwatches for Fitness", title_km:"នាឡិកាឆ្លាតវៃល្អបំផុត ៥ សម្រាប់សុខភាព",
    excerpt_en:"From heart-rate tracking to sleep scores, here's what to look for this year.",
    excerpt_km:"ចាប់ពីការតាមដានចង្វាក់បេះដូង រហូតដល់ពិន្ទុគេង នេះជាអ្វីដែលអ្នកគួរពិចារណាឆ្នាំនេះ។",
    content_en:"<p>The best fitness smartwatch for you depends on your ecosystem first — an iPhone owner gets the smoothest experience from an Apple Watch, while Android users are better served by Samsung, Xiaomi, or Huawei watches.</p><p>Beyond that, look at battery life (multi-day is far more convenient for sleep tracking than daily-charge watches), accuracy of heart-rate and SpO2 sensors, and water resistance rating if you swim.</p><p>Don't overpay for features you won't use — if you mainly want step counts and notifications, a mid-range band gives 90% of the value at a fraction of the price of a flagship watch.</p>",
    content_km:"<p>នាឡិកាឆ្លាតវៃសម្រាប់ហាត់ប្រាណដ៏ល្អសម្រាប់អ្នក អាស្រ័យទៅលើប្រព័ន្ធទូរស័ព្ទរបស់អ្នកជាមុនសិន៖ អ្នកប្រើ iPhone នឹងទទួលបានបទពិសោធន៍រលូនបំផុតជាមួយ Apple Watch ចំណែក Android គួរជ្រើសរើស Samsung, Xiaomi ឬ Huawei។</p><p>ក្រៅពីនេះ គួរពិចារណាអាយុថ្ម (ប្រើបានច្រើនថ្ងៃមានភាពងាយស្រួលជាងសម្រាប់តាមដានដំណេក) ភាពត្រឹមត្រូវនៃឧបករណ៍ចាប់ចង្វាក់បេះដូង និង SpO2 ព្រមទាំងកម្រិតធន់ទឹកបើអ្នកចូលចិត្តហែលទឹក។</p><p>កុំចំណាយលើសលុបលើមុខងារដែលអ្នកមិនប្រើ៖ បើអ្នកចង់បានតែរាប់ជំហាន និងការជូនដំណឹង នាឡិកាកម្រិតមធ្យមផ្តល់ភាគច្រើននៃតម្លៃដោយចំណាយតិចជាងនាឡិកាកំពូល។</p>" },
  { image:"image/Gaming Setup on a Budget.jpg", seed:"blog-gaming", date:"Jul 28, 2026",
    title_en:"Gaming Setup on a Budget", title_km:"រៀបចំតុហ្គេមក្នុងថវិកាសមរម្យ",
    excerpt_en:"Build a solid gaming corner without breaking the bank — our picks for every price range.",
    excerpt_km:"បង្កើតកន្លែងលេងហ្គេមល្អដោយមិនចាំបាច់ចំណាយច្រើន — ជម្រើសរបស់យើងគ្រប់ជួរតម្លៃ។",
    content_en:"<p>You don't need top-tier gear to build a satisfying gaming corner. Start with the two things that touch your hands the most: a keyboard and mouse you're comfortable with, ideally with fast, reliable switches and sensors.</p><p>Next, prioritize the monitor's refresh rate over resolution if your budget is tight — a smooth 1080p 144Hz display feels better for fast-paced games than a 4K 60Hz one.</p><p>Finally, add a headset and comfortable seating last. Good audio and posture matter for long sessions, but they're the easiest upgrades to add gradually once your core setup is solid.</p>",
    content_km:"<p>អ្នកមិនចាំបាច់មានឧបករណ៍កំពូលដើម្បីបង្កើតតុហ្គេមដែលពេញចិត្តនោះទេ។ ចាប់ផ្តើមជាមួយឧបករណ៍ពីរដែលអ្នកប៉ះញឹកញាប់បំផុត៖ ក្តារចុច និងកណ្តុរដែលអ្នកមានផាសុកភាព មានប៊ូតុង និងឧបករណ៍ចាប់សញ្ញាឆាប់រហ័ស និងជឿទុកចិត្តបាន។</p><p>បន្ទាប់មក ផ្តោតលើអត្រាធ្វើឲ្យស្រស់នៃអេក្រង់ជាងគុណភាពបង្ហាញ ប្រសិនបើថវិកាមានកម្រិត — អេក្រង់ 1080p 144Hz រលូនមានអារម្មណ៍ល្អជាងសម្រាប់ហ្គេមលឿន ជាង 4K 60Hz។</p><p>ជាចុងក្រោយ បន្ថែមកាស និងកៅអីផាសុកភាពជាចុងក្រោយ។ សំឡេងល្អ និងឥរិយាបថត្រឹមត្រូវសំខាន់សម្រាប់ការលេងរយៈពេលវែង ប៉ុន្តែពួកវាងាយស្រួលបំផុតក្នុងការបន្ថែមបន្តិចម្តងៗ នៅពេលតុមូលដ្ឋានរបស់អ្នករឹងមាំ។</p>" }
];

function renderBlog(lang){
  const grid = document.getElementById('blogGrid');
  grid.innerHTML = '';
  blogPosts.forEach((post, idx)=>{
    const title = lang === 'km' ? post.title_km : post.title_en;
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="blog-card" data-index="${idx}">
        <div class="blog-thumb">${imgTag({ src:post.image, seed:post.seed, size:400, alt:title })}</div>
        <div class="blog-body">
          <div class="blog-date">${post.date}</div>
          <h6>${title}</h6>
          <p>${lang === 'km' ? post.excerpt_km : post.excerpt_en}</p>
          <a href="#" class="blog-link" data-index="${idx}">${translations[lang].blogReadMore}</a>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

/* ---------- BLOG: open full article in modal ---------- */
const articleModalEl = document.getElementById('articleModal');
const articleModal = articleModalEl ? new bootstrap.Modal(articleModalEl) : null;
function openArticle(idx){
  const post = blogPosts[idx];
  if(!post || !articleModal) return;
  const lang = currentLang();
  document.getElementById('articleImage').src = post.image;
  document.getElementById('articleImage').alt = lang === 'km' ? post.title_km : post.title_en;
  document.getElementById('articleImage').onerror = function(){ this.onerror=null; this.src=`https://picsum.photos/seed/${post.seed}/700/400`; };
  document.getElementById('articleDate').textContent = post.date;
  document.getElementById('articleTitle').textContent = lang === 'km' ? post.title_km : post.title_en;
  document.getElementById('articleBody').innerHTML = lang === 'km' ? post.content_km : post.content_en;
  articleModal.show();
}
document.getElementById('blogGrid').addEventListener('click', (e)=>{
  const link = e.target.closest('.blog-link');
  const card = e.target.closest('.blog-card');
  if(link){ e.preventDefault(); openArticle(Number(link.dataset.index)); return; }
  if(card){ openArticle(Number(card.dataset.index)); }
});
let pdCurrentId = null;
let pdCurrentQty = 1;
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

function openProductDetail(id){
  const p = findProduct(id);
  if(!p) return;
  const lang = currentLang();
  const meta = categoryMeta[p.category];
  pdCurrentId = p.id;
  pdCurrentQty = 1;

  const pdImage = document.getElementById('pdImage');
  pdImage.src = productImage(p);
  pdImage.alt = p.name;
  pdImage.onerror = function(){
    this.onerror = null;
    this.src = `https://picsum.photos/seed/product-${p.id}/500/500`;
  };

  document.getElementById('pdName').textContent = p.name;
  document.getElementById('pdPrice').textContent = '$' + p.price;
  document.getElementById('pdDesc').textContent = lang === 'km' ? p.desc_km : p.desc_en;
  document.getElementById('pdCategory').textContent = translations[lang][meta.key];
  document.getElementById('pdStock').textContent = p.stock + ' ' + translations[lang].inStock;
  document.getElementById('pdBrand').textContent = p.brand;

  const specsList = document.getElementById('pdSpecsList');
  const specsWrap = document.getElementById('pdSpecsWrap');
  const specEntries = Object.entries(p.specs || {});
  if(specEntries.length === 0){
    specsWrap.classList.add('d-none');
  } else {
    specsWrap.classList.remove('d-none');
    specsList.innerHTML = specEntries.map(([key, val])=>{
      const label = specLabels[lang][key] || key;
      return `<li><strong>${label}:</strong> ${val}</li>`;
    }).join('');
  }

  document.getElementById('pdQty').textContent = pdCurrentQty;
  productModal.show();
}

document.getElementById('pdQtyMinus').addEventListener('click', ()=>{
  pdCurrentQty = Math.max(1, pdCurrentQty - 1);
  document.getElementById('pdQty').textContent = pdCurrentQty;
});
document.getElementById('pdQtyPlus').addEventListener('click', ()=>{
  pdCurrentQty += 1;
  document.getElementById('pdQty').textContent = pdCurrentQty;
});
document.getElementById('pdAddToCart').addEventListener('click', ()=>{
  addToCart(pdCurrentId, pdCurrentQty);
  productModal.hide();
});
const CART_KEY = 'techzone_cart';
function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return []; }
}
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

function addToCart(id, qty){
  id = Number(id);
  const cart = getCart();
  const existing = cart.find(i=>i.id === id);
  if(existing){ existing.qty += qty; } else { cart.push({ id, qty }); }
  saveCart(cart);
  renderCart(currentLang());
}
function removeFromCart(id){
  const cart = getCart().filter(i=>i.id !== Number(id));
  saveCart(cart);
  renderCart(currentLang());
}

function renderCart(lang){
  const cart = getCart();
  const wrap = document.getElementById('cartItemsWrap');
  const badge = document.getElementById('cartCount');
  const subtotalEl = document.getElementById('cartSubtotal');
  wrap.innerHTML = '';
  let totalQty = 0, subtotal = 0;

  if(cart.length === 0){
    wrap.innerHTML = `<p class="text-body-secondary small text-center mt-4">${translations[lang].cartEmpty}</p>`;
  }

  cart.forEach(item=>{
    const p = findProduct(item.id);
    if(!p) return;
    totalQty += item.qty;
    subtotal += p.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="thumb">${imgTag({ src:productImage(p), seed:`product-${p.id}`, size:100, alt:p.name })}</div>
      <div class="flex-grow-1">
        <h6>${p.name}</h6>
        <p>${item.qty} × $${p.price}</p>
      </div>
      <button class="btn btn-sm btn-link text-danger p-0" data-remove="${p.id}">${translations[lang].cartRemove}</button>`;
    wrap.appendChild(row);
  });

  wrap.querySelectorAll('[data-remove]').forEach(btn=>{
    btn.addEventListener('click', ()=> removeFromCart(btn.dataset.remove));
  });

  badge.textContent = totalQty;
  subtotalEl.textContent = '$' + subtotal;
}
function checkoutMoney(value){ return '$' + Number(value || 0).toFixed(2); }

function renderCheckoutSummary(){
  const cart = getCart();
  const itemsWrap = document.getElementById('checkoutSummaryItems');
  const countEl = document.getElementById('checkoutSummaryCount');
  const subtotalEl = document.getElementById('checkoutSummarySubtotal');
  const taxEl = document.getElementById('checkoutSummaryTax');
  const totalEl = document.getElementById('checkoutSummaryTotal');
  const payTotalEl = document.getElementById('checkoutPayTotal');
  if(!itemsWrap) return;
  itemsWrap.innerHTML = '';
  let qty = 0, subtotal = 0;
  cart.forEach(item=>{
    const p = findProduct(item.id);
    if(!p) return;
    qty += item.qty;
    subtotal += p.price * item.qty;
    const row = document.createElement('div');
    row.className = 'summary-product';
    row.innerHTML = `
      <div class="summary-product-thumb">${imgTag({ src:productImage(p), seed:`product-${p.id}`, size:100, alt:p.name })}</div>
      <div class="summary-product-info"><h6>${p.name}</h6><p>${translations[currentLang()].checkoutItem} × ${item.qty}</p></div>
      <strong class="summary-product-price">${checkoutMoney(p.price * item.qty)}</strong>`;
    itemsWrap.appendChild(row);
  });
  if(!cart.length) itemsWrap.innerHTML = `<div class="text-body-secondary small py-3">${translations[currentLang()].cartEmpty}</div>`;
  const express = document.querySelector('input[name="deliveryMethod"]:checked')?.value === 'express';
  const shipping = express ? 8 : 0;
  const discount = Number(window.checkoutDiscount || 0);
  const tax = Math.max(0, (subtotal - discount) * 0.05);
  const total = Math.max(0, subtotal - discount + shipping + tax);
  const shippingEl = document.getElementById('checkoutSummaryShipping');
  const discountEl = document.getElementById('checkoutSummaryDiscount');
  if(shippingEl){ shippingEl.textContent = shipping ? checkoutMoney(shipping) : translations[currentLang()].summaryFree; }
  if(discountEl){ discountEl.textContent = discount ? '-'+checkoutMoney(discount) : checkoutMoney(0); }
  countEl.textContent = `${qty} ${qty === 1 ? translations[currentLang()].checkoutItem : translations[currentLang()].checkoutItems}`;
  subtotalEl.textContent = checkoutMoney(subtotal);
  taxEl.textContent = checkoutMoney(tax);
  totalEl.textContent = checkoutMoney(total);
  payTotalEl.textContent = checkoutMoney(total);
}

function clearCheckoutErrors(){
  document.querySelectorAll('.checkout-error').forEach(el=>el.textContent='');
  document.querySelectorAll('.checkout-input-wrap').forEach(el=>el.classList.remove('invalid'));
}
function checkoutError(id, message){
  const input = document.getElementById(id);
  const wrap = input?.closest('.checkout-input-wrap');
  const err = document.querySelector(`[data-error-for="${id}"]`);
  if(wrap) wrap.classList.add('invalid');
  if(err) err.textContent = message;
}
function validExpiry(value){
  const clean = value.replace(/\s/g,'');
  const m = clean.match(/^(\d{2})\/(\d{2})$/);
  if(!m) return false;
  const month = Number(m[1]);
  if(month < 1 || month > 12) return false;
  const year = 2000 + Number(m[2]);
  const now = new Date();
  return year > now.getFullYear() || (year === now.getFullYear() && month >= now.getMonth()+1);
}
function detectCardBrand(number){
  const n = number.replace(/\D/g,'');
  if(/^4/.test(n)) return 'VISA';
  if(/^(5[1-5]|2[2-7])/.test(n)) return 'MASTERCARD';
  if(/^3[47]/.test(n)) return 'AMEX';
  return 'CARD';
}
function updateCardPreview(){
  const name = document.getElementById('checkoutName').value.trim();
  const card = document.getElementById('checkoutCard').value.replace(/\D/g,'');
  const expiry = document.getElementById('checkoutExpiry').value.trim();
  const display = (card.match(/.{1,4}/g)||[]).join(' ');
  document.getElementById('cardPreviewNumber').textContent = display || '•••• •••• •••• ••••';
  document.getElementById('cardPreviewName').textContent = (name || 'YOUR NAME').toUpperCase();
  document.getElementById('cardPreviewExpiry').textContent = expiry || 'MM/YY';
  const brand = detectCardBrand(card);
  document.getElementById('cardBrand').textContent = brand;
  document.getElementById('inputCardBrand').textContent = brand;
}

window.checkoutDiscount = 0;
function updateCheckoutTotals(){ renderCheckoutSummary(); }

document.querySelectorAll('input[name="deliveryMethod"]').forEach(r=>r.addEventListener('change', updateCheckoutTotals));
document.getElementById('applyPromo').addEventListener('click', ()=>{
  const input=document.getElementById('checkoutPromo');
  const msg=document.getElementById('promoMessage');
  const code=input.value.trim().toUpperCase();
  const lang=currentLang();
  if(code==='TECH10'){ window.checkoutDiscount=10; msg.style.color=''; msg.textContent=lang==='km'?'✓ បានបញ្ចុះតម្លៃ $10':'✓ $10 discount applied'; }
  else if(code===''){ window.checkoutDiscount=0; msg.textContent=''; }
  else { window.checkoutDiscount=0; msg.textContent=lang==='km'?'លេខកូដមិនត្រឹមត្រូវ':'Invalid promo code'; msg.style.color='#dc2626'; setTimeout(()=>msg.style.color='',1200); }
  updateCheckoutTotals();
});

function prepareCheckout(){
  window.checkoutDiscount=0;
  const promo=document.getElementById('checkoutPromo'); if(promo) promo.value='';
  const msg=document.getElementById('promoMessage'); if(msg) msg.textContent='';
  const standard=document.querySelector('input[name="deliveryMethod"][value="free"]'); if(standard) standard.checked=true;
  renderCheckoutSummary();
  clearCheckoutErrors();
  updateCardPreview();
}

document.getElementById('checkoutModal').addEventListener('show.bs.modal', prepareCheckout);

document.getElementById('checkoutName').addEventListener('input', updateCardPreview);
document.getElementById('checkoutCard').addEventListener('input', e=>{
  e.target.value = e.target.value.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
  updateCardPreview();
});
document.getElementById('checkoutExpiry').addEventListener('input', e=>{
  let v=e.target.value.replace(/\D/g,'').slice(0,4);
  e.target.value = v.length > 2 ? v.slice(0,2) + ' / ' + v.slice(2) : v;
  updateCardPreview();
});
document.getElementById('checkoutExpiry').addEventListener('blur', e=>{
  const digits=e.target.value.replace(/\D/g,'');
  if(digits.length===4) e.target.value=digits.slice(0,2)+' / '+digits.slice(2);
  updateCardPreview();
});
document.getElementById('checkoutCvv').addEventListener('input', e=>e.target.value=e.target.value.replace(/\D/g,'').slice(0,4));
document.getElementById('cvvToggle').addEventListener('click', ()=>{
  const input=document.getElementById('checkoutCvv');
  const icon=document.querySelector('#cvvToggle i');
  input.type=input.type==='password'?'text':'password';
  icon.classList.toggle('fa-eye'); icon.classList.toggle('fa-eye-slash');
});

document.getElementById('paymentForm').addEventListener('submit', function(e){
  e.preventDefault();
  clearCheckoutErrors();
  const lang=currentLang(), t=translations[lang];
  const name=document.getElementById('checkoutName').value.trim();
  const address=document.getElementById('checkoutAddress').value.trim();
  const phone=document.getElementById('checkoutPhone').value.trim();
  const city=document.getElementById('checkoutCity').value.trim();
  const card=document.getElementById('checkoutCard').value.replace(/\D/g,'');
  const expiry=document.getElementById('checkoutExpiry').value.trim();
  const cvv=document.getElementById('checkoutCvv').value.trim();
  let valid=true;
  if(name.length<2){checkoutError('checkoutName',t.checkoutNameError);valid=false;}
  if(address.length<5){checkoutError('checkoutAddress',t.checkoutAddressError);valid=false;}
  if(phone.replace(/\D/g,'').length<8){checkoutError('checkoutPhone',t.checkoutPhoneError);valid=false;}
  if(city.length<2){checkoutError('checkoutCity',t.checkoutCityError);valid=false;}
  if(card.length!==16){checkoutError('checkoutCard',t.checkoutCardError);valid=false;}
  if(!validExpiry(expiry)){checkoutError('checkoutExpiry',t.checkoutExpiryError);valid=false;}
  if(!/^\d{3,4}$/.test(cvv)){checkoutError('checkoutCvv',t.checkoutCvvError);valid=false;}
  if(!valid) return;
  const orderNumber='TZ'+Date.now().toString().slice(-6);
  document.getElementById('orderNumberValue').textContent=orderNumber;
  this.classList.add('d-none');
  document.querySelector('.checkout-body').classList.add('d-none');
  document.querySelector('.checkout-progress').classList.add('d-none');
  document.querySelector('.checkout-topbar').classList.add('d-none');
  document.getElementById('successView').classList.remove('d-none');
  saveCart([]);
  renderCart(currentLang());
});

document.getElementById('checkoutModal').addEventListener('hidden.bs.modal', ()=>{
  window.checkoutDiscount=0;
  document.getElementById('paymentForm').reset();
  clearCheckoutErrors();
  document.getElementById('paymentForm').classList.remove('d-none');
  document.querySelector('.checkout-body').classList.remove('d-none');
  document.querySelector('.checkout-progress').classList.remove('d-none');
  document.querySelector('.checkout-topbar').classList.remove('d-none');
  document.getElementById('successView').classList.add('d-none');
  updateCardPreview();
});
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('contactSuccessMsg').classList.remove('d-none');
  this.reset();
  setTimeout(()=> document.getElementById('contactSuccessMsg').classList.add('d-none'), 4000);
});
document.getElementById('newsletterForm').addEventListener('submit', function(e){
  e.preventDefault();
  this.reset();
});
function renderAccountMenu(){
  const button=document.getElementById('accountButton');
  const menu=document.getElementById('accountMenu');
  const icon=document.getElementById('accountIcon');
  const initial=document.getElementById('accountInitial');
  if(!button||!menu) return;
  let session=null;
  try{session=JSON.parse(localStorage.getItem('techzone_session_v1'))}catch{}
  if(session?.name){
    icon.classList.add('d-none');
    initial.classList.remove('d-none');
    initial.textContent=session.name.charAt(0);
    button.classList.add('signed-in');
    button.setAttribute('aria-label',`Account: ${session.name}`);
    const safeName=String(session.name).replace(/[&<>'"]/g,(char)=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
    menu.innerHTML=`<div class="account-menu-head"><small>Signed in as</small><strong>${safeName}</strong></div><a class="dropdown-item" href="#shopSection"><i class="fa-solid fa-bag-shopping"></i>Continue shopping</a><button class="dropdown-item" type="button" id="logoutButton"><i class="fa-solid fa-arrow-right-from-bracket"></i>Sign out</button>`;
    document.getElementById('logoutButton').addEventListener('click',()=>{
      localStorage.removeItem('techzone_session_v1');
      renderAccountMenu();
    });
  }else{
    icon.classList.remove('d-none');
    initial.classList.add('d-none');
    button.classList.remove('signed-in');
    button.setAttribute('aria-label','Sign in or create account');
    menu.innerHTML='<div class="account-menu-head"><small>TECHZONE ACCOUNT</small><strong>Sign in for a faster checkout</strong></div><a class="dropdown-item" href="login.html"><i class="fa-solid fa-arrow-right-to-bracket"></i>Sign in</a><a class="dropdown-item" href="signup.html"><i class="fa-regular fa-user"></i>Create account</a>';
  }
}
/* ---------- NAVBAR: search button -> jump to shop + focus search ---------- */
document.getElementById('navSearchBtn')?.addEventListener('click', ()=>{
  const navMenu = document.getElementById('navMenu');
  if(navMenu && navMenu.classList.contains('show')){
    bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
  }
  document.getElementById('shopSection').scrollIntoView({ behavior:'smooth', block:'start' });
  const input = document.getElementById('productSearch');
  setTimeout(()=> input && input.focus({ preventScroll:true }), 450);
});

/* ---------- NAVBAR: shrink/shadow effect while scrolling ---------- */
(function(){
  const nav = document.getElementById('mainNavbar');
  if(!nav) return;
  let ticking = false;
  function updateNav(){
    nav.classList.toggle('navbar-scrolled', window.scrollY > 24);
    nav.style.setProperty('--nav-rotation', `${window.scrollY * 0.22}deg`);
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(!ticking){ window.requestAnimationFrame(updateNav); ticking = true; }
  });
  updateNav();
})();

/* ---------- COLLECTIONS: click a card to jump into the filtered shop ---------- */
document.querySelectorAll('.collection-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    shopState.category = card.dataset.category || 'all';
    shopState.brand = 'all';
    shopState.sort = card.dataset.sort || 'popularity';
    shopState.search = '';
    resetVisibleProducts();
    document.getElementById('productSearch').value = '';
    document.getElementById('sortSelect').value = shopState.sort;
    renderShop();
    document.getElementById('shopSection').scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

getProducts();
applyLanguage(currentLang());
renderAccountMenu();
