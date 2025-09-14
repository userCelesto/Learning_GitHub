import CalendarDropDown from "../components/CalendarDropDown"
import WeekNavigator from "../components/WeekNavigator"

const Calendar = () => {
    const array = [
        "All Classes",
        "dog",
        "cat",
        "binaliktad",
        "kinurotPA"
    ]
    return (
        <div>
            <div className="flex pt-4 px-4 sm:flex-col lg:flex-row">
                <CalendarDropDown Classes={array}/>
                <WeekNavigator />
            </div>
        </div>
        
    )
}

export default Calendar