import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '../css/robotics-layout.module.css';

function RoboticsLayout({children, ...props}) {
  return (
    <Layout {...props}>
      <div className={styles.roboticsLayout}>
        {/* Left humanoid robot */}
        <div className={styles.robotLeft}>
          <div className={styles.robotContainer}>
            <img
              src="/img/realistic-humanoid-robot-left.svg"
              alt="Realistic Humanoid Robot Left"
              className={styles.robotSvg}
            />
          </div>
        </div>

        {/* Center content area */}
        <div className={styles.centerArea}>
          {/* Header with title and subtitle */}
          <header className={styles.header}>
            <h1 className={styles.title}>Physical AI & Humanoid Robotics</h1>
            <p className={styles.subtitle}>ROS 2 • Intelligent Agents • Humanoid Systems</p>
          </header>

          {/* Main content area */}
          <main className={styles.mainContent}>
            {children}
          </main>
        </div>

        {/* Right humanoid robot */}
        <div className={styles.robotRight}>
          <div className={styles.robotContainer}>
            <img
              src="/img/realistic-humanoid-robot-right.svg"
              alt="Realistic Humanoid Robot Right"
              className={styles.robotSvg}
            />
          </div>
        </div>

        {/* Background circuit patterns */}
        <div className={styles.backgroundPattern}>
          <svg className={styles.circuitPattern} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,10 Q30,5 50,10 T90,10" stroke="var(--ifm-color-primary)" fill="none" strokeWidth="0.2" opacity="0.2"/>
            <path d="M10,30 Q30,25 50,30 T90,30" stroke="var(--ifm-color-primary)" fill="none" strokeWidth="0.2" opacity="0.2"/>
            <path d="M10,50 Q30,45 50,50 T90,50" stroke="var(--ifm-color-primary)" fill="none" strokeWidth="0.2" opacity="0.2"/>
            <path d="M10,70 Q30,65 50,70 T90,70" stroke="var(--ifm-color-primary)" fill="none" strokeWidth="0.2" opacity="0.2"/>
            <path d="M10,90 Q30,85 50,90 T90,90" stroke="var(--ifm-color-primary)" fill="none" strokeWidth="0.2" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </Layout>
  );
}

export default RoboticsLayout;