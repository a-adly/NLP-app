function handleSubmit(e) {
    e.preventDefault()

    let formText = getElem('#url').value

    if (Client.checkForURL(formText)) {
        postData('http://localhost:8081/api', {
                url: formText
            })
            .then(function (res) {
                // console.log('res: ', res)
                let result = '';
                if (!res) {
                    result = 'An error occurred, please try again later';
                } else {
                    for (const key of Object.keys(res)) {
                        const value = (key == 'score_tag') ? polarityChecker(res[key]) : res[key]
                        console.log(key, value)
                        result += `<div><span>${key}:</span> ${value}</div>`
                    }
                }
                getElem('#result').innerHTML = result;
            })
    } else {
        alert('Please check the URL and try again.');
    }
}

const getElem = selector => document.querySelector(selector)

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};


const polarityChecker = (score) => {
    let display;
    switch (score) {
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
            break;
        default:
            display = 'N/A';
    }
    return display.toUpperCase();
}

export {
    handleSubmit
}
export {
    polarityChecker
}