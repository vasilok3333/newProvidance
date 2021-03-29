const iphoneImages = [
    { img: "Screen 1@1X", name: "screen with info1" },
    { img: "Screen 2@1X", name: "screen with info2" },
    { img: "Screen_account_03", name: "screen with info3" },
    { img: "Screen 3@1X", name: "screen with info4" },
    { img: "Screen 4@1X", name: "screen with info5" },
  ];
  
  const PARRENT_IPHONE = document.querySelectorAll(".iphone__slider-items")[0];
  let iphoneIndex = 0;
  
  const iphoneImagesSorted = (i) => {
    let newArr = [];
    switch (i) {
      case 0: // if (x === 'value1')
        newArr.push(iphoneImages[0]);
        newArr.push(iphoneImages[1]);
        newArr.push(iphoneImages[2]);
        newArr.push(iphoneImages[3]);
        newArr.push(iphoneImages[4]);
        return newArr;
  
      case 1: // if (x === 'value1')
        newArr.push(iphoneImages[1]);
        newArr.push(iphoneImages[2]);
        newArr.push(iphoneImages[3]);
        newArr.push(iphoneImages[4]);
        newArr.push(iphoneImages[0]);
        return newArr;
  
      case 2: // if (x === 'value1')
        newArr.push(iphoneImages[2]);
        newArr.push(iphoneImages[3]);
        newArr.push(iphoneImages[4]);
        newArr.push(iphoneImages[0]);
        newArr.push(iphoneImages[1]);
        return newArr;
  
      case 3: // if (x === 'value1')
        newArr.push(iphoneImages[3]);
        newArr.push(iphoneImages[4]);
        newArr.push(iphoneImages[0]);
        newArr.push(iphoneImages[1]);
        newArr.push(iphoneImages[2]);
        return newArr;
  
      default:
        newArr.push(iphoneImages[4]);
        newArr.push(iphoneImages[0]);
        newArr.push(iphoneImages[1]);
        newArr.push(iphoneImages[2]);
        newArr.push(iphoneImages[3]);
        return newArr;
    }
  };
  
  const renderImage = () => {
    PARRENT_IPHONE.innerHTML = "";
    iphoneImagesSorted(iphoneIndex).map((iphone, index) => {
      let iphoneBlock = document.createElement("div");
      iphoneBlock.setAttribute("class", "iphone__slider-item");
      if (index === 2) {
        let iphoneImgBorder = document.createElement("img");
        iphoneImgBorder.setAttribute("src", `./img/iphone-screens/iPhone.png`);
        iphoneImgBorder.setAttribute("alt", "border");
        iphoneImgBorder.setAttribute("class", "iphone_image");
        iphoneBlock.setAttribute("style", "margin: 0 5%");
        iphoneBlock.appendChild(iphoneImgBorder);
      
      }
      let iphoneImg = document.createElement("img");
      iphoneImg.setAttribute("src", `./img/iphone-screens/${iphone.img}.png`);
      iphoneImg.setAttribute("alt", iphone.name);
      iphoneBlock.appendChild(iphoneImg);
      PARRENT_IPHONE.appendChild(iphoneBlock);
    });
  };
  
  renderImage();
  
  const right2 = () => {
    if (iphoneIndex === iphoneImages.length - 1) {
      iphoneIndex = 0;
      renderImage();
    } else {
      iphoneIndex += 1;
      renderImage();
    }
  };
  
  const left2 = () => {
    if (iphoneIndex === 0) {
      iphoneIndex = iphoneImages.length - 1;
      renderImage();
    } else {
      iphoneIndex -= 1;
      renderImage();
    }
  };
  
  let buttonPrew2 = document.getElementById("btn-prev2");
  let buttonNext2 = document.getElementById("btn-next2");
  
  buttonPrew2.addEventListener("click", left2);
  buttonNext2.addEventListener("click", right2);
  