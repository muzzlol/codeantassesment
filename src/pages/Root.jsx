import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectRows from "../components/ProjectRows";

// First, add these base styles to your CSS/Tailwind config

const Button = ({
  icon,
  text,
  isSelected,
  onClick,
  variant = "sidebar",
  className = ""
}) => {
  const variants = {
    sidebar: `btn-base sidebar-btn ${
      isSelected
        ? "bg-royalblue-100 text-white border-2"
        : "bg-white hover:bg-gray-50"
    }`,
    primary: "btn-base action-btn bg-royalblue-100 text-white hover:bg-royalblue-200 border-royalblue-100",
    action: `btn-base action-btn ${
      isSelected
        ? "bg-royalblue-100 text-white border-2"
        : "bg-white hover:bg-gray-50"
    }`
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {icon && <img className="h-6 w-6" loading="lazy" alt="" src={icon} />}
      <span className={variant !== 'sidebar' ? 'md:block hidden font-semibold' : 'font-semibold'}>
        {text}
      </span>
    </button>
  );
};

const Sidebar = ({ selectedButton, setSelectedButton, onTextClick }) => {
  return (
    <aside className="w-[242px] bg-white border-r md:block hidden">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="flex flex-col pt-6 gap-4">
          <div className="px-5 space-y-5">
            <div className="flex items-center gap-3">
              <img className="h-10 w-[35px]" loading="lazy" alt="" src="/logo.svg" />
              <h3 className="text-2xl">CodeAnt AI</h3>
            </div>
            
            <div className="flex items-center p-1.5 px-3 gap-2 text-base border rounded-md">
              <div className="flex-1 truncate">UtkarshDhairyaPanwar</div>
              <img className="h-2 w-3.5" loading="lazy" alt="" src="/chevrondown.svg" />
            </div>
          </div>

          <nav className="px-5 space-y-1">
            {[
              { icon: "/home.svg", text: "Repositories" },
              { icon: "/code.svg", text: "AI Code Review" },
              { icon: "/cloud.svg", text: "Cloud Security" },
              { icon: "/docs.svg", text: "How to Use" },
              { icon: "/settings.svg", text: "Settings" }
            ].map(item => (
              <Button
                key={item.text}
                icon={item.icon}
                text={item.text}
                isSelected={selectedButton === item.text}
                onClick={() => setSelectedButton(item.text)}
              />
            ))}
          </nav>
        </div>

        <div className="px-5 pb-6 space-y-1">
          <Button icon="/phone.svg" text="Support" />
          <Button icon="/logout.svg" text="Logout" onClick={onTextClick} />
        </div>
      </div>
    </aside>
  );
};

const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen, selectedButton, setSelectedButton, onTextClick }) => {
  return (
    <div className="md:hidden">
      <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 flex items-center z-50">
        <div className="flex items-center gap-3 py-[10px] px-6">
          <img className="h-10 w-[35px]" src="/logo.svg" alt="logo" />
          <span className="text-2xl">CodeAnt AI</span>
        </div>
        
        <button 
          className="ml-auto h-20 px-6 bg-white flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img 
            src={isMobileMenuOpen ? "/X.svg" : "/hamburger-menu.svg"} 
            alt="menu" 
            className="h-8 w-8" 
          />
        </button>
      </header>

      <div className="fixed top-20 left-0 right-0 bg-white z-40 border-b border-gray-200 px-6 py-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Repositories</h1>
              <p className="text-sm text-gray-600">33 total repositories</p>
            </div>
            <div className="flex gap-3">
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

          <div className="w-full">
            <div className="shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset] rounded-md bg-white border border-lightgray flex items-center py-2 px-3.5 gap-2">
              <img className="h-6 w-6" alt="" src="/search.svg" />
              <input
                className="flex-1 border-none outline-none bg-transparent text-base"
                placeholder="Search Repositories"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <nav className="fixed top-[168px] left-0 w-full bg-white z-40">
            <div className="p-6 border-b border-gray-200">
              <div className="rounded-md border p-1.5 px-3 flex items-center justify-between">
                <div className="truncate">UtkarshDhairyaPanwar</div>
                <img className="h-2 w-3.5" src="/chevrondown.svg" alt="chevron" />
              </div>
            </div>

            <div className="p-4 space-y-3 text-lg">
              <Button icon="/home.svg" text="Repositories" onClick={() => setSelectedButton("Repositories")} />
              <Button icon="/code.svg" text="AI Code Review" onClick={() => setSelectedButton("AI Code Review")} />
              <Button icon="/cloud.svg" text="Cloud Security" onClick={() => setSelectedButton("Cloud Security")} />
              <Button icon="/docs.svg" text="How to Use" onClick={() => setSelectedButton("How to Use")} />
              <Button icon="/settings.svg" text="Settings" onClick={() => setSelectedButton("Settings")} />
              <Button icon="/phone.svg" text="Support" />
              <Button icon="/logout.svg" text="Logout" onClick={onTextClick} />
            </div>
          </nav>

          <div 
            className="fixed inset-0 bg-black/50 z-30 mt-[168px]" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </>
      )}
    </div>
  );
};

const Root = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("Repositories");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start box-border leading-[normal] tracking-[normal] font-inter">
      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        onTextClick={onTextClick}
      />
      <main className="flex-1 w-full bg-white overflow-hidden flex items-start justify-start max-w-full text-left text-5xl text-gray-100 font-satoshi mq1225:h-auto">
        <Sidebar 
          selectedButton={selectedButton} 
          setSelectedButton={setSelectedButton}
          onTextClick={onTextClick}
        />
        <section className="
          flex-1 
          bg-gray-50 
          flex 
          items-start 
          justify-start 
          md:p-6
          p-0
          box-border 
          md:max-w-[calc(100%_-_242px)] 
          max-w-full 
          text-left 
          text-5xl 
          text-gray-100 
          font-text-xs-medium1"
        >
          <div className="h-[912px] flex-1 relative shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-xl bg-white border border-gray-200 box-border overflow-hidden max-w-full mq1225:h-auto mq1225:min-h-[912]">
            <div className="absolute top-[0px] left-[0px] bg-white border-b border-gray-200 box-border w-full flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-8 px-12 pb-20 box-border max-w-full">
                <div className="self-stretch flex items-center justify-between [row-gap:20px] max-w-full gap-0 md:flex mq1225:flex-wrap hidden">
                  <div className="w-[805px] flex flex-col items-start justify-start pt-0 pb-6 pl-0 pr-5 box-border max-w-full">
                    <a className="[text-decoration:none] relative leading-[32px] font-semibold mq450:text-lgi mq450:leading-[26px]">
                      Repositories
                    </a>
                  </div>
                  <div className="h-10 flex items-center justify-start gap-3 pr-4">
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
            <div className="absolute top-[56px] left-[0px] w-full flex flex-col items-start justify-start gap-[18px] max-w-full text-sm text-gray-700">
              <div className="flex items-start justify-start py-0 pl-6 pr-[23px]">
                <div className="relative leading-[20px]">
                  33 total repositories
                </div>
              </div>
              <div className="w-[414px] h-11 flex items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="self-stretch flex-1 shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset] rounded-md bg-white border border-lightgray box-border overflow-hidden flex items-center justify-start py-2 px-3.5 gap-2 max-w-full mr-4">
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/search.svg"
                  />
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] font-text-xs-medium1 text-base text-gray-700"
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
