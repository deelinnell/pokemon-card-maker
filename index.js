
// IMAGE DROP FUNCTIONS

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

// INPUT DROPDOWN

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

const attack1Input = document.getElementById('attack-1-dropdown')

attack1Input.onclick = () => attack1Dropdown()

function attack1Dropdown() {
    const body = document.getElementById('attack1')
    const arrow = document.getElementById('attack-1-arrow')

    if ($('#attack-1-dropdown').hasClass('closed')) {
        body.style.height = '260px'
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

const attack2Input = document.getElementById('attack-2-dropdown')

attack2Input.onclick = () => attack2Dropdown()

function attack2Dropdown() {
    const body = document.getElementById('attack2')
    const arrow = document.getElementById('attack-2-arrow')

    if ($('#attack-2-dropdown').hasClass('closed')) {
        body.style.height = '260px'
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

// SUBMIT FUNCTION *******

let currentType = '',
    pastType = '',
    weakness = '',
    resistance = '',
    pastStage = ''

const submit = document.getElementById('submit')
document.getElementById('update').onclick = () => updateContent()

function updateContent() {

    document.getElementById('question-mark').style.display = 'none'
    document.querySelector('.card-name').innerHTML = $('input[type=text][name=name]').val()
    document.querySelector('.hp').innerHTML = $('input[name=hp]').val()
    document.getElementById('evolves-from-name').innerHTML = $('input[name=evolves-from]').val()
    document.querySelector('.pokedex-number').innerHTML = `NO. ${$('input[name=pokedex-number]').val()}`
    document.querySelector('.category').innerHTML = `${$('input[name=category]').val()} Pokemon`
    document.querySelector('.height').innerHTML = `HT: ${$('input[name=feet]').val()}'${$('input[name=inches]').val()}"`
    document.querySelector('.weight').innerHTML = `WT: ${$('input[name=weight]').val()} lbs.`

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
}

document.querySelectorAll('.select-type').forEach(type => {
    type.onclick = () => updateType(type.getAttribute("value"))
})

function typeDropdown() {
    document.getElementById('type-list').style.display = 'grid'
}

document.getElementById('type-button').onclick = () => typeDropdown()

function updateType(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-type-img').replaceChildren(img)
    } else {
        document.getElementById('current-type-img').replaceChildren('')
    }

    document.getElementById('type-list').style.display = 'none'

    pastType = currentType
    currentType = value
}

// ABILITY FUNCTIONS

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

// ATTACKS FUNCTIONS *****************

let attack1cost1 = '',
    attack1cost2 = '',
    attack1cost3 = '',
    attack1cost4 = '',
    attack2cost1 = '',
    attack2cost2 = '',
    attack2cost3 = '',
    attack2cost4 = ''

// ATTACK 1

// COST 1

function attack1cost1Dropdown() {
    document.getElementById('attack-cost-list-1-1').style.display = 'block'
}

document.getElementById('attack-1-cost-1-button').onclick = () => attack1cost1Dropdown()

function updateAttack1Cost1(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-1-1').replaceChildren(img)
    } else {
        document.getElementById('current-cost-1-1').replaceChildren('')
    }

    document.getElementById('attack-cost-list-1-1').style.display = 'none'

    attack1cost1 = value
}

document.querySelectorAll('.cost-1-1').forEach(type => {
    type.onclick = () => updateAttack1Cost1(type.getAttribute("value"))
})

// COST 2

function attack1cost2Dropdown() {
    document.getElementById('attack-cost-list-1-2').style.display = 'block'
}

document.getElementById('attack-1-cost-2-button').onclick = () => attack1cost2Dropdown()

function updateAttack1Cost2(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-1-2').replaceChildren(img)
    } else {
        document.getElementById('current-cost-1-2').replaceChildren('')
    }

    document.getElementById('attack-cost-list-1-2').style.display = 'none'

    attack1cost2 = value
}

document.querySelectorAll('.cost-1-2').forEach(type => {
    type.onclick = () => updateAttack1Cost2(type.getAttribute("value"))
})

// COST 3

function attack1cost3Dropdown() {
    document.getElementById('attack-cost-list-1-3').style.display = 'block'
}

document.getElementById('attack-1-cost-3-button').onclick = () => attack1cost3Dropdown()

function updateAttack1Cost3(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-1-3').replaceChildren(img)
    } else {
        document.getElementById('current-cost-1-3').replaceChildren('')
    }

    document.getElementById('attack-cost-list-1-3').style.display = 'none'

    attack1cost3 = value
}

document.querySelectorAll('.cost-1-3').forEach(type => {
    type.onclick = () => updateAttack1Cost3(type.getAttribute("value"))
})

// COST 4

function attack1cost4Dropdown() {
    document.getElementById('attack-cost-list-1-4').style.display = 'block'
}

document.getElementById('attack-1-cost-4-button').onclick = () => attack1cost4Dropdown()

function updateAttack1Cost4(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-1-4').replaceChildren(img)
    } else {
        document.getElementById('current-cost-1-4').replaceChildren('')
    }

    document.getElementById('attack-cost-list-1-4').style.display = 'none'

    attack1cost4 = value
}

document.querySelectorAll('.cost-1-4').forEach(type => {
    type.onclick = () => updateAttack1Cost4(type.getAttribute("value"))
})

// Create Attack 1

const energyImg = 'img/energy/'

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

// ATTACK 2

// COST 1

function attack2cost1Dropdown() {
    document.getElementById('attack-cost-list-2-1').style.display = 'block'
}

document.getElementById('attack-2-cost-1-button').onclick = () => attack2cost1Dropdown()

function updateAttack2Cost1(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-2-1').replaceChildren(img)
    } else {
        document.getElementById('current-cost-2-1').replaceChildren('')
    }

    document.getElementById('attack-cost-list-2-1').style.display = 'none'

    attack2cost1 = value
}

document.querySelectorAll('.cost-2-1').forEach(type => {
    type.onclick = () => updateAttack2Cost1(type.getAttribute("value"))
})

// COST 2

function attack2cost2Dropdown() {
    document.getElementById('attack-cost-list-2-2').style.display = 'block'
}

document.getElementById('attack-2-cost-2-button').onclick = () => attack2cost2Dropdown()

function updateAttack2Cost2(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-2-2').replaceChildren(img)
    } else {
        document.getElementById('current-cost-2-2').replaceChildren('')
    }

    document.getElementById('attack-cost-list-2-2').style.display = 'none'

    attack2cost2 = value
}

document.querySelectorAll('.cost-2-2').forEach(type => {
    type.onclick = () => updateAttack2Cost2(type.getAttribute("value"))
})

// COST 3

function attack2cost3Dropdown() {
    document.getElementById('attack-cost-list-2-3').style.display = 'block'
}

document.getElementById('attack-2-cost-3-button').onclick = () => attack2cost3Dropdown()

function updateAttack2Cost3(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-2-3').replaceChildren(img)
    } else {
        document.getElementById('current-cost-2-3').replaceChildren('')
    }

    document.getElementById('attack-cost-list-2-3').style.display = 'none'

    attack2cost3 = value
}

document.querySelectorAll('.cost-2-3').forEach(type => {
    type.onclick = () => updateAttack2Cost3(type.getAttribute("value"))
})

// COST 4

function attack2cost4Dropdown() {
    document.getElementById('attack-cost-list-2-4').style.display = 'block'
}

document.getElementById('attack-2-cost-4-button').onclick = () => attack2cost4Dropdown()

function updateAttack2Cost4(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-cost-2-4').replaceChildren(img)
    } else {
        document.getElementById('current-cost-2-4').replaceChildren('')
    }

    document.getElementById('attack-cost-list-2-4').style.display = 'none'

    attack2cost4 = value
}

document.querySelectorAll('.cost-2-4').forEach(type => {
    type.onclick = () => updateAttack2Cost4(type.getAttribute("value"))
})

// Create Attack 2

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

// WEAKNESS & RESISTANCE DROPDOWN

document.querySelectorAll('.weakness-type').forEach(type => {
    type.onclick = () => updateWeakness(type.getAttribute("value"))
})

function weaknessDropdown() {
    document.getElementById('weakness-list').style.display = 'block'
}

document.getElementById('weakness-button').onclick = () => weaknessDropdown()

function updateWeakness(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-weakness').replaceChildren(img)
    } else {
        document.getElementById('current-weakness').replaceChildren('')
    }

    document.getElementById('weakness-list').style.display = 'none'

    weakness = value
}

document.querySelectorAll('.resistance-type').forEach(type => {
    type.onclick = () => updateResistance(type.getAttribute("value"))
})

function resistanceDropdown() {
    document.getElementById('resistance-list').style.display = 'block'
}

document.getElementById('resistance-button').onclick = () => resistanceDropdown()

function updateResistance(value) {
    if (value) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/' + value + '.png')
        document.getElementById('current-resistance').replaceChildren(img)
    } else {
        document.getElementById('current-resistance').replaceChildren('')
    }

    document.getElementById('resistance-list').style.display = 'none'

    resistance = value
}