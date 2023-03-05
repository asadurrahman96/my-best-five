
const playersArray = []
function display(cardPlayer){
    const tableBody = document.getElementById('player-list')
    tableBody.innerHTML = '';
    if(cardPlayer.length > 5){
        alert ('already selected five player');

        return tableBody.appendChild(tr)
    }
    for(let i = 0; i < cardPlayer.length; i++ ){
        const name = playersArray[i].playersName
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${i + 1}</th>
        <td>${name}</td>`;
        tableBody.appendChild(tr)
    }
}

function addPlayerCard(element){
    element.disabled = true;
    const playersName = element.parentNode.parentNode.children[0].innerText;
    const playerObject = {playersName:playersName}
    playersArray.push(playerObject);

    document.getElementById('total-count').innerText = playersArray.length;
    display(playersArray);
    
}







// document.getElementById('btn-neymi').addEventListener('click', function(){
    
//     const playerName = document.getElementById('player-name1');
//     const player = playerName.innerText
//     const bestFivePlayer = document.getElementById('best-five1');
//     const bestFive = bestFivePlayer.innerText;
//     bestFivePlayer.innerText = player;
// })


// document.getElementById('btn-messi').addEventListener('click', function(){
    
//     const playerName = document.getElementById('player-name2');
//     const player = playerName.innerText
//     const bestFivePlayer = document.getElementById('best-five2');
//     const bestFive = bestFivePlayer.innerText;
//     bestFivePlayer.innerText = player;
// })


// document.getElementById('btn-ronaldo').addEventListener('click', function(){
    
//     const playerName = document.getElementById('player-name3');
//     const player = playerName.innerText
//     const bestFivePlayer = document.getElementById('best-five3');
//     const bestFive = bestFivePlayer.innerText;
//     bestFivePlayer.innerText = player;
// })


// document.getElementById('btn-ozil').addEventListener('click', function(){
    
//     const playerName = document.getElementById('player-name4');
//     const player = playerName.innerText
//     const bestFivePlayer = document.getElementById('best-five4');
//     const bestFive = bestFivePlayer.innerText;
//     bestFivePlayer.innerText = player;
// })
// document.getElementById('btn-dimaria').addEventListener('click', function(){
    
//     const playerName = document.getElementById('player-name5');
//     const player = playerName.innerText
//     const bestFivePlayer = document.getElementById('best-five5');
//     const bestFive = bestFivePlayer.innerText;
//     bestFivePlayer.innerText = player;
// })



