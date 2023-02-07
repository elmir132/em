<?php
  $apiUrl = "https://api-mainnet.magiceden.dev/v2/collections/degods/stats";
  $response = file_get_contents($apiUrl);
  header('Content-Type: application/json');
  echo $response;
?>