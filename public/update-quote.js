const updateQuoteButton = document.getElementById('update-quote');
const updateQuoteContainer = document.getElementById('update-quote-container');

const renderError = response => {
  updateQuoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
}

updateQuoteButton.addEventListener('click', () => {
  const quoteId = document.getElementById('quote-id').value;
  const newQuote = document.getElementById('new-quote').value;
  const newPerson = document.getElementById('new-person').value;
  fetch(`/api/quotes/${quoteId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quote: newQuote, person: newPerson })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    updateQuoteContainer.innerHTML = `
      <h3>Quote updated successfully!</h3>
      <div class="quote-text">${response.quote}</div>
      <div class="attribution">- ${response.person}</div>
      <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `;
  });
});
