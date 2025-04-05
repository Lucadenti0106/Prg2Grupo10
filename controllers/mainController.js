

const mainController = {
    index: (req, res) => {
        res.render("index");
    },
    search: (req, res) => {
        res.render("search-results");
    }
}

module.exports = mainController;
