import React from 'react';
import AskToHostBanner from '../components/AskToHostBanner';
import Banner from '../components/Banner';
import DiscoverCard from '../components/DiscoverCard';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="max-w-6xl mx-auto h-screen">
        <div className="mt-3 m-4">
          <h3 className="font-semibold my-6 text-3xl">Explore Nearby</h3>
          <div className="grid grid-cols-4 gap-x-4">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
        <p className="ml-4 font-semibold my-16 text-3xl">
          Discover Airbnb Experiences
        </p>
        <section className="grid mt-3 m-4 grid-cols-2 gap-x-8 h-[600px]">
          <DiscoverCard
            img={
              'https://images.unsplash.com/photo-1510662145379-13537db782dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=439&q=80'
            }
          />
          <DiscoverCard
            img={
              'https://images.unsplash.com/photo-1522931698295-e7b4d3e4188f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
          />
        </section>
        <section className="mt-32 m-4">
          <AskToHostBanner />
        </section>
      </section>
    </>
  );
}

export default Home;
