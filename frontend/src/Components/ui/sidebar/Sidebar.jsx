import React, { useState } from "react";
import { Form, Button, Offcanvas } from "react-bootstrap";
import { RiFilterLine } from "@remixicon/react";

const Sidebar = ({ filters, setFilters, applyFilters, className }) => {
  const [showMobile, setShowMobile] = useState(false);

  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const features = ["Metallic", "Plastic cover", "8GB Ram", "Large Memory"];
  const conditions = ["Refurbished", "Brand new", "Old items"];

  const handleCheckbox = (type, value) => {
    const updated = filters[type].includes(value)
      ? filters[type].filter((v) => v !== value)
      : [...filters[type], value];

    setFilters({ ...filters, [type]: updated });
  };

  const handleApply = () => {
    applyFilters();
    setShowMobile(false); // close mobile after apply
  };

  const Content = () => (
    <div className="p-3">

      <h6 className="fw-bold">Brands</h6>
      {brands.map((brand) => (
        <Form.Check
          key={brand}
          type="checkbox"
          label={brand}
          checked={filters.brands.includes(brand)}
          onChange={() => handleCheckbox("brands", brand)}
          className="mb-2"
        />
      ))}

      <hr />

      <h6 className="fw-bold">Features</h6>
      {features.map((feature) => (
        <Form.Check
          key={feature}
          type="checkbox"
          label={feature}
          checked={filters.features.includes(feature)}
          onChange={() => handleCheckbox("features", feature)}
          className="mb-2"
        />
      ))}

      <hr />

      <h6 className="fw-bold">Condition</h6>
      {conditions.map((cond) => (
        <Form.Check
          key={cond}
          type="radio"
          name="condition"
          label={cond}
          checked={filters.condition === cond}
          onChange={() => setFilters({ ...filters, condition: cond })}
          className="mb-2"
        />
      ))}

      <hr />

      <h6 className="fw-bold">Price Range</h6>
      <Form.Control
        type="number"
        placeholder="Min"
        value={filters.priceMin}
        onChange={(e) =>
          setFilters({ ...filters, priceMin: e.target.value })
        }
        className="mb-2"
      />
      <Form.Control
        type="number"
        placeholder="Max"
        value={filters.priceMax}
        onChange={(e) =>
          setFilters({ ...filters, priceMax: e.target.value })
        }
        className="mb-3"
      />

      <Button onClick={handleApply} className="w-100">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <>
      <Button
        variant="light"
        className="d-lg-none mb-3 border"
        onClick={() => setShowMobile(true)}
      >
        <RiFilterLine /> Filters
      </Button>

      <div className={`d-none d-lg-block ${className}`}>
        <Content />
      </div>

      <Offcanvas
        show={showMobile}
        onHide={() => setShowMobile(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Content />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;