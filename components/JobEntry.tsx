// components/JobEntry.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/JobEntry.module.css';

interface JobEntryProps {
  title: string;
  company: string;
  location: string;
  dates?: string;
  logo?: string;
  children?: React.ReactNode;
  isOpenByDefault?: boolean;
}

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const JobEntry: React.FC<JobEntryProps> = ({ title, company, location, dates, logo, children, isOpenByDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(debounce(() => {
    setIsOpen((prev) => !prev);
  }, 50), []);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={`${styles.jobEntry} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.header} onClick={children ? toggleOpen : undefined}>
        {logo && (
          <div className={styles.logo}>
            <img src={`/logos/${logo}`} alt={`${company} logo`} />
          </div>
        )}
        <div className={styles.headerText}>
          <div className={styles.headerInfo}>
            <h3 className={styles.title}>{title}</h3>
            {dates && <span className={styles.dates}>{dates}</span>}
          </div>
          <h4 className={styles.company}>{company} - {location}</h4>
        </div>
        {children && <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : styles.arrowClosed}`}></div>}
      </div>
      {children && (
        <div className={styles.descriptionWrapper} style={{ height }}>
          <div ref={contentRef} className={styles.description}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobEntry;
