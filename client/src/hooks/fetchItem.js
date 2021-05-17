import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../utils/pageService';

export const useItem = (source, fields, url) => {
  const { slug } = useParams();
  const [status, setStatus] = useState('initial');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setStatus('loading');
      try {
        const page = await getItem(source, fields, slug);
        setData(page);
        setStatus('initial');
      } catch (error) {
        setData(error);
        setStatus('error');
      }
    };
    fetchDataAsync();
  }, [source, fields, url, slug]);

  return { status, data };
};
