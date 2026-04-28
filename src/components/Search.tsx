import searchImg from "../assets/search-img.svg";
import React, {useEffect, useMemo, useState} from "react";
import debounce from 'lodash.debounce';

interface  Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Search: React.FC<Props> = (
    {
        search,
        setSearch,
    }
) => {
    const [inputValue, setInputValue] = useState(search);

    const debouncedChange = useMemo(
        () => debounce((value: string) => {
            setSearch(value);
        }, 300),
        [setSearch]
    );

    useEffect(() => {
        return () => {
            debouncedChange.cancel();
        };
    }, [debouncedChange]);

    return (
        <div>
            <div className="search-wrapper">
                <input className="search__text"
                       type="text"
                       value={inputValue}
                       onChange={(e) => {
                           const value = e.target.value;
                           setInputValue(value);
                           debouncedChange(value);
                       }}
                />
                <img src={searchImg} className="search__image" alt="Поиск"/>
            </div>
        </div>
    );
};

export default Search;