//homework 5 day1
//task 3.0 Menu data structure//updated task 5.0
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


//console.log("Have a Blessed Day");
//task1.0-1.3
const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
//console.log(backGroundColor)
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

mainEl.classList.add('flex-ctr');
//task 2.0-2.3
const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height ='100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

console.log(topMenuEl)

//task3.1
for (let links of menuLinks){
  let newEl = document.createElement("a");
  newEl.setAttribute("href", links.href);
  newEl.textContent = links.text;
  topMenuEl.appendChild(newEl);
  //
}

//task 4.0-4.3
const subMenuEl = document.getElementById('sub-menu');
//task 4.1
subMenuEl.style.height ='100%';
//task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//task 4.3
subMenuEl.classList.add('flex-around');
//task 4.4
subMenuEl.style.position = 'absolute';
//task 4.5
subMenuEl.top ='0';

console.log(subMenuEl) 
//task 5.1
const topMenuLinks = topMenuEl.getAttribute('a');
let  showingSubMenu = false;
//task 5.2
topMenuEl.addEventListener

 
  }