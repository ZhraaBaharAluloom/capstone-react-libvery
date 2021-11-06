import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: {
      sign_in: "Sign In",
      sign_in_button: "Sign in",
      sign_up_button: "Sign Up",
      "don't_have_an_account": "Don't have an account?",
      already_have_an_account: "Already have an account?",
      sign_up: "Sign Up!",
      or: "OR",
      show: "Show",
      hide: "Hide",
      email: "E-mail Address",
      password: "Password",
      name: "Username",
      confirm_password: "Password confirmation",
      terms_and_conditions: "I Accept Terms and Conditions",
      about: "About ",
      our_story: "Our Story ",
      our_team: "Our Team ",
      about_header:
        "We are a team of developers who love to create and build things. We built Libvery to help you easily find the books you need. Our aim is to make life much easier to access books and make a better generation.",
      muhanned: "Muhanned ",
      niyaz: "Niyaz ",
      rawand: "Rawand ",
      ahmed: "Ahmed ",
      zahraa: "Zahraa ",
      trainer: "Trainer",
      developer: "Developer",
      contact_us: "Contact Us",
      home: "Home",
      books: "Books",
      favourites: "Favorites",
      phone_number: "Phone Number",
      never_miss_an_update: "Never miss an update",
      home_text_1: "Deliver, Browse and Buy books",
      home_text_2: "All from Libvery",
      browse: "Browse",
      Libvery: "Libvery",
      action: "action",
      adventure: "Adventure",
      drama: "Drama",
      comedy: "Comedy",
      horror: "Horror",
      romance: "Romance",
      all: "All",
      free: "Free",
      buy: "Buy",
      search: "Search",
      prev: "Prev",
      next: "Next",
      seller_contact: "Contact the Owner",
      author: "Author",
      genre: "Genre",
      price: "Price",
      you_have_to: "You have to",
      to_see_the_seller_contact: "to see the contact the owner",
      subscribe_to_our_newsletter: "Subscribe to our newsletter",
      upload_photo: "Upload photo",
      hello: "Hello",
      profile: "Profile",
      sign_out: "Sign Out",
      edit: "Edit",
      save_changes: "Save Changes",
      please_add_a_phone_number: "Please add a phone number",
      no_favorite_books_here: "No favorite books here",
      your_Favorite_Books_Are_Here: "Your Favorite Books Are Here",
      book_title: "Book Title",
      select_genres: "Select genres",
      description: "Short Description",
      upload_book_cover: "Upload Book Cover",
      are_you_donating_this_book: "Are you donating this book?",
      add_a_book: "Add a book",
      add_book: "Add Book",
      update_book_detail: "Update Book Details",
      update_book: "Update Book",
      add_images_from_the_book: "Add images from the book",
      add_images: "Add images",
      my_books: "My Books",
    },
  },
  ku: {
    translation: {
      sign_in: "چوونە ژوورەوە",
      sign_in_button: "چوونە ژوورەوە",
      sign_up_button: "خۆتۆمارکردن",
      sign_out: "چوونە دەرەوە",
      "don't_have_an_account": "ئەکاونتت نییە؟",
      already_have_an_account: "ئەکاونتێکت هەیە؟",
      sign_up: "خۆتۆمارکدن",
      or: "یان",
      show: "پیشاندان",
      hide: "شاردنەوە",
      email: "ئیمەیڵ ئەدرێس",
      password: "وشەی نهێنی",
      name: "ناو",
      confirm_password: "دڵنیابوونەوە لە پاسۆردەکە",
      terms_and_conditions: "یاسا و مەرجاکنم قبووڵە",
      about: "دەربارە ",
      our_story: "چیرۆکەکەمان ",
      our_team: "تیمەکەمان ",
      about_header:
        "تیمێکی گەشەپێدەرین ئارەزووی بنیاتنانی شت ئەکەین. ئێمە Libvery مان درووستکرد تا یارمەتی ئێوە بدات بە ئاسانی ئەو کتێبانە بدۆزنەوە کە پێویستتانە. ئامانجی تیمەکەمان بۆ درووستکرنی ژیانێکی ئاسانترە بۆ گەشتن بە کتێب و درووستکردنی نەوەیەکی باشتر.",
      muhanned: "موهەنەد",
      niyaz: "نیاز",
      rawand: "ڕەوەند",
      ahmed: "ئەحمەد",
      zahraa: "زەهرا",
      trainer: "ڕاهێنەر",
      developer: "گەشەپێدەر",
      contact_us: "پەیوەندی کردن",
      home: "پەڕەی فەرمی",
      books: "کتێبەکان",
      favourites: "دڵخوازەکان",
      favorites: "دڵخوازەکان",
      phone_number: "ژمارە موبایل",
      never_miss_an_update: "هیچ ئەپدەیتێک لەدەست مەدە",
      hello: "سڵاو",
      profile: "پرۆفایل",
      home_text_1: "گەیاندن، گەڕان و کڕینی کتێب",
      home_text_2: "هەموو ئەمانە لە Libvery",
      browse: "گەڕان بە شوێن",
      Libvery: "Libvery",
      action: "ئاکشن",
      Action: "ئاکشن",
      adventure: "سەرکێشی",
      drama: "دراما",
      comedy: "کۆمیدی",
      horror: "ترسیناک",
      romance: "ڕۆمانسی",
      all: "هەموو",
      free: "خۆڕایی",
      buy: "کڕین",
      search: "گەڕان",
      prev: "پێش",
      next: "دواتر",
      seller_contact: "پەیوەندی کردن بە فرۆشیار",
      author: "نووسەر",
      genre: "جۆرەکان",
      price: "نرخ",
      you_have_to: "پێویستە",
      to_see_the_seller_contact: "بۆ بینینی زانیاری فرۆشیار",
      subscribe_to_our_newsletter: "بەشداربە لە بڵاوکراوەکانمان",
      upload_photo: "دانانی وێنە",
      edit: "دەستکاری",
      save_changes: "خەزنکردنی گۆڕانکارییەکان",
      please_add_a_phone_number: "تکایە ژمارە موبایلێک بنووسە",
      no_favorite_books_here: "هیچ کتێبێکی دڵخوازت نییە",
      your_Favorite_Books_Are_Here: "کتێبە دڵخوازەکانت لێرەن",
      book_title: "ناوی کتێب",
      select_genres: "جۆرەکان دیاری بکە",
      description: "دەربارەی کتێبەکە",
      upload_book_cover: "دانانی وێنەی کتێب",
      are_you_donating_this_book: "ئایا ئەم کتێبە دەبەخشی؟",
      add_a_book: "کتێب زیاد بکە",
      add_book: "زیاد کردن",
      update_book_detail: "نوێکردنەوەی زانیاری کتێبەکە",
      update_book: "نوێکردنەوەی کتێب",
      add_images_from_the_book: "زیادردکنی وێنە بۆ کتێبەکە",
      add_images: "وێنە زیاد بکە",
      my_books: "کتێبەکانم",
      user_info: "زانیاری بەکارهێنەر",
    },
  },
  ar: {
    translation: {
      sign_in: "تسجيل الدخول",
      sign_in_button: "تسجيل الدخول",
      sign_up_button: "إنشاء حساب",
      "don't_have_an_account": "أليس لديك حساب؟",
      already_have_an_account: "هل لديك حساب؟",
      sign_up: "! أنشئ حساباً جديداً",
      sign_out: "تسجيل خروج",
      or: "أو",
      show: "اظهار",
      hide: "اخفاء",
      email: "البريد الالكتروني",
      password: "كلمة المرور",
      username: "اسم االمستخدم ",
      confirm_password: "تأكيد كلمة المرور",
      terms_and_conditions: "أنا أوافق على الأحكام والشروط",
      about: "لمحة عامة ",
      our_story: "قصتنا ",
      our_team: "فريقُنا ",
      about_header:
        "نحن فريق من المطورين، مهتمون وشغوفون بإنشاء مختلف التقنيات وبنائها. لقد أنشأنا هذا الموقع لمساعدتك في العثور بسهولة على الكتب التي تحتاجها. هدفنا هو تسهيل الحياة للوصول إلى الكتب وإنشاء جيل أفضل ",
      Muhanned: "مهند ",
      Niyaz: "نياز ",
      Rawand: "رواند ",
      Ahmed: "أحمد ",
      Zahraa: "زهراء ",
      trainer: "مدرب",
      developer: "مطور",
      contact_us: "تواصل معنا",
      home: "الصفحة الرئيسية",
      books: "الكتب",
      favourites: "الكتب المفضلة",
      phone_number: "رقم الهاتف",
      never_miss_an_update: "لا تفوتوا التحديثات",
      home_text_1: "تصفّح الكتب، شراؤها أو حتى اقتناؤها مجاناً",
      home_text_2: "Libvery جميعه من  ",
      Libvery: "Libvery ",
      browse: "تصفّح",
      action: "اثارة",
      Action: "اثارة",
      adventure: "مغامرة",
      drama: "دراما",
      comedy: "كوميديا",
      horror: "رعب",
      romance: "رومانسي",
      buy: "شراء",
      search: "بحث",
      prev: "السابق",
      next: "القادم",
      seller_contact: "التواصل مع المالك",
      author: "المؤلف",
      all: "الكل",
      free: "مجاناً",
      genre: "النوع",
      you_have_to: "يجب ",
      to_see_the_seller_contact: "للتواصل مع صاحب الكتاب",
      subscribe_to_our_newsletter: "اشتركوا في نشرتنا الاخبارية",
      upload_photo: "تحميل صورة",
      hello: "مرحبا",
      profile: "الملف الشخصي",
      edit: "تعديل",
      save_changes: " حفظ التغيرات",
      user_info: "معلومات المستخدم",
      my_books: "كتبي",
      name: "الاسم",
      please_add_a_phone_number: "الرجاء اضافة رقم هاتف",
      no_favorite_books_here: "لا توجد كتب مفضلة",
      your_Favorite_Books_Are_Here: "كتبك المفضلة هنا",
      book_title: "عنوان الكتاب",
      price: "السعر",
      select_genres: "اختر النوع",
      description: "شرح موجز عن الكتاب",
      upload_book_cover: "تحميل صورة الغلاف",
      are_you_donating_this_book: "هل هذا الكتاب للتبرع؟",
      add_a_book: "اضافة كتاب",
      add_book: "اضف الكتاب",
      update_book_detail: "تعديل معلومات الكتاب",
      update_book: "تعديل الكتاب",
      add_images_from_the_book: "إضافة صور من الكتاب",
      add_images: "إضافة الصور  ",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    supportedLngs: ["en", "ar", "ku"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

export default i18n;
