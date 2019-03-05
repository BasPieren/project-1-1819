function homePage() {
  const body = document.querySelector('body'),
        main = document.createElement('main'),
        h3 = document.createElement('h3'),
        p = document.createElement('p'),
        a = document.createElement('a'),
        countryFlags = [{src:'src/images/flag_of_the_netherlands.svg', alt: 'Nederlandse vlag', caption: 'Nederlands'},
                        {src:'src/images/flag_of_the_united_kingdom.svg', alt: 'Verenigd Koninkrijk vlag', caption: 'English'},
                        {src:'src/images/flag_of_the_arabic_language.svg', alt: 'Arabische vlag', caption: 'عربى'}]

  h3.textContent = 'Kies een taal:'
  p.textContent = `Wil je Nederlands leren? Of wil je leren om beter te kunnen werken met
                  de computer? Of hoe je beter met je geld omgaat? Kom naar de Openbare Bibliotheek
                  Amsterdam (OBA)  en ga aan de slag. Meedoen
                  is gratis.`
  a.textContent = 'volgende'
  a.href = '#test'
  a.className = 'oba-main-button'

  body.appendChild(main)
  main.appendChild(p)
  main.appendChild(h3)

  countryFlags.forEach(image => {
    const figure = document.createElement('figure'),
          img = document.createElement('img'),
          figureCaption = document.createElement('figcaption')

    img.src = image.src
    img.alt = image.alt
    img.className = 'oba-flag'

    figureCaption.textContent = image.caption

    main.appendChild(figure)
    figure.appendChild(img)
    figure.appendChild(figureCaption)
  })

  main.appendChild(a)
}

export { homePage }
