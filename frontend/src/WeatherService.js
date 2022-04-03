export function getIconUrl(code) {
    return `http://openweathermap.org/img/wn/${code}.png`;
}

export const convertTimestamp = (utcTime) => {
    const milliseconds = utcTime*1000
    const currentTime = new Date(milliseconds)
    return currentTime.toLocaleString([], {hour: '2-digit', minute:'2-digit'}) 
  }


export const convertDate = (utcTime) => {
    const milliseconds = utcTime*1000
    const currentTime = new Date(milliseconds)
    return currentTime.toLocaleString([], {weekday: 'long', month:'long', day: 'numeric'}) 
  }