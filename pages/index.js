import React from 'react';
import {
  Banner,
  CoreFeature,
  KeyFeature,
  Layout,
  PricingPlan,
  SEO,
  ServiceSection,
  SubscribeSection,
  TeamSection,
  Testimonial,
  WorkFlow,
} from '../components';

const HomePage = () => {
  return (
    <Layout>
      <SEO title="NextJS Landing Page" />
      <Banner />
      <KeyFeature />
      <ServiceSection />
      <CoreFeature />
      <WorkFlow />
      <PricingPlan />
      <TeamSection />
      <Testimonial />
      <SubscribeSection />
    </Layout>
  );
};

export default HomePage;
