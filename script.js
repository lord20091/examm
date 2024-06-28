let api = `https://api.escuelajs.co/api/v1/products`

fetch(api)
    .then((response) => response.json())
    .then((res) => getData(res))
    .catch(err => console.log(err));

let divOne = document.getElementById(`one-div`)

function getData(data) {
    console.log(data);
    for (const fetch of data) {
        let card = document.createElement(`div`)
        let h3 = document.createElement(`h3`)
        let p = document.createElement(`p`)

        card.classList.add(`product`)
        h3.innerHTML = fetch?.title;
        p.innerHTML =  fetch?.description;

        card.appendChild(img)
        card.appendChild(h3)
        card.appendChild(p)


        divOne.appendChild(card)

        card.style.border = `1px solid gray`
        divOne.style.gap = `50px`
        h3.style.fontSize = `28px`
        p.style.fontSize = `18px`
        p.style.width = ` 344px`
        p.style.color = `gray`
        divOne.style.display = `flex`
        divOne.style.flexWrap = `wrap`
        card.style.width = `400px`
        card.style.height = `300px`

}

}