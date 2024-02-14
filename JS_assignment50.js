function fetchData() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.UNSENT) {
            console.log("XHR state: UNSENT");
        } else if (xhr.readyState === XMLHttpRequest.OPENED) {
            console.log("XHR state: OPENED");
        } else if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
            console.log("XHR state: HEADERS_RECEIVED");
        } else if (xhr.readyState === XMLHttpRequest.LOADING) {
            console.log("XHR state: LOADING");
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log("XHR state: DONE");
            
            if (xhr.status === 200) {
                console.log("Response status: 200 (OK)");
                console.log("Response data:", xhr.responseText);
            } else {
                console.log("Response status:", xhr.status);
                console.log("Response data:", xhr.statusText);
            }
        }
    };

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.send();
}

fetchData();
