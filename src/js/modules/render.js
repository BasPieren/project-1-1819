import * as helper from './helper.js'

function homePage() {
  helper.removeMain()

  const createElement = helper.createElements(),
        countryFlags = [{src:'src/images/flag_of_the_netherlands.svg', alt: 'Nederlandse vlag', caption: 'Nederlands'},
                        {src:'src/images/flag_of_the_united_kingdom.svg', alt: 'Verenigd Koninkrijk vlag', caption: 'English'},
                        {src:'src/images/flag_of_the_arabic_language.svg', alt: 'Arabische vlag', caption: 'عربى'}]

  createElement.h3.textContent = 'Kies een taal:'
  createElement.p.textContent = `Wil je Nederlands leren? Of wil je leren om beter te kunnen werken met
                  de computer? Of hoe je beter met je geld omgaat? Kom naar de Openbare Bibliotheek
                  Amsterdam (OBA)  en ga aan de slag. Meedoen
                  is gratis.`
  createElement.a.textContent = 'naar de volgende pagina'
  createElement.a.href = '#leren'
  createElement.a.className = 'oba-main-button'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.p)
  createElement.main.appendChild(createElement.h3)

  countryFlags.forEach(image => {
    const figure = document.createElement('figure'),
          img = document.createElement('img'),
          figureCaption = document.createElement('figcaption')

    img.src = image.src
    img.alt = image.alt
    img.className = 'oba-flag'
    figureCaption.textContent = image.caption

    createElement.main.appendChild(figure)
    figure.appendChild(img)
    figure.appendChild(figureCaption)
  })

  createElement.main.appendChild(createElement.a)
}

function choosePage() {
  helper.removeMain()

  const createElement = helper.createElements(),
        categories = [{icon:'src/images/language.svg', text: 'Ik heb hulp nodig met de Nederlandse taal.', src:'#taal'},
                      {icon:'src/images/computer.svg', text: 'Ik heb hulp nodig met mijn computer, smartphone of tablet.', src:'#computer'},
                      {icon:'src/images/math.svg', text: 'Ik heb hulp nodig met mijn financiën.', src:'#financien'},
                      {icon:'src/images/integration.svg', text: 'Ik heb hulp nodig met mijn inburgeringsexamen of staatsexamen.', src:'#inburgering'}]

  createElement.h3.textContent = 'Waar heb je hulp mee nodig?'
  createElement.a.textContent = 'terug naar de vorige pagina'
  createElement.a.href = '#home'
  createElement.a.className = 'oba-main-button'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.a)
  createElement.main.appendChild(createElement.h3)

  categories.forEach(categorie => {
    const article = document.createElement('article'),
          h3 = document.createElement('h3'),
          img = document.createElement('img'),
          a = document.createElement('a')

    h3.textContent = categorie.text
    img.src = categorie.icon
    a.textContent = 'kies'
    a.href = categorie.src
    a.className = 'oba-main-button'

    createElement.main.appendChild(article)
    article.appendChild(img)
    article.appendChild(h3)
    article.appendChild(a)
  })
}

function languagePage() {
  helper.removeMain()

  const createElement = helper.createElements(),
        courses = [{title:'Taalcafé', description: 'Wil je graag beter Nederlands spreken? Kom dan naar het Taalcafé. Praat met andere mensen, speel een spelletje en verbeter direct je Nederlands.', href:'#agenda'},
                   {title:'Meeleesclub', description: 'Beter Nederlands leren lezen? Kom naar de Meeleesclub! Wij lezen voor uit makkelijke boeken met mooie verhalen en jij leest mee. Daarna praten we samen over het verhaal.', href:'#agenda'},
                   {title:'Nt2-uur', description: 'Heb je vragen over de Nederlandse taal, het Inburgeringsexamen of het Staatsexamen? Onze Nt2 docent geeft advies en informatie. Of ga zelf aan de slag.', href:'#agenda'},
                   {title:'Taalconsulent', description: 'Wil je de Nederlandse taal leren? De Taalconsulent geeft je advies en hulp bij het vinden van de juiste (gratis) taalcursus.', href:'#agenda'}]

  createElement.h3.textContent = 'Taal'
  createElement.a.textContent = 'terug naar de vorige pagina'
  createElement.a.href = '#leren'
  createElement.a.className = 'oba-main-button'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.a)
  createElement.main.appendChild(createElement.h3)

  helper.renderCourses(createElement.main, courses)
}

function computerPage() {
  helper.removeMain()

  const createElement = helper.createElements(),
        courses = [{title:'Computer hulp', description: 'Heb je nog weinig ervaring met de computer of internet?  Kom naar de OBA leer stap voor stap en in je eigen tempo om beter te kunnen werken met je computer.', href:'#agenda'},
                   {title:'Oefenuur', description: 'Kom naar het oefenuur bij de OBA en oefen met typen, e-mailen en internet. De begeleider is er om antwoord te geven op al je vragen.', href:'#agenda'},
                   {title:'Tabletcafé', description: 'Heb je een iPad of tablet? En heb je hulp nodig? Kom dan naar het Tabletcafé! Hier vind je ook informatie over E-books.', href:'#agenda'},
                   {title:'DigiD cursus', description: 'Leer hoe je een DigiD aanvraagt en gebruikt. Met een DigiD kun je inloggen op websites van de overheid en in de zorg.', href:'#agenda'},
                   {title:'Social media en internet', description: 'Kom naar het spreekuur over digitale media en internet en krijg antwoord op vragen als hoe gebruik ik Facebook en hoe kan ik skypen met familie en nog veel meer.', href:'#agenda'}]

  createElement.h3.textContent = 'Computer'
  createElement.a.textContent = 'terug naar de vorige pagina'
  createElement.a.href = '#leren'
  createElement.a.className = 'oba-main-button'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.a)
  createElement.main.appendChild(createElement.h3)

  helper.renderCourses(createElement.main, courses)
}

function financePage() {
  helper.removeMain()

  const createElement = helper.createElements(),
        courses = [{title:'Grip op je geld', description: 'Hulp nodig bij je financiën? Kom naar het wekelijkse financiële spreekuur en ontvang gratis budgetadvies en hulp bij jouw financiële zaken.', href:'#agenda'},
                   {title:'Financiële hulp', description: 'Hulp nodig met financiën? Wil je weten hoeveel geld er binnen komt? Wil je leren internetbankieren? Maak een afspraak voor een-op-een hulp.', href:'#agenda'},
                   {title:'Belastingdag 2019', description: 'Moeite met de belastingaangifte? Kom naar de OBA Belastingdag en krijg gratis advies en hulp van studenten van de Hogeschool van Amsterdam.', href:'#agenda'},
                   {title:'Oefenuur', description: 'Kom naar het oefenuur voor meer inzicht in je inkomsten en uitgaven. Oefen op de computer met rekenen en leer hoe je geld bespaart. Stel vragen aan de begeleider.', href:'#agenda'}]

  createElement.a.textContent = 'terug naar de vorige pagina'
  createElement.a.href = '#leren'
  createElement.a.className = 'oba-main-button'
  createElement.h3.textContent = 'Financiën'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.a)
  createElement.main.appendChild(createElement.h3)

  helper.renderCourses(createElement.main, courses)
}

function integrationPage() {
  helper.removeMain()

  const createElement = helper.createElements(),
        courses = [{title:'Inburgeringsexamen', description: 'Binnenkort inburgeringsexamen? Kom naar de OBA en oefen gratis met examens op de computer. Wij helpen je, als dat nodig is.', href:'#agenda'},
                   {title:'Staatsexamen Nt2', description: 'Binnenkort Staatsexamen? Kom naar de OBA en oefen gratis met examens op de computer. Wij helpen je, als dat nodig is.', href:'#agenda'}]

  createElement.a.textContent = 'terug naar de vorige pagina'
  createElement.a.href = '#leren'
  createElement.a.className = 'oba-main-button'
  createElement.h3.textContent = 'Integratie'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.a)
  createElement.main.appendChild(createElement.h3)

  helper.renderCourses(createElement.main, courses)
}

function agendaPage() {
  helper.removeMain()

  const createElement = helper.createElements()

  createElement.a.textContent = 'terug naar de vorige pagina'
  createElement.a.href = '#leren'
  createElement.a.className = 'oba-main-button'
  createElement.h3.textContent = 'Agenda'

  createElement.body.appendChild(createElement.main)
  createElement.main.appendChild(createElement.a)
  createElement.main.appendChild(createElement.h3)
}

export { homePage, choosePage, languagePage, computerPage, financePage, integrationPage, agendaPage }
