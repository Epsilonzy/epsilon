function message() {
    var obj = [{
        "name": "牛梓雨",
        "content": "我是前端狗"
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
        const length = 15;
        for (let i = 0; i < message.length; i++) {
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
            createMessageBox(message[i].name, message[i].content, mT, mR, 0, mL);
        }
    }
    createBoxRandom(obj);
}