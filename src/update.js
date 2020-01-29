import format from 'date-fns/format';

var span = document.querySelector('#time-now');
var banner = document.getElementById('banner');

export default function update() {
    banner.innerText = 'Hello World!';
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}