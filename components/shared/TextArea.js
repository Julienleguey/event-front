import React from "react";
import classnames from "classnames";

const errorsMsg = {
  "is_null": "Veuillez remplir ce champ",
  "notEmpty": "Veuillez remplir ce champ",
  "notTooLong": "Vous avez dépassé le nombre de caractères autorisés",
}

const TextArea = ({
  value,
  onChange,
  name,
  placeholder,
  error,
  className,
  label,
  ...others
}) => {
  return (
    <div className="input-container">
      <textarea
        className={classnames(
          error && "error",
          className
        )}
        rows="5"
        value={value}
        onChange={(e) => onChange(e)}
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
};

export default TextArea;
