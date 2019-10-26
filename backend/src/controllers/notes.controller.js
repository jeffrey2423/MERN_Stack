const notesController = {};
const noteModel = require('../models/Note');

notesController.getNotes = async (req, res) => {
    const notes = await noteModel.find();
    res.json(notes)
}
notesController.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new noteModel({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    res.json({ response: 'Note saved' });
}

notesController.getNote = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await noteModel.findById(id);
        res.json(note);
    } catch (error) {
        res.json({ response: 'error' });
    }

}
notesController.updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, content, author, date} = req.body;
        await noteModel.findOneAndUpdate({_id: id},{
            title: title,
            content: content,
            author: author,
            date: date
        });
        res.json({ response: 'note updated' });
    } catch (error) {
        res.json({ response: 'error note doesnt exist' });
    }
}
notesController.deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await noteModel.findByIdAndDelete(id);
        res.json({ response: 'note deleted' });
    } catch (error) {
        res.json({ response: 'error note doesnt exist' });
    }
}


module.exports = notesController;