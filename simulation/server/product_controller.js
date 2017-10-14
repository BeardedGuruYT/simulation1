module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, price, image } = req.body;

        db.create_product([ req.params.shelf, name, price, image])
            .then((respone) => res.status(200).send("send success"))
            .catch((err) => res.status(500).send(err));
    },

    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.get_product([req.params.id])
            .then(product => res.status(200).send(product))
            .catch(() => res.status(500).send());
    },

    getAll: (req, res, next) => {
        const db = req.app.get('db');
        // pram A
        // var shelf = "shelf" + "A"
           // shelfA
          

        db.get_shelf([req.params.shelf])
            .then(product => res.status(200).send(product))
            .catch(() => res.status(500).send());
    },

    update: (req, res, next) => {
        const db = req.app.get('db');
        const { params, query } = req;

        db.update_product([params.id, shelf, name, price])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    delete: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.delete_product([params.id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
};

