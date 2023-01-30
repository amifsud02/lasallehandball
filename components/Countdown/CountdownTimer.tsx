import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Match Commenced</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        :
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        :
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        :
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  ssr: false
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;