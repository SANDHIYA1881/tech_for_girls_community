const res = await fetch('https://script.google.com/macros/s/AKfycbyv8LtkFb3akZfHbe8B2EgZOfjdB4wEFX4SQM8-iKRN64y2leDLyfwQqs6zzZCRF0tR/exec', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});
