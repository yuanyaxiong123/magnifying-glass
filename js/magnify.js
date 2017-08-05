/**
 * Created by dell on 2017/3/13.
 */
(function(){
    main={

        init:function(){
            this.small();
            this.way();
        },

        //图片放大

        small:function(){
            var small=document.getElementsByClassName('small')[0];
            var move=document.getElementsByClassName('move')[0];
            var big=document.getElementsByClassName('big')[0];
            var img=document.getElementsByClassName('big_img')[0];
            var offsettop=small.offsetTop;   //偏移量
            var offsetleft=small.offsetLeft;

            var swidth=small.offsetWidth;  //元素的大小
            var sheight=small.offsetHeight;
            small.onmousemove=function(e){

                move.style.display='block';
                big.style.display='block';

                //获取鼠标的位置

                var x= e.pageX;  //获取触发点距离页面的距离
                var y= e.pageY;
                console.log(x);
                console.log(y);


                //鼠标应该出现的位置

                var showX=x-offsetleft-100;
                var showY=y-offsettop-100;
                console.log(showX);
                console.log(showY);

                //限制小方块的位置

                showX=showX<0?0:showX;
                showX=showX>swidth-200?swidth-200:showX;

                showY=showY<0?0:showY;
                showY=showY>sheight-200?sheight-200:showY;

                move.style.top=showY+'px';
                move.style.left=showX+'px';

                img.style.top=-showY*2+'px';
                img.style.left=-showX*2+'px';

            };
            small.onmouseout=function(){

                big.style.display='none';
                move.style.display='none';

            };
        },

        way:function(){

            var small=document.getElementsByClassName('small')[0].firstElementChild;
            var img1=document.getElementsByClassName('big_img')[0];








            var img=document.getElementsByClassName('img')[0];

            img.addEventListener('click',function(e){

                var src= e.target.src;

                src=src.slice(src.lastIndexOf('/'));

                small.src=small.src.slice(0,small.src.lastIndexOf('/'))+src;
                img1.src=img1.src.slice(0,img1.src.lastIndexOf('/'))+src;


            })


        }



    };

    main.init();
})();