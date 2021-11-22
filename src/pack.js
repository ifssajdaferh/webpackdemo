class Pack {
    constructor(cname) {
      

        const pack = document.createElement('div')
        pack.innerHTML = 'pack';
        pack.className+=`${cname}`
        app.appendChild(pack)

    }
}

export {Pack}