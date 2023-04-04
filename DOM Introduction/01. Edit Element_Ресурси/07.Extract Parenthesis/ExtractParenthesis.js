function extract(content) {

    let elementText = document.getElementById(content).textContent;

    let pattern = /\(([^)]+)\)/g;

    let result = [];

    let match = pattern.exec(elementText)

    while(match) {
        result.push(match[1]);
        match = pattern.exec(elementText)
    }

    return result.join("; ")

}

extract('content')