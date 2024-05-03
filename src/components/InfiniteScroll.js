import React, { useRef, useEffect } from 'react';

const InfiniteScroll = ({ fetchData }) => {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchData(); 
        }
      });
    });

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect(); // Cleanup the observer when component unmounts
    };
  }, [fetchData]);

  return (
    <div>
      <div ref={sentinelRef}></div> 
    </div>
  );
};

export default InfiniteScroll;
