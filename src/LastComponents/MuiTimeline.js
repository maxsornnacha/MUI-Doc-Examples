import { Timeline , 
        TimelineItem ,
        TimelineSeparator,
        TimelineConnector,
        TimelineContent,
        TimelineDot,
        TimelineOppositeContent
    } from '@mui/lab'

const MuiTimeline = () => {
    // Needed to install mui lab before using

    //We can style the timeline dots
    //We can set position at TimeLine by using 'position' prop by having 'alternate , left , right '
    return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>09.30 am</TimelineOppositeContent>
             <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>10.00 am</TimelineOppositeContent>
             <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined' />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>10.30 am</TimelineOppositeContent>
             <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined' />
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
    )
}

export default MuiTimeline;