'use client';
import { useState, useRef, useEffect } from 'react';
import styles from "../styles/userProfile.module.css";
import EventCard from './eventCard';

export default function UserProfile() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
        setShowProfile(false);
      }
    };
  
    const handleResize = () => {
      setIsCompact(window.innerWidth <= 768);
    };
    
    handleResize();
  
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles['user-profile']} ${isCompact ? styles.compact : ''}`} ref={dropdownRef}>
      <button
        className={styles['icon-button']}
        onClick={() => {
          setShowNotifications(!showNotifications);
          setShowProfile(false);
        }}
      >
        <img src="/notifications.svg" alt="Notifications" className={styles.icon} />
      </button>

      <div className={styles['user-info']}>
        <img src="/Image.png" alt="Uroos Fatima" className={styles['avatar']} />
        {!isCompact && (
          <div className={styles['text-info']}>
            <p className={styles['name']}>Uroos Fatima</p>
            <p className={styles['email']}>uroos.design@gmail.com</p>
          </div>
        )}
      </div>

      <button
        className={styles['icon-button']}
        onClick={() => {
          setShowProfile(!showProfile);
          setShowNotifications(false);
        }}
      >
        <img src="/arrow_down.svg" alt="Arrow Down" className={styles.icon} />
      </button>

      {showNotifications && (
        <div className={`${styles['dropdown']} ${styles['notifications']}`}>
          <EventCard />
          <EventCard />
        </div>
      )}

      {showProfile && (
        <div className={`${styles['dropdown']} ${styles['profile']}`}>
          <ul>
            <li><img src="/person.svg" alt="Profile" className={styles['menu-icon']} /> Profile</li>
            <li><img src="/settings.svg" alt="Settings" className={styles['menu-icon']} /> Settings</li>
            <li><img src="/logout.svg" alt="Sign out" className={styles['menu-icon']} /> Sign out</li>
          </ul>
        </div>
      )}
    </div>
  );
}
