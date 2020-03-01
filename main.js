//does *not* require jQuery
(function() {
    // Set module as selected element on page load
    let dropdown = document.getElementById("assignment_sort_order_select_menu").childNodes;
    console.log(dropdown);
    for (var i = 0; i < dropdown.length; i++) {
        if (dropdown[i].innerHTML == "Module" || dropdown[i].value == "module") { //intentionally using == as opposed to ===, don't know what type html is output as
            dropdown[i].selected = true;
        }
    }

    // Delete "Out Of" table section
    let item = document.querySelectorAll("td.possible.points_possible");
    console.log(item);
    for (var i = 0; i < item.length; i++) {
        item[i].innerHTML = "";
    }

    // Delete denominator of total on right
    let gradeelem = document.querySelectorAll("span.grade");
    for(var i = 0; i < gradeelem.length; i++) {
	let gradestring = gradeelem[i].innerHTML;
	if ((gradeelem[i].parentElement.classList.item(0) == "student_assignment" && gradeelem[i].parentElement.classList.item(1) == "final_grade")
	    || gradeelem[i].previousSibling.innerHTML == "Total: ") {
	    gradeelem[i].innerHTML = gradestring.split("/"); //works, but *only* if this is the *absolute last* script called.
	}
	//gradeelem[i].innerHTML = gradestring.split("/");
    }
    //Delete entire "weighted" section
    document.querySelector("#assignments-not-weighted").innerHTML = "";



})();
