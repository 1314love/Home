    function qq(){
        var ua = navigator.userAgent;
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    if(isIphone){
            location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=813141818&card_type=person&source=sharecard";
        }else if(isAndroid){
            location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=813141818&card_type=person&source=sharecard";
        }else{
            location.href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=813141818";
        }
    }