export const smoothScroll = (event, targetId)=>{
    event.preventDefault();
    const target = document.querySelector(targetId);
    if(target){
        target.scrollIntoView({behavior:"smooth"})
    }
};