import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
