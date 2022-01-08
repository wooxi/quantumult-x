/*


QX:
[rewrite_local]
#Pear会员
^https:\/\/(cn.youku-ca.com|bkcd\.b-cdn.net|souhu.mett.me|m.pearkin.com|www.baidu.com2.club)\/(api\/movie\/WatchMovieNew|api\/account\/IsVip|api\/account\/IndexDetail) url script-response-body https://6678888.xyz/quantumultX/pear.js

[mitm]
hostname = bkcd.b-cdn.net,cn.youku-ca.com,souhu.mett.me,m.pearkin.com,www.baidu.com2.club
pear下载地址
https://www.pears.live

*/

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
