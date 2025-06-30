// //GET 
// axios.get('https://httpbin.org/get').then((res) => console.log(res)).catch((err) => console.log(err))

// //POST
// axios.post('https://httpbin.org/post', {
//     name: 'onur',
//     lastName: 'khn'
// }).then(res => console.log(res)
// )
// //PUT
// axios.put('https://httpbin.org/put', {
//     name: 'onur',
//     lastName: 'htr2b'
// }).then(res => console.log(res.data))
// //DELETE
// axios.delete('https://httpbin.org/delete', {
//     name: 'onur',
//     lastName: 'htr2b'
// }).then(res => console.log(res.data))

async function runSeq() {
    try {
        //GET
        const getRes = await axios.get('https://httpbin.org/get')
        console.log('End of GET:', getRes.data);

        //POST
        const postRes = await axios.post('https://httpbin.org/post', {
            name: 'onur',
            lastName: 'khn'
        })
        console.log('End of POST: ', postRes.data);
        //PUT
        const putRes = await axios.put('https://httpbin.org/put', {
            name: 'onur',
            lastName: 'htr2b'
        })
        console.log('End of PUT: ', putRes.data);
        //DELETE
        const deleteRes = await axios.delete('https://httpbin.org/delete', {
            data: {
                name: 'onur',
                lastName: 'htr2b'
            }
        })
        console.log('End of DELETE ', deleteRes.data);
        //GET
        const getResAgain = await axios.get('https://httpbin.org/get')
        console.log('End of GET:', getResAgain.data);
    } catch (err) {
        console.log(err);
    }
}
runSeq()