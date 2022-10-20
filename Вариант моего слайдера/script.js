const image = document.querySelector('img')

let min = 0

const toNext = () => {
    if(min == 0 || min < 2) {
        return image.setAttribute('src', `image/${++min}.jpg`)
    }
    else return image.setAttribute('src', `image/${min}.jpg`)
}

const toBack = () => {
    if(min == 2 || min > 0) {
        return image.setAttribute('src', `image/${--min}.jpg`)
    }
    else return image.setAttribute('src', `image/${min}.jpg`)
}

document.querySelector('#to-next').onclick = toNext
document.querySelector('#to-back').onclick = toBack