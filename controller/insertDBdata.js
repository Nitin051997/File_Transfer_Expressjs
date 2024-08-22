const { insertLoginDetails, insertFileDetails, insertPaperFormDetails } = require("../model/insertUserData");

exports.postInsertUserData = (req, res) => {
    const userInfo = req.body[0]

    insertLoginDetails(userInfo)
    .then(() => {
        res.status(200).json({ message: 'User created successfully' });
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal Server Error' });
    })

}

exports.postInsertFileData = (req, res) => {
    const userFileInfo = req.body[0]

    insertFileDetails(userFileInfo)
    .then(() => {
        res.status(200).json({ message: 'File data added successfully' });
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal Server Error' });
    })

}

exports.postInsertPaperFormData = (req, res) => {
    const paperFormDetails = req.body[0]

    insertPaperFormDetails(paperFormDetails)
    .then(() => {
        res.status(200).json({ message: 'Paper Form Created Successfully' })
    })
    .catch((error) => {
        res.status(500).json({ error: 'Internal Server Error' });
    })
}