function aboutClick(){
    console.log("about click 1st line")
    var a = document.getElementById("about");
    var b = document.getElementById("skills");
    var c = document.getElementById("education");
    var d = document.getElementById("resume");
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";


    var a = document.getElementById("navAbout");
    var b = document.getElementById("navSkill");
    var c = document.getElementById("navEdu");
    var d = document.getElementById("navResume");

    a.style.background="grey";
    b.style.background="none";
    c.style.background="none"; 
    d.style.background="none";
}
function skillClick(){
    console.log("skill click 1st line")
    var a = document.getElementById("about");
    var b = document.getElementById("skills");
    var c = document.getElementById("education");
    var d = document.getElementById("resume");
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";

    var a = document.getElementById("navAbout");
    var b = document.getElementById("navSkill");
    var c = document.getElementById("navEdu");
    var d = document.getElementById("navResume");

    a.style.background="none";
    b.style.background="grey";
    c.style.background="none";
    d.style.background="none";
}
function resumeClick(){
    console.log("resume click 1st line")
    var a = document.getElementById("about");
    var b = document.getElementById("skills");
    var c = document.getElementById("education");
    var d = document.getElementById("resume");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";

    var a = document.getElementById("navAbout");
    var b = document.getElementById("navSkill");
    var c = document.getElementById("navEdu");
    var d = document.getElementById("navResume");

    a.style.background="none";
    b.style.background="none";
    c.style.background="none";
    d.style.background="grey";

}
function eduClick(){
    console.log("edu click 1st line")
    var a = document.getElementById("about");
    var b = document.getElementById("skills");
    var c = document.getElementById("education");
    var d = document.getElementById("resume");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";

    var a = document.getElementById("navAbout");
    var b = document.getElementById("navSkill");
    var c = document.getElementById("navEdu");
    var d = document.getElementById("navResume");

    a.style.background="none";
    b.style.background="none";
    c.style.background="grey";
    d.style.background="none";

}
