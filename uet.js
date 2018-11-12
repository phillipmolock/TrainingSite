// JavaScript source code
function UETPushResumeDownload() {
    console.log('Hello I\'m running');
    window.uetq = window.uetq || [];
    console.log(window.uetq);
    window.uetq.push({ 'ec': 'Resume', 'ea': 'Download' });
    console.log(window.uetq);
};

document.getElementById('resumeDownload').onclick = function () { UETPushResumeDownload();};