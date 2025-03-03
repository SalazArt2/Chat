const GenderCheckbox = ({
  selectedGender,
  onCheckboxChange,
}: {
  selectedGender: string;
  onCheckboxChange: (gender: "male" | "female") => void;
}) => {
  return (
    <div className="flex gap-4 justify-center my-4">
      <div className="form-control">
        <label className="label cursor-pointer flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <span className="label-text text-base-300">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
          <span className="label-text text-base-300">Female</span>
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
