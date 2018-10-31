const sectionScheme = mongoose.Schema({
    title: { type: String, required: true},
    subTitle: { type: String, required: false},
    created: { type: Date, default: () => new Date()}
})

const section = module.exports = mongoose.model('section', sectionSchema);