'use strict';

// let elem = document.querySelector('#elem');
// elem.addEventListener('mousemove', function() {
// 	elem.innerHTML = event.clientX + ':' + event.clientY;
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
// function func() {
// 	console.log(event.type)	
// }

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', function(event) {
// 	let elem_target = event.target;
// 	if (elem_target.tagName === 'LI') {
// 		elem_target.textContent += '!'
// 	}
// 	if (elem_target.tagName === 'UL') {
// 		let newLi = document.createElement('LI');
// 		elem_target.appendChild(newLi);
// 		newLi.innerHTML = 'new';
// 	}
// })

// let inp = document.querySelector('#inp')
// let elem = document.querySelector('#elem')
// inp.addEventListener('keypress', () => {
// 	if (event.code === 'Enter') {
// 		console.log(inp.value);
// 		elem.textContent = inp.value;
// 		inp.value = '';
// 	}
// })

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', () => {
// 	if (event.ctrlKey) {
// 		console.log('нажата ctrl');
// 	}
// 	if (event.altKey) {
// 		console.log('нажат alt');
// 	}
// 	if (event.shiftKey) {
// 		console.log('нажат shift');
// 	}
// })

// let elem = document.querySelector('#elem')
// elem.addEventListener('click', () => {	
// 	if (event.altKey) {
// 		elem.style.color = 'red'
// 	}
// 	if (event.ctrlKey) {
// 		elem.style.color = 'green'
// 	}
// 	if (event.shiftKey) {
// 		elem.style.backgroundColor = 'grey'
// 	}
// })

// let elemUl = document.querySelector('#elem');
// elemUl = addEventListener ('click', () => {
// 	let elemLi = event.target;
// 	if (event.altKey) {
// 		elemLi.textContent += '2';
// 	}
// 	if (event.ctrlKey) {
// 		elemLi.textContent += '1';
// 	}
// })

// let link = document.querySelector('#elem')
// link.addEventListener('click', () => {
//     event.preventDefault();
//     console.log('Вы не можете перейти по этой ссылке')
// })

// let link = document.querySelector('#elem')
// link.addEventListener('click', () => {
//     event.preventDefault();
//     link.textContent += ' - ' + link.href
// })

// let link = document.querySelector('#elem')
// let inp1 = document.querySelector('#inp1')
// let inp2 = document.querySelector('#inp2')
// let text = document.querySelector('#text')
// link.addEventListener('click', () => {
//     event.preventDefault();
//     text.textContent = +inp1.value + +inp2.value; 
// })

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой');
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// elem1.addEventListener('mousemove', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('mousemove', function() {
// 	console.log('голубой');
// });
// elem3.addEventListener('mousemove', function() {
// 	console.log('красный');
// });

// let elem = document.querySelector('div');
// elem.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'LI') {
// 		event.target.textContent += '!'
// 	}
// 	if (event.target.tagName === 'UL') {
// 		let newLi = document.createElement('LI'); 
// 		event.target.appendChild(newLi);
// 		newLi.innerHTML = 'new Li';
// 	}
// })


//
// let parent = document.querySelector('#parent');
// let btn = document.querySelector('button');
// let block = document.querySelector('#block');
// btn.addEventListener('click', function(event) {
// 	block.classList.add('active');
// 	event.stopPropagation()
// })
// parent.addEventListener('click', function(){
// 	block.classList.remove('active')
// }) 

//
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// });

//
// elem2.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// 	event.stopImmediatePropagation
// });

//
// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// });

//
// let button = document.querySelector('button');
// let list = document.querySelector('ul');
// let items = list.querySelectorAll('li')

// function handler() {
// 	this.innerHTML = this.innerHTML + '!';
// }
// for (let item of items) {
// 	item.addEventListener('click', handler);
// }
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
	
// 	item.addEventListener('click', handler);
	
// 	list.appendChild(item);
// });

//
// let list = document.querySelector('ul');
// let button = document.querySelector('button');
// list.addEventListener('click', function(event) {
//     event.target.innerHTML += '!';
// })
// button.addEventListener('click', () => {
//     let item = document.createElement('li');
//     item.innerHTML = 'new';
//     list.appendChild(item)
// })

//
// let list = document.querySelector('ul');
// let button = document.querySelector('button');

// list.addEventListener('click', function(event) {
//     event.target.innerHTML += '!';
// })
// button.addEventListener('click', () => {
//     let item = document.createElement('li');
//     item.innerHTML = 'new';
//     list.appendChild(item)
// })

//
// let list = document.querySelector('ul');
// let button = document.querySelector('button');
// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });
// button.addEventListener('click', () => {
//     let item = document.createElement('li');
//     item.innerHTML = 'new';
//     list.appendChild(item)
// })

//
// let list = document.querySelector ('ul');
// let button = document.querySelector ('button');
// button.addEventListener('click', function(event) {
// 	let newLi = document.createElement('li');
// 	newLi.innerHTML = 'new';
// 	list.appendChild(newLi)
// })
// list.addEventListener ('click', function(event) {
// 	let li = event.target.closest('li');
// 	if (li) {
// 		li.innerHTML += '!'
// 	}
// })

// Context
// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// function func() {
// 	console.log(this.value)
// }
// elem1.addEventListener('blur', func)
// elem2.addEventListener('blur', func)

// function func() {
// 	console.log(this); // ссылка на окно window, но в строгом режиме (при use strict) this всегда будет undefined
// }
// func();

// console.log(this) // ссылка на окно window

//
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('blur', parent);
// function parent() {
// 	console.log(this); // выведет ссылку на наш инпут
	
// 	function child() {
// 		console.log(this); // выведет undefined
// 	}
// 	child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // выведет text
	
// 	function child() {
// 		console.log(this.value); // выведет ошибку
// 	}
// 	child();
// }

//
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	let self = this; // 1 способ
// 	alert( square() );
// 	function square() {
// 		return self.value * self.value;
// 	}
// }

//
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	alert( square(this) ); // 2 способ
// 	function square(param) {
// 		return param.value * param.value;
// 	}
// }

//
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {

// 	let child = () => { // 3 способ - стрелочная ф-я
// 		alert (this.value * this.value); 
// 	}
// 	child();
// }

//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3)

//
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname); // hello, John Smit
// }
// func.call(elem, 'Smit', 'John')

//
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname); // hello, John Smit
// }
// func.apply(elem, ['Smit', 'John'])

//
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// let ddfunc = func.bind(elem) // 1 вариант. конструкцию с bind()
// ddfunc('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// ddfunc('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'

//
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func = func.bind(elem) // 2 вариант. конструкцию с bind()
// func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'






























































































































































































