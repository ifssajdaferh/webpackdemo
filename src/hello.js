class Hello{
    constructor(cname){
       
        const hello=document.createElement('div')
        hello.innerHTML='hello';
       
        hello.className+=`${cname}`
        app.appendChild(hello)
        
    }
}

export {Hello};