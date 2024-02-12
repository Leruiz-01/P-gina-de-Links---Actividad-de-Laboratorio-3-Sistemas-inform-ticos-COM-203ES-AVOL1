document.addEventListener('DOMContentLoaded', function(){
updateTime();
setInterval(updateTime, 1000);
});


function updateTime(){
const now = new Date();
document.getElementById('time').textContent = now.toLocaleString();

}