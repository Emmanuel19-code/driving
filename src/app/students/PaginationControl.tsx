import { Pagination, Stack } from "@mui/material";
import React from 'react'

const PaginationControl = () => {
  return (
    <div className="mt-4 flex flex-row items-center justify-between">
          <div className="flex space-x-2 flex-row items-center">
            <p className="text-sm font-medium">Item per Page</p>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="border border-black text-black  font-medium rounded text-sm px-5 py-0.5 text-center inline-flex items-center"
              type="button"
            >
              1
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
          <Stack spacing={2}>
            <Pagination count={24} />
          </Stack>
        </div>
  )
}

export default PaginationControl