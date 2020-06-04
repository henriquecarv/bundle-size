import { styles } from '../../client/styles/SearchPageStyles';
import { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import Link from 'next/link';

export default function Search() {
  const [searchInput, setSearch] = useState('');
  const searchSubmitRef = useRef<HTMLAnchorElement>(null);

  const onChangeSearchInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const submitSearch = () => {
    searchSubmitRef.current?.click();
  };

  const onKeyPress = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === 'Enter') {
      event.preventDefault();
      submitSearch();
    }
  };

  return (
    <>
      <div className="Search">
        <h1 className="Search__Title">
          Find the cost of adding a npm package to your bundle
        </h1>
        <div className="Search__Input-container">
          <form className="Search__Input-form">
            <div className="Input__Container">
              <div className="Input__Container-inner">
                <input
                  placeholder="find package"
                  className="Input"
                  value={searchInput}
                  onChange={onChangeSearchInput}
                  onKeyPress={onKeyPress}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <Link href="/package/[id]" as={`package/${searchInput}`}>
        <a ref={searchSubmitRef} />
      </Link>

      <style jsx>{styles}</style>
    </>
  );
}
