import './app4.css'
import $ from 'jquery'

$('#app4 .square').on('mouseenter', () => {
    $('#app4 .square').addClass('active')
})

$('#app4 .square').on('mouseleave', () => {
    $('#app4 .square').removeClass('active')
})