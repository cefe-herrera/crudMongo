const mongoose = require('../../common/services/mongoose.service').mongoose;

const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
    dni: String,
    clase: String,
    nombreApellido: String,
    domicilio: String,
    profesion: String,
    tipoDni: String
});


PeopleSchema.virtual('id').get(function () {
    return this._id.toHexString();
});



PeopleSchema.set('toJSON', {
    virtuals: true
});

PeopleSchema.findById = function (cb) {
    return this.model('People').find({
        id: this.id
    }, cb);
};



const People = mongoose.model('People', PeopleSchema, 'people' );

exports.findById = (id) => {
    const result = People.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
    
    return result;
}

exports.findByDni = async (dni) => {
    let result = await People.findOne({dni: "33936670"});
    return result;
}


exports.People = People;