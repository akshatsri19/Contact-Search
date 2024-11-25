import React, { useState } from "react";
import  Search  from "./Search";
import ResultsTable from "./ResultsTable";
import data from "./data.json"; // JSON data file

const App = () => {
  const [filteredData, setFilteredData] = useState(data); // Initially display all data
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (searchCriteria) => {
    const results = data.filter((contact) =>
      Object.entries(searchCriteria).every(([key, value]) =>
        value ? contact[key]?.toLowerCase().includes(value.toLowerCase()) : true
      )
    );
    setFilteredData(results);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Choose a Contact</h1>
      <Search onSearch={handleSearch} />
      <ResultsTable
        data={filteredData}
        onSelect={(contact) => setSelectedContact(contact)}
      />
      {selectedContact && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Selected Contact</h2>
          <p><strong>Name:</strong> {selectedContact.firstName} {selectedContact.lastName}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Phone:</strong> {selectedContact.phone}</p>
          <p><strong>Address:</strong> {selectedContact.address}, {selectedContact.city}, {selectedContact.state} {selectedContact.zip}</p>
        </div>
      )}
    </div>
  );
};

export default App;
