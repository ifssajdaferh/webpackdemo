class Web{
    constructor(cname){
       
        const web=document.createElement('div')
        web.innerHTML='web'
        web.className+=`${cname}`
        app.appendChild(web)
        
    }
}


export {Web}