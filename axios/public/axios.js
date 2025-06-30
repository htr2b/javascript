// script.js
const baseUrl = 'http://localhost:3000/todos';
let currentId = null;
const output = document.getElementById('output');

async function getData() {
    try {
        const res = await axios.get(baseUrl);
        const todos = res.data;
        output.textContent = JSON.stringify(todos, null, 2);
        if (todos.length) {
            currentId = todos[todos.length - 1].id;
        }
    } catch (err) {
        output.textContent = 'Hata: ' + err;
    }
}

async function postData() {
    try {
        const res = await axios.post(baseUrl, {
            title: 'created',
            completed: false
        });
        output.textContent = JSON.stringify(res.data, null, 2);
        currentId = res.data.id;
    } catch (err) {
        output.textContent = 'Hata: ' + err;
    }
}

async function putData() {
    if (!currentId) return alert('Önce GET veya POST yapın!');
    try {
        const res = await axios.put(`${baseUrl}/${currentId}`, {
            id: currentId,
            title: 'updated',
            completed: true
        });
        output.textContent = JSON.stringify(res.data, null, 2);
    } catch (err) {
        output.textContent = 'Hata: ' + err;
    }
}

async function deleteData() {
    if (!currentId) return alert('Önce GET veya POST yapın!');
    try {
        await axios.delete(`${baseUrl}/${currentId}`);
        output.textContent = `Deleted id=${currentId}`;
        currentId = null;
    } catch (err) {
        output.textContent = 'Hata: ' + err;
    }
}

document.getElementById('get-btn').onclick = getData;
document.getElementById('post-btn').onclick = postData;
document.getElementById('put-btn').onclick = putData;
document.getElementById('delete-btn').onclick = deleteData;
