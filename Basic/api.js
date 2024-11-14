function XmlRequest() {
    const xml_request = new XMLHttpRequest()

        xml_request.open("GET", "https://jsonplaceholder.typicode.com/posts")
        xml_request.send()

        xml_request.onload = function() {
            console.log(JSON.parse(this.responseText))
        }
}