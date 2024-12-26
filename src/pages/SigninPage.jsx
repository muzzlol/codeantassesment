// Reusable components
const StatsCard = ({ value, label }) => (
  <div className="flex flex-col items-start justify-start">
    <b className="relative leading-[27px] z-[1]">{value}</b>
    <div className="relative leading-[20px] text-sm text-gray-300 z-[1]">
      {label}
    </div>
  </div>
);



const SigninPage = () => (
  <div className="flex min-h-screen w-full">
    <StatsPanel />
    <AuthPanel />
  </div>
);
const SocialSignInButton = ({ icon, text }) => (
  <button className="w-full h-12 flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
    <img className="w-5 h-5" alt="" src={icon} />
    <span className="text-sm font-semibold text-gray-700">{text}</span>
  </button>
);
const StatsPanel = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-white p-16 relative">
      <div className="flex flex-col items-end justify-start relative">
        <div className="shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white flex flex-col items-start justify-start pt-[21px] px-0 pb-[28.5px] gap-[21.3px] max-w-full">
          <div className="flex flex-row items-start justify-start px-[22px]">
            <div className="flex flex-row items-start justify-start gap-2">
              <img className="h-[31px] w-7 relative z-[1]" alt="" src="/subtract.svg" />
              <b className="relative leading-[27px] z-[1]">{`AI to Detect & Autofix Bad Code`}</b>
            </div>
          </div>
          <div className="self-stretch h-px relative border-aliceblue-200 border-t-[1px] border-solid z-[1]" />
          <div className="w-[425.5px] flex flex-row items-start justify-start px-5 max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <StatsCard value="30+" label="Language Support" />
              <StatsCard value="10K+" label="Developers" />
              <StatsCard value="100K+" label="Hours Saved" />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white flex flex-row items-start justify-start p-[15px] gap-[29px] mt-[-12px]">
          <div className="flex flex-col items-start justify-start gap-4">
            <img className="w-14 h-[56.8px]" alt="" src="/group-4.svg" />
            <div className="flex flex-col gap-2">
              <b className="text-sm leading-[20px]">Issues Fixed</b>
              <b className="text-4xl leading-[32px] text-gray-200">500K+</b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 text-royalblue-300">
            <div className="flex items-center gap-2">
              <img className="h-6 w-6" alt="" src="/ui-iconarrowsmall-right-2@2x.png" />
              <b className="leading-[20px]">14%</b>
            </div>
            <div className="text-xs text-gray-300">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthPanel = () => (
  <div className="w-full lg:w-1/2 bg-[#FAFAFA] flex items-center justify-center p-8">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-8 py-10 border-b border-gray-200">
          <div className="flex flex-col items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img className="h-10 w-[35.6px]" alt="" src="/logo.svg" />
              <span className="text-2xl">CodeAnt AI</span>
            </div>
            <h1 className="text-3xl font-semibold text-center">Welcome to CodeAnt AI</h1>
          </div>
          
          <div className="flex p-1 bg-gray-50 rounded-md">
            <button className="flex-1 py-3 text-center font-semibold bg-blue-500 text-white rounded-lg">
              SAAS
            </button>
            <button className="flex-1 py-3 text-center font-semibold">
              Self Hosted
            </button>
          </div>
        </div>

        <div className="p-8 flex flex-col gap-4">
          <SocialSignInButton icon="/icon@2x.png" text="Sign in with Github" />
          <SocialSignInButton icon="/icon-1@2x.png" text="Sign in with Bitbucket" />
          <SocialSignInButton icon="/icon-2@2x.png" text="Sign in with Azure Devops" />
          <SocialSignInButton icon="/icon-3@2x.png" text="Sign in with GitLab" />
        </div>
      </div>
      
      <div className="text-center mt-8">
        By signing up you agree to the <b>Privacy Policy</b>.
      </div>
    </div>
  </div>
);

export default SigninPage;
