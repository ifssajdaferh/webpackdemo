import { Hello } from './hello.js';
import { Web } from './web.js';
import { Pack } from './pack.js';
import avtar from './avtar.jpeg';
import avtar2 from './avtar2.jpg';
import './avtar.css';
// require('./avtar.css')
const app =document.querySelector('#app')

const img2 =document.createElement('img');
const img =document.createElement('img');

img.src=avtar;
img2.src=avtar2;

app.appendChild(img)
app.appendChild(img2)
img.className+='img';
img2.className+='img';

new Hello()
new Web()
new Pack()
