import React from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import InfoCard from '../components/InfoCard';

function Search() {
  return (
    <>
      <Header />
      <section>
        <p className="text-md">300+ stays for 5 number of guests</p>
        <h3 className="text-3xl font-semibold mt-2 mb-6">Stay in Mars</h3>
      </section>
      <main className="grid grid-cols-2">
        <div className="my-4 space-y-6 px-6">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>

        <div>
          <Map />
        </div>
      </main>
    </>
  );
}

export default Search;
