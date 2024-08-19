const KENTS_EMAIL = 'kent.adamson@comcast.net'
const KENTS_HOST_NAME = 'Kent'
const MEETING_TIME_6PM = '6:00pm'
const MEETING_TIME_5PM = '5:00pm'


meetings = [
    // {
    //     date: new Date('2024/4/30'),
    //     time: '6:00pm',
    //     host: 'Kent',
    //     hostEmail: 'kent.adamson@comcast.net',
    //     additionalInfo: []
    // },
    {
        date: new Date('2024/08/03'),
        time: MEETING_TIME_6PM ,
        host: KENTS_HOST_NAME,
        hostEmail: KENTS_EMAIL,
        additionalInfo: []
    }, 
    {
        date: new Date('2024/08/31'),
        time: MEETING_TIME_5PM ,
        host: KENTS_HOST_NAME,
        hostEmail: KENTS_EMAIL,
        additionalInfo: ["Please note the earlier start time.", "Using the proceeds from our annual Progfest, food from GQue Barbecue, including ribs, chicken, brisket, coleslaw, beans, buns & sauces, will be provided.", 
            "Please bring your own beverages, and if you'd like, feel free to bring a dessert (or side dish) to share!",
            "Hope to see you there!"
            
        ]
    }, 
]

function returnUpcomingMeeting() {

    var currentDate = new Date(new Date().toDateString()); 
    
    // const currentDateFormatted = currentDate.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
    
    return meetings.find(meeting => {
        var date2 = new Date(new Date(meeting.date).toDateString()); 
        // const meetingDateFormatted = meeting.date.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
        return date2 >= currentDate;
      });
}
