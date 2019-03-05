import * as render from './render.js'

function router() {
  routie({
    'home': () => {
      render.homePage()
    },
    'leren': () => {
      render.choosePage()
    }
  })

  routie('home')
}

export { router }
