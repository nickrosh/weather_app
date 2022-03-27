

const Current = ({data}) => {

    return (
    <section className="bg-light p-5">
        <div className="container">
            <p>Temperature is {data.temp}</p>
            <p>Humidity is {data.humidity}</p>
            <p>Pressure is {data.pressure}</p>

            {/* for some reason, this is throwing an error */}
            {/* <p>Weather is {data.weather[0].main}</p>
            <p>{data.weather[0].description}</p> */}
      </div>
    </section>
    )
}

export default Current
