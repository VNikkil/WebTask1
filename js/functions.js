const MainTable = document.querySelector("#grid1");
const Table3 = document.querySelector("#grid2");
const Table2 = document.querySelector("#grid3");
var cells = MainTable.querySelectorAll("td");
var CellsT3 = Table3.querySelectorAll("td");
var CellsT1 = Table2.querySelectorAll("td");
const myAudio = new Audio('audio/poing.mp3');
var HighScores = document.querySelector("#Leaderboard");
var time = HighScores.querySelectorAll("p");
var LeftAnim = document.getElementsByClassName("marqueel");
var ltds = document.querySelectorAll("#left");
var rtds = document.querySelectorAll("#right");

var num = 0;
var difficulty = 0; // 0 - easy , 1 - medium , 2- difficult
var arr = [];
var scores = [1000, 1000, 1000, 1000, 1000, 1000];
var PrevChosen = 0;
var MediumScores = ["first", "second", "third", "fourth", "fifth"];
var DifficultScores = ["one", "two", "three", "four", "five"];
var EasyScores = ["I", "II", "III", "IV", "V"];
var enTryAgain = 1;
var index = 0;




cliq = (cells) =>{

	cells.forEach(function (cell,index)
	{
      cell.addEventListener("click", () => {

	if (cell.innerHTML == PrevChosen + 1) {
		myAudio.play();
		

		if (cell.innerHTML < 16) {
			cell.innerHTML = parseInt(cell.innerHTML) + 25;
			CellsT3[index].innerHTML = cell.innerHTML;
			CellsT1[index].innerHTML = cell.innerHTML;
			temp = cell.innerHTML;
			cell.style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
			CellsT3[index].style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
			CellsT1[index].style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
		} else {
			cell.style.visibility = "hidden";
			CellsT3[index].style.visibility = "hidden";
			CellsT1[index].style.visibility = "hidden";


			if (cell.innerHTML == 40) {
				stop();
				scoreboard();


			}
		}
		PrevChosen++;
	} else {
		stop();
		alert("GAME OVER !!");
		for (let i = 0; i < 25; i++) {
			CellsT3[i].style.visibility = "hidden";
			cells[i].style.visibility = "hidden";
			CellsT1[i].style.visibility = "hidden";
		}
		MainTable.style.backgroundImage = "url('images/gameover.png')";
	}
});

}
	)}

	CliqT3 = (CellsT3) =>{

		CellsT3.forEach(function (cell,index)
		{
		  cell.addEventListener("click", () => {
			  
	
		if (cell.innerHTML == PrevChosen + 1) {
			myAudio.play();
	
			if (cell.innerHTML < 16) {
				cell.innerHTML = parseInt(cell.innerHTML) + 25;
				cells[index].innerHTML = cell.innerHTML;
				CellsT1[index].innerHTML = cell.innerHTML;
				temp = cell.innerHTML;
				cell.style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
				cells[index].style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
				CellsT1[index].style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
			} else {
				cell.style.visibility = "hidden";
				cells[index].style.visibility = "hidden";
				CellsT1[index].style.visibility = "hidden";
	
	
				if (cell.innerHTML == 40) {
					stop();
					scoreboard();
	
	
				}
			}
			PrevChosen++;
		} else {
			stop();
			alert("GAME OVER !!");
			for (let i = 0; i < 25; i++) {
				CellsT3[i].style.visibility = "hidden";
				cells[i].style.visibility = "hidden";
				CellsT1[i].style.visibility = "hidden";
			}
			MainTable.style.backgroundImage = "url('images/gameover.png')";
		}
	});
	
	}
		)}

		CliqT1 = (CellsT1) =>{

			CellsT1.forEach(function (cell,index)
			{
			  cell.addEventListener("click", () => {
				  
		
			if (cell.innerHTML == PrevChosen + 1) {
				myAudio.play();
		
				if (cell.innerHTML < 16) {
					cell.innerHTML = parseInt(cell.innerHTML) + 25;
					cells[index].innerHTML = cell.innerHTML;
					CellsT3[index].innerHTML = cell.innerHTML;
					temp = cell.innerHTML;
					cell.style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
					cells[index].style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
					CellsT3[index].style.backgroundColor = "#fffa" + (130 - temp * 3).toString(16);
				} else {
					cell.style.visibility = "hidden";
					cells[index].style.visibility = "hidden";
					CellsT3[index].style.visibility = "hidden";
		
		
					if (cell.innerHTML == 40) {
						stop();
						scoreboard();
		
		
					}
				}
				PrevChosen++;
			} else {
				stop();
				alert("GAME OVER !!");
				for (let i = 0; i < 25; i++) {
					CellsT3[i].style.visibility = "hidden";
					cells[i].style.visibility = "hidden";
					CellsT1[i].style.visibility = "hidden";
				}
				MainTable.style.backgroundImage = "url('images/gameover.png')";
			}
		});
		
		}
			)}


cliq(cells);
CliqT3(CellsT3);
CliqT1(CellsT1);


function newgame()

{
	
	if (enTryAgain == 1) {
		stop();
		document.getElementById("timer").innerHTML = 0;
		document.querySelector("#newgame").innerHTML = "Try Again";
		enTryAgain = 0;

		for (let i = 0; i < 25; i++) {
			cells[i].style.visibility = "hidden";
			CellsT3[i].style.visibility = "hidden";
			CellsT1[i].style.visibility = "hidden";

		}

		MainTable.style.backgroundImage = "url('images/3.jpg')";
		MainTable.style.backgroundSize = "100% 100%";

		setTimeout(function bg2() {
			MainTable.style.backgroundImage = "url('images/2.jpg')";
			MainTable.style.backgroundSize = "100% 100%";

		}, 1000);

		setTimeout(function bg2() {
			MainTable.style.backgroundImage = "url('images/1.jpg')";
			MainTable.style.backgroundSize = "100% 100%";

		}, 2000);

		setTimeout(function createtable() {
			for (let i = 0; i < 25; i++) {
				cells[i].style.visibility = "visible";
				CellsT3[i].style.visibility = "visible";
				CellsT1[i].style.visibility = "visible";
			}
			
		

			MainTable.style.backgroundImage = "none";

			PrevChosen = 0;


			for (let i = 0; i < 25; i++)
				arr.push(i + 1);


			for (let i = 0; i < 25; i++) {
				let temp = Math.floor(Math.random() * (25 - i));
				cells[i].innerHTML = arr[temp];
				CellsT3[i].innerHTML = cells[i].innerHTML;
				CellsT1[i].innerHTML = cells[i].innerHTML;
				cells[i].style.backgroundColor = "#fffa" + (130 - arr[temp] * 3).toString(16);
				CellsT3[i].style.backgroundColor = "#fffa" + (130 - arr[temp] * 3).toString(16);
				CellsT1[i].style.backgroundColor = "#fffa" + (130 - arr[temp] * 3).toString(16);
				arr.splice(temp, 1);
			}
			start();


		}, 3000);

	}
}

function changeValue() {
	value += 0.003;
	num = value.toFixed(3)
	document.getElementById("timer").innerHTML = num;
	enTryAgain = 1;

}

var timerInterval = null;

function start() {
	stop();
	value = 0;
	timerInterval = setInterval(changeValue, 1);
}
var stop = function () {
	clearInterval(timerInterval);
}

function scoreboard() {

	scores[5] = num;

	scores.sort(function (a, b) {
		return a - b
	});

	for (let i = 0; i < 5; i++) {

		time[i].innerHTML = scores[i];
		time[i].style.visibility = "visible";

		if (scores[i] == 1000 || scores[i] == 0)
			time[i].style.visibility = "hidden";

		if (difficulty == 0) window.localStorage.setItem(EasyScores[i], scores[i]);

		else if (difficulty == 1) window.localStorage.setItem(MediumScores[i], scores[i]);

		else window.localStorage.setItem(DifficultScores[i], scores[i]);
	}
}

function easy() {
	newgame();

	difficulty = 0;

	for (let i = 0; i < 25; i++) {
		cells[i].style.webkitAnimation = "none";
		CellsT1[i].style.webkitAnimation = "none";
		CellsT3[i].style.webkitAnimation = "none";
		cells[i].style.animationPlayState = "paused";
		CellsT1[i].style.animationPlayState = "paused";
		CellsT3[i].style.animationPlayState = "paused";
	}

	for (let i = 0; i < 5; i++)
		if (localStorage.getItem(EasyScores[i])) {
			scores[i] = window.localStorage.getItem(EasyScores[i]);
			time[i].innerHTML = scores[i];
			if (scores[i] == 1000 || scores[i] == 0)
				time[i].style.visibility = "hidden";
		}
}


function medium() {
	newgame();

	difficulty = 1;

	for (let i = 0; i < 25; i++) {
		cells[i].style.webkitAnimation = "";
		CellsT1[i].style.webkitAnimation = "";
		CellsT3[i].style.webkitAnimation = "";
		cells[i].style.animationDuration = "12s";
		CellsT1[i].style.animationDuration = "12s";
		CellsT3[i].style.animationDuration = "12s";
		cells[i].style.animationPlayState = "running";
		CellsT1[i].style.animationPlayState = "running";
		CellsT3[i].style.animationPlayState = "running";
	}

	for (let i = 0; i < 5; i++)
		if (localStorage.getItem(MediumScores[i])) {
			scores[i] = window.localStorage.getItem(MediumScores[i]);
			time[i].innerHTML = scores[i];
			if (scores[i] == 1000 || scores[i] == 0)
				time[i].style.visibility = "hidden";
		}
}


function difficult() {
	newgame();

	difficulty = 2;

	for (let i = 0; i < 25; i++) {
		cells[i].style.webkitAnimation = "";
		CellsT1[i].style.webkitAnimation = "";
		CellsT3[i].style.webkitAnimation = "";
		cells[i].style.animationDuration = "3s";
		CellsT1[i].style.animationDuration = "3s";
		CellsT3[i].style.animationDuration = "3s";
		cells[i].style.animationPlayState = "running";
		CellsT1[i].style.animationPlayState = "running";
		CellsT3[i].style.animationPlayState = "running";

	}

	for (let i = 0; i < 5; i++)
		if (localStorage.getItem(DifficultScores[i])) {
			scores[i] = window.localStorage.getItem(DifficultScores[i]);
			time[i].innerHTML = scores[i];
			if (scores[i] == 1000 || scores[i] == 0)
				time[i].style.visibility = "hidden";

		}

}
