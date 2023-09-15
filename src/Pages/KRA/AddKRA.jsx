import axios from "axios";
import React, { useState } from "react";

function AddKRA() {
  const [loading, setLoading] = useState(false);
  const [kra, setKRA] = useState({
    title: "",
    description: "",
    kpis: {
      onTimeDelivery: "",
      budgetAdherence: "",
      stakeholderSatisfaction: "",
    },
    weightage: 0,
    targetsObjectives: "",
    timeline: "",
    performanceMeasurementFrequency: "",
    responsibilitiesDuties: [],
    resourcesRequired: {
      budget: "",
      projectManagementSoftware: "",
      crossFunctionalTeam: "",
    },
    skillsCompetencies: [],
    dependencies: [],
    team: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKRA({
      ...kra,
      [name]: value,
    });
  };

  const handleKPISChange = (e) => {
    const { name, value } = e.target;
    setKRA({
      ...kra,
      kpis: {
        ...kra.kpis,
        [name]: value,
      },
    });
  };

  const handleResponsibilitiesChange = (e, index) => {
    const updatedResponsibilities = [...kra.responsibilitiesDuties];
    updatedResponsibilities[index] = e.target.value;
    setKRA({
      ...kra,
      responsibilitiesDuties: updatedResponsibilities,
    });
  };

  const handleSkillsChange = (e, index) => {
    const updatedSkills = [...kra.skillsCompetencies];
    updatedSkills[index] = e.target.value;
    setKRA({
      ...kra,
      skillsCompetencies: updatedSkills,
    });
  };

  const handleDependenciesChange = (e, index) => {
    const updatedDependencies = [...kra.dependencies];
    updatedDependencies[index] = e.target.value;
    setKRA({
      ...kra,
      dependencies: updatedDependencies,
    });
  };

  const addResponsibility = () => {
    setKRA({
      ...kra,
      responsibilitiesDuties: [...kra.responsibilitiesDuties, ""],
    });
  };

  const addSkill = () => {
    setKRA({
      ...kra,
      skillsCompetencies: [...kra.skillsCompetencies, ""],
    });
  };

  const addDependency = () => {
    setKRA({
      ...kra,
      dependencies: [...kra.dependencies, ""],
    });
  };

  const sendKRA = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(process.env.REACT_APP_BACKEND + "AddKRA/", kra)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        // notify(
        //   "success",
        //   "Employee added successfully with ID: " + res.data.EmployeeID
        // );
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <form onSubmit={sendKRA}>
      <div className="font-semibold text-lg text-boxdark mb-4">
        Key Result Area (KRA)
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter KRA title"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Enter KRA description"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="font-semibold text-lg text-boxdark mb-4">KPIs</div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          On-Time Delivery
        </label>
        <input
          type="text"
          name="onTimeDelivery"
          placeholder="Enter on-time delivery KPI"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.kpis.onTimeDelivery}
          onChange={handleKPISChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Budget Adherence
        </label>
        <input
          type="text"
          name="budgetAdherence"
          placeholder="Enter budget adherence KPI"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.kpis.budgetAdherence}
          onChange={handleKPISChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Stakeholder Satisfaction
        </label>
        <input
          type="text"
          name="stakeholderSatisfaction"
          placeholder="Enter stakeholder satisfaction KPI"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.kpis.stakeholderSatisfaction}
          onChange={handleKPISChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Weightage
        </label>
        <input
          type="number"
          name="weightage"
          placeholder="Enter weightage in percentage"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.weightage}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Targets and Objectives
        </label>
        <textarea
          name="targetsObjectives"
          placeholder="Enter targets and objectives"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.targetsObjectives}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Timeline
        </label>
        <input
          type="text"
          name="timeline"
          placeholder="Enter timeline"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-prim"
          value={kra.timeline}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark-text-white">
          Performance Measurement Frequency
        </label>
        <input
          type="text"
          name="performanceMeasurementFrequency"
          placeholder="Enter performance measurement frequency"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled:cursor-default disabled-bg-whiter dark:border-form-strokedark dark-bg-form-input dark:focus:border-prim"
          value={kra.performanceMeasurementFrequency}
          onChange={handleInputChange}
        />
      </div>
      <div className="font-semibold text-lg text-boxdark mb-4">
        Responsibilities and Duties
      </div>
      {kra.responsibilitiesDuties.map((responsibility, index) => (
        <div key={index} className="mb-4.5">
          <input
            type="text"
            placeholder={`Enter responsibility #${index + 1}`}
            className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active:border-prim disabled-cursor-default disabled-bg-whiter dark:border-form-strokedark dark-bg-form-input dark-focus-border-prim"
            value={responsibility}
            onChange={(e) => handleResponsibilitiesChange(e, index)}
          />
        </div>
      ))}
      <button
        onClick={addResponsibility}
        className=" bg-prim my-4 hover:bg-prim my-4-dark text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
      >
        Add Responsibility
      </button>
      <div className="font-semibold text-lg text-boxdark mb-4">
        Resources Required
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark-text-white">
          Budget
        </label>
        <input
          type="text"
          name={"kra.resourcesRequired.budget"}
          placeholder="Enter budget"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-prim active-border-prim disabled-cursor-default disabled-bg-whiter dark:border-form-strokedark dark-bg-form-input dark-focus-border-prim"
          value={kra.resourcesRequired.budget}
          onChange={(e) => {
            setKRA({
              ...kra,
              resourcesRequired: {
                ...kra.resourcesRequired,
                budget: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark-text-white">
          Project Management Software
        </label>
        <input
          type="text"
          name="projectManagementSoftware"
          placeholder="Enter project management software"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus-border-prim active-border-prim disabled-cursor-default disabled-bg-whiter dark-border-form-strokedark dark-bg-form-input dark-focus-border-prim"
          value={kra.resourcesRequired.projectManagementSoftware}
          onChange={(e) => {
            setKRA({
              ...kra,
              resourcesRequired: {
                ...kra.resourcesRequired,
                projectManagementSoftware: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark-text-white">
          Cross-Functional Team
        </label>
        <input
          type="text"
          name="crossFunctionalTeam"
          placeholder="Enter cross-functional team details"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus-border-prim active-border-prim disabled-cursor-default disabled-bg-whiter dark-border-form-strokedark dark-bg-form-input dark-focus-border-prim"
          value={kra.resourcesRequired.crossFunctionalTeam}
          onChange={(e) => {
            setKRA({
              ...kra,
              resourcesRequired: {
                ...kra.resourcesRequired,
                crossFunctionalTeam: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="font-semibold text-lg text-boxdark mb-4">
        Skills and Competencies
      </div>
      {kra.skillsCompetencies.map((skill, index) => (
        <div key={index} className="mb-4.5">
          <input
            type="text"
            placeholder={`Enter skill #${index + 1}`}
            className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus-border-prim active-border-prim disabled-cursor-default disabled-bg-whiter dark-border-form-strokedark dark-bg-form-input dark-focus-border-prim"
            value={skill}
            onChange={(e) => handleSkillsChange(e, index)}
          />
        </div>
      ))}
      <button
        onClick={addSkill}
        className="bg-prim my-4 hover:bg-prim my-4-dark text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
      >
        Add Skill
      </button>
      <div className="font-semibold text-lg text-boxdark mb-4">
        Dependencies
      </div>
      {kra.dependencies.map((dependency, index) => (
        <div key={index} className="mb-4.5">
          <input
            type="text"
            placeholder={`Enter dependency #${index + 1}`}
            className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus-border-prim active-border-prim disabled-cursor-default disabled-bg-whiter dark-border-form-strokedark dark-bg-form-input dark-focus-border-prim"
            value={dependency}
            onChange={(e) => handleDependenciesChange(e, index)}
          />
        </div>
      ))}
      <button
        onClick={addDependency}
        className="bg-prim my-4 hover:bg-prim my-4-dark text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
      >
        Add Dependency
      </button>
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark-text-white">Team</label>
        <input
          type="text"
          name="team"
          placeholder="Enter team"
          className="w-full rounded border-[1.5px] border-graydark bg-transparent py-3 px-5 font-medium outline-none transition focus-border-prim active-border-prim disabled-cursor-default disabled-bg-whiter dark-border-form-strokedark dark-bg-form-input dark-focus-border-prim"
          value={kra.team}
          onChange={handleInputChange}
        />
      </div>

      <button className="flex w-full justify-center rounded bg-prim p-3 font-medium text-gray mt-4">
        {loading ? (
          <img
            className="h-12"
            src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          />
        ) : (
          <span>Add KRA</span>
        )}
      </button>
    </form>
  );
}

export default AddKRA;
