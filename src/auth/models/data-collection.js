class DataCollection {
    constructor(model) {
        this.model = model;
    }

    get(id) {
        if (id) {
            return this.model.findOne({ where: { id } }).catch((error) => {
                throw new Error(`Error while retrieving record with ID ${id}: ${error.message}`);
            });
        } else {
            return this.model.findAll({}).catch((error) => {
                throw new Error(`Error while retrieving all records: ${error.message}`);
            });
        }
    }

    create(record) {
        return this.model.create(record).catch((error) => {
            throw new Error(`Error while creating record: ${error.message}`);
        });
    }

    update(id, data) {
        return this.model
            .findOne({ where: { id } })
            .then((record) => record.update(data))
            .catch((error) => {
                throw new Error(`Error while updating record with ID ${id}: ${error.message}`);
            });
    }

    delete(id) {
        return this.model.destroy({ where: { id } }).catch((error) => {
            throw new Error(`Error while deleting record with ID ${id}: ${error.message}`);
        });
    }
}

module.exports = DataCollection;
