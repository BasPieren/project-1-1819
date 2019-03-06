import {filterData} from './filter.js'

async function getData() {
  const api = new API({
		key: "1e19898c87464e239192c8bfe422f280"
	});

  const stream = await api.createStream("search/Taalcafe&facet=Type(Activiteiten){10}");

  stream
    .pipe(filterData)
    .catch(console.error);
}

export { getData }
