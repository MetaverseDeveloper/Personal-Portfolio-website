// Location.tsx
import { DETAILS } from "@/constants/constants";
import { getObjectKeys } from "@/utils/utils";

interface LocationProps {
  // You can add any props that you need for your component here
}

const Location: React.FC<LocationProps> = (props) => {
  const keys = getObjectKeys(DETAILS) as Array<keyof typeof DETAILS>;
  return (
    <div className="flex flex-col space-y-1 px-2 pr-4">
      {keys.map((key, index) => {
        return (
          <div key={index} className="flex items-center justify-between">
            <span className="text-Snow text-xs font-bold">{key}</span>
            {/* Use the key as an index for DETAILS without any error */}
            <span className="text-xs text-gray-600">{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
