<?php
$ekspedisi = $_POST["ekspedisi"];
$kotaawal = $_POST["kota_awal"];
$kota = $_POST["kota"];
$berat = $_POST["berat"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://pro.rajaongkir.com/api/cost",
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "origin=".$kotaawal."&originType=city&destination=".$kota."&destinationType=city&weight=".$berat."&courier=".$ekspedisi,
  CURLOPT_HTTPHEADER => array(
    "content-type: application/x-www-form-urlencoded",
    "key: 4ddc0eee8f7cf38b5ec8f2491bbeadd9"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  //convert json to array
  $array_response = json_decode($response, TRUE);
  $databiaya = $array_response["rajaongkir"]["results"]["0"]["costs"];
  
//   echo "<pre>";
//   print_r ($dataongkir);
//   echo "</pre>";

  echo "<option value=''>Pilih Tipe Paket</option>";

    foreach ($databiaya as $key => $tiap_biaya)
    {
        echo "<option 
        paket='".$tiap_biaya["service"]."' 
        ongkir='".$tiap_biaya["cost"]["0"]["value"]."' 
        etd='".$tiap_biaya["cost"]["0"]["etd"]."' 
        >";
        // echo $tiap_ongkir["service"]." ";
        echo number_format($tiap_biaya["cost"]["0"]["value"])." ";
        // echo $tiap_ongkir["cost"]["0"]["etd"];
        echo "</option>";
    }
}

?>