// Write your code here!
let main = document.querySelector('main#main');
main.remove();
let newHeader = document.createElement('h1');
// or_this  newHeader.setAttribute('id','victory');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML = "YOUR-NAME is the champion";