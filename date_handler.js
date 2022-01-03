const returnObj = (unix, utc) => ({
    unix,
    utc
});

const returnInvalid = {
    error: "Invalid Date"
}

function isInvalidDate(date) {
    console.log(date);
    return date.toString() === "Invalid Date";
}

function createCurrentTimeObj() {
    const now = new Date(Date.now());
    return {
        unix: Date.parse(now),
        utc: now.toUTCString()
    }
}

function dateHandler(req, res, next) {
    const dateParam = req.params.date;
    let response = {};

    if (dateParam === undefined) {
        response = createCurrentTimeObj();
    } else {
        let date = new Date(dateParam);

        if (isInvalidDate(date))
            date = new Date(parseInt(dateParam)).toLocaleString();

        response = returnObj(Date.parse(date), new Date(date).toUTCString());
    
        if (isInvalidDate(date))
            response = returnInvalid;
    }

    res.json(response);
};

exports.dateHandler = dateHandler;