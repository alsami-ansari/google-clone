const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');

 // Event listener to show clear button when text is typed
 searchInput.addEventListener('input', () => {
            if (searchInput.value.length > 0) {
                clearBtn.style.display = 'block';
            } else {
                clearBtn.style.display = 'none';
            }
        });

          // Event listener for the clear button
          clearBtn.addEventListener('click',  () => {
            searchInput.value = ''; // Clear the input field
            clearBtn.style.display = 'none'; // Hide the clear button
        });

     // Event listener for the search form submit
document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const query = searchInput.value;
    if (query) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank'); // Open in new tab
    }
});
