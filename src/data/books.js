const allBooks = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    title: "His Life will forever be Changed",
    titleAr: "سيغير حياتك للأبد",
    description:
      "Lorem ipsum His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1980 من قبل الكاتب الشهير لويس فيغو، والذي كان يعيش في مدينة فنيس.",
    rating: 5.0,
    author: "Someone",
    price: 15.99,
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
    title: "The Journey Begins",
    titleAr: "تبدأ الرحلة",
    description:
      "Lorem ipsum The Journey Begins dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1985 من قبل الكاتب الشهير ماركوس أوريليوس، والذي كان يعيش في مدينة روما.",
    rating: 4.8,
    author: "Another Author",
    price: 12.99,
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    title: "Mystery of the Lost Island",
    titleAr: "لغز الجزيرة المفقودة",
    description:
      "Lorem ipsum Mystery of the Lost Island dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1990 من قبل الكاتب الشهير إليوت نيس، والذي كان يعيش في مدينة لندن.",
    rating: 4.5,
    author: "Yet Another Author",
    price: 14.99,
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg",
    title: "Secrets of the Ancient World",
    titleAr: "أسرار العالم القديم",
    description:
      "Lorem ipsum Secrets of the Ancient World dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1975 من قبل الكاتب الشهير جيمس براون، والذي كان يعيش في مدينة أثينا.",
    rating: 4.7,
    author: "James Brown",
    price: 16.99,
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
    title: "The Last Kingdom",
    titleAr: "المملكة الأخيرة",
    description:
      "Lorem ipsum The Last Kingdom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2000 من قبل الكاتب الشهير إدوارد ميلر، والذي كان يعيش في مدينة باريس.",
    rating: 4.6,
    author: "Edward Miller",
    price: 13.99,
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
    title: "The Enchanted Forest",
    titleAr: "الغابة المسحورة",
    description:
      "Lorem ipsum The Enchanted Forest dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1995 من قبل الكاتبة الشهيرة سارة ماكنزي، والتي كانت تعيش في مدينة دبلن.",
    rating: 4.9,
    author: "Sarah McKenzie",
    price: 17.99,
  },
  {
    id: 7,
    title: "The Great Adventure",
    img: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    titleAr: "المغامرة العظيمة",
    description:
      "Lorem ipsum The Great Adventure dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2005 من قبل الكاتب الشهير جون سميث، والذي كان يعيش في مدينة نيويورك.",
    rating: 4.4,
    author: "John Smith",
    price: 11.99,
  },
  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/81NIli1PuqL.jpg",

    title: "The Hidden Treasure",
    titleAr: "الكنز المخفي",
    description:
      "Lorem ipsum The Hidden Treasure dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1988 من قبل الكاتب الشهير هنري جونسون، والذي كان يعيش في مدينة القاهرة.",
    rating: 4.3,
    author: "Henry Johnson",
    price: 10.99,
  },
  {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    title: "The Magic Spell",
    titleAr: "التعويذة السحرية",
    description:
      "Lorem ipsum The Magic Spell dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1998 من قبل الكاتبة الشهيرة جين دو، والتي كانت تعيش في مدينة برلين.",
    rating: 4.2,
    author: "Jane Doe",
    price: 15.49,
  },
  {
    id: 10,
    img: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    title: "The Lost City",
    titleAr: "المدينة المفقودة",
    description:
      "Lorem ipsum The Lost City dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2002 من قبل الكاتب الشهير روبرت براون، والذي كان يعيش في مدينة موسكو.",
    rating: 4.1,
    author: "Robert Brown",
    price: 12.49,
  },
  {
    id: 11,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    title: "The Secret Garden",
    titleAr: "الحديقة السرية",
    description:
      "Lorem ipsum The Secret Garden dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1970 من قبل الكاتبة الشهيرة ماري لينوكس، والتي كانت تعيش في مدينة لندن.",
    rating: 4.8,
    author: "Mary Lennox",
    price: 18.99,
  },
  {
    id: 12,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
    title: "The Haunted House",
    titleAr: "المنزل المسكون",
    description:
      "Lorem ipsum The Haunted House dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1992 من قبل الكاتب الشهير بيتر بان، والذي كان يعيش في مدينة إدنبرة.",
    rating: 4.5,
    author: "Peter Pan",
    price: 14.79,
  },
  {
    id: 13,
    img: "https://images-na.ssl-images-amazon.com/images/I/81NIli1PuqL.jpg",
    title: "The Time Traveler",
    titleAr: "المسافر عبر الزمن",
    description:
      "Lorem ipsum The Time Traveler dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2008 من قبل الكاتب الشهير جورج ويلسون، والذي كان يعيش في مدينة سيدني.",
    rating: 4.7,
    author: "George Wilson",
    price: 16.49,
  },
  {
    id: 14,
    img: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    title: "The Lost Kingdom",
    titleAr: "المملكة المفقودة",
    description:
      "Lorem ipsum The Lost Kingdom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2015 من قبل الكاتب الشهير أندرو كينج، والذي كان يعيش في مدينة طوكيو.",
    rating: 4.6,
    author: "Andrew King",
    price: 13.89,
  },
  {
    id: 15,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    title: "The Enchanted Castle",
    titleAr: "القلعة المسحورة",
    description:
      "Lorem ipsum The En chanted Castle dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1996 من قبل الكاتبة الشهيرة إليزابيث برانسون، والتي كانت تعيش في مدينة ملبورن.",
    rating: 4.9,
    author: "Elizabeth Branson",
    price: 19.99,
  },
  {
    id: 16,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    title: "The Forgotten Tale",
    titleAr: "الحكاية المنسية",
    description:
      "Lorem ipsum The Forgotten Tale dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2004 من قبل الكاتبة الشهيرة إميلي كلارك، والتي كانت تعيش في مدينة لوس أنجلوس.",
    rating: 4.4,
    author: "Emily Clark",
    price: 15.99,
  },
  {
    id: 17,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    title: "The Forgotten Realm",
    titleAr: "العالم المنسي",
    description:
      "Lorem ipsum The Forgotten Realm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1978 من قبل الكاتب الشهير آرثر ميلر، والذي كان يعيش في مدينة براغ.",
    rating: 4.2,
    author: "Arthur Miller",
    price: 11.49,
  },
  {
    id: 18,
    img: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    title: "The Hidden Passage",
    titleAr: "الممر المخفي",
    description:
      "Lorem ipsum The Hidden Passage dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1989 من قبل الكاتب الشهير دانيال جونز، والذي كان يعيش في مدينة بروكسل.",
    rating: 4.3,
    author: "Daniel Jones",
    price: 13.79,
  },
  {
    id: 19,
    img: "https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg",
    title: "The Phantom Ship",
    titleAr: "السفينة الشبح",
    description:
      "Lorem ipsum The Phantom Ship dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2001 من قبل الكاتبة الشهيرة أليس مارتن، والتي كانت تعيش في مدينة سان فرانسيسكو.",
    rating: 4.1,
    author: "Alice Martin",
    price: 12.29,
  },
  {
    id: 20,
    img: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
    title: "The Magic Ring",
    titleAr: "الخاتم السحري",
    description:
      "Lorem ipsum The Magic Ring dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1993 من قبل الكاتب الشهير مايكل روبنسون، والذي كان يعيش في مدينة بوسطن.",
    rating: 4.8,
    author: "Michael Robinson",
    price: 15.49,
  },
  {
    id: 21,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    title: "The Ancient Scroll",
    titleAr: "المخطوطة القديمة",
    description:
      "Lorem ipsum The Ancient Scroll dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1984 من قبل الكاتب الشهير كريستوفر نيلسون، والذي كان يعيش في مدينة أوكلاند.",
    rating: 4.6,
    author: "Christopher Nelson",
    price: 14.99,
  },
  {
    id: 22,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",

    title: "The Lost Tomb",
    titleAr: "القبر المفقود",
    description:
      "Lorem ipsum The Lost Tomb dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2007 من قبل الكاتب الشهير جاكوب هاريس، والذي كان يعيش في مدينة تورونتو.",
    rating: 4.7,
    author: "Jacob Harris",
    price: 17.49,
  },
  {
    id: 23,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    title: "The Enchanted Mirror",
    titleAr: "المرآة المسحورة",
    description:
      "Lorem ipsum The Enchanted Mirror dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1997 من قبل الكاتبة الشهيرة نيكول وليامز، والتي كانت تعيش في مدينة ميامي.",
    rating: 4.5,
    author: "Nicole Williams",
    price: 13.99,
  },
  {
    id: 24,
    img: "https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg",
    title: "The Crystal Ball",
    titleAr: "الكرة البلورية",
    description:
      "Lorem ipsum The Crystal Ball dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2003 من قبل الكاتب الشهير ناثان تيلور، والذي كان يعيش في مدينة شيكاغو.",
    rating: 4.4,
    author: "Nathan Taylor",
    price: 15.29,
  },
  {
    id: 25,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    title: "The Hidden Cave",
    titleAr: "الكهف المخفي",
    description:
      "Lorem ipsum The Hidden Cave dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1982 من قبل الكاتب الشهير فرانك جونز، والذي كان يعيش في مدينة فيينا.",
    rating: 4.3,
    author: "Frank Jones",
    price: 11.79,
  },
  {
    id: 26,
    img: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    title: "The Dragon's Lair",
    titleAr: "وكر التنين",
    description:
      "Lorem ipsum The Dragon's Lair dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1991 من قبل الكاتب الشهير بول كوبر، والذي كان يعيش في مدينة زيورخ.",
    rating: 4.2,
    author: "Paul Cooper",
    price: 13.49,
  },
  {
    id: 27,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    title: "The Mystic Lake",
    titleAr: "البحيرة الغامضة",
    description:
      "Lorem ipsum The Mystic Lake dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1987 من قبل الكاتب الشهير ألان سكوت، والذي كان يعيش في مدينة دبلن.",
    rating: 4.1,
    author: "Alan Scott",
    price: 12.99,
  },
  {
    id: 28,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
    title: "The Magic Potion",
    titleAr: "الجرعة السحرية",
    description:
      "Lorem ipsum The Magic Potion dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 1994 من قبل الكاتبة الشهيرة لورا هولمز، والتي كانت تعيش في مدينة هلسنكي.",
    rating: 4.8,
    author: "Laura Holmes",
    price: 16.79,
  },
  {
    id: 29,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    title: "The Enchanted Ring",
    titleAr: "الخاتم المسحور",
    description:
      "Lorem ipsum The Enchanted Ring dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2006 من قبل الكاتب الشهير ريتشارد لي، والذي كان يعيش في مدينة سياتل.",
    rating: 4.6,
    author: "Richard Lee",
    price: 14.49,
  },
  {
    id: 30,
    img: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    title: "The Golden Compass",
    titleAr: "البوصلة الذهبية",
    description:
      "Lorem ipsum The Golden Compass dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionAr:
      "هذا الكتاب كتب عام 2000 من قبل الكاتب الشهير فيليب بولمان، والذي كان يعيش في مدينة أكسفورد.",
    rating: 4.9,
    author: "Philip Pullman",
    price: 18.49,
  },
];

export default allBooks;
