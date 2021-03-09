<?php
header('Content-Type: application/json');

$data = $_POST;

//die(print_r($_POST));

$action = $data['action'];
switch ($action) {
    case 'mail':
        echo json_encode(array(
            'status' => sendMail(),
        ));
        exit();
        break;
    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}

function sendMail()
{

    ob_start();
    ?>
    <table>
        <tr>
            <td>Name:</td>
            <td><?=$_POST['name'] ?></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><?=$_POST['email'] ?></td>
        </tr>
        <tr>
            <td>Message:</td>
            <td><?=$_POST['message'] ?></td>
        </tr>

    </table>
    <?php
    $message = ob_get_contents();
    ob_end_clean();
//    $message = "Name:" . $_POST['name'] . " Email:" . $_POST['email'] . " Message:" . $_POST['message'];

    $to = 'mikhail-seregin@yandex.ru';
    $subject = 'Message from dev-sm.ru';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


    return mail($to, $subject, $message, $headers);

}