module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { id, name, price, image } = req.body;

        db.create_product([id, name, price, image])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.get_product([params.id])
            .then(product => res.status(200).send(product))
            .catch(() => res.status(500).send());
    },

    getAll: (req, res, next) => {
        const db = req.app.get('db');

        db.get_shelf()
            .then(product => res.status(200).send(product))
            .catch(() => res.status(500).send());
    },

    update: (req, res, next) => {
        const db = req.app.get('db');
        const { params, query } = req;

        db.update_product([params.id, query.desc])
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

