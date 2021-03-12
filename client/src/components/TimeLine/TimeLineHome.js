import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './TimelineHome.scss';

export const TimelineHome = () => {
  return (
    <div className='timeline'>
      <h4 className='header'>Todays Agenda</h4>
      <Timeline align='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <p>9:00am</p>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 className='time-title'>Eat</h4>
            <p className='time-info'>Feed kids</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <p>11:00am</p>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 className='time-title'>Code</h4>
            <p className='time-info'>Get that Final done</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <p>11:00pm</p>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4 className='time-title'>Sleep</h4>
            <p className='time-info'>Refresh the noggin</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
