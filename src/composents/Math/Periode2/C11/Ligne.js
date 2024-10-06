function Ligne({ chiffre, onReponseChange, animationClass }) {
  return (
    <table className={`conversion-table ${animationClass}`}>
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => onReponseChange("oui")}
              style={{ marginRight: "10px" }}
            >
              jjjjjjjjj
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onReponseChange("non")}
            >
              Non
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
