// テーブル作成
const view = document.getElementById("view");
let rows = {};
let row = 0;
let col = 0;

for(let row=0; row<6; ){
	rows[row] = document.createElement("tr");
	view.appendChild(rows[row]);
	for(let col = 0; col<5; ){
		let r = Math.floor(Math.random()*15)+(col*15)+1;
		if(!view.innerHTML.includes(r)){
			let elem = document.createElement("td");
			rows[row].appendChild(elem);
			rows[row].children[col].textContent = r;
			col++;
		}
	}
	row++;
}
rows[0].children[0].textContent = "B";
rows[0].children[1].textContent = "I";
rows[0].children[2].textContent = "N";
rows[0].children[3].textContent = "G";
rows[0].children[4].textContent = "O";
rows[3].children[2].textContent = "free";
rows[3].children[2].setAttribute("class","hit-num");


// 読み上げ表作成
let callList = [];
for(let i=0; i<75; ){
	let r = Math.floor(Math.random()*75)+1;
	if(!callList.includes(r)){
		callList[i] = r;
		i++;
	}
}
let call = 0;


// 読み上げ
const hitNum = document.getElementById("hitNum");
hitNum.addEventListener("click",btn);
function btn(){
	alert(`数字は${callList[call]}番です！`);
	bingo(callList[call]);
	call++;
}


// 楽しいビンゴ！チェック
let calledRow = {};
let calledCol = {};
for(let i=0; i<5; i++){
	calledRow[i] = 0;
	calledCol[i] = 0;
}
calledRow[2] = 1;
calledCol[2] = 1;
function bingo(int){
	for(let i=0; i<5; i++){
		for(let j=0; j<5; j++){
			if(parseInt(rows[i+1].children[j].textContent) === int){
				calledRow[i] += 1;
				calledCol[j] += 1;
				rows[i+1].children[j].setAttribute("class","hit-num"); 
				alert("hit");
				if(calledRow[i] === 5 || calledCol[j] === 5 ||
					(rows[1].children[0].getAttribute("class") &&
					 rows[2].children[1].getAttribute("class") &&
					 rows[4].children[3].getAttribute("class") &&
					 rows[5].children[4].getAttribute("class")) ||
					
					(rows[1].children[4].getAttribute("class") &&
					 rows[2].children[3].getAttribute("class") &&
					 rows[4].children[1].getAttribute("class") &&
					 rows[5].children[0].getAttribute("class")) ){
					
					alert("BINGO!!");
				}
			}
		}
	}
}

