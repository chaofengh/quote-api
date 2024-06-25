const deleteQuoteButton = document.getElementById('delete-quote');
const deleteQuoteContainer = document.getElementById('delete-quote-container');

const renderError = response => {
  deleteQuoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
}

deleteQuoteButton.addEventListener('click', () => {
  const quoteId = document.getElementById('quote-id').value;
  fetch(`/api/quotes/${quoteId}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (response.ok) {
      deleteQuoteContainer.innerHTML = '<p>Quote deleted successfully.</p>';
    } else {
      renderError(response);
    }
  });
});
