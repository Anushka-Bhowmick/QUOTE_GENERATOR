async function fetchRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');

    if (response.status === 200) {
      const { content, author } = await response.json();
      return { content, author };
    } else {
      throw new Error('Request was not successful. Status code: ' + response.status);
    }
  } catch (error) {
    throw error;
  }
}

async function updateQuote() {
  try {
    const { content, author } = await fetchRandomQuote();
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    // Update the quote and author elements
    quoteElement.textContent = content;
    authorElement.textContent = author;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Attach the updateQuote function to the button click event
const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', updateQuote);

window.onload = function() {
  updateQuote(); // Invoke the function directly, not updateQuote()
};
