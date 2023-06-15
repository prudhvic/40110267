
const TrainPage = ({ trains }) => {
    return (
        <div>
            {
                trains.map((train) => (
                    <div>
                        <h2>{train.trainName}</h2>
                    </div>
                ))
            }

        </div>
    )
}

export default TrainPage