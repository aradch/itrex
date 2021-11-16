import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import { ChevronRight, ChevronLeft } from 'react-feather'



export const CalendarForAppointment = ({ date, setDate }) => {

  return (
    <Calendar
      locale="en-EN"
      nextLabel={<ChevronRight color="#A1ABC9" />}
      prevLabel={<ChevronLeft color="#A1ABC9" />}
      onChange={setDate}
      value={date}
      minDate={new Date()}
    />
  )
}