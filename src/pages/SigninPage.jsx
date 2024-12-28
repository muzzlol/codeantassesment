import { useState } from 'react';
// Reusable components
const StatsCard = ({ value, label }) => (
  <div className="flex flex-col relative justify-center items-center">
    <b className="text-lg relative leading-[27px] justify-center">{value}</b>
    <div className="text-sm relative leading-[20px] text-gray-300">
      {label}
    </div>
  </div>
);


// Main components
const StatsPanel = () => {
  return (
    // bottom right logo
    <div className="hidden lg:flex w-1/2 p-8 flex-col items-center justify-center relative">
      <div className="absolute bottom-0 left-0 w-[284px] h-[319px]">
      <img src="/subtract-1.svg" alt="" className="w-full h-full" style={{ fill: '#818181' }} />
    </div>
      <div className="flex flex-col items-end relative">
         {/* features and stats */}
        <div className="shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl flex flex-col pt-[21px] pb-[28.5px] gap-[21.3px] max-w-full">
          <div className="flex flex-row items-center px-5 gap-2">
              <img className="h-[31px]" src="/subtract.svg" />
              <b className="text-lg">{`AI to Detect & Autofix Bad Code`}</b>
          </div>
                  {/* line */}
          <div className="self-stretch h-px border-aliceblue-200 border-t-[1px] border-solid" />

          <div className="w-[425.5px] flex items-start justify-start px-5 max-w-full">
            <div className="flex-1 flex items-start justify-between gap-5 mq450:flex-wrap">
              <StatsCard value="30+" label="Language Support" />
              <StatsCard value="10K+" label="Developers" />
              <StatsCard value="100K+" label="Hours Saved" />
            </div>
          </div>
        </div>
        {/* issues fixed */}
        <div className="shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white flex items-start justify-start p-[15px] gap-[29px] mt-[-12px]">
          <div className="flex flex-col items-start justify-start gap-4 px-4">
            <img className="w-14 h-[56.8px]" alt="" src="/group-4.svg" />
            <div className="flex flex-col gap-2">
              <b className="text-sm leading-[20px]">Issues Fixed</b>
              <b className="text-[32px] leading-[32px]">500K+</b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-4 text-royalblue-300">
            <div className="flex flex-row items-center">
              <img className="h-6 w-6" alt="" src="/ui-iconarrowsmall-right-2@2x.png" />
              <b className='text-sm'>14%</b>
            </div>
            <div className="text-xs text-gray-300 pl-2">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
}


const AuthPanel = () => {
  const [selectedTab, setSelectedTab] = useState('SAAS');

  const renderContent = () => {
    if (selectedTab === 'SAAS') {
      return (
        <div className="py-6 px-20 flex flex-col gap-4">
          <SocialSignInButton icon="/icon@2x.png" text="Sign in with Github" />
          <SocialSignInButton icon="/icon-1@2x.png" text="Sign in with Bitbucket" />
          <SocialSignInButton icon="/icon-2@2x.png" text="Sign in with Azure Devops" />
          <SocialSignInButton icon="/icon-3@2x.png" text="Sign in with GitLab" />
        </div>
      );
    }
    return (
      <div className="py-6 px-20 flex flex-col gap-4">
        <SocialSignInButton icon="/icon-3@2x.png" text="Self Hosted GitLab" />
        <SocialSignInButton icon="/keyicon.svg" text="Sign in with SSO" />
      </div>
    );
  };

  return (
    <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="w-[480px] shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-xl bg-white border border-aliceblue-200 border-solid overflow-hidden flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center justify-start p-9 w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3.5">
              <img className="h-10 w-[35.6px]" alt="" src="/logo.svg" />
              <p className="text-[30px] font-satoshi">CodeAnt AI</p>
            </div>
            <p className="text-[32px] font-semibold">Welcome to CodeAnt AI</p>
          </div>
          
          {/* Plan Selection */}
          <div className="flex px-1 bg-gray-50 border w-[450px] h-[48px]">
            <button 
              onClick={() => setSelectedTab('SAAS')}
              className={`flex-1 rounded-lg py-3 px-6 text-[20px] transition-colors ${
                selectedTab === 'SAAS' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-50'
              }`}
            >
              SAAS
            </button>
            <button 
              onClick={() => setSelectedTab('SELF_HOSTED')}
              className={`flex-1 rounded-lg py-3 px-6 text-[20px] transition-colors ${
                selectedTab === 'SELF_HOSTED' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-50'
              }`}
            >
              Self Hosted
            </button>
          </div>
        </div>

        <div className="self-stretch h-px border-aliceblue-200 border-t-[1px] border-solid" />

        {/* Content */}
        <div className="min-h-[320px] w-full">
          {renderContent()}
        </div>
      </div>
      
      {/* Privacy Policy */}
      <div className="mt-8 text-sm leading-[24px] text-center">
        <span>By signing up you agree to the </span>
        <b>Privacy Policy</b>
        <span>.</span>
      </div>
    </div>
  );
};

const SocialSignInButton = ({ icon, text }) => (
  <button className="w-full h-[48px] flex items-center justify-center gap-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50">
    <img className="w-5 h-5" alt="" src={icon} />
    <span className="text-sm font-semibold text-gray-900">{text}</span>
  </button>
);


const SigninPage = ({ className = "" }) => {
  return (
    <div className={`flex min-h-screen w-full ${className}`}>
      <StatsPanel />
      <AuthPanel />
    </div>
  );
};

export default SigninPage;