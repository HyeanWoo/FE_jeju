import { redirect } from "next/navigation";
import ThirdStep from "./_comp/ThirdStep";
import FirstStep from "./_comp/FirstStep";
import SecondStep from "./_comp/SecondStep";
const OnBoarding = (props: { params: { step: string }; searchParams: {} }) => {
  const { params } = props;
  const step = params.step;
  const isStep = ["first", "second", "third"].some((item) => item === step);

  if (!isStep) {
    redirect("/onboarding/first");
  }

  return (
    <main className="mx-auto mb-[50px] flex w-full max-w-[390px] flex-col px-5 pt-[60px] sm:max-w-[744px]">
      {step === "first" && <FirstStep />}
      {step === "second" && <SecondStep />}
      {step === "third" && <ThirdStep />}
    </main>
  );
};

export default OnBoarding;
