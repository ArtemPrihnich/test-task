const createCustomSelectEl = () => {
    const select = document.querySelectorAll('select')

    function removeSelectEl () {
        select.forEach(item => item.classList.add('disable'))
    }
    removeSelectEl()

    select.forEach(item => item.insertAdjacentHTML("afterend",
        `<div class='select is-visible'><div class='select__name'>${item.name}<img src='./images/Shape.svg'/></div><div class = 'select__list'><div class = 'select__item'>Option 1</div><div class = 'select__item'>Option 2</div><div class = 'select__item'>Option 3</div><div class = 'select__item'>Option 4</div><div class = 'select__item'>Option 5</div</div></div>`
    ))
}

createCustomSelectEl()

const customSelect = document.querySelectorAll('.select')
customSelect[2].classList.add('form-container__form--big')

const functionalCustomEl = () => {
    const selectName = document.querySelectorAll('.select__name')
    const selectItem = document.querySelectorAll('.select__item')
    selectName.forEach(item => item.addEventListener('click', onSelectorClick))
    selectItem.forEach(item => item.addEventListener('click', onOptionClick))

    function onSelectorClick() {
        this.parentElement.classList.toggle('is-visible')
    }

    function onOptionClick() {
        const text = this.innerText
        const selectEl = this.closest('.select')
        console.log(selectEl)
        const currentText = selectEl.querySelector('.select__name')
        currentText.textContent = `${text}`
        selectEl.classList.toggle('is-visible')
    }
}

functionalCustomEl()