<?php 
    
    function conection() {
        try {
            
            //DATABASE CONFIG
            
            $HOST = "localhost";
            $DBNAME = "crocs";
            $DBUSER = "root";
            $PASSWORD = "";

            $mysqli = new mysqli($HOST, $DBUSER , $PASSWORD, $DBNAME);
            
            if ($mysqli->connect_error)
            {
                echo "
                    <div class='error__messages'>
                        <div class='error__message'>
                            <div class='error__title'>
                                <strong>ERROR:</strong> No se estableci&oacute; la conexi&oacute;n. 
                            </div>
                            <div class='error__information'>
                                ". mysqli_connect_error() ."
                            </div>
                        </div>
                    </div>
                ";
                die();
                return "";
            }
            
            return $mysqli;

        } catch (Exception $e) {
            echo "¡Error!: {$e->getMessage()}<br />";
            die();
        }
    }

?>