<?php
    $id_provinsi_terpilih = $_POST["id_provinsi"];
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://pro.rajaongkir.com/api/city?province=".$id_provinsi_terpilih,
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
        $datakota = $array_response["rajaongkir"]["results"];
        
        // echo "<pre>";
        // print_r ($datakota);
        // echo "</pre>";

        echo "<option value=''>Pilih Kabupaten/Kota</option>";

        foreach ($datakota as $key => $tiap_kota)
        {
            echo "<option value='' 
            id_kota='".$tiap_kota["city_id"]."' 
            nama_provinsi='".$tiap_kota["province"]."' 
            nama_kota='".$tiap_kota["city_name"]."' 
            tipe_kota='".$tiap_kota["type"]."' 
            kodepos='".$tiap_kota["postal_code"]."'>";
            echo $tiap_kota["type"]." ";
            echo $tiap_kota["city_name"];
            echo "</option>";
        }
    }
?>