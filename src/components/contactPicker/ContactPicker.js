import React from "react";

export const ContactPicker = ({ contacts, value, name, onChange }) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact, idx) => (
        <option key={idx} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};