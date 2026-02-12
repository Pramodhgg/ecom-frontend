import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/actions";

const useProductFilter = () => {
  const [searchParams] = useSearchParams({});
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams();

    const currentPage = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    params.set("pageNumber", currentPage - 1);

    const sortOrder = searchParams.get("sortBy") ?? "asc";
    const categoryParams = searchParams.get("category") ?? "";
    const keyword = searchParams.get("keyword") ?? "";

    params.set("sortBy", "price");
    params.set("sortOrder", sortOrder);
    if (categoryParams) {
      params.set("category", categoryParams);
    }
    if (keyword) {
      params.set("keyword", keyword);
    }
    // params.set("pageSize", 5);
    const queryString = params.toString();
    dispatch(fetchProducts(queryString));
  }, [dispatch, searchParams]);
};
export default useProductFilter;
