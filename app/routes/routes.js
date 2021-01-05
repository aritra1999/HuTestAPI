var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db){
    app.get('/api/get/all', (req, res) => { 
        const results = db.collection('users').find((err, result) => {
            if(err){
                res.send({'error': 'An error has occured'});
            }else{
                result.forEach(console.log);
                res.send({'users': JSON.parse(result)});
            }
        });
        // res.send({'result': results});
    })

    app.get('/api/get/user/:id', (req, res) => {

        const id = req.params.id;
        const user = {'_id': new ObjectID(id)};

        db.collection('users').findOne(user, (err, item) => {
            if(err){
                res.send({'error': 'An error has occured'});
            }else{
                res.send(item);
            }
        })
    })

    app.put('/api/update/user/:id', (req, res) => {

        const id = req.params.id;
        const user = {'_id': new ObjectID(id)};
        const updatedUser = {
            email: req.body.email,
            name: req.body.name
        };

        db.collection('users').updateOne(user, updatedUser, (err, item) => {
            if(err){
                res.send({'error': 'An error has occured'});
            }else{
                res.send(item);
            }
        })
    })

    app.delete('/api/delete/user/:id', (req, res) => {

        const id = req.params.id;
        const user = {'_id': new ObjectID(id)};

        db.collection('users').deleteOne(user, (err, item) => {
            if(err){
                res.send({'error': 'An error has occured'});
            }else{
                res.send('User' + id + ' deleted');
            }
        })
    })

    app.post('/api/post', (req, res) => {
        const instance = {
            email: req.body.email,
            name: req.body.name
        };
        db.collection('users').insertOne(instance, (err, result) => {
            if(err){
                res.send({'error': 'An error has occured'});
            }else{
                res.send(result.ops[0]);
            }
        })
    })
}