import { useEffect, useState } from 'react';
import { getPage } from '../utils/pageService';

export const usePage = (source, fields, url, maxreturn, sortorder) => {
  const [status, setStatus] = useState('initial');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setStatus('loading');
      try {
        const page = await getPage(source, fields, sortorder);
        if (parseInt(maxreturn) > 0) page.length = parseInt(maxreturn);
        setData(page);
        setStatus('initial');
      } catch (error) {
        setData(error);
        setStatus('error');
        console.log(error.message);
      }
    };
    fetchDataAsync();
  }, [source, fields, url, maxreturn, sortorder]);

  return { status, data };
};
