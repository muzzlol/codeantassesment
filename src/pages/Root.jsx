import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectRows from "../components/ProjectRows";

// Update the Button component to handle responsive text
const Button = ({
  icon,
  text,
  isSelected,
  onClick,
  variant = "sidebar",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-row items-center gap-spacing-md1 rounded-radius-sm
        transition-colors duration-200 
        ${
          variant === "sidebar"
            ? `
              w-full justify-start py-spacing-md1 px-spacing-lg1
              ${
                isSelected
                  ? "bg-royalblue-100 text-white border-gray-400 border-[2px]"
                  : "bg-white text-component-colors-utility-gray-utility-gray-700 hover:bg-[#f7f7f7]"
              }
            `
            : variant === "primary"
            ? `
              justify-center py-2 md:px-[13px] px-2 border-[1px] border-royalblue-100
              bg-royalblue-100 text-white hover:bg-royalblue-200
            `
            : `
              justify-center py-2 md:px-[13px] px-2 border-[1px] border-lightgray
              ${
                isSelected
                  ? "bg-royalblue-100 text-white border-gray-400 border-[2px]"
                  : "bg-white text-component-colors-utility-gray-utility-gray-700 hover:bg-gray-50"
              }
            `
        }
        ${className}
      `}
    >
      {icon && (
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src={icon}
        />
      )}
      <span className={`font-semibold ${variant !== 'sidebar' ? 'md:block hidden' : ''}`}>
        {text}
      </span>
    </button>
  );
};

const Sidebar = ({ selectedButton, setSelectedButton, onTextClick }) => {
  return (
    <div className="self-stretch w-[242px] bg-white border-component-colors-utility-gray-utility-gray-200 border-r-[1px] border-solid box-border flex flex-row items-start justify-start md:block hidden">
      <div className="self-stretch min-h-screen flex-1 flex flex-col items-start justify-between">
        <div className="self-stretch flex flex-col items-start justify-start pt-spacing-3xl1 px-0 pb-0 box-border gap-spacing-xl1">
          <div className="self-stretch h-[92px] flex flex-col items-start justify-start py-0 px-spacing-2xl1 box-border gap-spacing-2xl1">
            <div className="flex flex-row items-center justify-start gap-[11px]">
              <img className="h-8 w-[28.5px] relative" loading="lazy" alt="" src="/logo.svg" />
              <h3 className="m-0 relative text-inherit leading-[110%] font-normal font-[inherit] mq450:text-lgi mq450:leading-[21px]">
                CodeAnt AI
              </h3>
            </div>
            {/* User Profile Section */}
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-md1 text-sm text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium1">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-sm">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-sm">
                  <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md1 bg-white border-lightgray border-[1px] border-solid flex flex-row items-center justify-start py-1.5 px-[11px] gap-spacing-md1 text-base text-gray-100">
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="w-[157.5px] relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                        UtkarshDhairyaPanwar
                      </div>
                    </div>
                    <img className="h-[7.2px] w-[13.5px] relative" loading="lazy" alt="" src="/chevrondown.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-spacing-xl1 text-base text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium1">
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0 text-white">
              <Button
                icon="/home.svg"
                text="Repositories"
                isSelected={selectedButton === "Repositories"}
                onClick={() => setSelectedButton("Repositories")}
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
              <Button
                icon="/code.svg"
                text="AI Code Review"
                isSelected={selectedButton === "AI Code Review"}
                onClick={() => setSelectedButton("AI Code Review")}
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
              <Button
                icon="/cloud.svg"
                text="Cloud Security"
                isSelected={selectedButton === "Cloud Security"} 
                onClick={() => setSelectedButton("Cloud Security")}
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
              <Button
                icon="/docs.svg"
                text="How to Use"
                isSelected={selectedButton === "How to Use"}
                onClick={() => setSelectedButton("How to Use")}
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
              <Button
                icon="/settings.svg"
                text="Settings"
                isSelected={selectedButton === "Settings"}
                onClick={() => setSelectedButton("Settings")}
              />
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-spacing-xl1 pb-spacing-3xl1 text-base text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium1">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
              <Button icon="/phone.svg" text="Support" variant="sidebar" />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
              <Button icon="/logout.svg" text="Logout" variant="sidebar" onClick={onTextClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Root = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("Repositories");

  const onTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-row items-start justify-start p-2.5 box-border leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-white overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-5xl text-gray-100 font-satoshi mq1225:h-auto">
        <Sidebar 
          selectedButton={selectedButton} 
          setSelectedButton={setSelectedButton}
          onTextClick={onTextClick}
          />
        <section className="flex-1 bg-component-colors-utility-gray-utility-gray-50 flex flex-row items-start justify-start p-6 box-border md:max-w-[calc(100%_-_242px)] max-w-full text-left text-5xl text-gray-100 font-text-xs-medium1 mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
          <div className="h-[912px] flex-1 relative shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-xl bg-white border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid box-border overflow-hidden max-w-full mq1225:h-auto mq1225:min-h-[912]">
            <div className="absolute top-[0px] left-[0px] bg-white border-component-colors-utility-gray-utility-gray-200 border-b-[1px] border-solid box-border w-full flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-spacing-2xl px-spacing-3xl pb-20 box-border max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-0 mq1225:flex-wrap">
                  <div className="w-[805px] flex flex-col items-start justify-start pt-0 pb-6 pl-0 pr-5 box-border max-w-full">
                    <a className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit] mq450:text-lgi mq450:leading-[26px]">
                      Repositories
                    </a>
                  </div>
                  <div className="h-10 flex flex-row items-center justify-start gap-3">
                    <Button
                      icon="/cycle.svg"
                      text="Refresh All"
                      variant="action"
                      onClick={() => {}}
                    />
                    <Button
                      icon="/plus.svg"
                      text="Add Repository"
                      variant="primary"
                      onClick={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[56px] left-[0px] w-full flex flex-col items-start justify-start gap-[18px] max-w-full text-sm text-component-colors-utility-gray-utility-gray-700">
              <div className="flex flex-row items-start justify-start py-0 pl-6 pr-[23px]">
                <div className="relative leading-[20px]">
                  33 total repositories
                </div>
              </div>
              <div className="w-[414px] h-11 flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="self-stretch flex-1 shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset,_0px_-2px_0px_rgba(10,_13,_18,_0.05)_inset,_0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md bg-white border-lightgray border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-2 px-3.5 gap-spacing-xs max-w-full">
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/search.svg"
                  />
                  <input
                    className="w-[155px] [border:none] [outline:none] bg-[transparent] flex flex-col items-start justify-start pt-0.5 px-0.5 pb-0 box-border font-text-xs-medium1 text-base text-component-colors-utility-gray-utility-gray-700"
                    placeholder="Search Repositories"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-xl text-gray-100">
                <ProjectRows
                  projectName="design-system"
                  badge="Public" 
                  language="React"
                  memory="7320 KB"
                  lastUpdated="Updated 1 day ago"
                />
                <ProjectRows
                  projectName="codeant-ci-app"
                  badge="Private"
                  language="Javascript"
                  memory="5871 KB"
                  lastUpdated="Updated 2 days ago"
                />
                <ProjectRows
                  projectName="analytics-dashboard"
                  badge="Private"
                  language="Python" 
                  memory="4521 KB"
                  lastUpdated="Updated 5 days ago"
                />
                <ProjectRows
                  projectName="mobile-app"
                  badge="Public"
                  language="Swift"
                  memory="3096 KB"
                  lastUpdated="Updated 3 days ago"
                />
                <ProjectRows
                  projectName="e-commerce-platform"
                  badge="Private"
                  language="Java"
                  memory="6210 KB"
                  lastUpdated="Updated 6 days ago"
                />
                <ProjectRows
                  projectName="blog-website"
                  badge="Public"
                  language="HTML/CSS"
                  memory="1876 KB"
                  lastUpdated="Updated 4 days ago"
                />
                <ProjectRows
                  projectName="social-network"
                  badge="Private"
                  language="PHP"
                  memory="5432 KB"
                  lastUpdated="Updated 7 days ago"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Root;
