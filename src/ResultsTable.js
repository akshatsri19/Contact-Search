import React from "react";
import ReactPaginate from "react-paginate";

const ResultsTable = ({ data, onSelect }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedContact, setSelectedContact] = React.useState(null); // Track the selected contact

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    setSelectedContact(null); // Reset selected contact when changing pages
    onSelect(null); // Notify parent about reset
  };

  const handleSelection = (contact) => {
    setSelectedContact(contact);
    onSelect(contact); // Notify parent about selection
  };

  return (
    <>
      <table className="w-full mt-6">
        <thead>
          <tr>
            <th className="border-b border-gray-300 p-2"></th>
            <th className="border-b border-gray-300 p-2">Name</th>
            <th className="border-b border-gray-300 p-2">DOB</th>
            <th className="border-b border-gray-300 p-2">Address</th>
            <th className="border-b border-gray-300 p-2">City</th>
            <th className="border-b border-gray-300 p-2">State</th>
            <th className="border-b border-gray-300 p-2">Zip</th>
            <th className="border-b border-gray-300 p-2">Email</th>
            <th className="border-b border-gray-300 p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(offset, offset + PER_PAGE).map((contact, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b border-gray-300 p-2 text-center">
                <input
                  type="radio"
                  name="selectedContact"
                  checked={selectedContact === contact}
                  onChange={() => handleSelection(contact)}
                />
              </td>
              <td className="border-b border-gray-300 p-2">
                {`${contact.firstName} ${contact.lastName}`}
              </td>
              <td className="border-b border-gray-300 p-2">{contact.dob}</td>
              <td className="border-b border-gray-300 p-2">{contact.address}</td>
              <td className="border-b border-gray-300 p-2">{contact.city}</td>
              <td className="border-b border-gray-300 p-2">{contact.state}</td>
              <td className="border-b border-gray-300 p-2">{contact.zip}</td>
              <td className="border-b border-gray-300 p-2">{contact.email}</td>
              <td className="border-b border-gray-300 p-2">{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-end mt-4 space-x-2"}
        activeClassName={"font-bold bg-customBlue text-white"}
        pageClassName={"px-3 py-1 border"}
      />
    </>
  );
};

export default ResultsTable;
