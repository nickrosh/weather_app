const Precipitation = ({data}) => {
    const currentUnix = data[0]?.dt
    const milliseconds = currentUnix * 1000
    const currentTime = new Date(milliseconds)
    const currentTimeString = currentTime.toLocaleString() 


    return (
        <div className="col-lg-6 col-md-12">
            <div className="card-body bg-dark text-light text-center rounded-3">
                <h3>Current Time: {currentTimeString}</h3>
                <h3>Chance of Precipitation: {data[0]?.precipitation}%</h3>
            </div>
        </div>
    )
}

export default Precipitation