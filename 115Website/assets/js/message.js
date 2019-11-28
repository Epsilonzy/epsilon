function message() {
    var obj = [{
        "name": "牛梓雨",
        "content": "我是前端狗的同时我也是狗比"
    }, {
        "name": "邓佳骏",
        "content": "我是前端狗"
    }, {
        "name": "王康力",
        "content": "我是全能狗"
    }, {
        "name": "大宝贝",
        "content": "我是后端狗"
    }, {
        "name": "马嘉骏",
        "content": "我是机器学习狗"
    }, {
        "name": "刘致远",
        "content": "我是算法狗"
    }, {
        "name": "小猫咪",
        "content": "你你好好呀呀"
    }, {
        "name": "小狗狗",
        "content": "汪汪汪"
    }, {
        "name": "小狗狗",
        "content": "汪汪汪"
    }, {
        "name": "小狗狗",
        "content": "汪汪汪"
    }, {
        "name": "小狗狗",
        "content": "汪汪汪"
    }, {
        "name": "小狗狗",
        "content": "汪汪汪"
    }]
    $.ajax({
        type: 'get',
        dataType: "json",
        processData: false,
        url: "http://192.168.115.77:8080/messageboard/api/message/get",

        success: function(result) {
            createBoxRandom(result.result);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("请求失败");
        }
    });
    document.getElementsByClassName("inputBox")[0].addEventListener("click", inputBox);
    document.getElementsByClassName("fa-times")[0].addEventListener("click", inputBox);

    function inputBox() {
        var box = document.getElementsByClassName("inputBoxHid")[0];
        if (box.style.display == "none") {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }

    function setStyle(obj, mTop, mRight, mBottom, mLeft) {
        obj.style.marginTop = mTop + "em";
        obj.style.marginRight = mRight + "em";
        obj.style.marginBottom = mBottom + "em";
        obj.style.marginLeft = mLeft + "em";
    }

    function createMessageBox(name, content, mT, mR, mB, mL) {
        let boxFather = document.getElementsByClassName("messageBlock")[0];
        let box = document.createElement("div");
        let pName = document.createElement("p");
        let pContent = document.createElement("p");
        box.className = "messageBox";
        pName.className = "personName wordContentM";
        pContent.className = "personContent wordContentMB";
        pName.innerHTML = name + ":";
        pContent.innerHTML = content;
        box.appendChild(pName);
        box.appendChild(pContent);
        boxFather.appendChild(box);
        setStyle(box, mT, mR, mB, mL);
    }

    function createBoxRandom(message) {
        const length = 10;
        if (message.length < length) {
            length = message.length;
        }
        for (let i = 0; i < length; i++) {
            var mT = Math.floor(Math.random() + 2);
            var mR = Math.floor(Math.random() * 10 + 5);
            var mL = Math.floor(Math.random() * 10 + 5);
            if (i == 0 || i % 2 == 0) {
                mR = 0;
                mT++;
            } else {
                mL = 0;
                mT--;
            }
            createMessageBox(message[i].send_id, message[i].message, mT, mR, 0, mL);
        }
    }
    // createBoxRandom(obj);
    $('#ajaxBtn').click(function() {
        var dataObj = {
            name: document.getElementById("name").value,
            content: document.getElementById('content').value
        }
        if (dataObj.name == "" && dataObj.content == "") {
            alert("内容不能为空!");
        }
        $.ajax({
            type: 'get',
            dataType: "jsonp",
            processData: false,
            url: "http://192.168.115.77:8080/messageboard/api/message/add",
            data: dataObj,

            success: function(result) {
                alert("提交成功");
                document.getElementsByClassName("inputBoxHid")[0].style.display = "none";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("提交失败");
                document.getElementsByClassName("inputBoxHid")[0].style.display = "none";
            }
        });
    });
}