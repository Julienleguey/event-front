import React from "react";
import classnames from "classnames";

const errorsMsg = {
  "is_null": "Veuillez remplir ce champ",
  "isEmail": "Email invalide",
  "notEmpty": "Veuillez remplir ce champ",
  "notTooLong": "Vous avez dépassé le nombre de caractères autorisés",
  "isDate": "Date invalide",
}

const Input = ({
  value,
  onChange,
  name,
  placeholder,
  type,
  error,
  className,
  label,
  checked,
  onClick,
  labelClassName,
  ...others
}) => {
  function dateFormatted(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`;
    const day = d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`;

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="input-container">
      <input
        className={classnames(
          type === "date" && "input-date",
          error && "error",
          className
        )}
        value={type === "date" ? dateFormatted(value) : value}
        onChange={(e) => onChange(e)}
        type={type}
        name={name}
        title={placeholder || name}
        placeholder={placeholder || name}
        autoComplete="off"
        {...others}
      />
      <p className="input-name">
        {placeholder || name}
      </p>
      <div className="error-container">
        {error && (
          <p className="input-error-msg">{errorsMsg[error.validatorKey]}</p>
        )}
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
