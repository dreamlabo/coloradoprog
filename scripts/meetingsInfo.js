const KENTS_EMAIL = "kent.adamson@comcast.net";
const KENTS_HOST_NAME = "Kent";
const MEETING_TIME_6PM = "6:00pm";
const MEETING_TIME_5PM = "5:00pm";

meetings = [
  {
    date: new Date("2024/08/31"),
    time: MEETING_TIME_5PM,
    host: KENTS_HOST_NAME,
    hostEmail: KENTS_EMAIL,
    additionalInfo: [
      "Please note the earlier start time.",
      "Using the proceeds from our annual Progfest, food from GQue Barbecue, including ribs, chicken, brisket, coleslaw, beans, buns & sauces, will be provided.",
      "Please bring your own beverages, and if you'd like, feel free to bring a dessert (or side dish) to share!",
      "Hope to see you there!",
    ],
  },
  {
    date: new Date("2024/12/21"),
    time: MEETING_TIME_5PM,
    host: KENTS_HOST_NAME,
    hostEmail: KENTS_EMAIL,
    additionalInfo: ["Please note the earlier start time."],
  },
  {
    date: new Date("2025/03/01"),
    time: MEETING_TIME_6PM,
    host: KENTS_HOST_NAME,
    hostEmail: KENTS_EMAIL,
    additionalInfo: [],
  },
  {
    date: new Date("2025/05/03"),
    time: MEETING_TIME_6PM,
    host: KENTS_HOST_NAME,
    hostEmail: KENTS_EMAIL,
    additionalInfo: [],
  },
  {
    date: new Date("2025/06/07"),
    time: MEETING_TIME_6PM,
    host: KENTS_HOST_NAME,
    hostEmail: KENTS_EMAIL,
    additionalInfo: [],
  },
];

function returnUpcomingMeeting() {
  var currentDate = new Date(new Date().toDateString());
  console.log("hello");

  return meetings.find((meeting) => {
    var date2 = new Date(new Date(meeting.date).toDateString());
    return date2 >= currentDate;
  });
}
