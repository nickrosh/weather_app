import { getIconUrl } from "../WeatherService"

const Current = ({data}) => {

    return (
    <section className="bg-light p-5">
        <div className="container">
            <h3>Temperature is <strong>{data?.main?.temp}&deg;F</strong></h3>
            <h3>Humidity is <strong>{data?.main?.humidity}%</strong></h3>

            {/* {data.weather.map(condition =>
            <div key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
            </div>)
            } */}
      </div>
    </section>
    )
}

export default Current
