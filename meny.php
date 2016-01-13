<?php $title='Template for testprogram'; include('header.php'); include('class/CDatabase.php');
$db = new CDatabase();
$res = $db->executeQuery('SELECT animal.id, animal.name from animal'); 
?>
<div id='content'>
<div id='animalList'>
<h1>Klicka på ett djur</h1>
<i>Tips.. håll musen över varje bild för att höra hur dom låter</i>
<form method="GET">
<? foreach ($res as $key => $value) {
	?> <a href="play.php?animal=<? echo $res[$key]['id']?>" name="<? echo $res[$key]['id']?>"><img id="<? echo $res[$key]['id'] ?>" class="animal" src="images/<? echo $res[$key]['id']?>Sign.jpg" 
		atr="<? echo $res[$key]['name']?>"width="298" height="213" onclick="setCurrentAnimal('<? echo $res[$key]['id'] ?>')" onmouseover="playHoverSound('<? echo $res[$key]['id'] ?>')"></a><?
}

?>
</form>
</div>
</div>
<?
include('footer.php'); 
?>