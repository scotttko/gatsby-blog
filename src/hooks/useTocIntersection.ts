import { useEffect, useRef, useState } from 'react';

export const getDecodedLink = (hash: string) => decodeURIComponent(hash).slice(1);

interface Props {
  id: string;
}
const useTocIntersection = ({ id }: Props) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState('');

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleScroll, { rootMargin: `0% 0% -80% 0%` });

    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(`.${id} a`);
    const anchorArr = Array.from(anchors);

    if (anchorArr) {
      const tocList = anchorArr.map((a) => getDecodedLink(a.hash));
      tocList.forEach((elId) => {
        const el = document.getElementById(elId);
        if (el) {
          observer.current?.observe(el);
        }
      });
    }

    return () => observer && observer.current?.disconnect();
  }, [id]);

  useEffect(() => {
    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(`.${id} a`);
    const anchorArr = Array.from(anchors);

    anchorArr.forEach((el) => {
      if (getDecodedLink(el.hash) === activeId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }, [activeId, id]);
};

export default useTocIntersection;
