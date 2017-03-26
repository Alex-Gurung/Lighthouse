fetch('https://naitianswebsite.com/register/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'name': 'thing.state.name',
    'phone': 'yourOtherValue',				//ALL OF THIS SHOULD BE
    'group-size': 'yourOtherValue',			//THIS.STATE OR WHATEVER
    'duration': 'yourOtherValue',
    'location': 'yourOtherValue',			// <-- here, location is the current latitiude and longitude
    'event': 'yourOtherValue',
  })
})

fetch('https://naitianswebsite.com/hosts/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'name': 'thing.state.name',
    'phone': 'yourOtherValue',				//ALL OF THIS SHOULD BE THIS.STATE OR WHATEVER
    'location': 'yourOtherValue',		// <--- here, location is a street address
    'capacity': 'yourOtherValue',
    'duration': 'yourOtherValue',
    'event': 'yourOtherValue',
  })
})

fetch('https://naitianswebsite.com/incidents/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'name': 'thing.state.name',
    'phone': 'yourOtherValue',				//ALL OF THIS SHOULD BE THIS.STATE OR WHATEVER
    'location': 'yourOtherValue',		// <--- here, location is a street address
    'capacity': 'yourOtherValue',
    'duration': 'yourOtherValue',
    'event': 'yourOtherValue',
  })
})