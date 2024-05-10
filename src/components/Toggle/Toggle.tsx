import "./Toggle.css";

export const Toggle = ({ handleChange = ()=>{}, isChecked = false}) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"/>
    </div>
  );
};