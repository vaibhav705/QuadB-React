import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const { movie } = props;
    const navigate = useNavigate();

    function handleClick() {
        let movieId = movie.show.id;
        navigate(`/bookmovie/${movieId}`, { state: { movie } });
    }

    return (
        <Col className='mt-4'>
            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '80%', border: '1px solid #ccc', borderRadius: '10px', margin : '0 auto' }}>
                {movie.show.image && (
                    <Card.Img 
                        variant="top" 
                        src={movie.show.image.original} 
                        style={{ 
                            borderRadius: '10px 0 0 10px', 
                            height: '400px',
                            width: '400px',
                            objectFit: 'contain',
                            padding : '50px'
                            
                        }} 
                    />
                )}
                <Card.Body style={{ flex: 1, padding : '0 250px' }}>
                    <Card.Title style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{movie.show.name}</Card.Title>
                    <Card.Text>
                        <span style={{fontSize: '1.2rem', fontWeight: 'bold' }}>Language: </span> <span style={{fontSize: '1.2rem' }}>{movie.show.language} </span>
                        <br />
                        <span style={{fontSize: '1.2rem', fontWeight: 'bold' }}>Status:</span> <span style={{fontSize: '1.2rem' }}> {movie.show.status} </span>
                        <br />
                        <span style={{fontSize: '1.2rem', fontWeight: 'bold' }}>Rating:</span> <span style={{fontSize: '1.2rem' }}> {movie.show.rating.average} </span> 
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick} style={{borderRadius : '5px', padding : '10px 20px'}}>Show More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MovieCard;
