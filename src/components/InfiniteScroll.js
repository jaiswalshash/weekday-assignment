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
      {/* Your data rendering logic */}
      <div ref={sentinelRef}></div> {/* Sentinel element */}
    </div>
  );
};

export default InfiniteScroll;
