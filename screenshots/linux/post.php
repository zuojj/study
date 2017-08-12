<?php  
    /**
     * [$result 存放json结果]
     * @var array
     */
    $result = array();

    /**
     * [$info 存放info]
     * @var array
     */
    $info = array();


    // init type
    $result['status'] = 0;

    /**
     * [addImageWaterMark 添加图片水印]
     * @param [String] $src    [原图]
     */
    function addImageWaterMark($src, $showText) {
        $waterPath = '../watermark/sogou-logo.png';

        list($src_w, $src_h) = getimagesize($src);
        list($water_w, $water_h) = getimagesize($waterPath);

        $offset_x = 20;
        $offset_y = 30;

        $dest_x = $src_w - $offset_x - $water_w;
        $dest_y = $src_h - $offset_y - $water_h;

        //将图片作为画布
        $img = @imagecreatefromjpeg($src);

        //水印图片
        $watermark = imagecreatefrompng($waterPath);

        //添加水印
        imagecopy($img, $watermark, $dest_x, $dest_y, 0, 0, $water_w, $water_h);

        if($showText) {
            $font = '../watermark/arial.ttf';
            $black = imagecolorallocate($img, 0, 0, 0);
            
            imagettftext($img, 16, 0, $src_w - 220, $src_h - 10, $black, $font, "http://www.sogou.com");
        }
   
        //输出图像
        header("Content-type:image/jpeg");
        imagejpeg($img, $src, 100);

        //销毁图像
        imagedestroy($img);
    }

    if (!empty($_GET['url'])) {  
        $url = urlencode( trim($_GET['url']) ); 
        $width = trim($_GET['width']);
        $height = trim($_GET['height']);
        $format = trim($_GET['format']);
        $quality = trim($_GET['quality']);

        $filePath = './screenshotImg/'.md5($url).'.'.$format;  
        $script = dirname(__FILE__).'/screenshot.js';

        $command = "/usr/bin/sudo /search/phantomjs-2.1.1-linux-x86_64/bin/phantomjs {$script} {$url} {$filePath} {$width} {$height} {$format} {$quality}";
       
        $response = @exec($command, $output, $return_var);  

/*
        print_r('response:');
        print_r($response);
        print_r('****output:****');
        print_r($output);
        print_r('return:');
        print_r($return_var);
*/
        array_push($info, "Command executed: ".($return_var === 0 ? "success" : "fail"));
        array_push($info, "Page loaded: ".($output[0] == 'success' ? "success" : "fail"));
        array_push($info, "Page rendered: ".($output[1] === 'true' ? "success" : "fail"));

        // 类型 format 判断
        if($format !== 'pdf') {
            $result['format'] = 'image';

            // GD 扩展判断
            if(extension_loaded('gd')) {
                if(function_exists('imagecreatefromjpeg')) {
                    addImageWaterMark($filePath, true);        
                } else {
                    array_push($info, "imagecreatefromjpeg function is not available");  
                }
            }else {
                array_push($info, "uninstall gd extension");
            }
        } else {
            $result['format'] = $format;
        }

        // rendered status: [1：成功，其它：失败]
        if($output[1] === 'true' ) {
            $result['status'] = 1;
            $result['path'] = $filePath;
        }

        $result['info'] = $info;
    }else {
        $result['info'] = "URL 不能为空";
    }  

    exit(json_encode($result)); 
?>

