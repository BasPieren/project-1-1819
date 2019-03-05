import * as render from './render.js'

function router() {
  routie({
    'home': () => {
      render.homePage()
    }
  })

  routie('home')
}

export { router }
