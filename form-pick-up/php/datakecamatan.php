<?php
$id_kota_terpilih = $_POST["id_kota"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://pro.rajaongkir.com/api/subdistrict?city=".$id_kota_terpilih,
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "key: 4ddc0eee8f7cf38b5ec8f2491bbeadd9"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  //echo $response;
  //convert json to array
  $array_response = json_decode($response, TRUE);
  $datakecamatan = $array_response["rajaongkir"]["results"];
  
  // echo "<pre>";
  // print_r ($datakecamatan);
  // echo "</pre>";

  echo "<option value=''>Pilih Kecamatan</option>";

  foreach ($datakecamatan as $key => $tiap_kecamatan)
  {
      echo "<option value='' 
      id_kecamatan='".$tiap_kecamatan["subdistrict_id"]."' 
      nama_kota='".$tiap_kecamatan["city"]."' 
      tipe_kota='".$tiap_kecamatan["type"]."' 
      nama_kecamatan='".$tiap_kecamatan["subdistrict_name"]."' >";
      echo $tiap_kecamatan["subdistrict_name"];
      echo "</option>";
  }
}
?>