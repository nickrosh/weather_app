import { getIconUrl } from "../WeatherService"

const Current = ({data}) => {

    return (
        <div className="col-lg-6 col-md-12">
            <div className="card-body bg-dark text-light text-center rounded-3">
                <h3>Temperature is <strong>{data?.main?.temp}&deg;F</strong></h3>
                <h3>Humidity is <strong>{data?.main?.humidity}%</strong></h3>

                {data?.weather?.map(condition =>
                <h3 key={condition.id}>
                    <img src={getIconUrl(condition.icon)} alt={condition.main} className="image-fluid"/> {condition.description}
                </h3>)
                }
            </div>
        </div>
    )
}

export default Current
