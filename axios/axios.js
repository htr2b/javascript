const baseUrl = 'http://localhost:3000/todos';

const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')
const putBtn = document.getElementById('put-btn')
const deleteBtn = document.getElementById('delete-btn')
let currentId = null;

const output = document.getElementById('output');
async function getData() {
    const res = await axios.get(baseUrl);
    output.textContent = JSON.stringify(res.data, null, 2);
    if (res.data.length) {
        currentId = res.data[res.data.length - 1].id;
        console.log('currentId set to', currentId);
    }
}

function postData() {
    const res = axios.post(baseUrl, {
        title: 'created',
        completed: false
    });
    output.textContent = JSON.stringify(res.data, null, 2);
    currentId = res.data.id;
    console.log('created id', currentId);
}

function putData() {
    if (!currentId) return alert('first get or post.');
    const res = axios.put(`${baseUrl}/${currentId}`, {
        id: currentId,
        title: 'updated',
        completed: true
    });
    output.textContent = JSON(res.data, null, 2);
}

function deleteData() {
    if (!currentId) return alert('Önce GET veya POST yapın.');
    axios.delete(`${baseUrl}/${currentId}`);
    output.textContent = `deleted: id=${currentId}`;
    currentId = null;
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putBtn.addEventListener('click', putData);
deleteBtn.addEventListener('click', deleteData);