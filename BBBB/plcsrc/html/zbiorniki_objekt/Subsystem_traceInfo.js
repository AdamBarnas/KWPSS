function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Constant */
	this.urlHashMap["zbiorniki_objekt:7"] = "zbiorniki_objekt.st:62";
	/* <S1>/Constant1 */
	this.urlHashMap["zbiorniki_objekt:8"] = "zbiorniki_objekt.st:63";
	/* <S1>/Constant2 */
	this.urlHashMap["zbiorniki_objekt:9"] = "zbiorniki_objekt.st:76";
	/* <S1>/Constant3 */
	this.urlHashMap["zbiorniki_objekt:10"] = "zbiorniki_objekt.st:57";
	/* <S1>/Constant4 */
	this.urlHashMap["zbiorniki_objekt:11"] = "zbiorniki_objekt.st:77";
	/* <S1>/Discrete-Time
Integrator */
	this.urlHashMap["zbiorniki_objekt:32"] = "zbiorniki_objekt.st:43,51,58,61,73";
	/* <S1>/Discrete-Time
Integrator1 */
	this.urlHashMap["zbiorniki_objekt:33"] = "zbiorniki_objekt.st:45,54,75,88";
	/* <S1>/Divide */
	this.urlHashMap["zbiorniki_objekt:5"] = "zbiorniki_objekt.st:64";
	/* <S1>/Divide1 */
	this.urlHashMap["zbiorniki_objekt:18"] = "zbiorniki_objekt.st:78";
	/* <S1>/Product */
	this.urlHashMap["zbiorniki_objekt:13"] = "zbiorniki_objekt.st:56";
	/* <S1>/Product1 */
	this.urlHashMap["zbiorniki_objekt:17"] = "zbiorniki_objekt.st:79";
	/* <S1>/Product2 */
	this.urlHashMap["zbiorniki_objekt:22"] = "zbiorniki_objekt.st:65";
	/* <S1>/Sqrt */
	this.urlHashMap["zbiorniki_objekt:6"] = "zbiorniki_objekt.st:59";
	/* <S1>/Sqrt1 */
	this.urlHashMap["zbiorniki_objekt:16"] = "zbiorniki_objekt.st:80";
	/* <S1>/Sum */
	this.urlHashMap["zbiorniki_objekt:3"] = "zbiorniki_objekt.st:81";
	/* <S1>/Sum2 */
	this.urlHashMap["zbiorniki_objekt:12"] = "zbiorniki_objekt.st:66";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "zbiorniki_objekt"};
	this.sidHashMap["zbiorniki_objekt"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "zbiorniki_objekt:27"};
	this.sidHashMap["zbiorniki_objekt:27"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "zbiorniki_objekt:28"};
	this.sidHashMap["zbiorniki_objekt:28"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/In3"] = {sid: "zbiorniki_objekt:29"};
	this.sidHashMap["zbiorniki_objekt:29"] = {rtwname: "<S1>/In3"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "zbiorniki_objekt:7"};
	this.sidHashMap["zbiorniki_objekt:7"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Constant1"] = {sid: "zbiorniki_objekt:8"};
	this.sidHashMap["zbiorniki_objekt:8"] = {rtwname: "<S1>/Constant1"};
	this.rtwnameHashMap["<S1>/Constant2"] = {sid: "zbiorniki_objekt:9"};
	this.sidHashMap["zbiorniki_objekt:9"] = {rtwname: "<S1>/Constant2"};
	this.rtwnameHashMap["<S1>/Constant3"] = {sid: "zbiorniki_objekt:10"};
	this.sidHashMap["zbiorniki_objekt:10"] = {rtwname: "<S1>/Constant3"};
	this.rtwnameHashMap["<S1>/Constant4"] = {sid: "zbiorniki_objekt:11"};
	this.sidHashMap["zbiorniki_objekt:11"] = {rtwname: "<S1>/Constant4"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator"] = {sid: "zbiorniki_objekt:32"};
	this.sidHashMap["zbiorniki_objekt:32"] = {rtwname: "<S1>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator1"] = {sid: "zbiorniki_objekt:33"};
	this.sidHashMap["zbiorniki_objekt:33"] = {rtwname: "<S1>/Discrete-Time Integrator1"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "zbiorniki_objekt:5"};
	this.sidHashMap["zbiorniki_objekt:5"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Divide1"] = {sid: "zbiorniki_objekt:18"};
	this.sidHashMap["zbiorniki_objekt:18"] = {rtwname: "<S1>/Divide1"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "zbiorniki_objekt:13"};
	this.sidHashMap["zbiorniki_objekt:13"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Product1"] = {sid: "zbiorniki_objekt:17"};
	this.sidHashMap["zbiorniki_objekt:17"] = {rtwname: "<S1>/Product1"};
	this.rtwnameHashMap["<S1>/Product2"] = {sid: "zbiorniki_objekt:22"};
	this.sidHashMap["zbiorniki_objekt:22"] = {rtwname: "<S1>/Product2"};
	this.rtwnameHashMap["<S1>/Sqrt"] = {sid: "zbiorniki_objekt:6"};
	this.sidHashMap["zbiorniki_objekt:6"] = {rtwname: "<S1>/Sqrt"};
	this.rtwnameHashMap["<S1>/Sqrt1"] = {sid: "zbiorniki_objekt:16"};
	this.sidHashMap["zbiorniki_objekt:16"] = {rtwname: "<S1>/Sqrt1"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "zbiorniki_objekt:3"};
	this.sidHashMap["zbiorniki_objekt:3"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/Sum2"] = {sid: "zbiorniki_objekt:12"};
	this.sidHashMap["zbiorniki_objekt:12"] = {rtwname: "<S1>/Sum2"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "zbiorniki_objekt:30"};
	this.sidHashMap["zbiorniki_objekt:30"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "zbiorniki_objekt:31"};
	this.sidHashMap["zbiorniki_objekt:31"] = {rtwname: "<S1>/Out2"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
