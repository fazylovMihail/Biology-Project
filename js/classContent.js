class Content{
    constructor(name){
        this.name = name
    }
    ContentDrower(){
        return `<div class="content-btn">${this.name}</div>`;
    }
}

export {Content};