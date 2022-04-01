const toggle = document.querySelector(".checkbox");
const prices = document.getElementsByClassName("price-montly");

toggle.addEventListener("change", event => {
  const { checked: state } = event.target;
  const pricesAnnually = ["199.99", "249.99", "399.99"];
  const pricesMonthly = ["19.99", "24.99", "39.99"];

  if (!state) {
    for (let [key, value] of Object.entries(prices)) {
      value.innerText = pricesAnnually[key];
    }
  } else {
    for (let [key, value] of Object.entries(prices)) {
      value.innerText = pricesMonthly[key];
    }
  }
});
