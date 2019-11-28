import './app3.css'
import $ from 'jquery'

$('#app3 .square').on('click', () => {
    $('#app3 .square').toggleClass('active')
})