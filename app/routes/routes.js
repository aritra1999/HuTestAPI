'use strict';
var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db){

    // New user validation endpoint.
    app.get('/api/validate', (req, res) => {
        const queryEmail = req.query.email;
        const queryOrg = {"name": queryEmail.split("@")[1]};
        db.collection('organizations').findOne(queryOrg, (err, org) => {
            if(err)res.send({'error': 'An error has occured'});
            else if(org === null)res.send({'error': 'Organization not registered!'});
            else{ 
                db.collection('users').findOne({'email': queryEmail}, (err, user) => {
                    if(err)res.send({'error': 'An error has occured'});
                    else if(user)res.send({'error': 'User already exists'});
                    else{
                        let validate;
                        if(org.limit >= org.active + 1){
                            validate = true; 
                            org.active += 1;
                            db.collection('organizations').save(org);
                        }
                        else validate = false;
                        
                        res.send({
                            'validate': validate,
                            'query': queryEmail,
                            'org': org,
                        });
                    }
                })
            }
        });  
    })

    // User endpoints. 
    // Get all users. 
    app.get('/api/get/users', (req, res) => { 
        db.collection('users').find().toArray(function(err, users){
            if(err){
                res.send({'error': 'An error has occured'});
            }else{ 
                res.send(users);
            }
        });
    })

    // Get user with ID.
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

    // Add user.
    app.post('/api/post/user', (req, res) => {
        const instance = {
            email: req.body.email,
            name: req.body.name,
            org: req.body.email.split("@")[1]
        };
        db.collection('users').insertOne(instance, (err, result) => {
            if(err) res.send({'error': 'An error has occured'});
            else res.send(result.ops[0]);
        })
    })

    // Update user with ID. 
    app.put('/api/update/user/:id', (req, res) => {
        const id = req.params.id;
        const user = {'_id': new ObjectID(id)};
        const updatedUser = {
            email: req.body.email,
            name: req.body.name,
            org: req.body.email.split("@")[1]
        };
        db.collection('users').updateOne(user, updatedUser, (err, item) => {
            if(err) res.send({'error': 'An error has occured'});
            else res.send(item);
        })
    })

    // Delete user.
    app.delete('/api/delete/user/:id', (req, res) => {
        const id = req.params.id;
        const user = {'_id': new ObjectID(id)};

        db.collection('users').deleteOne(user, (err, item) => {
            if(err) res.send({'error': 'An error has occured'});
            else res.send('User' + id + ' deleted');
        })
    })

    // Orranization Endpoints.
    // Get list of all organizations.
    app.get('/api/get/orgs', (req, res) => {
        db.collection('organizations').find().toArray(function(err, orgs){
            if(err) {
                res.send({'error': 'An error has occured'});
            }else{
                res.send(orgs);
            }
        });
    })

    // Get organization with ID 
    app.get('/api/get/org/:id', (req, res) => {

        const id = req.params.id;
        const org = {'_id': new ObjectID(id)};

        db.collection('organizations').findOne(org, (err, item) => {
            if(err){
                res.send({'error': 'An error has occured'});
            }else{
                res.send(item);
            }
        })
    })

    // Create organization. 
    app.post('/api/post/org', (req, res) => {
        const instance = {
            name: req.body.name,
            limit: req.body.limit,
            active: 0
        };
        db.collection('organizations').insertOne(instance, (err, result) => {
            if(err) res.send({'error': 'An error has occured'});
            else res.send(result.ops[0]);
        })
    })

    // Update organization.
    app.put('/api/update/org/:id', (req, res) => {
        const id = req.params.id;
        const org = {'_id': new ObjectID(id)};
        const updatedOrg = {
            name: req.body.name,
            limit: req.body.limit
        };
        db.collection('organizations').updateOne(org, updatedOrg, (err, item) => {
            if(err) res.send({'error': 'An error has occured'});
            else res.send(item);
        })
    })

    // Delete organization.
    app.delete('/api/delete/org/:id', (req, res) => {
        const id = req.params.id;
        const org = {'_id': new ObjectID(id)};

        db.collection('organizations').deleteOne(org, (err, item) => {
            if(err) res.send({'error': 'An error has occured'});
            else res.send('Organization' + id + ' deleted');
        })
    })

}