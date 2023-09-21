<?php
header("Content-Type: text/plain");
$comment = (isset($_POST["comment"])) ? $_POST["comment"] : NULL;
$coord_x = (isset($_POST["coord_x"])) ? $_POST["coord_x"] : NULL;
$coord_y = (isset($_POST["coord_y"])) ? $_POST["coord_y"] : NULL;
$date_observation = (isset($_POST["date_observation"])) ? $_POST["date_observation"] : NULL;
$mail = (isset($_POST["mail"])) ? $_POST["mail"] : NULL;
$imagename = (isset($_POST["imagename"])) ? $_POST["imagename"] : NULL;
$nom = (isset($_POST["nom"])) ? $_POST["nom"] : NULL;
$id = (isset($_POST["id"])) ? $_POST["id"] : NULL;
// $geom= 'ST_SetSRID(st_makepoint('$coord_x','$coord_y'),4326))'
// print $geom
// if ($comment)
{
	 /** Connexion **/
$connexion = new PDO('pgsql:host=Prod-postsig4.cr-bretagne.fr;port=5434;dbname=bdsig', 'sig', 'tetelle');

/** Préparation et exécution de la requête **/
$sql = 'INSERT INTO public.test (id,nom,mail,comment,coord_x,coord_y,imagename,date_observation) VALUES (:id,:nom,:mail,:comment,:coord_x,:coord_y,:imagename,:date_observation)';
$result = $connexion->prepare($sql);
$result->bindValue(':id',$id);
$result->bindValue(':nom',$nom);
$result->bindValue(':mail',$mail);
$result->bindValue(':comment',$comment);
$result->bindValue(':coord_x',$coord_x);
$result->bindValue(':coord_y',$coord_y);
$result->bindValue(':imagename',$imagename);
$result->bindValue(':date_observation',$date_observation);
// $result->bindValue(':geom',$geom);
$result->execute();

/** Traitement du résultat **/
if ($result) {
echo 'Nouveau inséré';
}
else {
echo 'Erreur lors de l\'insertion';
}

/** Déconnexion **/
$connexion=null;

}
// else
// {
	// echo "FAIL";
// }

?>
