class Hello{
    constructor(){
       
        const hello=document.createElement('div')
        hello.innerHTML='hello';
        hello.className+='img'
        app.appendChild(hello)
        
    }
}

export {Hello};