console.log("Hello Dom Wala Jonogon");
let liCollections = document.getElementsByTagName("li");

for (let li of liCollections) {
  //   console.log(li.innerTex);
}

let getH1 = document.getElementsByTagName("h1");
for (let heading of getH1) {
  //   console.log(heading.innerHTML);
}

let placeLike = document.getElementById("place-like");
placeLike.innerText = "What place I have never go";
// console.log(placeLike.innerHTML);

let placeName = document.getElementsByClassName("place-name");
for (let place of placeName) {
  //   console.log(place.innerHTML);
}

let mainSectionParent = document.getElementById("body");

let newSection = document.createElement("section");
let newHeadline = document.createElement("h1");
let newUl = document.createElement("ul");
let newLi = document.createElement("li");
let newLi2 = document.createElement("li");
let newLi3 = document.createElement("li");
let newLi4 = document.createElement("li");

newHeadline.innerText = "Everyday working list";
newSection.appendChild(newHeadline);

newSection.appendChild(newUl);
newLi.innerText = "Wake up before 7am";
newLi2.innerText = "Read 5 page of any book daily";
newLi3.innerText = "Memorize 5 words daily";
newLi4.innerText = "Belive yourself and take risk";
newUl.appendChild(newLi);
newUl.appendChild(newLi2);
newUl.appendChild(newLi3);
newUl.appendChild(newLi4);

mainSectionParent.appendChild(newSection);

let brandNewSection = document.createElement("section");
brandNewSection.innerHTML = `
  <h1>Beset Five Books Name</h1>
  <ul> 
    <li>Pride and Prejudice</li>
    <li>It Starts with Us</li>
    <li>It Ends with Us</li>
    <li>The sun and her flowers</li>
    <li>Milk and Honey</li>
  </ul>
`;
brandNewSection.classList.add("brandNewSection");
mainSectionParent.appendChild(brandNewSection);

let allSection = document.getElementsByTagName("section");
// console.log(allSection);
for (let section of allSection) {
  let indiSection = section;
  indiSection.style.backgroundColor = "gray";
  indiSection.style.padding = "10px";
  indiSection.style.margin = "10px";
  indiSection.style.borderRadius = "15px";
}
