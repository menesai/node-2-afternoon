


module.exports = {
    create: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        dbInstance.create_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed."});
            console.log(err);
            
        })
    },
    getOne: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_product()
        .then(product => res.status(200).send( product ))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers"});
            console.log(err);
            
        })
    },
    getAll: (req, res, next) =>{
        const dbInstance = req.body.get('db');

        dbInstance.read_products()
        .then(products => res.status(200).send( products ))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed"});
            console.log(err);
            
        })
    },
    update: (req, res, next) => {
        const dbInstance = req.body.get('db');
        const { params, query } = req;

        dbInstance.update_product()
        .then(() => res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed"});
            console.log(err);
            
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.body.get('db');
        const { params } = req;

        dbInstance.delete_product()
        .then( () => res.sendStatus(200) )
        .catch( err =>{
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed"});
            console.log(err);
            
        })
    }
}