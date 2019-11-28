import './app2.css'
import $ from 'jquery'

$('#app2 #nav').on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    const $index = $('#app2 #nav').children().index($li)
    $('#box-contain div').eq($index).addClass('active').siblings().removeClass('active')
    $('#app2 #nav li').eq($index).addClass('active').siblings().removeClass('active')
})

$('#app2 #nav li').eq(0).trigger('click')