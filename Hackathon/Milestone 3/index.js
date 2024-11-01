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
    resumeContainer.innerHTML = "\n      <div class=\"resume-header\">\n      <u><h2>".concat(data.personalInfo.name, "</h2></u>\n      <img src=\"").concat(imageUrl, "\" alt=\"Profile Image\" class=\"profile-image\" />\n      </div>\n      <p><strong>Address:</strong> ").concat(data.personalInfo.address, "</p>\n      <p><strong>Contact:</strong> ").concat(data.personalInfo.phone, " </p>\n      <p><strong>Email:</strong> ").concat(data.personalInfo.email, "</p>\n      <br>\n      <h3>Personal Information;-</h3>\n      <p><strong>Father's Name:</strong> ").concat(data.personalInfo.fatherName, "</p>\n      <p><strong>Date of Birth:</strong> ").concat(data.personalInfo.dateOfBirth, "</p>\n      <p><strong>CNIC:</strong> ").concat(data.personalInfo.cnic, "</p>\n      <p><strong>Religion:</strong> ").concat(data.personalInfo.religion, "</p>\n      <p><strong>Marital Status:</strong> ").concat(data.personalInfo.maritalStatus, "</p>\n      <p><strong>Domicile/PRC:</strong> ").concat(data.personalInfo.domicile, "</p>\n      <p><strong>Nationality:</strong> ").concat(data.personalInfo.nationality, "</p>\n      <p><strong>Languages:</strong> ").concat(data.personalInfo.language, "</p>\n      <br>\n      <h3>Objective:</h3>\n      <p>").concat(data.objective, "</p>\n      <h3>Work Experience:</h3>\n      <p>").concat(data.workExperience, "</p>\n      <h3>Professional Experience:</h3>\n      <p>").concat(data.professionalExperience, "</p>\n      <h3>Academic Qualification:</h3>\n      <p>").concat(data.academicQualification, "</p>\n      <h3>Skills:</h3>\n      <p>").concat(data.skills, "</p>\n      <h3>Hobbies:</h3>\n      <p>").concat(data.hobbies, "</p>\n      <h3>Reference:</h3>\n      <p>").concat(data.reference, "</p>\n    ");
}
// Event listener for form submission
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = collectFormData();
    displayResume(formData);
});
