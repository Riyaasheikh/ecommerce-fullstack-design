// src/components/SectionWrapper.jsx
import { Container } from 'react-bootstrap';

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <Container className={`my-2  ${className}`}>
      <div className="custom-card-bg">
        {children}
      </div>
    </Container>
  );
};

export default SectionWrapper;