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
