export function get(url: string, handler: (responseText: string) => void, error?: (statusText: string) => void) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                handler(request.responseText);
            } else {
                if (error) error(request.statusText);
            }
        }
    };
    request.open("GET", url);
    request.send();
}