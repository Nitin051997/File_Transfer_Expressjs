// Handle file upload
const handleUpload = (req, res) => {

    res.json(req.file)
};

module.exports = { handleUpload };
