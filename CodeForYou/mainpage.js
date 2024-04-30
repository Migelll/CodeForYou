const wrapper = document.querySelector('.form-form');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const img = document.getElementById('img');
const yesAudio = document.querySelector('.yes-music');
const noAudio = document.querySelector('.no-music');

const gifs = [
    'gifs/cute-cat.gif',
    'gifs/shrek-shrek-rizz.gif',
]
const questions = [
    'Bakit hindi mo ako gusto?',
    'Anong meron sa akin na hindi mo bet?',
    'May mali ba sa akin?',
    'May hindi ka ba nagustuhan sa akin?',
    'Bakit hindi ka interested?',
    'Hindi ba ako pasok sa standards mo?',
    'Bakit hindi ka attracted sa akin?',
    'Bakit hindi mo ako pinansin?',
    'May problema ba ako?',
    'Bakit hindi mo ako pinapansin?',
    'May mali ba ako?',
    'Bakit hindi mo ako iniisip?',
    'Hindi mo ba ako type?',
    'Bakit hindi mo ako gusto kausap?',
    'May mas maganda/magwapo ka bang gustong kausap?',
    'Bakit hindi mo ako kinakamusta?',
    'May mas importante ka bang iniisip?',
    'Bakit hindi mo ako tinext ulit?',
    'May iba ka bang gusto?',
    'Bakit hindi mo ako sineseryoso?',
    'Bakit hindi mo ako niloloko?',
    'Anong kulang ko?',
    'Bakit hindi mo ako pinapansin?',
    'May mas gusto ka bang kausap?',
    'Bakit hindi mo ako niyayakap?',
    'May mas bet ka bang iba?',
    'Bakit hindi mo ako sinasabayan?',
    'May mas kaibigan ka bang iba?',
    'Bakit hindi mo ako kinalimutan?',
    'May bagong crush ka na ba?',
    'Bakit hindi mo ako inimbita?',
    'May mas type ka bang iba?',
    'Bakit hindi mo ako sinasamahan?',
    'May iba ka bang ka-date?',
    'Bakit hindi mo ako tinuturuan?',
    'Bakit hindi mo ako kaibigan?',
    'May kinaaaliwan ka bang iba?',
    'Bakit hindi mo ako pinapansin?',
    'May ka-ibigan ka bang iba?',
    'Bakit hindi mo ako kinakamusta?',
    'May nililigawan ka bang iba?',
    'Bakit hindi mo ako tinatanong?',
    'May gusto ka bang iba?',
    'Bakit hindi mo ako kinausap?',
    'May iba ka bang napipiling kausap?',
    'Bakit hindi mo ako nilalandi?',
    'May ka-text ka bang iba?',
    'Bakit hindi mo ako inaalagaan?',
    'May iba ka bang kinakasama?',
    'Bakit hindi mo ako niligawan?',
    'May iba ka bang gusto?',
    'Bakit hindi mo ako pinagtatanggol?',
    'May kaaway ka bang iba?',
    'Bakit hindi mo ako inaaway?',
    'May gusto ka bang iba?',
    'Bakit hindi mo ako pinapagalitan?',
    'May iba ka bang pinapaniwalaan?',
    'Bakit hindi mo ako pinipilitan?',
    'May iba ka bang pinag-aawayan?',
    'Bakit hindi mo ako pinagtataguan?',
    'May iba ka bang pinaniniwalaan?',
    'Bakit hindi mo ako sinasakyan?',
    'May iba ka bang kaibigan?',
    'Bakit hindi mo ako sinasamantala?',
    'May iba ka bang kausap?',
    'Bakit hindi mo ako iniingatan?',
    'May iba ka bang iniingatan?',
    'Bakit hindi mo ako iniinspire?',
    'May iba ka bang iniinspira?',
    'Bakit hindi mo ako iniintindi?',
    'May iba ka bang iniintindi?',
    'Bakit hindi mo ako iniiwan?',
    'May iba ka bang iniwan?',
    'Bakit hindi mo ako iniiyakan?',
    'May iba ka bang iniiyakan?',
    'Bakit hindi mo ako inireremind?',
    'May iba ka bang inireremind?',
    'Bakit hindi mo ako inirerespeto?',
    'May iba ka bang inirerespeto?',
    'Bakit hindi mo ako kinakalimutan?',
    'May iba ka bang kinakalimutan?',
    'Bakit hindi mo ako kinakalabit?',
    'May iba ka bang kinakalabit?',
    'Bakit hindi mo ako kinakantaan?',
    'May iba ka bang kinakantaan?',
    'Bakit hindi mo ako kinakarga?',
    'May iba ka bang kinakarga?',
    'Bakit hindi mo ako kinakausap?',
    'May iba ka bang kinakausap?',
    'Bakit hindi mo ako kinakawayan?',
    'May iba ka bang kinakawayan?',
    'Bakit hindi mo ako kinakausap?',
    'May iba ka bang kinakausap?',
    'Bakit hindi mo ako kinakalmot?',
    'May iba ka bang kinakalmot?',
    'Bakit hindi mo ako kinakandado?',
    'May iba ka bang kinakandado?',
    'Bakit hindi mo ako kinakapitan?',
    'May iba ka bang kinakapitan?',
    'Bakit hindi mo ako kinakawawa?',
    'May iba ka bang kinakawawa?',
    'Bakit hindi mo ako kinakaya?',
    'May iba ka bang kinakaya?',
    'Bakit hindi mo ako kinakawayan?',
    'May iba ka bang kinakawayan?',
    'Bakit hindi mo ako kinakagat?',
    'May iba ka bang kinakagat?',
    'Bakit hindi mo ako kinakailangan?',
    'May iba ka bang kinakailangan?'
] 
yesBtn.addEventListener('click', (event) => {
    event.preventDefault();
    question.innerHTML = 'I LOVE YOU';
    yesAudio.play();
});
noBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * questions.length);
    question.innerHTML = questions[randomIndex];
    const randomIndeximage = Math.floor(Math.random() * gifs.length);
    const randomGif = gifs[randomIndeximage];
    img.src = randomGif;
    noAudio.play();
});
