const translations = {
    en: {
        home: "Home",
        features: "Features",
        pricing: "Pricing",
        contact: "Contact",
        getStarted: "Get Started",
        heroTitle: "Customer Reviews You Can Trust",
        heroSubtitle: "Join thousands of businesses using our trusted platform.",
        search: "Search",
        reviewsTitle: "What Our Users Say",
        review1: "“Amazing service, really helpful and quick!”",
        review2: "“The best platform I’ve ever used for reviews.”",
        review3: "“VouchLink helped me grow my business.”",
        about: "About",
        aboutUs: "About us",
        jobs: "Jobs",
        blog: "Blog",
        howItWorks: "How VouchLink works",
        transparency: "Transparency Report",
        press: "Press",
        investorRelations: "Investor Relations",
        community: "Community",
        trustInReviews: "Trust in reviews",
        helpCenter: "Help Center",
        logIn: "Log in",
        signUp: "Sign up",
        businesses: "Businesses",
        business: "VouchLink Business",
        products: "Products",
        plansPricing: "Plans & Pricing",
        businessLogin: "Business Login",
        blogForBusiness: "Blog for Business",
        followUs: "Follow us on",
        chooseCountry: "Choose country",
        legal: "Legal",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        guidelines: "Guidelines for Reviewers",
        systemStatus: "System status",
        cookiePreferences: "Cookie preferences",
        modernSlavery: "Modern Slavery Statement"
    },
    id: {
        home: "Beranda",
        features: "Fitur",
        pricing: "Harga",
        contact: "Kontak",
        getStarted: "Mulai",
        heroTitle: "Ulasan Pelanggan yang Dapat Anda Percaya",
        heroSubtitle: "Bergabunglah dengan ribuan bisnis yang menggunakan platform terpercaya kami.",
        search: "Cari",
        reviewsTitle: "Apa Kata Pengguna Kami",
        review1: "“Layanan yang luar biasa, sangat membantu dan cepat!”",
        review2: "“Platform terbaik yang pernah saya gunakan untuk ulasan.”",
        review3: "“VouchLink membantu saya mengembangkan bisnis saya.”",
        about: "Tentang",
        aboutUs: "Tentang kami",
        jobs: "Pekerjaan",
        blog: "Blog",
        howItWorks: "Cara Kerja VouchLink",
        transparency: "Laporan Transparansi",
        press: "Pers",
        investorRelations: "Hubungan Investor",
        community: "Komunitas",
        trustInReviews: "Percaya pada ulasan",
        helpCenter: "Pusat Bantuan",
        logIn: "Masuk",
        signUp: "Daftar",
        businesses: "Bisnis",
        business: "Bisnis VouchLink",
        products: "Produk",
        plansPricing: "Paket & Harga",
        businessLogin: "Masuk Bisnis",
        blogForBusiness: "Blog untuk Bisnis",
        followUs: "Ikuti kami di",
        chooseCountry: "Pilih negara",
        legal: "Legal",
        privacyPolicy: "Kebijakan Privasi",
        termsConditions: "Syarat & Ketentuan",
        guidelines: "Panduan untuk Pengulas",
        systemStatus: "Status sistem",
        cookiePreferences: "Preferensi cookie",
        modernSlavery: "Pernyataan Perbudakan Modern"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[lang][key];
    });
}

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
