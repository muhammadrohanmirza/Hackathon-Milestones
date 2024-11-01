var _a;
// Helper function to get element values
function getInputElementValue(id) {
    var element = document.getElementById(id);
    return element.value;
}
// Initialize ResumeData from form inputs
function collectFormData() {
    var _a;
    var profileImage = ((_a = document.getElementById("profileImageUpload").files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    return {
        profileImage: profileImage,
        personalInfo: {
            name: getInputElementValue("name"),
            address: getInputElementValue("address"),
            phone: getInputElementValue("phone"),
            email: getInputElementValue("email"),
            fatherName: getInputElementValue("fathername"),
            dateOfBirth: getInputElementValue("dateofbirth"),
            cnic: getInputElementValue("cnicno"),
            religion: getInputElementValue("religion"),
            maritalStatus: getInputElementValue("maritalstatus"),
            domicile: getInputElementValue("domicileprc"),
            nationality: getInputElementValue("nationality"),
            language: getInputElementValue("language"),
        },
        objective: getInputElementValue("object"),
        workExperience: getInputElementValue("workexperience"),
        professionalExperience: getInputElementValue("professionalexperience"),
        academicQualification: getInputElementValue("academicqualification"),
        skills: getInputElementValue("skills"),
        hobbies: getInputElementValue("hobbies"),
        reference: getInputElementValue("reference"),
    };
}
// Generate resume and display in the resume display div
function displayResume(data) {
    var resumeContainer = document.querySelector(".resume-display");
    var imageUrl = data.profileImage ? URL.createObjectURL(data.profileImage) : '';
    resumeContainer.innerHTML = "\n      <div class=\"resume-header\">\n      <u><h2>".concat(data.personalInfo.name, "</h2></u>\n      <img src=\"").concat(imageUrl, "\" alt=\"Profile Image\" class=\"profile-image\" />\n      </div>\n      <p><strong>Address:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.address, "</span></p>\n      <p><strong>Contact:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.phone, " </span></p>\n      <p><strong>Email:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.email, "</span></p>\n      <br>\n      <h3>Personal Information;-</h3>\n      <p><strong>Father's Name:</strong> <span contentaditable=\"true\">").concat(data.personalInfo.fatherName, "</span></p>\n      <p><strong>Date of Birth:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.dateOfBirth, "</span></p>\n      <p><strong>CNIC:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.cnic, "</span></p>\n      <p><strong>Religion:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.religion, "</span></p>\n      <p><strong>Marital Status:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.maritalStatus, "</span></p>\n      <p><strong>Domicile/PRC:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.domicile, "</span></p>\n      <p><strong>Nationality:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.nationality, "</span></p>\n      <p><strong>Languages:</strong><span contentaditable=\"true\"> ").concat(data.personalInfo.language, "</span></p>\n      <br>\n      <h3>Objective:</h3>\n      <p><span contentaditable=\"true\">").concat(data.objective, "</span></p>\n      <h3>Work Experience:</h3>\n      <p><span contentaditable=\"true\">").concat(data.workExperience, "</span></p>\n      <h3>Professional Experience:</h3>\n      <p><span contentaditable=\"true\">").concat(data.professionalExperience, "</span></p>\n      <h3>Academic Qualification:</h3>\n      <p><span contentaditable=\"true\">").concat(data.academicQualification, "</span></p>\n      <h3>Skills:</h3>\n      <p><span contentaditable=\"true\">").concat(data.skills, "</span></p>\n      <h3>Hobbies:</h3>\n      <p><span contentaditable=\"true\">").concat(data.hobbies, "</span></p>\n      <h3>Reference:</h3>\n      <p><span contentaditable=\"true\">").concat(data.reference, "</span></p>\n    ");
}
// Event listener for form submission
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = collectFormData();
    displayResume(formData);
});
