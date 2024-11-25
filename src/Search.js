import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-medium">Search for a contact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dob"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Street address"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip code"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
