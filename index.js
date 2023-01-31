// IMAGE DRAG & DROP FUNCTIONS *****

// LARGE IMG
const largeImgDrop = document.querySelector('.img-drop')

largeImgDrop.addEventListener('dragenter', event => {
    event.preventDefault()
    largeImgDrop.classList.add('active')
})

largeImgDrop.addEventListener('dragleave', event => {
    event.preventDefault()
    largeImgDrop.classList.remove('active')
})

largeImgDrop.addEventListener('dragover', event => {
    event.preventDefault()
})

largeImgDrop.addEventListener('drop', event => {
    event.preventDefault()
    largeImgDrop.classList.remove('active')
    const file = event.dataTransfer.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('loadend', () => {
        const img = document.createElement('img')
        img.src = reader.result
        document.querySelector('.card-img').replaceChildren(img)
    })
})

// SMALL IMG
const smallImgDrop = document.querySelector('.img-drop-small')

smallImgDrop.addEventListener('dragenter', event => {
    event.preventDefault()
    smallImgDrop.classList.add('active')
})

smallImgDrop.addEventListener('dragleave', event => {
    event.preventDefault()
    smallImgDrop.classList.remove('active')
})

smallImgDrop.addEventListener('dragover', event => {
    event.preventDefault()
})

smallImgDrop.addEventListener('drop', event => {
    event.preventDefault()
    smallImgDrop.classList.remove('active')
    const file = event.dataTransfer.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('loadend', () => {
        const img = document.createElement('img')
        img.src = reader.result
        document.querySelector('.small-img').replaceChildren(img)
    })
})

// ******* SUBMIT FUNCTION *******

let currentType = 'water',
    pastType = '',
    weakness = '',
    resistance = '',
    pastStage = ''

function updateContent() {
    document.querySelector('.card-name').innerHTML = $('input[type=text][name=name]').val()

    const hp = $('input[name=hp]').val()
    if (hp !== '') {
        document.querySelector('.hp').innerHTML = $('input[name=hp]').val()
        document.querySelector('.card-hp').innerHTML = 'HP'
    }

    const preEvolution = $('input[name=evolves-from]').val()
    if (preEvolution !== '') {
        document.getElementById('evolves-from-name').innerHTML = 'Evolves from ' + preEvolution
    }

    const pokedex = $('input[name=pokedex-number]').val()
    if (pokedex !== '') {
        document.querySelector('.pokedex-number').innerHTML = 'NO. ' + pokedex
    }

    const category = $('input[name=category]').val()
    if (category !== '') {
        document.querySelector('.category').innerHTML = category + ' Pokemon'
    }

    const heightInches = $('input[name=inches]').val()
    const heightFeet = $('input[name=feet]').val()
    if (heightInches !== '' || heightFeet !== '') {
        document.querySelector('.height').innerHTML = `HT: ${heightFeet}'${heightInches}"`
    }

    const weight = $('input[name=weight]').val()
    if (weight !== '') {
        document.querySelector('.weight').innerHTML = `WT: ${weight} lbs.`
    }

    const stage = $('select[name=stage]').val()

    if (currentType !== '') {
        if (pastStage !== '') {
            document.getElementById('card').classList.remove('card-' + pastType + '-' + pastStage)
        }
        document.getElementById('card').classList.add('card-' + currentType + '-' + stage)

        pastType = currentType
    }
    pastStage = stage

    if (pastStage === 'basic') {
        document.querySelector('.small-img').style.display = 'none'
        document.querySelector('.evolves-from').style.display = 'none'
    } else {
        document.querySelector('.small-img').style.display = 'block'
        document.querySelector('.evolves-from').style.display = 'block'
    }

    if (currentType == 'dark') {
        document.querySelector('body').style.color = 'white'
    } else {
        document.querySelector('body').style.color = '#111'
    }

    const attack1 = createAttack1()
    const attack2 = createAttack2()
    let ability = ''
    if ($('input[name=ability-name]').val()) {
        ability = createAbility()
    }
    document.querySelector('.attack-container').replaceChildren(ability, attack1, attack2)

    if (weakness !== '') {
        const weakImg = document.createElement('img')
        weakImg.setAttribute('src', 'img/' + weakness + '.png')
        document.getElementById('weakness-img').replaceChildren(weakImg)
        document.querySelector('.weakness-number').innerHTML = '×2'
    } else {
        document.getElementById('weakness-img').replaceChildren('')
        document.querySelector('.weakness-number').innerHTML = ''
    }
    if (resistance !== '') {
        const resistImg = document.createElement('img')
        resistImg.setAttribute('src', 'img/' + resistance + '.png')
        document.getElementById('resistance-img').replaceChildren(resistImg)
        document.querySelector('.resistance-number').innerHTML = '-30'
    } else {
        document.getElementById('resistance-img').replaceChildren('')
        document.querySelector('.resistance-number').innerHTML = ''
    }
    const retreat = $('select[name=retreat]').val()
    document.getElementById('retreat-img').replaceChildren('')

    for (let i = retreat; i > 0; i--) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/normal.png')
        document.getElementById('retreat-img').appendChild(img)
    }
    document.querySelector('.card-container').style.display = 'block'
    document.querySelector('#card').classList.remove('card')

    setTimeout(() => {
        updateContent()
    }, "500")
}

// ***************** INPUT MENU BARS *****************

// STAGE BAR
const stageInput = document.getElementById('stage-dropdown')
stageInput.onclick = () => stageDropdown()

function stageDropdown() {
    const body = document.getElementById('stage-body')
    const arrow = document.getElementById('stage-arrow')

    if ($('#stage-dropdown').hasClass('closed')) {
        body.style.height = '85px'
        body.classList.add('border-bottom')
        stageInput.classList.remove('closed')
        stageInput.classList.add('opened')
        arrow.classList.remove('down')
        arrow.classList.add('up')
    } else {
        body.style.height = '0'
        body.classList.remove('border-bottom')
        stageInput.classList.remove('opened')
        stageInput.classList.add('closed')
        arrow.classList.remove('up')
        arrow.classList.add('down')
    }
}

// STATS BAR
const statsInput = document.getElementById('stats-dropdown')
statsInput.onclick = () => statsDropdown()

function statsDropdown() {
    const body = document.getElementById('stats-body')
    const arrow = document.getElementById('stats-arrow')

    if ($('#stats-dropdown').hasClass('closed')) {
        body.style.height = '100px'
        body.classList.add('border-bottom')
        statsInput.classList.remove('closed')
        statsInput.classList.add('opened')
        arrow.classList.remove('down')
        arrow.classList.add('up')
    } else {
        body.style.height = '0'
        body.classList.remove('border-bottom')
        statsInput.classList.remove('opened')
        statsInput.classList.add('closed')
        arrow.classList.remove('up')
        arrow.classList.add('down')
    }
}

// ABILITY BAR
const abilityInput = document.getElementById('ability-dropdown')
abilityInput.onclick = () => abilityDropdown()

function abilityDropdown() {
    const body = document.getElementById('ability-body')
    const arrow = document.getElementById('ability-arrow')

    if ($('#ability-dropdown').hasClass('closed')) {
        body.style.height = '140px'
        body.classList.add('border-bottom')
        abilityInput.classList.remove('closed')
        abilityInput.classList.add('opened')
        arrow.classList.remove('down')
        arrow.classList.add('up')
    } else {
        body.style.height = '0'
        body.classList.remove('border-bottom')
        abilityInput.classList.remove('opened')
        abilityInput.classList.add('closed')
        arrow.classList.remove('up')
        arrow.classList.add('down')
    }
}

// ATTACK 1 BAR
const attack1Input = document.getElementById('attack-1-dropdown')
attack1Input.onclick = () => attack1Dropdown()

function attack1Dropdown() {
    const body = document.getElementById('attack1')
    const arrow = document.getElementById('attack-1-arrow')

    if ($('#attack-1-dropdown').hasClass('closed')) {
        body.style.height = '255px'
        body.classList.add('border-bottom')
        attack1Input.classList.remove('closed')
        attack1Input.classList.add('opened')
        arrow.classList.remove('down')
        arrow.classList.add('up')
        setTimeout(function () {
            body.style.overflow = 'visible'
        }, 300)
    } else {
        body.style.height = '0'
        body.style.overflow = 'hidden'
        body.classList.remove('border-bottom')
        attack1Input.classList.remove('opened')
        attack1Input.classList.add('closed')
        arrow.classList.remove('up')
        arrow.classList.add('down')
    }
}

// ATTACK 2 BAR
const attack2Input = document.getElementById('attack-2-dropdown')
attack2Input.onclick = () => attack2Dropdown()

function attack2Dropdown() {
    const body = document.getElementById('attack2')
    const arrow = document.getElementById('attack-2-arrow')

    if ($('#attack-2-dropdown').hasClass('closed')) {
        body.style.height = '255px'
        body.classList.add('border-bottom')
        attack2Input.classList.remove('closed')
        attack2Input.classList.add('opened')
        arrow.classList.remove('down')
        arrow.classList.add('up')
        setTimeout(function () {
            body.style.overflow = 'visible'
        }, 300)
    } else {
        body.style.height = '0'
        body.style.overflow = 'hidden'
        body.classList.remove('border-bottom')
        attack2Input.classList.remove('opened')
        attack2Input.classList.add('closed')
        arrow.classList.remove('up')
        arrow.classList.add('down')
    }
}

// ******** TYPE DROPDOWN LISTS ********

window.addEventListener('click', function (e) {
    const dropdown = document.querySelectorAll('.dropdown')
    if (!$(e.target).parents().hasClass('dropdown-container')) {
        dropdown.forEach(drop => {
            if (drop.style.display = 'block') {
                drop.style.display = 'none'
                drop.parentElement.nextElementSibling.firstElementChild.classList.remove('up')
                drop.parentElement.nextElementSibling.firstElementChild.classList.add('down')
            }
        })
    }
})

function dropdown(ul) {
    if (ul.style.display === 'block') {
        ul.style.display = 'none'
        ul.parentElement.nextElementSibling.firstElementChild.classList.remove('up')
        ul.parentElement.nextElementSibling.firstElementChild.classList.add('down')
        return
    }
    ul.style.display = 'block'
    ul.parentElement.nextElementSibling.firstElementChild.classList.remove('down')
    ul.parentElement.nextElementSibling.firstElementChild.classList.add('up')
}

function dropdownUpdate(type, ul, value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        type.replaceChildren(img)
    } else {
        type.replaceChildren('')
    }

    ul.style.display = 'none'
    ul.parentElement.nextElementSibling.firstElementChild.classList.remove('up')
    ul.parentElement.nextElementSibling.firstElementChild.classList.add('down')
}

// TYPE FUNCTION ****
const typeList = document.getElementById('type-list')
const typeImg = document.getElementById('current-type-img')
const typesArray = document.querySelectorAll('.select-type')

typesArray.forEach(type => {
    type.onclick = () => updateType(type)
})

let pastTypeElement = ''

function updateType(type) {
    if (pastTypeElement) {
        pastTypeElement.classList.remove('highlight')
    }
    pastTypeElement = type
    pastTypeElement.classList.add('highlight')
    pastType = currentType
    currentType = type.getAttribute('value')
}

// ABILITY FUNCTION ****
function createAbility() {
    const name = $('input[name=ability-name]').val()
    if (name) {
        const div = document.createElement('div')
        div.classList.add('ability-container')

        const header = document.createElement('div')
        header.classList.add('ability-header')

        const img = document.createElement('img')
        const title = document.createElement('p')
        const text = document.createElement('p')

        img.src = 'img/ability.png'
        title.innerHTML = name
        text.innerHTML = $('textarea[name=ability-text]').val()

        header.appendChild(img)
        header.appendChild(title)
        div.appendChild(header)
        div.appendChild(text)
        return div
    }
}

// ***************** ATTACKS FUNCTIONS *****************

let attack1cost1 = '',
    attack1cost2 = '',
    attack1cost3 = '',
    attack1cost4 = '',
    attack2cost1 = '',
    attack2cost2 = '',
    attack2cost3 = '',
    attack2cost4 = ''

const energyImg = 'img/energy/'

// ATTACK 1 DROPDOWN AND CREATE ******

// COST 1
const attack1cost1List = document.getElementById('attack-cost-list-1-1')
const attack1cost1Img = document.getElementById('current-cost-1-1')

document.getElementById('attack-1-cost-1-button').onclick = () => dropdown(attack1cost1List)

function updateAttack1Cost1(value) {
    dropdownUpdate(attack1cost1Img, attack1cost1List, value)
    attack1cost1 = value
}

document.querySelectorAll('.cost-1-1').forEach(type => {
    type.onclick = () => updateAttack1Cost1(type.getAttribute("value"))
})

// COST 2
const attack1cost2List = document.getElementById('attack-cost-list-1-2')
const attack1cost2Img = document.getElementById('current-cost-1-2')

document.getElementById('attack-1-cost-2-button').onclick = () => dropdown(attack1cost2List)

function updateAttack1Cost2(value) {
    dropdownUpdate(attack1cost2Img, attack1cost2List, value)
    attack1cost2 = value
}

document.querySelectorAll('.cost-1-2').forEach(type => {
    type.onclick = () => updateAttack1Cost2(type.getAttribute("value"))
})

// COST 3
const attack1cost3List = document.getElementById('attack-cost-list-1-3')
const attack1cost3Img = document.getElementById('current-cost-1-3')

document.getElementById('attack-1-cost-3-button').onclick = () => dropdown(attack1cost3List)

function updateAttack1Cost3(value) {
    dropdownUpdate(attack1cost3Img, attack1cost3List, value)
    attack1cost3 = value
}

document.querySelectorAll('.cost-1-3').forEach(type => {
    type.onclick = () => updateAttack1Cost3(type.getAttribute("value"))
})

// COST 4
const attack1cost4List = document.getElementById('attack-cost-list-1-4')
const attack1cost4Img = document.getElementById('current-cost-1-4')

document.getElementById('attack-1-cost-4-button').onclick = () => dropdown(attack1cost4List)

function updateAttack1Cost4(value) {
    dropdownUpdate(attack1cost4Img, attack1cost4List, value)
    attack1cost4 = value
}

document.querySelectorAll('.cost-1-4').forEach(type => {
    type.onclick = () => updateAttack1Cost4(type.getAttribute("value"))
})

// Create Attack 1 **************

function createAttack1() {
    const container = document.createElement('div')
    container.classList.add('attack')

    const attackDiv = document.createElement('div')
    attackDiv.classList.add('attack-main')

    const attackCost = document.createElement('div')
    attackCost.classList.add('attack-cost')

    if (attack1cost1) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack1cost1 + '-energy.png')
        attackCost.appendChild(costImg)
    }
    if (attack1cost2) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack1cost2 + '-energy.png')
        attackCost.appendChild(costImg)
    }
    if (attack1cost3) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack1cost3 + '-energy.png')
        attackCost.appendChild(costImg)
    }
    if (attack1cost4) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack1cost4 + '-energy.png')
        attackCost.appendChild(costImg)
    }

    attackDiv.appendChild(attackCost)

    const attackName = document.createElement('p')
    attackName.classList.add('attack-name')
    attackName.innerHTML = $('input[name=attack1-name]').val()

    attackDiv.appendChild(attackName);

    const attackDamage = document.createElement('p')
    attackDamage.classList.add('attack-damage')
    attackDamage.innerHTML = $('input[name=attack-damage-1]').val()

    attackDiv.appendChild(attackDamage)
    container.appendChild(attackDiv)

    const attackText = document.createElement('p')
    attackText.classList.add('attack-text')
    attackText.innerHTML = $('textarea[name=attack-text-1]').val()

    container.appendChild(attackText)

    return container
}

// ATTACK 2 DROPDOWN AND CREATE ******

// COST 1
const attack2cost1List = document.getElementById('attack-cost-list-2-1')
const attack2cost1Img = document.getElementById('current-cost-2-1')

document.getElementById('attack-2-cost-1-button').onclick = () => dropdown(attack2cost1List)

function updateAttack2Cost1(value) {
    dropdownUpdate(attack2cost1Img, attack2cost1List, value)
    attack2cost1 = value
}

document.querySelectorAll('.cost-2-1').forEach(type => {
    type.onclick = () => updateAttack2Cost1(type.getAttribute("value"))
})

// COST 2
const attack2cost2List = document.getElementById('attack-cost-list-2-2')
const attack2cost2Img = document.getElementById('current-cost-2-2')

document.getElementById('attack-2-cost-2-button').onclick = () => dropdown(attack2cost2List)

function updateAttack2Cost2(value) {
    dropdownUpdate(attack2cost2Img, attack2cost2List, value)
    attack2cost2 = value
}

document.querySelectorAll('.cost-2-2').forEach(type => {
    type.onclick = () => updateAttack2Cost2(type.getAttribute("value"))
})

// COST 3
const attack2cost3List = document.getElementById('attack-cost-list-2-3')
const attack2cost3Img = document.getElementById('current-cost-2-3')

document.getElementById('attack-2-cost-3-button').onclick = () => dropdown(attack2cost3List)

function updateAttack2Cost3(value) {
    dropdownUpdate(attack2cost3Img, attack2cost3List, value)
    attack2cost3 = value
}

document.querySelectorAll('.cost-2-3').forEach(type => {
    type.onclick = () => updateAttack2Cost3(type.getAttribute("value"))
})

// COST 4
const attack2cost4List = document.getElementById('attack-cost-list-2-4')
const attack2cost4Img = document.getElementById('current-cost-2-4')

document.getElementById('attack-2-cost-4-button').onclick = () => dropdown(attack2cost4List)

function updateAttack2Cost4(value) {
    dropdownUpdate(attack2cost4Img, attack2cost4List, value)
    attack2cost4 = value
}

document.querySelectorAll('.cost-2-4').forEach(type => {
    type.onclick = () => updateAttack2Cost4(type.getAttribute("value"))
})

// Create Attack 2 **************

function createAttack2() {
    const container = document.createElement('div')
    container.classList.add('attack')

    const attackDiv = document.createElement('div')
    attackDiv.classList.add('attack-main')

    const attackCost = document.createElement('div')
    attackCost.classList.add('attack-cost')

    if (attack2cost1) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack2cost1 + '-energy.png')
        attackCost.appendChild(costImg)
    }
    if (attack2cost2) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack2cost2 + '-energy.png')
        attackCost.appendChild(costImg)
    }
    if (attack2cost3) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack2cost3 + '-energy.png')
        attackCost.appendChild(costImg)
    }
    if (attack2cost4) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', energyImg + attack2cost4 + '-energy.png')
        attackCost.appendChild(costImg)
    }

    attackDiv.appendChild(attackCost)

    const attackName = document.createElement('p')
    attackName.classList.add('attack-name')
    attackName.innerHTML = $('input[name=attack2-name]').val()

    attackDiv.appendChild(attackName);

    const attackDamage = document.createElement('p')
    attackDamage.classList.add('attack-damage')
    attackDamage.innerHTML = $('input[name=attack-damage-2]').val()

    attackDiv.appendChild(attackDamage)
    container.appendChild(attackDiv)

    const attackText = document.createElement('p')
    attackText.classList.add('attack-text')
    attackText.innerHTML = $('textarea[name=attack-text-2]').val()

    container.appendChild(attackText)

    return container
}

// WEAKNESS & RESISTANCE DROPDOWN **************

// WEAKNESS
const weaknessList = document.getElementById('weakness-list')
const weaknessImg = document.getElementById('current-weakness')

document.getElementById('weakness-button').onclick = () => dropdown(weaknessList)

function updateWeakness(value) {
    dropdownUpdate(weaknessImg, weaknessList, value)
    weakness = value
}

document.querySelectorAll('.weakness-type').forEach(type => {
    type.onclick = () => updateWeakness(type.getAttribute("value"))
})

// RESISTANCE
const resistanceList = document.getElementById('resistance-list')
const resistanceImg = document.getElementById('current-resistance')

document.getElementById('resistance-button').onclick = () => dropdown(resistanceList)

function updateResistance(value) {
    dropdownUpdate(resistanceImg, resistanceList, value)
    resistance = value
}

document.querySelectorAll('.resistance-type').forEach(type => {
    type.onclick = () => updateResistance(type.getAttribute("value"))
})

// FOCUS FUNCTIONS

function focused(element) {
    $(document).ready(function () {
        const changed = document.querySelector(`label[for="${element}"]`)
        const focused = $(`input[name="${element}"]`)
        focused.focus(() => changed.classList.add('focused'))
        focused.focusout(() => changed.classList.remove('focused'))
    })
}

function hovered(element) {
    $(document).ready(function () {
        const changed = document.querySelector(`label[for="${element}"]`)
        const focused = $(`select[name="${element}"]`)
        focused.hover(() => changed.classList.add('focused'), () => changed.classList.remove('focused'))
    })
}

function heightFocused(element) {
    $(document).ready(function () {
        const changed = document.querySelector(`label[for="${element}"]`)
        const focused = $(`input[name="${element}"]`)
        const height = document.querySelector('.ht')
        focused.focus(() => changed.classList.add('focused'))
        focused.focus(() => height.classList.add('focused'))
        focused.focusout(() => changed.classList.remove('focused'))
        focused.focusout(() => height.classList.remove('focused'))
    })
}

function textareaFocused(element) {
    $(document).ready(function () {
        const changed = document.querySelector(`label[for="${element}"]`)
        const focused = $(`textarea[name="${element}"]`)
        focused.focus(() => changed.classList.add('focused'))
        focused.focusout(() => changed.classList.remove('focused'))
    })
}

focused('name')
focused('hp')
hovered('stage')
focused('evolves-from')
focused('pokedex-number')
focused('category')
heightFocused('feet')
heightFocused('inches')
focused('weight')
focused('ability-name')
textareaFocused('ability-text')
focused('attack1-name')
focused('attack-damage-1')
textareaFocused('attack-text-1')
focused('attack2-name')
focused('attack-damage-2')
textareaFocused('attack-text-2')
hovered('retreat')

updateContent()