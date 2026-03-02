import React from 'react';
import { RiLayoutGridFill, RiListUnordered } from '@remixicon/react';
import { useLocation, useNavigate } from 'react-router-dom';

const TopToolbar = ({ viewMode, setViewMode, totalItems }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const currentSort = params.get('sort') || 'featured';
    const isVerified = params.get('verified') === 'true';

    const handleUpdateURL = (key, value) => {
        if (value || value === false) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        navigate({ search: params.toString() });
    };

    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center p-3 bg-white border rounded shadow-sm gap-3">
            <div className="text-center text-md-start">
                {totalItems || 0} items in <strong className="fw-bold">Mobile accessory</strong>
            </div>
            
            <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center">
                <div className="form-check mb-0">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="verified" 
                        checked={isVerified}
                        onChange={(e) => handleUpdateURL('verified', e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="verified">Verified only</label>
                </div>

                <select 
                    className="form-select form-select-sm" 
                    style={{ width: 'auto' }}
                    value={currentSort}
                    onChange={(e) => handleUpdateURL('sort', e.target.value)}
                >
                    <option value="featured">Featured</option>
                    <option value="price_low_high">Price: Low to High</option>
                    <option value="price_high_low">Price: High to Low</option>
                    <option value="newest">Newest</option>
                </select>

                <div className="btn-group">
                    <button 
                        className={`btn btn-outline-secondary btn-sm ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        <RiLayoutGridFill size={18} />
                    </button>
                    <button 
                        className={`btn btn-outline-secondary btn-sm ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                        <RiListUnordered size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopToolbar;