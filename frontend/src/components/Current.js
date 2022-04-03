import { getIconUrl } from "../WeatherService"

const Current = ({data}) => {

    return (
        <div className="col-lg-6 col-md-12">
            <div className="card-body bg-dark text-light text-center align-items-center justify-content-center rounded-3 h-100">
                <div className="d-flex flex-column align-items-center justify-content-evenly h-100">
                <h1 className="display-1">Temperature: <strong>{data?.main?.temp}&deg;F</strong></h1>
                <h1 className="display-1">Humidity: <strong>{data?.main?.humidity}%</strong></h1>

                {data?.weather?.map(condition =>
                <h1 className="display-1" key={condition.id}>
                    <img src={getIconUrl(condition.icon)} alt={condition.main} className="image-fluid"/> {condition.description}
                </h1>)
                }
                </div>
            </div>
        </div>
    )
}

export default Current
