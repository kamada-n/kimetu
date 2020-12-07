function onRadioButtonChange() {
    const target = document.getElementById("output");
    const check1 = document.forms.radioGroup.yes.checked;
    const check2 = document.forms.radioGroup.no.checked;

    if (check1 == true) {
        target.innerHTML = "よかった！";
    }
    else if (check2 == true) {
        target.innerHTML = "むむむ（　＾ω＾）・・・";
    }
}

function selectboxChange() {
    const characterName = document.getElementById("characterName");
    const selindex = document.forms.form1.character;
    console.log(selindex)
    switch (selindex) {
        case 1:
            characterName.innerHTML = "炭治郎<br/>";

            break;
        case 2:
            characterName.innerHTML = "禰豆子<br/>";
            break;
        case 3:
            characterName.innerHTML = "善逸<br/>";
            break;
        case 4:
            characterName.innerHTML = "伊之助<br/>";
            break;
        case 5:
            characterName.innerHTML = "義勇<br/>";
            break;
    }
}
