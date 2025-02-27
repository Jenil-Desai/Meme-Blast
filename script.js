async function fetchMeme() {
    // Get the value from the input element with id 'content'
    const content = document.getElementById('content').value;

    try {
        // Make a GET request to the Tenor API with the search query and API key
        const response = await fetch(`https://g.tenor.com/v1/search?q=${content}&key=${"LIVDSRZULELA"}&limit=1&contentfilter=high`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return document.getElementById("error-msg").innerText = "Error fetching data";
        }

        const data = await response.json();
        // Get the URL of the first GIF in the response
        const imageUrl = data.results[0].media[0].gif.url;

        // Set the src attribute of the image element with id 'image' to the GIF URL
        document.getElementById("image").src = imageUrl;
    } catch (error) {
        return document.getElementById("error-msg").innerText = `Error fetching data ${error}`;
    }
}