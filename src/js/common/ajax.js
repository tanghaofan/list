// export default function ajax(method, url, flag, upData, callBack) {
//     var xhr = null;
//     if (window.XMLHttpRequest) {
//         xhr = new window.XMLHttpRequest(); 
//     } else {
//         xhr = new window.ActiveXObject('Mircosoft.XMLHTTP');
//     }
//     if (method == 'GET') {
//         xhr.open('GET', url + '?' + upData + new Date(), flag);
//         xhr.send();
//     } else if (method == 'POST') {
//         xhr.open('POST', url + '?' + new Date(), flag);
//         xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
//         xhr.send(upData);
//     }
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 callBack(xhr.responseText);
//             }
//         }
//     }
// }