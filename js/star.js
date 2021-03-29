

const star = (rating, quantity) => {
    const arr = Array.from(Array(quantity), (_, i) => i + 1);
    let starDiv = document.createElement("div");
    starDiv.style.display = "flex";
    starDiv.setAttribute("class", "rating_wrapper");
    const div = () => {
      arr.map((i) => {
        if (i <= rating) {
          let x = document.createElement("div");
          x.innerHTML = `<svg key=${i} viewBox="0 0 51 48" width="18px" height="18px">
              <path
                fill="#f2bc3b"
                className="widget"
                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
              ></path>
            </svg>`;
          starDiv.appendChild(x);
        } else if (i > rating && i - rating < 1) {
          const ratio = Math.round((1 - (i - rating)) * 100);
          const percent = `${ratio}%`;
          const id = `widgetGrad${i}`;
          let x1 = document.createElement("div");
          x1.innerHTML = `<svg viewBox="0 0 51 48" width="10px" height="10px">
            <defs>
              <linearGradient id="widgetGrad${i}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#f2bc3b"></stop>
                <stop offset="50%" stop-color="#f2bc3b"></stop>
                <stop offset="50%" stop-color="rgb(203, 211, 227)"></stop>
                <stop offset="100%" stop-color="rgb(203, 211, 227)"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#widgetGrad${i})"
              class="widget"
              d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
            ></path>
          </svg>`;
          starDiv.appendChild(x1);
        } else {
          let x2 = document.createElement("div");
          x2.innerHTML = `<svg key=${i} viewBox="0 0 51 48" width="10px" height="10px">
              <path
                fill="rgb(203, 211, 227)"
                className="widget"
                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
              ></path>
            </svg>`;
          starDiv.appendChild(x2);
        }
      });
    };
    div();
    return starDiv;
  };
  
  let div2 = Array.from(document.querySelectorAll('.feedback-stars'));
  let items = document.querySelectorAll('.feedback-item');

  for (let i = 0; i< items.length; i++) {
      div2[i].appendChild(star(items[i].getAttribute("rating"), 5))
  }