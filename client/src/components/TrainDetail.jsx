import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';


const TrainDetail = () => {
    let navigate = useNavigate()
    let [train, setTrain] = useState([])
    let params = useParams()
    let fetchTrain = async () => {
        let response = await fetch(`http://localhost:5000/trains/${params.trainId}`)
        let data = await response.json()
        console.log(data)
        setTrain(data)
    }
    useEffect(() => {
        fetchTrain()
    }, [params.id])
    if (!train) {
        return <p>Loading...</p>
    }
    return (
        <>
            <Card variant="outlined" style={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component="img"
                    alt="Sample Image"
                    style={{ width: '50%' }}
                    image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=984&q=80"
                />
                <CardContent>
                    <Typography variant="h6" component="h2">
                        Name: {train?.trainName} ({train?.trainNumber})
                    </Typography>
                    <Typography>
                        Departure Time: {train?.departureTime?.Hours}Hr:{train?.departureTime?.Minutes}min:{train?.departureTime?.Seconds}sec
                    </Typography>
                    <Typography>
                        Delay: {train?.delayedBy} Hours
                    </Typography>
                    <div>
                        <Typography variant="h6" component="h3">
                            Seats Available
                        </Typography>
                        <Typography>
                            AC: {train?.seatsAvailable?.AC}
                        </Typography>
                        <Typography>
                            Sleeper: {train?.seatsAvailable?.sleeper}
                        </Typography>
                        <Typography variant="h6" component="h3">
                            Price details
                        </Typography>
                        <Typography>
                            AC: {train.price?.AC} Rs/-
                        </Typography>
                        <Typography>
                            Sleeper: {train.price?.sleeper} Rs/-
                        </Typography>
                    </div>
                </CardContent>

            </Card>

        </>
    )
}

export default TrainDetail