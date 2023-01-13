const drop = document.querySelector('.img-drag')

drop.addEventListener('dragenter', event => {
    event.preventDefault()
    drop.classList.add('active')
})

drop.addEventListener('dragleave', event => {
    event.preventDefault()
    drop.classList.remove('active')
})

drop.addEventListener('dragover', event => {
    event.preventDefault()
})

drop.addEventListener('drop', event => {
    event.preventDefault()
    drop.classList.remove('active')
    const file = event.dataTransfer.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('loadend', () => {
        const img = document.createElement('img')
        img.src = reader.result
        document.querySelector('.card-picture').replaceChildren(img)
    })
})

let currentType = '',
    pastType = '',
    weakness = '',
    resistance = ''


const submit = document.getElementById('submit')
document.getElementById('update').onclick = () => updateContent()

function updateContent() {

    document.getElementById('question-mark').style.display = 'none'

    document.querySelector('.card-name').innerHTML = $('input[type=text][name=name]').val()
    document.querySelector('.card-hp').innerHTML = $('input[name=hp]').val()

    if (currentType !== '') {
        const typeImg = document.createElement('img')
        typeImg.setAttribute('src', 'img/' + currentType + '.png')
        document.getElementById('card-type').replaceChildren(typeImg)

        document.querySelector('.card-container').classList.remove('card-' + pastType)
        document.querySelector('.card-container').classList.add('card-' + currentType)
    }

    if (currentType == 'dark') {
        document.querySelector('body').style.color = 'white'
    } else {
        document.querySelector('body').style.color = 'black'
    }

    const attack1 = createAttack1()
    const attack2 = createAttack2()

    document.querySelector('.attack-container').replaceChildren(attack1, attack2)

    if (weakness !== '') {
        const weakImg = document.createElement('img')
        weakImg.setAttribute('src', 'img/' + weakness + '.png')
        document.getElementById('weakness-img').replaceChildren(weakImg)
        document.querySelector('.weakness-number').innerHTML = 'x2'
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
    const div = document.createElement('div')

    for (let i = retreat; i > 0; i--) {
        const img = document.createElement('img')
        img.setAttribute('src', 'img/normal.png')
        div.appendChild(img)
    }
    document.getElementById('retreat-img').replaceChildren(div)

    document.querySelector('.card').style.backgroundImage = 'radial-gradient(rgb(247, 226, 135), rgb(252, 211, 31), rgb(252, 227, 119))'
    document.querySelector('.card-container').style.display = 'block'
}

document.querySelectorAll('.select-type').forEach(type => {
    type.onclick = () => updateType(type.getAttribute("value"))
})

function typeDropdown() {
    document.getElementById('type-list').style.display = 'block'
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

// ATTACKS

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


function createAttack1() {

    const container = document.createElement('div')
    container.classList.add('attack')

    const attackDiv = document.createElement('div')
    attackDiv.classList.add('attack-main')

    const attackCost = document.createElement('div')
    attackCost.classList.add('attack-cost')

    if (attack1cost1) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack1cost1 + '.png')
        attackCost.appendChild(costImg)
    }
    if (attack1cost2) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack1cost2 + '.png')
        attackCost.appendChild(costImg)
    }
    if (attack1cost3) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack1cost3 + '.png')
        attackCost.appendChild(costImg)
    }
    if (attack1cost4) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack1cost4 + '.png')
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
        costImg.setAttribute('src', 'img/' + attack2cost1 + '.png')
        attackCost.appendChild(costImg)
    }
    if (attack2cost2) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack2cost2 + '.png')
        attackCost.appendChild(costImg)
    }
    if (attack2cost3) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack2cost3 + '.png')
        attackCost.appendChild(costImg)
    }
    if (attack2cost4) {
        const costImg = document.createElement('img');
        costImg.setAttribute('src', 'img/' + attack2cost4 + '.png')
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