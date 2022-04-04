document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#java-button').addEventListener('click', () => loadJava());
    document.querySelector('#python-button').addEventListener('click', () => loadPython());

});

function loadJava() {
    document.querySelector('#python-code').style.display = 'none';
    document.querySelector('#java-code').style.display = 'flex';

}

function loadPython() {
    document.querySelector('#python-code').style.display = 'flex';
    document.querySelector('#java-code').style.display = 'none';
}