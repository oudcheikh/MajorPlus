import React from "react";

function Ligne({ chiffre, onReponseChange }) {
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    onReponseChange(value);  // Pass the value back to the parent component
  };

  return (
    <div>
      <table className="conversion-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Réponse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{chiffre}</td>
            <td>
              <input
                type="text"
                className="small-input"
                placeholder="---"
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ligne;
