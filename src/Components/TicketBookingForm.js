import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TicketBookingForm = (props) => {
    const { name } = props;

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: ""
    });

    const [showForm, setShowForm] = useState(false);

    function changeHandler(event) {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        });
    }

    function handleBookNow() {
        setShowForm(true);
    }

    function submitHandler(event) {
        event.preventDefault();
    
        let movieBookingDetails = {
            MovieName: name,
            userDetails,
        };
    
        let sessionStorageMovieData = sessionStorage.movieBookingDetails;
        if (typeof sessionStorageMovieData !== 'undefined') {
            try {
                let parseArray = JSON.parse(sessionStorageMovieData);
                let newArrayStorage = [
                    ...parseArray, movieBookingDetails
                ];
                sessionStorage.setItem('movieBookingDetail', JSON.stringify(newArrayStorage));
            } catch (error) {
                console.error('Error parsing sessionStorage.movieBookingDetails:', error);
            }
        } else {
            sessionStorage.setItem('movieBookingDetails', JSON.stringify([movieBookingDetails]));
        }
    
        setUserDetails({
            name: "",
            email: ""
        });
        alert('You booked your ticket successfully!');
    }
    
    

    return (
        <div className="container mt-4 text-center"
            style={{width : '80%', padding : '20px 215px', margin : '0 auto'}}>
            {!showForm ?
                <Button onClick={handleBookNow} variant="primary" style={{borderRadius : '5px', padding : '10px 20px'}}>
                    Book Now
                </Button>
                :
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="fromBasicName">
                        <Form.Label style={{ fontSize: '20px' }}>Movie Name</Form.Label>
                        <Form.Control defaultValue={name} disabled type="text" placeholder="Movie Name" style={{ fontSize: '20px' }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label style={{ fontSize: '20px' }}>Your Name</Form.Label>
                        <Form.Control required name="name" value={userDetails.name} onChange={changeHandler} type="text" placeholder="Enter your name" style={{ fontSize: '20px' }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: '20px' }}>Email address</Form.Label>
                        <Form.Control required name="email" value={userDetails.email} onChange={changeHandler} type="email" placeholder="Enter email" style={{ fontSize: '20px' }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            }
        </div>
    );
}

export default TicketBookingForm;
