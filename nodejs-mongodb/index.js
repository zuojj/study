const MongoClient = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017/users';

MongoClient.connect(dburl, (err, db) =>  {
    console.log('连接成功');
    // users 表
    let users = db.collection('users');

    let rows = [{
        "name": 'a',
        "sex": 'male'
    },{
        "name": 'b',
        "sex": 'male'
    },{
        "name": 'c',
        "sex": 'male'
    },{
        "name": 'd',
        "sex": 'male'
    }];

    users.ls(rows).then( (result) => {
        console.log(result);
    })
    return;
    users.insert(rows, (err, result) => {
        if(err) {
            console.log(`Error: ${err}`);
            return;
        }
        console.log('Insert ok');
        db.close();        
    });
});

/* MongoClient.connect(dburl, (err, db) =>  {
    console.log('连接成功');
    // users 表
    let users = db.collection('users');

    users.find({
        "sex": 'male'
    }).toArray((err, result) => {
        if(err) {
            console.log(`Error: ${err}`);
            return;
        }
        console.log(result);
        db.close();        
    });
}); */


db.users.insert((function() {
    let result = [];
    for(let i = 0; i < 100; i++) {
        result.push({
            "name": 'b' + i,
            age: i
        })
    }
    return result
})())


db.users.mapReduce(
    function() {
        emit(this.name, this.age);
    },
    function(key, values) {
        return Array.sum(values);
    },
    {
        name: /^a1/,
        out: "output_total"
    }
)

db.users.find({
    age: {
        $lt: 30,
        $gt: 10
    }
})




db.users.find({
    $or: [{
        age: {
            $lt: 2
        }
    }, {
        name: "a5"
    }]
})