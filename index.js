// Your web app's Firebase configuration
var config = {
    apiKey: 'AIzaSyAf18cmX3bO3XunnumI-oBRbBLbCtX5raQ',
    authDomain: 'contactform-53f22.firebaseapp.com',
    databaseURL: 'https://contactform-53f22.firebaseio.com',
    projectId: 'contactform-53f22',
    storageBucket: 'contactform-53f22.appspot.com',
    messagingSenderId: '158775277794',
    appId: '1:158775277794:web:b66f6080947569e94d86bb',
    measurementId: 'G-KRZF5JXE0Y',
};
// Initialize Firebase
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('ContactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();

    var email = getinputVal('email');
    saveMessage(email);
    document.getElementById('ContactForm').reset();
}
function getinputVal(id) {
    return document.getElementById(id).value;
}
function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
    });
}

//faq
const faqItemHeaders = document.querySelectorAll('.faq-item-header');

faqItemHeaders.forEach((faqItemHeader) => {
    faqItemHeader.addEventListener('click', (event) => {
        const currentlyActivefaqItemHeader = document.querySelector(
            '.faq-item-header.active'
        );
        if (
            currentlyActivefaqItemHeader &&
            currentlyActivefaqItemHeader !== faqItemHeader
        ) {
            currentlyActivefaqItemHeader.classList.toggle('active');
            currentlyActivefaqItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        faqItemHeader.classList.toggle('active');
        const faqItemBody = faqItemHeader.nextElementSibling;
        if (faqItemHeader.classList.contains('active')) {
            faqItemBody.style.maxHeight = faqItemBody.scrollHeight + 'px';
        } else {
            faqItemBody.style.maxHeight = 0;
        }
    });
});
// devfolio registration button

document.addEventListener('DOMContentLoaded', function () {
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'myhackathonkey',
    }

    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function () {
        new Devfolio(devfolioOptions);
    }

    script.onerror = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
        });
    }
});
