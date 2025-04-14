export const smallPageSize = 5;
export const bigPageSize = 10;
export const appTitle = "حِرَفي";
export const phoneRegex = /^01\d{9}$/;
export const imgBaseURL =
    "https://baboon-selected-hippo.ngrok-free.app/api/img/";
export const crafts: string[] = [
    "نجار",
    "سباك",
    "حداد",
    "نقاش",
    "مبيض محاره",
    "عامل بناء",
    "كهربائي",
    "فني تكييف وتبريد",
    "ميكانيكي",
    "عامل جبس",
    "عامل زجاج",
];
export const governoratesWithCities: Record<string, string[]> = {
    القاهرة: [
        "15 مايو",
        "الازبكية",
        "البساتين",
        "التبين",
        "الخليفة",
        "الدراسة",
        "الدرب الاحمر",
        "الزاوية الحمراء",
        "الزيتون",
        "الساحل",
        "السلام",
        "السيدة زينب",
        "الشرابية",
        "مدينة الشروق",
        "الظاهر",
        "العتبة",
        "القاهرة الجديدة",
        "المرج",
        "عزبة النخل",
        "المطرية",
        "المعادى",
        "المعصرة",
        "المقطم",
        "المنيل",
        "الموسكى",
        "النزهة",
        "الوايلى",
        "باب الشعرية",
        "بولاق",
        "جاردن سيتى",
        "حدائق القبة",
        "حلوان",
        "دار السلام",
        "شبرا",
        "طره",
        "عابدين",
        "عباسية",
        "عين شمس",
        "مدينة نصر",
        "مصر الجديدة",
        "مصر القديمة",
        "منشية ناصر",
        "مدينة بدر",
        "مدينة العبور",
        "وسط البلد",
        "الزمالك",
        "قصر النيل",
        "الرحاب",
        "القطامية",
        "مدينتي",
        "روض الفرج",
        "شيراتون",
        "الجمالية",
        "العاشر من رمضان",
        "الحلمية",
        "النزهة الجديدة",
        "العاصمة الإدارية",
    ],
    الجيزة: [
        "الجيزة",
        "السادس من أكتوبر",
        "الشيخ زايد",
        "الحوامدية",
        "البدرشين",
        "الصف",
        "أطفيح",
        "العياط",
        "الباويطي",
        "منشأة القناطر",
        "أوسيم",
        "كرداسة",
        "أبو النمر",
        "كفر غطاطي",
        "منشأة البكاري",
        "الدقى",
        "العجوزة",
        "الهرم",
        "الوراق",
        "امبابة",
        "بولاق الدكرور",
        "الواحات البحرية",
        "العمرانية",
        "المنيب",
        "بين السرايات",
        "الكيت كات",
        "المهندسين",
        "فيصل",
        "أبو رواش",
        "حدائق الأهرام",
        "الحرانية",
        "حدائق اكتوبر",
        "صفط اللبن",
        "القرية الذكية",
        "ارض اللواء",
    ],

    الإسكندرية: [
        "ابو قير",
        "الابراهيمية",
        "الأزاريطة",
        "الانفوشى",
        "الدخيلة",
        "السيوف",
        "العامرية",
        "اللبان",
        "المفروزة",
        "المنتزه",
        "المنشية",
        "الناصرية",
        "امبروزو",
        "باب شرق",
        "برج العرب",
        "ستانلى",
        "سموحة",
        "سيدى بشر",
        "شدس",
        "غيط العنب",
        "فلمينج",
        "فيكتوريا",
        "كامب شيزار",
        "كرموز",
        "محطة الرمل",
        "مينا البصل",
        "العصافرة",
        "العجمي",
        "بكوس",
        "بولكلي",
        "كليوباترا",
        "جليم",
        "المعمورة",
        "المندرة",
        "محرم بك",
        "الشاطبي",
        "سيدي جابر",
        "الساحل الشمالي",
        "الحضرة",
        "العطارين",
        "سيدي كرير",
        "الجمرك",
        "المكس",
        "مارينا",
    ],

    الدقهلية: [
        "المنصورة",
        "طلخا",
        "ميت غمر",
        "دكرنس",
        "أجا",
        "منية النصر",
        "السنبلاوين",
        "الكردي",
        "بني عبيد",
        "المنزلة",
        "تمي الأمديد",
        "الجمالية",
        "شربين",
        "المطرية",
        "بلقاس",
        "ميت سلسيل",
        "جمصة",
        "محلة دمنة",
        "نبروه",
    ],

    "البحر الأحمر": [
        "الغردقة",
        "رأس غارب",
        "سفاجا",
        "القصير",
        "مرسى علم",
        "الشلاتين",
        "حلايب",
        "الدهار",
    ],

    البحيرة: [
        "دمنهور",
        "كفر الدوار",
        "رشيد",
        "إدكو",
        "أبو المطامير",
        "أبو حمص",
        "الدلنجات",
        "المحمودية",
        "الرحمانية",
        "إيتاي البارود",
        "حوش عيسى",
        "شبراخيت",
        "كوم حمادة",
        "بدر",
        "وادي النطرون",
        "النوبارية الجديدة",
        "النوبارية",
    ],

    الفيوم: [
        "الفيوم",
        "الفيوم الجديدة",
        "طامية",
        "سنورس",
        "إطسا",
        "إبشواي",
        "يوسف الصديق",
        "الحادقة",
        "اطسا",
        "الجامعة",
        "السيالة",
        "السيالة",
    ],

    الغربية: [
        "طنطا",
        "المحلة الكبرى",
        "كفر الزيات",
        "زفتى",
        "السنطة",
        "قطور",
        "بسيون",
        "سمنود",
    ],

    الإسماعلية: [
        "الإسماعلية",
        "فايد",
        "القنطرة شرق",
        "القنطرة غرب",
        "التل الكبير",
        "أبو صوير",
        "القصاصين الجديدة",
        "نفيشة",
        "الشيخ زايد",
    ],

    المنوفية: ["شبين الكوم", "مدينة السادات", "منوف"],

    المنيا: [
        "المنيا",
        "المنيا الجديدة",
        "العدوة",
        "مغاغة",
        "بني مزار",
        "مطاي",
        "سمالوط",
        "المدينة الفكرية",
        "ملوي",
        "دير مواس",
        "ابو قرقاص",
        "ارض سلطان",
    ],

    القليوبية: [
        "بنها",
        "قليوب",
        "شبرا الخيمة",
        "القناطر الخيرية",
        "الخانكة",
        "كفر شكر",
        "طوخ",
        "قها",
        "العبور",
        "الخصوص",
        "شبين القناطر",
        "مسطرد",
    ],

    "الوادي الجديد": ["الخارجة", "باريس", "موط", "الفرافرة", "بلاط", "الداخلة"],

    السويس: ["السويس", "الجناين", "عتاقة", "العين السخنة", "فيصل"],

    أسوان: [
        "أسوان",
        "أسوان الجديدة",
        "دراو",
        "كوم أمبو",
        "نصر النوبة",
        "كلابشة",
        "إدفو",
        "الرديسية",
        "البصيلية",
        "السباعية",
        "ابوسمبل السياحية",
        "مرسى علم",
    ],

    أسيوط: [
        "أسيوط",
        "أسيوط الجديدة",
        "ديروط",
        "منفلوط",
        "القوصية",
        "أبنوب",
        "أبو تيج",
        "الغنايم",
        "ساحل سليم",
        "البداري",
        "صدفا",
    ],

    "بني سويف": [
        "بني سويف",
        "بني سويف الجديدة",
        "الواسطى",
        "ناصر",
        "إهناسيا",
        "ببا",
        "الفشن",
        "سمسطا",
        "الاباصيرى",
        "مقبل",
    ],

    بورسعيد: [
        "بورسعيد",
        "بورفؤاد",
        "العرب",
        "حى الزهور",
        "حى الشرق",
        "حى الضواحى",
        "حى المناخ",
        "حى مبارك",
    ],

    دمياط: [
        "دمياط",
        "دمياط الجديدة",
        "رأس البر",
        "فارسكور",
        "الزرقا",
        "السرو",
        "الروضة",
        "كفر البطيخ",
        "ميت أبو غالب",
        "كفر سعد",
    ],

    الشرقية: [
        "الزقازيق",
        "العاشر من رمضان",
        "منيا القمح",
        "بلبيس",
        "مشتول السوق",
        "القنايات",
        "أبو حماد",
        "القرين",
        "ههيا",
        "أبو كبير",
        "فاقوس",
        "الصالحية الجديدة",
        "الإبراهيمية",
        "ديرب نجم",
        "كفر صقر",
        "أولاد صقر",
        "الحسينية",
        "صان الحجر القبلية",
        "منشأة أبو عمر",
    ],

    "سيناء الجنوبية": [
        "الطور",
        "شرم الشيخ",
        "دهب",
        "نويبع",
        "طابا",
        "سانت كاترين",
        "أبو رديس",
        "أبو زنيمة",
        "رأس سدر",
    ],

    "كفر الشيخ": [
        "كفر الشيخ",
        "وسط البلد كفر الشيخ",
        "دسوق",
        "فوه",
        "مطوبس",
        "برج البرلس",
        "بلطيم",
        "مصيف بلطيم",
        "الحامول",
        "بيلا",
        "الرياض",
        "سيدي سالم",
        "قلين",
        "سيدي غازي",
    ],

    "مرسى مطروح": [
        "مرسى مطروح",
        "الحمام",
        "العلمين",
        "الضبعة",
        "النجيلة",
        "سيدي براني",
        "السلوم",
        "سيوة",
        "مارينا",
        "الساحل الشمالى",
    ],

    الأقصر: [
        "الأقصر",
        "الأقصر الجديدة",
        "إسنا",
        "طيبة الجديدة",
        "الزينية",
        "البياضية",
        "القرنة",
        "أرمنت",
        "الطود",
    ],

    قنا: [
        "قنا",
        "قنا الجديدة",
        "ابو طشت",
        "نجع حمادي",
        "دشنا",
        "الوقف",
        "قفط",
        "نقادة",
        "فرشوط",
        "قوص",
    ],

    "شمال سيناء": ["العريش", "الشيخ زويد", "نخل", "رفح", "بئر العبد", "الحسنة"],

    سوهاج: [
        "سوهاج",
        "سوهاج الجديدة",
        "أخميم",
        "أخميم الجديدة",
        "البلينا",
        "المراغة",
        "المنشأة",
        "دار السلام",
        "جرجا",
        "جهينة الغربية",
        "ساقلته",
        "طما",
        "طهطا",
        "الكوثر",
    ],
};
export const getGovernorates = Object.keys(governoratesWithCities);

export const getCities = (governorate: string): string[] | undefined => {
    return governoratesWithCities[governorate];
};

export const CONTACTS = ["هاتف محمول", "واتساب"];
