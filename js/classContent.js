class Content{
    constructor(name, imgStart, imgmidle, listEl){
        this.name = name
        this.imgStart = imgStart
        this.imgmidle = imgmidle
        this.listEl = listEl
    }
    FirstContentDrower(){
        return `<div class="content-btn">
                    <div class="content-btn-text">${this.name} шкаф</div>
                    <img src="${this.imgStart}" alt="">
                </div>`;
    }
    ContentDrower(){
        return `<div class="content-btn-midle">
                    <img src="${this.imgmidle}" alt="">
                    <div class="content-btn-text">${this.name}</div>
                </div>`;
    }
    FinishCardDrower(){
        return `<div class="content-btn-finish">
                    <img src="${this.imgmidle}" alt="">
                </div>`;
    }
    ListFinishWindowDrower(){
        return `<li class="list-element">${this.listEl}</li>`;
    }
}

export {Content};