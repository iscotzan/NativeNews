/**
 * Created by Ori Iscovici on 1/22/2017.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var newsSchema = new Schema({
    newsHeadline: { type: String, required: true, unique: false },
    category: { type: String, required: true, unique: false  },
    newsTeaser: { type: String, required: true, unique: false  },
    newsContent: { type: String, required: true, unique: false  },
    newsImageUrl: { type: String, required: true, unique: false  },
    created_at: Date,
    updated_at: Date
});

// on every save, add the date
newsSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

// the schema is useless so far
// we need to create a model using it
var News = mongoose.model('News', newsSchema);

// make this available to our users in our Node applications
module.exports = News;