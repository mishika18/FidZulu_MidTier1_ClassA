var request = require('sync-request'), res1;

exports.get_toy_location = (location) => {
    res1 = request('GET', "http://localhost:3036/toys?location="+location);
    if (res1.statusCode == 404) {
        return ""
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
};

exports.get_team = () => {
    var res1 = request('GET', "http://localhost:3036/toys/team");
    if (res1.statusCode == 404) {
        return ""
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
}