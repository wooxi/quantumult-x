var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const newmovie = '/api/Movie/WatchMovieNew';

const checkvip = '/api/Account/CheckVip';

const vipinfo = '/api/account/indexDetail';

const wg = '/api/movie/WatchFgMovie';

const mh = '/api/Cartoon/LookPhoto';

const tp = '/api/PictureSet/LookPhoto';

if (url.indexOf(newmovie) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(checkvip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(vipinfo) != -1) {
	obj["nickName"] = "wooxi";
	obj["rewardBadge"] = "ture";
   obj["vipLevel"] = "101";
   obj["vipEndTime"] = "2099-12-31";
	obj["isTenRealCarUser"] = "true";
   obj["cartoonVip"] = "true";
	obj["cartoonVipEndTime"] = "2099-12-31";
	obj["closeAccountPay"] = "true";
	obj["closeInvite"] = "true";
	obj["canShowInvite"] = "true";
	obj["hadTopicBadge"] = "true";
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
