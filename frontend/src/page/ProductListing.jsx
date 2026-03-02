import React, { useEffect, useState, useCallback } from "react";
import Layout from "../layout/Layout";
import Sidebar from "../Components/ui/sidebar/Sidebar";
import Content from "../Components/ui/content/Content";
import Navbar from "../Components/global/Navbar";
import Related from '../Components/ui/related/Related';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [filters, setFilters] = useState({
    brands: [],
    features: [],
    priceMin: "",
    priceMax: "",
    condition: "",
    ratings: []
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products${location.search}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }, [location.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const applyFiltersToURL = (updatedFilters) => {
    const params = new URLSearchParams(location.search);
    params.delete('brands');
    if (updatedFilters.brands.length > 0) {
      params.append('brands', updatedFilters.brands.join(','));
    }
    if (updatedFilters.priceMin) params.set('priceMin', updatedFilters.priceMin);
    else params.delete('priceMin');
    if (updatedFilters.priceMax) params.set('priceMax', updatedFilters.priceMax);
    else params.delete('priceMax');
    if (updatedFilters.condition) params.set('condition', updatedFilters.condition);
    else params.delete('condition');

    navigate({ search: params.toString() });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFiltersToURL(newFilters);
  };

  const removeFilter = (type, value) => {
    let updated = { ...filters };
    if (Array.isArray(updated[type])) {
      updated[type] = updated[type].filter((v) => v !== value);
    } else {
      updated[type] = "";
    }
    handleFilterChange(updated);
  };

  const clearAll = () => {
    const reset = {
      brands: [],
      features: [],
      priceMin: "",
      priceMax: "",
      condition: "",
      ratings: []
    };
    setFilters(reset);
    navigate({ search: "" });
  };

  return (
    <div style={{ backgroundColor: "#F7FAFC" }}>
      <Layout>
        <Navbar />
        <div className="container mt-4">
          <div className="row">
            <Sidebar
              filters={filters}
              setFilters={handleFilterChange}
              className="col-lg-3"
            />

            <div className="col-lg-9">
              <div className="mb-3 d-flex flex-wrap gap-2">
                {filters.brands.map((b) => (
                  <span key={b} className="badge bg-light text-dark border p-2">
                    {b} <span className="ms-2 text-danger" onClick={() => removeFilter("brands", b)} style={{ cursor: "pointer" }}>✕</span>
                  </span>
                ))}
                
                {location.search && (
                   <button className="btn btn-sm btn-outline-danger" onClick={clearAll}>
                     Clear All
                   </button>
                )}
              </div>

              <Content products={products} />
              <div className="d-block d-lg-none mt-4">
                <Related />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductListing;