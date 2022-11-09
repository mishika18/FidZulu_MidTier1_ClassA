const request = require('sync-request');
exports.get_food_location = (location) => {
    res1 = request('GET', "http://localhost:3034/food?location=" + location);
    if(res1.statusCode == 404)
    {
        return ""
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
};

exports.get_team = () => {
   var res1 = request('GET', "http://localhost:3034/team");
   if(res1.statusCode == 404)
   {
       return ""
   }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
}