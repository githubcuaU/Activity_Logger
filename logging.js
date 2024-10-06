
const { writeFile } = require("fs");
const { format } = require("date-fns");

const logActivity = async (message) => 
{
    const description = JSON.stringify(message);
    const timeStamp = `${format(new Date(), "MM-dd-yyyy \t hh:mm:ss")}`;
    const logMessage = `${timeStamp} \t ${description} \n`;

    writeFile("logs.txt", logMessage, "utf8", (err) => 
    {
        if (err) throw err;
    });
};

module.exports = logActivity;
