export const createContact= () => {

const contact = document.querySelector('.contact')

const contactContainer = document.createElement('div')
contactContainer.className = "contactContainer"

const contactTitle = document.createElement("h1")
contactTitle.textContent = 'Contact'

const contactMenu = document.createElement('div')
contactMenu.className = 'contactMenu'

const contactInfo = document.createElement('div')
contactInfo.className = 'contactInfo'

const contactNum = document.createElement('div')
contactNum.className = 'contactNum'

const adress = document.createElement('div')
const adressTitle = document.createElement('h3')
adressTitle.textContent = 'Adress'
const adressText = document.createElement('p')
adressText.textContent = 'San Diego, CA 22434'

adress.append(adressTitle, adressText)

const phone = document.createElement('div')
const phoneTitle = document.createElement('h3')
phoneTitle.textContent = 'Phone'
const phoneText = document.createElement('p')
phoneText.textContent = '+7 (222)-888 5555'

phone.append(phoneTitle, phoneText)


const form = document.createElement('div')
form.className = 'contactForm'

const labelName = document.createElement('label')
labelName.setAttribute('for', 'name')
labelName.textContent = 'name'

const inputName = document.createElement('input')
inputName.setAttribute('type', 'text')
inputName.setAttribute('id', 'name')
inputName.setAttribute('name', 'name')


const labelEmail = document.createElement('label')
labelEmail.setAttribute('for', 'email')
labelEmail.textContent = 'email'

const inputEmail = document.createElement('input')
inputEmail.setAttribute('type', 'email')
inputEmail.setAttribute('id', 'email')
inputEmail.setAttribute('name', 'email')


const labelComment = document.createElement('label')
labelComment.setAttribute('for', 'message')
labelComment.className = 'labelComment'
labelComment.textContent = 'comment'

const inputComment = document.createElement('textarea')
inputComment.setAttribute('id', 'message')
inputComment.setAttribute('name', 'message')

const formButton = document.createElement('button')
formButton.setAttribute('type', 'submit')
formButton.className = 'formButton'
formButton.textContent = 'Add'

form.append(labelName, inputName, labelEmail, inputEmail, labelComment, inputComment, formButton)


contactInfo.append(adress, phone)

contactNum.append(form)

contactMenu.append(contactInfo, contactNum)

contactContainer.append(contactTitle, contactMenu)

contact.append(contactContainer)

return contact

}