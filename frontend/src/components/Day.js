import { convertDate } from "../WeatherService"

const Day = ({day}) => {
    return (
        <div className="col text-center align-items-evenly h-100">
            <p>{convertDate(day.dt)}</p>
        </div>
    )
}

export default Day