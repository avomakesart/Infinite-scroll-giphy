import { useRef, useState, useCallback } from 'react';
import { Error } from './components/Error/Error';
import { Images } from './components/Images/Images';
import { Loader } from './components/Loader/Loader';
// import useBookSearch from './hooks/useBookSearch';
import useGifSearch from './hooks/useGifSearch';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { images, hasMore, error, loading } = useGifSearch(query, pageNumber);

  // const { books, hasMore, error, loading } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-6'>
        <h1 class='mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font'>
          Make a search
        </h1>
        <input
          type='text'
          className='border border-gray-300 focus:border-black shadow-md p-1 pl-2 max-w-full w-1/2'
          value={query}
          onChange={handleSearch}
          placeholder='Type a search here...'
        />
      </div>
      <Images images={images} elementRef={lastImageElementRef} />
      {loading && <Loader />}
      {error && <Error errorType='500' description='Something went wrong!' />}
    </>
  );
}

export default App;
