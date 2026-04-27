import searchImg from "../assets/search-img.svg";

const Search = () => {
    return (
        <div>
            <div className="search-wrapper">
                <input className="search__text" type="text" />
                <img src={searchImg} className="search__image" alt="Поиск"/>
            </div>
        </div>
    );
};

export default Search;