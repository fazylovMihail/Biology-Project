function headerManager(ok, await_s){
    const topObj = document.querySelector('.top-window');
    const headerBtnWrapper = topObj.querySelector('.header-btn-wrapper');
    const bottomObj = document.querySelector('.bottom-window');
    // const bottomObjImg = bottomObj.querySelector('img');

    if(ok){
        topObj.style = `width:30%; transition:${await_s}s`;
        bottomObj.style = `z-index:99;`
        setTimeout(()=>{
            // bottomObjImg.style = `opacity:1; width:80px; transtion:${await_s}s`;
            headerBtnWrapper.style.zIndex = 1;
        },await_s*1000);
        bottomObj.style = `width:13%; opacity:1; transition:${await_s}s`;
        headerBtnWrapper.style = `opacity:1; transition:${await_s}`;
    }
    else{
        topObj.style = `width:10%; transition:${await_s}s`;
        setTimeout(()=>{
            bottomObj.style = `z-index:-1;`
            // bottomObjImg.style = `opacity:0; width:0; transtion:${await_s}s`;
            bottomObj.style = `opacity:0; width:0; transition:${await_s}s`;
            headerBtnWrapper.zIndex = -1
        },await_s)
        headerBtnWrapper.style = `opacity:0; transition:${await_s}`;
    }
}
function heroesBannerManager(ok, await_s){
    const heroesBanner = document.querySelector('.heroes-banner');
    const heroesBannerImg = heroesBanner.querySelector('img');
    const heroesDescription = heroesBanner.querySelector('.heroes-description');

    if(ok){
        heroesBannerImg.style = `transform:rotateY(180deg); transition:${await_s}s`;
        setTimeout(()=>{
            heroesBannerImg.style = `transform:rotateY(180deg); opacity:0; transition:${await_s}s`;
            heroesBanner.style = `background:#000`;
            heroesDescription.style = `z-index:2`;
        },await_s);
    }
    else{
        heroesBannerImg.style = `transform:rotateY(0deg); opacity:1; transition:${await_s}s`;
        heroesBanner.style = `background:transparent`;
        heroesDescription.style = `z-index:-1`;
    }
}

export {headerManager,heroesBannerManager}