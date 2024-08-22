const dbConnection = require('../connection/dbConnection')

exports.userLoginDetails = (req, res) => {

    dbConnection.execute(`SELECT * FROM user_details`)
    .then(([data, fileds]) => {
        return res.status(201).json(data)
    })
    .catch((error) => {
        return res.status(500).json( { error } )
    })

}

exports.userFileDetails = (req, res) => {

    const { userId } = req.query;

    dbConnection.execute(`SELECT uploaderid, DATE_FORMAT(date, "%M %d, %Y") as date, time, userid, userdoclabel, userdescription, round((size/1024),2) as size, filepath, isOpened, assigned, filetype, userfilename FROM user_file_manager WHERE inuse = 'Yes' and userId = ?`, [userId])
    .then(([data, fileds]) => {
        return res.status(201).json(data)
    })
    .catch((error) => {
        return res.status(500).json( { error } )
    })

}


exports.userInboxDetails = (req, res) => {

    const { userId } = req.query;

    dbConnection.execute(`SELECT uploaderid, DATE_FORMAT(date, "%M %d, %Y") as date, time, userid, userdoclabel, userdescription, round((size/1024),2) as size, filepath, isOpened, assigned, filetype, userfilename FROM user_file_manager WHERE inuse = 'Yes' and assigned like ?`, [`%"${userId}"%`])
    .then(([data, fileds]) => {
        return res.status(201).json(data)
    })
    .catch((error) => {
        return res.status(500).json( { error } )
    })

}


exports.paperFormData = (req, res) => {

    dbConnection.execute(`select syspaperid, paperid, papername, papertype, paperorg, paperactive, DATE_FORMAT(date, "%M %d, %Y") as date, createdby from paper_form_details`)
    .then(([data, fileds]) => {
        return res.status(201).json(data)
    })
    .catch((error) => {
        return res.status(500).json( { error } )
    })

}

