import { RiLockPasswordLine, RiMessage3Line, RiTruckLine } from '@remixicon/react';
import { Col, Row } from 'react-bootstrap';
import SectionWrapper from '../../global/SectionWrapper';

const Featurebar = () => {
    const features = [
        { icon: <RiLockPasswordLine />, title: 'Secure payment', text: 'Have you ever finally just' },
        { icon: <RiMessage3Line />, title: 'Customer support', text: 'Have you ever finally just' },
        { icon: <RiTruckLine />, title: 'Free delivery', text: 'Have you ever finally just' },
    ];

    return (
        <SectionWrapper>
        <Row className="my-4 g-1">
            {features.map((f, i) => (
                <Col key={i} md={3}>
                    <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center" 
                             style={{ width: '38px', height: '38px', flexShrink: 0 }}>
                            {f.icon}
                        </div>
                        <div>
                            <h6 className="mb-0 fw-medium">{f.title}</h6>
                            <small className="text-muted">{f.text}</small>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
            </SectionWrapper>
    );
};
export default Featurebar