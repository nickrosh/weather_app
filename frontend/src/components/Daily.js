import Day from "./Day"

const Daily = ({daily}) => {
    return (
        <div className="row g-4">
            {daily.map((day, index) => (
                <Day key={index} day={day}/>
            ))}
        </div>
    )
}

export default Daily