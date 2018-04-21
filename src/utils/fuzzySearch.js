import FuzzySearch from 'fuzzy-search';

const Search = (collection, valueToSearch) => {
  const searcher = new FuzzySearch(collection, ['name'], {
    caseSensitive: false,
  });
  return searcher.search(valueToSearch);
}

export default Search;