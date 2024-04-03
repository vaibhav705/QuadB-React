import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Summary from '../Components/Summary';
import TicketBookingForm  from '../Components/TicketBookingForm';

export const BookingPage = () => {
    const { state } = useLocation();

    const { movie } = state;

  return (
    <Container>
        <Row>
            <Col>
                <Summary name={movie.show.name} summary={movie.show.summary} img={movie.show.image.original} />
            </Col>
            <Col className="bookingForm">
                <TicketBookingForm name={movie.show.name} />
            </Col>
        </Row>
    </Container>
  )
}
