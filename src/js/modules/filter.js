function filterData(e) {
  let allActivities = e,
      dataFiltered = allActivities.map(a => {
        return{
          title: a.titles? a.titles.title._text : 'Geen titel beschikbaar',
          summaries: a.summaries? a.summaries.summary._text : 'Geen omschrijving beschikbaar',
          cover_image: a.coverimages? a.coverimages.coverimage._text : 'Geen afbeelding beschikbaar'
        }
      })
  console.log(dataFiltered)
  return dataFiltered
}

export { filterData }
