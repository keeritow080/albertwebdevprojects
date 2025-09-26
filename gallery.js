const  carousel = document.getElementById('carousel');
const prev = document.querySelector('prev');
const next = document.querySelector('next;');

let index= 0;
const total Cards = carousel.children.length;
function getCardWidth(){
	const card = carousel.children[0];
	const style = getComputedStlye(card);
	
