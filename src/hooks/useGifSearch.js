import axios from 'axios';
import { useEffect, useState } from 'react';
const apiUrl = (query) =>
  `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}`;

export default function useGifSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(apiUrl(query), {
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setImages((prevImages) => {
          return [...new Set([...prevImages, res.data.data])];
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber, query]);
  return { loading, error, images, hasMore };
}
