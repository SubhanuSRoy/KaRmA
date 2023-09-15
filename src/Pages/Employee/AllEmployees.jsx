import React, { useEffect, useState } from "react";
import { notify } from "../../utils/services";
import axios from "axios";
import { ToastContainer } from "react-toast";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);

  const sampleEmployee = {
    personalInformation: {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-05-15",
      gender: "Male",
      contactInformation: {
        phone: "+1-555-555-5555",
        email: "john.doe@example.com",
        address: "123 Main Street, Anytown, USA",
      },
      employeeID: "EMP12345",
    },
    employmentDetails: [
      {
        jobTitle: "Software Engineer",
        department: "Engineering",
        reportingManager: "Jane Smith",
        dateOfJoining: "2020-01-10",
        employmentStatus: "Full-time",
        employmentType: "Permanent",
      },
      {
        jobTitle: "Senior Software Engineer",
        department: "Engineering",
        reportingManager: "Jane Smith",
        dateOfJoining: "2017-03-15",
        employmentStatus: "Full-time",
        employmentType: "Permanent",
      },
    ],
    educationalBackground: [
      {
        qualification: "BSc in Computer Science",
        institutionAttended: "University of XYZ",
        graduationYear: 2012,
      },
      {
        qualification: "MSc in Software Engineering",
        institutionAttended: "Tech Institute ABC",
        graduationYear: 2014,
      },
    ],
    professionalExperience: [
      {
        previousJobTitle: "Junior Developer",
        previousEmployer: "Tech Corp Inc.",
        dateOfPreviousEmployment: "2015-2018",
        relevantSkillsAndExpertise: ["Python", "JavaScript", "Team Leadership"],
      },
      {
        previousJobTitle: "Senior Developer",
        previousEmployer: "Inno Solutions",
        dateOfPreviousEmployment: "2018-2020",
        relevantSkillsAndExpertise: ["Python", "JavaScript", "Team Leadership"],
      },
    ],
    skills: [],
    performanceAndAppraisalInformation: [
      {
        performanceRating: 4.5,
        appraisalScore: 92,
        feedbackAndComments: "",
        careerDevelopmentPlans: "",
      },
    ],
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "GetAllEmployees/")
      .then((res) => {
        console.log(res.data);
        setEmployees(res.data);
        notify("success", "All Employees Fetched Successfully");
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.message);
      });
  }, []);

  return (
    <div className="flex flex-col gap-9 w-full">
      {/* <ToastContainer /> */}
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          All Employees
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Emp ID
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Department
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Role
              </h5>
            </div>
            <div className=" p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Action
              </h5>
            </div>
          </div>

          {employees.map((employee) => {
            return (
              <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5 text-center">
                <div className="flex items-center  gap-3 p-2.5 xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {employee.personalInformation.firstName +
                      " " +
                      employee.personalInformation.lastName}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 p-2.5  xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {employee.personalInformation.EmployeeID}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center gap-3 p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {employee.employmentDetails[0].department}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center gap-3 p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {employee.employmentDetails[0].jobTitle}
                  </p>
                </div>
                <div className="flex items-center gap-3 p-2.5 justify-center xl:p-5">
                  <button className="flex items-center justify-center px-2 py-1.5 text-sm text-white bg-prim rounded-md hover:border-black border-2">
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllEmployees;
