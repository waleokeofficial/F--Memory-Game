document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'berry',
			img: 'images/berry.png'
		},
		{
			name: 'berry',
			img: 'images/berry.png'
		},
		{
			name: 'gift',
			img: 'images/gift.png'
		},
		{
			name: 'gift',
			img: 'images/gift.png'
		},
		{
			name: 'grape',
			img: 'images/grape.png'
		},
		{
			name: 'grape',
			img: 'images/grape.png'
		},
		{
			name: 'papaya',
			img: 'images/papaya.png'
		},
		{
			name: 'papaya',
			img: 'images/papaya.png'
		},
		{
			name: 'tangerine',
			img: 'images/tangerine.png'
		},
		{
			name: 'tangerine',
			img: 'images/tangerine.png'
		},
		{
			name: 'instagram',
			img: 'images/instagram.png'
		},
		{
			name: 'instagram',
			img: 'images/instagram.png'
		}
	]
	cardArray.sort(()  => 0.5 - Math.random());
	var grid = document.querySelector('.grid');
	var cardChosen = [];
	var cardChosenId = [];
	var cardsWon = [];
	const resultDisplay = document.querySelector('#result');
	
	function createBoard(){
			for (i = 0; i < cardArray.length; i++){
			var card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('data-id',  i);
			card.addEventListener('click', flipcard);
			grid.appendChild(card);
		}
	}
	createBoard()


	function flipcard(){
		var cardId = this.getAttribute('data-id');
		cardChosen.push(cardArray[cardId].name);
		cardChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardChosen.length === 2){
			setTimeout(checkMatches, 500);
		}
	}

	function checkMatches(){
		var cards = document.querySelectorAll('img');
		var optionOneId = cardChosenId[0];
		var optionTwoId = cardChosenId[1];
		if (cardChosen[0] === cardChosen[1]){
			 alert('You have a Match!');
			 cards[optionOneId].setAttribute('src', 'images/white.png');
			 cards[optionTwoId].setAttribute('src', 'images/white.png');
			 cardsWon.push(cardChosen);
		}
		else{
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			alert('Sorry, Try again');
		}
		cardChosen = [];
		cardChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length/2){
			alert('Congratulations, You found them all!!!');
		}
	}
})

//console.log('Confirm');


