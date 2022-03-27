

const Current = () => {

    const fetchCurrent = async () => {
        const response = await fetch('http://localhost:8000/api/v1/current')
        const data = await response.json()
        console.log(data)
        return data
      }
    const weather = fetchCurrent()
    console.log(JSON.stringify(weather))

    return (
    <section className="bg-light p-5">
        <div className="container">
           <p>
               This is stupid
           </p>
        </div>
    </section>
    )
}

export default Current
