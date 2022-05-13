import React, { useContext, useState } from 'react';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Store } from '../contexts/store';
import { Link } from 'react-router-dom';
import useProgress from '../hooks/useProgress';

function Header() {
  const [store, setStore] = useContext(Store);

  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  console.log(store, setStore);

  const progress = useProgress();

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  //had to fix some bugs related to form
  const handleSearch = () => {
    progress.start();
  };

  return (
    <header className="h-20 shadow-md py-3 px-4 grid grid-cols-3 z-10">
      <div className="relative flex items-center">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="logo"
            width="100px"
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/* Middle section */}
      <div className="flex items-center justify-center border  rounded-full px-3 bg-transparent shadow-md">
        <input
          className="flex-grow py-1 px-3 bg-transparent outline-none pl-2"
          type="text"
          placeholder="Start your search"
          onChange={e => setSearchInput(e.target.value)}
        />
        <SearchIcon className="h-9 bg-red-400 text-white rounded-full p-2 mr-1 cursor-pointer" />
      </div>
      {/* Right section */}

      <div className="flex items-center justify-end space-x-3 text-gray-600">
        <p className="cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex space-x-2 border px-4 py-2 rounded-full shadow-md text-gray-600">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-6">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex items-center justify-between bg-gray-100 rounded-md px-2 py-1">
            <p className="font-semibold text-2xl">Number of Guests</p>
            <input
              className="w-14 outline-none font-semibold text-xl border rounded-md p-1 shadow-sm hover:bg-gray-100"
              value={numberOfGuests}
              onChange={e => setNumberOfGuests(e.target.value)}
              min={1}
              type="number"
              required
            />
          </div>

          <div className="flex items-center justify-between my-5">
            <button
              onClick={() => setSearchInput('')}
              className="px-10 py-1 rounded-xl font-semibold text-xl bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <Link to="/search">
              <button
                onClick={handleSearch}
                className="px-10 py-1 font-semibold text-xl text-white rounded-xl bg-[#FD5B61] hover:bg-[#f84e53]"
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
