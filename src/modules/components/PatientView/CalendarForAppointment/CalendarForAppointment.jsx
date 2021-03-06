import Calendar from "react-calendar"
import { ChevronRight, ChevronLeft } from 'react-feather'

import 'react-calendar/dist/Calendar.css'



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