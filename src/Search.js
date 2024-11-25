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

  const [selectedContact, setSelectedContact] = useState(null); // State for selected contact

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedContact(null); // Reset the selected contact to false (or null)
    onSearch(criteria); // Perform the search with the criteria
  };

  // JSON data containing only state property
  const jsonData = [
    { state: "AK" },
    { state: "CA" },
    { state: "WA" },
    { state: "IL" },
    { state: "TX" },
    { state: "FL" },
    { state: "CO" },
    { state: "MA" },
  ];

  // Extract unique states
  const uniqueStates = [...new Set(jsonData.map((item) => item.state))];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-lg font-medium mb-4">Search for a contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex flex-row gap-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 rounded p-2 w-30"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 rounded p-2 w-30"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="border border-gray-300 rounded p-2 w-30"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded p-2 w-full"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded p-2 w-full"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border border-gray-300 rounded p-2 w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border border-gray-300 rounded p-2 w-60"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                className="border border-gray-300 rounded p-2.5 w-32"
                onChange={handleInputChange}
                value={criteria.state}
              >
                <option value=""></option>
                {uniqueStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Zip code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                className="border border-gray-300 rounded p-2 w-32"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-customBlue py-1 px-4 rounded border border-2 border-gray-300"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
