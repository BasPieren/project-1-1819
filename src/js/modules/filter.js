function filterData(e) {
  let allActivities = e,
      dataFiltered = allActivities.map(a => {
        return{
          title: a.titles.title._text,
          summaries: a.summaries.summary._text,
          cover_image: a.coverimages.coverimage._text
        }
      })
          
  localStorage.setItem('data', JSON.stringify(dataFiltered))
}



export { filterData }
