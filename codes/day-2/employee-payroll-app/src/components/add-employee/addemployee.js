document.getElementById('radioDev').addEventListener('change', onDeveloperSelection)
document.getElementById('radioHr').addEventListener('change', onHrSelection)
document.getElementById('btnAdd').addEventListener('click', onAddClick)

function generateDesign(spanText) {
    const spanElement = document.createElement('span')
    spanElement.innerText = spanText
    const txtIncentive = document.createElement('input')
    txtIncentive.id = 'txtExtra'

    const para = document.getElementById('pExtra')
    para.innerHTML = ''
    para.appendChild(spanElement)
    para.appendChild(txtIncentive)
}
function onDeveloperSelection() {
    generateDesign('Incentive: ')
}

function onHrSelection() {
    generateDesign('Gratuity:')
}

function onAddClick() {
    const id = parseInt(document.getElementById('txtId').value)
    const name = document.getElementById('txtName').value
    const basic = parseFloat(document.getElementById('txtBasic').value)
    const da = parseFloat(document.getElementById('txtDa').value)
    const hra = parseFloat(document.getElementById('txtHra').value)
    const extra = parseFloat(document.getElementById('txtExtra').value)

    employees.push({name:name, id:id, basicSalary:basic, daSalary:da, hraSalary:hra,})
}