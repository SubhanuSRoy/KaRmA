import axios from "axios";
import React, { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import CreatableSelect from "react-select/creatable";
import { notify } from "../../utils/services";
import { ToastContainer } from "react-toast";

function AddEmployee() {
  const [formData, setFormData] = useState({
    personalInformation: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "Male",
      contactInformation: {
        phone: "",
        email: "",
        address: "",
      },
    },
    employmentDetails: [],
    educationalBackground: [],
    professionalExperience: [],
    skills: [],
    performanceAndAppraisalInformation: [],
  });

  const [employmentDetails, setEmploymentDetails] = useState([
    {
      jobTitle: "",
      department: "",
      reportingManager: "",
      dateOfJoining: "",
      employmentStatus: "",
      employmentType: "",
    },
  ]);
  const [educationalBackground, setEducationalBackground] = useState([
    {
      qualification: "",
      institutionAttended: "",
      graduationYear: "",
    },
  ]);
  const [professionalExperience, setProfessionalExperience] = useState([
    {
      previousJobTitle: "",
      previousEmployer: "",
      dateOfPreviousEmployment: "",
      relevantSkillsAndExpertise: "",
    },
  ]);

  const [
    performanceAndAppraisalInformation,
    setPerformanceAndAppraisalInformation,
  ] = useState([
    {
      performanceRating: 0,
      appraisalScore: 0,
      feedback: "",
      careerDevelopmentPlans: "",
    },
  ]);

  // Functions to add new entries
  const addEmploymentDetail = (e) => {
    e.preventDefault();
    setEmploymentDetails([
      ...employmentDetails,
      {
        jobTitle: "",
        department: "",
        reportingManager: "",
        dateOfJoining: "",
        employmentStatus: "",
        employmentType: "",
      },
    ]);
  };

  const addEducationDetail = (e) => {
    e.preventDefault();
    setEducationalBackground([
      ...educationalBackground,
      {
        qualification: "",
        institutionAttended: "",
        graduationYear: "",
      },
    ]);
  };

  const addProfessionalExperience = (e) => {
    e.preventDefault();
    setProfessionalExperience([
      ...professionalExperience,
      {
        previousJobTitle: "",
        previousEmployer: "",
        dateOfPreviousEmployment: "",
        relevantSkillsAndExpertise: "",
      },
    ]);
  };

  // Handle changes in employment details
  const handleEmploymentChange = (e, field, index) => {
    const updatedDetails = [...employmentDetails];
    updatedDetails[index][field] = e.target.value;
    setEmploymentDetails(updatedDetails);
    setFormData({
      ...formData,
      employmentDetails: updatedDetails,
    });
  };

  // Handle changes in educational background
  const handleEducationChange = (e, field, index) => {
    const updatedBackground = [...educationalBackground];
    updatedBackground[index][field] = e.target.value;
    setEducationalBackground(updatedBackground);
    setFormData({
      ...formData,
      educationalBackground: updatedBackground,
    });
  };

  const handleExperienceChange = (e, field, index) => {
    const updatedExperience = [...professionalExperience];
    updatedExperience[index][field] = e.target.value;
    setProfessionalExperience(updatedExperience);
    setFormData({
      ...formData,
      professionalExperience: updatedExperience,
    });
  };

  const skillOptions = [
    { label: "CRM Software Proficiency", value: "CRM Software Proficiency" },
    {
      label: "Data Analytics and Reporting",
      value: "Data Analytics and Reporting",
    },
    { label: "Product Knowledge", value: "Product Knowledge" },
    { label: "Digital Marketing Skills", value: "Digital Marketing Skills" },
    { label: "Sales Forecasting", value: "Sales Forecasting" },
    {
      label: "Technical Product Demonstrations",
      value: "Technical Product Demonstrations",
    },
    { label: "Negotiation Skills", value: "Negotiation Skills" },
    { label: "Industry Knowledge", value: "Industry Knowledge" },
    { label: "E-commerce Skills", value: "E-commerce Skills" },
    {
      label: "Technical Writing and Documentation",
      value: "Technical Writing and Documentation",
    },
    { label: "Communication Skills", value: "Communication Skills" },
    { label: "Relationship Building", value: "Relationship Building" },
    {
      label: "Empathy and Emotional Intelligence",
      value: "Empathy and Emotional Intelligence",
    },
    { label: "Problem-Solving Abilities", value: "Problem-Solving Abilities" },
    {
      label: "Adaptability and Flexibility",
      value: "Adaptability and Flexibility",
    },
    { label: "Time Management", value: "Time Management" },
    {
      label: "Resilience and Persistence",
      value: "Resilience and Persistence",
    },
    { label: "Presentation Skills", value: "Presentation Skills" },
    {
      label: "Teamwork and Collaboration",
      value: "Teamwork and Collaboration",
    },
    { label: "Integrity and Ethics", value: "Integrity and Ethics" },
  ];
  const handleSkills = (selectedOption) => {
    console.log(selectedOption);
    setFormData({
      ...formData,
      skills: selectedOption,
    });
  };

  const addPerformanceAndAppraisal = () => {
    setPerformanceAndAppraisalInformation([
      ...performanceAndAppraisalInformation,
      {
        performanceRating: 0,
        appraisalScore: 0,
        feedback: "",
        careerDevelopmentPlans: "",
      },
    ]);
  };

  const handlePerformanceChange = (e, field, index) => {
    const updatedInformation = [...performanceAndAppraisalInformation];
    updatedInformation[index][field] = e.target.value;
    setPerformanceAndAppraisalInformation(updatedInformation);
    setFormData({
      ...formData,
      performanceAndAppraisalInformation: updatedInformation,
    });
  };

  const sendEmployee = (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BACKEND + "AddEmployee/", formData)
      .then((res) => {
        console.log(res);
        notify(
          "success",
          "Employee added successfully with ID: " + res.data.EmployeeID
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col gap-9 w-full">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <ToastContainer className="z-50"/>
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark bg-gradient-to-tr from-prim to-accent">
          <h3 className="font-bold text-2xl text-white dark:text-white">
            Add a New Employee
          </h3>
        </div>
        <form onSubmit={sendEmployee}>
          <div className="p-6.5">
            <div className="font-semibold text-lg text-boxdark mb-4">
              Personal Information
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter their first name"
                  value={formData.personalInformation.firstName}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      personalInformation: {
                        ...formData.personalInformation,
                        firstName: e.target.value,
                      },
                    });
                  }}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter their last name"
                  name={"personalInformation.lastName"}
                  value={formData.personalInformation.lastName}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      personalInformation: {
                        ...formData.personalInformation,
                        lastName: e.target.value,
                      },
                    });
                  }}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name={"personalInformation.dateOfBirth"}
                  value={formData.personalInformation.dateOfBirth}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      personalInformation: {
                        ...formData.personalInformation,
                        dateOfBirth: e.target.value,
                      },
                    });
                  }}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                  Select Gender
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                    <BsGenderAmbiguous />
                  </span>
                  <select
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    name={"personalInformation.gender"}
                    value={formData.personalInformation.gender}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        personalInformation: {
                          ...formData.personalInformation,
                          gender: e.target.value,
                        },
                      });
                    }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="font-semibold text-lg text-boxdark mb-4">
              Contact Information
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter their email address"
                  name={"personalInformation.contactInformation.email"}
                  value={formData.personalInformation.contactInformation.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      personalInformation: {
                        ...formData.personalInformation,
                        contactInformation: {
                          ...formData.personalInformation.contactInformation,
                          email: e.target.value,
                        },
                      },
                    });
                  }}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 flex gap-2 items-center text-black dark:text-white">
                  Phone Number <AiOutlinePhone className="h-5 w-5" />
                </label>
                <input
                  type="text"
                  placeholder="Enter their phone number"
                  name={"personalInformation.contactInformation.phone"}
                  value={formData.personalInformation.contactInformation.phone}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      personalInformation: {
                        ...formData.personalInformation,
                        contactInformation: {
                          ...formData.personalInformation.contactInformation,
                          phone: e.target.value,
                        },
                      },
                    });
                  }}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Permanent Address <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter their Permanent Address"
                name={"personalInformation.contactInformation.address"}
                value={formData.personalInformation.contactInformation.address}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    personalInformation: {
                      ...formData.personalInformation,
                      contactInformation: {
                        ...formData.personalInformation.contactInformation,
                        address: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              onClick={addEmploymentDetail}
              className="bg-transparent hover:border-prim border-stroke border-2 text-prim font-medium py-3 px-6 rounded-md  transition mb-4 float-right"
            >
              Add another record
            </button>
            <div className="font-semibold text-lg text-boxdark mb-4">
              Employment Details
            </div>

            {employmentDetails.map((detail, index) => (
              <div
                key={index}
                className="mb-4.5 flex flex-col gap-6 xl:flex-row w-full"
              >
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={detail.jobTitle}
                    onChange={(e) =>
                      handleEmploymentChange(e, "jobTitle", index)
                    }
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Department
                  </label>
                  <input
                    type="text"
                    placeholder="Enter department"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={detail.department}
                    onChange={(e) =>
                      handleEmploymentChange(e, "department", index)
                    }
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Reporting Manager
                  </label>
                  <input
                    type="text"
                    placeholder="Manager name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={detail.reportingManager}
                    onChange={(e) =>
                      handleEmploymentChange(e, "reportingManager", index)
                    }
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Date of Joining
                  </label>
                  <input
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={detail.dateOfJoining}
                    onChange={(e) =>
                      handleEmploymentChange(e, "dateOfJoining", index)
                    }
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 flex gap-2 items-center text-black dark:text-white">
                    Employment Status
                  </label>
                  <div className="relative z-20 bg-white dark:bg-form-input">
                    <select
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-4 pr-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                      onChange={(e) =>
                        handleEmploymentChange(e, "employmentStatus", index)
                      }
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 flex gap-2 items-center text-black dark:text-white">
                    Employment Type
                  </label>
                  <div className="relative z-20 bg-white dark:bg-form-input">
                    <select
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                      onChange={(e) =>
                        handleEmploymentChange(e, "employmentType", index)
                      }
                    >
                      <option value="Permanent">Permanent</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addEducationDetail}
              className="bg-transparent hover:border-prim border-stroke border-2 text-prim font-medium py-3 px-6 rounded-md  transition mb-4 float-right"
            >
              Add another education
            </button>
            <div className="font-semibold text-lg text-boxdark mb-4">
              Educational Background
            </div>
            {educationalBackground.map((education, index) => (
              <div
                key={index}
                className="mb-4.5 flex flex-col gap-6 xl:flex-row w-full"
              >
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="Enter qualification"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={education.qualification}
                    onChange={(e) =>
                      handleEducationChange(e, "qualification", index)
                    }
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Institution Attended
                  </label>
                  <input
                    type="text"
                    placeholder="Enter institution"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={education.institutionAttended}
                    onChange={(e) =>
                      handleEducationChange(e, "institutionAttended", index)
                    }
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Graduation Year
                  </label>
                  <input
                    type="text"
                    placeholder="Enter graduation year"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={education.graduationYear}
                    onChange={(e) =>
                      handleEducationChange(e, "graduationYear", index)
                    }
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addProfessionalExperience}
              className="bg-transparent hover:border-prim border-stroke border-2 text-prim font-medium py-3 px-6 rounded-md  transition mb-8 float-right"
            >
              Add another experience
            </button>
            <div className="font-semibold text-lg text-boxdark mb-8">
              Professional Experience
            </div>
            {professionalExperience.map((experience, index) => (
              <div
                key={index}
                className="border-stroke border-2 rounded-md p-4 "
              >
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Previous Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={experience.previousJobTitle}
                    onChange={(e) =>
                      handleExperienceChange(e, "previousJobTitle", index)
                    }
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Previous Employer
                  </label>
                  <input
                    type="text"
                    placeholder="Enter previous employer"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={experience.previousEmployer}
                    onChange={(e) =>
                      handleExperienceChange(e, "previousEmployer", index)
                    }
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Date of Previous Employment
                  </label>
                  <input
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark-border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={experience.dateOfPreviousEmployment}
                    onChange={(e) =>
                      handleExperienceChange(
                        e,
                        "dateOfPreviousEmployment",
                        index
                      )
                    }
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Relevant Skills and Expertise
                  </label>
                  <input
                    type="text"
                    placeholder="Enter skills separated by comma"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={experience.relevantSkillsAndExpertise}
                    onChange={(e) =>
                      handleExperienceChange(
                        e,
                        "relevantSkillsAndExpertise",
                        index
                      )
                    }
                  />
                </div>
              </div>
            ))}

            <div className="font-semibold text-lg text-boxdark mt-4">
              Sales related skills
            </div>
            <CreatableSelect
              required
              options={skillOptions}
              onChange={handleSkills}
              value={formData.skills}
              isSearchable
              isMulti
              isClearable
              className="rounded-md p-2 mx-auto w-full"
            />

            <button
              onClick={addPerformanceAndAppraisal}
              className="bg-transparent hover:border-prim border-stroke border-2 text-prim font-medium py-3 px-6 rounded-md  transition my-2 float-right"
            >
              Add Appraisal Record
            </button>
            <div className="font-semibold text-lg text-boxdark mt-4 mb-8">
              Performance and Appraisal Information
            </div>
            {performanceAndAppraisalInformation.map((info, index) => (
              <div
                key={index}
                className="border-stroke border-2 rounded-md p-4 "
              >
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Performance Rating
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="Enter performance rating (0-5)"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={info.performanceRating}
                    onChange={(e) =>
                      handlePerformanceChange(e, "performanceRating", index)
                    }
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Appraisal Score
                  </label>
                  <input
                    type="number"
                    placeholder="Enter appraisal score"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={info.appraisalScore}
                    onChange={(e) =>
                      handlePerformanceChange(e, "appraisalScore", index)
                    }
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Feedback
                  </label>
                  <textarea
                    placeholder="Enter feedback"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={info.feedback}
                    onChange={(e) =>
                      handlePerformanceChange(e, "feedback", index)
                    }
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Career Development Plans
                  </label>
                  <textarea
                    placeholder="Enter career development plans"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={info.careerDevelopmentPlans}
                    onChange={(e) =>
                      handlePerformanceChange(
                        e,
                        "careerDevelopmentPlans",
                        index
                      )
                    }
                  />
                </div>
              </div>
            ))}

            <button className="flex w-full justify-center rounded bg-prim p-3 font-medium text-gray mt-4">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
