$(function () {

    $('.cart').width(innerWidth)
    total()
    $('.confirm-wrapper').click(function () {
        var $span = $(this).find('span')

        var cartid=$(this).attr('cartid')
        data={
            'cartid':cartid
        }
        $.get('/axf/changecartselect/',data,function (response) {
            console.log(response)
            if (response.status==1) {

                if (response.isselect){

                    $span.removeClass('no').addClass('glyphicon glyphicon-ok')
                } else {
                    $span.removeClass('glyphicon glyphicon-ok').addClass('no')
                }
                total()
            }
        })

    })
    $('.all').click(function () {
        var isall = $(this).attr('isall')
        $span = $(this).find('span')


        isall = (isall == 'false') ? true : false


        $(this).attr('isall', isall)

        if (isall){
            $span.removeClass('no').addClass('glyphicon glyphicon-ok')
        } else {
            $span.removeClass('glyphicon glyphicon-ok').addClass('no')
        }

        data = {
            'isall':isall
        }

        $.get('/axf/changecartall/', data, function (response) {

            if (response.status == 1){

                $('.confirm-wrapper').each(function () {
                    if (isall){
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                    } else {
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                    }
                    total()

                })

            }
        })
    })
    function total() {
        var sum = 0

        $('.cart li').each(function () {
            var $confirm = $(this).find('.confirm-wrapper')
            var $content = $(this).find('.content-wrapper')

            if ($confirm.find('.glyphicon').length){
                var price = $content.find('.price').attr('price')
                console.log(price)
                var num = $content.find('.num').attr('num')
                console.log(num)

                sum += num * price

            }
        })

        // $('.total b').html(sum)
    }



})