const button = document.getElementById('generateColorBtn')

const numberGen = (maxValue) => {
    return Math.floor(Math.random() * (maxValue + 1))
}
const generateRGBColor = () => {
    return [numberGen(255), numberGen(255), numberGen(255)]
}
button.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${generateRGBColor().join(', ')})`
})