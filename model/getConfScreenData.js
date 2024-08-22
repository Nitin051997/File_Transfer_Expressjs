const dbConnection = require('../connection/dbConnection')

exports.confFormSectionScreen = (req, res) => {

    dbConnection.execute(`SELECT * FROM crt_conf_form_section`)
    .then(([data, fileds]) => {
        return res.status(201).json(data)
    })
    .catch((error) => {
        return res.status(500).json( { error } )
    })

}