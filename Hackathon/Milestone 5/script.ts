// Ensure html2pdf is globally available
declare const html2pdf: any;

// Get form and preview elements
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;

const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeAddress = document.getElementById("resumeAddress") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;

const resumeObject = document.getElementById("resumeObject") as HTMLParagraphElement;
const resumeFatherName = document.getElementById("resumeFatherName") as HTMLParagraphElement;
const resumeDateofBirth = document.getElementById("resumeDateofBirth") as HTMLParagraphElement;
const resumeCNICNo = document.getElementById("resumeCNICNo") as HTMLParagraphElement;
const resumeReligion = document.getElementById("resumeReligion") as HTMLParagraphElement;
const resumeMaritalStatus = document.getElementById("resumeMaritalStatus") as HTMLParagraphElement;
const resumeDomicilePRC = document.getElementById("resumeDomicilePRC") as HTMLParagraphElement;
const resumeNationality = document.getElementById("resumeNationality") as HTMLParagraphElement;
const resumeLanguage = document.getElementById("resumeLanguage") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
const resumeProfessionalExperience = document.getElementById("resumeProfessionalExperience") as HTMLParagraphElement;
const resumeAcademicqualificationcade = document.getElementById("resumeAcademicqualificationcade") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const resumeHobbies = document.getElementById("resumeHobbies") as HTMLParagraphElement;
const resumeReference = document.getElementById("resumeReference") as HTMLParagraphElement;

const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;

// Handle form submission
form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    // Collect form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    const object = (document.getElementById("object") as HTMLTextAreaElement).value;
    const fathername = (document.getElementById("fathername") as HTMLInputElement).value;
    const dateofbirth = (document.getElementById("dateofbirth") as HTMLInputElement).value;
    const cnicno = (document.getElementById("cnicno") as HTMLInputElement).value;
    const religion = (document.getElementById("religion") as HTMLInputElement).value;
    const maritalstatus = (document.getElementById("maritalstatus") as HTMLInputElement).value;
    const domicileprc = (document.getElementById("domicileprc") as HTMLInputElement).value;
    const nationality = (document.getElementById("nationality") as HTMLInputElement).value;
    const language = (document.getElementById("language") as HTMLInputElement).value;

    const workexperience = (document.getElementById("workexperience") as HTMLTextAreaElement).value;
    const professionalexperience = (document.getElementById("professionalexperience") as HTMLTextAreaElement).value;
    const academicqualification = (document.getElementById("academicqualification") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const hobbies = (document.getElementById("hobbies") as HTMLInputElement).value;
    const reference = (document.getElementById("reference") as HTMLInputElement).value;

    const photoInput = document.getElementById("photo") as HTMLInputElement;

    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';

    if (photoFile) {
        photoBase64 = await fileToBase64(photoFile);
        // Store the photo in localStorage instead of passing it in the URL
        localStorage.setItem("resumePhoto", photoBase64);
        resumePhoto.src = photoBase64;
    }

    // Populate the resume preview
    resumeName.textContent = name;
    resumeAddress.textContent = `Address: ${address}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEmail.textContent = `Email: ${email}`;

    resumeObject.textContent = object;
    resumeFatherName.textContent = `Father Name: ${fathername}`;
    resumeDateofBirth.textContent = `Date of Birth: ${dateofbirth}`;
    resumeCNICNo.textContent = `CNIC No: ${cnicno}`;
    resumeReligion.textContent = `Religion: ${religion}`;
    resumeMaritalStatus.textContent = `Marital Status: ${maritalstatus}`;
    resumeDomicilePRC.textContent = `Domicile/PRC: ${domicileprc}`;
    resumeNationality.textContent = `Nationality: ${nationality}`;
    resumeLanguage.textContent = `Language: ${language}`;

    resumeWorkExperience.textContent = workexperience;
    resumeProfessionalExperience.textContent = professionalexperience;
    resumeAcademicqualificationcade.textContent = academicqualification;

    resumeSkills.textContent = skills;
    resumeHobbies.textContent = hobbies;
    resumeReference.textContent = reference;

    // Hide form and show resume page
    document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");

    // Generate shareable link without the photo
    const queryParams = new URLSearchParams({
        name: name,
        address: address,
        phone: phone,
        email: email,

        object: object,
        fathername: fathername,
        dateofbirth: dateofbirth,
        cnicno: cnicno,
        religion: religion,
        maritalstatus: maritalstatus,
        domicileprc: email,
        nationality: nationality,
        language: language,

        workexperience: workexperience,
        professionalexperience: professionalexperience,
        academicqualification: academicqualification,

        skills: skills,
        hobbies: hobbies,
        reference: reference,
    });

    const uniqueUrl = `${window.location.origin}?${queryParams.toString()}`;
    shareLinkButton.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl);
        alert('Shareable link copied to clipboard!');
    });

    window.history.replaceState(null, '', `?${queryParams.toString()}`);
});


// Convert photo to Base64
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Add back button functionality to go back to the form
backButton.addEventListener("click", () => {
    // Show the form again and hide the resume preview
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");

    // Optionally clear query parameters
    window.history.replaceState(null, '', '/');
});



  

// Add edit button functionality
editButton.addEventListener("click", () => {
    // Populate the form with current resume data for editing
    updateFormFromResume();

    // Show the form again for editing
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});

// Function to update the form fields with current resume data
function updateFormFromResume() {
    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("address") as HTMLInputElement).value = resumeAddress.textContent?.replace('Address: ', '') || '';
    (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';

    (document.getElementById("object") as HTMLTextAreaElement).value = resumeObject.textContent || '';
    (document.getElementById("fathername") as HTMLTextAreaElement).value = resumeFatherName.textContent?.replace('Father Name: ', '') || '';
    (document.getElementById("dateofbirth") as HTMLTextAreaElement).value = resumeDateofBirth.textContent?.replace('Date of Birth: ', '') || '';
    (document.getElementById("cnicno") as HTMLTextAreaElement).value = resumeCNICNo.textContent?.replace('CNIC No: ', '') || '';
    (document.getElementById("religion") as HTMLTextAreaElement).value = resumeReligion.textContent?.replace('Religion: ', '') || '';
    (document.getElementById("maritalstatus") as HTMLTextAreaElement).value = resumeMaritalStatus.textContent?.replace('Marital Status: ', '') || '';
    (document.getElementById("domicileprc") as HTMLTextAreaElement).value = resumeDomicilePRC.textContent?.replace('Domicile/PRC: ', '') || '';
    (document.getElementById("nationality") as HTMLTextAreaElement).value = resumeNationality.textContent?.replace('Nationality: ', '') || '';
    (document.getElementById("language") as HTMLTextAreaElement).value = resumeLanguage.textContent?.replace('Language: ', '') || '';

    (document.getElementById("workexperience") as HTMLTextAreaElement).value = resumeWorkExperience.textContent || '';
    (document.getElementById("professionalexperience") as HTMLTextAreaElement).value = resumeProfessionalExperience.textContent || '';
    (document.getElementById("academicqualification") as HTMLTextAreaElement).value = resumeAcademicqualificationcade.textContent || '';

    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';
    (document.getElementById("hobbies") as HTMLTextAreaElement).value = resumeHobbies.textContent || '';
    (document.getElementById("reference") as HTMLTextAreaElement).value = resumeReference.textContent || '';

}

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }

    const resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate and download PDF
    html2pdf()
        .from(resumeContent)
        .set(resumeOptions)
        .save()
        .catch((error: Error) => {
            console.error('PDF generation error:', error);
        });
});

// Handle query parameters on page load
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || '';
    const address = params.get('address') || '';
    const phone = params.get('phone') || '';
    const email = params.get('email') || '';

    const object = params.get('object') || '';
    const fathername = params.get('fathername') || '';
    const dateofbirth = params.get('dateofbirth') || '';
    const cnicno = params.get('cnicno') || '';
    const religion = params.get('religion') || '';
    const maritalstatus = params.get('maritalstatus') || '';
    const domicileprc = params.get('domicileprc') || '';
    const nationality = params.get('nationality') || '';
    const language = params.get('language') || '';
    
    const workexperience = params.get('workexperience') || '';
    const professionalexperience = params.get('professionalexperience') || '';
    const academicqualification = params.get('academicqualification') || '';

    const skills = params.get('skills') || '';
    const hobbies = params.get('hobbies') || '';
    const reference = params.get('reference') || '';


    if (name || address || phone || email || object || fathername || dateofbirth || cnicno || religion || maritalstatus || domicileprc || nationality || language || workexperience || professionalexperience || academicqualification || skills || hobbies || reference ) {
        // Populate the resume preview if query params are present
        resumeName.textContent = name;
        resumeAddress.textContent = `Address: ${address}`;
        resumePhone.textContent = `Phone: ${phone}`;
        resumeEmail.textContent = `Email: ${email}`;
        
        resumeObject.textContent = object;
        resumeFatherName.textContent = `Father Name: ${fathername}`;
        resumeDateofBirth.textContent = `Date of Birth: ${dateofbirth}`;
        resumeCNICNo.textContent = `CNIC No: ${cnicno}`;
        resumeReligion.textContent = `Religion: ${religion}`;
        resumeMaritalStatus.textContent = `Marital Status: ${maritalstatus}`;
        resumeDomicilePRC.textContent = `Domicile/PRC: ${domicileprc}`;
        resumeNationality.textContent = `Nationality: ${nationality}`;
        resumeLanguage.textContent = `Language: ${language}`;

        resumeWorkExperience.textContent = workexperience;
        resumeProfessionalExperience.textContent = professionalexperience;
        resumeAcademicqualificationcade.textContent = academicqualification;

        resumeSkills.textContent = skills;
        resumeHobbies.textContent = hobbies;
        resumeReference.textContent = reference;

        // Retrieve photo from localStorage (if available)
        const savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            resumePhoto.src = savedPhoto;
        }

        // Hide form and show resume page
        document.querySelector(".container")?.classList.add("hidden");
        resumePage.classList.remove("hidden");
    }
});

// CSS for ensuring the image is styled properly
resumePhoto.style.width = "150px";  // Adjust width as per your requirement
resumePhoto.style.height = "150px";
resumePhoto.style.objectFit = "cover";
resumePhoto.style.borderRadius = "50%";  // Circular image
resumePhoto.style.display = "block";
resumePhoto.style.margin = "0 auto";