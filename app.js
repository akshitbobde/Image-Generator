
const inputText = document.querySelector("#input-text");
const searchBtn = document.querySelector("#find-btn");
const output = document.querySelector(".output");
const moreBtn = document.querySelector(".more-btn");
let page = 1;
async function getData(page) {
  //   console.log(inputText);
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${inputText.value}&client_id=${accessKey}&per_page=12`
  );
  console.log(inputText.value);
  //   console.log(data);
  const response = await data.json();
  const imageArray = await response.results;
  //   console.log(imageArray);
  if (page == 1) {
    output.innerHTML = "";
  }
  imageArray.map((index) => {
    const image = document.createElement("img");
    // console.log(index);
    image.src = index.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = index.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);
    output.appendChild(imagelink);
    // console.log(image.src);
    // output.appendChild(image);
    moreBtn.style.display = "block";
    inputText.value = "";
  });
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getData(page);
});

moreBtn.addEventListener("click", () => {
  page++;
  getData(page);
});
