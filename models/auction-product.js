var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  onebid:{type:Boolean,required: true},
  ended:{type:Boolean,required: true},
  bidders:{type:Array},
  seller:{type:Schema.Types.ObjectId, ref:'User'},
  category:{type: String, required: true},
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  currentBid: {type: Number, required: true},
  price: {type: Number, required: true},
  days:{type:Number,required: true},
  hours:{type:Number,required: true},
  minutes:{type:Number,required: true},
  datetime: {type: String, required: true},
  endDate:{type:String,required:true}
});


module.exports = mongoose.model('AuctionProduct',schema);
