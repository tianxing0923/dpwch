$(function () {

    // 资源列表
    var sourceArr = [
        'images/activity_desc.png',
        'images/bg_video.png',
        'images/btn_change.png',
        'images/btn_desc.png',
        'images/btn_like.png',
        'images/btn_play.png',
        'images/bg_posture_1.png',
        'images/btn_seat.png',
        'images/btn_start.png',
        'images/concluding_remarks.png',
        'images/cover.jpg',
        'images/posture_1_desc.png',
        'images/posture_1_title.png',
        'images/posture_2_desc.png',
        'images/bg_posture_2.png',
        'images/posture_2_title.png',
        'images/posture_3_desc.png',
        'images/posture_3_title.png',
        'images/posture_4_desc.png',
        'images/bg_posture_3.png',
        'images/posture_4_title.png',
        'images/posture_5_desc.png',
        'images/posture_5_title.png',
        'images/qrcode.png',
        'images/bg_posture_4.png',
        'images/share.png',
        'images/slogan.png',
        'images/title.png',
        'images/title_2.png',
        'images/bg_first.jpg',
        'images/bg_posture_5.png',
        'images/bg_third.jpg',
        'images/qrtext.png'
    ];

    new mo.Loader(sourceArr, {
        loadType: 1,
        onLoading: function (count, total) {
            var percentage = parseInt(count / total * 100);
            progress(percentage);
        },
        onComplete: function (time) {
            progress(100);
            var $loading_mask = $('#loading_mask'),
                $container = $('#container');
            $container.html($('#tpl').html());
            $loading_mask.addClass('fadeOut');
            setTimeout(function() {
                initListener();
            }, 300);
            setTimeout(function () {
                $loading_mask.addClass('hide');
            }, 1000);
        }
    });

    // 进度
    function progress(percentage) {
        $('#load_text').text('Loading... ' + percentage + '%');
    }

    // 初始化事件监听
    function initListener() {

        // 活动说明
        $('.btn-desc').on('click', function (e) {
            $('#activity_desc').removeClass('hide');
        });

        // 关闭活动说明
        $('#activity_desc').on('click', function (e) {
            $(this).addClass('hide');
        });

        // 播放
        $('#btn_play').on('click', function (e) {
            var $video_box = $('#video_box'),
                $video;
            if (document.documentElement.clientWidth <= 320) {
                $video = $('<video id="video" src="video.mp4" controls width="266" height="150px"></video>');
            } else {
                $video = $('<video id="video" src="video.mp4" controls width="320" height="180"></video>');
            }
            $video_box.append($video);
            $(this).hide();
            $video[0].play();
        })

        // 播放结束
        $('#video').on('ended', function () {
            $('#btn_play').show();
        });

        // 调戏他
        $('#btn_start').on('click', function (e) {
            $('#first').removeClass('fadeIn').addClass('fadeOut');
            $('#second').removeClass('hide');
            $('.posture').removeClass('hide');
            var $video = $('#video');
            if ($video.length != 0) {
                $video[0].pause();
            }
        });

        // 换种姿势
        $('#btn_change').on('click', function (e) {
            var $current = $('#posture_wrap').find('.posture.fadeIn'),
                currentIndex = $current.index() + 1,
                $btn_like = $('#btn_like'),
                $posture;
            if (currentIndex >= 5) {
                $posture = $('#posture_1');
            } else {
                $posture = $('#posture_' + (currentIndex + 1));
            }
            $current.removeClass('fadeIn').addClass('fadeOut');
            $current.find('.posture-title').removeClass('slideInDown').addClass('slideOutUp');
            $current.find('.posture-desc').removeClass('bounceInRight').addClass('slideOutDown');
            $posture.removeClass('fadeOut').addClass('fadeIn');
            $posture.find('.posture-title').removeClass('slideOutUp').addClass('slideInDown');
            $posture.find('.posture-desc').removeClass('slideOutDown').addClass('bounceInRight');
        });

        // 我喜欢
        $('#btn_like').on('click', function (e) {
            $('#second').removeClass('fadeIn').addClass('fadeOut');
            $('#third').removeClass('hide');
        });
    }
});