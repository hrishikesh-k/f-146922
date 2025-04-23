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

  useLayoutEffect(() => {
    setTimeout(() => {
      const container = containerRef.current;
      if (!container || !children.length) return;

      const totalWidth = Array.from(container.children).reduce((acc, child) => {
        const el = child as HTMLElement;
        return acc + el.offsetWidth;
      }, 0);
      setWidth(totalWidth);

      if (container.children[0]) {
        const childStyle = getComputedStyle(container.children[0]);
        setHeight(container.children[0].clientHeight + (parseFloat(childStyle.padding) || 0) * 2);
      }

      setIsRendered(true);
    }, 200);
  }, [children]);

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

  return (
    <div className="relative">
      <button
        onClick={onClickLeft}
        disabled={currentScroll <= 0}
        className="arrow-left cursor-pointer hover:opacity-80 transition hover:scale-105"
      >
        <div className="arrow"></div>
      </button>
      <div
        ref={scrollableContainerRef}
        style={{ height: `${height + 15}px` }}
        onScroll={onScroll}
        className="overflow-x-auto overflow-y-hidden"
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
      <button
        onClick={onClickRight}
        disabled={scrolledPercent === 100}
        className="arrow-right cursor-pointer hover:opacity-80 transition hover:scale-105"
      >
        <div className="arrow"></div>
      </button>
    </div>
  );
}
