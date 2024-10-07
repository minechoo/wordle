const 정답 = 'APPLE';
let index = 0;
let attempts = 0;
let timer;

function appStart() {
	const displayGameover = () => {
		const div = document.createElement('div');
		div.innerText = '게임이 종료되었습니다';
		div.style =
			'display:flex; justify-content: center; align-items: center; position:absolute; top: 20vh; left:46vw; background: white; width:200px; height:70px;';
		document.body.appendChild(div);
	};
	const nextLine = () => {
		if (attempts === 6) return gaameover();
		attempts += 1;
		index = 0;
	};
	const gaameover = () => {
		window.removeEventListener('keydown', handleKeyDown);
		displayGameover();
		clearInterval(timer);
	};
	const hadleEnterKey = () => {
		let 맞은_갯수 = 0;
		for (let i = 0; i < 5; i++) {
			const block = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
			console.log(block.innerText);
			const 입력한_글자 = block.innerText;
			const 정답_글자 = 정답[i];
			if (입력한_글자 === 정답_글자) {
				맞은_갯수 += 1;
				block.style.background = '#6aaa64';
			} else if (정답.includes(입력한_글자)) block.style.background = '#c9b458';
			else block.style.background = '#787c7e';
			block.style.color = 'white';
		}
		if (맞은_갯수 === 5) gaameover();
		else nextLine();
	};

	const handleBackspace = () => {
		if (index > 0) {
			const preBlock = document.querySelector(`.board-block[data-index='${attempts}${index - 1}']`);
			preBlock.innerText = '';
		}
		if (index !== 0) index -= 1;
	};
	const handleKeyDown = (event) => {
		//console.log(event.key, event.keyCode);
		console.log('키가 입력', event.key);
		const key = event.key.toUpperCase();
		const keyCode = event.keyCode;
		const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index}']`);

		if (event.key === 'Backspace') handleBackspace();
		else if (index === 5) {
			if (event.key === 'Enter') hadleEnterKey();
			else return;
		} else if (65 <= keyCode && keyCode <= 90) {
			thisBlock.innerText = key;
			index++;
		}
	};

	const startTimer = () => {
		const 시작_시간 = new Date();

		function setTime() {
			const 현재_시간 = new Date();
			const 흐른_시간 = new Date(현재_시간 - 시작_시간);
			const 분 = 흐른_시간.getMinutes().toString().padStart(2, '0');
			const 초 = 흐른_시간.getSeconds().toString().padStart(2, '0');
			const timeDiv = document.querySelector('#timer');
			timeDiv.innerText = `${분}:${초}`;
		}

		timer = setInterval(setTime, 1000);
	};

	startTimer();
	window.addEventListener('keydown', handleKeyDown);
}
appStart();
