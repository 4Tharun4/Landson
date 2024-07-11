"use client";
import React,{ useState } from 'react'
import data from '@/app/DummyData/MOCK_DATA.json'
export default function CustumData({title}) {
    const PAGE_SIZE = 10;
  const [currentpage, setcuttentpage] = useState(1);
  const startindex = (currentpage - 1) * PAGE_SIZE;
  const endindex = startindex + PAGE_SIZE;
  const currentdisplaydata = data.slice(startindex, endindex);
  const numberofpages = Math.ceil(data.length / PAGE_SIZE);
  const pagestart = startindex + 1;
  const pageend = startindex + PAGE_SIZE;
  const datasize = data.length;
  return (
    <div className=''>
        <h2 className='text-xl font-bold mb-4'>{title} </h2>
        {/* Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       
        <thead className="text-xs z-[-10] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              first_name
            </th>
            <th scope="col" className="px-6 py-3">
              last_name
            </th>
            <th scope="col" className="px-6 py-3">
              gender
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {currentdisplaydata.map((items, i) => {
            return (
              <>
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {items.id}
                  </th>
                  <td className="px-6 py-4 ">{items.first_name}</td>
                  <td className="px-6 py-4">{items.last_name}</td>
                  <td className="px-6 py-4">{items.gender}</td>
                  <td className="px-6 py-4">{items.email}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-white dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-white dark:text-white">
            {pagestart}-{pageend}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white dark:text-white">
            {datasize}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={() => setcuttentpage(currentpage - 1)}
              disabled={currentpage == 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>

          {Array.from({ length: numberofpages }, (_, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => setcuttentpage(index + 1)}
                  disabled={currentpage == index + 1}
                  className={
                    currentpage == index + 1
                      ? "flex items-center justify-center px-3 h-8 leading-tight  bg-green-500 text-white border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  {" "}
                  {index + 1}
                </button>
              </li>
            );
          })}

          <li>
            <button
              onClick={() => setcuttentpage(currentpage + 1)}
              disabled={currentpage == numberofpages}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      
    </div>
      
    </div>
  )
}
