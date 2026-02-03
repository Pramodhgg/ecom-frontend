import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Tooltip } from "@mui/material";
import { FiArrowDown, FiArrowUp, FiRefreshCcw } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const Filter = ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  // ✅ derived from URL (no syncing useEffect)
  const category = searchParams.get("category") ?? "all";
  const sortOrder = searchParams.get("sortBy") ?? "asc";

  // ✅ local only for debounce typing
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("keyword") ?? "",
  );

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setSearchParams((prev) => {
      if (value === "all") {
        prev.delete("category");
      } else {
        prev.set("category", value);
      }
      return prev;
    });
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";

    setSearchParams((prev) => {
      prev.set("sortBy", newSortOrder);
      return prev;
    });
  };

  const handleClearFilter = () => {
    navigate({ pathname: pathName });
  };

  // ✅ debounced URL sync
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams((prev) => {
        if (searchTerm) {
          prev.set("keyword", searchTerm);
        } else {
          prev.delete("keyword");
        }
        return prev;
      });
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, setSearchParams]);

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-2 ">
      {/* Search Filter */}
      <div className="relative flex items-center 2xl:w-112.5 w-full sm:w-125 ">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 text-slate-800 p-2 rounded-md py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-custom-blue"
          value={searchTerm}
          onChange={() => {
            setSearchTerm(event.target.value);
          }}
        />
        <FaSearch className="absolute left-3 text-slate-500 size-4" />
      </div>

      {/* Category Filter */}
      <div className="flex sm:flex-row flex-col gap-4 items-center cursor-pointer">
        <FormControl
          variant="outlined"
          size="small"
          className="text-slate-800 border-slate-700"
        >
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            label="Category"
            value={category}
            onChange={handleCategoryChange}
            className="min-w-[120px] text-slate-800 border-slate-700"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.categoryId} value={category.categoryName}>
                {category.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* sort filter*/}
        <Tooltip title="Sorted by price: Low to High">
          <Button
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
            onClick={toggleSortOrder}
          >
            Sort by
            {sortOrder === "asc" ? (
              <FiArrowUp size={20} />
            ) : (
              <FiArrowDown size={20} />
            )}
          </Button>
        </Tooltip>

        <button
          onClick={handleClearFilter}
          className="flex items-center bg-rose-900 text-white py-2 px-4 gap-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none"
        >
          <FiRefreshCcw className="font-semibold " size={16} />
          <span className="font-semibold">Clear filter</span>
        </button>
      </div>
    </div>
  );
};
export default Filter;
