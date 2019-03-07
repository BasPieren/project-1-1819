function removeMain() {
  const bodySelector = document.querySelector('body'),
        mainSelector = document.querySelector('main')

  if (bodySelector.contains(mainSelector) === true) {
    mainSelector.remove()
  }
}

function domElements() {
  const obj = {
    bodyS: document.querySelector('body'),
    main: document.createElement('main'),
    mainS: document.querySelector('main'),
    section: document.createElement('section'),
    article: document.createElement('article'),
    figure: document.createElement('figure'),
    figureCaption: document.createElement('figcaption'),
    div: document.createElement('div'),
    h1: document.createElement('h1'),
    h2: document.createElement('h2'),
    h3: document.createElement('h3'),
    h4: document.createElement('h4'),
    h5: document.createElement('h5'),
    h6: document.createElement('h6'),
    p: document.createElement('p'),
    a: document.createElement('a'),
    img: document.createElement('img')
  }

  return obj
}

function renderCourses(main, courses) {
  courses.forEach(course => {
    const article = document.createElement('article'),
          h4 = document.createElement('h4'),
          p = document.createElement('p'),
          a = document.createElement('a')

    h4.textContent = course.title
    p.textContent = course.description
    a.textContent = 'naar agenda'
    a.href = course.href
    a.className = 'oba-main-button'

    main.appendChild(article)
    article.appendChild(h4)
    article.appendChild(p)
    article.appendChild(a)
  })
}

export { removeMain, domElements, renderCourses }
