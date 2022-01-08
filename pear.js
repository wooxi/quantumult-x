var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const bf = '/api/movie/WatchMovieNew';

const vip = '/api/account/IsVip';

const user = '/api/account/IndexDetail';

if (url.indexOf(bf) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(vip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(user) != -1) {
	obj["nickName"] = "wooxi";
   obj["vipLevel"] = "99";
   obj["vipEndTime"] = "2099-09-09";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});
