import './App.scss';
import NavBar from './containers/NavBar/NavBar';

const App = () => {

  return (
    <div className="">
      <NavBar 
      searchText={searchText}
      searchTextChange={handleSearchText}
      fuzzySearch={fuzzySearch}
      fuzzySearchChange={handleFuzzySearch}
      searchResultCount={beer.length}/>
    </div>
  );
}

export default App;
