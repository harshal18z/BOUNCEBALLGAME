let game = new Game('gameArea', {width: 740, height: 460});

window.addEventListener('keydown', (e) => {
	if (e.keyCode === 32 && game.gameOver) {
		const parentElement = document.getElementById(game.containerId);

		while (parentElement.firstChild) {
			parentElement.removeChild(parentElement.firstChild);
		}

		game = new Game('gameArea', {width: 640, height: 360});
	}
});