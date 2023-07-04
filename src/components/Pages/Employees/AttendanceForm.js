import React, { useState } from 'react';

const AttendanceForm = () => {
  const [attendanceId, setAttendanceId] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const handleSubmitTimeIn = (e) => {
    e.preventDefault();
    // Handle form submission and API call to save time in data
    // ...

    // Reset the form fields
    setAttendanceId('');
    setAttendanceDate('');
    setTimeIn('');
  };

  const handleSubmitTimeOut = (e) => {
    e.preventDefault();
    // Handle form submission and API call to save time out data
    // ...

    // Reset the form fields
    setAttendanceId('');
    setAttendanceDate('');
    setTimeOut('');
  };

  const handleSetCurrentTimeIn = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    setTimeIn(currentTime);
  };

  const handleSetCurrentTimeOut = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    setTimeOut(currentTime);
  };

  const handleSetCurrentDate = () => {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    setAttendanceDate(currentDate);
  };

  const isTimeInDisabled = !attendanceDate;
  const isTimeOutDisabled = !attendanceDate || !timeIn;

  return (
    <div>
      <div className="container" style={{ marginTop: '70px' }}></div>
      <h2>Attendance</h2>
      <form>
        <div>
          <label>Attendance ID:</label>
          <input
            type="text"
            value={attendanceId}
            onChange={(e) => setAttendanceId(e.target.value)}
          />
        </div>
        <div>
          <label>Attendance Date:</label>
          <input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
          />
          <button type="button" onClick={handleSetCurrentDate}>
            Set Current Date
          </button>
        </div>
        <div>
          <label>Time In:</label>
          <input
            type="time"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
            disabled={isTimeInDisabled}
          />
          <button type="button" onClick={handleSetCurrentTimeIn}>
            Set Current Time In
          </button>
          <button type="submit" onClick={handleSubmitTimeIn} disabled={isTimeInDisabled}>
            Submit Time In
          </button>
        </div>
        <div>
          <label>Time Out:</label>
          <input
            type="time"
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
            disabled={isTimeOutDisabled}
          />
          <button type="button" onClick={handleSetCurrentTimeOut}>
            Set Current Time Out
          </button>
          <button type="submit" onClick={handleSubmitTimeOut} disabled={isTimeOutDisabled}>
            Submit Time Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
