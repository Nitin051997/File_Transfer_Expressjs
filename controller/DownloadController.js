exports.userFileDownload = (req, res) => {

    const ownerName = req.query.ownerName;
    const fileName = req.query.fileName;

    const filePath = `./filemanager/${ownerName}/${fileName}`

    res.download(filePath, (err) => {
        if (err) {
            console.error("Error downloading file:", err);
            res.status(500).send("Internal Server Error");
        }else{
            console.log("File Downloaded Successfully")
        }
    });
};
