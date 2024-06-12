function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["zbiorniki_objekt:27"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:28"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:29"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:7"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:8"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:9"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:10"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:11"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:32"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:33"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:5"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:18"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:13"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:17"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:22"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:6"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:16"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:3"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:12"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:30"] = "zbiorniki_objekt:26";
    this.sidParentMap["zbiorniki_objekt:31"] = "zbiorniki_objekt:26";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
