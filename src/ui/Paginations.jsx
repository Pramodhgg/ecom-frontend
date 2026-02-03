import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const Paginations = ({ numOfpages, totalProducts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pathname = useLocation().pathname;
  const params = new URLSearchParams(searchParams);
  const navigate = useNavigate();
  const paramValue = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const OnChangeHandler = (e, value) => {
    params.set("page", value.toString());
    navigate(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      count={numOfpages}
      page={paramValue}
      defaultPage={1}
      siblingCount={0}
      boundaryCount={2}
      shape="rounded"
      onChange={OnChangeHandler}
    />
  );
};
export default Paginations;
