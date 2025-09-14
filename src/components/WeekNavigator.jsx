
const WeekNavigator = () => {
    const now = new Date()
    
    const format_date = (date) => {
        const year = date.getFullYear();
        const monthName = date.toLocaleString('en-US', { month: 'long' });
        const day = String(date.getDate()).padStart(2, '0');
        return `${monthName} ${day}, ${year}`;
    }
    console.log(format_date(now))
  return (
    <div>WeekNavigator</div>
  )
}

export default WeekNavigator