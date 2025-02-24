import { createHeader } from './header.js'
import { createHomePage } from './home.js'


const root = document.querySelector('.root')

root.append(createHeader(), createHomePage())


