var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/Movie/WatchMovie';

const checkvip = '/api/Account/CheckVip';

const vipinfo = '/api/account/IndexDetail';

const wg = '/api/movie/WatchFgMovie';

const mh = '/api/Cartoon/LookPhoto';

const tp = '/api/PictureSet/LookPhoto';

if (url.indexOf(vip) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(checkvip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(vipinfo) != -1) {
	obj["nickName"] = "疯疯癫癫";
   obj["vipLevel"] = "101";
   obj["vipEndTime"] = "2099-12-31";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(wg) != -1) {
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(mh) != -1) {
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(tp) != -1) {
   obj["value"] = "true";
	body = JSON.stringify(obj);
}
$done({body});
