let playSpeed = document.getElementById('playspeed');
let faster = document.getElementById('faster');
let slower = document.getElementById('slower');
let standard = document.getElementById('normal');

faster.addEventListener('click', () => {changeSpeed('faster')});
slower.addEventListener('click', () => {changeSpeed('slower')});
standard.addEventListener('click', () => {changeSpeed('standard')});

function getSpeed(){
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params,  (tab) => {currentSpeed(tab)});

  function currentSpeed(tab) {
    console.log('CurrentSpeed');
    chrome.tabs.sendMessage(tab[0].id, 'getSpeed', (resp) => {
      if(resp !== undefined){
        playSpeed.innerHTML = resp;
      }
    })
  }
}

getSpeed();


function changeSpeed(speed){
  console.log('Speed!', speed);
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params,  (tab) => {gotTab(tab, speed)});

  function gotTab(tab, speed) {
    let message = speed;
    console.log('Got Tab!', tab[0].id);
    chrome.tabs.sendMessage(tab[0].id, message, (resp) => { 
      if(resp !== undefined){
        playSpeed.innerHTML = resp;
        console.log('Here!');
      }
    })
  }
}