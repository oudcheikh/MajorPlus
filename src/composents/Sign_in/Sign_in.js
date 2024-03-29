
import './Styles.css'
  const SignIn = () => {

 return(
<div>
<div class="container">
<h1>Informations</h1>
<div class="profile-photo">
    <label for="photo-upload" class="upload-btn">
        <img src="placeholder.jpg" alt="Photo de profil"/>
        <span>Ajouter</span>
    </label>
    <input type="file" id="photo-upload"/>
</div>
<div class="info-section">
    <label for="email">E-mail</label>
    <input type="email" id="email" value="-------"/>
</div>
<div class="info-section">
    <label for="prenom">Prénom</label>
    <input type="text" id="prenom" value="---------"/>
</div>
<div class="info-section">
    <label for="nom">Nom</label>
    <input type="text" id="nom" value=""/>
</div>
<div class="info-section">
    <label for="telephone">Téléphone</label>
    <input type="tel" id="telephone" value=""/>
    <p class="error-msg">Veuillez saisir un numéro de téléphone valide</p>
</div>
<button class="save-btn">Sauvegarder</button>
</div>
</div>
)
}
export default SignIn;