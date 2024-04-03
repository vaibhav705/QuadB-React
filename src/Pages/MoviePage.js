import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Col, Container, Row} from 'react-bootstrap';
import MovieCard from '../Components/MovieCard';
import { baseUrl } from '../baseUrl';

export const MoviedPage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(baseUrl);
            setMovies(response.data);

        } catch(error) {
            console.log("Error While fetching url", error);
        }
    }

    useEffect( () => {
        fetchMovies();
    }, []);

  return (
    <Container >
        <Row>
            {
                movies.map( (movie) => {
                    return (
                        <Col key={movie.show.id} className='mt-4'>
                            <MovieCard key={movie.show.id} movie = {movie} />
                        </Col>
                    )
                })
            }
        </Row>
    </Container>
  )
}
