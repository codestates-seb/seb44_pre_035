import React from 'react';

const useScrollLock = () => {
  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  const openScroll = () => {
    document.body.style.removeProperty('overflow');
  };
  return { lockScroll, openScroll };
};

export default useScrollLock;
