<?php 
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
        include_once "../config/config-file.php";
        include_once "../config/query.php";
        
        if (isset($_REQUEST['type']) ) {
            $type = $_REQUEST['type'];
            sleep(1);

            if ($type == 'quote') {

                $firstname = $_REQUEST['firstname'];
                $lastname = $_REQUEST['lastname'];
                $email = $_REQUEST['email'];
                $primaryphone = $_REQUEST['primaryphone'];
                $secondaryphone = $_REQUEST['secondaryphone'];
                $date = $_REQUEST['date'];
                $services = implode(",", $_REQUEST['services']);
                $fromcity = $_REQUEST['fromcity'];
                $tocity = $_REQUEST['tocity'];
                $size = $_REQUEST['size'];
                $description = $_REQUEST['description'];

                $sql = "INSERT INTO quotes (id_quote, firstname, lastname, email, primaryphone, secondaryphone, date, services, fromcity, tocity, size, description) VALUES (NULL, '{$firstname}', '{$lastname}', '{$email}', '{$primaryphone}', '{$secondaryphone}', '{$date}', '{$services}', '{$fromcity}', '{$tocity}', '{$size}', '{$description}')";
                
                $results = insertDataBase($sql);
                
                if ($results) {
                    echo json_encode( array( 'error' => false, 
                    'firstname' => $firstname, 
                    'lastname' => $lastname
                    ) );
                } else {
                    echo json_encode( array( 'error' => true ) );
                }
            }
            if ($type == 'contact') {

                $name = $_REQUEST['name'];
                $phone = $_REQUEST['phone'];
                $email = $_REQUEST['emailContact'];
                $description = $_REQUEST['descriptionContact'];

                $sql = "INSERT INTO contact (id_contact, name, phone, email, description) VALUES (NULL, '{$name}', '{$email}', '{$phone}', '{$description}')";
                
                $results = insertDataBase($sql);
                
                if ($results) {
                    echo json_encode( array( 'error' => false, 
                    'name' => $name, 
                    'email' => $email
                    ) );
                } else {
                    echo json_encode( array( 'error' => true ) );
                }
            }
        }
        // if ( isset($_REQUEST['type']) ) {
        //     $type = $_REQUEST['type'];
        //     sleep(1);
            
        //     if ($type == 'products') {
               
        //         $path = "../../assets/temp/";
        //         $file_name = $_FILES['image']['name'];
        //         $file_tmp = $_FILES['image']['tmp_name'];

        //         $file = $path . $file_name;

        //         if (move_uploaded_file($file_tmp, $file)) {
        //             $msg = "subido";
        //         } else {
        //             $msg = "no subido";
        //         }
                

        //         $name = $_REQUEST['name'];
        //         $description = $_REQUEST['description'];
        //         $price = $_REQUEST['price'];
        //         $image = $URL_PATH . "assets/temp/". $file_name;

        //         $sql = "INSERT INTO products (id_products, name, description, price, image) VALUES (NULL, '{$name}' , '{$description}' , {$price}, '{$image}')";
                
        //         $results = insertDataBase($sql);

        //         if ($results) {
        //             echo json_encode( array( 'error' => false, 'name' => $name ) );
        //         } else {
        //             echo json_encode( array( 'error' => true ) );
        //         }
        //     }
        //     if ($type == 'addresses') {

        //         $user = $_REQUEST['users'];
        //         $address = $_REQUEST['address'];

        //         $sql = "INSERT INTO addresses (id_addresses, address, id_user) VALUES (NULL, '{$address}', $user)";
                
        //         $results = insertDataBase($sql);

        //         if ($results) {
        //             echo json_encode( array( 'error' => false, 'name' => $address ) );
        //         } else {
        //             echo json_encode( array( 'error' => true ) );
        //         }
        //     }
            
        //     if ($type == 'user_type') {
                
        //         $nametype = $_REQUEST['nametype'];
            
        //         $sql = "INSERT INTO user_type (id_type, type) VALUES (NULL, '{$nametype}')";
                
        //         $results = insertDataBase($sql);
                
        //         if ($results) {
        //             echo json_encode( array( 'error' => false, 'name' => $nametype ) );
        //         } else {
        //             echo json_encode( array( 'error' => true ) );
        //         }
        //     }

        //     if ($type == 'users') {
                
        //         $name = $_REQUEST['name'];
        //         $lastname = $_REQUEST['lastname'];
        //         $email = $_REQUEST['correo'];
        //         $username = $_REQUEST['username'];
        //         $password = password_hash($_REQUEST['password'], PASSWORD_DEFAULT);
        //         $phone = $_REQUEST['phone'];
        //         $id_type = $_REQUEST['user_type'];
        //         $token = bin2hex(random_bytes(64));

        //         $sql = "INSERT INTO users (id_user, name, lastname, correo, username, password, phone, id_type, token) VALUES (NULL, '{$name}', '{$lastname}', '{$email}', '{$username}', '{$password}', '{$phone}', {$id_type}, '{$token}')";
                
        //         $results = insertDataBase($sql);
                
        //         if ($results) {
        //             echo json_encode( array( 'error' => false, 'name' => $username ) );
        //         } else {
        //             echo json_encode( array( 'error' => true ) );
        //         }
        //     }


            // echo json_encode( array( 'error' => false, 'type' => $_REQUEST['type'] ) );
        // }
    }
?>