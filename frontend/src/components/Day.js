import { convertDate, getIconUrl } from "../WeatherService"

const Day = ({day}) => {
    return (
        <div className="col">
        <div className="card-body bg-dark text-light text-center align-items-center justify-content-center rounded-3 h-100">
            <div className="d-flex flex-column align-items-center justify-content-evenly h-100">
            <p className="lead">{convertDate(day.dt)}</p>
            <p>Day: <strong>{day?.temp?.day}&deg;F</strong></p>
            <p>Night: <strong>{day?.temp?.night}&deg;F</strong></p>

            {day?.weather?.map(condition =>
            <p key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main} className="image-fluid"/><br/> {condition.description}
            </p>)
            }
            </div>
        </div>
    </div>
    )
}

export default Day