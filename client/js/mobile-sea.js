
console.log('mobile-sea.js');

startSeaGame = () => {
    console.log('startSeaGame()');
    hideAllConatiners();
    showContainer('div.mobile-sea-container');
};

showMessagesFromSeaGame = (data) => {
    if (data.sea) {
        console.log('SEA');
        alert('SEA');        
    } else {
        console.log('LAND');
        alert('LAND');
    }
};
