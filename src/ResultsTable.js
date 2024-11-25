import React from "react";
import ReactPaginate from "react-paginate";

const ResultsTable = ({ data, onSelect }) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <table className="w-full mt-6 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2"></th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">DOB</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">City</th>
            <th className="border border-gray-300 p-2">State</th>
            <th className="border border-gray-300 p-2">Zip</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(offset, offset + PER_PAGE).map((contact, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2 text-center">
                <input
                  type="radio"
                  name="selectedContact"
                  onChange={() => onSelect(contact)}
                />
              </td>
              <td className="border border-gray-300 p-2">
                {`${contact.firstName} ${contact.lastName}`}
              </td>
              <td className="border border-gray-300 p-2">{contact.dob}</td>
              <td className="border border-gray-300 p-2">{contact.address}</td>
              <td className="border border-gray-300 p-2">{contact.city}</td>
              <td className="border border-gray-300 p-2">{contact.state}</td>
              <td className="border border-gray-300 p-2">{contact.zip}</td>
              <td className="border border-gray-300 p-2">{contact.email}</td>
              <td className="border border-gray-300 p-2">{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-4 space-x-2"}
        activeClassName={"font-bold"}
        pageClassName={"px-3 py-1 border rounded hover:bg-gray-100"}
      />
    </>
  );
};

export default ResultsTable;
