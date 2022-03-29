

const Current = ({data}) => {

    return (
    <section className="bg-light p-5 text-center">
        <div className="container">
            <h3>Temperature is <strong>{data.temp}</strong></h3>
            <h3>Humidity is <strong>{data.humidity}</strong></h3>

            {/* for some reason, this is throwing an error */}
            {/* <p>Weather is {data.weather[0].main}</p>
            <p>{data.weather[0].description}</p> */}
      </div>
    </section>
    )
}

export default Current
