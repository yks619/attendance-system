function submitValue() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const section = document.getElementById("section").value;
    const rollNo = document.getElementById("rollNo").value;
    

    if(firstName && lastName && dob && gender && fatherName && motherName && contact && address && rollNo && section){
        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nDOB: ${dob}\nGender: ${gender}\nFather Name: ${fatherName}\nMother Name: ${motherName}\nContact: ${contact}\nAddress: ${address}\nRoll-No: ${section}\nsection:  ${rollNo}`);
    }else{
        alert("please fill out all field before submitting");
    };
    
};