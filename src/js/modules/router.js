import * as render from './render.js'

function router() {
  routie({
    'home': () => {
      render.homePage()
    },
    'leren': () => {
      render.choosePage()
    },
    'taal': () => {
      render.languagePage()
    },
    'computer': () => {
      render.computerPage()
    },
    'financien': () => {
      render.financePage()
    },
    'inburgering': () => {
      render.integrationPage()
    },
    'agenda': () => {
      render.agendaPage()
    }
  })

  routie('home')
}

export { router }
