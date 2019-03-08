$(function () {

    var index = $.cookie('index')
    console.log(index)
    if (index) {
        $('.type-slider li').eq(index).addClass('active')
    } else {
        $('.type-slider li:first').addClass('active')
    }


    $('.type-slider li').click(function () {

        $.cookie('index', $(this).index(), {expires: 3, path: '/'})
    })


    var categoryShow = false
    $('#category-bt').click(function () {

        categoryShow = !categoryShow
        categoryShow ? categoryViewShow() : categoryViewHide()


    })

    function categoryViewShow() {
        $('.category-view').show()
        $('#category-bt i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')

        sortViewHide()
        sortShow = false
    }

    function categoryViewHide() {
        $('.category-view').hide()
        $('#category-bt i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
    }


    var sortShow = false
    $('#sort-bt').click(function () {
        sortShow = !sortShow
        sortShow ? sortViewShow() : sortViewHide()


    })

    function sortViewShow() {
        $('.sort-view').show()
        $('#sort-bt i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')

        categoryViewHide()
        categoryShow = false
    }

    function sortViewHide() {
        $('.sort-view').hide()
        $('#sort-bt i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
    }


    $('.bounce-view').click(function () {
        sortViewHide()
        sortShow = false

        categoryViewHide()
        categoryShow = false
    })
})