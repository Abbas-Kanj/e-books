import React from "react";

type Props = {};

const SearchDropDown = (props: Props) => {
  return (
    <div className="dropdown dropdown-open">
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 
        bg-opacity-80 rounded-box top-10 z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default SearchDropDown;
