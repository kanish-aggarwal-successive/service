class Controller {

    get = (req, res) => {
        res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
    }

    create = (req, res) => {
        res.send('NOT IMPLEMENTED: Book created');
    }

    update = (req, res) => {
        res.send('NOT IMPLEMENTED: Book updated');
    }

    delete = (req, res) => {
        res.send('NOT IMPLEMENTED: Book deleted');
    }
}

export default Controller;