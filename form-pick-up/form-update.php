<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Colorlib Templates">
    <meta name="author" content="Colorlib">
    <meta name="keywords" content="Colorlib Templates">

    <!-- Title Page-->
    <title>Au Register Forms by Colorlib</title>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-firestore.js"></script>

    <!-- Icons font CSS-->
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">
    <link href="vendor/bootstrap-5.0.0-beta3-dist/css/bootstrap.min.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="css/main.css" rel="stylesheet" media="all">
</head>

<body>
    <h3 style="text-align: center;">FORM UPDATE DATA ORDER</h3>
    <br>
    <div class="page-wrapper font-poppins">
        <div class="wrapper">
            <div class="card">
                <div class="card-body" id="form-order">
                    <form method="POST" id="order-form">
                        <div class="row row-space">
                            <div class="">
                                <div class="form-group">
                                    <label class="label">No Resi</label>
                                    <input class="form-control" id="input-resi" type="text" name="nomor_resi">
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="">
                                <div class="form-group">
                                    <label class="label">Nama Kurir</label>
                                    <input class="form-control" type="text" name="delivery_courier_name">
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="">
                                <div class="form-group">
                                    <label class="label">Delivery Point</label>
                                    <input class="form-control" type="text" name="delivery_point">
                                </div>
                            </div>
                        </div>
                        </br></br>
                        <div class="p-t-15">
                            <span style="padding-left:20px;">
                            <button class="btn btn--radius-2 btn--blue" type="submit">TAMBAH</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Jquery JS-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>
    <script src="vendor/bootstrap-5.0.0-beta3-dist/js/bootstrap.min.js"></script>

    <!-- Main JS-->
    <script src="js/global.js"></script>

    <script>
        $(document).ready(function(){
            $.ajax({
                type:'post',
                url:'php/dataprovinsi.php',
                success:function(hasil_provinsi)
                {
                    $("select[name=sender_province]").html(hasil_provinsi);
                }
            });

            $("select[name=sender_province]").on("change",function(){
                //get province_id from private attribute
                var id_provinsi_terpilih = $('option:selected', this).attr("id_provinsi");
                $.ajax({
                    type:'post',
                    url:'php/datakota.php',
                    data:'id_provinsi='+id_provinsi_terpilih,
                    success:function(hasil_kota)
                    {
                        //console.log(hasil_kota);
                        $("select[name=sender_city]").html(hasil_kota);
                    }
                })
                //alert(id_provinsi_terpilih);
            });

            $("select[name=sender_city]").on("change",function(){
                //get province_id from private attribute
                var id_kota_terpilih = $('option:selected', this).attr("id_kota");
                $.ajax({
                    type:'post',
                    url:'php/datakecamatan.php',
                    data:'id_kota='+id_kota_terpilih,
                    success:function(hasil_kecamatan)
                    {
                        //console.log(hasil_kota);
                        $("select[name=sender_subdistrict]").html(hasil_kecamatan);
                    }
                })
                //alert(id_kota_terpilih);
            });

            $.ajax({
                type:'post',
                url:'php/dataprovinsi.php',
                success:function(hasil_provinsi)
                {
                    $("select[name=receiver_province]").html(hasil_provinsi);
                }
            });

            $("select[name=receiver_province]").on("change",function(){
                //get province_id from private attribute
                var id_provinsi_terpilih = $('option:selected', this).attr("id_provinsi");
                $.ajax({
                    type:'post',
                    url:'php/datakota.php',
                    data:'id_provinsi='+id_provinsi_terpilih,
                    success:function(hasil_kota)
                    {
                        //console.log(hasil_kota);
                        $("select[name=receiver_city]").html(hasil_kota);
                    }
                })
                //alert(id_provinsi_terpilih);
            });

            $("select[name=receiver_city]").on("change",function(){
                //get province_id from private attribute
                var id_kota_terpilih = $('option:selected', this).attr("id_kota");
                $.ajax({
                    type:'post',
                    url:'php/datakecamatan.php',
                    data:'id_kota='+id_kota_terpilih,
                    success:function(hasil_kecamatan)
                    {
                        //console.log(hasil_kota);
                        $("select[name=receiver_subdistrict]").html(hasil_kecamatan);
                    }
                })
                //alert(id_kota_terpilih);
            });
            
            $.ajax({
                type:'post',
                url:'php/dataekspedisi.php',
                success:function(hasil_ekspedisi)
                {
                    $("select[name=tipe_ekspedisi]").html(hasil_ekspedisi);
                    //console.log(hasil_ongkir);
                }
            });

            $("select[name=tipe_ekspedisi]").on("change",function(){
                //get ekspedisi from private attribute
                var ekspedisi_terpilih = $("select[name=tipe_ekspedisi]").val();
                //get id_kota from private attribute
                var kota_awal = $("option:selected","select[name=sender_city]").attr("id_kota");
                //get id_kota from private attribute
                var kota_terpilih = $("option:selected","select[name=receiver_city]").attr("id_kota");
                //get weight from private attibute
                var berat_item = $("input[name=item_weight").val();

                $.ajax({
                    type:'post',
                    url:'php/dataongkir.php',
                    data:'ekspedisi='+ekspedisi_terpilih+'&kota_awal='+kota_awal+'&kota='+kota_terpilih+'&berat='+berat_item+'',
                    success:function(hasil_ongkir)
                    {
                        //console.log(hasil_ongkir);
                        $("select[name=tipe_paket]").html(hasil_ongkir);
                    }
                })
            });

            $("select[name=sender_city]").on("change",function(){
                var prov = $("option:selected",this).attr("nama_provinsi");
                var kota = $("option:selected",this).attr("nama_kota");
                var tipe = $("option:selected",this).attr("tipe_kota");
                var kodepos = $("option:selected",this).attr("kodepos");
                
                $("input[name=sender_provinsi").val(prov);
                $("input[name=sender_kota").val(tipe + " " + kota);
                $("input[name=sender_postalcode").val(kodepos);
            });

            $("select[name=sender_subdistrict]").on("change",function(){
                var kecamatan = $("option:selected",this).attr("nama_kecamatan");
            });

            $("select[name=receiver_city]").on("change",function(){
                var prov = $("option:selected",this).attr("nama_provinsi");
                var kota = $("option:selected",this).attr("nama_kota");
                var tipe = $("option:selected",this).attr("tipe_kota");
                var kodepos = $("option:selected",this).attr("kodepos");
                
                $("input[name=receiver_provinsi").val(prov);
                $("input[name=receiver_kota").val(tipe + " " + kota);
                $("input[name=receiver_postalcode").val(kodepos);
            });

            $("select[name=receiver_subdistrict]").on("change",function(){
                var kecamatan = $("option:selected",this).attr("nama_kecamatan");
            });

            // $("input[name=cost]").on("change",function(){
            //     var weight = $("input[name=item_weight").val();

            //     $("input[name=cost").val(10000*weight);
            // });

            $("select[name=tipe_paket]").on("change",function(){
                var ongkir = $("option:selected",this).attr("ongkir");

                $("input[name=cost").val(ongkir);
            });

        });
    </script>

    <script>
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyAH3e9JE6Oj8qXVvk6KiCWF_spKN3ZNxhs",
            authDomain: "iai-lancar-jaya.firebaseapp.com",
            databaseURL: "https://iai-lancar-jaya-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "iai-lancar-jaya",
            storageBucket: "iai-lancar-jaya.appspot.com",
            messagingSenderId: "686161300474",
            appId: "1:686161300474:web:23dfa1aa8830d6df9c3243",
            measurementId: "G-RF8L7X58BQ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true});
    </script>
    <script src="js/update.js"></script>

</body><!-- This templates was made by Colorlib (https://colorlib.com) -->

</html>
<!-- end document-->