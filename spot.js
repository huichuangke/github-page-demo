(function () {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => {
        resolve();
    });

    document.getElementById('go').addEventListener('click', start);

    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('陈子越'))
            .then(() => engine.shake(800))
            .then(() => engine.toText("今天是"))
            .then(() => engine.shake(800))
            .then(() => engine.toText("一个"))
            .then(() => engine.shake(100))
            .then(() => engine.toText("特别的日子"))
            .then(() => engine.shake(600))
            .then(() => engine.toText("12.06"))
            .then(() => engine.shake(800))
            .then(() => engine.toText("猪猪祝你"))
            .then(() => engine.shake(5000))
            .then(() => engine.toText("生日快乐吖"))
            .then(() => engine.shake(600))
            .then(() => engine.toText("现在"))
            .then(() => engine.shake(600))
            .then(() => engine.toText("请你起来"))
            .then(() => engine.shake(600))
            .then(() => engine.toText("往窗外看"))
            .then(() => engine.shake(10000))
            .then(() => engine.toText("生日快乐"))
            .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
