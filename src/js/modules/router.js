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
    },
    'agenda-detail': () => {
      render.agendaDetailPage()
    }
  })

  routie('home')
}

export { router }
