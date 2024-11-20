
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw-gPmy05RyXA3ZGgf8XlGPL_RiyJa20AEDfAVp91MnHa0-nMKyHnZ0iVNtppa-45P0/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })