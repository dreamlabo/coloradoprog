const meetingsDetailsSection = document.getElementById('meeting-details-section');

const currentMeeting = returnUpcomingMeeting();

if(currentMeeting) {
    const meetingDetailsTemplate = document.getElementById('meeting-details-template');
    const meetingDetails = meetingDetailsTemplate.content.cloneNode(true);

    const meetingDate = meetingDetails.querySelector('#date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate = currentMeeting.date.toLocaleDateString('en-US', options);
    meetingDate.textContent = formattedDate;

    const meetingTime = meetingDetails.querySelector('#meeting-time');
    meetingTime.textContent = currentMeeting.time
  
    const meetingPlaceOne = meetingDetails.querySelector('#meeting-place-one');
    meetingPlaceOne.textContent = `This month ${currentMeeting.host} is hosting (Thanks ${currentMeeting.host}!).`
    
    const meetingPlaceTwo = meetingDetails.querySelector('#meeting-place-two');
    meetingPlaceTwo.innerHTML = `For directions to join the meeting and to RSVP, email ${currentMeeting.host} at <a class="meeting-email-link" href="mailto:${currentMeeting.hostEmail}"> ${currentMeeting.hostEmail}</a>`


    const meetingPlaceThree = meetingDetails.querySelector('#meeting-place-three');
    meetingPlaceThree.innerText = `Don't wait until the last minute, RSVP as soon as you can. ${currentMeeting.host}  will then send you directions to join us at the meeting. `

    if(currentMeeting.additionalInfo.length > 0) {
        const additionalInfoTemplate = document.getElementById('additional-info-template')
        const additionalInfoElement =  additionalInfoTemplate.content.cloneNode(true);
        const infoContainer = additionalInfoElement.querySelector('.additional-info-container');
        
        currentMeeting.additionalInfo.forEach(element => {
            const info = document.createElement('p');
            info.classList.add("meetings-meeting-details__text")
            info.textContent = element;
            infoContainer.appendChild(info);
        })

        meetingDetails.appendChild(additionalInfoElement);
    }
    meetingsDetailsSection.appendChild(meetingDetails);
}
else {
    const comingSoonTemplate = document.getElementById("coming-soon-template");
    const comingSoonSection = comingSoonTemplate.content.cloneNode(true);
    meetingsDetailsSection.appendChild(comingSoonSection);
}