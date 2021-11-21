class good{
    constructor(cname){
       
        const good1=document.createElement('i')
        const good2=document.createElement('i')
        good2.className+=`${cname}`;
        good1.className+=`${cname}`;

        good1.innerHTML='&#xec8c;'
        good2.innerHTML='&#xec7f;'
        app.appendChild(good1)
        app.appendChild(good2)
    }
}


export {good}