import './app1.css'
import $ from 'jquery'

let number = parseInt(localStorage.getItem('num')) || 100
$('#number').text(number)

$('#add').on('click', () => {
    number = number + 1
    localStorage.setItem('num', number)
    $('#number').text(number)
})

$('#minus').on('click', () => {
    number = number - 1
    localStorage.setItem('num', number)
    $('#number').text(number)
})

$('#multiply').on('click', () => {
    number = number * 2
    localStorage.setItem('num', number)
    $('#number').text(number)
})

$('#divide').on('click', () => {
    number = Math.floor(number / 2)
    localStorage.setItem('num', number)
    $('#number').text(number)
})


