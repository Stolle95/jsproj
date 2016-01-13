<?php $title='Template for testprogram'; include('header.php'); include('class/CDatabase.php'); 
?>
<div id='content'>
<? 
$db = new CDatabase();
if(isset($_GET['animal']))
{
	$type = $_GET['animal'];
	$res = $db->executeQuery("SELECT * FROM animal WHERE id='$type'");
	
	?>
	<h1 class="animalName"><? echo utf8_encode($res[0]['name'])?></h1>
	<img id="slider" src="images/<? echo $res[0]['image']?>Front1.jpg" atr="<? echo utf8_encode($res[0]['animalName'])?>" width="300" height="360" class="animalFront">
	<div id="menu">
			<p class="buttonInfo" id="infoBtn">Info</p>
			<p class="buttonLive" id="liveBtn">Bor</p>
			<p class="buttonEat" id="eatBtn">Äter</p>
			<p class="buttonExtra" id="extraBtn">Extra</p>
	</div>
	<img id="playText" src="images/speakerOff.png" atr="Högtalare" width="30"  height="30" style="margin: 10px">
	<div id="info" style="display: block;">

			<p class="animalInfo"><? echo utf8_encode($res[0]['info'])?></p>
	</div>
	<div id="live" style="display: none;">
			<p class="animalLive"><? echo utf8_encode($res[0]['bor'])?></p>
	</div>
	<div id="eat" style="display: none;">
			<p class="animalEat"><? echo utf8_encode($res[0]['eats'])?></p>
	</div>
	<div id="extra" style="display: none;">
			<p class="animalExtra"><? echo utf8_encode($res[0]['extra'])?></p>
	</div>

	<?
}
?>
</div>
<?
$path=__DIR__; include('footer.php'); ?>