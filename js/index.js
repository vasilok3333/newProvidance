// Hamburger

const anchors = document.querySelectorAll('a[href^="#"]')
// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault() // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') && anchor.href.length > 1 ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

const HAMBURGER = document.getElementById('hamburger');
const HAMBURGER_MENU = document.getElementById('hamburger_menu');
const HAMBURGER_CLOSE = document.getElementById('hamburger_close');
const HAMBURGER_ITEMS = document.getElementsByClassName('hamb__item');
const HAMBURGER_BUTTON = document.getElementsByClassName('navbar__button')
HAMBURGER.addEventListener('click', () => {
    HAMBURGER_MENU.classList = ('hamburger-menu show');
});

HAMBURGER_CLOSE.addEventListener('click', () => {
    HAMBURGER_MENU.classList = ('hamburger-menu');
});

for (let i = 0; i < HAMBURGER_ITEMS.length; i++) {
    HAMBURGER_ITEMS[i].addEventListener('click', () => {
        HAMBURGER_MENU.classList = ('hamburger-menu');
    })
}

HAMBURGER_ITEMS[0].addEventListener('click', () => {
    HAMBURGER_MENU.classList = ('hamburger-menu');
})

for (let i = 0; i < HAMBURGER_BUTTON.length; i++) {
    HAMBURGER_BUTTON[i].addEventListener('click', () => {
        HAMBURGER_MENU.classList = ('hamburger-menu');
    })
}

// Hamburger

// Toggle for navbar

window.addEventListener('scroll', () => {
    const NAVBAR_CONTAINER = document.getElementsByClassName('navbar');
    NAVBAR_CONTAINER[0].classList.toggle('sticky', window.scrollY > 50);
})

// Toggle for navbar

// Add toggle fucntion for changing classes in plan section

const CHANGE_COMPANY_FOCUS = () => {
    COMPANY.classList = ('plan__toggle-focused');
    INDIVIDUAL.classList = ('plan__toggle-unfocused');
}

const CHANGE_INDIVIDUAL_FOCUS = () => {
    COMPANY.classList = ('plan__toggle-unfocused');
    INDIVIDUAL.classList = ('plan__toggle-focused');
}

const INDIVIDUAL = document.getElementById('individual__toggle')
const COMPANY = document.getElementById('company__toggle')

COMPANY.onclick = CHANGE_COMPANY_FOCUS;
INDIVIDUAL.onclick = CHANGE_INDIVIDUAL_FOCUS;

// Add toggle fucntion for changing classes in plan section

// Add toggle fucntion for changing classes in plan section (cards)

const CHANGE_STARTER_FOCUS = () => {
    PRO.classList = ('plan__item');
    PRO_BUTTON.classList = ('plan__item-confirm')
    STARTER.classList = ('plan__item plan__item-focused');
    STARTER_BUTTON.classList = ('plan__item-confirm plan__item-confirm-focused');
}

const CHANGE_PRO_FOCUS = () => {
    STARTER.classList = ('plan__item');
    STARTER_BUTTON.classList = ('plan__item-confirm')
    PRO.classList = ('plan__item plan__item-focused');
    PRO_BUTTON.classList = ('plan__item-confirm plan__item-confirm-focused');
}

const STARTER = document.getElementById('starter__toggle')
const PRO = document.getElementById('pro__toggle')

const STARTER_BUTTON = document.getElementById('started__button')
const PRO_BUTTON = document.getElementById('pro__button')

STARTER.onclick = CHANGE_STARTER_FOCUS;
PRO.onclick = CHANGE_PRO_FOCUS;

// Add toggle fucntion for changing classes in plan section (cards)

// Form get app request

const GETAPP_INPUT = document.getElementsByClassName('buy__field-input');
const GETAPP_BUTTON = document.getElementsByClassName('buy__field');

let getAppValue = '';
let getAppId = 1;

GETAPP_INPUT[0].addEventListener('input', () => getAppValue = GETAPP_INPUT[0].value);

GETAPP_BUTTON[0].onsubmit = e => {
    e.preventDefault();
    function validateEmail(em) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(em).toLowerCase());
    }
    if (validateEmail(getAppValue)) {
        let subData = {
            email: getAppValue,
            id: getAppId
        };
        alert(JSON.stringify(subData));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            body: JSON.stringify(subData)
        }).then(res => console.log(res))
            .then(() => {
                console.log('Fetch method is done');
                subId++;
                GETAPP_INPUT[0].value = '';
            })
            .catch(error => console.log(error))
    } else console.log('Wrong email adress (example: something@gmail.com)');
};

// Form get app request

// Form subscribe request

const SUBSCRIBE_INPUT = document.getElementsByClassName('subscribe__field-input');
const SUBSCRIBE_BUTTON = document.getElementsByClassName('subscribe__field');

let subscribeValue = '';
let subId = 1;

SUBSCRIBE_INPUT[0].addEventListener('input', () => subscribeValue = SUBSCRIBE_INPUT[0].value);

SUBSCRIBE_BUTTON[0].onsubmit = e => {
    e.preventDefault();
    function validateEmail(em) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(em).toLowerCase());
    }
    if (validateEmail(subscribeValue)) {
        let subData = {
            email: subscribeValue,
            id: subId
        };
        alert(JSON.stringify(subData));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            body: JSON.stringify(subData)
        }).then(res => console.log(res))
            .then(() => {
                console.log('Fetch method is done');
                subId++;
                SUBSCRIBE_INPUT[0].value = '';
            })
            .catch(error => console.log(error))
    } else console.log('Wrong email adress (example: something@gmail.com)');
};

// Form subscribe request

// Preloader 

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(600).fadeOut('slow');
});

// Preloader