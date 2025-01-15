const btn = document.getElementById('btn');
const Warning = document.querySelector('.warning');
const input = document.getElementById('input');
const keys = {
    q : document.getElementById('q'),
    w : document.getElementById('w'),
    e : document.getElementById('e'),
    r : document.getElementById('r'),
    t : document.getElementById('t'),
    y : document.getElementById('y'),
    u : document.getElementById('u'),
    i : document.getElementById('i'),
    o : document.getElementById('o'),
    p : document.getElementById('p'),
    a : document.getElementById('a'),
    s : document.getElementById('s'),
    d : document.getElementById('d'),
    f : document.getElementById('f'),
    g : document.getElementById('g'),
    h : document.getElementById('h'),
    j : document.getElementById('j'),
    k : document.getElementById('k'),
    l : document.getElementById('l'),
    z : document.getElementById('z'),
    x : document.getElementById('x'),
    c : document.getElementById('c'),
    v : document.getElementById('v'),
    b : document.getElementById('b'),
    n : document.getElementById('n'),
    m : document.getElementById('m'),
    Enter: document.querySelector('.enter')
};
const words = ["kitob", "salom", "yozmoq", "dunyo", "inson", "ta'lim", "ilm", "yaxshi", "qiziqarli", "dost", 
"hayot", "mehr", "ona", "ota", "farzand", "kulgu", "sevgi", "tabiat", "quyosh", "yulduz", 
"osmon", "kitobxon", "dastur", "kompyuter", "internet", "ma'lumot", "tushuncha", "fikr", 
"loyiha", "quvonch", "maqola", "erkinlik", "fikrlash", "sayohat", "dars", "oqish", "ijod", 
"yutuq", "texnologiya", "maqsad", "orzu", "motivatsiya", "innovatsiya", "mashina", "robot", 
"kodlash", "alifbo", "dono", "bilimdon", "kuch", "vatan", "xalq", "til", "madaniyat", "sanat", 
"sport", "futbol", "kitoblar", "robototexnika", "elektronika", "programmalash", "sayt", 
"mobil", "kompyuterlar", "dasturlash", "matematika", "fizika", "kimyo", "biologiya", "psixologiya", 
"tarix", "geografiya", "fan", "sinf", "o'quvchi", "talaba", "professor", "ustoz", "nazariya", 
"tajriba", "innovatsiyalar", "muammo", "yechim", "yozish", "tarbiyalash", "foyda", "axborot", 
"tizim", "raqam", "samaradorlik", "loyihalar", "fikrlar", "muvaffaqiyat", "ijtimoiy", 
"aloqa", "oila", "muqaddas", "axloq", "zamonaviy", "texnologiyalar", "dunyoqarash", 
"tahlil", "fikrlovchi", "dizayn", "grafika", "she'riyat", "adabiyot", "tasvir", "rassom", 
"kitobxonlik", "axborotlar", "protsessor", "algoritm", "tarmoq", "orgatish", "progres", 
"strategiya", "muallif", "tasviriy", "san'atkor", "o'qituvchi", "texnik", "soha", 
"yoshlar", "ijodiy", "tasavvur", "intilish", "ilmiy", "kashfiyot", "tajriba", "tadqiqot", 
"stimul", "qaror", "bosqich", "kod", "ma'ruza", "maqsadlar", "andaza", "platforma", 
"hisoblash", "ma'lumotlar", "chizma", "bo'sh vaqt", "taraqqiyot", "rivojlanish", "hissiyot", 
"baxt", "qo'llanma", "ishonch", "yutuqlar", "tadbir", "tajribalar", "tasdiq", "hujjat", 
"muloqot", "maqsadga", "erishish", "boshlash", "qiyinchiliklar", "g'alaba", "o'zgarish", 
"metodika", "usul", "yechimlar", "ijodkorlik", "masofa", "modda", "energiya", "ilm-fan", 
"amaliy", "matn", "ish", "so'z", "birikma", "ijodkor", "tushunish", "eslab", "yozuv", 
"she'r", "qo'shiq", "kitoblarim", "baxtiyor", "bahor", "qish", "yoz", "kuz", "tabassum", 
"kulish", "bola", "orgatuvchi", "kurs", "platformalar", "vizual", "konikma", "sozlashuv", 
"esdalik", "tashkilot", "oqitish", "metod", "ichki", "xarakter", "bozor", "samarali", 
"raqobat", "boshqarish", "tasavvur", "psixologlar", "doira", "jarayon", "ishlab", "chiqarish", 
"trening", "xususiyat", "yordam", "bo'lim", "nashr", "ijodlar", "yashash", "yer", "xalqaro", 
"tilshunoslik", "tuzilma", "natija", "hamkorlik", "axborotlar", "savol", "javob", "qoida", 
"imkoniyat", "natijalar", "davra", "tanishish", "aloqa", "munosabat", "ixtiro", "yangi", 
"yil", "hayotiy", "darslik", "manba", "sifat", "ichida", "mahsulot", "odamlar", "mahorat", 
"malaka", "imkon", "hamkor", "platforma", "sohalar", "turli", "mavzular", "jamoa", "musobaqa", 
"tadqiqotlar", "kitobxonlar", "o'qimishli", "hayrat", "fanlar", "ilmiy", "kashfiyotlar", 
"ishonchli", "natijalari", "o'qib", "o'rgangan", "texnika", "uskunalar", "eksperiment", 
"yutuqli", "foydali", "natijalar", "kichik", "tizimlar", "yaxshi", "sifatli", "tejamkor", 
"manbalar", "ishlar", "uy", "oila", "to'garak", "qo'llab", "quvvat", "kashfiyotchi", 
"maxsus", "platformalari", "model", "tanlov", "musobaqalar", "foydalar", "kurslar", "hisob", 
"statistika", "asosiy", "kuchli", "faoliyat", "kuzatuv", "insoniyat", "sog'lik", "salomatlik", 
"muomala", "xulq", "tarbiya", "umumiy", "asoslar", "hayotda", "erkin", "shaxs", "rivoj", 
"qilish", "boshlovchi", "samarador", "ishonuvchan", "yechimlar", "dasturiy", "taminot", 
"resurs", "tahlillar", "boshqaruv", "yangilik", "texnologik", "taraqqiy", "zamon", "samarali", 
"o'zgarishlar", "metodlar", "davlat", "ijtimoiy", "tasdiqlash", "oz", "tanlovlar", "oqishlar", 
"maslahat", "munosib", "ta'rif", "tarixiy", "vositalar", "ko'rish", "tushunish", "natijalari", "tush", "tong", "yulduzlar", "yo'l", "uyqu", "to'lqin", "daryo", "ko'l", "qush", "momaqaldiroq",
"chaqmoq", "shamol", "yog'in", "qor", "yomg'ir", "soy", "tog'", "cho'l", "o'rmon", "dala",
"gullar", "anhor", "botqoqlik", "ovoz", "sas", "jimlik", "shovqin", "qadam", "iz", "barg",
"novda", "shox", "archa", "tol", "qaldirg'och", "turna", "qizil", "ko'k", "yashil", "sariq",
"oq", "qora", "kulrang", "pushti", "to'q", "och", "moychechak", "lola", "atirgul", "zambak",
"gulxayri", "sabzi", "piyoz", "sarimsoq", "kartoshka", "pomidor", "bodring", "sholg'om",
"behi", "qovun", "tarvuz", "olma", "anor", "uzum", "shaftoli", "o'rik", "nok", "gilos",
"do'lana", "xurmo", "g'o'za", "paxta", "somon", "bug'doy", "jigarrang", "chinnigullar",
"qayroq", "tosh", "sohil", "qum", "cho'g'", "kul", "uzuk", "marjon", "zanjir", "bilakuzuk",
"suv", "oquvchi", "toza", "shirin", "tuzli", "achchiq", "sirli", "topishmoq", "javon", "kitobxona",
"o'ng", "chap", "yuqori", "past", "orqa", "old", "yo'nalish", "uzun", "qisqa", "keng", "tor",
"katta", "kichik", "mayda", "og'ir", "yengil", "tez", "sekin", "ishonch", "o'zgacha", "yangi",
"tanish", "notanish", "yaqin", "uzoqlashmoq", "quchoqlamoq", "erkak", "ayol", "bola", "chaqaloq",
"katta yoshli", "yoshi ulug'", "yurak", "ong", "aql", "tafakkur", "idrok", "yod", "farqlash",
"tasavvur", "zamon", "dono", "sabrsiz", "tinch", "serharakat", "og'ir-bosiq", "hayajon",
"sevimli", "ta'limli", "nafis", "fursat", "xotira", "tarovat", "yaratuvchi", "aniq", "noaniq",
"rang-barang", "bir xil", "ajoyib", "sodda", "osoyishta", "hayratlanarli", "o'tmish",
"kelajak", "hozirgi", "maxfiy", "ochiq", "oddiy", "murakkab", "mos", "moslamoq", "qiziqmoq",
"bilmoq", "anglamoq", "topmoq", "o'rganmoq", "tasdiqlamoq", "baholamoq", "tanqid", "maqtov",
"asos", "yon", "qanot", "ko'z", "quloq", "burun", "og'iz", "tish", "soch", "bo'yin", "qo'l",
"bosh", "oyoq", "tizza", "barmoq", "tirnoq", "ko'krak", "nafas", "yuz", "erkaklar", "ayollar",
"jins", "yashil daraxt", "qorong'u", "yorug'", "jonivor", "hayvon", "mushuk", "it", "quyon",
"tovuq", "qo'y", "echki", "sigir", "ot", "tulki", "bo'ri", "qo'riq", "qishloq", "shahar",
"hovli", "binolar", "tunnel", "ko'cha", "maydon", "ko'prik", "joy", "mavze", "hudud",
"viloyat", "davlat", "mamlakat", "xorij", "sayohatchi", "ekspert", "yo'nalishlar", "manzil",
"ochmoq", "bermoq", "yopmoq", "ko'tarmoq", "qisqartirmoq", "yetkazmoq", "bosmoq", "siljitmoq",
"o'girmoq", "sozlamoq", "tuymo", "buzmoq", "xizmat", "turar", "joylashmoq", "ajratmoq",
"birlashtirmoq", "saqlamoq", "ishlatmoq", "yopishtirmoq", "o'chirmoq", "yoqmoq", "tozalamoq",
"matnlar", "xabarlar", "elonlar", "fikrlar", "xotiralar", "tuzilmalar", "yozuvlar", "ifodalar",
"izlanmoq", "bahslashmoq", "gaplashmoq", "so'rash", "aytmoq", "javob bermoq", "kulmoq",
"qahqaha", "ko'rmoq", "eshitmoq", "sezmoq", "his qilmoq", "tatib ko'rmoq", "tatbiq", "yaxlit",
"bo'lak", "parcha", "umumiylik", "xususiyat", "moda", "uslub", "qulaylik", "estetika", "ko'rinish",
"ifoda", "mavzu", "yozuv", "namuna", "sifat", "holat", "ijodiyot", "yoqimli", "ko'ngilxushlik",
"esdalik", "kelib chiqmoq", "xabarlar", "umid", "islohotlar", "tizimlar", "boshqarma", "platformalar",
"jamiyatlar", "axborot tizimi", "integratsiya", "maqsadga erishmoq", "muvaffaqiyatli", "tarqatmoq",
"bo'limlar", "muhokama", "konferensiya", "tanlovlar", "tartib", "samarador", "xulosa", "jarayonlar",
"innovatsiya", "erkinlikka", "tinchlik", "kelishmoq", "baholash", "maqsadlar", "imkoniyatlar",
"ijodiy fikr", "vaqtinchalik", "mavjudlik", "tasavvurlar", "mehnat qilish", "natija olish",
"tartibga solish", "tuzatish", "ma'qullash", "tasdiq olish", "xarajatlar", "foyda olish",
"mashg'ulotlar", "ijodiy ishlar", "texnik yordam", "vazifalar", "tuzilish", "samarali yechimlar",
"munosabat", "mustahkam", "jamoat", "jamoa bo'lib", "natijadorlik", "resurslarni", "yashil",
"ekologiya", "resurslardan foydalanish", "tabiiy boyliklar", "ijodiy yo'nalishlar", "kasbiy",
"malakalar", "sog'lom turmush tarzi", "salomatlikni saqlash", "barkamollik", "uyg'unlik",
"ijodkorlik bilan shug'ullanish", "aql-idrokni rivojlantirish", "yo'l-yo'riq", "mas'uliyat",
"ijtimoiy qadriyatlar", "tarixiy bilimlar", "ilmiy maqolalar", "texnologik yutuqlar", "umumiylik",
"rivojlantirish", "yangilanishlar", "ijtimoiy tarmoqlar", "dunyoviy bilimlar", "muloqot qilish",
"xotira yodgorliklari", "muayyan", "aniqlik", "ijtimoiy yordam", "tahliliy fikrlar", "tushunchalarni" 
]



window.addEventListener('keydown', function(event) {
    const key = event.key;
    if(key === 'q' || key === 'Q'){
        keys.q.style.background = '#226592';
        this.setTimeout(() =>{
            keys.q.style.background = '#3498db'
        },100)
    }if(key === 'w' || key === 'W'){
        keys.w.style.background = '#226592';
        this.setTimeout(() =>{
            keys.w.style.background = '#3498db'
        },100)
    }if(key === 'e' || key === 'E'){
        keys.e.style.background = '#226592';
        this.setTimeout(() =>{
            keys.e.style.background = '#3498db'
        },100)
    }if(key === 'r' || key === 'R'){
        keys.r.style.background = '#226592';
        this.setTimeout(() =>{
            keys.r.style.background = '#3498db'
        },100)
    }if(key === 't' || key === 'T'){
        keys.t.style.background = '#226592';
        this.setTimeout(() =>{
            keys.t.style.background = '#3498db'
        },100)
    }if(key === 'y' || key === 'Y'){
        keys.y.style.background = '#226592';
        this.setTimeout(() =>{
            keys.y.style.background = '#3498db'
        },100)
    }if(key === 'u' || key === 'U'){
        keys.u.style.background = '#226592';
        this.setTimeout(() =>{
            keys.u.style.background = '#3498db'
        },100)
    }if(key === 'i' || key === 'I'){
        keys.i.style.background = '#226592';
        this.setTimeout(() =>{
            keys.i.style.background = '#3498db'
        },100)
    }if(key === 'o' || key === 'O'){
        keys.o.style.background = '#226592';
        this.setTimeout(() =>{
            keys.o.style.background = '#3498db'
        },100)
    }if(key === 'p' || key === 'P'){
        keys.p.style.background = '#226592';
        this.setTimeout(() =>{
            keys.p.style.background = '#3498db'
        },100)
    }if(key === 'a' || key === 'A'){
        keys.a.style.background = '#226592';
        this.setTimeout(() =>{
            keys.a.style.background = '#3498db'
        },100)
    }if(key === 's' || key === 'S'){
        keys.s.style.background = '#226592';
        this.setTimeout(() =>{
            keys.s.style.background = '#3498db'
        },100)
    }if(key === 'd' || key === 'D'){
        keys.d.style.background = '#226592';
        this.setTimeout(() =>{
            keys.d.style.background = '#3498db'
        },100)
    }if(key === 'f' || key === 'F'){
        keys.f.style.background = '#226592';
        this.setTimeout(() =>{
            keys.f.style.background = '#3498db'
        },100)
    }if(key === 'g' || key === 'G'){
        keys.g.style.background = '#226592';
        this.setTimeout(() =>{
            keys.g.style.background = '#3498db'
        },100)
    }if(key === 'h' || key === 'H'){
        keys.h.style.background = '#226592';
        this.setTimeout(() =>{
            keys.h.style.background = '#3498db'
        },100)
    }if(key === 'j' || key === 'J'){
        keys.j.style.background = '#226592';
        this.setTimeout(() =>{
            keys.j.style.background = '#3498db'
        },100)
    }if(key === 'k' || key === 'K'){
        keys.k.style.background = '#226592';
        this.setTimeout(() =>{
            keys.k.style.background = '#3498db'
        },100)
    }if(key === 'l' || key === 'L'){
        keys.l.style.background = '#226592';
        this.setTimeout(() =>{
            keys.l.style.background = '#3498db'
        },100)
    }if(key === 'z' || key === 'Z'){
        keys.z.style.background = '#226592';
        this.setTimeout(() =>{
            keys.z.style.background = '#3498db'
        },100)
    }if(key === 'x' || key === 'X'){
        keys.x.style.background = '#226592';
        this.setTimeout(() =>{
            keys.x.style.background = '#3498db'
        },100)
    }if(key === 'c' || key === 'C'){
        keys.c.style.background = '#226592';
        this.setTimeout(() =>{
            keys.c.style.background = '#3498db'
        },100)
    }if(key === 'v' || key === 'V'){
        keys.v.style.background = '#226592';
        this.setTimeout(() =>{
            keys.v.style.background = '#3498db'
        },100)
    }if(key === 'b' || key === 'B'){
        keys.b.style.background = '#226592';
        this.setTimeout(() =>{
            keys.b.style.background = '#3498db'
        },100)
    }if(key === 'n' || key === 'N'){
        keys.n.style.background = '#226592';
        this.setTimeout(() =>{
            keys.n.style.background = '#3498db'
        },100)
    }if(key === 'm' || key === 'M'){
        keys.m.style.background = '#226592';
        this.setTimeout(() =>{
            keys.m.style.background = '#3498db'
        },100)
    }if(key === 'Enter'){
        keys.Enter.style.background = '#226592';
        this.setTimeout(() =>{
            keys.Enter.style.background = '#3498db'
        },100)
    }
});

function dev(){
    keys.q.addEventListener('click', ()=>{
        keys.q.style.background = '#226592';
        setTimeout(() =>{
            keys.q.style.background = '#3498db'
        },75);
    });
    keys.w.addEventListener('click', () => {
        keys.w.style.background = '#226592';
        this.setTimeout(() =>{
            keys.w.style.background = '#3498db'
        },75)
    })

    keys.e.addEventListener('click', () => {
        keys.e.style.background = '#226592';
        this.setTimeout(() =>{
            keys.e.style.background = '#3498db'
        },75)
    })

    keys.r.addEventListener('click', () => {
        keys.r.style.background = '#226592';
        this.setTimeout(() =>{
            keys.r.style.background = '#3498db'
        },75)
    })

    keys.t.addEventListener('click', () => {
        keys.t.style.background = '#226592';
        this.setTimeout(() =>{
            keys.t.style.background = '#3498db'
        },75)
    })

    keys.y.addEventListener('click', () => {
        keys.y.style.background = '#226592';
        this.setTimeout(() =>{
            keys.y.style.background = '#3498db'
        },75)
    })

    keys.u.addEventListener('click', () => {
        keys.u.style.background = '#226592';
        this.setTimeout(() =>{
            keys.u.style.background = '#3498db'
        },75)
    })

    keys.i.addEventListener('click', () => {
        keys.i.style.background = '#226592';
        this.setTimeout(() =>{
            keys.i.style.background = '#3498db'
        },75)
    })

    keys.o.addEventListener('click', () => {
        keys.o.style.background = '#226592';
        this.setTimeout(() =>{
            keys.o.style.background = '#3498db'
        },75)
    })

    keys.p.addEventListener('click', () => {
        keys.p.style.background = '#226592';
        this.setTimeout(() =>{
            keys.p.style.background = '#3498db'
        },75)
    })

    keys.a.addEventListener('click', () => {
        keys.a.style.background = '#226592';
        this.setTimeout(() =>{
            keys.a.style.background = '#3498db'
        },75)
    })

    keys.s.addEventListener('click', () => {
        keys.s.style.background = '#226592';
        this.setTimeout(() =>{
            keys.s.style.background = '#3498db'
        },75)
    })

    keys.d.addEventListener('click', () => {
        keys.d.style.background = '#226592';
        this.setTimeout(() =>{
            keys.d.style.background = '#3498db'
        },75)
    })

    keys.f.addEventListener('click', () => {
        keys.f.style.background = '#226592';
        this.setTimeout(() =>{
            keys.f.style.background = '#3498db'
        },75)
    })

    keys.g.addEventListener('click', () => {
        keys.g.style.background = '#226592';
        this.setTimeout(() =>{
            keys.g.style.background = '#3498db'
        },75)
    })

    keys.h.addEventListener('click', () => {
        keys.h.style.background = '#226592';
        this.setTimeout(() =>{
            keys.h.style.background = '#3498db'
        },75)
    })

    keys.j.addEventListener('click', () => {
        keys.j.style.background = '#226592';
        this.setTimeout(() =>{
            keys.j.style.background = '#3498db'
        },75)
    })

    keys.k.addEventListener('click', () => {
        keys.k.style.background = '#226592';
        this.setTimeout(() =>{
            keys.k.style.background = '#3498db'
        },75)
    })

    keys.l.addEventListener('click', () => {
        keys.l.style.background = '#226592';
        this.setTimeout(() =>{
            keys.l.style.background = '#3498db'
        },75)
    })

    keys.z.addEventListener('click', () => {
        keys.z.style.background = '#226592';
        this.setTimeout(() =>{
            keys.z.style.background = '#3498db'
        },75)
    })

    keys.x.addEventListener('click', () => {
        keys.x.style.background = '#226592';
        this.setTimeout(() =>{
            keys.x.style.background = '#3498db'
        },75)
    })

    keys.c.addEventListener('click', () => {
        keys.c.style.background = '#226592';
        this.setTimeout(() =>{
            keys.c.style.background = '#3498db'
        },75)
    })

    keys.v.addEventListener('click', () => {
        keys.v.style.background = '#226592';
        this.setTimeout(() =>{
            keys.v.style.background = '#3498db'
        },75)
    })

    keys.b.addEventListener('click', () => {
        keys.b.style.background = '#226592';
        this.setTimeout(() =>{
            keys.b.style.background = '#3498db'
        },75)
    })

    keys.n.addEventListener('click', () => {
        keys.n.style.background = '#226592';
        this.setTimeout(() =>{
            keys.n.style.background = '#3498db'
        },75)
    })

    keys.m.addEventListener('click', () => {
        keys.m.style.background = '#226592';
        this.setTimeout(() =>{
            keys.m.style.background = '#3498db'
        },75)
    })

    keys.Enter.addEventListener('click', () => {
        keys.Enter.style.background = '#226592';
        this.setTimeout(() =>{
            keys.Enter.style.background = '#3498db'
        },75)
    })
};

function getRandomWord(wordsArray) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
}
const randomWord = getRandomWord(words);
const upperCaseWord = randomWord.toUpperCase();
const spacedWord = upperCaseWord.split("").join(" ");
const letterWord = spacedWord.length;

for (i = 0;   !i < letterWord; i++) {
    const firstLetter = spacedWord[i];
    console.log(`${spacedWord}, ${firstLetter}`);
}

btn.addEventListener('click', () => {
    Warning.style.display = 'none';
    // input.innerHTML = `${}`
});

dev()