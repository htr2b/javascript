let sampleJSON = `{
    "users": [
        {
            "id": 1,
            "firstName": "Onur",
            "lastName": "Kahan"
        },
        {
            "id": 2,
            "firstName": "Ali",
            "lastname": "Şeker"
        },
        {
            "id": 2,
            "firstName": "Ali",
            "lastname": "Şeker"
        }
    ],
    "schools": [
        {
            "id": 1234141,
            "name": "Aybu"
        }
    ]
    
}`

let users = JSON.parse(sampleJSON)
console.log(users);
