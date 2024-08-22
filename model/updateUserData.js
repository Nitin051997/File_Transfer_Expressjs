const dbConnection = require('../connection/dbConnection')

exports.userFileBadgeUpdate = (req, res) => {

    const uploaderid = req.query.uploaderid;

    if (!uploaderid) {
        return res.status(400).json({ error: 'uploaderid parameter is required' });
      }

      dbConnection.execute(`UPDATE user_file_manager SET isOpened = NULL WHERE uploaderid = ?`, [uploaderid])
      .then(([data, fileds]) => {
            return res.json({ message: 'Query executed successfully' });
      })
      .catch((error) => {
           return res.status(500).json({ error: 'Failed to execute query' });
      })

}

exports.userFileStatusUpdate = (req, res) => {

      const uploaderid = req.query.uploaderid;

      if(!uploaderid) {
            return res.status(400).json({error: 'uploaderid parameter is required'})
      }

      dbConnection.execute(`UPDATE user_file_manager SET inuse = NULL WHERE uploaderid = ?`, [uploaderid])
      .then(([data, fileds]) => {
            return res.json({ message: 'Query executed successfully' })
      })
      .catch((error) => {
            return res.status(500).json({ error: 'Failed to execute query' });
       })

}
