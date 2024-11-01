// Define interfaces for data structure
interface PersonalInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    fatherName: string;
    dateOfBirth: string;
    cnic: string;
    religion: string;
    maritalStatus: string;
    domicile: string;
    nationality: string;
    language: string;
  }
  
  interface ResumeData {
    profileImage: File | null;
    personalInfo: PersonalInfo;
    objective: string;
    workExperience: string;
    professionalExperience: string;
    academicQualification: string;
    skills: string;
    hobbies: string;
    reference: string;
  }
  
  // Helper function to get element values
  function getInputElementValue(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    return element.value;
  }
  
  // Initialize ResumeData from form inputs
  function collectFormData(): ResumeData {
    const profileImage = (document.getElementById("profileImageUpload") as HTMLInputElement).files?.[0] || null;
  
    return {
      profileImage,
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
  function displayResume(data: ResumeData): void {
    const resumeContainer = document.querySelector(".resume-display") as HTMLElement;
    const imageUrl = data.profileImage ? URL.createObjectURL(data.profileImage) : '';
    resumeContainer.innerHTML = `
      <div class="resume-header">
      <u><h2>${data.personalInfo.name}</h2></u>
      <img src="${imageUrl}" alt="Profile Image" class="profile-image" />
      </div>
      <p><strong>Address:</strong><span contentaditable="true"> ${data.personalInfo.address}</span></p>
      <p><strong>Contact:</strong><span contentaditable="true"> ${data.personalInfo.phone} </span></p>
      <p><strong>Email:</strong><span contentaditable="true"> ${data.personalInfo.email}</span></p>
      <br>
      <h3>Personal Information;-</h3>
      <p><strong>Father's Name:</strong> <span contentaditable="true">${data.personalInfo.fatherName}</span></p>
      <p><strong>Date of Birth:</strong><span contentaditable="true"> ${data.personalInfo.dateOfBirth}</span></p>
      <p><strong>CNIC:</strong><span contentaditable="true"> ${data.personalInfo.cnic}</span></p>
      <p><strong>Religion:</strong><span contentaditable="true"> ${data.personalInfo.religion}</span></p>
      <p><strong>Marital Status:</strong><span contentaditable="true"> ${data.personalInfo.maritalStatus}</span></p>
      <p><strong>Domicile/PRC:</strong><span contentaditable="true"> ${data.personalInfo.domicile}</span></p>
      <p><strong>Nationality:</strong><span contentaditable="true"> ${data.personalInfo.nationality}</span></p>
      <p><strong>Languages:</strong><span contentaditable="true"> ${data.personalInfo.language}</span></p>
      <br>
      <h3>Objective:</h3>
      <p><span contentaditable="true">${data.objective}</span></p>
      <h3>Work Experience:</h3>
      <p><span contentaditable="true">${data.workExperience}</span></p>
      <h3>Professional Experience:</h3>
      <p><span contentaditable="true">${data.professionalExperience}</span></p>
      <h3>Academic Qualification:</h3>
      <p><span contentaditable="true">${data.academicQualification}</span></p>
      <h3>Skills:</h3>
      <p><span contentaditable="true">${data.skills}</span></p>
      <h3>Hobbies:</h3>
      <p><span contentaditable="true">${data.hobbies}</span></p>
      <h3>Reference:</h3>
      <p><span contentaditable="true">${data.reference}</span></p>
    `;
  }
  
  // Event listener for form submission
  document.getElementById("resume-form")?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const formData = collectFormData();
    displayResume(formData);
  });
  