const allLinks = document.querySelectorAll("nav ul a");
const allTabs = document.querySelectorAll(".tab-content");

const shiftTabs = (linkId) => {
    allTabs.forEach( (tab, i) => {
        
        if(tab.id.includes(linkId)) {
            allTabs.forEach( (tabItem) => {
                tabItem.style = `transform: translateY(-${i*300}px;)`;
            });
        }
    });
}

allLinks.forEach((elem) => {
    elem.addEventListener('click', function(){
        const linkId = elem.id;
        const hrefLinkClick = elem.href;

        allTabs.forEach((elem) => {
            if(elem.id.includes(linkId)){
                elem.classList.add('active');
                elem.classList.remove('disable');
            } else {
                elem.classList.remove('active');
                elem.classList.add('disable');
            }
        });

        shiftTabs(linkId);
    });
});