import { filterData } from './filter.js'
import { storeData } from './store.js'

async function getData(search, type) {
  const api = new API({
		key: '1e19898c87464e239192c8bfe422f280'
	});

  const stream = await api.createStream('search/' + search + '&facet=Type(' + type + '){10}');

  stream
    .pipe(filterData)
    .pipe(storeData)
    .catch(console.error);
}

export { getData }
