function downloadResume()
{
    var docPath="./static/files/Resume.pdf";
    var link=document.createElement('a');
    link.href=docPath;
    link.download='Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}