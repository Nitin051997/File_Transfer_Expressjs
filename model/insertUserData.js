const dbConnection = require('../connection/dbConnection')

exports.insertLoginDetails = (userInfo) => {

    return dbConnection.execute(`INSERT INTO user_details (user_id, user_name, user_password, user_email, user_otp) values (?,?,?,?,?)`, [userInfo.userid, userInfo.username, userInfo.userpassword, userInfo.useremail, userInfo.userotp]);

}

exports.insertFileDetails = (userFileInfo) => {

    return dbConnection.execute(`INSERT INTO user_file_manager (userid, userdoclabel, userdescription, size, filepath, isOpened, assigned, filetype, userfilename, inuse) values (?,?,?,?,?,?,?,?,?,?)`, [userFileInfo.userid, userFileInfo.userdoclabel, userFileInfo.userdescription, userFileInfo.size, userFileInfo.filepath, userFileInfo.isOpened, userFileInfo.assigned, userFileInfo.filetype, userFileInfo.userfilename, userFileInfo.inuse]);

}


exports.insertPaperFormDetails = (paperFormDetails) => {

    return dbConnection.execute(`INSERT INTO nitinmysqlserver.paper_form_details (paperid, papername, papertype, paperorg, paperactive, createdby) values (?,?,?,?,?,?)`, [paperFormDetails.paperid, paperFormDetails.papername, paperFormDetails.papertype, paperFormDetails.paperorg, paperFormDetails.paperactive, paperFormDetails.createdby])

}