import { useCallback, useEffect, useState } from 'react';

const useCategory = () => {
  const [category, setCategory] = useState('All');

  const switchCategory = useCallback((newCategory: string) => {
    setCategory(newCategory);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('category', newCategory);
    window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
  }, []);

  const changeCategory = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentCategory = searchParams.get('category');
    setCategory(currentCategory === null ? 'All' : currentCategory);
  }, []);

  useEffect(() => {
    changeCategory();
  }, [changeCategory]);

  useEffect(() => {
    window.addEventListener('popstate', changeCategory);

    return () => {
      window.removeEventListener('popstate', changeCategory);
    };
  }, [changeCategory]);

  return { category, switchCategory };
};

export default useCategory;
