<?php
    String page = request.getParameter('page');
    Number pageSize = 4;

    Number start = (page - 1) * pageSize + 1;

    Number end = (page - 1) * pageSize + 4;

    String sum = "<div>$start-$end</div>";

    for (String i = start; i <= end; i++) {
        sum += '<li class="result"><a href="detail.html?id='+ i +'">对法拉数据的弗拉设计费</a><p>浪费大家爱是快乐的房间啊</p><div class="suggest" style="display:none">为您推荐：xxxxxxxxxxxxxxxxxx</div></li>';
    } 

    System.out.println(sum + '<script src="./js/script.js"></script><script>alert("aaaa")</script>');
?>