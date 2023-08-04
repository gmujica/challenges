function schedule_meetings(meetings) {
    meetings.sort((a, b) => a[1] - b[1]);
  
    const acceptedMeetings = [];
    let lastEndTime = 0;
  
    for (const meeting of meetings) {
      const [start, end] = meeting;
      
      if (start >= lastEndTime) {
        acceptedMeetings.push(meeting);
        lastEndTime = end;
      }
    }
  
    return acceptedMeetings;
  }
  
  const meetings = [
    [8, 9],
    [9, 10],
    [9, 11],
    [11, 12]
  ];
  
  console.log(schedule_meetings(meetings));
  