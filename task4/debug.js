// ************************************************    MADE TWO OPTIONS    **************************************************************

// ************************************************    FIRST WAY    *********************************************************************

var server_echo;
var json = {
    json: {
        a: 1,
        b: 2,
    },
    delay: 3,
};

fetch('/echo/', {
    method: 'post',
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json, text/*',
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay,

    // JSON.stringify({ json: encodeURIComponent(JSON.stringify(json.json)), delay: json.delay }),
})
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        server_echo = result.echo;
        alert(result);
        server_echo.forEach((element) => console.log(element));
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });

// ******************************************* SECOND WAY *******************************************************************************

// var server_echo;
// var json = {
//     json: {
//         a: 1,
//         b: 2,
//     },
//     delay: 3,
// };

// (async () => {
//     try {
//         let response = await fetch('/echo/', {
//             method: 'post',
//             headers: {
//                 Accept: 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json, text/*',
//             },
//             body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay,

//             // JSON.stringify({ json: encodeURIComponent(JSON.stringify(json.json)), delay: json.delay }),
//         });

//         const result = await response.json();
//         server_echo = result.echo;
//         alert(result);
//         server_echo.forEach((element) => console.log(element));
//     } catch (error) {
//         console.log('Request failed', error);
//     }
// })();
