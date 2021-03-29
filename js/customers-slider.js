function changeClass(item, feed__item) {
    if (item.style.left == '250px' && item.className != 'slide-active') {
        item.classList.add('slide-active');
        
        feed__item.classList.add('active');
       
    } else if (item.style.left != '250px' && item.classList.contains('slide-active')) {
        item.classList.remove('slide-active');
        feed__item.classList.remove('active');
    }  
}


const SLID_ITEMS = document.querySelectorAll(".customers__slide");
const FEEDBACK_ITEMS = document.querySelectorAll(".feedback-item");

function draw() {
    let offset = -1;
    for (let i = 0; i < SLID_ITEMS.length; i++) {
        let slid__item = SLID_ITEMS[i];
        let feedback__item = FEEDBACK_ITEMS[i];
        slid__item.style.left = offset * 250 + 'px';
        offset++;
        changeClass(slid__item, feedback__item);
        
    }
  


};

draw();

function right() {
    for (let i = 0; i < SLID_ITEMS.length; i++) {
        let item = SLID_ITEMS[i];
        let feedback__item = FEEDBACK_ITEMS[i];
        if (item.style.left == '750px') {
            item.style.zIndex = '0';
        }
        item.style.transition = "all .8s linear";

        item.style.left = parseInt(item.style.left) - 250 + 'px';
        changeClass(item, feedback__item);

        if ((parseInt(item.style.left)) < -250) {
            item.style.zIndex = '-1';
            item.style.transition = "none";
            item.style.left = 750 + 'px';
        };
    };
}

function left() {

    for (let i = 0; i < SLID_ITEMS.length; i++) {
        let item = SLID_ITEMS[i];
        let feedback__item = FEEDBACK_ITEMS[i];
        console.log(SLID_ITEMS)
        if (item.style.left == '-250px') {
            item.style.zIndex = '1';
        }
        item.style.transition = "all .8s linear";
        console.log(item.style.zIndex)
        item.style.left = parseInt(item.style.left) + 250 + 'px';
        changeClass(item, feedback__item);


        if ((parseInt(item.style.left)) > 750) {
            item.style.zIndex = '-1';
            item.style.transition = "none";
            item.style.left = -250 + 'px';
        };

        console.log(item.style.left)
        console.log(item.style.zIndex)

      
    };

}


let buttonPrew = document.getElementById('btn-prev');
let buttonNext = document.getElementById('btn-next');

buttonPrew.addEventListener('click', left)
buttonNext.addEventListener('click', right)