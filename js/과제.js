function setTime() {
	const 현재_시간 = new Date();
	const 연도 = 현재_시간.getFullYear().toString();
	const 달 = (현재_시간.getMonth() + 1).toString().padStart(2, '0');
	const 날짜 = 현재_시간.getDate().toString().padStart(2, '0');
	const 시간 = 현재_시간.getHours().toString().padStart(2, '0');
	const 분 = 현재_시간.getMinutes().toString().padStart(2, '0');
	const 초 = 현재_시간.getSeconds().toString().padStart(2, '0');
	const timeDiv = document.querySelector('#timer');
	timeDiv.innerText = `${연도}년 ${달}월 ${날짜}일 ${시간}시 ${분}:${초}`;
}

setInterval(setTime, 1000);
setTime();

// setTimeout(function bar() {
// 	console.log('과제');
// 	setTimeout(bar, 1000);
// }, 1000);
