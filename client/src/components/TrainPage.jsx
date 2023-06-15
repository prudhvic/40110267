import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const TrainPage = ({ trains }) => {

    return (
        <Grid container spacing={2}>
            {trains.map((train) => (
                <Grid item key={train.trainName} xs={12} sm={6} md={4}>
                    <Card variant="outlined">
                        <CardMedia
                            component="img"
                            alt="Sample Image"
                            style={{ width: '100%', height: 'auto' }}
                            image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=984&q=80"
                        />
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                Name: {train.trainName} ({train.trainNumber})
                            </Typography>
                            <Typography>
                                Departure Time: {train.departureTime.Hours}Hr:{train.departureTime.Minutes}min:{train.departureTime.Seconds}sec
                            </Typography>
                            <Typography>
                                Delay: {train.delayedBy} Hours
                            </Typography>
                            <div>
                                <Typography variant="h6" component="h3">
                                    Seats Available
                                </Typography>
                                <Typography>
                                    AC: {train.seatsAvailable?.AC}
                                </Typography>
                                <Typography>
                                    Sleeper: {train.seatsAvailable?.sleeper}
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
                        <Button component={Link} variant="outlined" color="info" to={`/trains/${train.trainNumber}`}>View Details</Button>
                    </Card>
                </Grid >
            ))}
        </Grid >


    )
}

export default TrainPage