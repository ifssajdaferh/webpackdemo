import { Hello } from './hello.js';
import { Web } from './web.js';
import { Pack } from './pack.js';
import avtar from './avtar.jpeg';
import avtar2 from './avtar2.jpg';
import { good } from './good.js';
import ajax  from './ajax';
import styles from './avtar.scss';

// const module=require('module') 

console.log(styles);
const app =document.querySelector('#app')

const img2 =document.createElement('img');
const img =document.createElement('img');


const htmlbtn=document.querySelector('.btn');
htmlbtn.className+=` ${styles.btnstyle}`
htmlbtn.addEventListener('click',(e)=>{
    new Hello(`${styles.fontcolor}`)
})

img.src=avtar;
img2.src=avtar2;

app.appendChild(img)
app.appendChild(img2)
img.className+=`${styles.img}`;
img2.className+=`${styles.img}`;

new Hello(`${styles.fontcolor}`)
new Web(`${styles.fontcolor}`)
new Pack(`${styles.fontcolor}`)

new good(`${styles.iconfont}`)

// Proxy请求代理练习.开发服务器为...locallhost/yixiantong/getHomeDatas,线上服务器为http://study.jsplusplus.com/yixiantong/getHomeDatas 
// 通过webpack devserver配置 proxy字段实现代理
ajax({
    method:'get',
    url:'/yixiantong/getHomeDatas',
    success(res){
        let {ktvDatas}=JSON.parse(res);
        console.log(ktvDatas);

    }
})

