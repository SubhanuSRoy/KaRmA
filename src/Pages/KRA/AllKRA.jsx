import React, { useEffect, useState } from "react";
import { notify } from "../../utils/services";
import axios from "axios";
import { ToastContainer } from "react-toast";

function AllKRAs() {
  const [KRAs, setKRAs] = useState([]);

  const sampleKRA = {
    title: "KRA1",
    description: "enbetqneqtn",
    kpis: {
      onTimeDelivery: "qtenqtenq",
      budgetAdherence: "tente",
      stakeholderSatisfaction: "j wj 5yj",
    },
    weightage: 0,
    targetsObjectives: " yjyytk",
    timeline: " wyj yj",
    performanceMeasurementFrequency: " wyj wyj 5",
    responsibilitiesDuties: ["7ktuk57ek", "68;l86lle6"],
    resourcesRequired: {
      budget: "yj 5yj w",
      projectManagementSoftware: "45j 46j",
      crossFunctionalTeam: "64 qj46 ",
    },
    skillsCompetencies: [" j6q4j 64j"],
    dependencies: ["6j 64q ", "46j46q j46j"],
    team: "w b4w ht ht",
    KRAID: "KRA391716",
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "GetAllKRAsData/")
      .then((res) => {
        console.log(res.data);
        setKRAs(res.data);
        notify("success", "All KRAs Fetched Successfully");
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
          All KRAs
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Title
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                KRA ID
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Weightage
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Team
              </h5>
            </div>
            <div className=" p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Action
              </h5>
            </div>
          </div>

          {KRAs.map((kra) => {
            return (
              <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5 text-center">
                <div className="flex items-center  gap-3 p-2.5 xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {kra.title}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 p-2.5  xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {kra.KRAID}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center gap-3 p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {kra.weightage}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center gap-3 p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white sm:block">
                    {kra.team}
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

export default AllKRAs;
