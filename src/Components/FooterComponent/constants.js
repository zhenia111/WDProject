import facebook from "./images/facebook-icon.png"
import google from "./images/google-icon.png"
import twitter from "./images/twitter-icon.png"

const getYear = function () {
    const date = new Date()
    const year = date.getFullYear()
    return year
}
const oneDay = 24 * 60 * 60 * 1000

setInterval(() => {
    getYear()
}, oneDay)

export const COPURIGHT = {
    text: {
        title: "All rights Reserved © ",
        year: getYear(),
    },
    img: {
        facebook: {
            alt: "asdf",
            src: facebook,
        },
        google: {
            alt: "asdf",
            src: google,
        },
        twitter: {
            alt: "asdf",
            src: twitter,
        },
    },
}
