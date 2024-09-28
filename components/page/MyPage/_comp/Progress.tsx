import { useSummaries } from "@/components/api/queries";

const Progress = () => {
  const { data } = useSummaries();

  return (
    <div>
      {data?.map((data, index) => {
        return <div key={index}>q</div>;
      })}
    </div>
  );
};

export default Progress;
