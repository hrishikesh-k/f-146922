import type { ReactNode } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import React from 'react';

import Loader from '../Loader';

export default function Carousel({ children }: { children: ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(550);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrolledPercent, setScrolledPercent] = useState(0);
  const [isRendered, setIsRendered] = useState(false);

  const calcSize = () => {
    const container = containerRef.current;
    if (!container || !children.length) return;

    const totalWidth = Array.from(container.children).reduce((acc, child) => {
      const el = child as HTMLElement;
      return acc + el.offsetWidth;
    }, 0);
    setWidth(totalWidth);

    if (container.children[1]) {
      const childStyle = getComputedStyle(container.children[1]);
      setHeight(container.children[1].clientHeight + (parseFloat(childStyle.padding) || 0) * 2);
    }
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      calcSize();
      setIsRendered(true);
    }, 50);
  });

  useEffect(() => {
    const handleResize = () => {
      calcSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollLeft = currentScroll;
      const scrollLeft = currentScroll;
      const maxScrollLeft =
        scrollableContainerRef.current.scrollWidth - scrollableContainerRef.current.clientWidth;

      const newPercent = (scrollLeft / maxScrollLeft) * 100;
      setScrolledPercent(newPercent);
    }
  }, [currentScroll, containerRef]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setCurrentScroll((e.target as HTMLDivElement).scrollLeft);
    }, 200);
  };

  const onClickRight = () => {
    setCurrentScroll(currentScroll + 400);
  };

  const onClickLeft = () => {
    setCurrentScroll(currentScroll - 400);
  };

  const disabledLeft = currentScroll <= 0;
  const disabledRight = scrolledPercent === 100;
  return (
    <div className="relative">
      <button
        aria-label="move left"
        onClick={onClickLeft}
        disabled={disabledLeft}
        className="arrow-left cursor-pointer hover:opacity-80 transition hover:scale-105"
      >
        <div className="arrow"></div>
      </button>
      {isRendered && (
        <div
          style={{ height: `${height}px` }}
          className={`transition bg-black gradient-left w-5 left-0 absolute ${disabledLeft ? 'opacity-0' : 'opacity-100'}`}
        ></div>
      )}
      <div
        ref={scrollableContainerRef}
        style={{ height: `${height + 15}px` }}
        onScroll={onScroll}
        className="overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        {!isRendered && (
          <div className="flex content-center h-100 justify-center flex-wrap w-full">
            <Loader />
          </div>
        )}
        <div
          ref={containerRef}
          className={`flex flex-wrap py-2 ${!isRendered && 'opacity-0'}`}
          style={{ width: `${width}px` }}
        >
          {children}
        </div>
      </div>
      {isRendered && (
        <div
          style={{ height: `${height}px`, top: `calc(50% - ${height / 2}px)` }}
          className={`transition bg-black gradient-right w-5 right-0 absolute ${disabledRight ? 'opacity-0' : 'opacity-100'}`}
        ></div>
      )}
      <button
        aria-label="move right"
        onClick={onClickRight}
        disabled={disabledRight}
        className="arrow-right cursor-pointer hover:opacity-80 transition hover:scale-105"
      >
        <div className="arrow"></div>
      </button>
    </div>
  );
}
