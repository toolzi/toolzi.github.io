// const depth01 = document.querySelectorAll('.depth01');
// const depth02 = document.querySelectorAll('.depth02');

// const FRONT = 'front';
// const HIDE = 'hide'

// function setDefault() {
//     depth01.forEach(node => node.id = FRONT)
//     depth02.forEach(node => node.id = HIDE)
// }

// function handleClick(e) {
//     const target = e.target.className

//     depth01.forEach(node01 => {
//         depth02.forEach(node02 => {
//             if (target === 'img01_container') {
//                 node01.id = FRONT
//                 node02.removeAttribute(FRONT)
//                 node02.id = HIDE
//                 node01.removeAttribute(HIDE)
//             } else if (target === 'img02_container') {
//                 node02.id = FRONT
//                 node01.removeAttribute(FRONT)
//                 node01.id = HIDE
//                 node02.removeAttribute(HIDE)
//             }
//         })
//     })
// }

// function init() {
//     setDefault()
//     window.addEventListener('click', handleClick, { capture: true })
// }

// init()
