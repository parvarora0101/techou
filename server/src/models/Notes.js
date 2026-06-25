const mongoose=require("mongoose")
const noteSchema=new mongoose.Schema( //title,content,owner,summary,collaborators,timestamp
    {
        title:{
            default:"",
            // required:false,
            type:String,
            trim:true,
        },
        content:{
            required:true,
            type:String,
        },
        owner:{
            required:true,
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        summary:{
            type:String,
            required:true,
            default:"",

        },
        collaborators:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
},
{
    timestamps:true,
}
);

module.exports= mongoose.model("Note",noteSchema);