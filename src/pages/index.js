import React from 'react';
import Layout from '@theme/Layout';
import Navbar from '../components/Navbar';
import EnhancedHero from '../components/EnhancedHero';

function LandingPage() {
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics`}
      description="Module 1: The Robotic Nervous System (ROS 2)">
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <EnhancedHero />
      </main>
    </Layout>
  );
}

export default LandingPage;