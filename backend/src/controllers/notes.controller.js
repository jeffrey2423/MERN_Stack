const notesController = {};
notesController.getNote = (req, res) => res.json({ response: 'GET MESSAGE' });
notesController.getNotes = (req, res) => res.json({ response: 'GET MESSAGE' });
notesController.createNotes = (req, res) => res.json({ response: 'POST MESSAGE' });
notesController.updateNote = (req, res) => res.json({ response: 'UPDATE MESSAGE' });
notesController.deleteNote = (req, res) => res.json({ response: 'DELETE MESSAGE' });


module.exports = notesController;