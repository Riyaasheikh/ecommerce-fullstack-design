import React from 'react'
import { ProductData } from '../../../data/Content'
import SectionWrapper from '../../global/SectionWrapper'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Related = () => {
    // Filter to get specific dummy data
    const RelatedItems = ProductData.filter(items => items.id >= 5 && items.id <= 10)

    return (
        <SectionWrapper>
            {/* Title changes to match your request */}
            <h4 className='fw-bold mb-4'>You may also like</h4>
            
            <div className='bg-white border rounded shadow-sm p-3'>
                {/* d-flex flex-row: forces horizontal layout for mobile
                  overflow-auto: enables horizontal scroll
                  d-md-grid: reverts to standard grid for tablet/desktop
                  g-3: maintains gutter spacing
                */}
                <div 
                    className='d-flex flex-row flex-nowrap overflow-auto d-md-grid g-3 no-scrollbar'
                    style={{ 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1rem' 
                    }}
                >
                    {RelatedItems.map((prod, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0" 
                            style={{ width: '160px' }} // Fixed width for horizontal scroll on mobile
                        >
                            <Card className="h-100 border-0 shadow-none">
                                <Link to={`/product/${prod.id}`}>
                                    <div 
                                        className="p-3 rounded text-center mb-2" 
                                        style={{ 
                                            backgroundColor: '#EEEEEE', 
                                            mixBlendMode: 'multiply' 
                                        }}
                                    >
                                        <Card.Img 
                                            variant="top" 
                                            src={prod.img} 
                                            style={{ 
                                                objectFit: 'contain', 
                                                aspectRatio: '1 / 1',
                                                height: '120px' 
                                            }} 
                                        />
                                    </div>
                                </Link>

                                <Card.Body className="p-0">
                                    <Card.Text 
                                        className="fw-bold mb-1 text-dark"
                                        style={{ fontSize: '1rem' }}
                                    >
                                        $10.30
                                    </Card.Text>
                                    <Card.Title 
                                        className="mb-1 text-secondary" 
                                        style={{ 
                                            fontSize: '0.85rem', 
                                            fontWeight: '400',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        {prod.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional CSS to hide scrollbar while keeping functionality */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @media (min-width: 768px) {
                    .flex-shrink-0 {
                        width: auto !important;
                    }
                }
            `}</style>
        </SectionWrapper>
    )
}

export default Related