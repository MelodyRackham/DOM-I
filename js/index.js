const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//Update nav bar
let navBar = document.querySelectorAll('header nav a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

//update h1 "DOM IS AWESOME"
let mainHeader = document.getElementsByTagName('h1');
mainHeader[0].textContent = siteContent['cta']['h1'];

mainHeader[0].setAttribute('style', 'white-space: pre;');
mainHeader[0].textContent = siteContent['cta']['h1'].split(' ').join('\n');

let roundPic = document.getElementById('cta-img');
roundPic.setAttribute('src', siteContent['cta']['img-src']);

let button1 = document.getElementsByTagName('button');
button1[0].textContent = siteContent['cta']['button'];

//update main-content section
let topContent = document.querySelector('.top-content');
topContent.getElementsByClassName('text-content')[0].querySelector('h4').textContent =
  siteContent['main-content']['features-h4'];

topContent.getElementsByClassName('text-content')[1].querySelector('h4').textContent =
  siteContent['main-content']['about-h4'];

topContent.getElementsByClassName('text-content')[0].querySelector('p').textContent =
  siteContent['main-content']['features-content'];

topContent.getElementsByClassName('text-content')[1].querySelector('p').textContent =
  siteContent['main-content']['about-content'];

let snippet = document.getElementById('middle-img');
snippet.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottom = document.querySelector('.bottom-content');

bottom.getElementsByClassName('text-content')[0].querySelector('h4').textContent =
  siteContent['main-content']['services-h4'];

bottom.getElementsByClassName('text-content')[1].querySelector('h4').textContent =
  siteContent['main-content']['product-h4'];

bottom.getElementsByClassName('text-content')[2].querySelector('h4').textContent =
  siteContent['main-content']['vision-h4'];

bottom.getElementsByClassName('text-content')[0].querySelector('p').textContent =
  siteContent['main-content']['services-content'];

bottom.getElementsByClassName('text-content')[1].querySelector('p').textContent =
  siteContent['main-content']['product-content'];

bottom.getElementsByClassName('text-content')[2].querySelector('p').textContent =
  siteContent['main-content']['vision-content'];

//contact section
let contactSection = document.querySelector('.contact');
contactSection.querySelector('h4').textContent = siteContent['contact']['contact-h4'];

let contactArray = ['address', 'phone', 'email'];

let contactParagraph = document.querySelectorAll('.contact p');
contactParagraph.forEach(
  (currentValue, index) => (currentValue.textContent = siteContent.contact[`${contactArray[index]}`]),
);
//footer

let footer = document.getElementsByTagName('footer');
footer[0].textContent = siteContent['footer']['copyright'];

// green nav  bar

const greenNavBar = document.querySelectorAll('a');
greenNavBar.forEach(element => {
  element.style.color = 'green';
});

//  append

const addToNav = document.createElement('nav24');
addToNav.textContent = 'Web24';

const endContents = document.querySelector('nav');
endContents.append(addToNav);

//  prepend

const addToNav2 = document.createElement('navMel');
addToNav2.textContent = 'Mel';

const frontContent = document.querySelector('nav');
frontContent.prepend(addToNav2);

//stretch

const purpleParagraphs = document.querySelectorAll('p');
purpleParagraphs.forEach(element => {
  element.style.color = 'purple';
});

const greenHeaders = document.querySelectorAll('h4');
greenHeaders.forEach(element => {
  element.style.color = 'green';
});
